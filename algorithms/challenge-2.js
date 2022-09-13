function FizzBuzz(input) {
    if (input % 3 ==0 && input % 5 == 0) {
        return "fizzbuzz"
    } else if (input % 3 == 0){
        return "fizz"
    } else if (input % 5 == 0){
        return "buzz"
    } else {
        return `Mrs Faith did not specify what to do....lol, because ${input} is not divisible by both 3 and 5 `
    }
}
console.log(FizzBuzz(3))
console.log(FizzBuzz(5))
console.log(FizzBuzz(15))
console.log(FizzBuzz(8))
