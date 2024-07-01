import './styles.css'
import TickIcon from './assets/svg/tick.svg'
import heroPage from './home'

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
heroPage();