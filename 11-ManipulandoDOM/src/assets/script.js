function changeMode() {
    console.log('Clique pow');
}

const button = document.getElementById('modo-seleção');
const h1 = document.getElementById('mudar');
const body = document.getElementsByTagName('body') [0]; // Paramos em 8:25
const body = document.getElementsByTagName('footer') [0];



button.addEventListener('click', changeMode); // clicar, selecionar função, depois colocar os estilos que vai mudar