function saludarOnClickDiv() {
    alert("Hola! Soy el div");
}

window.onload = function() {
    // Configura el evento para el div
    document.getElementById('elDiv').addEventListener('click', saludarOnClickDiv);
}
