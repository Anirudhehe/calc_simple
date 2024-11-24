const display = document.getElementById("display");

function updateDisplay(value) {
  display.value += value;
}

function evaluateExpression(n1, n2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = n1 + n2;
      break;
    case "-":
      result = n1 - n2;
      break;
    case "x":
      result = n1 * n2;
      break;
    case "÷":
      if (n2 !== 0) {
        result = n1 / n2;
      } else {
        result = "Error";
      }
      break;
    default:
      result = "Error";
  }
  return result;
}

let firstNumber = "";
let secondNumber = "";
let operator = "";

const numButtons = document.getElementsByClassName("num");

for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener("click", function () {
    if (operator) {
      secondNumber += this.textContent;
      updateDisplay(this.textContent);
    } else {
      firstNumber += this.textContent;
      updateDisplay(this.textContent);
    }
  });
}

const opsButtons = document.getElementsByClassName("ops");
for (let i = 0; i < opsButtons.length; i++) {
  opsButtons[i].addEventListener("click", function () {
    if (firstNumber !== "" && secondNumber === "") {
      operator = this.textContent;
      updateDisplay(this.textContent);
    }
  });
}

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function () {
  display.value = "";
  firstNumber = "";
  secondNumber = "";
  operator = "";
});

const eqButton = document.getElementById("eq");
eqButton.addEventListener("click", function () {
  if (firstNumber && secondNumber && operator) {
    const n1 = parseFloat(firstNumber);
    const n2 = parseFloat(secondNumber);
    const result = evaluateExpression(n1, n2, operator);
    display.value = result;
    firstNumber = "";
    secondNumber = "";
    operator = "";
  } else {
    display.value = "Error";
  }
});
