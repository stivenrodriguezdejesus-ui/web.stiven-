const botonOscuro = document.getElementById('boton-oscuro');

botonOscuro.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Cambiar el icono del círculo
    if (document.body.classList.contains('dark-mode')) {
        botonOscuro.textContent = '☀️';
    } else {
        botonOscuro.textContent = '🌙';
    }
})