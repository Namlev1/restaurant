import {createDiv, createH1, createH3, createP} from "./utils";
import Pizza from './assets/img/pizza.png'
import Spaghetti from './assets/img/spaghetti.png'
import Lasagna from './assets/img/lasagna.png'
import Risotto from './assets/img/risotto.png'
import Osso from './assets/img/osso.png'
import Caprese from './assets/img/caprese.png'
import Bruschetta from './assets/img/bruschetta.png'
import Tiramisu from './assets/img/tiramisu.png'

const content = document.querySelector('#content');

function createMenuElement(image, imageAlt, name, desc, price){
    const div = createDiv('menu-element')
    const img = document.createElement('img');
    img.src = image;
    img.alt = imageAlt;
    const h3 = createH3(name);
    const description = createP('description', desc);
    const priceElement = createP('price', price);
    div.appendChild(img);
    div.appendChild(h3)
    div.appendChild(description)
    div.appendChild(priceElement)
    return div;
}

export default function menuPage(){
    const h1 = createH1('Menu')
    const menuGrid = createDiv()
    menuGrid.id = 'menu-grid'

    const pizzaDesc = 'Una pizza classica con salsa di pomodoro, mozzarella e basilico fresco.'
    const pizza = createMenuElement(Pizza, 'Pizza image', 'Pizza Margherita', pizzaDesc, 14.99)
    menuGrid.appendChild(pizza);

    const spaghetti = createMenuElement(Spaghetti, 'Spaghetti image', 'Spaghetti Bolognese', 'desc', 14.99)
    menuGrid.appendChild(spaghetti);

    const lasagna = createMenuElement(Lasagna, 'Lasagna image', 'Lasagna', 'desc', 14.99)
    menuGrid.appendChild(lasagna);

    const risotto = createMenuElement(Risotto, 'Risotto image', 'Risotto alla Milanese', 'desc', 14.99)
    menuGrid.appendChild(risotto);

    const osso = createMenuElement(Osso, 'Osso image', 'Osso Buco', 'desc', 14.99)
    menuGrid.appendChild(osso);

    const caprese = createMenuElement(Caprese, 'Caprese image', 'Insalata Caprese', 'desc', 14.99)
    menuGrid.appendChild(caprese);

    const bruschetta = createMenuElement(Bruschetta, 'Bruschetta image', 'Bruschetta', 'desc', 14.99)
    menuGrid.appendChild(bruschetta);

    const tiramisu = createMenuElement(Tiramisu, 'Tiramisu image', 'Tiramisu', 'desc', 14.99)
    menuGrid.appendChild(tiramisu);

    content.appendChild(h1);
    content.appendChild(menuGrid);
}