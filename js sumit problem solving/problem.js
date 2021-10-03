// Find the largest Number 
// let num1 = prompt('Input  number1 '); 
// let num2 = prompt('Input  number1 '); 
// let num3 = prompt('Input  number1 '); 

// if(num1 > num2 && num1 > num3){
//     console.log("number1 is greates and number is",num1);
// }else if(num2 > num1 && num2 > num3){
//     console.log("number2 is greates and number is",num2);
// }else{
//     console.log("the number 3 is gretest ",num3);
// }

//-------vowel and consonent print ------------------
// let vowel = prompt("Enter A letter for checking vowel consonent")
// vowel = vowel.toLowerCase();

// if(vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u") {
//     console.log("this vowel and it is "+ vowel);
// }else{
//     console.log("this is not a vowel");
// }

// -------------Digit Spelling method-----------

// let digit = prompt("Enter a valid digit");

// switch(digit){
//     case "0":
//         console.log("zero");
//         break;
//     case "1":
//         console.log("one");
//         break;
//     case "2":
//             console.log("Two");
//             break;
//     case "3":
//             console.log("Three");
//             break;
//     case "4":
//             console.log("Four");
//             break;
//     default:
//         console.log("Not valid")                                    
// }

//------------check vowel or consonent using switch method------------
// var vowel = prompt("Input a charecter or letter");
// vowel = vowel.toLowerCase();
// switch(vowel){
//     case "a":   
//     case "e":   
//     case "i":    
//     case "o": 
//     case "u":
//         document.write("this is a  vowel "+vowel);
//         break;
//     default:
//         console.log("This is not a vowel")                   
// }

// find the sum of 1 -5 
// let sum = 0;
// for(let x = 1; x <= 5; x++){
//     sum = sum + x;
// }
// document.write(sum);


//----------- Input from user---------------
// let m = prompt("please enter a valid starting number ");
// let n = prompt("please enter a valid end number ");
// let sum = 0;
// m = parseFloat(m);
// n = parseFloat (n);
// for( m =1 ; m <= n; m++){
//     sum = sum + m;
// }
// document.write(sum);

// for(let x = 1; x <= 5 ; x++){

//     let num1 = prompt("please enter  number");
//     let num2 = prompt("please second  number");
//     num1 = parseFloat(num1);
//     num2 = parseFloat(num2);
//     let num = num1 + num2;
//     console.log(num);
    
// }

// let x = 1;
// let sum = 0;

// while(x <= 100){
//     if(x % 3 == 0 && x % 5 == 0){
//         sum = sum + x;
       
//     }
//     x++;
    
// }
// console.log(sum);

// for(let i = 1; i <= 100; i++){
//     if(i == 10){
//         break;
//     }
//     console.log(i);
// }

// ------------print the even numbers 1 -100

// for(let i = 1; i <= 100; i++){
//     if(i % 2 !== 0){
//         continue;
//     }
//     console.log(i);
// }

//-------------- turnery operator ------------
// let number = 3;

// let result = number > 0 ? console.log("positive") : "negative";

// let num = prompt("enter the number ");

// num = parseFloat(num);

// let result = num > 0 ? "positive" : num < 0? "negative" : " zero";
// console.log(result);

//---------------Function with Anisul islam-------------
// function add(a,b){
//     let sum = a + b;
//     document.write(sum);
// }

// function sub(a,b){
//     let sum = Math.abs(a - b);
//     return sum;
// }

// add(6,7);
// console.log(sub(9,7));

// let result = sub(12,7);
// console.log(result);

//-------- imidiatly call a function--------

// (function display(a){
//     console.log(a)
// })("I am bad");

// (function add(b,c){
//     let d = b + c;
//     console.log(d);
// })(40,50);

//------function expression--------------
//  let test = function express(a){
//     console.log(a);
//  }
// test("Yes I have done the function expression");

// let names = new Array(50);
// names[0] = "parvez";
// names[49] = " Mahmud";

// console.log(names[0]+ names[49]);

// const numbers = [10,20,30,40,50];
// let sum = 0;
// for(let i = 0; i <= 4 ; i++){
//     console.log(numbers[i]);
//     sum = sum + numbers[i];
    

// }
// console.log(sum);

// Get input from user on a array and do sum of the input numbers with loop

// let num = new Array();
// for(var i = 0 ; i <= 4; i++){
//      num[i] = prompt("enter a number");
//      num[i] = parseFloat(num[i]);
// }
// let sum = 0;
// for(var  i = 0; i <= 4; i++){

//     console.log(num[i]);
  
//     sum = sum + num[i];
// }
// console.log(sum);

//-----------------------Go to --------------------
// let num = new Array(50);



// for(let i = 0; i <=4 ; i++){
//     num[i] = prompt("please enter a number");
//     num[i] = parseFloat(num[i]);
// }
// let sum = 0;
// for(let i = 0; i <= 4; i++){
//     console.log(num[i]);
//     sum = sum + num[i];
// }
// console.log(sum);

//---------------- How to create an object---------------
// const student1 = {
//     name: "parvez",
//     age : 23,
//     cgpa:5,
//     lang:['Bangali','hindi']
// } 
// const student2 = {
//     name: 'Mahmud',
//     age : 24,
//     cgpa:5,
//     lang:['Bangali','hindi','Eng']
// } 
// const student3 = {
//     name: "Anika",
//     age : 23,
//     cgpa:5,
//     lang:['Bangali','hindi','java']
// } 
// const student4 = {
//     name: "parvez",
//     age : 23,
//     cgpa:5,
//     lang:['Bangali','hindi']
// } 
// console.log(student4.lang);

// function Student(name,age,cgpa,lang){
//     this.name =name;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.lang = lang
//     this.display = function(){

//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.cgpa);
//         console.log(this.lang);
//     }
// }
// let student1 = new Student("parvez",30,3.12,["hindi","gujrati"]);
// //console.log(student1.cgpa);

// student1.display();

// let student2 = new Student("Rabea",3,4,["Eng","Bang"]);

// student2.display();

//--------------the Game of Gussing Number----------------
// let won = 0;
// let lost = 0;  
// for(i = 0; i <=4 ;i++){
//     let guessNum = prompt("please enter a number");
//     guessNum = parseInt(guessNum);

  

// let randomNum = Math.floor(Math.random()*5) + 1;
// if(guessNum == randomNum){
//     console.log("You have won");
//     won++;
// }else{
//     console.log("You have lost");
//     lost++;
// }    
// }
// console.log("You have lost times of "+lost);
// console.log("You have lost times of "+won);

//---------------Get element by tagname----------------
//document.getElementsByName('h1');
//document.getElementsByTagName('h1')[2].innerHTML = "hi";
// function myfunction(){
//     alert("there is something");
// }

// var heading3 = document.createElement('h1');
// var text = document.createTextNode("this is heading 3 coming from javascript");
// heading3.appendChild(text);
// var myDiv = document.getElementById("my-div")
// myDiv.appendChild(heading3);
// var heading2 = document.getElementsByTagName("h1")[2];
// myDiv.removeChild(heading2);

var head4 = document.createElement('h2');

var text4 = document.createTextNode("Hello second try");


head4.appendChild(text4);

let myDiv = document.getElementById('my-div');
let head5 = document.getElementsByTagName('h1')[2];
myDiv.insertBefore(head4,head5);
