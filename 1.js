var maxValue;

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  maxValue = document.getElementById("maxValue").value;

  if (maxValue !== null && !isNaN(maxValue)) {
    showEvenNumbers();
  } else {
    alert("Por favor, insira um valor numérico não vazio.");
  }
});

function showEvenNumbers() {
  var result = "";
  var sum = 0;

  for (var i = 2; i <= maxValue; i += 2) {
    result += i + " ";
    sum += i;
  }

  document.getElementsByClassName("result")[0].innerHTML =
    "<em>Números pares:</em> " + result + "<br><em>Soma total:</em> " + sum;
}
