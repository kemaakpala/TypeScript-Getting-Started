function startGame() {
  let playerName: string | null | undefined;
  playerName = null;
  playerName = undefined;
  logPlayer(playerName);

  var messagesElement = document.getElementById('messages');
  messagesElement!.innerText = 'Welcome to MultiMath! Staring new game...';
}

function logPlayer(name) {
  console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);