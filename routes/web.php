<?php

use App\Http\Controllers\LoginController;
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

// For React Router, both register and login routes go to the same page
Route::get('/register', 'RegisterController@index')->name('register');

Route::get('/login', 'LoginController@index')->name('login');

Route::get('/home', 'AppController@index')->name('home');

// Handle login
Route::post('/login', 'LoginController@find')->name('login');

// Handle the new user; 
Route::post('/register', 'RegisterController@create')->name('register');

Route::post('/save/set/{user_id}', 'AppController@save');
