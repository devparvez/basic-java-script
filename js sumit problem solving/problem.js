//------------class 61 with sumit given below the sentence "parvez " words is how many times used and what is the position parvez---------------;

// let sentence = "learn with parvez is all about learnig and teaching of webdevelopment skills and technics in an efficent practical manner.if you are beginar learn with parvez is helpful for you .you should follow parvez rules and begin to grow with skills";

// const matches = sentence.match(/parvez/gi);
// console.log(matches);
// const occurences = matches?matches.length:0;
// console.log(occurences);
// let position = sentence.search(/parvez/i);
// position = position >= 0? position:"not found";
// console.log(position);

// //------------Problem 2-c61---------------
// //  input:linearsearch(['a','b','c','d','c'],'c')
// //output:2 or 'not found';
// // problem: implement the linear search problem

// function linearSearch(arr,val){
//     let length = arr.length ;
//     for(let i = 0 ; i < length ; i++){
//         if(arr[i]===val){
//             return i;
//         }

//     }
//     return "Not found";
// }

// console.log(linearSearch(['a','b','c','d','c'],'c'));

//------------How to find biggest string and index number of a  array--------------------

// function longestString(names){

//     let longestWord = " ";

//     for(let name of names){
//         if(name.length > longestWord.length ){
//             longestWord = name;
//         }
//     }

//     return [longestWord,names.indexOf(longestWord)];

// }

// console.log(longestString(['parvez','parvez mahmud','jerakom','sane','apte']));

//-----------1-100 which numbers are divided by 3,5 or by both 3,5------------
//---------1-100 er kon modde kon sonkha gulo 3,5 dara bivajjo and 3,5 ovoy sonkha darai vivajjo--------------

// function fizzBuzz(number){

//     for(let i = 1; i <= number;i++){
//         if( i % 15 == 0){
//             console.log(`${i} is a fizzBuzz number`)
//         }else if( i % 3 == 0){
//             console.log(`${i} is fizz number`);
//         }else if( i % 5 == 0){
//             console.log(`${i} is a Buzz number`);
//         }else{
//             console.log(i);
//         }
//     }

// }

// console.log(fizzBuzz(100));

//--------Find  only truthy values from an array--------

// let mixedArr=["apple",undefined,"Banana","","Grapes",false,"jackfruit",null,"true",NaN,"guava"];

// let trueVlues = mixedArr.filter((ele)=>{
//     if(ele){
//         return true;
//     }else{
//         return false;
//     }

// })
//console.log(trueValues);

//Alternative function

//let trueVal = mixedArr.filter((Boolean))
//console.log(trueVal);

//-------------------find the truthy values from an object---

// const myObj = {
//     a:"apple",
//     b:undefined,
//     c:"Banana",
//     d:"",
//     e:"Grapes",
//     f:false,
//     g:"jackfruit",
//     h:null,
//     i:"true",
//     j:NaN,
//     k:"guava"
// }

// function trueObj(myObj){
//     for(let x in myObj){
//         if(!myObj[x]){
//              delete myObj[x];
//         }
//     }
//     return myObj;

// }

// console.log(trueObj(myObj));

