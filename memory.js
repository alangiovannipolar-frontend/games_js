console.log('Start memory js');

const MemoryCardGame = (() => {

  const grid = document.querySelector('.grid');
  let cardChosen = [];
  const cardArray = [
     "./images/lemon.png",
     "./images/lettuce.png",
     "./images/mango.png",
     "./images/strawberry.png",
     "./images/tomato.png",
      "./images/lemon.png",
     "./images/lettuce.png",
     "./images/mango.png",
     "./images/strawberry.png",
     "./images/waterMelon.png",
     "./images/tomato.png",
     "./images/waterMelon.png",
    ]

  const clean = () => {
    cardChosen = []
  }

  const reviewMatch = function() {
    console.log("review match")
    const card1 = cardArray[cardChosen[0]];
    const card2 = cardArray[cardChosen[1]]
    if(card1===card2) {
      document.getElementById(cardChosen[0]).classList.add("chosen");
      document.getElementById(cardChosen[1]).classList.add("chosen");
    } else {
      document.getElementById(cardChosen[0]).style.backgroundImage = "none"
      document.getElementById(cardChosen[1]).style.backgroundImage = "none"
    }
    clean()
  }

  const turnOverCard = function(){
    const id = this.getAttribute("id");
    const image = cardArray[id];
    this.style.backgroundImage=`url(${image})`
    cardChosen.push(id)
    if(cardChosen.length === 2) {
      setTimeout(reviewMatch,200);
    }
  }

  const createBoard = () => {
    cardArray.forEach((item,index) => {
      const card = document.createElement("div");
      card.classList.add("card")
      card.id = `${index}`
      card.addEventListener('click',turnOverCard)
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