function calculateGrade(marks) {
    let num = 0;
    let result;
    for (let i = 0; i < marks.length; i++){
        num = num + marks[i];
        if (Math.round(num/marks.length) >= 1 && Math.round(num/marks.length) <= 49) {
            result = "F"
        } else if (Math.round(num/marks.length) >= 50 && Math.round(num/marks.length) <= 59) {
            result = "E"
        } else if (Math.round(num/marks.length) >= 60 && Math.round(num/marks.length) <= 69) {
            result = "D"
        } else if (Math.round(num/marks.length) >= 70 && Math.round(num/marks.length) <= 79) {
            result = "C"
        } else if (Math.round(num/marks.length) >= 80 && Math.round(num/marks.length) <= 89) {
            result = "B"
        } else if (Math.round(num/marks.length) >= 90 && Math.round(num/marks.length) <= 100) {
            result = "A"
        }
    }
    return result 
}
console.log(calculateGrade([80, 80, 70]))// to  return C
console.log(calculateGrade([19, 5, 42, 2, 77]))// to return 'F'
console.log(calculateGrade([59, 80, 40, 2, 78])) //to return 'E'
console.log(calculateGrade([89, 50, 40, 90, 77]))// to return 'D'
