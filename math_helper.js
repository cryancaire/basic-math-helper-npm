const add = (num1, num2) => {
    return (num1 + num2);
}

const subtract = (num1, num2) => {
    return (num1 - num2);
}
 
const divide = (num1, num2, round = false) => {
    return round ? Math.round((num1 / num2)) : (num1 / num2);
}

const multiply = (num1, num2) => {
    return (num1 * num2);
}

const random = (min = 1, max = 100) => {
    return Math.floor((Math.random()*max) + min);
}

export { 
    add,
    subtract,
    divide,
    multiply,
    random
}