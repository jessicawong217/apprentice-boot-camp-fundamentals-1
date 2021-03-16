class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  getDeck() {
    let deck = [];
    this.cards.forEach(function (card) {
      deck.push(card.value + " of " + card.suit);
    });
    return deck;
  }
}

class Card {
  constructor(suitIndex, valueIndex) {
    this.suitIndex = suitIndex;
    this.valueIndex = valueIndex;
  }

  assign() {
    switch (this.valueIndex) {
      case 0:
        this.value = "ace";
        break;
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        this.value = (this.valueIndex + 1).toString();
        break;
      case 10:
        this.value = "jack";
        break;
      case 11:
        this.value = "queen";
        break;
      case 12:
        this.value = "king";
        break;
    }

    switch (this.suitIndex) {
      case 0:
        this.suit = "clubs";
        break;
      case 1:
        this.suit = "diamonds";
        break;
      case 2:
        this.suit = "hearts";
        break;
      case 3:
        this.suit = "spades";
        break;
    }
  }
}

let Cards = class Cards {};

Cards.prototype.getCards = function getCards() {
  const numberOfSuits = 4;
  const numberOfCardsPerSuit = 13;
  let cards = [];
  for (let suit = 0; suit < numberOfSuits; suit++) {
    for (let faceValue = 0; faceValue < numberOfCardsPerSuit; faceValue++) {
      let card = new Card(suit, faceValue);
      card.assign();
      cards.push(card);
    }
  }
  return cards;
};

module.exports = {
  Card: Card,
  Cards: Cards,
  Deck: Deck,
};
