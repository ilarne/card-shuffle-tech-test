describe("DeckShuffler", function() {
  var shuffle;

  it("starts with no cards in shuffled deck", function() {
    shuffleDeck = new DeckShuffler();
    expect(shuffleDeck.contents).toEqual([]);
  });

});
