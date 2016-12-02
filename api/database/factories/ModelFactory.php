<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Option::class, function (Faker\Generator $faker) {
    return [
        'name' => ''
    ];
});

$factory->define(App\Setting::class, function (Faker\Generator $faker) {
    return [
        'name' => '',
        'value' => '',
    ];
});

$factory->define(App\Template::class, function (Faker\Generator $faker) {
    return [
        'type' => '',
        'category' => '',
        'selected' => ''
    ];
});

$factory->define(App\TemplateDetail::class, function (Faker\Generator $faker) {
    return [
        'template_id' => 1,
        'option_id' => 1,
        'setting_id' => 1,
        'selected' => false
    ];
});