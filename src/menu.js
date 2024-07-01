import {createDiv, createH1, createH3, createP} from "./utils";
import Pizza from './assets/img/pizza.png'
import Spaghetti from './assets/img/spaghetti.png'
import Lasagna from './assets/img/lasagna.png'
import Risotto from './assets/img/risotto.png'
import Osso from './assets/img/osso.png'
import Caprese from './assets/img/caprese.png'
import Panzanetta from './assets/img/panzanella.png'
import Tiramisu from './assets/img/tiramisu.png'

const content = document.querySelector('#content');

function createMenuElement(image, imageAlt, name, desc, price) {
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

function addMenuElements(menuGrid) {
    const panzettaDest = 'Un\'insalata toscana con pane raffermo, pomodori, cipolle, cetrioli, basilico, olio d\'oliva e aceto.'
    const panzanetta = createMenuElement(Panzanetta, 'Panzanetta image', 'Panzanetta', panzettaDest, '15 $')
    panzanetta.firstChild.classList.add('small-img')
    menuGrid.appendChild(panzanetta);

    const pizzaDesc = 'Una pizza classica con salsa di pomodoro, mozzarella e basilico fresco.'
    const pizza = createMenuElement(Pizza, 'Pizza image', 'Pizza Margherita', pizzaDesc, '13 $')
    menuGrid.appendChild(pizza);

    const lasagnaDesc = 'Strati di pasta, ragù di carne, besciamella e Parmigiano, cotti al forno.'
    const lasagna = createMenuElement(Lasagna, 'Lasagna image', 'Lasagna', lasagnaDesc, '19 $')
    menuGrid.appendChild(lasagna);

    const capreseDesc = 'Fette di pomodoro, mozzarella di bufala, basilico e olio d\'oliva.'
    const caprese = createMenuElement(Caprese, 'Caprese image', 'Insalata Caprese', capreseDesc, '9 $')
    menuGrid.appendChild(caprese);

    const risottoDesc = 'Risotto cremoso con zafferano, brodo di carne, burro e Parmigiano.'
    const risotto = createMenuElement(Risotto, 'Risotto image', 'Risotto alla Milanese', risottoDesc, '26 $')
    menuGrid.appendChild(risotto);

    const ossoDesc = 'Stinco di vitello brasato con vino bianco, brodo e verdure.'
    const osso = createMenuElement(Osso, 'Osso image', 'Osso Buco', ossoDesc, '20 $')
    menuGrid.appendChild(osso);

    const spaghettiDesc = 'Spaghetti conditi con ragù di carne, pomodori e verdure.'
    const spaghetti = createMenuElement(Spaghetti, 'Spaghetti image', 'Spaghetti Bolognese', spaghettiDesc, '21 $')
    menuGrid.appendChild(spaghetti);

    const tiramisuDesc = 'Dessert con savoiardi imbevuti di caffè, crema al mascarpone e cacao.'
    const tiramisu = createMenuElement(Tiramisu, 'Tiramisu image', 'Tiramisu', tiramisuDesc, '8 $')
    menuGrid.appendChild(tiramisu);
}

export default function menuPage() {
    const h1 = createH1('Menu')
    const menuGrid = createDiv()
    menuGrid.id = 'menu-grid'
    addMenuElements(menuGrid);

    content.appendChild(h1);
    content.appendChild(menuGrid);
}