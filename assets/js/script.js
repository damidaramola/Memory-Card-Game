const cardObjectDefined = [
    {id:1, imagePath:'/images/king-of-clubs.PNG'},
    {id:2, imagePath:'/images/Jack-of-hearts.PNG'},
    {id:3, imagePath:'/images/Ace-of-Spades.PNG'},
    {id:4, imagePath:'/images/Queen-ofDiamonds.PNG'}
]     

const cardBackImgPath = '/images/card-back-Blue.png'

function createCard(cardItem) {
    //Div Elements that make up a card 
    const cardElem = createElement('div')
    const cardInnerElem = createElement('div')
    const cardFrontElem = createElement('div')
    const cardBackElem =  createElement('div')

   //create front and back image elements for cards 
    const cardFrontImg = createElement('img')
    const cardBackImg = createElement('img')

   //add class and id to card element
    addClassToElement(cardElem,'card')
    addIdToElement(cardElem, cardItem.id)

    //add class to inner card element 
    addClassToElement(cardInnerElem , 'card-inner')

    //add class to front card element
    addClassToElement(cardFrontElem, 'card-front')
    
    //add class to front card element
    addClassToElement(cardBackElem, 'card-back')

    //add src attribute and appropriate vlaues to img element of back of card 
   addSrcToImageElem(cardBackElem , cardBackImgPath) 

    //add src attribute and appropriate vlaues to img element of front of card 
    addSrcToImageElem(cardFrontElem , cardItem.ImgPath) 

    //assign class to back Image element *bug
    addClassToElement(cardBackElem, 'card-img')

     //assign class to front Image element *bug
     addClassToElement(cardFrontElem, 'card-img')
} 

function createElement(elemType){
    return document.createElement(elemType)
}

function addClassToElement(elem, className){
elem.classList.add(className)
}

function addIdToElement(elem ,id) {
   elem.id = id 
}

function addSrcToImageElem(imgElem,src) {
    imgElem.src = src
}

function addChildElement(parenrElem , childElem){
    
} 