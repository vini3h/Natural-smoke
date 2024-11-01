document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.side-item a');
    const currentPage = window.location.pathname.split('/').pop(); // Obtém o nome da página atual

    items.forEach(item => {
        const link = item.getAttribute('href');

        if (link === currentPage) {
            item.parentElement.classList.add('active'); // Adiciona a classe active ao item pai
        }
    });
});