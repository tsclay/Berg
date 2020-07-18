<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
  public function create(Request $request)
  {
    $username = $request->username;
    $email = $request->email;
    $first_name = $request->firstName;
    $last_name = $request->lastName;
    $password = $request->password;
    // var_dump($username, $email, $first_name, $last_name, $password);

    DB::table('users')->insert([
      'first_name' => $first_name,
      'last_name' => $last_name,
      'username' => $username,
      'email' => $email,
      'password' => $password
    ]);

    return redirect('/calculator');
  }

  public function find(Request $request)
  {
    $email = $request->email;
    $password = $request->password;

    $user = DB::table('users')->where('email', $email)->first();

    if ($user) {
      if ($user->password === $password) {
        // dd('They match!');
        return redirect('/calculator');
      } else {
        // dd('They don\'t match!');
        return redirect('/auth');
      }
    };
  }
}
