// TODO: Write your function in this file
function fizzbuzz(lower, upper) {
  const theArray = []
  for (let i = lower; i <= upper; i++) {
    if (i % 15 === 0) {
      theArray.push('FizzBuzz')
    } else if (i % 5 === 0) {
      theArray.push('Buzz')
    } else if (i % 3 === 0) {
      theArray.push('Fizz')
    } else {
      theArray.push(i)
    }
  }
  return theArray
}

// TODO: Change undefined below to the name of your function
module.exports = fizzbuzz
