<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
  <link rel="stylesheet" href="/css/main.css">

  <title>Calculator</title>
</head>

<body>
  @include('includes.nav')
  <div class="grid grid-rows-1 grid-cols-2 mx-5">
    <div id="calculator"></div>
    <div id="music-content"></div>
  </div>

  <script type="text/javascript" src="/js/app.js"></script>
</body>

</html>