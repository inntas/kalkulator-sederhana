const inputOne = document.getElementById('inputOne');
const inputTwo = document.getElementById('inputTwo');
const addButton = document.getElementById('addButton');
const result = document.getElementById('result');

addButton.addEventListener('click', () =>{
    const inputOneValue = inputOne.value;
    const inputTwoValue = inputTwo.value;
    if(validation(inputOneValue, inputTwoValue) === true){
        const addedResult = parseInt(inputOneValue) + parseInt(inputTwoValue);
        result.innerHTML = addedResult;
    }else {
        alert('Input tidak valid');
    }

    
});

const validation = (inputOne, inputTwo) =>{
    if((inputOne == false) || (inputTwo == false) || (isNaN(inputOne)) || (isNaN(inputTwo))){
        return false;     
    }else{
        return true;
    }
}