function validar() {
    const año = parseInt(document.getElementById("año").value);
    const mensaje = document.getElementById("mensaje");

    if (!año) {
      mensaje.textContent = "⚠️ Por favor, introduce un año.";
      return;
    }

    if (año === 1492) {
      window.location.href = '../exercise1.html'; // ✅ Respuesta correcta
    } else {
      mensaje.textContent = "❌ Respuesta incorrecta. Intenta de nuevo.";
    }
  }