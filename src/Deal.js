function Deal(shuffledCards) {
  this.cardsToBeDealt = shuffledCards
  this.currentlySelectedCard = null
}

Deal.prototype.drawCard = function() {
  this.deckCheck()
  if (this.cardsToBeDealt.length > 0) {
    this.currentlySelectedCard = this.cardsToBeDealt.shift()
  } else {
    throw ("All the cards have been dealt.")
  }
}

Deal.prototype.deckCheck = function() {
  if (this.cardsToBeDealt[51] === "DK") {
    throw ("Please shuffle the deck first.")
  }
}
