<nav class="h-30 flex flex-row justify-between bg-gray-500 items-center mb-5">
  <h1 class="text-5xl">Berg</h1>
  <ul class="flex flex-row justify-even">
    @if (auth()->check())
    <li class="ml-4">{{ auth()->user()->first_name}}</li>
    @endif
    <li class="ml-4"><a href="/home">Calculator</a></li>
    <li class="ml-4"><a href="/account">Account</a></li>
    <li class="ml-4"><a href="/logout">Logout</a></li>
  </ul>
</nav>