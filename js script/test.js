// const d = new Date();
// console.time("test");
// console.log(d);
// document.write("Hello world<b>He is so great</b>");
// console.error("this is our error");
// console.warn("this is our journey to warn");
// console.timeEnd("test");

// function sleep(name,time){
//   console.log(name + " get up at " + time);
// }
// sleep("jasim","10 pm");
// sleep("karim","7 am");
// var iAmParvez = true;
// console.log(iAmParvez);
// console.log(typeof(iAmParvez));
//var myPhoneNumber = 394033;
//var name = "parvez";
//console.log(isNaN(myPhoneNumber));
//console.log(isNaN(name));

// postfix ------
// var x = 8;
// var y = x++ + 9;
// console.log(y);
// console.log(x);

//prefix-----------
// var x = 8;
// var y = ++x;
// console.log(x);
// console.log(y);

// var x = 8;
// var y = 9;
// console.log(x != y);

//---- Logical operators 

// var x = 8;
// var y = 9;
// var z = 10;
// console.log(!(x < 9 && y > 8 && z > 9));

//Swap numbers using 3 variables---

// var a = 5;
// var b = 10;
// var c = a;
// a = b;
// b = c;
// console.log("the a is"+ a);
// console.log("the b is"+ b);

// swap numbers without using 2 variables

// var a = 10;
// var b = 12;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log("the value of a is "+ a );
// console.log("the value of b is "+ b );

// ----conditional logic ------
// var rain = "sunny";
// if( rain == "tommo"){
//   console.log("take an umbrella");
// }else{
//   console.log("No need to take umbrella");
// }

//---- Finding leap year using conditional----

// var year = 1990;

// if(year % 4 === 0){
//   if(year % 100 === 0){
//     if(year % 400 === 0){
//       console.log("the year is a leap year 3")
//     }else{
//       console.log("the year is not a leap year3")
//     }

//   }else{
//     console.log("the year is a leap year2");
//   }

// }else{
//   console.log("the year is not a leap year1");
// }

//------------ternery operators---------------
// var age = 18;
// console.log((age >= 18)? "you can vote": "you can't vote");

//------ area of triangle ,circle and rectangle  with else if -------
// var area = "triangle";
// var r = 3; var b = 4; var l = 3;
// const PI = 3.1416;
// if(area == "circle"){
//   console.log("the area of circle is "+PI*r**2);
// }else if(area == "triangle"){
//   console.log("the area of triangle is "+(b*l)/2);
// }else if(area == "rectangle"){
//   console.log("the area of rectangle is "+ l*b);
// }else{
//   console.log("please input valid data");
// }

// switch operation replace the else if conditional logic

// var area = "triangle";
// var r = 3; var b = 4; var l = 3;
// const PI = 3.1416;
// switch(area){
//   case "circle":
//     console.log("the area of circle is "+PI*r**2);
//     break;
//   case "triangle":
//     console.log("the area of triangle is "+ (l*b)/2);
//     break;
//   case "rectangle":
//     console.log("the area of rectangle is "+ l*b);
//     break;
//   default:
//     console.log("please enter valid data");      
// }


// while loop statements

//  var num = 0;
//  while(num <= 20){
//    console.log(num);
//       num++;
//  }

//-------- do while loop state ment-------
// var num = 0;
// do{
//   console.log(num);
//   num++;
// }while(num >= 20);

//------ for loop ----------------

// for(var num = 0; num <= 20; num++ ){
//   console.log(num);
  
// }

// -----javascript program to print table for given number (8,9,12,15) using for loop
var num;
for(num =1 ;num <= 20 ;num++){
  var tableof=9;
  console.log(tableof+" * "+ num +" = "+ tableof*num);
}