<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta name="user-id" content="{{auth()->user()->id}}">

  <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
  <link rel="stylesheet" href="/css/main.css">

  <title>Account</title>
</head>

<body>
  @include('includes.nav')
  <h4>Hello, {{auth()->user()->first_name}}</h4>
  <div id="account-info"></div>
  <script type="text/javascript" src="/js/app.js"></script>
</body>

</html>