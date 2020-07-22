<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  @include('includes.head')

  <title>Berg | Register</title>

</head>

<body>
  <div class="w-1/2 mx-auto mt-10">
    <img src="/assets/logo-berg.png" alt="Berg Logo">
  </div>

  <div class="h-screen flex flex-col items-center mt-10 container mx-auto" id="user-auth" @error('login_failed') login="{{$errors->first('login_failed')}}" @endif @error('firstName') firstName="{{$errors->first('firstName')}}" @endif @error('lastName') lastName="{{$errors->first('lastName')}}" @endif @error('email') email="{{$errors->first('email')}}" @endif @error('password') password="{{$errors->first('password')}}" @endif @error('username') username="{{$errors->first('username')}}" @endif>

  </div>
  <script type="text/javascript" src="/js/app.js"></script>
</body>

</html>