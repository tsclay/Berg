<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\User;

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

    return redirect('/calculator');
  }

  public function find(Request $request)
  {
    $email = $request->email;
    $password = $request->password;

    // $user = DB::table('users')->where('email', $email)->first();
    $user = User::where('email', $email)->first();

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

  public function save(Request $request)
  {
    $saved_set = $request->set;
    $user_id = $request->user_id;

    // $user = DB::table('users')->where('id', $user_id)->first()->username;
    $user = User::where('id', $user_id)->firstOrFail()->username;

    DB::table($user . '_data')->insert([
      'user_id' => $user_id,
      'saved_set' => $saved_set
    ]);

    dd($saved_set, $user_id, $user);
  }
}
