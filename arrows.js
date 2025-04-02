  const user  ={
    username:"aditya ",
    price:999, 

    welcomemessage:function() {
        console.log(`${this.username},welcome to website`);
        
    }
 }

//  user.welcomemessage()
//  user.username =  "SAM"
//  user.welcomemessage()

// console.log(this);


// function chai() {
    // let username='aditya'
    // console.log(this.username);
    // 
// }
// chai()

// const chai = function(){
//     let username = "aditya "
//     console.log(this.username);
    
// }


// const chai = () => {
    // let username = "aditya "
    // console.log(this.username);
    // 
// }

// chai()

// const addtwo = (num1,num2) => {
    // return num1+num2
// }


// const addtwo = (num1,num2) => num1+num2 //implicit return 

const addtwo = (num1,num2) => num1+num2 //implicit return 
 

console.log(addtwo(3,4));
console.log("hii");