## Kurt Geiger Tech Test (adjusted for Javascript)

### How to test

Tests are run with Jasmine.
To run the test, navigate to the directory in which the script files have been saved and run `$ open SpecRunner.html`, or right-click + copy the full file path, and navigate to this path in Google Chrome.

### How to set up

There are two ways the script can be run.

To run from the Command Line, navigate to the directory in which the script files have been saved. In this directory, the `node` REPL can be used to execute the scripts:

  ```
  $ node
  $ .load src/Deal.js
  $ .load src/Deck.js
  $ .load src/Shuffle.js
  $ .load src/Deck.js
  ```

This will allow you to instantiate new objects and functions from the Command Line.

Alternatively, while the SpecRunner.html file is opened in Chrome, the Dev Tools can be used to execute code without the need to manually load the scripts:

  - SpecRunner.html > Right-click + Inspect > Console

### How to use

After following one of the above methods, the following demonstrates fulfilment of tech test criteria:

  ```
  > var playerOne = new Player();
  > var playerTwo = new Player();
  > var playerThree = new Player();
  > var playerFour = new Player();
  > var deck = new Deck();
  > var shuffle = new DeckShuffler();
  > shuffle.riffleShuffle(deck.contents);
  > var deal = new Deal(shuffle.contents);
  > playerOne.receiveCard(deal.currentlySelectedCard);
  > deal.drawCard();
  > playerOne.receiveCard(deal.currentlySelectedCard);
  > deal.drawCard();
  > playerTwo.receiveCard(deal.currentlySelectedCard);
  > deal.drawCard();
  > playerThree.receiveCard(deal.currentlySelectedCard);
  > deal.drawCard();
  > playerFour.receiveCard(deal.currentlySelectedCard);
  ```

 The above code with throw an error once all the cards have been dealt, thus ending the round.

 ### Process

 First, I went over the task specifications to decide objects I thought would be necessary, and what responsibilities they would have. I decided on four:

  - Player - guards which cards get put into a hand
  - Deck - stores one full deck of cards
  - DeckShuffler - rearranges one deck of cards
  - Deal - selects cards from the shuffled deck

These objects would form the skeleton of my script.

My first move was to create the Player and Deck objects, as initially these would only be storing information. Thus it was a simple red-green-refactor test cycle to ensure that both objects existed, and that they were initialised with the expect properties of an empty hand (Player) and full deck (Deck).

Next, I needed to decided the logic for the shuffle. The task specifies that 'no two cards be in sequence'. It had been clarified to me that this quite literally meant no card would be next to its neighbouring card, i.e. no Ace of Hearts next to Two of Hearts, but placing it next to an Ace of Spades was permissible. With this knowledge I looked to common card shuffling techniques, and decided on the 'riffle shuffle'. The riffle shuffle is a technique where the deck is split in two and merged together. A perfect riffle shuffle will result in the two decks being interwoven with alternating cards from each deck. This was the logic that I used to create a 'riffle shuffle' function.  

Alongside my tests, I had been running my code manually to see how it looked. While running the code manually, I came across some issues such as being able to add multiple decks to one round of shuffling. At this point, I decided to add in some safeguard tests. In DeckShuffler this includes a conditional statement that throws an error if more than 52 cards (or 51 elements, taking into account the 0 index) are added to the shuffled deck. After this I was sure to test any edge cases that came to mind during development of an object.

I then fleshed out Deal, which takes as a parameter the shuffled deck. The drawCard function checks the length of the deck, and if there are still any cards left, it will remove the first element and assign it as the card that will next be dealt. If there are no more cards left to deal, then an error is thrown. With further safeguarding on mind, I then added in a function that would check the deck and ensure it had been shuffled. This function needed to check the last element of the array, as it is only in the instance where the 51st element of the array is Knight of Diamonds that the deck has not been shuffled. This amendment was particularly assisted by TDD, as my first implementation checked the first element to see if it was Ace of Hearts - something I quickly realised was flawed, as with each card being removed from the beginning of the array, the Ace of Hearts would inevitably become the first in the array regardless of if the deck had been shuffled or not.

My final task was to assign the dealt card to a player. I created a function for the Player which receives the currently selected card from the deal object and pushes it into the player's hand array. Like Deal, I included a function that would first check the validity of the card before allowing it into the hand. In the cardCheck function, first it is ensured that any card has been taken from the shuffled deck, and then it is ensure that the player does not already hold that card. While this completed my script, it left me with the interesting problem of how to stop a card being assigned to every player (so that each player receives e.g. an Ace of Hearts). However, I was not sure how I would reset the currentlySelectedCard property of the specific deal object that had been passed to the player object. Given the opportunity, this is an area in which I would like to improve the code. 
