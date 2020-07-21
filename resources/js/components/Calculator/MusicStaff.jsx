/* eslint-disable indent */
import React, { useEffect } from 'react'
import Vex from 'vexflow'
import { pitchClass } from './logic/js/PitchClassNotation'

const MusicStaff = props => {
  const { set } = props

  const drawNotes = async (context, stave) => {
    const pitches = pitchClass.translate(set)

    const notes = await pitches.map(p => {
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
    const voice = new Vex.Flow.Voice({
      num_beats: notes.length,
      beat_value: 8
    }).addTickables(notes)

    // const formatter = new Vex.Flow.Formatter()
    //   .joinVoices([voice])
    //   .format([voice], 400)

    new Vex.Flow.Formatter().joinVoices([voice]).format([voice], 500)

    voice.draw(context, stave)

    const domNotes = document.getElementsByClassName('vf-stavenote')

    for (let i = 0; i < domNotes.length; i++) {
      domNotes[i].addEventListener('click', () => {
        MIDI.loadPlugin({
          soundfontUrl: '/js/MIDI.js/examples/soundfont/',
          instrument: 'acoustic_grand_piano',
          onprogress(state, progress) {
            console.log(state, progress)
          },
          onsuccess() {
            const delay = 0 // play one note every quarter second
            const note = set[i] + 60 // the MIDI note
            const velocity = 127 // how hard the note hits
            // play the note
            MIDI.setVolume(0, 127)
            MIDI.noteOn(0, note, velocity, delay)
            MIDI.noteOff(0, note, delay + 0.75)
          }
        })
      })
    }

    // Vex.Flow.Formatter.FormatAndDraw(context, stave, notes)
  }

  useEffect(() => {
    const div = document.getElementById('music-content')
    const renderer = new Vex.Flow.Renderer(div, Vex.Flow.Renderer.Backends.SVG)

    // Size our SVG:
    renderer.resize(700, 200)

    // And get a drawing context:
    const context = renderer.getContext()

    // Create a stave at position 10, 40 of width 400 on the canvas.
    const stave = new Vex.Flow.Stave(50, 40, 650)

    // Add a clef and time signature.
    stave.addClef('treble')

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw()

    if (set.length > 0) {
      drawNotes(context, stave)
    }

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
