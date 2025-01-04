const tempInput = document.getElementById("temperatureInput");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const result = document.getElementById("result");

function fTemp(temp) {
  return (temp - 32) * (5 / 9);
}

function cTemp(temp) {
  return temp * 1.8 + 32;
}

document.getElementById("submit").onclick = function () {
  const temp = parseFloat(tempInput.value);

  if (isNaN(temp)) {
    result.textContent = "Please enter a valid temperature.";
    return;
  }

  if (celsius.checked) {
    result.textContent = `${cTemp(temp).toFixed(2)} °F`;
  } else if (fahrenheit.checked) {
    result.textContent = `${fTemp(temp).toFixed(2)} °C`;
  } else {
    result.textContent = "Please select a conversion scale.";
  }
};
