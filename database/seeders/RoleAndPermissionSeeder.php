<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleAndPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // Create permissions (optional, for granular admin control)
        Permission::firstOrCreate(['name' => 'access admin', 'guard_name' => 'web']);
        Permission::firstOrCreate(['name' => 'manage users', 'guard_name' => 'web']);

        // Create roles
        $adminRole = Role::firstOrCreate(['name' => 'admin', 'guard_name' => 'web']);
        $userRole = Role::firstOrCreate(['name' => 'user', 'guard_name' => 'web']);

        // Assign all permissions to admin
        $adminRole->givePermissionTo(Permission::all());

        // Create one admin user for testing (optional - remove or change in production)
        $adminUser = User::firstOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Admin User',
                'password' => bcrypt('password'),
            ]
        );
        if (!$adminUser->hasRole('admin')) {
            $adminUser->assignRole('admin');
        }
    }
}
