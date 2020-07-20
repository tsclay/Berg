<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SessionController extends Controller
{
  public function store()
  {
    if (auth()->attempt(request(['email', 'password'])) == false) {
      return back()->withErrors([
        'message' => 'The email or password is incorrect, please try again'
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
