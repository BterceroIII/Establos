const form = document.getElementById('contact-form');
const fullnameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const affairInput = document.getElementById('affair');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Perform validation
    const isValid = validateForm();

    if (isValid) {
        // Form is valid, simulate form submission
        simulateFormSubmission();
    }
});

function validateForm() {
    // Reset previous error messages
    resetErrorMessages();

    // Track the validation status
    let isValid = true;

    // Check if fullname is empty
    if (fullnameInput.value.trim() === '') {
        displayErrorMessage(fullnameInput, 'Por favor, ingrese su nombre');
        isValid = false;
    }

    // Check if email is empty or invalid format
    const email = emailInput.value.trim();
    if (email === '') {
        displayErrorMessage(emailInput, 'Por favor, ingrese su correo electrónico');
        isValid = false;
    } else if (!isValidEmail(email)) {
        displayErrorMessage(emailInput, 'Por favor, ingrese un correo electrónico válido');
        isValid = false;
    }

    // Check if phone is empty or invalid format
    const phone = phoneInput.value.trim();
    if (phone === '') {
        displayErrorMessage(phoneInput, 'Por favor, ingrese su teléfono');
        isValid = false;
    } else if (!isValidPhone(phone)) {
        displayErrorMessage(phoneInput, 'Por favor, ingrese un número de teléfono válido');
        isValid = false;
    }

    // Check if affair is empty
    if (affairInput.value.trim() === '') {
        displayErrorMessage(affairInput, 'Por favor, ingrese el asunto');
        isValid = false;
    }

    // Check if message is empty
    if (messageInput.value.trim() === '') {
        displayErrorMessage(messageInput, 'Por favor, ingrese su mensaje');
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Simple phone number validation regex (accepts digits and hyphens)
    const phoneRegex = /^[\d-]+$/;
    return phoneRegex.test(phone);
}

function displayErrorMessage(inputElement, message) {
    const errorElement = document.createElement('p');
    errorElement.className = 'error-message';
    errorElement.style.color = 'red';
    errorElement.textContent = message;

    // Add error message after the input element
    inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);

    // Add error class to the input element
    inputElement.classList.add('error');
}

function resetErrorMessages() {
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(function (errorMessage) {
        errorMessage.remove();
    });

    const errorInputs = form.querySelectorAll('.error');
    errorInputs.forEach(function (errorInput) {
        errorInput.classList.remove('error');
    });
}

function simulateFormSubmission() {
    // Display success message
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Su solicitud ha sido enviada. ¡Gracias!';
    successMessage.style.color = 'green';

    form.appendChild(successMessage);

    // Reset form after a delay
    setTimeout(function () {
        form.reset();
        successMessage.remove();
    }, 3000);
}