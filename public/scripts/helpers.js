//Gets username from cookie
const extractUserName = function(str) {
  return str.split("=")[0];
};

//Given an array of players, order them as player 1,2,3,4. Player 1 is always the current player. Other players are based on their tokens
const findPlayer = function(players, username) {
  let retArr;

  console.log("these are the players");
  console.log(players);
  console.log("looking for");
  console.log(username);

  players = players.sort((p1, p2) => {
    return p1.joinToken - p2.joinToken;
  });

  for (let i = 0; i < players.length; i++) {
    if (players[0].username === username) {
      console.log("returning this");
      console.log(players);
      return players; //current player is always player 1
    }
    //move the player to the end of the array
    players.push(players.shift());
  }
  return players;

  /* Old version
    console.log("Sorted list");
    console.log(players);

    for (let player of players) {

      if (player.username === username) {
        //retArr.push player;
        return player;
      }
    }
    return undefined; //Username could not be found
    */
}

//Finds a card object given the name of the card and an array of cards
const findCardByName = function(reqCard, cards) {
  for (let card of cards) {
    if (card.name === reqCard) {
      return card;
    }
  }
  return null;
}