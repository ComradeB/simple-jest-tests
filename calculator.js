const Calculator = (() => {
    
    const add = (num1, num2) => num1 + num2
    const subtract = (num1, num2) => num1 - num2
    const multiply = (num1, num2) => num1 * num2
    const divide = (num1, num2) => num2 === 0 ? new Error("No dividing by 0!") : num1/num2 
    
    return {
        add,
        subtract,
        multiply,
        divide,
    }
})()

module.exports = Calculator