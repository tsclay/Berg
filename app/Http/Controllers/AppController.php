<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\User;

class AppController extends Controller
{
  public function index(Request $request)
  {
    if (auth()->user()) {
      return view('calculator');
    } else {
      return redirect('/login');
    }
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
