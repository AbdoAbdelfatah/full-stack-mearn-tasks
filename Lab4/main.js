// ---------------> Lab4

// 1- Create a JavaScript program to define an object representing a car
// with properties like brand, model, and year, and a method to
// display its details.

// var car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2025,
//   displayDetails: function () {
//     console.log("Brand:"+this.brand+"\nModel:"+this.model+"\nYear:"+this.year);
//   }
// };
// car.displayDetails();


// 2- Write a program to loop through all the properties of an object and
// log their keys and values.

// var obj={
//   name:"Abdelrahman",
//   age:23
// }
// for(let el in obj){
//   console.log(`Key:${el}  value:${obj[el]}\n`)
// }


// 3- Create a function that accepts an object and returns a new object
// with the keys and values swapped.

// function swapObj(obj) {
//   const swp = {};
//   for (let key in obj) {
//       swp[obj[key]] = key;
//   }
//   return swp;
// }

// const obj = {
//   name: "Abdelrahman",
//   age: "23",
//   city: "Cairo"
// };

// var swp = swapObj(obj);
// console.log(swp);


// 4- Write a program to create a "person" object that includes nested
// objects for "address" and "job", and a method to display all details.

// const person = {
//   name: "Abdelrahman",
//   age: 23,
//   address: {
//     street: "150St",
//     city: "Cairo",
//     country: "Egypt"
//   },
//   job: {
//     title: "Software Engineer",
//     company: "ITI",
//     experience: "1 year"
//   },
//   displayDetails: function () {
//     console.log(`Name:${this.name}  Age:${this.age}`);
//     console.log("Address:");
//     console.log(`  Street:${this.address.street} City:${this.address.city} Country:${this.address.country}`);
//     console.log("Job:");
//     console.log(`  Title:${this.job.title} Company:${this.job.company} Experience:${this.job.experience}`);
//   }
// };
// person.displayDetails();


// 5- Write a program to sort an array of objects by a specific property,
// such as age in an array of people objects.

// var people = [
//   { name: "Abdelrahman", age: 22 },
//   { name: "Ahmed", age: 19 },
//   { name: "Ali", age: 25 } 
// ];

// people.sort((a, b) => a.age - b.age);

// people.forEach(P => {
//   console.log(`${P.name}, Age: ${P.age}`);
// });



// 6- Create a JavaScript program to find the maximum and minimum
// numbers in an array.

// var arr=[2,3,41,21,3,4,1,444,2];

// var mx=0,mn=100000;
// arr.forEach(i=>{
//   mx=Math.max(mx,i);
//   mn=Math.min(mn,i);
// })
// console.log("maximum:"+mx+"  minimum:"+mn);

// 7- Create a program to reverse an array without using the built-in
// reverse() method.

// var arr=[2,3,33,42,123,12,44],rev=[];
// arr.forEach(el=>{rev.unshift(el)});
// console.log(rev);

// 8- Write a program that accepts an array of objects (e.g., ps
// with name and price) and returns an array of objects where each
// p has a discountedPrice property.

// function applyDiscount(p, discountPercent) {
//     p.forEach(el => {
//     var dis = el.price - (el.price * discountPercent / 100);
//     el["discountedPrice"]=dis;
//     });
   
//     return p;
// }
 
// var p = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 300 }
// ];
// applyDiscount(p, 20);
// console.log(p);


// 9- Make a function that takes date string as a parameter, and returns
// the Day name (Saturday, Sunday,…) of the given date using array.

// function getDayName(date) {
//   var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   var d = new Date(date);
//   var i = d.getDay();  
//   return days[i];
// }

// console.log(getDayName("2025-07-25")); 

// 10- Ask the user through prompt to enter number like 1,6,5,9,1,2
// Then ask the user through prompt to enter number like 5,6,3,1,9
// merge two arrays and remove duplicate items and display new
// array don’t use set

// var a = prompt("Enter numbers like(1,6,5,9,1,2):");
// var b = prompt("Enter number like(5,6,3,1,9):");

// var arr1 =a.split(',');
// var arr2 =b.split(',');

// arr1=arr1.concat(arr2); 
// var arr=[];
// arr1.forEach(el => {
//   if(!arr.includes(el))arr.push(el);
// });

// console.log(arr); 


// 11- Create phone book app
// Ask the user for operation through JS prompt
// If user enters “add”
// Ask him for the name of the contact and phone number
// Then create js object for that contact and add it to contacts array
// Then ask him for new operation and repeat
// If user enters “search”
// Ask him for something to search for
// Get the user input and search in the contacts array in name and
// phone
// Then show the user the full details of that contact
// Then ask him for new operation and repeat
// Bonas


// var contacts = [];
// function addContact() {
//   var name = prompt("Enter your name:");
//   var phone = prompt("Enter your phone number:");
//   if (name && phone) {
//     var contact = { name, phone };
//     contacts.push(contact); 
//   } else {
//     alert("Invalid input. Both name and phone are required.");
//   }
// }

// function searchContact() {
//   var x = prompt("Enter name to search:");
//   if (!x) return;
//   var ans = contacts.filter(contact =>contact.name==x);
//   if (ans.length > 0) {
//     let message = "Found contacts:\n";
//     ans.forEach((c, i) => {
//       message += `${i + 1}-Name: ${c.name}, Phone: ${c.phone}\n`;
//     });
//     alert(message);
//   } else {
//     alert("No contact found.");
//   }
// }

// function phoneBookApp() {
//   while (true) {
//     var operation = prompt("Enter operation (add, search, exit):");
//     if (operation == "add") {
//       addContact();
//     } else if (operation == "search") {
//       searchContact();
//     } else if (operation == "exit") {
//       alert("Goodbye!");
//       break;
//     } else {
//       alert("Invalid operation. Please enter 'add', 'search', or 'exit'.");
//     }
//   }
// }

// phoneBookApp();


// 12- Develop a program to merge two objects into one and handle
// property conflicts by appending _1 to duplicate keys.

// function mergeObjects(obj1, obj2) {
//   var ans = { ...obj1 };

//   for (let key in obj2) {
//     if (ans.hasOwnProperty(key)) {
//       ans[key + "_1"] = obj2[key];
//     } else {
//       ans[key] = obj2[key];
//     }
//   }

//   return ans;
// }

// var obj1 = { name: "Abdelrahman", age: 25, country: "Egypt" };
// var obj2 = { age: 30, city: "Cairo", country: "Soudi" };

// var merged = mergeObjects(obj1, obj2);
// console.log(merged);