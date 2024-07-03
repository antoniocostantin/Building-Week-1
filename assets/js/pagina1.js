const proceedPromise = document.getElementById("proceedPromise");
const btnfeedback = document.getElementById("btnfeedback");
proceedPromise.addEventListener("change", function () {
  btnfeedback.disabled = !proceedPromise.checked;
});
btnfeedback.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "Pagina2.html";
});
