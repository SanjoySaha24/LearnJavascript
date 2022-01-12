arr = [1,2,4,6 , 32]

function avg(a,b,c){
    return a+b+c/3
}

// let a = avg(...arr) takes first 3 no.
// console.log(a) --> 4.33333(output)

//let a = [4, 7, ...arr, 67]
//console.log(a) // --> 4,7, 1,2,4,6 , 32, 67

//concatinate
let a2 = [5, 7, 9];
let a = [...arr, ...a2];
console.log(a) // --> 1,2,4,6 , 32,5, 7, 9

let obj1 ={
    name: "harry",
    class: "5b",
    favLang:"Javascript"
}

 let obj2 = {...obj1, favLang:"Java"};
 console.log(obj2) // --> harry, 5b, Java