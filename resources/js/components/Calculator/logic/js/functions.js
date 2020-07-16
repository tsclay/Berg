function getTranspositions(userSet) {
  const arrayCopy = userSet
  let resultSet = []
  let idxValue = 0

  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < userSet.length; j++) {
      userSet = arrayCopy
      idxValue = userSet[j] + i
      idxValue >= 12 ? (idxValue %= 12) : idxValue
      resultSet.push(idxValue)
    }
    console.log(resultSet)
    resultSet = []
  }
}

function transposeSet(userSet, semitones = 0) {
  for (i = 0; i < userSet.length; i++) {
    userSet[i] += semitones
    if (userSet[i] >= 12) {
      userSet[i] %= 12
    }
  }
  return userSet
}

function invertSet(userSet, invCenter = 0) {
  for (i = 0; i < userSet.length; i++) {
    userSet[i] = 12 - userSet[i] + invCenter
    if (userSet[i] >= 12) {
      userSet[i] %= 12
    }
  }
  return userSet
}

function getInversions(userSet) {
  userSet = invertSet(userSet)
  return getTranspositions(userSet)
}

// getTranspositions([2, 0, 4, 9]);
// getInversions([0, 4, 2, 1, 5]);
// // getTranspositions([0, 2, 4, 5, 6]);

function getNormalForm(userSet) {
  debugger
  // Put in ascending order
  userSet.sort(function (a, b) {
    return a - b
  })
  // Copy orig. array for rotating
  const newArray = [...userSet]
  newArray.unshift(newArray[newArray.length - 1])
  newArray.pop()
  // Find the smallest sum; tells us which numbers are outers
  const sums = []
  for (i = 0; i < userSet.length; i++) {
    sum = newArray[i] - userSet[i] + 12
    sum >= 12 ? (sum %= 12) : sum
    sums.push(sum)
  }
  // Check for duplicates of minimum sum
  sumsMin = Math.min.apply(null, sums)
  minDuplicates = []
  for (i = 0; i < sums.length; i++) {
    if (sums[i] === sumsMin) {
      minDuplicates.push(sums[i])
    }
  }
  console.log(minDuplicates, newArray, userSet, sums)
  if (minDuplicates.length > 1) {
    // If each item is equal to sum min value
    for (let i = 0; i < minDuplicates.length; i++) {
      if (minDuplicates[i] !== sumsMin) {
        break
      }
      if (minDuplicates[i] === sumsMin) {
        continue
      }
      if (minDuplicates[i] === sumsMin && i === minDuplicates.length - 1) {
        return console.log(userSet, 'if the set is fully symmetrical')
      }
    }
  }

  // If no duplicates, and the duplicate found matches the value of the last index of sums
  else if (minDuplicates.length === 1) {
    if (sumsMin === sums[sums.length - 1]) {
      return console.log(newArray, 'from minDuplicates')
    }
    // If min value is not the last index of sums
    for (let i = 0; i < sums[sums.length - 2]; i++) {
      if (sumsMin === sums[i]) {
        rotateIdx = i
      }
    }
    // Rotate as needed
    while (rotateIdx < userSet.length) {
      userSet.unshift(userSet.pop())
      rotateIdx++
    }
    return console.log(
      userSet,
      'userSet after figuring out where the min sum is and rotating'
    )
  }
  // When there are duplicates of min sum value
}

getNormalForm([0, 4, 8])

// sortSet([0, 3, 4]);
function getSetType(userSet) {}
