function changeMode() {
   changeClasses();
   mudarTextos();
}

function changeClasses(){ // VAi adicionar as classes que não tem a classe dark mode
    button.classList.toggle('dark-mode'); // Vai mudar as classes para essa dark mode
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    
}

function mudarTextos(){
    const lightMode = "Light Mode"; 
    const darkMode = "Dark Mode";


    if(button.classList.contains(darkModeClass)) {
        button.innerHTML = "Modo Claro"; 
        h1.innerHTML = "Modo escuro Ligado";

        return;
    }
    button.innerHTML = "Modo Escuro"; 
        h1.innerHTML = "Modo claro Ligado";



}

const darkModeClass = 'dark-mode';
const button = document.getElementById('modo-seleção');
const h1 = document.getElementById('mudar');
const body = document.getElementsByTagName('body') [0]; // Paramos em 8:25
const footer = document.getElementsByTagName('footer') [0];





button.addEventListener('click', changeMode); // clicar, selecionar função, depois colocar os estilos que vai mudar