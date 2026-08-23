//1 the difference between ==, ===, and Object.is() in JavaScript//
2 == "2";
console.log(2 == "2")

2 === "2";
console.log(2 === "2")



// 2 How does the ?? operator differ from the || operator//

const count = 0;
console.log(0 || 10)
console.log(0 ?? 10)


// 3 What is the output of 0 || 10 and 0 ?? 10, and why//

//The logical operator//
const val1 = 0 || 10;
console.log(0 || 10)

//Nullish operator//
const val2 = 0 ?? 10;
console.log(0 ?? 10)

// 4 What is the order of evaluation in let x = 5; let y = x++ + ++x + x//

let x = (5 + 2);
console.log(x)

let y = (5 + 7 + 7);
console.log(y)

// 5 How does operator precedence affect true && false || true && !false//

let a = !2;

console.log(a)

let b = 2;
console.log(a && b)

// 6 Why does [] == false return true, while [] === false returns false//

const myArray = [];
if (myArray.length === 0) {
    console.log("the array is Empty");
}


const data = [];
if (Array.isArray(data) && data.length === 0) {
    console.log("This is definitely empty array")
}

// 7  the results of null == undefined, null === undefined, null == 0, and null >= 0//

null >= 0;
console.log(null >= 0)

null == 0;
console.log(null == 0)


// 8 What is the difference between obj?.property and obj && obj.property//

// the difference between obj//undefined
const emptyuser = null;
console.log(emptyuser?.null)

//property and obj && obj.property// 0
const username = 0;
console.log(username && username);

// 9 How do obj.method?.(), obj?.method(), and obj?.method?.() diffe//

let user = { name: "vikram" }
console.log(user);

const apiResponce = {
    package: 200,
    data: {
        getuser: null
    }
};

console.log(apiResponce)

const userRole = apiResponce.data?.gateuser?.gateRole?.() ?? "guest";

console.log(userRole)

const tags = apiResponce.data?.gateuser?.gateTags?.() ?? [];
console.log(tags)


//
let score = 85;

let grade = score >= 90 ? "A" 
          : score >= 80 ? "B" 
          : "C";
console.log(grade)



// 11 Why does typeof null return "object//
const value = null;
console.log(typeof value === "object")

//hat happens when the delete operator is used with optional chaining//
const user1 = { profile: { name: 'vikram' } };
const result1 = delete user1.profile?.name;

console.log("result1:", result1);

console.log("result1:", user1.profile);


// 12 How do &, |, ^, and ~ work with JavaScript numbers//

// & work //
const s = 5;
const v = 3;
console.log(s & v);
// | work//
const p = 5;
const q = 3;
console.log(p | q);
// work ^ //
const c = 5;
const d = 3;
console.log(c ^ d);
// work ~ //
const m = 5;
const n = 3;
console.log(~m);

// 14 the difference between >> and >>>//

// High-Performance Math (>>)//

let strength = 25;
let halfstrength1 = Math.floor(strength / 2);
let halfstrength2 = strength >> 1;

console.log(-25 >> 1);

//  15 Pixel & Color Manipulation (>>>)//

let pixelcolor = 0xff34A17B;
let redchannel = (pixelcolor >>> 16) & 0xff;

console.log(redchannel);

//16 does 2 ** 3 ** 2 produce a different result from (2 ** 3) ** 2//

//does 2 ** 3 ** 2 produce//
const math = (2 ** 3 ** 2)
console.log(2 ** 3 ** 2);
//from (2 ** 3) ** 2//
const num = ((2 ** 3) ** 2);
console.log((2 ** 3) ** 2);

//Why is -2 ** 2 invalid JavaScript//
const result = (-2) ** 2;
console.log(result);

// 17 How do +=, -=, *=, **=, &&=, ||=, and ??= differ//

// do +=, -=, *=, **=//
let w = 10;
w += 5;
w -= 3;
w *= 2;
w **= 2;
console.log(w)

//&&=, ||=, and ??=//
//&&=//
let guest = false;
guest &&= "user123"
console.log(guest);

// ||=//

let val = 0;
val ||= 10;
console.log(val);

// ?? //

let conectionLimit = 0;
conectionLimit ??= 10;
console.log(conectionLimit)

// 18 can't ?? be directly combined with || or && without parentheses//

const user3 = null;
const backup = "Guest"
console.log(user3 ?? backup) || "anonymous"



// 19 How does JavaScript evaluate "10" + 5 * 2 + 3//

const result5 = "10" + 5 * 2 + 3;
console.log(result5)


// 20 What are the results of 1 < 2 < 3 and 3 > 2 > 1, and why//

//the results of 1 < 2 < 3// out put is true
const result6 = (1 < 2) && (2 < 3);
console.log(result6)

//3 > 2 > 1,// output is false

const result7 = (3 > 2) && (1 > 2);
console.log(result7)