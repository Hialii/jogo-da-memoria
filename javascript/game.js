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

let firstCard = '', secondCard = '';

const createElement = (tag,className) => {
   const element = document.createElement(tag);
   element.className = className;
   return element;
}

const checkCards = () => {
   
}

const revealCard = ({target}) => {  //target = elemento que foi clicado
  if(target.parentNode.className.includes('reveal-card')) {
   return;
  }

  if(firstCard === '') {
   target.parentNode.classList.add("reveal-card") // pega todo o elemento "card" e adiciona class
   firstCard = target.parentNode;
  }else if(secondCard === '') {
   target.parentNode.classList.add("reveal-card") 
   secondCard = target.parentNode;

   checkCards();
  }
}
  
   


const createCard = (character) => {
   const card = createElement('div', 'card');
   const front = createElement('div', 'face front');
   const back = createElement('div', 'face back');

   front.style.backgroundImage = `url('../assets/${character}.jpg')`

   card.appendChild(front);
   card.appendChild(back);
   card.addEventListener('click', revealCard)
   grid.appendChild(card);

   

   return card
}

const loadGame = () => {
   
   const duplicateCharacters = [...characters, ...characters];//spread operator ... espalhar os elementos de um array dentro de outro
   
   const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5); //os números menor que 0.5 serão retornados como negativos 

   duplicateCharacters.forEach((character) => {
      const card = createCard(character);
      grid.appendChild(card)
   })
}

loadGame();