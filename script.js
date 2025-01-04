const tempInput = document.getElementById("temp");
const c = document.getElementById("c");
const f = document.getElementById("f");
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
  if (c.checked) {
    result.textContent = `${cTemp(temp).toFixed(2)} °F`;
  } else if (f.checked) {
    result.textContent = `${fTemp(temp).toFixed(2)} °C`;
  }
};
