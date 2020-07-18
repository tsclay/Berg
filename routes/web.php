<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

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

Route::get('/auth', function () {
  return view('auth');
});

Route::get('/calculator', function () {
  return view('calculator');
});

// Handle login
Route::post('/auth/find', 'UserController@find');

// Handle the new user; 
Route::post('/auth/create', 'UserController@create');
