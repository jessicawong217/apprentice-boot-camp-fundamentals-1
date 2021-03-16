const { Card, Cards, Deck } = require("../../cards/cards.js");

describe("Card", function () {
  test("it should assign face value and suit when given index values", function () {
    const mockSuitIndex = 0;
    const mockValueIndex = 0;

    const expectedSuit = "clubs";
    const expectedValue = "ace";

    const card = new Card(mockSuitIndex, mockValueIndex);
    card.assign();

    expect(card.suit).toBe(expectedSuit);
    expect(card.value).toBe(expectedValue);
  });
});

describe("Cards", function () {
  test("getCards should return 52 cards (with index of 1)", function () {
    const totalCardsInDeck = 52;
    const cards = new Cards();
    const allCards = cards.getCards();

    expect(allCards.length).toBe(totalCardsInDeck);
  });
});

describe("Deck", function () {
  test("getDeck should return formatted deck in string", function () {
    const mockCards = [
      { value: "ace", suit: "clubs" },
      { value: "ace", suit: "diamonds" },
    ];

    const expectedDeck = ["ace of clubs", "ace of diamonds"];

    let deck = new Deck(mockCards);
    deck = deck.getDeck();

    expect(deck).toEqual(expectedDeck);
  });
});
