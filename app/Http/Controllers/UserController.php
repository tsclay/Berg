<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function create(Request $request)
    {
        $username = $request->username;
        $email = $request->email;
        $first_name = $request->firstName;
        $last_name = $request->lastName;
        $password = $request->password;
        var_dump($username, $email, $first_name, $last_name, $password);
    }
}
