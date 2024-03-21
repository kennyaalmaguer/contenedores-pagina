// JavaScript Document
function guardarTexto() {
  var texto = document.getElementById("textfield").value;
  localStorage.setItem("textoGuardado", texto);
  return true;
}

function verificarTexto() {
  var textoGuardado = localStorage.getItem("textoGuardado");
  if (textoGuardado) {
    console.log("Texto guardado en localStorage:", textoGuardado);
    alert("Texto guardado en localStorage: " + textoGuardado);
  } else {
    console.log("No hay texto guardado en localStorage.");
    alert("No hay texto guardado en localStorage.");
  }
}
