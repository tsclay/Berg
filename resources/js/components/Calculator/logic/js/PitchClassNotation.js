const pitchClass = {
  noteNames: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
  enharmonics: [
    'B#',
    'Db',
    'D',
    'Eb',
    'E',
    'E#',
    'Gb',
    'G',
    'Ab',
    'A',
    'Bb',
    'Cb'
  ],
  translate: (set) => {
    const setNotes = []
    for (let i = 0; i < set.length; i++) {
      if (pitchClass.preferFlats === false) {
        const index = set[i]
        setNotes.push(pitchClass.noteNames[index])
      } else if (pitchClass.preferFlats === true) {
        const index = set[i]
        let noteValue = pitchClass.noteNames[index]
        if (noteValue.includes('#') === true) {
          noteValue = pitchClass.enharmonics[index]
          setNotes.push(noteValue)
        } else {
          setNotes.push(pitchClass.noteNames[index])
        }
      }
    }
    console.log(setNotes)
  },
  preferFlats: false,
  // The following will be a setting that if 'true' will tell the program to scan the key collections below and return a pop up that lets the user know that their set is most similar to a given key
  scanForKeyRelation: false
}

pitchClass.translate([0, 2, 4, 5, 6, 9, 10])

const keyCollections = {
  C_major: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
  C_harmonic_minor: ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'B'],
  C_melodic_minor: ['C', 'D', 'Eb', 'F', 'G', 'A', 'B'],
  Csharp_major: ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#'],
  Csharp_harmonic_minor: ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B#'],
  Csharp_melodic_minor: ['C#', 'D#', 'E', 'F#', 'G#', 'A#', 'B#'],
  Dflat_major: ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'],
  Dflat_harmonic_minor: ['Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bbb', 'C'],
  Dflat_melodic_minor: ['Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bb', 'C'],
  D_major: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
  D_harmonic_minor: ['D', 'E', 'F', 'G', 'A', 'Bb', 'C#'],
  D_melodic_minor: ['D', 'E', 'F', 'G', 'A', 'B', 'C#'],
  Eflat_major: ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
  Eflat_harmonic_minor: ['Eb', 'F', 'Gb', 'Ab', 'Bb', 'Cb', 'D'],
  Eflat_melodic_minor: ['Eb', 'F', 'Gb', 'Ab', 'Bb', 'C', 'D'],
  E_major: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
  E_harmonic_minor: ['E', 'F#', 'G', 'A', 'B', 'C', 'D#'],
  E_melodic_minor: ['E', 'F#', 'G', 'A', 'B', 'C#', 'D#'],
  F_major: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
  F_harmonic_minor: ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'E'],
  F_melodic_minor: ['F', 'G', 'Ab', 'Bb', 'C', 'D', 'E'],
  Fsharp_major: ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'],
  Fsharp_harmonic_minor: ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E#'],
  Fsharp_melodic_minor: ['F#', 'G#', 'A', 'B', 'C#', 'D#', 'E#'],
  Gflat_major: ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F'],
  Gflat_harmonic_minor: ['Gb', 'Ab', 'Bbb', 'Cb', 'Db', 'Ebb', 'F'],
  Gflat_melodic_minor: ['Gb', 'Ab', 'Bbb', 'Cb', 'Db', 'Eb', 'F'],
  G_major: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
  G_harmonic_minor: ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F#'],
  G_melodic_minor: ['G', 'A', 'Bb', 'C', 'D', 'E', 'F#'],
  Gsharp_major: ['G#', 'A#', 'B#', 'C#', 'D#', 'E#', 'Fx'],
  Gsharp_harmonic_minor: ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'Fx'],
  Gsharp_melodic_minor: ['G#', 'A#', 'B', 'C#', 'D#', 'E#', 'Fx'],
  Aflat_major: ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],
  Aflat_harmonic_minor: ['Ab', 'Bb', 'Cb', 'Db', 'Eb', 'Fb', 'G'],
  Aflat_melodic_minor: ['Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F', 'G'],
  A_major: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
  A_harmonic_minor: ['A', 'B', 'C', 'D', 'E', 'F', 'G#'],
  A_melodic_minor: ['A', 'B', 'C', 'D', 'E', 'F#', 'G#'],
  Asharp_major: ['A#', 'B#', 'Cx', 'D#', 'E#', 'Fx', 'Gx'],
  Asharp_harmonic_minor: ['A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'Gx'],
  Asharp_melodic_minor: ['A#', 'B#', 'C#', 'D#', 'E#', 'Fx', 'Gx'],
  Bflat_major: ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
  Bflat_harmonic_minor: ['Bb', 'C', 'Db', 'Eb', 'F', 'Gb', 'A'],
  Bflat_melodic_minor: ['Bb', 'C', 'Db', 'Eb', 'F', 'G', 'A'],
  B_major: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
  B_harmonic_minor: ['B', 'C#', 'D', 'E', 'F#', 'G', 'A#'],
  B_melodic_minor: ['B', 'C#', 'D', 'E', 'F#', 'G#', 'A#'],
  Cflat_major: ['Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bb'],
  Cflat_harmonic_minor: ['Cb', 'Db', 'Ebb', 'Fb', 'Gb', 'Abb', 'Bb'],
  Cflat_melodic_minor: ['Cb', 'Db', 'Ebb', 'Fb', 'Gb', 'Ab', 'Bb']
}

// If set inputted has at least 1 sharp and no flats
const sharpMajorKeys = {
  // Major: G D A E B F# C#
  G_major: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
  D_major: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
  A_major: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
  E_major: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
  B_major: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
  Fsharp_major: ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'],
  Csharp_major: ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#']
}

// If inputted set has at least 1 sharp and no flats
const sharpMinorKeys = {
  // Minor: E B F# C# G# d# a#
  A_harmonic_minor: ['A', 'B', 'C', 'D', 'E', 'F', 'G#'],
  A_melodic_minor: ['A', 'B', 'C', 'D', 'E', 'F#', 'G#'],
  E_harmonic_minor: ['E', 'F#', 'G', 'A', 'B', 'C', 'D#'],
  E_melodic_minor: ['E', 'F#', 'G', 'A', 'B', 'C#', 'D#'],
  B_harmonic_minor: ['B', 'C#', 'D', 'E', 'F#', 'G', 'A#'],
  B_melodic_minor: ['B', 'C#', 'D', 'E', 'F#', 'G#', 'A#'],
  Fsharp_harmonic_minor: ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E#'],
  Fsharp_melodic_minor: ['F#', 'G#', 'A', 'B', 'C#', 'D#', 'E#'],
  Csharp_harmonic_minor: ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B#'],
  Csharp_melodic_minor: ['C#', 'D#', 'E', 'F#', 'G#', 'A#', 'B#'],
  Gsharp_harmonic_minor: ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'Fx'],
  Gsharp_melodic_minor: ['G#', 'A#', 'B', 'C#', 'D#', 'E#', 'Fx']
}

// If inputted set has at least 1 flat and no sharps
const flatMajorKeys = {
  // Major: F Bb Eb Ab Db Gb Cb
  F_major: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
  Bflat_major: ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
  Eflat_major: ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
  Aflat_major: ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],
  Dflat_major: ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'],
  Gflat_major: ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F'],
  Cflat_major: ['Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bb']
}

// If inputted set has at least 1 flat and some sharps
const flatMinorKeys = {
  // D G C F Bb Eb Ab
  D_harmonic_minor: ['D', 'E', 'F', 'G', 'A', 'Bb', 'C#'],
  D_melodic_minor: ['D', 'E', 'F', 'G', 'A', 'B', 'C#'],
  G_harmonic_minor: ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F#'],
  G_melodic_minor: ['G', 'A', 'Bb', 'C', 'D', 'E', 'F#'],
  C_harmonic_minor: ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'B'],
  C_melodic_minor: ['C', 'D', 'Eb', 'F', 'G', 'A', 'B'],
  F_harmonic_minor: ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'E'],
  F_melodic_minor: ['F', 'G', 'Ab', 'Bb', 'C', 'D', 'E'],
  Bflat_harmonic_minor: ['Bb', 'C', 'Db', 'Eb', 'F', 'Gb', 'A'],
  Bflat_melodic_minor: ['Bb', 'C', 'Db', 'Eb', 'F', 'G', 'A'],
  Eflat_harmonic_minor: ['Eb', 'F', 'Gb', 'Ab', 'Bb', 'Cb', 'D'],
  Eflat_melodic_minor: ['Eb', 'F', 'Gb', 'Ab', 'Bb', 'C', 'D'],
  Aflat_harmonic_minor: ['Ab', 'Bb', 'Cb', 'Db', 'Eb', 'Fb', 'G'],
  Aflat_melodic_minor: ['Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F', 'G']
}
// array = [];
// for (i = 0; i < pitchClass.noteNames.length; i++) {
// 	lowerLetter = pitchClass.noteNames[i].toLowerCase();
// 	array.push(lowerLetter);
// }
// console.log(array);
