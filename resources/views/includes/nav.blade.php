<nav class="h-30 flex flex-row justify-between bg-gray-500 items-center mb-5 py-2">
  <img id="logo" src="/assets/logo-berg.png" alt="Berg">
  <ul class="flex flex-row justify-even">
    @if (auth()->check())
    <li class="ml-4">{{ auth()->user()->first_name}}</li>
    @endif
    <li class="ml-4"><a href="/home">Calculator</a></li>
    <li class="ml-4"><a href="/account">Account</a></li>
    <li class="ml-4"><a href="/logout">Logout</a></li>
  </ul>
</nav>