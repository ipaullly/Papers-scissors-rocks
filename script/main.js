FBInstant.initializeAsync()
  .then(() => {
    let progress = 0;
    let interval = setInterval(() => {
      progress += 3;
      FBInstant.setLoadingProgress(progress);

      if(progress>=95) {
        clearInterval(interval)
        FBInstant.startGameAsync()
          .then(() => {
            console.log('Game has started');
          });
      }
    }, 10)
    console.log("loaded");
  });

  const getEl = (id) => {
    return document.getElementById(id);
  };
  
  let startButton = getEl("startGame");
  let gamePlay = getEl("gamePlay");
  
  let playButtons = document.getElementsByClassName("playbutton");

  let rock = getEl("rock");
  let paper = getEl("paper");
  let scissors = getEl("scissors");
  
  let compChooses = getEl("compChooses");
  let compChoosesParent = getEl("compChoosesParent");
  let buttonGroup = getEl("buttongroup");

  let choices = ["rock", "scissors", "paper"];

  let playerSc = getEl("playerSc");
  let compSc = getEl("compSc");

  let wins = {
    "rocks": "scissors",
    "scissors": "paper",
    "paper": "rock"
  }

  let playerScore = 0;
  let compScore = 0;

  const startGame = () => {
    showButtons();
    hideStartButton();
    showGamePlay();
    hideCompChoosesParent();
  }

  const buttonClicked = (e) => {
    let btnChoice = e.target.id;
    playChoice(btnChoice);
  }
  
  startButton.addEventListener('click', startGame);

  Array.from(playButtons).forEach(btn => {
    btn.addEventListener("click", buttonClicked);
  });

  const playChoice = (btnChoice) => {
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    displayComputerChoice(compChoice);
    console.log(compChoice);
    
    if (wins[btnChoice] == compChoice) {// win for player
      playerScore++;
    } else if (btnChoice === compChoice) {
      return;
    }
    else {
      compScore++;
    }
    updateScore();
  }

  const displayComputerChoice = (ch) => {
    showCompChoosesParent();
    let emoji = "";
    switch (ch) {
      case "paper": emoji = "✋"; break;
      case "rock": emoji = "✊"; break;
      case "scissors": emoji = "✌"; break;
    }
    compChooses.innerHTML = emoji
  }
  
  const updateScore = () => {
    playerSc.innerHTML = playerScore;
    compSc.innerHTML = compScore;
  }

  const showButtons = () => {
    if (buttonGroup.classList.contains("hidden")) {
      buttonGroup.classList.remove("hidden");
    }
  }
  
  const hideButtons = () => {
    if (!buttonGroup.classList.contains("hidden")) {
      buttonGroup.classList.add("hidden");
    }
  }
  
  const showStartButton = () => {
    if (startButton.classList.contains("hidden")) {
      startButton.classList.remove("hidden");
    }
  }
  
  const hideStartButton = () => {
    if (!startButton.classList.contains("hidden")) {
      startButton.classList.add("hidden");
    }
  }

  const showGamePlay = () => {
    if (gamePlay.classList.contains("hidden")) {
      gamePlay.classList.remove("hidden");
    }
  }
  
  const hideGamePlay = () => {
    if (!gamePlay.classList.contains("hidden")) {
      gamePlay.classList.add("hidden");
    }
  }

  const showCompChoosesParent = () => {
    if (compChoosesParent.classList.contains("hidden")) {
      compChoosesParent.classList.remove("hidden");
    }
  }
  
  const hideCompChoosesParent = () => {
    if (!compChoosesParent.classList.contains("hidden")) {
      compChoosesParent.classList.add("hidden");
    }
  }