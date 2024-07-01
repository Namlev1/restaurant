import Hero from "./hero.jpg";
import {
    createDate,
    createDiv,
    createForm,
    createH1,
    createH2,
    createP,
    createSelect,
    createTime
} from "./utils";
import TickIcon from "./assets/svg/tick.svg";

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

function createHeroDiv() {
    const heroDiv = document.createElement('div')
    heroDiv.id = 'hero';
    const textDiv = createDiv('hero-text')
    const ambient = createP('bold-font', 'AMBIENT')
    const h1 = createH1('Fine Dining')
    const description = createP('description','Benvenuti a La Dolce Vita, dove la cucina italiana autentica incontra un\'atmosfera elegante e accogliente. Godetevi piatti raffinati preparati con ingredienti freschi e di qualità.')

    const imgContainer = document.createElement('div');
    imgContainer.id = ('hero-img-container');
    const img = document.createElement('img')
    img.src = Hero;
    img.alt = "Food picture"

    imgContainer.appendChild(img)
    textDiv.appendChild(ambient);
    textDiv.appendChild(h1);
    textDiv.appendChild(description);
    heroDiv.appendChild(textDiv);
    heroDiv.appendChild(imgContainer)
    return heroDiv;
}

function createSubmitBtn() {
    const button = document.createElement('button');
    button.type = 'submit';
    button.className = 'gold-btn';
    const span1 = document.createElement('span');
    span1.style.color = '#c2a779';
    span1.textContent = '◆ ';
    button.appendChild(span1);
    button.appendChild(document.createTextNode('SUBMIT'));
    const span2 = document.createElement('span');
    span2.style.color = '#c2a779';
    span2.textContent = ' ◆';
    button.appendChild(span2);
    return button;
}

function createBooking() {
    const form = createForm('booking')
    const h2 = createH2('Book a table')

    const peopleInputWrap = createDiv('input-wrap')
    const peopleOpt = {
        1: '1 Person',
        2: '2 People',
        3: '3 People',
        4: '4 People',
        5: '5 People',
        6: '6 People'
    }
    const peopleInput = createSelect('people', 'people', peopleOpt);
    peopleInputWrap.appendChild(peopleInput)

    const dateInputWrap = createDiv('input-wrap')
    const dateInput = createDate('date')
    dateInputWrap.appendChild(dateInput)

    const timeInputWrap = createDiv('input-wrap')
    const timeInput = createTime('time', 'time')
    timeInputWrap.appendChild(timeInput)

    const submitBtn = createSubmitBtn();

    form.appendChild(h2)
    form.appendChild(peopleInputWrap)
    form.appendChild(dateInputWrap)
    form.appendChild(timeInputWrap)
    form.appendChild(submitBtn)
    return form;
}

const body = document.body;
const content = document.querySelector('#content');

export default function homePage() {
    const heroDiv = createHeroDiv();
    body.insertBefore(heroDiv, content)
    const booking = createBooking();
    content.appendChild(booking)
}