//------------------ timeout and setinterval---------------
// set time out
// const myName =document.getElementById('showMyName');
// const btn = document.getElementById("btn");
// const showMyName = ()=>{
//     myName.innerHTML = "loading...........";
//   setTimeout(()=>{
//       myName.innerHTML = "Parvez mahmud";
//   },1000)
// }

// btn.addEventListener('click',showMyName);
// -------clear time out---------------
// function myFunction(){
//   alert("hello world");
// }

//---------set interval and  Clear interval-------

const stopNum = document.querySelector('p');
const btn = document.querySelector('#btn');
const btn1 = document.querySelector('#btn1');
let stp ;
let num = 0;
const myShowNum = () =>{
  stopNum.innerHTML = "Loading----";
  stp = setInterval(() => {
    stopNum.innerHTML = `${num}`;
    num++
  }, 1000);
}



btn.addEventListener('click',myShowNum);
btn1.addEventListener('click',()=>{
  clearInterval(stp);
})