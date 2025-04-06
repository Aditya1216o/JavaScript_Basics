const month = 3 
switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("feb")

        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;

    default:
        console.log("default month matched ");
        
        break;
}

// truthy values 
//"0", 'false', " ", [], {}, function{}

//falsy values
// false, 0, -0, BigInt 0n,"", null, undefined, NaN

//Nullish coalescing operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10




console.log(val1);


// ternary operater
