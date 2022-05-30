console.log('Start memory js');

const MemoryCardGame = (() => {

  const grid = document.querySelector('.grid');
  const result = document.querySelector('#result');
  let countWin = 0
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
  ].sort(() => 0.5 - Math.random())
  const WIN_NUMBER = cardArray.length/2;

  const clean = () => {
    cardChosen = []
  }

  const reviewWinner = () => {
   if(countWin===WIN_NUMBER) {
     result.textContent = "Congratulations you've found all the matches";
   }
  }

  const reviewMatch = function() {
    console.log("review match")
    const cardEl1 =  document.getElementById(cardChosen[0])
    const cardEl2 =  document.getElementById(cardChosen[1])
    const card1Image = cardArray[cardChosen[0]];
    const card2Image = cardArray[cardChosen[1]]
    if(card1Image===card2Image) {
      cardEl1.classList.add("chosen");
      cardEl2.classList.add("chosen");
      result.textContent = `You has found ${++countWin}`;
      reviewWinner()
    } else {
      cardEl1.style.backgroundImage = "none"
      cardEl2.style.backgroundImage = "none"
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