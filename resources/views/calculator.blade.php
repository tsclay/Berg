<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta name="user-id" content="{{auth()->user()->id}}">

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
  <link rel="stylesheet" href="/css/main.css">

  <!-- MIDI.js files -->
  <script src="/js/MIDI.js/build/MIDI.min.js"></script>
  <!-- polyfill -->
  <script src="/js/MIDI.js/inc/shim/Base64.js" type="text/javascript"></script>
  <script src="/js/MIDI.js/inc/shim/Base64binary.js" type="text/javascript"></script>
  <script src="/js/MIDI.js/inc/shim/WebAudioAPI.js" type="text/javascript"></script>
  <!-- midi.js package -->
  <script src="/js/MIDI.js/js/midi/audioDetect.js" type="text/javascript"></script>
  <script src="/js/MIDI.js/js/midi/gm.js" type="text/javascript"></script>
  <script src="/js/MIDI.js/js/midi/loader.js" type="text/javascript"></script>
  <script src="/js/MIDI.js/js/midi/plugin.audiotag.js" type="text/javascript"></script>
  <script src="/js/MIDI.js/js/midi/plugin.webaudio.js" type="text/javascript"></script>
  <script src="/js/MIDI.js/js/midi/plugin.webmidi.js" type="text/javascript"></script>
  <!-- utils -->
  <script src="/js/MIDI.js/js/util/dom_request_xhr.js" type="text/javascript"></script>
  <script src="/js/MIDI.js/js/util/dom_request_script.js" type="text/javascript"></script>

  <title>Calculator</title>
</head>

<body>
  @include('includes.nav')
  <div id="calculator" class="mx-auto w-4/5"></div>

  <script type="text/javascript" src="/js/app.js"></script>
</body>

</html>