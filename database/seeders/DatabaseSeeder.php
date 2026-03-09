<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::firstOrCreate(
            ['loginName' => 'testuser'],
            [
                'userName' => 'Test User',
                'emailOne' => 'test@example.com',
                'password' => bcrypt('password'),
                'status' => 'active',
                'stock_access' => true,
            ]
        );

        $this->call([
            VehicleDetailSeeder::class,
            SparePartsDetailSeeder::class,
            PicturesSeeder::class,
        ]);
    }
}
