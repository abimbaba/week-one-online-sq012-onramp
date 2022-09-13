unction filterList (arr) {
    let integer = []
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] == "number"){
            integer.push(arr[i])
        } 
       
    }return integer
}

console.log(filterList([1,2,'a','b'])) //to return [1,2]
console.log(filterList([1,'a','b',0,15])) //to return [1,0,15]
console.log(filterList([1,2,'aasf','1','123',123])) //to return [1,2,123]
