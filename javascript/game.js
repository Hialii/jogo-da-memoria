const grid = document.querySelector(".grid");
const characters = [
   'arma',
   'weed',
   'tranquileva', 
   'casal',
   'jason',
   'supremanova',
   'mundo',
   'summer',
];


const createElement = (tag,className) => {
   const element = document.createElement(tag);
   element.className = className;
   return element;
}


const createCard = (character) => {
   const card = createElement('div', 'card');
   const front = createElement('div', 'face front');
   const back = createElement('div', 'face back');

   front.style.backgroundImage = `url('../assets/${character}.jpg')`

   card.appendChild(front);
   card.appendChild(back);
   grid.appendChild(card);

   return card
}

const loadGame = () => {

   const duplicateCharacter = [ ... characters, ... characters ] //spread operator ... espalhar os elementos de um array dentro de outro
   characters.forEach((character) => {
      const card = createCard(character);
      grid.appendChild(card)
   })
}

loadGame()