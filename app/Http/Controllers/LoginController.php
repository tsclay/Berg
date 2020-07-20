<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\User;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
  public function index()
  {
    return view('auth');
  }

  public function find(Request $request)
  {
    $email = $request->email;
    $password = $request->password;

    // $user = DB::table('users')->where('email', $email)->first();
    $user = User::where('email', $email)->first();
    // dd($user);

    if ($user) {
      if (Hash::check($password, $user->password)) {
        // dd('They match!');
        return redirect('/home');
      } else {
        // dd('They don\'t match!');
        return redirect('/login');
      }
    };

    return response()->json(['message' => 'Invalid credentials', "status" => 401], 401);
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

    return response()->json(['message' => 'Set has been saved!', "status" => 200], 200);
  }
}
