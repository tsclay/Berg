/* eslint-disable no-loop-func */
/* eslint-disable indent */
import React, { useEffect, useState } from 'react'
import Vex from 'vexflow'
import { pitchClass } from './logic/js/PitchClassNotation'

const MusicStaff = props => {
  const { set, userID, saveStatus } = props
  const [user, setUser] = useState({})

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

  const getUser = async () => {
    const response = await axios.post(`/account`, { userID })
    const { data } = response
    setUser(data)
  }

  useEffect(() => {
    console.log('the saved status is', saveStatus)
    getUser()
  }, [saveStatus])

  useEffect(() => {
    const div = document.getElementById('music-content')
    const renderer = new Vex.Flow.Renderer(div, Vex.Flow.Renderer.Backends.SVG)

    // Size our SVG:
    renderer.resize(600, 200)

    // And get a drawing context:
    const context = renderer.getContext()

    // Create a stave at position 10, 40 of width 400 on the canvas.
    const stave = new Vex.Flow.Stave(25, 0, 550)

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
    <div id="staff-container">
      <div>Click the note heads after calculation to hear them!</div>
      <div id="music-content" />
      {user.userData ? (
        <div>
          <div>
            {user.userData.length === 0
              ? 'Save a set to see it listed below'
              : 'Saved Sets'}
          </div>
          {user.userData.map(s => (
            <div>{s.saved_set}</div>
          ))}
        </div>
      ) : (
        <div className="px-6 py-4 mx-auto w-1/2">
          <img
            className="block mx-auto"
            src="/assets/loading.gif"
            alt="Fetching data..."
          />
        </div>
      )}
    </div>
  )
}

export default MusicStaff
