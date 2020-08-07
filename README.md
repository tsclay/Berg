# Berg

The app is deployed on Heroku at https://berg-musicapp.herokuapp.com.

## The Namesake

"Berg" is the German word for "mountain", and it is also a common name in Germany. It so happens to be the name of Alban Berg and part name of Arnold Schöenberg, two of the most influential music composers of the 20th century. Fun fact: The former was student of the the latter.

## What does it do?

Simply, Berg is a calculator for pitch-class sets as defined in atonal music theory, a branch of music theory derived from studying the music of composers such as Schöenberg and Berg. This app also will display the music notation of the notes represented by the set the user inputs. So, if a user enters '''024''' then the music notation will display the pitches C, D, and E.

And if you click on the note-heads, you hear MIDI!

Btw, if you want to learn the bare basics of atonal music theory, check it out [here](http://openmusictheory.com/atonal.html).

## What's next?

As it stands, Berg is a proof of concept, a proof that this can be done. I want Berg to one day be a hub of apps that includes the calculator, and these apps would help music students studying for a test and musicians interested in using helper tools to help their creative process. 

## Tech used

- React
- PHP Laravel
- Tailwind CSS
- ESLint for JavaScript/JSX linting
- [VexFlow Music Notation Rendering library](https://www.vexflow.com/)
- [MIDI.js for MIDI playback](https://github.com/mudcube/MIDI.js/)
