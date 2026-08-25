// comparison in same data type

// console.log(2>1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1) gives boolean value

// COMPARISON IN DIFFERENT DATATYPE

console.log("2">1)
console.log("02">1)

console.log(null>0)//Relational comparison mein null ko number mein convert kiya jata hai:
// Number(null) // 0
// So:
// 0 > 0  // false
console.log(null==0)//Loose equality (==) mein null sirf undefined ke equal hota hai, 0 ke nahi.
// null == undefined // true
// null == 0 // false
console.log(null>=0)//Again null → 0:
// 0 >= 0  // true

console.log(undefined>0)//false
console.log(undefined==0) //false
console.log(undefined>=0)//false

console.log(undefined>null)//false
console.log(undefined==null)//true
console.log(undefined>=null)//false

console.log(null>undefined)///false
console.log(null==undefined)//true
console.log(null>=undefined)//false

console.log("2"===2)//false //strict check also check datatype 

// 1. undefined == null → true ✅

// JavaScript ka special rule:

// null == undefined   // true

// Lekin:

// null === undefined  // false

// == loose equality hai, jabki === strict equality.

// 2. undefined > null → false

// > comparison mein dono values ko numbers mein convert kiya jata hai:

// Number(undefined) // NaN
// Number(null)      // 0

// So comparison becomes:

// NaN > 0  // false

// NaN ke saath relational comparison (>, <, >=, <=) always false hota hai.

// 3. undefined >= null → false

// Again:

// NaN >= 0  // false
// 4. null > undefined → false
// 0 > NaN  // false
// 5. null >= undefined → false
// 0 >= NaN  // false
// 🧠 Most important rule
// Expression	Output	Reason
// null == undefined	true	Special == rule
// null === undefined	false	Different types
// null > undefined	false	0 > NaN
// null >= undefined	false	0 >= NaN
// undefined > null	false	NaN > 0
// undefined >= null	false	NaN >= 0