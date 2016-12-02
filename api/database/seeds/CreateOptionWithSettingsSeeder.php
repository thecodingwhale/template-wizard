<?php

use Illuminate\Database\Seeder;

class CreateOptionWithSettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->createEmployeeDetails();
        $this->createEmploymentDetails();
        $this->createSalaryDetails();
        $this->createEmployerContribution();
        $this->createYearToDateFigures();
    }

    private function createEmployeeDetails()
    {
        $option = factory(App\Option::class, 1)->create([
            'name' => 'Employee Details'
        ]);

        $setting1 = factory(App\Setting::class, 1)->create([
            'name' => 'Employee Name',
            'value' => 'Juan Dela Cruz'
        ]);
        $setting2 = factory(App\Setting::class, 1)->create([
            'name' => 'Employee ID',
            'value' => 'Emp-003'
        ]);
        $setting3 = factory(App\Setting::class, 1)->create([
            'name' => 'Gender',
            'value' => 'Male'
        ]);
        $setting4 = factory(App\Setting::class, 1)->create([
            'name' => 'Photo',
            'value' => ''
        ]);
        $setting5 = factory(App\Setting::class, 1)->create([
            'name' => 'Birth Date',
            'value' => 'January 01, 1985'
        ]);
        $setting6 = factory(App\Setting::class, 1)->create([
            'name' => 'Mobile',
            'value' => '09163251796'
        ]);
        $setting7 = factory(App\Setting::class, 1)->create([
            'name' => 'Telephone',
            'value' => '024568254'
        ]);
        $setting8 = factory(App\Setting::class, 1)->create([
            'name' => 'Email',
            'value' => 'juan.delacruz@email.com'
        ]);
        $setting9 = factory(App\Setting::class, 1)->create([
            'name' => 'Address',
            'value' => 'Makati City, PH'
        ]);
        $setting10 = factory(App\Setting::class, 1)->create([
            'name' => 'Zip',
            'value' => '4114'
        ]);

        $option->settings()->attach([
            $setting1->id,
            $setting2->id,
            $setting3->id,
            $setting4->id,
            $setting5->id,
            $setting6->id,
            $setting7->id,
            $setting8->id,
            $setting9->id,
            $setting10->id
        ]);
    }

    private function createEmploymentDetails()
    {
        $option = factory(App\Option::class, 1)->create([
            'name' => 'Employment Details'
        ]);

        $setting1 = factory(App\Setting::class, 1)->create([
            'name' => 'Rank',
            'value' => 'Rank and File'
        ]);
        $setting2 = factory(App\Setting::class, 1)->create([
            'name' => 'Employment Type',
            'value' => 'Regular'
        ]);
        $setting3 = factory(App\Setting::class, 1)->create([
            'name' => 'Department',
            'value' => 'Sales Department'
        ]);
        $setting4 = factory(App\Setting::class, 1)->create([
            'name' => 'Date Hired',
            'value' => 'June 01, 2015'
        ]);

        $option->settings()->attach([
            $setting1->id,
            $setting2->id,
            $setting3->id,
            $setting4->id
        ]);
    }

    private function createSalaryDetails()
    {
        $option = factory(App\Option::class, 1)->create([
            'name' => 'Salary Details'
        ]);

        $setting1 = factory(App\Setting::class, 1)->create([
            'name' => 'Tax Status',
            'value' => 'Single'
        ]);
        $setting2 = factory(App\Setting::class, 1)->create([
            'name' => 'Hourly Rate',
            'value' => '600 php/hr'
        ]);
        $setting3 = factory(App\Setting::class, 1)->create([
            'name' => 'Payroll Group',
            'value' => 'Payroll Group A'
        ]);
        $setting4 = factory(App\Setting::class, 1)->create([
            'name' => 'Payroll Cycle',
            'value' => 'Monthly'
        ]);
        $setting5 = factory(App\Setting::class, 1)->create([
            'name' => 'Cost Center',
            'value' => 'Cost Center'
        ]);
        $setting6 = factory(App\Setting::class, 1)->create([
            'name' => 'Prepared By',
            'value' => 'John Doe'
        ]);

        $option->settings()->attach([
            $setting1->id,
            $setting2->id,
            $setting3->id,
            $setting4->id,
            $setting5->id,
            $setting6->id
        ]);
    }

    private function createEmployerContribution()
    {
        $option = factory(App\Option::class, 1)->create([
            'name' => 'Employer Contribution'
        ]);

        $setting1 = factory(App\Setting::class, 1)->create([
            'name' => 'SSS',
            'value' => '92.10'
        ]);
        $setting2 = factory(App\Setting::class, 1)->create([
            'name' => 'HDMF',
            'value' => '50.00'
        ]);
        $setting3 = factory(App\Setting::class, 1)->create([
            'name' => 'PhilHealth',
            'value' => '50.00'
        ]);

        $option->settings()->attach([
            $setting1->id,
            $setting2->id,
            $setting3->id
        ]);
    }

    private function createYearToDateFigures()
    {
        $option = factory(App\Option::class, 1)->create([
            'name' => 'Year to Date Figures'
        ]);

        $setting1 = factory(App\Setting::class, 1)->create([
            'name' => 'Gross Income',
            'value' => '92.10'
        ]);
        $setting2 = factory(App\Setting::class, 1)->create([
            'name' => 'Taxable Income',
            'value' => '92.10'
        ]);
        $setting3 = factory(App\Setting::class, 1)->create([
            'name' => 'Taxable Income',
            'value' => '92.10'
        ]);
        $setting4 = factory(App\Setting::class, 1)->create([
            'name' => 'Withholding Tax',
            'value' => '92.10'
        ]);
        $setting5 = factory(App\Setting::class, 1)->create([
            'name' => 'Net Pay',
            'value' => '92.10'
        ]);
        $setting6 = factory(App\Setting::class, 1)->create([
            'name' => 'SSS Employer',
            'value' => '92.10'
        ]);
        $setting7 = factory(App\Setting::class, 1)->create([
            'name' => 'PhilHealth Employer',
            'value' => '92.10'
        ]);
        $setting8 = factory(App\Setting::class, 1)->create([
            'name' => 'HDMF Employer',
            'value' => '92.10'
        ]);
        $option->settings()->attach([
            $setting1->id,
            $setting2->id,
            $setting3->id,
            $setting4->id,
            $setting5->id,
            $setting6->id,
            $setting7->id,
            $setting8->id
        ]);
    }
}
