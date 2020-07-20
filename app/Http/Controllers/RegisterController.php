<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;

class RegisterController extends Controller
{
  public function index()
  {
    return view('auth');
  }

  public function create(Request $request)
  {
    $username = $request->username;
    $email = $request->email;
    $first_name = $request->firstName;
    $last_name = $request->lastName;
    $password = $request->password;
    // var_dump($username, $email, $first_name, $last_name, $password);

    User::insert([
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

    return redirect('/home');
  }
}
