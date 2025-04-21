

// let index = 0
// while (index <= 10) {
//     console.log(`values of index is ${index}`);
//     index = index + 2

// }
    
// let myarray = ['flash', 'batman','suora']
// let arr = 0
// while (arr < myarray.length) {
//     console.log(`value is ${myarray[arr]}`);
//     arr = arr + 2
    
// }

let score = 11

do {
    // console.log(`score is ${score}`);
    score++
} while (score <= 10);





const arr = [1,2,3,4,5]

for (const num  of arr) {
    // console.log(num);
    
}
const greeting = 'hello world'
for (const greet of greeting) {
    // console.log(`each char is ${greet}`);
    
}


// Maps
const map = new Map()
map.set('IN',"India")
map.set('USA',"united states")
map.set('fr',"france")
// console.log(map);

const programming = ["js","rb","py","java","cpp"]
for (const key in programming ){
    // console.log(programming[key]);
    
}

const mynums = [1,2,3,4,5,6,7,8,9, 10]
// const newnums = mynums.filter((number) => number > 4)
// console.log(newnums);


const mynumber = [1,2,3,4,5,6,7,8,9,10]
const newNums = mynums
        .map((num )=> {return num * 10 })
        .map((num) => num + 1 )
console.log(newNums);
                                                    