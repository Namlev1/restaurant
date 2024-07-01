import './styles.css'
import Hero from './hero.jpg'
import TickIcon from './assets/svg/tick.svg'

const hero = document.querySelector('#hero');
const imgContainer = document.createElement('div');
imgContainer.id = ('hero-img-container');
const img = document.createElement('img')
img.src = Hero;
img.alt = "Food picture"
imgContainer.appendChild(img)
hero.appendChild(imgContainer);

const style = document.createElement('style');
style.innerHTML = `
  .input-wrap::after {
    content: '';
    background-image: url('${TickIcon}');
    background-size: contain;
    background-repeat: no-repeat;
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none; /* Allow clicks to pass through */
  }
`;
document.head.appendChild(style);

console.log('loggin\'');