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
  <div class="container">
    <div id="calculator"></div>
    <div id="staff-notation"></div>
  </div>
  <script type="text/javascript" src="/js/app.js"></script>
  <script src="https://unpkg.com/vexflow/releases/vexflow-min.js"></script>
  <script>
    const vf = new Vex.Flow.Factory({
      renderer: {
        elementId: 'boo',
        width: 500,
        height: 200
      }
    })

    const score = vf.EasyScore()
    const system = vf.System()

    system
      .addStave({
        voices: [
          score.voice(score.notes('C5/q, Bb4/q, A4/h', {
            stem: 'up'
          })),
          score.voice(score.notes('G4/h, A4/h', {
            stem: 'down'
          }))
        ]
      })
      .addClef('treble')
      .addTimeSignature('4/4')
      .addKeySignature('D')

    vf.draw()
  </script>
</body>

</html>