document.addEventListener('DOMContentLoaded', () => {

    // card options

    const cardArray =[
        {
            name: 'apple',
            img: 'images/apple1.jpg' 
        },
        {
            name: 'apple',
            img: 'images/apple1.jpg'
        },
        {
            name: 'orange',
            img: 'images/orange1.jpg'
        },
        {
            name: 'orange',
            img: 'images/orange1.jpg'
        },
        {
            name: 'strawberry',
            img: 'images/strawberry1.jpg'
        },
        {
            name: 'strawberry',
            img: 'images/strawberry1.jpg'
        },
        {
            name: 'watermelon',
            img: 'images/watermelon1.jpg'
        },
        {
            name: 'watermelon',
            img: 'images/watermelon1.jpg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())
    console.log(cardArray);

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    function createBoard(){
        for (let i = 0; i <cardArray.length; i++){
            const card = document.createElement('img');
            card.setAttribute('src', 'images/rainbow2.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function flipCard(){
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)  
        cardsChosenId.push(cardId)  
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
        console.log(cardsChosen);
    }


function checkForMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
  
    if (optionOneId == optionTwoId){
        alert('You have clicked the same image');
        cards[optionOneId].setAttribute('src', 'images/rainbow2.jpg') 
        cards[optionTwoId].setAttribute('src', 'images/rainbow2.jpg')   
    } else if (cardsChosen[0] === cardsChosen[1]){
        alert('You have found a match')
        cards[optionOneId].setAttribute('src', 'images/blankk.jpg') 
        cards[optionTwoId].setAttribute('src', 'images/blankk.jpg') 
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/rainbow2.jpg') 
        cards[optionTwoId].setAttribute('src', 'images/rainbow2.jpg')  
        alert('Sorry, try again')
    }
cardsChosen = []
cardsChosenId = []
resultDisplay.textContent = cardsWon.length
if (cardsWon.length === cardArray.length/2){
    resultDisplay.textContent = 'Congratulations'
}

}

    createBoard()
})
