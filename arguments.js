let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// default arguments

let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

const tipCalc = function(bill, tipRate = 0.2) {
    return `A ${tipRate * 100}% tip on $${bill} would be $${bill * tipRate}.`
}

console.log(tipCalc(100))
console.log(tipCalc(40, 0.25))

