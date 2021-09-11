//----------------- Events in javascript------------------ 
//---------2nd way of event listning-------------
// const callingFunction = () => {
//     alert('I am function,some body uses me');
// };
// //3rd way and it will overwrite using multiple time

// const threeBtn = document.getElementById("thirdWay");
// threeBtn.onclick = function(){
//     alert("this is 3rd popular way ");
// };

// threeBtn.onclick = function(){
//     console.log("this is 3rd popular way ");
// };
// //4th way it will not over write using 4th way
// const  fourthWay = document.querySelector('#fourthway');
// fourthWay.addEventListener('click',()=>{
//     alert("this is fourth way which is add event listn")
// });

// fourthWay.addEventListener('click',()=>{
//     console.log("this is fourth way which is add event listn")
// })

//------- Event ovject------------- 

// const forthWay = document.getElementById("fourthway");
// const checkEvent = () =>{
//     alert('I am fourth way alerm');
//     console.log(event);
//     console.log(event.target);
//     console.log(event.type);
    
// }



// forthWay.addEventListener('click',checkEvent);

//---------------Mouse events----------------------
//---mouse up and mouse down------------------------
// function mousedown(){
//     document.getElementById("mypara").style.color = "red";
// }
// function mouseup(){
//     document.getElementById("mypara").style.color = "orange";
// }
// ---------------Mouseenter and Mouse leave---------------
// const mEnter= document.getElementById("box");
// mEnter.addEventListener('mouseenter',()=>{
//     mEnter.style.backgroundColor = "green";
//     console.log("mouse is entered");
// });
// mEnter.addEventListener('mouseleave',()=>{
//     mEnter.style.backgroundColor = "pink";
//     console.log("mouse is leaved bro");
// })


//--------------keyboard event objects in javascript-------------

// const keypress = () =>{
//     document.getElementById("keys").innerHTML = `You press ${event.key} and it's code is ${event.code}`;
// }

// const keyup = () =>{
//     document.getElementById("keys").innerHTML = "This is key up";
// }
// const keydown = () =>{
//     document.getElementById("keys").innerHTML = "this is key Down";
// }

//-----------------onchange event-----------------------

// const selectElement = () => {
//     const getText = document.getElementById("ice").value;
//     const getchange = document.getElementById("icecreames").value;
//     console.log(`${getText} and ${getchange}`);
//     const getEvery = document.getElementById("getevery").innerHTML = ` Mr ${getText} and ${getchange} ice cream flavour`;
// }
// const icecreames = document.getElementById("icecreames");
// icecreames.addEventListener("change",()=>{
//         const getText = document.getElementById("ice").value;
//    const getchange = document.getElementById("icecreames").value;
//   console.log(`${getText} and ${getchange}`);
//   const getEvery = document.getElementById("getevery");
//   getEvery.innerHTML = ` Mr ${getText} and ${getchange} ice cream flavour`;
// });