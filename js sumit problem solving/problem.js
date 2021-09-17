//-------------how to print 1-6 random number in lodu game----------31 



// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   }

//   console.log(getRndInteger(1, 6));


//   // problem 2 how to sort student's name alphabetically

//   const studentsName = ["patel","Hossain","Aman","parvez"];

//   console.log(studentsName.sort())

//   console.log(studentsName);

//   // sort method original array kai change kore fele noton array creat korena

//   //-------------sorting roll numbers assending or choto theke boro----------

//   const rollNumbers = [30,1,4,53,5,6];

//   console.log(rollNumbers.sort(function(a,b){
//       return a-b;
//   }))

//   // if i need to sort rollNumbers descending order 
//   console.log(rollNumbers.sort((a,b)=>{
//       return b-a;
//   }));

//--------------leap year ---------------

// function isleapyear(year){
//     if((year % 400 ===0) || ((year % 4 ===0) && (year % 100 !== 0))){
//         console.log(`This is a ${year}`);
//     }else{
//         console.log(`this  ${year} year is not leapyear`);
//     }
// }
// isleapyear(1800);

//---------vowels test problem--------------

// const vowels = ['a','e','i','o','u','A','E','O','I','U'];

// function voweltest(sentence){
//     let count = 0;
//     const letters = Array.from(sentence);
//     letters.forEach(function(value){
//         if(vowels.includes(value)){
//             count++;

//         }
        
//     })
//     return count;

// }



// console.log(voweltest("I love Bangladesh"));

//----kono array theke duplicate number golu ber kore ante hobe--------

// const numbers = [1,2,4,5,2,6,6,7,8,5];
// const duplicates = numbers.filter(function(value,index,array){
//     return array.indexOf(value) !== index
// })

// console.log(duplicates);
//------- conditional logic and turnery operator-----------33
// let age = '2';
// age = Number(age);

// if(isNaN(age)){
//     console.log("It is not a number");
// }else{
//     console.log(age < 18 ? "your are too young":"You are adult")
// }

//----------- ternery operator----------------------33
// let age = 19;

// console.log((age >= 18)?(age <30)?"you are adult":"you are old":"you are too young");

//--------- "if " alawys in small letter----------

//-------------we use forin loop "forin" object----

const bioData = {fName:"parvez",lName:"mahmud",Age:26};

for(let x in bioData){
    console.log(x);
    console.log(bioData[x]);
}
//------------- "for in" loop in array-----------------36
const numbers = [1,3,6,34,23,67,54,68];

for(let number in numbers){
    //console.log(number);
    console.log(numbers[number]);
}
//--- it is better to use "for in loop for object " not for array because array index order is so important

