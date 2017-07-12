describe("Deal", function() {
  var deal;
  var shuffleDeck;

  beforeEach(function() {
    deck = new Deck();
    shuffleDeck = new DeckShuffler();
    shuffleDeck.riffleShuffle(deck.contents)
    deal = new Deal(shuffleDeck.contents);
  })

    it("starts with the complete shuffled deck", function() {
      expect(deal.cardsToBeDealt).toEqual([
        "SA", "HA", "S2", "H2", "S3", "H3", "S4", "H4", "S5", "H5", "S6", "H6", "S7",
        "H7", "S8", "H8", "S9", "H9", "S10", "H10", "SJ", "HJ", "SQ", "HQ", "SK", "HK",
        "DA", "CA", "D2", "C2", "D3", "C3", "D4", "C4", "D5", "C5", "D6", "C6", "D7",
        "C7", "D8", "C8", "D9", "C9", "D10", "C10", "DJ", "CJ", "DQ", "CQ", "DK", "CK"
      ]);
    });

    it("starts with no currently selected card", function() {
      expect(deal.currentlySelectedCard).toBeNull();
    })

  describe("#drawCards", function() {
    it("removes a card from the deck", function() {
      deal.drawCard()
      expect(deal.cardsToBeDealt[0]).toEqual("HA");
    });

    it("prevents attempt to draw card from empty deck", function() {
      for (var n = 0; n < 52; n++) deal.drawCard();
      expect(function(){ deal.drawCard() }).toThrow("All the cards have been dealt.");
    });

    it("assigns the drawn card as the currently selected card", function() {
      deal.drawCard()
      expect(deal.currentlySelectedCard).toEqual("SA")
    })
  });

  describe("#deckCheck", function() {
    it("ensures the deck has been shuffled", function() {
      deck = new Deck()
      deal = new Deal(deck.contents)
      expect(function(){ deal.deckCheck() }).toThrow("Please shuffle the deck first.");
    });
  });
});
