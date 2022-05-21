function changeMode(){
    changeClasses();
    changeText();    
}

function changeClasses(){
    botao.classList.toggle(darkModeClass);
    modo.classList.toggle(darkModeClass);
    rodape.classList.toggle(darkModeClass)
    body.classList.toggle(darkModeClass);
}

function changeText(){
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if(botao.classList.contains(darkModeClass)){
        botao.innerHTML = lightMode;
        modo.innerHTML = darkMode + " ON";
        return;
    }

    botao.innerHTML = darkMode;
    modo.innerHTML = lightMode + " ON";

}

const darkModeClass = 'dark-mode';
const botao = document.getElementById('mode-selector');
const modo = document.getElementById('page-title');
const rodape = document.getElementsByTagName('footer')[0];
const body = document.getElementsByTagName('body')[0];

botao.addEventListener('click', changeMode);