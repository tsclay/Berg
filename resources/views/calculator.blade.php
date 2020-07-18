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
  <div id="calculator" class="mx-auto w-4/5"></div>

  <script type="text/javascript" src="/js/app.js"></script>
</body>

</html>