function caesarCipher(string, shiftFactor) {
    const stringArray = Array.from(string)
    const shiftedArray = stringArray.map(letter => {
      if (letter.charCodeAt(0) < 65 || letter.charCodeAt(0) > 122 || letter.charCodeAt(0) > 90 && letter.charCodeAt(0) < 97) return letter
      let newLetterCode = letter.charCodeAt(0) + shiftFactor
      if (newLetterCode > 122) {
      	newLetterCode = 96 + newLetterCode - 122
      } else if (newLetterCode > 90 && newLetterCode < 97) {
      	newLetterCode = 64 + newLetterCode - 90
      }
      return String.fromCharCode(newLetterCode)
    })
    return shiftedArray.join("")
}

module.exports = caesarCipher