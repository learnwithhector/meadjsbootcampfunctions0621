let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

const convertFahrenheitToCelsius = function(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}

console.log(convertFahrenheitToCelsius(32))
console.log(convertFahrenheitToCelsius(68))