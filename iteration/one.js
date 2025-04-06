// for

for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5) {
        // console.log("5 is besst number")
    }
    // console.log(element);
    
    
}
for (let i = 1; i <= 10; i++) {
    // const element = array[i];
    // console.log(`Table of : ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // const element = array[j];
        // console.log(`Inner loop value: ${j} and ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
        
        
        
    }
    
}

let myarray = ['flash','batman','superman']
// console.log(myarray.length);

for (let index = 1; index <  myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
    
}
// break and continue
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Deteected 5`);
//         break
//     }
//     console.log(`value of i is ${index}`);
    
    
// }
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Deteected 5`);
        continue 
    }
    console.log(`value of i is ${index}`);
    
    
}