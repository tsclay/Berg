<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\User;

class AccountController extends Controller
{
  public function index()
  {
    if (auth()->user()) {
      return view('account');
    } else {
      return redirect('/login');
    }
  }

  public function giveUser(Request $request)
  {
    $user_id = $request->userID;

    $found_user = DB::table('users')->where('id', $user_id)->first();

    $user_data = DB::table($found_user->username . '_data')->get();

    // return dd($found_user);

    return response()->json([
      "firstName" => $found_user->first_name,
      "lastName" => $found_user->last_name,
      "email" => $found_user->email,
      "username" => $found_user->username,
      "userData" => $user_data
    ], 200);
  }

  public function updateUser(Request $request)
  {
    $user_id = $request->userID;

    DB::table('users')->where('id', $user_id)->update([
      "first_name" => $request->firstName,
      "last_name" => $request->lastName,
      "email" => $request->email
    ]);

    $updatedUser = DB::table('users')->where('id', $user_id)->first();

    return response()->json([
      "firstName" => $updatedUser->first_name,
      "lastName" => $updatedUser->last_name,
      "email" => $updatedUser->email,
      "username" => $updatedUser->username,
    ], 200);
  }
}
