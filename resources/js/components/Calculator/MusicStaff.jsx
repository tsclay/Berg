import React, { useEffect } from 'react'
import Vex from 'vexflow'
import { pitchClass } from './logic/js/PitchClassNotation'

const MusicStaff = props => {
  const { set } = props

  useEffect(() => {
    let translatedSet = 'C#5/q, B4, A4, G#4'
    let numerator = 4
    if (set.length > 0) {
      translatedSet = pitchClass.translate(set)

      translatedSet = translatedSet.map(n => {
        const formatted = `${n}4/q`
        return formatted
      })

      translatedSet = translatedSet.join('')
      numerator = set.length
    }

    const vf = new Vex.Flow.Factory({
      renderer: { elementId: 'music-content', width: 500, height: 200 }
    })

    const score = vf.EasyScore()
    const system = vf.System()
    console.log(translatedSet)
    system
      .addStave({
        voices: [score.voice(score.notes(translatedSet, { stem: 'up' }))]
      })
      .addClef('treble')

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
