const grid = document.querySelector(".grid");
const timer = document.querySelector(".timer");
const spanPlayer = document.querySelector(".player");
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

const checkEndGame = () => {
   const disableCards = document.querySelectorAll(".disable-card");

   if(disableCards.length === 16) {
      clearInterval(this.loop);
      alert(`Parabéns ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML}s`);
   }
}


const checkCards = () => {
   const firstCharacter = firstCard.getAttribute('data-character');
   const secondCharacter = secondCard.getAttribute('data-character');

   if(firstCharacter === secondCharacter) {
      firstCard.firstChild.classList.add("disable-card");
      secondCard.firstChild.classList.add('disable-card');
      firstCard = '', secondCard = '';

      checkEndGame();
   } else {
      setTimeout(() => {
      firstCard.classList.remove("reveal-card");
      secondCard.classList.remove("reveal-card");

      firstCard = '', secondCard = '';
      }, 500)

   }
}

const revealCard = ({target}) => {  //target = elemento que foi clicado
  if(target.parentNode.className.includes('reveal-card')) {
   return;
  }

  if(firstCard === '') {
   target.parentNode.classList.add("reveal-card"); // pega todo o elemento "card" e adiciona class
   firstCard = target.parentNode;
  }else if(secondCard === '') {
   target.parentNode.classList.add("reveal-card");
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
   card.addEventListener('click', revealCard);
   card.setAttribute('data-character', character);
   grid.appendChild(card);


   return card
}

const loadGame = () => {
   
   const duplicateCharacters = [...characters, ...characters];//spread operator ... espalhar os elementos de um array dentro de outro
   
   const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5); //os números menor que 0.5 serão retornados como negativos 

   duplicateCharacters.forEach((character) => {
      const card = createCard(character);
      grid.appendChild(card);
   })
}


const startTimer = () => {
   this.loop = setInterval(() => {
      const currentTime = +timer.textContent; // o operdor + converte a string para numero
      timer.textContent = currentTime + 1
   }, 1000)
}
window.onload = () => {
   const playerName = localStorage.getItem('player');
   spanPlayer.innerHTML = `Player: ${playerName}`;
   startTimer();
   loadGame();
}

