function Player() {
  this.hand = []
}

Player.prototype.receiveCard = function(currentlySelectedCard) {
  this.cardCheck(currentlySelectedCard)
  this.hand.push(currentlySelectedCard)
}

Player.prototype.cardCheck = function(currentlySelectedCard) {
  if (currentlySelectedCard === null) {
    throw ("No card has been dealt yet.")
  } else if(this.hand.includes(currentlySelectedCard)) {
    throw ("That card has been dealt. Draw again.")
  }
}
