const getGrade = function(studentScore, maxScore) {
    let grade = ''
    let percent = studentScore / maxScore * 100
    if (percent >= 90) {
        grade = 'A'
    } else if (percent >= 80) {
        grade = 'B'
    } else if (percent >= 70) {
        grade = 'C'
    } else if (percent >= 60) {
        grade = 'D'
    } else {
        grade = 'F'
    }

    const plural = grade === 'A' || grade === 'F' ? 'n' : ''

    return `${studentScore}/${maxScore}. You got a${plural} ${grade} (${percent.toFixed(2)}%)`
}

console.log(getGrade(97, 100))
console.log(getGrade(170, 200))
console.log(getGrade(43, 150))
