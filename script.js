const inputOne = document.getElementById('inputOne');
const inputTwo = document.getElementById('inputTwo');
const addButton = document.getElementById('addButton');
const result = document.getElementById('result');

addButton.addEventListener('click', () =>{
    const inputOneValue = inputOne.value;
    const inputTwoValue = inputTwo.value;
    const addedResult = parseInt(inputOneValue) + parseInt(inputTwoValue);
    result.innerHTML = addedResult;
});