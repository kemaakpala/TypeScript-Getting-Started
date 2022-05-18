function startGame() {
  let playerName: string = 'Audrey';
  logPlayer(playerName);

  var messagesElement: HTMLElement | string;
  if (typeof messagesElement === 'string') {
    return messagesElement;
  } else {
    return messagesElement;
  }
  messagesElement = document.getElementById('messages');
  messagesElement!.innerText = 'Welcome to MultiMath! Staring new game...';
}

function logPlayer(name) {
  console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);