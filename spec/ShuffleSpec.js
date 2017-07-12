describe("DeckShuffler", function() {
  var shuffleDeck;
  var deck;

  beforeEach(function() {
    shuffleDeck = new DeckShuffler();
    deck = new Deck();
  })

    it("starts with no cards in shuffled deck", function() {
      expect(shuffleDeck.contents).toEqual([]);
    });

  describe("#riffleShuffle", function() {
    it("prevents shuffling more than a deck of cards", function() {
      shuffleDeck.riffleShuffle(deck.contents);
      expect(function(){ shuffleDeck.riffleShuffle(deck.contents) }).toThrow("That's too many cards." );
    });

    it("prevents cards from being in sequence", function() {
      shuffleDeck.riffleShuffle(deck.contents)
      expect(shuffleDeck.contents).toEqual([
      "SA", "HA", "S2", "H2", "S3", "H3", "S4", "H4", "S5", "H5", "S6", "H6", "S7",
      "H7", "S8", "H8", "S9", "H9", "S10", "H10", "SJ", "HJ", "SQ", "HQ", "SK", "HK",
      "DA", "CA", "D2", "C2", "D3", "C3", "D4", "C4", "D5", "C5", "D6", "C6", "D7",
      "C7", "D8", "C8", "D9", "C9", "D10", "C10", "DJ", "CJ", "DQ", "CQ", "DK", "CK"
      ]);
    });
  });
});
