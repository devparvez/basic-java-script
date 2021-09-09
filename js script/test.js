//----Date and Time in javascript ===========

// let currDate = new Date();
// console.log(currDate);
// console.log(new Date());
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());
// console.log(Date.now());
// var d = new Date(2021,3,6);
// console.log(d);

// var dl = new Date("october 13, 2021 11:13:00");
// console.log(dl.toLocaleString());

// var dll = new Date(1631132793701);
// console.log(dll);

//How to get indivisual date 

//const curDate = new Date();
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());
// console.log(curDate.getDate());
// console.log(curDate.getDay());

//const curDate = new Date();
//  console.log(curDate.toLocaleString());
//  console.log(curDate.setFullYear(2022));
//  console.log(curDate.setFullYear(2022,10,5));
//  console.log(curDate.setMonth(10));
//  console.log(setMonth);
//  console.log(curDate.setDate(5));

// ------- get times-------------
// const curDate = new Date();
// console.log(curDate.getTime());
// console.log(curDate.getHours());
// console.log(curDate.getMinutes());
// console.log(curDate.getSeconds());
// console.log(curDate.getMilliseconds());
// -----------how to set individual time--------

// const curtime = new Date();

// //console.log(curtime.setTime());
// console.log(curtime.setHours(5));
// console.log(curtime.setMinutes(5));
// console.log(curtime.setSeconds(5));
// console.log(curtime.setMilliseconds(5));
// function myFunction(){
//     const t = new Date();
//      t.setHours(5);
//     document.getElementById("demo").innerHTML = t;
// }

// to get only time and only date

const d = new Date().toLocaleDateString();
document.getElementById("date").innerHTML = d;

const t = new Date().toLocaleTimeString();
document.getElementById("time").innerHTML = t;
