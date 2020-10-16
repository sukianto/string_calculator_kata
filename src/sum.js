module.exports = (strInput) => {
  const strToArray = strInput.split(/[\s,]+/)
  let result = 0
  const negativeNumber = []
  for (const idx in strToArray) {
    const number = parseInt(strToArray[idx]) || 0
    if (number < 0) {
      negativeNumber.push(number)
    }
    if (number < 1000) {
      result = result + number
    }
  }
  if (negativeNumber.length > 0) {
    return `negatives not allowed: ${negativeNumber.join()}`
  }
  return result
}
