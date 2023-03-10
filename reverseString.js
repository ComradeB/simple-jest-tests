function reverseString(string) {
    const array = Array.from(string)
    const arrayTwo = Array.from(string)

    for (let i=0; i < array.length; i++) {
        array[i] = arrayTwo[arrayTwo.length-1-i]
    }
    
    return array.join("")
}

module.exports = reverseString