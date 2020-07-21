<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
  public function index()
  {
    return view('auth');
  }

  public function store(Request $request)
  {

    $validator = Validator::make($request->all(), [
      'firstName' => 'required',
      'lastName' => 'required',
      'email' => ['required', 'email'],
      'password' => ['required', 'min:8'],
      'username' => ['required', 'unique:users']
    ]);

    if ($validator->fails()) {
      return redirect('/register')->withErrors($validator)->withInput();
    };


    $username = $request->username;
    $email = $request->email;
    $first_name = $request->firstName;
    $last_name = $request->lastName;
    $password = $request->password;

    // dd($username, $email, $first_name, $last_name, $password);

    $user = User::create([
      'first_name' => $first_name,
      'last_name' => $last_name,
      'username' => $username,
      'email' => $email,
      'password' => $password
    ]);

    // DB::table('users')->insert([
    //   'first_name' => $first_name,
    //   'last_name' => $last_name,
    //   'username' => $username,
    //   'email' => $email,
    //   'password' => $password
    // ]);

    Schema::create(($username . '_data'), function (Blueprint $table) {
      $table->id();
      $table->integer('user_id');
      $table->string('saved_set');
    });

    auth()->login($user);

    return redirect('/home');
  }
}
