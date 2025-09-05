const boton = document.getElementById("saludoBtn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
  mensaje.textContent = "¡Hola! Gracias por visitar mi portafolio";
  mensaje.style.color = "#004080"; 
  mensaje.style.fontWeight = "bold";
});

