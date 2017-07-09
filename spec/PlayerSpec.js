describe("Player", function() {
  var player;

  it("starts with an empty hand", function() {
    player = new Player();
    expect(player.hand).toEqual([])
  });

});
