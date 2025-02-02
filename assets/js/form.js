const showFormButton = document.querySelector('.show-form');
const formContainer = document.querySelector('.admission-form');

showFormButton.addEventListener('click', () => {
    formContainer.classList.toggle('hidden');
});

const submitButton = document.querySelector('.submit-form .submit');
submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default form submission
    alert('Form submitted successfully!');
});