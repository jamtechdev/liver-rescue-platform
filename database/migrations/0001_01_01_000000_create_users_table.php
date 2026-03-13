<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');

            $table->string('phone')->nullable()->unique();

            $table->string('profile_photo')->nullable();
            $table->string('healing_proof_photo')->nullable();
            $table->boolean('profile_approved')->default(false);

            $table->enum('gender', ['male', 'female', 'other', 'prefer_not_to_say'])->nullable();
            $table->unsignedInteger('age')->nullable();

            $table->string('country')->nullable()->default('India');
            $table->string('state')->nullable();
            $table->string('city')->nullable();

            $table->text('symptoms')->nullable();
            $table->enum('healing_stage', ['early', 'middle', 'advanced', 'maintenance', 'unknown'])->nullable();
            $table->unsignedInteger('mm_cleanse_days')->nullable();

            $table->text('bio')->nullable();
            $table->boolean('available_for_consult')->default(false);

            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
