var kilometersInput = document.getElementById("kilometers");
var fuelPriceInput = document.getElementById("fuelPrice");

document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();

  var kilometers = parseFloat(kilometersInput.value);
  var fuelPrice = parseFloat(fuelPriceInput.value);

  if (isValidNumber(kilometers) && isValidNumber(fuelPrice)) {
    calculateFuelCost(kilometers, fuelPrice);
  } else {
    alert("Por favor, insira valores numéricos não vazios.");
  }
});

function isValidNumber(value) {
  return value && !isNaN(value);
}

function calculateFuelCost(kilometers, fuelPrice) {
  const fuelEfficiency = 8;
  const cost = (kilometers / fuelEfficiency) * fuelPrice;
  var resultElement = document.querySelector(".result");
  resultElement.innerHTML = `O custo de combustível é R$ ${cost.toFixed(2)}`;
}
