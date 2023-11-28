let values = [];
let valueInput = document.getElementById("value");

document.getElementById("adicionar").addEventListener("click", function (e) {
  e.preventDefault();

  let inputValue = valueInput.value;

  if (inputValue && !isNaN(inputValue)) {
    addValue(inputValue);
  } else {
    alert("Por favor, insira valores numéricos não vazios.");
  }
});

function addValue(inputValue) {
  values.push(parseFloat(inputValue));
  valueInput.value = "";
}

function showResult(message) {
  if (values.length > 0) {
    document.getElementsByClassName("result")[0].innerHTML = message;
  } else {
    alert("Não há valores para mostrar");
  }
}

function showValues() {
  showResult(`Valores inseridos: ${values.join(", ")}`);
}

function showMaxMin() {
  if (values.length > 0) {
    const maxValue = Math.max(...values);
    const minValue = Math.min(...values);
    showResult(`Maior valor: ${maxValue}, Menor valor: ${minValue}`);
  } else {
    alert("Não há valores para mostrar");
  }
}
