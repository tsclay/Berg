<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  @include('includes.head')

  <meta name="user-id" content="{{auth()->user()->id}}">

  <title>Account</title>
</head>

<body>
  @include('includes.nav')
  <h4>Hello, {{auth()->user()->first_name}}</h4>
  <div id="account-info"></div>
  <script type="text/javascript" src="/js/app.js"></script>
</body>

</html>