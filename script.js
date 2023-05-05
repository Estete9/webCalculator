// take input from user with buttons with an event listener
const buttons = Array.from(document.querySelectorAll(".button"));
let inputText = document.querySelector("#input");
const nonNumbers = ["C", "()", "%", "+/-", "="];

buttons.forEach(function (button) {
  button.addEventListener("click", () => {
    console.log(button.textContent)
    // add the value of the button to the edit text
    if (!nonNumbers.includes(button.textContent)) {
      if(inputText.textContent == "0") {
        inputText.textContent = ""
      }
      inputText.textContent += button.textContent
    }
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
