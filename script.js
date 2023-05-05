// take input from user with buttons with an event listener
const buttons = Array.from(document.querySelectorAll(".button"));
let inputText = document.querySelector("#input");
const nonNumbers = ["C", "()", "%", "+/-", "="];
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
    if (inputText.textContent == "0") {
      inputText.textContent = "";
    }
    addNumberToInputText(button);
  }

  // check if it an operation
  if (operators.includes(button.textContent)) {
    if (!inputText.textContent == "0") {
      addOperatorToInputText(button);
    }
  }
}

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
