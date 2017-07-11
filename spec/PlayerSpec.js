describe("Player", function() {
  var player;
  var deck;
  var shuffleDeck;
  var deal;

  beforeEach(function() {
    deck = new Deck();
    shuffleDeck = new DeckShuffler();
    shuffleDeck.riffleShuffle(deck.contents);
    deal = new Deal(shuffleDeck.contents);
  })

  it("starts with an empty hand", function() {
    player = new Player();
    expect(player.hand).toEqual([]);
  });

  describe("#receiveCard", function() {
    it("prevents receiving an empty hand", function() {
      expect(function(){player.receiveCard(deal.currentlySelectedCard)}).toThrow("No card has been dealt yet.");
    });

    it("prevents player receiving the same card twice", function() {
      deal.drawCard();
      player.receiveCard(deal.currentlySelectedCard);
      expect(function(){player.receiveCard(deal.currentlySelectedCard)}).toThrow("That card has been dealt. Draw again.");
    });

    it("assigns the drawn card to the player's hand", function() {
      deal.drawCard();
      player.receiveCard(deal.currentlySelectedCard);
      expect(player.hand).toEqual(["SA"]);
    });
  });
});
