<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Option;
use App\Setting;
use App\Template;
use App\TemplateDetail;
use Carbon\Carbon;

class PayslipWizardController extends Controller
{

    public function jsonResponse(array $array)
    {
        return response()->json([
            'data' => $array
        ]);
    }

    public function templates()
    {

        $templates = [];
        foreach (Template::all() as $template) {
            $options = [];
            foreach (Option::all() as $option) {
                $settings = [];
                foreach ($option->settings as $setting) {
                    $detail = TemplateDetail::where([
                        ['template_id',  $template->id],
                        ['option_id',  $option->id],
                        ['setting_id',  $setting->id]
                    ])->first();
                    $settings[] = [
                        'id' => $setting->id,
                        'name' => $setting->name,
                        'value' => $setting->value,
                        'selected' => $detail->selected
                    ];
                }
                $options[] = [
                    'id' => $option->id,
                    'name' => $option->name,
                    'settings' => $settings
                ];
            }
            $templates[] = [
                'id' => $template->id,
                'type' => $template->type,
                'category' => $template->category,
                'selected' => $template->selected,
                'options' => $options
            ];
        }

        return $this->jsonResponse([
            'templates' => $templates
        ]);
    }

    public function save(Request $request)
    {
        $input = json_decode( $request->getContent() );

        Template::where('id', $input->activeIndex)
            ->update(['selected' => false]);

        $template = Template::create([
            'type' => $input->type,
            'category' => 'custom',
            'selected' => true
        ]);

        $templateDetails = [];
        $now = Carbon::now('utc')->toDateTimeString();
        foreach ($input->options as $option) {
            foreach ($option->settings as $setting) {
                $templateDetails[] = [
                    'template_id' => $template->id,
                    'option_id' => $option->id,
                    'setting_id' => $setting->id,
                    'selected' => $setting->selected,
                    'created_at'=> $now,
                    'updated_at'=> $now
                ];
            }
        }

        TemplateDetail::insert($templateDetails);

        return $this->jsonResponse([
            'activeIndex' => $template->id,
            'selected' => true,
            'category' => $template->category
        ]);
    }

    public function setActiveTemplate(Request $request)
    {
        $input = json_decode( $request->getContent() );

        Template::where('selected', 1)->update(['selected' => 0]);
        $template = Template::find($input->templateId);
        $template->update(['selected' => 1]);

        return $this->jsonResponse([
            'template' => $template->toArray()
        ]);
    }
}