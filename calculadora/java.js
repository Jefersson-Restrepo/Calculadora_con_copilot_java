// Declarar las variables para manipular el DOM
const nro1 = document.getElementById("nro1");
const nro2 = document.getElementById("nro2");
const resultado = document.getElementById("resultado");

function operaciones(operador) {
  // Si el botón es 'CLE', limpiamos 
  if (operador === "CLE") {
    limpiar();
    return;
  }

  //  operaciones matemáticas
  if (nro1.value === "" || nro2.value === "") {
    resultado.textContent = "Concentrado, por favor ingrese los números para realizar la operación";
    return;
  }

  const num1 = Number(nro1.value);
  const num2 = Number(nro2.value);

  switch (operador) {
    case "+":
      resultado.textContent = num1 + num2;
      break;
    case "-":
      resultado.textContent = num1 - num2;
      break;
    case "*":
      resultado.textContent = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        resultado.textContent = "No se puede dividir por cero";
      } else {
        resultado.textContent = num1 / num2;
      }
      break;
  }
}

function limpiar() {
  nro1.value = "";
  nro2.value = "";
  resultado.textContent = "000";
}