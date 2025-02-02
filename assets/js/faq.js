document.querySelectorAll('.question').forEach((question, index) => {
    question.addEventListener('click', () => {
        document.querySelectorAll('.answer')[index].classList.toggle('hidden');
    });
});
