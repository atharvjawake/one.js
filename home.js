//Write a program to check whether a given number is positive, negative, or zero.
let a = -5;

if ( a > 0) {
    console.log("Positive");
} else if ( a < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

//Write a program to check whether a person is eligible to vote based on their age.
let age = 20;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

//Write a program to check whether a number is even or odd without using any built-in functions.
let num = 7;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

//Write a program to find the greater of two numbers using if-else.
let y = 25;
let b = 15;

if (a > b) {
    console.log(a + " is greater");
} else if (b > a) {
    console.log(b + " is greater");
} else {
    console.log("Both are equal");
}

//Write a program to find the largest of three numbers using if-else if-else.
let d = 10;
let g= 25;
let c = 15;

if (a >= b && a >= c) {
    console.log(a + " is largest");
} else if (b >= a && b >= c) {
    console.log(b + " is largest");
} else {
    console.log(c + " is largest");
}

//Write a program to check whether a given year is a leap year.
let year = 2024;

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}

//Write a program to calculate a student's grade based on marks:
let marks = 85;

if (marks >= 90 && marks <= 100) {
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
} else if (marks >= 70) {
    console.log("Grade C");
} else if (marks >= 60) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}

//Write a program to check whether a person is eligible for a driving license based on their age.
let u = 20;

if (u >= 18) {
    console.log("Eligible for driving license");
} else {
    console.log("Not eligible for driving license");
}

//Write a program to check whether a number is divisible by both 3 and 5.
let an = 30;

if ( an % 3 === 0 && an % 5 === 0) {
    console.log("Divisible by both 3 and 5");
} else {
    console.log("Not divisible by both 3 and 5");
}

//Write a program to check whether a given character is a vowel or consonant.
let ch = "a";

if (
    ch === "a" || ch === "e" || ch === "i" ||
    ch === "o" || ch === "u"
) {
    console.log("Vowel");
} else {
    console.log("Consonant");
}

//Write a program to calculate an electricity bill using different rates based on the number of units consumed?
let nk = 30;

if (nk % 7 === 0 && nk % 5 === 0) {
    console.log("Divisible by both 7 and 5");
} else {
    console.log("Not divisible by both 7 and 5");
}
//Write a program to calculate a discount based on the purchase amount:
let units = 250;
let bill;

if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = (100 * 5) + ((units - 100) * 7);
} else {
    bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}
console.log("Electricity Bill = ₹" + bill);

//Write a program to calculate the final price after discount and display the discount amount and final amount.
let amount = 12000;
let discount;

if (amount > 10000) {
    discount = amount * 20 / 100;
} else if (amount >= 5000) {
    discount = amount * 10 / 100;
} else {
    discount = 0;
}

let finalAmount = amount - discount;

console.log("Discount = ₹" + discount);
console.log("Final Amount = ₹" + finalAmount);

//Write a program to check whether three given sides can form a valid triangle.
let l = 5;
let p = 6;
let o = 7;

if (l + p > o && b + o > l && l + p > o) {
    console.log("Valid Triangle");
} else {
    console.log("Invalid Triangle");
}

//Write a program to determine whether a triangle is equilateral, isosceles, or scalene.
let j = 5;
let m = 5;
let k = 7;

if (j === m && m === k) {
    console.log("Equilateral Triangle");
} else if (j === m || k === m || j === k) {
    console.log("Isosceles Triangle");
} else {
    console.log("Scalene Triangle");
}

//Write a program to determine whether a triangle is acute, right-angled, or obtuse using its three sides
let x = 3;
y = 4;
 z = 5;

if (x + y <= z || x + z <= y || y + z <= x) {
    console.log("Invalid Triangle");
} else {
    let x = a * a;
     y = b * b;
     z = c * c;

    if (x + y === z || x + z === y || y + z === x) {
        console.log("Right-Angled Triangle");
    } else if (x + y > z && x + z > y && y + z > x) {
        console.log("Acute Triangle");
    } else {
        console.log("Obtuse Triangle");
    }
}

//Write a program to find the middle value among three different numbers.
let v = 10;
 b = 20;
 c = 15;

if ((v > b && v < c) || (v < b && v > c)) {
    console.log("Middle = " + a);
} else if ((b > a && b < c) || (b < a && b > c)) {
    console.log("Middle = " + b);
} else {
    console.log("Middle = " + c);
}

//Write a program to check whether a given number is a two-digit, three-digit, or other number.
let n = 125;

if (n >= 10 && n <= 99) {
    console.log("Two-digit number");
} else if (num >= 100 && num <= 999) {
    console.log("Three-digit number");
} else {
    console.log("Other number");
}

//Write a program to calculate an employee's bonus based on years of experience and salary.
let salary = 50000;
 experience = 7;
if (experience >= 10) {
    bonus = salary * 20 / 100;
} else if (experience >= 5) {
    bonus = salary * 10 / 100;
} else {
    bonus = salary * 5 / 100;
}
console.log("Bonus = ₹" + bonus);

//Write a program to determine whether an employee is eligible for a salary increment based on their performance rating.
let rating = 4;

if (rating >= 4) {
    console.log("Eligible for salary increment");
} else {
    console.log("Not eligible for salary increment");
}

//Write a program to create a simple ATM withdrawal system that checks balance, withdrawal amount, and minimum balance.
let balance = 10000;
let withdrawal = 3000;
let minimumBalance = 1000;

if (withdrawal <= 0) {
    console.log("Invalid withdrawal amount");
} else if (withdrawal > balance) {
    console.log("Insufficient balance");
} else if (balance - withdrawal < minimumBalance) {
    console.log("Minimum balance must be maintained");
} else {
    balance = balance - withdrawal;
    console.log("Withdrawal successful");
    console.log("Remaining Balance = ₹" + balance);
}

//Write a program to create a login system that checks username and password using if-else.
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}

//Write a program to check whether a user can access a website based on their age and membership status.
let countage = 22;
let type = true;

if (countage >= 18 && type === true) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

//Write a program to calculate a taxi fare based on the distance travelled, using different rates for different distance ranges.
let distance = 20;
let fare;

if (distance <= 5) {
    fare = distance * 10;
} else if (distance <= 15) {
    fare = (5 * 10) + ((distance - 5) * 8);
} else {
    fare = (5 * 10) + (10 * 8) + ((distance - 15) * 6);
}

console.log("Taxi Fare = ₹" + fare);

//Write a program to calculate a movie ticket price based on age and whether it is a weekend.
if (age < 13) {
        basePrice = 8;  
    console.log("Child on Weekday (Age 10");
    } else if (age >= 65) {
        basePrice = 10; 
        console.log("Adult on Weekday (Age 25");    
    } else {
        basePrice = 15;  
        console.log("Senior on Weekday (Age 70"); 
    }
//Write a program using switch to create a simple calculator for +, -, *, and /.
let r = 20;
 i = 5;
 operator = "*";

switch (operator) {
    case "+":
        console.log(a + i);
        break;

    case "-":
        console.log(r - i);

    case "*":
        console.log(r * i);
        break;

    case "/":
        console.log(r / i);
        break;

    default:
        console.log("Invalid Operator");
}

//Write a program using switch to display the day of the week based on a number from 1 to 7.
function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1: console.log("Monday"); break;
        case 2: console.log("Tuesday"); break;
        case 3: console.log("Wednesday"); break;
        case 4: console.log("Thursday"); break;
        case 5: console.log("Friday"); break;
        case 6: console.log("Saturday"); break;
        case 7: console.log("Sunday"); break;
        default: console.log("Invalid day number (1-7)");
    }
}

//Write a program using switch to display the month name and number of days based on the month number.
function getMonthInfo(monthNumber, isLeapYear = false) {
    switch (monthNumber) {
        case 1: console.log("January - 31 days"); break;
        case 2: console.log(`February - ${isLeapYear ? 29 : 28} days`); break;
        case 3: console.log("March - 31 days"); break;
        case 4: console.log("April - 30 days"); break;
        case 5: console.log("May - 31 days"); break;
        case 6: console.log("June - 30 days"); break;
        case 7: console.log("July - 31 days"); break;
        case 8: console.log("August - 31 days"); break;
        case 9: console.log("September - 30 days"); break;
        case 10: console.log("October - 31 days"); break;
        case 11: console.log("November - 30 days"); break;
        case 12: console.log("December - 31 days"); break;
        default: console.log("Invalid month number (1-12)");
    }
}

//Write a program using switch to create a menu-driven food ordering system with different prices for different items.
function orderFood(choice) {
    let item, price;
    switch (choice) {
        case 1:
            item = "Burger";
            price = 5.99;
            break;
        case 2:
            item = "Pizza";
            price = 8.99;
            break;
        case 3:
            item = "Pasta";
            price = 7.49;
            break;
        case 4:
            item = "Salad";
            price = 4.50;
            break;
        default:
            console.log("Invalid item choice.");
            return;
    }
    console.log(`You ordered ${item}. Total price: $${price}`);
}

//Write a program using switch to convert a number from 1–5 into its corresponding English word.
let nu = 4;

switch (nu) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    default:
        console.log("Invalid number");
}

//Write a program using switch to determine whether a given character is a vowel.
let ap = "a";

switch (ap.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;

    default:
        console.log("Not a vowel");
}

//Write a program using switch to calculate different area formulas based on the user's choice of shape.
let choice = 2;
let area;

switch (choice) {
    case 1:
        let side = 5;
        area = side * side;
        console.log("Area of Square =", area);
        break;

    case 2:
        let length = 10;
         breadth = 5;
        area = length * breadth;
        console.log("Area of Rectangle =", area);
        break;

    case 3:
        let radius = 7;
        area = 3.14 * radius * radius;
        console.log("Area of Circle =", area);
        break;

    case 4:
        let base = 10;
         height = 6;
        area = 0.5 * base * height;
        console.log("Area of Triangle =", area);
        break;

    default:
        console.log("Invalid choice");
}

//Write a program that accepts a temperature and unit (C, F, or K) and converts it to the other units using conditional statements.
let temperature = 100;
 unit = "C";

if (unit === "C") {
    let fahrenheit = (temperature * 9 / 5) + 32;
     kelvin = temperature + 273.15;

    console.log("Fahrenheit =", fahrenheit);
    console.log("Kelvin =", kelvin);

} else if (unit === "F") {
    let celsius = (temperature - 32) * 5 / 9;
     kelvin = celsius + 273.15;

    console.log("Celsius =", celsius);
    console.log("Kelvin =", kelvin);

} else if (unit === "K") {
    let celsius = temperature - 273.15;
     fahrenheit = (celsius * 9 / 5) + 32;

    console.log("Celsius =", celsius);
    console.log("Fahrenheit =", fahrenheit);

} else {
    console.log("Invalid unit");
}

//Write a program to calculate shipping charges based on package weight and delivery type.
let weight = 4;
 deliveryType = "express";
   let charge;

if (weight <= 1) {
    charge = 50;
} else if (weight <= 5) {
    charge = 100;
} else {
    charge = 200;
}
if (deliveryType === "express") {
    charge = charge + 100;
}
console.log("Shipping Charge = ₹" + charge);

//Write a program to determine a customer's loan eligibility based on age, salary, and credit score.
let vk = 25;
 salary = 30000;
 creditScore = 750;

if (vk >= 21 && salary >= 25000 && creditScore >= 700) {
    console.log("Loan Eligible");
} else {
    console.log("Loan Not Eligible");
}

//Write a program to calculate income tax based on different salary ranges.
let side = 800000;
let tX

if (side <= 250000) {
    tax = 0;
} else if (side <= 500000) {
    tax = side * 0.05;
} else if (side <= 1000000) {
    tax = side * 0.20;
} else {
    tax = side * 0.30;
}
console.log("Income Tax = ₹" + tax);

//Write a program to validate a password using conditional statements. Check whether it has the required length, number, and special character.
let pass = "Hello@123";

let hasNumber = false;
let hasSpecial = false;

for (let i = 0; i < pass.length; i++) {

    if (pass[i] >= "0" && pass[i] <= "9") {
        hasNumber = true;
    }

    if ("!@#$%^&*".includes(pass[i])) {
        hasSpecial = true;
    }
}

if (pass.length >= 8 && hasNumber && hasSpecial) {
    console.log("Valid Password");
} else {
    console.log("Invalid Password");
}

//Write a program to calculate a student's result based on marks in three subjects, checking both the average and whether the student passed every subject.
let math = 60;
let english = 55;
let science = 70;

let average = (math + english + science) / 3;

if (math >= 35 && english >= 35 && science >= 35 && average >= 40) {
    console.log("Result: PASS");
    console.log("Average =", average);
} else {
    console.log("Result: FAIL");
    console.log("Average =", average);
}

//Write a program for a restaurant billing system that calculates the bill, applies different discounts based on the total, and adds a service charge.
let tip = 2500;
let discoun;

if (tip >= 2000) {
    discount = tip * 0.20;
} else if (tip >= 1000) {
    discount = tip * 0.10;
} else {
    discount = 0;
}

let afterDiscount = tip - discount;
let serviceCharge = afterDiscount * 0.05;
let finalBill = afterDiscount + serviceCharge;

console.log("Original tip = ₹" + bill);
console.log("Discount = ₹" + discount);
console.log("Service Charge = ₹" + serviceCharge);
console.log("Final tip = ₹" + finalBill);

//Write a banking menu program using switch for Deposit, Withdraw, Check Balance, and Exit, with appropriate conditional checks for each operation.
let choic = 1;
let balanc= 5000;
let amoun = 2000;

switch (choic) {

    case 1:
        if (amoun > 0) {
            balanc = balanc + amoun;
            console.log("Deposit Successful");
            console.log("Balanc = ₹" + balanc);
        } else {
            console.log("Invalid amoun");
        }
        break;

    case 2:
        if (amount > 0 && amoun <= balanc) {
            balanc = balanc - amoun;
            console.log("Withdrawal Successful");
            console.log("Balance = ₹" + balanc);
        } else {
            console.log("Insufficient Balanc or Invalid Amout");
        }
        break;

    case 3:
        console.log("Current Balanc = ₹" + balanc);
        break;

    case 4:
        console.log("Thank you for using the bank");
        break;

    default:
        console.log("Invalid choic");
}
