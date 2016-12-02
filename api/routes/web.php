<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group([
    'middleware' => 'cors',
    'prefix' => 'api'
], function () {
    Route::group(['prefix' => 'payslip-wizard'], function () {
        Route::get('templates', 'PayslipWizardController@templates');
        Route::post('save', 'PayslipWizardController@save');
        Route::post('setActiveTemplate', 'PayslipWizardController@setActiveTemplate');
    });
});