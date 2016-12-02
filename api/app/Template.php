<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Template extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'type', 'category', 'selected'
    ];

    public function details()
    {
        return $this->hasMany('App\TemplateDetail');
    }
}
