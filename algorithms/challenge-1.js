unction countTruthy(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            result.push(arr[i])
        }
    } return result.length
}
console.log(countTruthy([6, 3, 0, 30, 7]))   //  4
console.log(countTruthy(["", 3, 0, 30, 7]))  // 3
console.log(countTruthy(["", 0, 0, undefined, 7]))  //1
