const add = (num1, num2) =>  {return num1 + num2;}
        const subtract = (num1, num2) =>  {return num1 - num2;}
        const multiply = (num1, num2) =>  {return num1 * num2;}
        const divide = (num1, num2) =>  {return num1 / num2;}


        const resultDisplay = document.querySelector('#result-display');
        const allButtons = document.querySelectorAll('.calc-button');

        
        allButtons.forEach((elem) => {
            elem.addEventListener("click", () => {
                const operators = ['+', '-', '*', '÷'];
                let buttonTxt = elem.textContent.trim()
                if (buttonTxt === 'C') {
                    resultDisplay.textContent = "";
                }
                else if (buttonTxt === '=') {
                    let parts = resultDisplay.textContent.split(" ");
                    let operationType;
                    switch(opType = parts[1]) {
                        case '+': operationType = add; break;
                        case '-': operationType = subtract; break;
                        case '*': operationType = multiply; break;
                        case '÷': operationType = divide; break;
                        default: alert('Enter something');
                    }
                    let result = operationType(Number(parts[0]), Number(parts[2]));
                    resultDisplay.textContent = result;

                }
                else if (operators.includes(buttonTxt) ) {
                    resultDisplay.textContent += " " + buttonTxt + " ";
                }
                else {
                    resultDisplay.textContent += buttonTxt
                }
            })
        }
        )