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
                
            })
        }
        )