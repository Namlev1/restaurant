import './styles.css'
import homePage from './home'
import menuPage from "./menu";
import aboutPage from "./about";

const content = document.querySelector('#content')

const homeBtn = document.querySelector('#home-btn')
const menuBtn = document.querySelector('#menu-btn')
const aboutBtn = document.querySelector('#about-btn')

function clearPage() {
    const hero = document.querySelector('#hero')
    if (hero)
        hero.remove();
    while(content.firstChild)
        content.removeChild(content.firstChild);
}

homeBtn.addEventListener('click', () => {
    clearPage();
    homePage()
});

menuBtn.addEventListener('click', () => {
    clearPage();
    menuPage();
});

aboutBtn.addEventListener('click', () => {
    clearPage();
    aboutPage();
});

homePage()