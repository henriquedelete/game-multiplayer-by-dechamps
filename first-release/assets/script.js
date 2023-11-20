const screen = document.getElementById("screen");
const context = screen.getContext("2d");

const game = {
  players: {
    player1: { x: 5, y: 8 },
  },
  fruits: {
    fruit1: { x: 1, y: 2 },
  },
};

renderScreen();
function renderScreen() {
  context.fillStyle = "black";
  context.clearRect(0, 0, 10, 10);

  for (const playerId in game.players) {
    const player = game.players[playerId];
    context.fillStyle = "white";
    context.fillRect(player.x, player.y, 1, 1);
  }

  for (const fruitId in game.fruits) {
    const fruit = game.fruits[fruitId];
    context.fillStyle = "red";
    context.fillRect(fruit.x, fruit.y, 1, 1);
  }

  requestAnimationFrame(renderScreen);
}

document.addEventListener("keydown", (event) => {
  console.log(event.key);
  movePlayer(event.key);
});

function movePlayer(keyPressed) {
  const movementsAcepteds = {
    ArrowRight() {
      game.players.player1.x = 1;
      console.log(game.players.player1);
      renderScreen();
    },
    ArrowLeft() {
      game.players.player1.x = -1;
      console.log(game.players.player1);
      renderScreen();
    },
    ArrowUp() {},
    ArrowDown() {},
  };
  if (movementsAcepteds[keyPressed]) {
    movementsAcepteds[keyPressed]();
  } else {
    return;
  }
}
