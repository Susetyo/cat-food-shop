<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AnimalFoodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('animal_food')->insert([
            'name_product' => 'Royal Cannin',
            'qty' => 20,
            'harga' => '20000' 
        ]);

        DB::table('animal_food')->insert([
            'name_product' => 'Wish Cash',
            'qty' => 22,
            'harga' => '50000'  
        ]);
    }
}
