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

let contador = 1;
let slideInterval; // Variável para armazenar o intervalo

// Função para iniciar a rotação automática
function startSlideRotation() {
    slideInterval = setInterval(function() {
        document.getElementById('slide' + contador).checked = true;
        contador++;

        if (contador > 4) {
            contador = 1;
        }
    }, 5000); // Intervalo de 5 segundos
}

// Iniciar a rotação assim que o documento for carregado
startSlideRotation();

// Interromper a rotação quando o usuário clicar nas barras de navegação
const bars = document.querySelectorAll('.bar');
bars.forEach(bar => {
    bar.addEventListener('click', function() {
        clearInterval(slideInterval); // Interrompe o intervalo
    });
});
