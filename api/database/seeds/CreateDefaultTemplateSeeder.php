<?php

use Illuminate\Database\Seeder;
use App\Option;
use App\TemplateDetail;

class CreateDefaultTemplateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->createDefaultOnlyTemplates();
        // $this->addCustomTemplates();
    }

    private function createDefaultOnlyTemplates()
    {
        $this->templateFullWidth();
        $this->templateTwoColumn(true);
    }

    private function addCustomTemplates()
    {
        $this->templateFullWidth();
        $this->templateTwoColumn();
        $this->customTemplateTwoColumn();
    }

    private function templateFullWidth()
    {
        $template = factory(App\Template::class, 1)->create([
            'type' => 'full-width',
            'category' => 'default',
            'selected' => false
        ]);

        foreach (Option::all() as $option) {
            foreach ($option->settings as $setting) {
                $selected = false;
                if (
                    ($option->id == 1 && $setting->id == 1) ||
                    ($option->id == 1 && $setting->id == 2) ||
                    ($option->id == 1 && $setting->id == 3) ||
                    ($option->id == 1 && $setting->id == 4) ||
                    ($option->id == 2 && $setting->id == 11) ||
                    ($option->id == 2 && $setting->id == 12) ||
                    ($option->id == 2 && $setting->id == 13) ||
                    ($option->id == 2 && $setting->id == 14)
                ) {
                    $selected = true;
                }
                factory(App\TemplateDetail::class, 1)->create([
                    'template_id' => $template->id,
                    'option_id' => $option->id,
                    'setting_id' => $setting->id,
                    'selected' => $selected
                ]);
            }
        }

    }

    private function templateTwoColumn($selected = false)
    {
        $template = factory(App\Template::class, 1)->create([
            'type' => 'two-column',
            'category' => 'default',
            'selected' => $selected
        ]);

        foreach (Option::all() as $option) {
            foreach ($option->settings as $setting) {
                $selected = false;
                if (
                    ($option->id == 1 && $setting->id == 1) ||
                    ($option->id == 1 && $setting->id == 2) ||
                    ($option->id == 1 && $setting->id == 3) ||
                    ($option->id == 1 && $setting->id == 4) ||
                    ($option->id == 2 && $setting->id == 11) ||
                    ($option->id == 2 && $setting->id == 12) ||
                    ($option->id == 2 && $setting->id == 13) ||
                    ($option->id == 2 && $setting->id == 14)
                ) {
                    $selected = true;
                }
                factory(App\TemplateDetail::class, 1)->create([
                    'template_id' => $template->id,
                    'option_id' => $option->id,
                    'setting_id' => $setting->id,
                    'selected' => $selected
                ]);
            }
        }
    }

    private function customTemplateTwoColumn()
    {
        $template = factory(App\Template::class, 1)->create([
            'type' => 'two-column',
            'category' => 'custom',
            'selected' => true
        ]);

        foreach (Option::all() as $option) {
            foreach ($option->settings as $setting) {
                $selected = false;
                if (
                    ($option->id == 1 && $setting->id == 1) ||
                    ($option->id == 1 && $setting->id == 2) ||
                    ($option->id == 1 && $setting->id == 3) ||
                    ($option->id == 1 && $setting->id == 4) ||
                    ($option->id == 2 && $setting->id == 11) ||
                    ($option->id == 2 && $setting->id == 12) ||
                    ($option->id == 2 && $setting->id == 13) ||
                    ($option->id == 2 && $setting->id == 14) ||
                    ($option->id == 3 && $setting->id == 15) ||
                    ($option->id == 3 && $setting->id == 16) ||
                    ($option->id == 3 && $setting->id == 17) ||
                    ($option->id == 3 && $setting->id == 18) ||
                    ($option->id == 3 && $setting->id == 19) ||
                    ($option->id == 3 && $setting->id == 20)
                ) {
                    $selected = true;
                }
                factory(App\TemplateDetail::class, 1)->create([
                    'template_id' => $template->id,
                    'option_id' => $option->id,
                    'setting_id' => $setting->id,
                    'selected' => $selected
                ]);
            }
        }
    }

}
