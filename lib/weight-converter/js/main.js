/* When the input field receives input, convert the value from pounds to kilograms */
function weightConverter(valNum) {
  document.getElementById("outputGrams").innerHTML = valNum / 0.0022046;
}