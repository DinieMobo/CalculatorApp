let displayText = "";
let display = document.getElementById("display");

// Function used for the AC button to clear automatically
function clearDisplay(){
  display.value = "";
}

let bracketOpen = false;

// Function used for the Brackets() button
function addBracket() {
  if (bracketOpen) {
    display.value += ')';
    bracketOpen = false;
  } else {
    display.value += '(';
    bracketOpen = true;
  }
}

// Function used to append a character to the display
function appendToDisplay(char) {
  display.value += char;
}

// Function used for the backspace button
function backspaceFunction() {
  display.value = display.value.slice(0, -1);
}

// Function used to calculate the result
function calculate() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}