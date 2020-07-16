export default class Transformations {
  constructor(userSet) {
    this.sortedSet = userSet.sort((a, b) => a - b)
    this.transpositions = this.getTranspositions()
    this.inversions = this.getInversions()
    this.isSymmetrical = this.isSymmetrical()
  }

  getTranspositions() {
    const arrayCopy = this.sortedSet.slice(0)
    let resultSet = []
    let idxValue = 0
    const transpositions = []

    for (let i = 0; i < 12; i++) {
      for (let j = 0; j < arrayCopy.length; j++) {
        idxValue = arrayCopy[j] + i
        if (idxValue >= 12) {
          idxValue %= 12
        }
        resultSet.push(idxValue)
      }
      // console.log(resultSet);
      transpositions.push(resultSet)
      resultSet = []
    }
    return transpositions
  }

  transposeSet(semitones = 0) {
    const transposedArray = this.sortedSet.slice(0)
    for (let i = 0; i < transposedArray.length; i++) {
      transposedArray[i] += semitones
      if (transposedArray[i] >= 12) {
        transposedArray[i] %= 12
      }
    }
    return transposedArray
  }

  invertSet(invCenter = 0) {
    const invertedArray = this.sortedSet.slice(0)
    for (let i = 0; i < invertedArray.length; i++) {
      invertedArray[i] = 12 - invertedArray[i] + invCenter
      if (invertedArray[i] >= 12) {
        invertedArray[i] %= 12
      }
    }
    return invertedArray
  }

  // Fixed invert and transpose methods; now, just gotta fix getInversions without breaking the rest
  getInversions() {
    const invertedArray = this.sortedSet.slice(0)
    let resultSet = []
    let idxValue = 0
    const transpositions = []

    for (let i = 0; i < invertedArray.length; i++) {
      invertedArray[i] = 12 - invertedArray[i]
      if (invertedArray[i] >= 12) {
        invertedArray[i] %= 12
      }
    }

    for (let i = 0; i < 12; i++) {
      for (let j = 0; j < invertedArray.length; j++) {
        idxValue = invertedArray[j] + i
        if (idxValue >= 12) {
          idxValue %= 12
        }
        resultSet.push(idxValue)
      }
      // console.log(resultSet);
      transpositions.push(resultSet)
      resultSet = []
    }
    return transpositions
  }

  isSymmetrical() {
    const props = {
      isSymmetrical: false,
      transposedMatches: {},
      inversionMatches: {}
    }
    const sortedSetStr = this.sortedSet.join('')

    for (let i = 0; i < this.transpositions.length; i++) {
      const transposeClone = this.transpositions[i].slice(0)
      const transposedSetStr = transposeClone.sort((a, b) => a - b).join('')

      const invertClone = this.inversions[i].slice(0)
      const invertedSetStr = invertClone.sort((a, b) => a - b).join('')

      if (transposedSetStr.includes(sortedSetStr)) {
        props.transposedMatches[`t${i}`] = this.transpositions[i]
      }
      if (invertedSetStr.includes(sortedSetStr)) {
        props.inversionMatches[`t${i}i`] = this.inversions[i]
      }
    }
    if (
      Object.keys(props.transposedMatches).length > 0 ||
      Object.keys(props.inversionMatches).length > 0
    ) {
      props.isSymmetrical = true
    }

    return props
  }
}

// const set = new Transformations([0, 3, 7, 11])

// console.log(JSON.stringify(set, null, '\t'))
