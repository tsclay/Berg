<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>Berg | Register</title>

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
  <link rel="stylesheet" href="/css/main.css">
</head>

<body>
  @include('includes.nav')
  <div class="h-screen flex flex-col items-center container mx-auto" id="user-auth"></div>
  <script type="text/javascript" src="/js/app.js"></script>
</body>

</html>