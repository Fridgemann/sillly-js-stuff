/* When a number is entered and an operation sign is clicked
    display will return to 0 and await the entry of the second number.

    - If the user presses the equal sign, display will show the result 
      of the operation; else they press another operation, original functionality will
      be at work and the result of the previous operation will act as the first number

    - Do not allow more than 15 characters on the result display!

    - What if i assign result at start as the first number entered?

    - Do not allow division by zero
    
    - Zero divided by anything is zero

    - Add functionality to the top batch of buttons (red ones)

    - When equals is pressed empty opOrder and nums

    - If the initial operation is '*' or '/' result should start as 1, else 0
*/

const numBtns = document.querySelectorAll('.calc-button');
const resultDisplay = document.querySelector('#result-display');


let nums = [];
let opOrder = [];
let result = 0;

function detectInitialOperationType() {
    if (opOrder[0] === '*' || opOrder[0] === '/') {
        result = 1;
    }
}

function addNums(currentOp) {
    nums.push(Number(resultDisplay.textContent));
    opOrder.push(currentOp);
    if (nums.length === 1) {
        result = nums[0];
    }
    resultDisplay.textContent = 0;
}

function calculateEquals () {
    switch (opOrder[opOrder.length - 1]) {
        case '+':
            result += Number(resultDisplay.textContent);
            break;
        case '-':
            result -= Number(resultDisplay.textContent);
            break;
        case '*':
            result *= Number(resultDisplay.textContent);
            break;
        case '/':
            result /= Number(resultDisplay.textContent);
            break;
    }

}

numBtns.forEach(elem => {
    elem.addEventListener('click', () => {
        switch(elem.textContent) {
            case '+': 
                detectInitialOperationType();
                addNums(currentOp = elem.textContent);
                if (nums.length > 1) {
                    result += nums[nums.length - 1];
                }
                console.log(result);
                console.log(opOrder);
                console.log(nums);
                break;
            case '-':
                detectInitialOperationType();
                addNums(currentOp = elem.textContent);
                if (nums.length > 1) {
                    result -= nums[nums.length - 1];
                }
                console.log(result);
                console.log(nums);
                break;
            case '/':
                detectInitialOperationType();
                addNums(currentOp = elem.textContent);
                if (nums.length > 1) {
                    result /= nums[nums.length - 1];
                }
                console.log(result);
                console.log(nums);
                break;
            case '*':
                detectInitialOperationType();
                addNums(currentOp = elem.textContent);
                if (nums.length > 1) {
                    result *= nums[nums.length - 1];
                }
                console.log(result);
                console.log(nums);
                break;
            default:
                if (elem.textContent === '=') {
                    calculateEquals();
                    resultDisplay.textContent = result;
                    nums.length = 0;
                    opOrder.length = 0;
                }
                else if (resultDisplay.textContent === "0") {
                    resultDisplay.textContent = elem.textContent;
                }
                else if (!(resultDisplay.textContent.length === 15)) {
                    resultDisplay.textContent += elem.textContent;
                }
        }
        
        

    })
    
})


//What if i store them in an array? YES
//15