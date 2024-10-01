/* When a number is entered and an operation sign is clicked
    display will return to 0 and await the entry of the second number.

    If the user presses the equal sign, display will show the result 
    of the operation; else they press another operation, original functionality will
    be at work and the result of the previous operation will act as the first number

    - Do not allow more than 15 characters on the result display!
*/

const numBtns = document.querySelectorAll('.calc-button');
const resultDisplay = document.querySelector('#result-display');
const operationBtns = {
    addition: document.querySelector('#addition'),
    subtraction: document.querySelector('#subtraction'),
    division: document.querySelector('#division'),
    multiplication: document.querySelector('#multiplication')
}

// for (let key in operationBtns) {
//     let operationType = operationBtns[key].textContent;
//     if (operationType === '+') {
//         console.log("addition");
//     }
// }

let nums = [];

numBtns.forEach(elem => {
    elem.addEventListener('click', () => {
        if (elem.textContent === '+') {
            nums.push(Number(resultDisplay.textContent));
            resultDisplay.textContent = 0;
            let sum = nums.reduce((x, y) => {
                return x + y;
            })
            console.log(sum);
        }
        else if (elem.textContent === '=') {
            nums.push(Number(resultDisplay.textContent));
            let sum = nums.reduce((x, y) => {
                return x + y;
            })
            resultDisplay.textContent = sum;
        }
        else if (resultDisplay.textContent === "0") {
            resultDisplay.textContent = elem.textContent;
        }
        else if (!(resultDisplay.textContent.length === 15)) {
            resultDisplay.textContent += elem.textContent;
        }
        

    })
    
})


//What if i store them in an array? YES
//15