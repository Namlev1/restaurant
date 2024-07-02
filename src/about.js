import Restaurant from './assets/img/restaurant.jpg'
import {createDiv, createH1, createP} from "./utils";

const content = document.querySelector('#content');

function addDescription() {
    const pContainer = createDiv('about-text')
    const p1 = createP('description', 'Benvenuti a "La Dolce Vita", il nostro angolo di Italia nel cuore della città. Qui, celebriamo l\'autentica cucina italiana, utilizzando solo ingredienti freschi e di alta qualità per portare nei vostri piatti i sapori genuini della nostra terra.')
    const p2 = createP('description', 'Il nostro menu è un viaggio attraverso le diverse regioni d\'Italia, offrendo piatti tradizionali come la pizza margherita, la lasagna al forno, il risotto alla milanese e molti altri. Ogni ricetta è preparata con passione e cura, rispettando le tradizioni culinarie che rendono unica la nostra cultura.')
    const p3 = createP('description', 'A "La Dolce Vita" non serviamo solo cibo, ma creiamo esperienze. Il nostro ambiente accogliente e il servizio attento vi faranno sentire come a casa, permettendovi di godere appieno dei piaceri della buona tavola italiana.')
    const p4 = createP('description', 'Vi invitiamo a scoprire la dolce vita con noi, dove ogni pasto è un\'opera d\'arte e ogni visita diventa un ricordo indimenticabile.')
    const p5 = createP('description', 'Grazie per aver scelto "La Dolce Vita". Siamo lieti di accogliervi e di condividere con voi il nostro amore per la cucina italiana.')

    pContainer.appendChild(p1)
    pContainer.appendChild(p2)
    pContainer.appendChild(p3)
    pContainer.appendChild(p4)
    pContainer.appendChild(p5)
    return pContainer;
}

export default function aboutPage() {
    const imgContainer = createDiv('restaurant-container')
    const image = document.createElement('img')
    image.src = Restaurant;
    image.alt = 'Restaurant picture'
    image.classList.add('restaurant');
    imgContainer.appendChild(image)

    const h1 = createH1('About us')
    const pContainer = addDescription();

    content.appendChild(h1)
    content.appendChild(imgContainer)
    content.appendChild(pContainer)
}