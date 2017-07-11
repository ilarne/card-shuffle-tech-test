function Deal(shuffledCards) {
  this.cardsToBeDealt = shuffledCards
  this.currentlySelectedCard = null
}

Deal.prototype.drawCards = function() {
  if (this.cardsToBeDealt.length > 0) {
    this.currentlySelectedCard = this.cardsToBeDealt.shift()
  } else {
    return "All the cards have been dealt.";
  }
}
