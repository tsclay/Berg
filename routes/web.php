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

// Get the login page
Route::get('/login', 'SessionController@index')->name('login');

// Get the home page
Route::get('/home', 'AppController@index')->name('home');

// Handle login
Route::post('/login', 'SessionController@store')->name('login');

// Create new user; 
Route::post('/register', 'RegisterController@store')->name('register');

Route::post('/save/set/{user_id}', 'AppController@save');

// Handle logout
Route::get('/logout', 'SessionController@destroy')->name('logout');

Route::get('/account', 'AccountController@index')->name('account');

Route::post('/account', 'AccountController@giveUser')->name('account');

Route::put('/account/update', 'AccountController@updateUser')->name('update');
