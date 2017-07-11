function DeckShuffler() {
  this.contents = [];
}

DeckShuffler.prototype.riffleShuffle = function(deck) {
  var firstHalf = deck
  var secondHalf = firstHalf.splice(0, Math.ceil(firstHalf.length / 2));

    for(var n = 0; n < firstHalf.length; n++) {
      if(this.contents.length >= 52) {
        return "That's too many cards." // extract this into own function?
      } else {
        this.contents.push(firstHalf[n], secondHalf[n]);
      }
    }
  }
