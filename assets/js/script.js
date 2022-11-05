const cardObjectDefined = [
    {id:1, imagePath:'/images/king-of-clubs.PNG'},
    {id:2, imagePath:'/images/Jack-of-hearts.PNG'},
    {id:3, imagePath:'/images/Ace-of-Spades.PNG'},
    {id:4, imagePath:'/images/Queen-ofDiamonds.PNG'}
]     

function createCard(cardItem) {
    //Div Elements that make up a card 
    const cardElem = createElement('div')
    const cardInnerElem = createElement('div')
    const cardFrontElem = createElement('div')
    const cardBackElem =  createElement('div')

    
}

function createElement(elemType){
    return document.createElement(elemType)
}