//---------------String in java script---------------------
// let myName ="parvez mahmud";
// console.log(myName.length);

//-------using escape characters like backslash-------------

// let anySentence = "We are so called \"vikikings\" from the north";
// console.log(anySentence);

// string search

// const myBioData = "i am parvez mahmud";
// console.log(myBioData.indexOf("parvez"));
// console.log(myBioData.lastIndexOf("m",13))

// const myBioData = "i am not here and not parvez";
// let Sdata = myBioData.search("not");
// console.log(Sdata);

// ---------slice method -----

// let str = "Aplle, Bananaa, Grape";
// let strSlice = str.slice(0,5);
// console.log(strSlice);

// let str = "Aplle, Bananaa, Grape";
// let strSlice = str.slice(7,-2);
// console.log(strSlice);

// ---Display only 280 characters of string like one used in a twitter ------

// let myTweets = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, .";
// let myActualTweets = myTweets.slice(0,280);
// console.log(myActualTweets);
// console.log(myActualTweets.length);

//------------ substring method---------------
// let str = "Aplle, Bananaa, Grape";
// let res = str.substring(0,5);
//let res = str.substring(7,-2);
// -2 means start with 0;
// console.log(res);

//-------- substr------------------------------

//let str = "Aplle, Bananaa, Grape";
//let res = str.substr(0,5);
//let res = str.substr(-4);
//console.log(res);

// ---------replacing string words or string-----------------------

// let myBioData = `I am parvez mahmud from the coding knowledge parvez`;
// let replaceData = myBioData.replace("parvez","PARVEZ");
// console.log(replaceData);

// --------extracting  string characters at string -------------
//-------- String charAt(position)-------------
// let str = "Hello World";
// let newValue = str.charAt(4);
// console.log(newValue);

// string charcodeAt---

let str = "Hello WorlD";

// let newValue = str.charCodeAt(4);
// console.log(newValue);
// Find the last character unicode of the string

// let searchCodeAt = str.charCodeAt(str.length-1);
// console.log(searchCodeAt);

// // property access of a string 

// let property = "HELLO WORLD";
// console.log(property[0]);

//------- to upercase and to lower case -------
// let property = "HELLO WORLD";
// console.log(property.toLowerCase());
// let lower = " hellow world";
// console.log(lower.toUpperCase());

// ------- concat process ------------
// let fName = "parvez";
// let lName = "Mahmud";
// console.log(fName.concat(lName));
// console.log(fName.concat(" ",lName));

//--------- trim function to remove side spaces not from middle

// let removeSpaces = "      parvez     mahmud        ";
// console.log(removeSpaces.trim())

// ---------convert a string to array with split method----

let txt = "a,b,c, d, | e,f";
console.log(txt.split(" , "));
console.log(txt.split("  "));
console.log(txt.split(" | "));