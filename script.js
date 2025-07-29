// document.getElementById("startBtn").addEventListener("click", function () {
//     document.getElementById("startScreen").style.display = "block";
//     document.getElementById("instructionScreen").style.display = "block";
//     document.getElementById("startBtn").style.display = "none";
//     document.getElementById("gameArea").style.display = "none";
//   });

//   document.addEventListener("keydown", function (event) {
//     if (event.code === "Space") {
//       document.getElementById("instructionScreen").style.display = "none";
//       document.getElementById("gameArea").style.display = "block";
//       startGame();
//     }
//   });

//   function startGame() {
//     const trialData = [
//       { type: "target", x: 50, y: 50 },
//       { type: "distractor2", x: 0, y: -100 },
//       { type: "distractor1", x: -100, y: 0 },
//       { type: "distractor1", x: 0, y: 100 },
//       { type: "distractor1", x: -100, y: 50 },
//       ...Array(15).fill({ type: "empty", x: 250, y: 250 })
//     ];
  
//     const gameArea = document.getElementById("gameArea");
//     const centerX = 800 / 2;
//     const centerY = 600 / 2;
  
//     trialData.forEach(({ type, x, y }) => {
//       const el = document.createElement("div");
//       el.classList.add("stimulus");
  
//       el.style.position = "absolute";
//       el.style.left = `${centerX + x - 20}px`;
//       el.style.top = `${centerY - y - 20}px`;
  
//       const img = document.createElement("img");
//       img.src = `images/${type}.png`;
//       img.alt = type;
//       img.width = 40;
//       img.height = 40;
//       el.appendChild(img);
//       gameArea.appendChild(el);
//     });
//   }




//   document.getElementById("startBtn").addEventListener("click", function () {
//     document.getElementById("startScreen").style.display = "block";
//     document.getElementById("instructionScreen").style.display = "block";
//     document.getElementById("startBtn").style.display = "none";
//     document.getElementById("gameArea").style.display = "none";
//   });

//   document.addEventListener("keydown", function (event) {
//     if (event.code === "Space") {
//       document.getElementById("instructionScreen").style.display = "none";
//       document.getElementById("gameArea").style.display = "block";
//       startGame();
//     }
//   });

//   function startGame() {
//     const trialData = [
//         {
//           slide: 1,
//           present: true,
//           count: 5,
//           items: [
//             { type: "target", x: 100, y: 100 },
//             { type: "distractor2", x: -50, y: 0 },
//             { type: "distractor2", x: 0, y: 100 },
//             { type: "distractor1", x: 50, y: 100 },
//             { type: "distractor2", x: -100, y: 0 },
//             ...Array(15).fill({ type: "empty", x: 250, y: 250 })
//           ]
//         },
//         {
//             slide: 2,
//             present: false,
//             count: 5,
//             items: [
//               { type: "distractor2", x: -100, y: -100 },
//               { type: "distractor1", x: -50, y: 50 },
//               { type: "distractor2", x: -100, y: -50 },
//               { type: "distractor2", x: -50, y: 100 },
//               { type: "distractor1", x: 100, y: 50 },
//               ...Array(15).fill({ type: "empty", x: 250, y: 250 })
//             ]
//           },
//         {
//           slide: 3,
//           present: true,
//           count: 5,
//           items: [
//             { type: "target", x: 50, y: 50 },
//             { type: "distractor2", x: 0, y: -100 },
//             { type: "distractor1", x: -100, y: 0 },
//             { type: "distractor1", x: 0, y: 100 },
//             { type: "distractor1", x: -100, y: 50 },
//             ...Array(15).fill({ type: "empty", x: 250, y: 250 })
//           ]
//         },
//           {
//             slide: 4,
//             present: false,
//             count: 5,
//             items: [
//               { type: "distractor2", x: -50, y: 100 },
//               { type: "distractor1", x: 100, y: 50 },
//               { type: "distractor2", x: 0, y: 50 },
//               { type: "distractor2", x: 50, y: 0 },
//               { type: "distractor2", x: -50, y: -50 },
//               ...Array(15).fill({ type: "empty", x: 250, y: 250 })
//             ]
//         },
//     ];

//     const gameArea = document.getElementById("gameArea");
//     gameArea.innerHTML = ""; // Clear previous stimuli

//     const centerX = 800 / 2;
//     const centerY = 600 / 2;

//     // Display first trial for example
//     const currentTrial = trialData[0];

//     currentTrial.forEach(({ type, x, y }) => {
//       const el = document.createElement("div");
//       el.classList.add("stimulus");
//       el.style.position = "absolute";
//       el.style.left = `${centerX + x - 20}px`;
//       el.style.top = `${centerY - y - 20}px`;

//       const img = document.createElement("img");
//       img.src = `images/${type}.png`;
//       img.alt = type;
//       img.width = 40;
//       img.height = 40;

//       el.appendChild(img);
//       gameArea.appendChild(el);
//     });
//   }





// let currentIndex = 0;
// let currentTrial = null;
// let responseGiven = false;

// const trialData = [
//   {
//     slide: 1,
//     present: true,
//     items: [
//       { type: "target", x: 100, y: 100 },
//       { type: "distractor2", x: -50, y: 0 },
//       { type: "distractor2", x: 0, y: 100 },
//       { type: "distractor1", x: 50, y: 100 },
//       { type: "distractor2", x: -100, y: 0 },
//       ...Array(15).fill({ type: "empty", x: 250, y: 250 })
//     ]
//   },
//   {
//     slide: 2,
//     present: false,
//     items: [
//       { type: "distractor2", x: -100, y: -100 },
//       { type: "distractor1", x: -50, y: 50 },
//       { type: "distractor2", x: -100, y: -50 },
//       { type: "distractor2", x: -50, y: 100 },
//       { type: "distractor1", x: 100, y: 50 },
//       ...Array(15).fill({ type: "empty", x: 250, y: 250 })
//     ]
//   },
//   {
//     slide: 3,
//     present: true,
//     items: [
//       { type: "target", x: 50, y: 50 },
//       { type: "distractor2", x: 0, y: -100 },
//       { type: "distractor1", x: -100, y: 0 },
//       { type: "distractor1", x: 0, y: 100 },
//       { type: "distractor1", x: -100, y: 50 },
//       ...Array(15).fill({ type: "empty", x: 250, y: 250 })
//     ]
//   },
//   {
//     slide: 4,
//     present: false,
//     items: [
//       { type: "distractor2", x: -50, y: 100 },
//       { type: "distractor1", x: 100, y: 50 },
//       { type: "distractor2", x: 0, y: 50 },
//       { type: "distractor2", x: 50, y: 0 },
//       { type: "distractor2", x: -50, y: -50 },
//       ...Array(15).fill({ type: "empty", x: 250, y: 250 })
//     ]
//   }
// ];

// document.getElementById("startBtn").addEventListener("click", () => {
//   document.getElementById("startScreen").style.display = "none";
//   document.getElementById("instructionScreen").style.display = "block";
//   document.getElementById("startScreen1").style.display = "block";
//   document.getElementById("startBtn1").style.display = "block";
// });

// document.addEventListener("keydown", function (event) {
//   if (event.code === "Space") {
//     document.getElementById("instructionScreen").style.display = "none";
//     document.getElementById("gameArea").style.display = "block";
//     startGame();
//   }

//   if (currentTrial && !responseGiven) {
//     if (event.key === "j" || event.key === "f") {
//       checkResponse(event.key.toLowerCase());
//     }
//   }
// });

// function startGame() {
//   showNextTrial();
// }

// function showNextTrial() {
//   if (currentIndex >= trialData.length) {
//     document.getElementById("gameArea").innerHTML = " ";
//     return;
//   }

//   currentTrial = trialData[currentIndex];
//   responseGiven = false;

//   renderTrial(currentTrial.items);
//   currentIndex++;

//   setTimeout(() => {
//     if (!responseGiven) {
//       showMessage("No response", "orange");
//     }
//     setTimeout(showNextTrial, 1000);
//   }, 4000);
// }

// function renderTrial(items) {
//   const gameArea = document.getElementById("gameArea");
//   gameArea.innerHTML = "";

//   const centerX = 800 / 2;
//   const centerY = 600 / 2;

//   items.forEach(({ type, x, y }) => {
//     const el = document.createElement("div");
//     el.style.position = "absolute";
//     el.style.left = `${centerX + x - 20}px`;
//     el.style.top = `${centerY - y - 20}px`;

//     const img = document.createElement("img");
//     img.src = `images/${type}.png`;
//     img.alt = type;
//     img.width = 40;
//     img.height = 40;

//     el.appendChild(img);
//     gameArea.appendChild(el);
//   });

//   showMessage("");
// }

// function checkResponse(key) {
//   const isTargetPresent = currentTrial.present;

//   if ((isTargetPresent && key === "j") || (!isTargetPresent && key === "f")) {
//     showMessage("Correct ✅", "green");
//   } else {
//     showMessage("Wrong ❌", "red");
//   }
//   responseGiven = true;
// }
// function showMessage(text, color = "black") {
//   const feedbackBox = document.getElementById("feedbackBox");

//   feedbackBox.textContent = text;
//   feedbackBox.style.color = color;
//   feedbackBox.style.display = text ? "block" : "none";

//   if (text) {
//     setTimeout(() => {
//       feedbackBox.style.display = "none";
//     }, 2000);
//   }
// }



// items: [
//     { type: "target", x: 100, y: 100 },
//     { type: "distractor2", x: -50, y: 0 },
//     { type: "distractor2", x: 0, y: 100 },
//     { type: "distractor1", x: 50, y: 100 },
//     { type: "distractor2", x: -100, y: 0 },
//     ...Array.from({ length: 15 }, () => ({
//       type: "empty",
//       x: Math.floor(Math.random() * 400 - 200),
//       y: Math.floor(Math.random() * 300 - 150)
//     }))
//   ]
  























let currentIndex = 0;
let currentTrial = null;
let responseGiven = false;
const trialData = [
  {
    slide: 1,
    present: true,
    items: [
      { type: "target", x: 100, y: 100 },
      { type: "distractor2", x: -50, y: 0 },
      { type: "distractor2", x: 0, y: 100 },
      { type: "distractor1", x: 50, y: 100 },
      { type: "distractor2", x: -100, y: 0 },
      ...Array(15).fill({ type: "empty", x: 250, y: 250 })
    ]
  },
  {
    slide: 2,
    present: false,
    items: [
      { type: "distractor2", x: -100, y: -100 },
      { type: "distractor1", x: -50, y: 50 },
      { type: "distractor2", x: -100, y: -50 },
      { type: "distractor2", x: -50, y: 100 },
      { type: "distractor1", x: 100, y: 50 },
      ...Array(15).fill({ type: "empty", x: 250, y: 250 })
    ]
  },
  {
    slide: 3,
    present: true,
    items: [
      { type: "target", x: 50, y: 50 },
      { type: "distractor2", x: 0, y: -100 },
      { type: "distractor1", x: -100, y: 0 },
      { type: "distractor1", x: 0, y: 100 },
      { type: "distractor1", x: -100, y: 50 },
      ...Array(15).fill({ type: "empty", x: 250, y: 250 })
    ]
  },
  {
    slide: 4,
    present: false,
    items: [
      { type: "distractor2", x: -50, y: 100 },
      { type: "distractor1", x: 100, y: 50 },
      { type: "distractor2", x: 0, y: 50 },
      { type: "distractor2", x: 50, y: 0 },
      { type: "distractor2", x: -50, y: -50 },
      ...Array(15).fill({ type: "empty", x: 250, y: 250 })
    ]
  }
];

document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("instructionScreen").style.display = "block";
  
});
document.getElementById("fullscreenBtn").addEventListener("click", () => {
    const cbox = document.getElementById("cbox");
    if (!document.fullscreenElement) {
      cbox.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });
  
  document.addEventListener("fullscreenchange", () => {
    const fullscreenBtn = document.getElementById("fullscreenBtn");
    if (document.fullscreenElement) {
      fullscreenBtn.style.display = "none";
    } else {
      fullscreenBtn.style.display = "block";
    }
  });

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    document.getElementById("instructionScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
    startGame();
  }

  if (currentTrial && !responseGiven) {
    if (event.key === "j" || event.key === "f") {
      checkResponse(event.key.toLowerCase());
    }
  }
});

function startGame() {
  showNextTrial();
}

function showNextTrial() {
  if (currentIndex >= trialData.length) {
    document.getElementById("gameArea").innerHTML = " ";
    return;
  }

  currentTrial = trialData[currentIndex];
  responseGiven = false;

  renderTrial(currentTrial.items);
  currentIndex++;

  setTimeout(() => {
    if (!responseGiven) {
      showMessage("No response", "orange");
    }
    setTimeout(showNextTrial, 1000);
  }, 4000);
}

function renderTrial(items) {
  const gameArea = document.getElementById("gameArea");
  gameArea.innerHTML = "";

  const centerX = 800 / 2;
  const centerY = 600 / 2;

  items.forEach(({ type, x, y }) => {
    const el = document.createElement("div");
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

  showMessage("");
}

function checkResponse(key) {
  const isTargetPresent = currentTrial.present;

  if ((isTargetPresent && key === "j") || (!isTargetPresent && key === "f")) {
    showMessage("Correct ✅", "green");
  } else {
    showMessage("Wrong ❌", "red");
  }
  responseGiven = true;
}
function showMessage(text, color = "black") {
  const feedbackBox = document.getElementById("feedbackBox");

  feedbackBox.textContent = text;
  feedbackBox.style.color = color;
  feedbackBox.style.display = text ? "block" : "none";

  if (text) {
    setTimeout(() => {
      feedbackBox.style.display = "none";
    }, 2000);
  }
}
