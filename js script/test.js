const fruits = ["Apple","mango","banana","pineapples"]
fruits.push("guava");
fruits[fruits.length] = "Rice";
//let flen = fruits.length;
//console.log(fruits[fruits.length-1]);
//for(i=0; i<fruits.length; i++){
  //  console.log(i);
 //   console.log(fruits[i]);
//}
//let text ="<ul>";

//for(i=0; i < flen; i++){
 //   text = text +  fruits[i]
//}
function myFunction(value){
    console.log(value);
}
fruits.forEach(myFunction);

let myGirls = ["asa","bina","disa","nice"];
let myBoys = ["aman","ayaj","jaman"];
let a = myGirls.concat(myBoys);
console.log(a);
let b=a.concat("peter");
console.log(b);
let citrus = myGirls.slice(1,3);
console.log(citrus);
