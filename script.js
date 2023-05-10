// take input from user with buttons with an event listener
const buttons = Array.from(document.querySelectorAll(".button"));
let inputText = document.querySelector("#input");
let resultText = document.querySelector("#result");
const nonNumbers = ["C", "()", "%", "+/-", "=", "."];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["*", "/", "+", "-"];

buttons.forEach(function (button) {
  button.addEventListener("click", () => {
    console.log(button.textContent);
    // add the value of the button to the edit text
    buttonCLicked(button);
  });
});
//check if edit text is not empty
// take value from edit text
// convert input to variables
// differentiate between number and symbol
// Make list of operation symbols
// check if input is number, symbol, or other
// check which operation is being done
//

function buttonCLicked(button) {
  // checks if it is a number
  if (numbers.includes(button.textContent)) {
    if (inputText.textContent === "") {
      inputText.textContent = "";
    }
    addNumberToInputText(button);
    return;
  }

  // check if it an operation
  if (operators.includes(button.textContent)) {
    if (!inputText.textContent == "") {
      addOperatorToInputText(button);
      return;
    }
  }

  // checks if it isn't number or operator
  if (nonNumbers.includes(button.textContent)) {
    addAdditionalInputToText(button);
  }
}

function addAdditionalInputToText(button) {
  switch (button.textContent) {
    // C. clear text fields
    case nonNumbers[0]:
      inputText.textContent = "";
      resultText.textContent = "0";
      break;
    // checks for parenthesis
    case nonNumbers[1]:
      updateParenthesis(inputText.textContent);
      break;
    case nonNumbers[2]:
      // calculates percentage
      calculatePercentage(inputText.textContent);
      inputText.textContent = "";
      break;
    case nonNumbers[3]:
      // checks for positive/negative numbers
      updateNumberSimbol(inputText.textContent);
      break;

    // calculate complete expression
    case nonNumbers[4]:
      calculate(inputText.textContent);
      inputText.textContent = "";
      break;
    // adds decimal point
    case nonNumbers[5]:
      updateNumberDecimal(inputText.textContent);
      break;
  }
}

// calculation functions

function calculate(inputText) {
  let operand1 = null;
  let operator = null;
  let operand2 = null;
  let result = null;

  for (i = 0; i < inputText.length; i++) {
    if (operators.includes(inputText[i])) {
      operand1 = parseFloat(inputText.substring(0, i));
      operand2 = parseFloat(inputText.substring(i + 1));
      operator = inputText.substring(i, i + 1);
      break;
    }
  }
  switch (operator) {
    case "+":
      result = (operand1 + operand2).toPrecision(10) / 1;
      break;
    case "-":
      result = (operand1 - operand2).toPrecision(10) / 1;
      break;
    case "*":
      result = (operand1 * operand2).toPrecision(10) / 1;
      break;
    case "/":
      result = (operand1 / operand2).toPrecision(10) / 1;
      break;
  }

  resultText.textContent = result;
}

function calculatePercentage(inputText) {
  if (inputText != "") {
    resultText.textContent = eval(inputText) / 100;
  }
}

function calculateDivision(inputText) {
  let inputArr = inputText.split("");
  for (i = 0; i < inputText.length; i++) {}
}

// ui functions
function addNumberToInputText(button) {
  inputText.textContent += button.textContent;
}

function addOperatorToInputText(button) {
  if (
    operators.includes(
      inputText.textContent.charAt(inputText.textContent.length - 1)
    )
  ) {
    let newString =
      inputText.textContent.substring(0, inputText.textContent.length - 1) +
      button.textContent;
    inputText.textContent = newString;
  } else {
    inputText.textContent += button.textContent;
  }
}

function updateNumberDecimal(input) {
  // separates input text into two strings if there  is a operator
  let operand2 = null;
  for (i = 0; i < input.length; i++) {
    if (operators.includes(input[i])) {
      // operand1 = input.substring(0, i);
      operand2 = input.substring(i + 1);
    }
  }
  // if there is no operator in the string, then operand2 is null and we can work directly with the input test
  if (operand2 === null) {
    for (i = 0; i < input.length; i++) {
      if (input.includes(".")) {
        break;
      }
      inputText.textContent += ".";
      break;
    }
  } else {
    // if the operand2 is not null, it means that there is an operator and we can work with the operand2 and then modify the input text
    for (i = 0; i < operand2.length; i++) {
      if (operand2.includes(".")) {
        break;
      }
      inputText.textContent += ".";
      break;
    }
  }
}

function updateNumberSimbol(input) {
  if (input === "") {
    inputText.textContent += "(-";
    return;
  }
}

function updateParenthesis(input) {
  // let shouldClose = false;
  let numberParenthesis = 0;

  if (input === "") {
    inputText.textContent += "(";
    return;
  }

  for (i = 0; i < input.length; i++) {
    if (input[i] === "(") {
      shouldClose = true;
      numberParenthesis++;
      continue;
    }
    if (input[i] === ")") {
      shouldClose = false;
      numberParenthesis--;
      continue;
    }
  }
  console.log(numberParenthesis);
  if (input !== "" && numberParenthesis === 0) {
    inputText.textContent += "*(";
  } else if (numberParenthesis <= 0) {
    inputText.textContent += "(";
    return;
  } else if (input[input.length - 1] === "(") {
    inputText.textContent += "(";
  } else {
    inputText.textContent += ")";
  }
}
