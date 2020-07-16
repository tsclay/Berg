import React, { useEffect } from 'react'
import Vex from 'vexflow'

const MusicStaff = () => {
  useEffect(() => {
    const vf = new Vex.Flow.Factory({
      renderer: { elementId: 'music-content', width: 500, height: 200 }
    })

    const score = vf.EasyScore()
    const system = vf.System()

    system
      .addStave({
        voices: [
          score.voice(score.notes('Bb4/q, A4/q, C5/q, Bn4/q', { stem: 'up' })),
          score.voice(score.notes('F4/h, G4/h', { stem: 'down' }))
        ]
      })
      .addClef('treble')
      .addTimeSignature('4/4')

    system
      .addStave({
        voices: [
          score.voice(score.notes('Bb4/q, A4/q, C5/q, Bn4/q', { stem: 'up' })),
          score.voice(score.notes('F4/h, G4/h', { stem: 'down' }))
        ]
      })
      .addClef('treble')
      .addTimeSignature('4/4')

    vf.draw()
  })

  return (
    <div>
      <h3>Staff Container</h3>
      <div id="music-content" />
    </div>
  )
}

export default MusicStaff
