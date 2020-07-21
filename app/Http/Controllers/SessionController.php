<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SessionController extends Controller
{
  public function index()
  {
    return view('auth');
  }

  public function store()
  {
    if (auth()->attempt(request(['email', 'password'])) == false) {
      return back()->withErrors([
        'login_failed' => 'The email or password is incorrect. Please try again.'
      ]);
    }

    return redirect()->to('/home');
  }

  public function destroy()
  {
    auth()->logout();

    return redirect()->to('/login');
  }
}
