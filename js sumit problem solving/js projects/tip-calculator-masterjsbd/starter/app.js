document.querySelector('#tip-form').onchange = function(){
    //selecting elements
    const bill = Number( document.querySelector("#totalBill").value);
    const tip = document.querySelector("#tipInput").value;
    const tipOutPut = document.querySelector("#tipOutput");

    const tipAmount = document.querySelector('#tipAmount');

    const totalBillwithTip =document.querySelector('#totalBillWithTip');

    const results = document.querySelector('#results')
    //calculations

    const tipValue = bill*(tip/100);
    const finalBill = bill + tipValue;
    tipAmount.value = tipValue.toFixed(2);
    totalBillwithTip.value = finalBill.toFixed(2);
    //Showing results
    tipOutPut.innerHTML = `${tip}%`;
    results.style.display = "block";

}