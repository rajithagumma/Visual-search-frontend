document.getElementById("startBtn").addEventListener("click", function () {
    document.getElementById("startScreen").style.display = "block";
    document.getElementById("instructionScreen").style.display = "block";
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
  });

  document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
      document.getElementById("instructionScreen").style.display = "none";
      document.getElementById("gameArea").style.display = "block";
      startGame();
    }
  });

  function startGame() {
    const trialData = [
      { type: "target", x: 50, y: 50 },
      { type: "distractor2", x: 0, y: -100 },
      { type: "distractor1", x: -100, y: 0 },
      { type: "distractor1", x: 0, y: 100 },
      { type: "distractor1", x: -100, y: 50 },
      ...Array(15).fill({ type: "empty", x: 250, y: 250 })
    ];
  
    const gameArea = document.getElementById("gameArea");
    const centerX = 800 / 2;
    const centerY = 600 / 2;
  
    trialData.forEach(({ type, x, y }) => {
      const el = document.createElement("div");
      el.classList.add("stimulus");
  
      el.style.position = "absolute";
      el.style.left = `${centerX + x - 20}px`;
      el.style.top = `${centerY - y - 20}px`;
  
      const img = document.createElement("img");
      img.src = `images/${type}.png`;
      img.alt = type;
      img.width = 40;
      img.height = 40;
      el.appendChild(img);
      gameArea.appendChild(el);
    });
  }
