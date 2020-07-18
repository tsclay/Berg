/* eslint-disable indent */
import React, { useEffect } from 'react'
import Vex from 'vexflow'
import { pitchClass } from './logic/js/PitchClassNotation'

const MusicStaff = props => {
  const { set } = props

  const drawNotes = (context, stave) => {
    const pitches = pitchClass.translate(set)

    const notes = pitches.map(p => {
      return p.length > 1
        ? new Vex.Flow.StaveNote({
            clef: 'treble',
            keys: [`${p[0].toLowerCase()}/4`],
            duration: '8d'
          })
            .addAccidental(0, new Vex.Flow.Accidental(`${p.slice(1)}`))
            .setContext(context)
            .setStave(stave)
        : new Vex.Flow.StaveNote({
            clef: 'treble',
            keys: [`${p[0]}/4`],
            duration: '8d'
          })
            .setContext(context)
            .setStave(stave)
    })

    Vex.Flow.Formatter.FormatAndDraw(context, stave, notes)
  }

  useEffect(() => {
    // const div = document.createElement('div')
    // div.setAttribute('id', 'svg-container')
    // document.getElementById('music-content').appendChild(div)

    const div = document.getElementById('music-content')
    const renderer = new Vex.Flow.Renderer(div, Vex.Flow.Renderer.Backends.SVG)

    // Size our SVG:
    renderer.resize(1000, 200)

    // And get a drawing context:
    const context = renderer.getContext()

    // Create a stave at position 10, 40 of width 400 on the canvas.
    const stave = new Vex.Flow.Stave(10, 40, 900)

    // Add a clef and time signature.
    stave.addClef('treble')

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw()

    if (set.length > 0) drawNotes(context, stave)

    console.log(stave)

    return () => {
      div.innerHTML = ''
    }
  })

  return (
    <div>
      <h3>Staff Container</h3>
      <div id="music-content" />
    </div>
  )
}

export default MusicStaff
