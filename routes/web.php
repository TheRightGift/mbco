<?php

use Illuminate\Support\Facades\Route;

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

// Facebook Login
// Route::get('/login/facebook', [App\Http\Controllers\SocialController::class, 'redirect']);
// Route::get('/login/facebook/callback', [App\Http\Controllers\SocialController::class, 'callback']);
// Route::get('/logout', [App\Http\Controllers\SocialController::class, 'logout']);

// guest routes
Route::view('/{path?}', 'home')->where('path', '.*');
