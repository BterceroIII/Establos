// Obtener el formulario
const formulario = document.getElementById('formulario');

// Agregar el evento submit al formulario
formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Validar que todos los campos estén llenos
    if (validarCamposLlenos()) {
        // Mostrar mensaje de éxito
        alert('El servicio se ha pagado con éxito. Le enviaremos un correo con más detalles de la compra.');

        // Aquí puedes agregar el código para enviar el formulario o realizar otras acciones relacionadas con el pago
    } else {
        // Mostrar mensaje de error
        alert('Por favor, complete todos los campos antes de enviar el formulario.');
    }
});

// Función para validar que todos los campos estén llenos
function validarCamposLlenos() {
    const campos = formulario.querySelectorAll('input[required]');
    let camposLlenos = true;

    campos.forEach(function (campo) {
        if (campo.value.trim() === '') {
            camposLlenos = false;
        }
    });

    return camposLlenos;
}