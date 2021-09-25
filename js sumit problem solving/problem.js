// remove falsi values

const fruits = ["jackfruits",0,undefined,"banana",NaN,"apple",false,null,"mango",""]
const realFruits=fruits.filter(Boolean);
console.log(realFruits);

// convert any value to Boolean

console.log(!!"mashrafi");
console.log(!! 0);
console.log(!! undefined);
console.log(Boolean(1));
console.log(Boolean("parvez"));


//--------resizing an array-------------

const animals = ["Elephant","Monkey","pigion","snake"];
animals.length = 3;
console.log(animals);

// ------------------------flatten the array--------------
const needtoFlat = ['shohag','kamrul','dogol','mowla',['johir','jahangir','sohir',['janu','vodro','jomor'],],'somon']
console.log(needtoFlat.flat(Infinity));

//-------------short conditional------------------
let captain = "Mushfiq";
if(captain=== "Mushfiq"){
    console.log('I love mushfiq');
}
captain === "Mushfiq" && console.log("I love Mushi");

if(captain!== "Mushfiq"){
    console.log('I love mushfiq');
}

captain === "Mushfiq" || console.log("I love Mushi");

//--------------Replace all occurences of String----------

const qoute = "I love America and America is a good country and it is known to all that America is most powerful country";
// Replace all the occurences of America with Bangladesh
console.log(qoute.replace(/America/g,"Bangladesh"))

// -----log values with variable names-------
const library1 = "jquery";
const library2 = "React";
//instead of doing this  

console.log(`library1 ${library1}`);
console.log(`library2 ${library2}`);
// we do
console.log({library1});
console.log({library2});

// How to check performance of a program

 const startTime = performance.now();
for(let i = 0; i <= 100; i++){
    console.log(i);
}
const endTime = performance.now();

console.log(`The time is ${endTime-startTime} in miliseconds`);
