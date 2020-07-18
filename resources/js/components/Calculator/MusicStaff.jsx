/* eslint-disable indent */
import React, { useEffect } from 'react'
import Vex from 'vexflow'
import { pitchClass } from './logic/js/PitchClassNotation'

const div = document.getElementById('music-content')
const renderer = new Vex.Flow.Renderer(div, Vex.Flow.Renderer.Backends.SVG)
// And get a drawing context:
const context = renderer.getContext()

// Create a stave at position 10, 40 of width 400 on the canvas.
const stave = new Vex.Flow.Stave(10, 40, 900)

console.log('this code is executing')
// Size our SVG:
renderer.resize(1000, 200)

// Add a clef and time signature.
stave.addClef('treble')

// Connect it to the rendering context and draw!

const drawNotes = (context, stave, set) => {
  const pitches = pitchClass.translate(set)
  // const group = context.openGroup()
  // context.svg.removeChild(group)

  const notes = pitches.map(p => {
    return p.length > 1
      ? new Vex.Flow.StaveNote({
          clef: 'treble',
          keys: [`${p[0].toLowerCase()}/4`],
          duration: '8'
        }).addAccidental(0, new Vex.Flow.Accidental(`${p.slice(1)}`))
      : new Vex.Flow.StaveNote({
          clef: 'treble',
          keys: [`${p[0]}/4`],
          duration: '8'
        })
  })

  const voice = new Vex.Flow.Voice({ num_beats: notes.length, beat_value: 8 })
  voice.addTickables(notes)

  new Vex.Flow.Formatter().joinVoices([voice]).format([voice], 400)

  voice.draw(context, stave)
  // context.closeGroup()

  // voice.draw(context, stave)

  // Vex.Flow.Formatter.FormatAndDraw(context, stave, notes)
}

const MusicStaff = props => {
  const { set, firstLoad } = props
  const oneShot = true

  let group = 'ball'

  useEffect(() => {
    if (firstLoad) {
      stave.setContext(context).draw()
      console.log(firstLoad)
    } else if (!firstLoad && set.length > 0) {
      group = context.openGroup()
      drawNotes(context, stave, set)
      context.closeGroup()
    }

    return () => {
      if (typeof group !== 'string') context.svg.removeChild(group)
      // else div.innerHTML = ''
    }
  })

  return null
  // return (
  //   <div>
  //     <h3>Staff Container</h3>
  //     <div id="music-content" />
  //   </div>
  // )
}

export default MusicStaff
