function toggleAccessibilityMenu() {
    var menu = document.getElementById('accessibility-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function closeAccessibilityMenu() {
    var menu = document.getElementById('accessibility-menu');
    menu.style.display = 'none';
}

function increaseFont() {
    // Adicione aqui a lógica para aumentar o tamanho da fonte
    // Exemplo: aumentando o tamanho da fonte em 2 pixels
    var currentSize = window.getComputedStyle(document.body, null).getPropertyValue('font-size');
    var newSize = (parseFloat(currentSize) + 2) + 'px';
    document.body.style.fontSize = newSize;
}

function toggleContrast() {
    // Adicione aqui a lógica para alternar o contraste
    var body = document.body;

    if (body.style.backgroundColor === 'rgb(0, 0, 0)') {
        // Se o fundo estiver preto, volta para o padrão
        body.style.backgroundColor = '';
        body.style.color = '';
    } else {
        // Caso contrário, muda para o contraste (preto)
        body.style.backgroundColor = '#000';
        body.style.color = '#fff';
    }
}