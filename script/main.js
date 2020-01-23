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
            const getEl = (id) => {
              return document.getElementById(id);
            };
            
            let startButton = getEl("startGame");
            
            let rock = getEl("rock");
            let paper = getEl("paper");
            let scissors = getEl("scissors");
            
            let buttonGroup = getEl("buttongroup");
            
            const startGame = () => {
              showButtons();
              hideStartButton();
            }
            
            startButton.addEventListener('click', startGame);
            
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
          });
      }
    }, 10)
    console.log("loaded");
  });