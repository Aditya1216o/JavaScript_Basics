// const tinderuser = new Object()
const tinderuser = {}
 tinderuser.id = "123abc"
 tinderuser.name = "Sammy"
 tinderuser.isLoggedIn = false

// console.log(tinderuser);
const regularuser = {

    email:"@gmail.com",
    fullname: {
        userfullname: {
            firstname:"aditya ",
            lastname:"desai"
        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname);
//hello world
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1, ...obj2,...obj4}
// console.log(obj3);
const users = [
    {

    },
    {
        id:1,
        email:"h@.com"
    }
    
]

users[1].email
// console.log(tinderuser);
// console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))



const course = {
    coursename:"js in hindi",
    price:"999",
    courseInsturctor:"chatney"
}

const {courseInsturctor} = course
// console.log(courseInsturctor);

// Functions

function saymyname () {
    console.log("h")
    console.log("i")
    console.log("a")

    console.log("d")

    console.log("i")

}
// saymyname()

// function addtwonumbers (num1,num2) {
//    console.log( num1 + num2)
// }


function addtwonumbers (num1,num2) {
   let result = num1 +num2
   return result
   console.log(result)
   
 }
 
const result = addtwonumbers(2,3)
// console.log("Result:",result);
function loginusermessage(username) {
    if (username === undefined){
        console.log("please enter the username")

    }
    return `${username} just logged in`
}
console.log (loginusermessage())

function calcultecartprice (val1, ...num1) {  
    
    return num1
    
}
console.log(calcultecartprice(200,300,400))


const user = {
    username:"aditya",
    price:100
}


function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}` )
}

// handleobject(user)
handleobject({
    username:" sam",
    price:300
}
)
const mynewarray = [100,300,400]
function returnsecondvalue(getarray){
    return getarray[0]


}
console.log(returnsecondvalue(mynewarray))

//scopes

let a = 10
const b =20
var c=30


console.log("A"-1);
console.log("tilak"+"A");
console.log(c);

console.log("2"+2-"2");
// const a = {

// }
// const b = {
    name:"tilak"

// }
const c = {
    name: "raam"
    
}
const d ={ 
    name:"bahgesh"
}
a[b]= {
    name:"ankit"
}
a[c] ={
    name:"am"
}
a[d] = {
    name:"sampath"
}
// console.log(a[b])
const add = 10
const v= 20
// console.log(add/a);
console.log(NaN==NaN);
console.log(NaN===NaN);


