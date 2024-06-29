import './styles.css'
import Icon from './hero.jpg'

const hero = document.querySelector('#hero');
const imgContainer = document.createElement('div');
imgContainer.id = ('hero-img-container');
const img = document.createElement('img')
img.src = Icon;
img.alt = "Food picture"
imgContainer.appendChild(img)
hero.appendChild(imgContainer);
console.log('loggin\'');