console.log('Start memory js');

const MemoryCardGame = (() => {

  const grid = document.querySelector('.grid');
  const cardArray = [
     "./images/apple.png",
     "./images/orange.png",
     "./images/grapes.png",
     "./images/banana.png",
     "./images/papaya.png",
     "./images/cranberry.png"
    ]


  const createBoard = () => {
    cardArray.forEach((item,index) => {
      const card = document.createElement("div");
      card.classList.add("card")
      card.id = `card-${index}`
      //card.addEventListener('click',TurnCard)
      grid.appendChild(card)
    })
  }

  const start = () => {
    createBoard();
  }

  return {
    start
  }
})()

MemoryCardGame.start();