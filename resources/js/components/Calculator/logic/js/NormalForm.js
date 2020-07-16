// 0 2 4 9
// — sumsArray = [7, 10, 10, 9]
// — rotateRightIdx = 1
// — 9 0 2 4

// 0 2 4 9 10
// — sumsArray = [11, 7, 10, 10, 10]
// — rotateRightIdx = 2
// — 9 10 0 2 4

// 0 1 3 4 7 8 10
// — sumsArray = [10, 11, 9, 11, 10, 11, 10]
// — rotateRightIdx = 3
// — 7 8 10 0 1 3 4

// 0 1 2 4 5 7 8 10
// — sumsArray = [10, 11, 10, 11, 10, 11, 11, 10]
// —sums2Array = [9, 12, 9, 12, 9, 12, 12, 8]
// — rotateRightIdx = 8
// — 0 1 2 4 5 7 8 10

export default class NormalForm {
  constructor(userSet) {
    this.sortedSet = userSet.sort((a, b) => a - b)
    this.normalForm = this.rotate(this.sortedSet)
    this.normalFormInvert = this.getInvertNormalForm(this.sortedSet)
    this.primeForm = this.getPrimeForm()
  }

  // This now returns the formatted sums with min being what it is and non-mins being set to 12
  findMinimum(endPoint = 2, flipIdx = 0, startPoint = 1, array) {
    // Set the pointers
    let end = array.length - endPoint
    let start = array.length - startPoint
    const sumsArray = []
    let sum

    // Go through the array, subtract startPoint from endPoint and push diffs to the sumsArray at the same index as the startPoint for that calculation
    while (start >= 0) {
      if (start === flipIdx) {
        end = array.length - startPoint
      }
      sum = array[end] - array[start] + 12
      if (sum >= 12) {
        sum %= 12
      }
      sumsArray.push(sum)
      start--
      end--
    }

    // Change non-minimum matches to 12 and push matches to an array that checks for duplicates of minimum value
    const duplicatesOfMin = []
    const sumMin = Math.min(...sumsArray)
    for (let i = 0; i < sumsArray.length; i++) {
      if (sumsArray[i] === sumMin) {
        sumsArray[i] = sumMin
        duplicatesOfMin.push(sumsArray[i])
      } else {
        sumsArray[i] = 12
      }
    }
    // If there are duplicates, go back and do it again, moving the endPoint and flip points so that we break the tie
    if (duplicatesOfMin.length > 1) {
      const breakTies = this.findMinimum(
        endPoint + 1,
        flipIdx + 1,
        startPoint,
        array
      )
      // console.log('breakTies portion', breakTies)
      return breakTies
    }

    // Return the sums if no duplicates of minimum value
    // console.log('sumsArray at end', sumsArray)
    return {
      result: sumsArray,
      indexOfMin: sumsArray.indexOf(Math.min(...sumsArray))
    }
  }

  rotate(array) {
    console.log('start of rotate()', array)
    const minIndex = this.findMinimum(2, 0, 1, array).indexOfMin
    const normalFormArray = array.slice(0)
    let rotateRightIdx = minIndex + 1

    while (rotateRightIdx > 0) {
      normalFormArray.unshift(normalFormArray.pop())
      rotateRightIdx--
    }

    console.log(normalFormArray)
    return normalFormArray
  }

  getInvertNormalForm(array) {
    let invertedArray = array.slice(0)
    for (let i = 0; i < invertedArray.length; i++) {
      invertedArray[i] = 12 - invertedArray[i]
      if (invertedArray[i] >= 12) {
        invertedArray[i] %= 12
      }
    }

    invertedArray = invertedArray.sort((a, b) => a - b)

    const normalForm = this.rotate(invertedArray)
    console.log('the result of inverting then normaling', normalForm)
    return normalForm
  }

  getPrimeForm() {
    const normTranspose = this.normalForm.slice(0)
    const normInvert = this.normalFormInvert.slice(0)
    const { length } = normTranspose

    if (normTranspose[0] > 0) {
      const first = normTranspose[0]
      for (let i = 0; i < length; i++) {
        normTranspose[i] -= first
        if (normTranspose[i] < 0) {
          normTranspose[i] += 12
        }
      }
    }
    console.log('this is normTranspose: ', normTranspose)
    if (normInvert[0] > 0) {
      const first = normInvert[0]
      for (let i = 0; i < length; i++) {
        normInvert[i] -= first
        if (normInvert[i] < 0) {
          normInvert[i] += 12
        }
      }
    }
    console.log('this is normInvert: ', normInvert)

    for (let i = 0; i < length; i++) {
      if (normInvert[i] === normTranspose[i]) continue
      else if (normInvert[i] > normTranspose[i]) return normTranspose
      break
    }

    return normInvert
  }
}

const someSet = new NormalForm([9, 6, 4, 0])
// console.log(someSet.findMinimum())
console.log(someSet)
