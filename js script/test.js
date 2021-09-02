const points = [20,39,1,3,53,55];
points.sort(function(a,b){
    return a-b;
});
console.log(points);

// array method
//const numbers = [45,20,5,6,3];


//function myFunction(value,index,array){
   // console.log(value);
   // console.log(index);
   // console.log(array);
   // console.log("-------------");
//}

//maping

//numbers.forEach(myFunction);
//function myFunction(value,index,array){
  //  return value*2;
//}




//const newNumbers = numbers.map(myFunction);
//console.log(newNumbers);

//filter


//function myFunction(value,index,array){
   // return value > 10;
//}




//const newNumbers = numbers.filter(myFunction);
//console.log(newNumbers);

//reduce function

//const numbers = [45,20,5,6,3];

//function myFunction(total,value,index,array){
  //  return total+ value;
//}




//const newNumbers = numbers.reduce(myFunction);
//console.log(newNumbers);
// array . every
//const numbers = [45, 4, 9, 16, 25];
//let allOver18 = numbers.every(myFunction);

//function myFunction(value, index, array) {
//  return value > 2;
//}
//const newNumbers = numbers.reduce(myFunction);
//console.log(allOver18);


//array some

//const numbers = [45, 4, 9, 16, 25];
//let allOver18 = numbers.some(myFunction);

//function myFunction(value, index, array) {
 // return value > 25;
//}
//console.log(allOver18);

// find array

//const number = [45, 4, 9, 16, 25];
//let allOver18 = array.from("abcdef");

//function myFunction(value, index, array) {
 // return value > 5;
//}
//console.log(allOver18);
console.log(Array.from("ABCDEFG")) ; 

