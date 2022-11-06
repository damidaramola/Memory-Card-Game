const cardObjectDefined = [{
        id: 1,
        imagePath: 'assets/images/king-of-clubs.PNG'
    },
    {
        id: 2,
        imagePath: '/images/Jack-of-hearts.PNG'
    },
    {
        id: 3,
        imagePath: '/images/Ace-of-Spades.PNG'
    },
    {
        id: 4,
        imagePath: '/images/Queen-ofDiamonds.PNG'
    }
];

const cardBackImgPath = '/images/card-back-Blue.png';
const cardPlacementElem = document.querySelector('.card-placement');

createCards()

function createCards() {
    cardObjectDefined.forEach((cardItem) => {
        createCard(cardItem)
    })
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

function mapCardIdToGridCell() {
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