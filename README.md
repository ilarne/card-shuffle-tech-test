Kurt Geiger Tech Test (adjusted for Javascript)

How to test

Tests are run with Jasmine.
To run the test, navigate to the directory in which the script files have been saved and run $ open SpecRunner.html, or copy the file path and run in Google Chrome.

How to set up
There are two ways the script can be run.

To run from the Command Line, navigate to the directory in which the script files have been saved. In this directory, the node REPL can be used to run to execute the script:

  $ node
  $ .load src/Deal.js
  $ .load src/Deck.js
  $ .load src/Shuffle.js
  $ .load src/Deck.js

This will allow you to instantiate new objects and functions from the Command Line.

Alternatively, while the SpecRunner.html file is opened in Chrome, the Dev Tools can be used to execute code without the need to manually load the scripts:

  SpecRunner.html > Right-Click + Inspect > Console

How to use

After following one of the above methods, the following demonstrates fulfilment of tech test criteria:

  var playerOne = new Player();
  var playerTwo = new Player();
  var playerThree = new Player();
  var playerFour = new Player();
  var deck = new Deck();
  var shuffle = new DeckShuffler();
  shuffle.riffleShuffle(deck.contents)
  var deal = new Deal(shuffle.contents);
  playerOne.receiveCard(deal.currentlySelectedCard);
  deal.drawCard();
  playerOne.receiveCard(deal.currentlySelectedCard);
  deal.drawCard();
  playerTwo.receiveCard(deal.currentlySelectedCard);
  deal.drawCard();
  playerThree.receiveCard(deal.currentlySelectedCard);
  deal.drawCard();
  playerFour.receiveCard(deal.currentlySelectedCard);
