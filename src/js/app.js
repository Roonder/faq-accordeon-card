document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
});

function iniciarApp() {
    showInfo();
}

function showInfo() {
    const sections = document.querySelectorAll('.questions__title');
    sections.forEach(section => {
        section.addEventListener('click', () => {
            const box = document.querySelector('.desktop-illustration__box');
            box.classList.toggle('active');
            section.classList.toggle('active');
            const info = section.nextElementSibling;
            info.classList.toggle('show');
            console.log(info);
        });
    })
}