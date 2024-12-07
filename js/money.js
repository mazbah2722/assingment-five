document.getElementById('donate-btn').addEventListener('click', function(event){
    event.preventDefault();
    // const initialValue= document.getElementById('initial-value').innerText;
    // const initialValueConvert = parseFloat(initialValue);
    // console.log(initialValueConvert)

   const addMoney = getInputFieldValueById('donate-input');
   const balance = getTextfieldValueById('initial-value');
   
   
   if(isNaN(addMoney)){
    alert('Failed');
    return 0;
   }
   const newBalance = balance + addMoney;
   document.getElementById('initial-value').innerText = newBalance;
//   my balance subtraction 
   const myBalance = document.getElementById('myBalance').innerText;
   const myBalanceConvert = parseFloat(myBalance);
   const newMyBalance = myBalanceConvert - newBalance;
   document.getElementById('myBalance').innerText = newMyBalance;


  
   
   alert('successfully');

})
document.getElementById('donate2-btn').addEventListener('click', function(event){
    event.preventDefault();
   const addMoney2 = getInputFieldValueById('feni-input');
   const balance = getTextfieldValueById('initial-value2');
   if(isNaN(addMoney2)){
    alert('Failed');
    return 0;
   }
   const newBalance = balance + addMoney2;
   document.getElementById('initial-value2').innerText = newBalance;

   //   my balance subtraction 
   const myBalance = document.getElementById('myBalance').innerText;
   const myBalanceConvert = parseFloat(myBalance);
   const newMyBalance = myBalanceConvert - newBalance;
   document.getElementById('myBalance').innerText = newMyBalance;
   
   alert('successfully');

})
document.getElementById('quota-protest-btn').addEventListener('click', function(event){
    event.preventDefault();
   const addMoney3 = getInputFieldValueById('quota-protest-input');
   const balance = getTextfieldValueById('initial-value3');
   if(isNaN(addMoney3)){
    alert('Failed');
    return 0;
   }
   const newBalance = balance + addMoney3;
   document.getElementById('initial-value3').innerText = newBalance;

   //   my balance subtraction 
   const myBalance = document.getElementById('myBalance').innerText;
   const myBalanceConvert = parseFloat(myBalance);
   const newMyBalance = myBalanceConvert - newBalance;
   document.getElementById('myBalance').innerText = newMyBalance;

   alert('successfully');

})

// ---------------
document.getElementById('history').addEventListener('click', function(){
    
    document.getElementById('history-btn').classList.remove('hidden');
    document.getElementById('donation-btn').classList.add('hidden');
    
    document.getElementById('donation').classList.remove('bg-[#B4F461]');
    document.getElementById('history').classList.add('bg-[#B4F461]');
})
document.getElementById('donation').addEventListener('click', function(){
   
    document.getElementById('history-btn').classList.add('hidden');
    document.getElementById('donation-btn').classList.remove('hidden');
    document.getElementById('donation').classList.add('bg-[#B4F461]');
    document.getElementById('history').classList.remove('bg-[#B4F461]');
    
})