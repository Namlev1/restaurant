import Hero from "./hero.jpg";

const body = document.body;
const content = document.querySelector('#content');

export default function homePage() {
    const heroDiv = document.createElement('div')
    heroDiv.id = 'hero';
    const textDiv = document.createElement('div')
    textDiv.classList.add('hero-text');
    const ambient = document.createElement('p')
    ambient.classList.add('bold-font')
    ambient.textContent = 'AMBIENT';
    const h2 = document.createElement('h1')
    h2.textContent = 'Fine Dining';
    const description = document.createElement('p')
    description.classList.add('description')
    description.textContent = 'Benvenuti a La Dolce Vita, dove la cucina italiana autentica incontra un\'atmosfera elegante e accogliente. Godetevi piatti raffinati preparati con ingredienti freschi e di qualità.';

    const imgContainer = document.createElement('div');
    imgContainer.id = ('hero-img-container');
    const img = document.createElement('img')
    img.src = Hero;
    img.alt = "Food picture"

    imgContainer.appendChild(img)
    textDiv.appendChild(ambient);
    textDiv.appendChild(h2);
    textDiv.appendChild(description);
    heroDiv.appendChild(textDiv);
    heroDiv.appendChild(imgContainer)
    body.insertBefore(heroDiv, content)
}