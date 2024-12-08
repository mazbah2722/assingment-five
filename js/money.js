document.getElementById('donate-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById('donate-input');
    const balance = getTextfieldValueById('initial-value');


    if (addMoney <= 0  || isNaN(addMoney)) {
        alert('Invalid Donation Amount');
        return 0;
    }
    const newBalance = balance + addMoney;
    document.getElementById('initial-value').innerText = newBalance;
    //   my balance subtraction 
    const myBalance = document.getElementById('myBalance').innerText;
    const myBalanceConvert = parseFloat(myBalance);
    const newMyBalance = myBalanceConvert - newBalance;
    document.getElementById('myBalance').innerText = newMyBalance;

    //history-add----------
    const p = document.createElement('p');
    p.innerText = `${newBalance} Taka is Donated for famine-2024 at Noakhali, Bangladesh`;
    document.getElementById('history-container').appendChild(p);


    alert('successful donation');

})
document.getElementById('donate2-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoney2 = getInputFieldValueById('feni-input');
    const balance = getTextfieldValueById('initial-value2');
    if (addMoney2 <= 0  ||  isNaN(addMoney2)) {
        alert('Invalid Donation Amount');
        return 0;
    }
    const newBalance = balance + addMoney2;
    document.getElementById('initial-value2').innerText = newBalance;

    //history-add----------
    const p = document.createElement('p');
    p.innerText = `${newBalance} Taka is Donated for famine-2024 at Feni, Bangladesh`;
    document.getElementById('history-container').appendChild(p);

    //   my balance subtraction 
    const myBalance = document.getElementById('myBalance').innerText;
    const myBalanceConvert = parseFloat(myBalance);
    const newMyBalance = myBalanceConvert - newBalance;
    document.getElementById('myBalance').innerText = newMyBalance;



    alert('successful donation');

})
document.getElementById('quota-protest-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoney3 = getInputFieldValueById('quota-protest-input');
    const balance = getTextfieldValueById('initial-value3');
    if (addMoney3 <= 0  ||  isNaN(addMoney3)) {
        alert('Invalid Donation Amount');
        return 0;
    }
    const newBalance = balance + addMoney3;
    document.getElementById('initial-value3').innerText = newBalance;
    //history-add----------
    const p = document.createElement('p');
    p.innerText = `${newBalance} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`;
    document.getElementById('history-container').appendChild(p);

    //   my balance subtraction 
    const myBalance = document.getElementById('myBalance').innerText;
    const myBalanceConvert = parseFloat(myBalance);
    const newMyBalance = myBalanceConvert - newBalance;
    document.getElementById('myBalance').innerText = newMyBalance;

    alert('successful donation');

})


// ----toogle-----------
document.getElementById('history').addEventListener('click', function () {

    document.getElementById('history-btn').classList.remove('hidden');
    document.getElementById('donation-btn').classList.add('hidden');

    document.getElementById('donation').classList.remove('bg-[#B4F461]');
    document.getElementById('history').classList.add('bg-[#B4F461]');
})


document.getElementById('donation').addEventListener('click', function () {

    document.getElementById('history-btn').classList.add('hidden');
    document.getElementById('donation-btn').classList.remove('hidden');
    document.getElementById('donation').classList.add('bg-[#B4F461]');
    document.getElementById('history').classList.remove('bg-[#B4F461]');

})



