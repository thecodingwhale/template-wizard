<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOptionSettingPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('option_setting', function (Blueprint $table) {
            $table->integer('option_id')->unsigned()->index();
            $table->foreign('option_id')->references('id')->on('options')->onDelete('cascade');
            $table->integer('setting_id')->unsigned()->index();
            $table->foreign('setting_id')->references('id')->on('settings')->onDelete('cascade');
            $table->primary(['option_id', 'setting_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('option_setting');
    }
}
