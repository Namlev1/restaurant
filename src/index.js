import './styles.css'
import homePage from './home'

const header = document.querySelector('header')
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
});

aboutBtn.addEventListener('click', () => {
    clearPage();
});
