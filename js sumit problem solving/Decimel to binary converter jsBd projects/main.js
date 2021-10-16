let result = document.getElementById('result');
let submit = document.getElementById('submit');
function binary(e){
   e.preventDefault();
   let num = document.getElementById('number').value;
   if(num === ''){
       alert("please enter a valid number");
   }else if(num < 0){
       alert("please enter a postive number");
   }else{
       result.style.visibility = "visible";
   }

   let binaryNumb = Number(num).toString(2);
   result.innerText = binaryNumb;
   
}
submit.addEventListener('click',binary)