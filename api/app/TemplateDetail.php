<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TemplateDetail extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'template_id',
        'option_id',
        'setting_id',
        'selected'
    ];

    public function option()
    {
        return $this->hasOne('App\Option');
    }

}
