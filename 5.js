var length;
var width;

document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();

  length = parseFloat(document.getElementById("length").value);
  width = parseFloat(document.getElementById("width").value);

  if (isValidInput(length) && isValidInput(width)) {
    calculateCost();
  } else {
    alert("Por favor, insira valores numéricos não vazios.");
  }
});

function isValidInput(value) {
  return value && !isNaN(value);
}

function calculateCost() {
  const pricePerSquareMeter = 36.0;
  const totalCost = pricePerSquareMeter * (length * width);

  // Exibir o resultado
  var resultElement = document.getElementsByClassName("result")[0];
  resultElement.innerHTML = `<p>Custo para assentar piso: R$ ${totalCost.toFixed(2)}</p>`;
}
