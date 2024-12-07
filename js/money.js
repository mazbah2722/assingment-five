document.getElementById('donate-btn').addEventListener('click', function(event){
    event.preventDefault();
    // const initialValue= document.getElementById('initial-value').innerText;
    // const initialValueConvert = parseFloat(initialValue);
    // console.log(initialValueConvert)

   const addMoney = getInputFieldValueById('donate-input');
   const balance = getTextfieldValueById('initial-value');
   const newBalance = balance + addMoney;
   document.getElementById('initial-value').innerText = newBalance;
  
   console.log(addMoney, balance, newBalance);
   

})
document.getElementById('donate2-btn').addEventListener('click', function(event){
    event.preventDefault();
   const addMoney2 = getInputFieldValueById('feni-input');
   const balance = getTextfieldValueById('initial-value2');
   const newBalance = balance + addMoney2;
   document.getElementById('initial-value2').innerText = newBalance;
   console.log( addMoney2);

})
document.getElementById('quota-protest-btn').addEventListener('click', function(event){
    event.preventDefault();
   const addMoney3 = getInputFieldValueById('quota-protest-input');
   const balance = getTextfieldValueById('initial-value3');
   const newBalance = balance + addMoney3;
   document.getElementById('initial-value3').innerText = newBalance;
   console.log( addMoney3);

})
