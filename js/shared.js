
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const initialValueConvert = parseFloat(inputValue);
    return initialValueConvert;
    
}

function getTextfieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textValueConvert = parseFloat(textValue);
    return textValueConvert;
}