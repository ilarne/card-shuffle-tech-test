function Player() {
  this.hand = []
}

Player.prototype.receiveCard = function(currentlySelectedCard) {
  if(currentlySelectedCard === null) {
    return "No card has been dealt yet."
  } else if(this.hand.includes(currentlySelectedCard)) {
    return "That card has been dealt. Draw again."
  } else {
    this.hand.push(currentlySelectedCard)
  }
}
