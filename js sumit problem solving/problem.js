// -----------------protips class 2------------
// -------------swap value of an array------------
// const numbers = [1,2,3,4,5];
// let temp = numbers[0];
// numbers[0] = numbers [4];
// numbers[4] = temp;
// console.log(numbers);

//------------ swaping with array destructuring ---------
// const numbers = [1,2,3,4,5];
// [numbers[0],numbers[4]]= [numbers[4],numbers[0]];
// console.log(numbers);

// // -----------Do swap with Math-------------
// let a = 1;
// let b = 2;
// b = a + (a = b)-b
// console.log(a,b);

// =======copy to clipboard function=============
// function copyToClipBoard(str){
//     let element = document.createElement("textarea");
//     element.value = str;
//     document.body.appendChild(element);
//     element.select();
//     document.execCommand("copy");
//     document.body.removeChild(element);
// }


// function handleClick(){
//     let text = document.querySelector('#text');
//     copyToClipBoard(text.innerText);
// }

//-----------destructuring  aliases---------------------
// const language = {
//     name:"javascript",
//     founded:1995,
//     founder:"Brenden Eich"
// }
// const{name:languageName,founder:creatorName}= language

// console.log(languageName,creatorName);

//-------------input value as a number-----------------

// const number = document.querySelector('#number').valueAsNumber;

// console.log( number); 

// //-----------remove duplicate value from array--------

// const array = [1,2,2,3,3,3,4,5];

// console.log([...new Set(array)]);

//--------------compare to arrays by value-------------

//  const hasSameElements = (a,b)=>{
//     return a.length === b.length && a.every((v,i)=>{
//      return    (v === b[i]);
//     }
//     )
// }

// console.log(hasSameElements([1,2],[2,2]));

//-----------Array shuffling---------------
// const numbers = [1,2,3,4,5,6,7];

// console.log(numbers.sort(()=> (Math.random()-.5)));

//------------comma operator--------------------------

// let x =1;
// x = (x++ , x);
// console.log(x);

// let y = (3,4);
// console.log(y);

// let a = [[1,2,3,4],[3,4,5],[5,6],[7]]

// for (let i = 0 , j = 3; i <=3,j >= 0; i++, j--){
//     console.log("a[" + i + "] [" + j + "] = "+ a[i][j]);
// }

// document.write("<h1>I am busy<br></h1>")
// document.write("<h1>I am busy<br></h1>")
// let text = prompt("Enter your name:");

// console.log(text.length)

// let text1 = "Banglades";
// console.log(text1.charAt(4));
// console.log(text1.toUpperCase());
// ---------------task ------------------anisul islam

// let text= prompt("please enter your first Name:");
// let text2 = prompt("Enter your Last Name:");

// let text3 = "this is "+ text+ text2;
// let text5 = text3.toUpperCase();
// text4 = text3.length;
// console.log(text3.charAt(1));
// console.log(text5);
// console.log(text4);
// console.log(text3);

//------------Make a calculator---------------------

// let x = prompt('please input a number:');
// let y= prompt('please input a number:');
// x = parseInt(x);
// y = parseInt(y);
// let z = x + y;

// let z1 = x - y;
// console.log(z);
// console.log(z1);


// let x = prompt('please Enter a first   number:');
// let y= prompt('Enter a second number');
// x = parseInt(x,10);
// y = parseInt(y,10);
// let z = x + y;
// let d = x - y;
// let a = x * y;

// let f = x / y;
// let m = x % y;


// console.log(x + " + " + y + " = " + z);
// console.log(x + " - " + y + " = " + d);
// console.log(x + " * " + y + " = " + a);
// console.log(x + " / " + y + "=" + f );
// console.log( x + " % " + y + "=" +m);

//----------- Area of rectangle----------------

// var cel = prompt("enter a number of farhenheight");
// //var height = prompt("enter Height");
// var ce = parseFloat(cel);
// //var he = parseFloat(height);
// var far = (ce* (9/5)) + 32;


// // var area = bas * he;
// // console.log(area);


// //var cel = (far - 32)*(5/9);
// document.write(far);

//--------------marks of a student ----------------------
let number = prompt("please input a number");
if(number > 100 || number < 0){
    console.log('Invalid number');
}else if(number >= 80 && number <= 100){
    console.log("YOu got A + and your number is "+ number);
}else if( number >= 70 && number <=79){
    console.log("you got A and your number is "+ number);
}else if( number >= 60 && number <=69){
    console.log("you got B+ and your number is "+ number);
}else if( number >= 50 && number <=59){
    console.log("you got B and your number is "+ number);
}else if( number >= 40 && number <=49){
    console.log("you got C and your number is "+ number);
}else if( number >= 33 && number <= 39){
    console.log("you got D and your number is "+ number);
}else {
    console.log("you are Failed sorry try again and your Grade is F");
}