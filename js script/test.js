//------ Searching and Filtering an array----------
// -------use indexof for array searching---------

//let myFriendNames = ["parvez","mahmud","shila","lila","joiana","parvez"];
//console.log(myFriendNames.indexOf("parvez",0));

//-------- last indexOf -------
// let myFriendNames = ["parvez","mahmud","shila","lila","joiana","parvez","shila"];

// console.log(myFriendNames.lastIndexOf("parvez",3));

//----------Array.includes------------------------

// let myFriendNames = ["parvez","mahmud","shila","lila","joiana","parvez","shila"];
// console.log(myFriendNames.includes("parvez"));

// ---------------array.find------------------------

//const prices = [100,200,250,300,400,450,500,600.700];
// const findElm = prices.find((currval) => {
//   return currval < 400;
// })
// console.log(findElm);

// alt
// const findElm = prices.find((currval) =>
//  currval<400
// )
// console.log(findElm);
//alt
//console.log(prices.find((currval) =>currval<400));
//alt
//console.log(prices.findIndex((currval) => currval < 400));

//-------- filter array----------
// const prices = [100,200,250,300,400,450,500,600.700];

// let newPriceTag = prices.filter((elem,index) =>
//  elem < 400
// )
// console.log(newPriceTag);

// //----------sorting an array----------------
// const months = ["march","january","Feb","Dec","Nov"];
// console.log(months.sort());