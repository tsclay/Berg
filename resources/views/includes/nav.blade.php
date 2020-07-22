<nav class="h-30 flex flex-row justify-between bg-gray-500 items-center mb-5 py-2 px-2">
  <img id="logo" src="/assets/logo-berg.png" alt="Berg">

  @if (auth()->check())
  <h4 id="greeter" class="font-bold text-xl text-center">Welcome, {{ auth()->user()->first_name}}</h4>
  @endif

  <ul class="flex flex-row justify-even">

    <li class="ml-10"><a href="/home">Calculator</a></li>
    <li class="ml-10"><a href="/account">Account</a></li>
    <li class="ml-10"><a href="/logout">Logout</a></li>
  </ul>
</nav>