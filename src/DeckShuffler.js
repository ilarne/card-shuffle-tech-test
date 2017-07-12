function DeckShuffler() {
  this.contents = [];
}

DeckShuffler.prototype.riffleShuffle = function(deck) {
  var firstHalf = deck
  var secondHalf = firstHalf.splice(0, firstHalf.length / 2)

    for (var n = 0; n < firstHalf.length; n++) {
      if (this.contents.length >= 51) {
        throw ("That's too many cards.")
      } else {
        this.contents.push(firstHalf[n], secondHalf[n])
      }
    }
  }
