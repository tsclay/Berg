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

Route::get('/welcome', function () {
  return view('auth');
});

Route::get('/after', function () {
  return view('auth_test');
});

Route::post('/user/create', function (Request $request) {
  // var_dump('Hi there');
  die('hello');
  // $input = $request->all();
});
