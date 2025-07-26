// Lab 1,2,3: 

// 1. Create an HTML file named lab1.html and embed JavaScript using a <script> tag.
// 2. Write a single-line comment that briefly explains what JavaScript is (e.g., “JavaScript 
// is used to make web pages interactive”).
// 3. Write a multi-line comment describing common uses of JavaScript (e.g., form 
// validation, animations, dynamic content).
// 4. Use console.log() to display:
// o Your name (e.g., "Ali ahmd"),
// o Your age (e.g., 22),
// o Your favorite programming language (e.g., JavaScript).
// 5. Add a comment above each console.log() statement explaining what it does.

// Lab 2: 
// 1. Declare variables to store personal information:
// o firstName (e.g., "Ali"),
// o lastName (e.g., "ahmed"),
// o age (e.g., 22),
// o isStudent (e.g., true).
// 2. Use different naming styles:
// o camelCase (e.g., firstName),
// o PascalCase (e.g., LastName),
// o underscore (e.g., age_in_years).
// 3. Try creating invalid variable names such as:
// o Starting with a number (e.g., 123name),
// o Using special characters (e.g., my-name),
// o Using reserved keywords (e.g., let).
// 4. Log all valid variables to the console.
// 5. Use try and catch to hand the error

// try{
//     var firstName=prompt("Enter your frist name: ");//camelCase
//     var LastName=prompt("Enter your last name: ");//PascalCase
//     var age=prompt("Enter your age: ");
//     var is_student=prompt("Are you student?");

//     console.log(firstName,LastName,age,is_student)
//     // invalid variable names
//     eval("var let=1");
//     eval("var 12num");
// }
// catch(e){
//     console.log("Error Mesaage: ",e.message);
// }


// Lab 3: 
// 1. Ask the user to enter a numerical grade (e.g., 85).
// 2. Use if, else if, and else to assign a letter grade:
// o 90–100: "Excellent"
// o 75–89: "Good"
// o 60–74: "Pass"
// o Below 60: "Fail"
// 3. Display the result using a message.

// var degree = prompt("Enter the degree ");
// if (degree <= 100 && degree >= 0) {
//     if (degree >= 90) {
//         console.log("Excellent");
//     } else if (degree >= 75) {
//         console.log("Good");
//     } else if (degree >= 60) {
//         console.log("Pass");
//     } else {
//         console.log("Fail");
//     }
// } else {
//     console.log("Invalid degree");
// }

// Lab 4: 
// 1. Generate a random price (e.g., between 10 and 100).
// 2. Round it to two decimal places using formatting methods.

// var num=(Math.random()*(100-10)+10);
// console.log(num.toFixed(2));

// Lab 5: 
// 1. Ask the user to enter a p name (e.g., "Laptop").
// 2. Check if the input includes certain keywords using includes(), indexOf(), or 
// startsWith().
// 3. Convert input to lowercase for case-insensitive comparison.

// var pro=prompt("Enter a p name:")
// pro=pro.toLocaleLowerCase();
// var i=pro.indexOf("a");
// var j=pro.includes("ap");
// var k=pro.startsWith("la");

// console.log(i,j,k);

// Lab 6: 
// 1. Get the current date.
// 2. Add 3 days to the current date.

// var currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 3); 
// console.log(currentDate);

// Lab 7: 
// 1. Simulate a login system that allows up to 3 attempts.
// 2. Use a while loop to keep asking for a password until it’s correct or attempts run out.
// 3. Use a do...while loop to ask for a password at least once.

//  var attempts = 3;
//  var myPass="0000",flag;
//    do {
//       pass = prompt("Enter your password:");
//       attempts--;

//       if (pass === myPass) {
//         console.log("Login successful!");
//         flag = true;
//         break;
//       } else {
//         console.log("Incorrect password.");
//       }

//     } while (attempts > 0);
  


// Lab 8: 
// 1. Loop through numbers 1 to 50.
// 2. Use continue to skip even numbers and only print odd ones.
// 3. Use break to stop the loop when a specific number is reached (e.g., 37).

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 == 0) {
//     continue; 
//   }

//   if (i == 37) {
//     break; 
//   }
//   console.log(i); 
// }

// Lab 9: 
// 1. Ask the user for a number (e.g., 4).
// 2. Use nested loops to print a right-angled triangle of stars:
// o Line 1: *
// o Line 2: **
// o Line 3: ***
// o Line 4: ****

// var num=prompt("Enter Num:");

// for(var i=0;i<num;i++){
//     var s=""
//     for(var j=0;j<=i;j++){
//         s+='*';
//     }
//     console.log(s);
// }

// Lab 10: 
// 1. Ask the user for an initial amount (e.g., 1000).
// 2. Apply a tax rate and discount using +=, -=, *=, /=.
// 3. Calculate the final price after all operations.

// var amount = prompt("Enter the amount:");
// amount += 100;
// amount -= 50;
// amount *= 2;
// amount /= 4;
// console.log("The final amount is: " + amount);

// Lab 11: 
// Objective: Validate password strength using conditions.
// 1. Ask the user to enter a password.
// 2. Check if the password:
// o Is at least 8 characters long,
// o Contains both letters and numbers.
// 3. Display whether the password is strong or weak.

// var pass=prompt("Enter your Password:");

// var hasLetter=/[A-Za-z]/.test(pass);
// var hasNumber=/[0-9]/.test(pass);
// var len=pass.length;

// if(hasLetter&&hasNumber&&(len>=8))console.log("Your password is strong. :)");
// else console.log("Your password is weak. :(");


// Lab 12: Random Promo Code Generator
// Objective: Generate random codes using loops and random numbers.
// 1. Create a loop that generates 5 promo codes.
// 2. Each code should start with a prefix (e.g., "PROMO") followed by a random 4-digit 
// number.
// 3. Display all generated codes.

// for (let i = 0; i < 5; i++) {
//   var randomNumber = Math.floor(Math.random() * 9000+1000); 
//   var code = "PROMO" + randomNumber;
//   console.log(code);
// }
 

// Lab 13: 
// 1. Wrap a function in an IIFE that runs immediately when the page loads.
// 2. Inside the IIFE, define a variable (e.g., config) and log it.
// 3. Ensure that the variable is not accessible outside the IIFE.

// -->Immediately Invoked Function Expression
    // (function() {
    //     var config ="develop";
    //     console.log("inside IIFE:", config);
    // })();
    // try {
    //   console.log("Can i access 'config' outside IIFE?",config);
    // } catch (error) {
    //   console.log("Cannot access 'config' outside IIFE:", error.message);
    // }

// Lab 14: 
// 1. Simulate a calculator that throws an error if the user enters invalid input (e.g., 
// dividing by zero).
// 2. Catch the error and display a user-friendly message.
// 3. Use finally to log that the operation has completed.


// try{
//    var x=parseInt(prompt("Enter First Num:"));
//    var y=parseInt(prompt("Enter second Num:"));
//    var op=prompt("Enter operation:");
//    if((y==0&& op=="/")||(op!="*"&&op!="+"&&op!="/"&&op!="-")) throw new Error("invalid input ");
//    var ans;
//    switch(op){
//     case '+':
//         ans=parseInt(x)+parseInt(y);
//         break;
//     case '*':
//         ans=(x)*(y);
//         break;
//     case '-':
//         ans=(x)-(y);
//         break;
//     case '/':
//         ans=(x)/(y);
//         break;          
//    }
//    console.log("Answer: ",ans);
// }
// catch(e){
//      console.log("Error: "+e.message);
// }
// finally{
//     console.log("the operation has completed.");
// }