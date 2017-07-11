function Deal(shuffledCards) {
  this.cardsToBeDealt = shuffledCards
  this.currentlySelectedCard = null
}

Deal.prototype.drawCard = function() {
  if (this.cardsToBeDealt.length > 0) {
    this.currentlySelectedCard = this.cardsToBeDealt.shift()
  } else {
    throw ("All the cards have been dealt.");
  }
}
