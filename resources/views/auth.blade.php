<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  @include('includes.head')

  <title>Berg | Register</title>

</head>

<body>

  <div class="h-screen flex flex-col items-center container mx-auto" id="user-auth" @error('login_failed') login="{{$errors->first('login_failed')}}" @endif @error('firstName') firstName="{{$errors->first('firstName')}}" @endif @error('lastName') lastName="{{$errors->first('lastName')}}" @endif @error('email') email="{{$errors->first('email')}}" @endif @error('password') password="{{$errors->first('password')}}" @endif @error('username') username="{{$errors->first('username')}}" @endif></div>
  <script type="text/javascript" src="/js/app.js"></script>
</body>

</html>