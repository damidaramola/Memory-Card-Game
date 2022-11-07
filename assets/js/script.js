const cardObjectDefined = [{
        id: 1,
        imagePath: 'assets/images/king-of-clubs.PNG'
    },
    {
        id: 2,
        imagePath: 'assets/images/Jack-of-hearts.PNG'
    },
    {
        id: 3,
        imagePath: 'assets/images/Ace-of-Spades.PNG'
    },
    {
        id: 4,
        imagePath: 'assets/images/Queen-ofDiamonds.PNG'
    }
];

const cardBackImgPath = 'assets/images/card-back-Blue.png';
const cardPlacementElem = document.querySelector('.card-placement');

let cards = [];

const playGameButtonElem = document.getElementById('playGame');

const collapsedGridAreaTemplate = '"a a" "a a"';
const cardCollectionCellClass = ".card-1";

const numCards = cardObjectDefined.length;
loadGame();

function loadGame() {
    createCards();
    cards = document.querySelectorAll('.card');
    playGameButtonElem.addEventListener('click', () => startGame());
}

function startGame() {
    initializeNewGame();
    startRound();
}

function initializeNewGame() {

}

function startRound() {
    collectCards();
    flipCards(true)
}

function initializeNewRound() {

}

function collectCards() {
    transformGridArea(collapsedGridAreaTemplate);
    addCardsToGridAreaCell(cardCollectionCellClass);

}

function transformGridArea(areas) {
    cardContainerElem.style.gridTemplateAreas = areas;
}

function addCardsToGridAreaCell(cellPositionClassName) {
    const cellPositionElem = document.querySelector(cellPositionClassName);

    cards.forEach((card, index) => {
        addChildElement(cellPositionElem, card)
    });


}

function flipCard(card, flipToBack){
    const innerCardElem = card.firstChild;
    if (flipToBack && !innerCardElem.classList.contains('flip-it')){
        innerCardElem.classList.add('flip-it');
    }
    else if (innerCardElem.classList.contains('flip-it')){
        innerCardElem.classList.remove('flip-it');
    }
}



function flipCards(flipToBack){
 cards.forEach((card,index)=>{
    setTimeout(()=>{
        flipCard(card,flipToBack)
    },index *100 )
 })
}

function shuffleCards(){
    const id = setInterval(shuffle,12);
    let shuffleCount = 0;
    function shuffle(){

        randomizeCardPositions()

        if(shuffleCount == 500){
            clearInterval(id);
        }
        else{
            shuffleCount++;
        }
    }

}

function createCards() {
    cardObjectDefined.forEach((cardItem) => {
        createCard(cardItem);
    })
}

function  randomizeCardPositions(){
    const random1 = Math.floor(Math.random() * numCards) + 1;
    const random2 =  Math.floor(Math.random() * numCards) + 1;
    
}

function createCard(cardItem) {
    //Div Elements that make up a card 
    const cardElem = createElement('div');
    const cardInnerElem = createElement('div');
    const cardFrontElem = createElement('div');
    const cardBackElem = createElement('div');

    //create front and back image elements for cards 
    const cardFrontImg = createElement('img');
    const cardBackImg = createElement('img');

    //add class and id to card element
    addClassToElement(cardElem, 'card');
    addIdToElement(cardElem, cardItem.id);

    //add class to inner card element 
    addClassToElement(cardInnerElem, 'card-inner');

    //add class to front card element
    addClassToElement(cardFrontElem, 'card-front');

    //add class to front card element
    addClassToElement(cardBackElem, 'card-back');

    //add src attribute and appropriate vlaues to img element of back of card 
    addSrcToImageElem(cardBackImg, cardBackImgPath);

    //add src attribute and appropriate vlaues to img element of front of card 
    addSrcToImageElem(cardFrontImg, cardItem.imagePath);

    //assign class to back Image element *bug fixed
    addClassToElement(cardBackImg, 'card-img');

    //assign class to front Image element *bug fixed
    addClassToElement(cardFrontImg, 'card-img');

    //add front element as child  element to front card element 
    addChildElement(cardFrontElem, cardFrontImg);

    //add back element as child  element to back card element 
    addChildElement(cardBackElem, cardBackImg);

    //add front element as child  element to front inner element 
    addChildElement(cardInnerElem, cardFrontElem);

    //add back element as child  element to back inner element 
    addChildElement(cardInnerElem, cardBackElem);

    //add inner card element as child element to card element 
    addChildElement(cardElem, cardInnerElem);

    //add card element as child element to appropriate grid cell
    addCardToGridCell(cardElem);
}


function createElement(elemType) {
    return document.createElement(elemType);
}

function addClassToElement(elem, className) {
    elem.classList.add(className);
}

function addIdToElement(elem, id) {
    elem.id = id;
}

function addSrcToImageElem(imgElem, src) {
    imgElem.src = src;
}

function addChildElement(parentElem, childElem) {
    parentElem.appendChild(childElem);
}


function addCardToGridCell(card) {
    const cardPositionClassName = mapCardIdToGridCell(card);
    const cardPosElem = document.querySelector(cardPositionClassName);

    addChildElement(cardPosElem, card);

}

function mapCardIdToGridCell(card) {
    if (card.id == 1) {
        return '.card-1';
    } else if (card.id == 2) {
        return '.card-2';
    } else if (card.id == 3) {
        return '.card-3';
    } else if (card.id == 4) {
        return '.card-4';
    }
}