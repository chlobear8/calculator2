// Business Logic
/**
 * Adds two numbers
 * @param {Number} num1 The first addend
 * @param {Number} num2 The second addend
 * @returns {Number} The sum of num1 + num2
 */
 function add(num1, num2) {
  return num1 + num2;
}

/**
 * Subtracts two numbers
 * @param {Number} num1 The minuend
 * @param {Number} num2 The subtrahend
 * @returns {Number} The difference of num1 - num2
 */
function subtract(num1, num2) {
  return num1 - num2;
}

/**
 * Multiplies two numbers
 * @param {Number} num1 The multiplicand
 * @param {Number} num2 The multiplier
 * @returns {Number} The product of num1 * num2
 */
function multiply(num1, num2) {
  return num1 * num2;
}

/**
 * Divides two numbers
 * @param {Number} num1 The dividend
 * @param {Number} num2 The divisor
 * @returns {Number} The quotient of num1 / num2
 */
function divide(num1, num2) {
  return num1 / num2;
}

function calculate (event) {
  event.preventDefault();
  document.getElementById("NaN").setAttribute("class", "hidden")
  let num1 = document.getElementById("input1").value;
  let num2 = document.getElementById("input2").value;
  if (num1 === "" || num2 === "") {
    document.getElementById("NaN").removeAttribute("class");
  } else {
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    const operator = document.querySelector("input[name='operator']:checked").value;
    let result;
    if (operator == "add") {
      result = add(num1, num2)
    } else if (operator == "sub") {
      result = subtract(num1, num2)
    } else if (operator == "mult") {
      result = multiply(num1, num2)
    } else if (operator == "divide") {
      result = divide(num1, num2)
    }
    document.getElementById("calculation").value = result
  }

}

window.onload = function () {
  document.getElementById("NaN").setAttribute("class", "hidden")
  const form = document.getElementById("calculator");
  form.addEventListener("submit", calculate);
}