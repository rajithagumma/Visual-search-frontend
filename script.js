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
// });

// document.getElementById("fullscreenBtn").addEventListener("click", () => {
//   const cbox = document.getElementById("cbox");
//   if (!document.fullscreenElement) {
//     cbox.requestFullscreen();
//   } else {
//     document.exitFullscreen();
//   }
// });

// document.addEventListener("fullscreenchange", () => {
//   const fullscreenBtn = document.getElementById("fullscreenBtn");
//   if (document.fullscreenElement) {
//     fullscreenBtn.style.display = "none";
//   } else {
//     fullscreenBtn.style.display = "block";
//   }

//   // 🔁 Update image sizes after fullscreen toggle
//   updateImageSizes();
// });

// document.addEventListener("keydown", function (event) {
//   if (event.code === "Space") {
//     document.getElementById("instructionScreen").style.display = "none";
//     document.getElementById("gameArea").style.display = "block";
//     startGame();
//   }

//   if (currentTrial && !responseGiven) {
//     if (event.key === "N" || event.key === "Y") {
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

//   const gameAreaRect = gameArea.getBoundingClientRect();
//   const centerX = gameAreaRect.width / 2;
//   const centerY = gameAreaRect.height / 2;

//   const isFullscreen = document.fullscreenElement !== null;
//   const imageClass = isFullscreen ? "fullscreen-size" : "normal-size";
//   const imageOffset = isFullscreen ? 80 :40; // half of width/height

//   items.forEach(({ type, x, y }) => {
//     const el = document.createElement("div");
//     el.style.position = "absolute";
//     el.style.left = `${centerX + x - imageOffset}px`;
//     el.style.top = `${centerY - y - imageOffset}px`;

//     const img = document.createElement("img");
//     img.src = `images/${type}.png`;
//     img.alt = type;
//     img.classList.add(imageClass);

//     el.appendChild(img);
//     gameArea.appendChild(el);
//   });

//   showMessage("");
// }

// function updateImageSizes() {
//   const isFullscreen = document.fullscreenElement !== null;
//   const images = document.querySelectorAll("#gameArea img");
//   images.forEach(img => {
//     img.classList.remove("normal-size", "fullscreen-size");
//     img.classList.add(isFullscreen ? "fullscreen-size" : "normal-size");
//   });
// }

// function checkResponse(key) {
//   const isTargetPresent = currentTrial.present;

//   if ((isTargetPresent && key === "N") || (!isTargetPresent && key === "Y")) {
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






      var MAXSPRITES = 100,
        MAXBITMAPS = 1e3,
        PSY_CENTRAL = -99999,
        MAX_FONTS = 100,
        psy_font_number = 0,
        psy_fonts = [],
        psy_fonts_size = [],
        PSY_VIDEO_DOUBLEBUFFER = 1,
        PSY_KEY_STATUS_CORRECT = 1,
        PSY_KEY_STATUS_WRONG = 2,
        PSY_KEY_STATUS_TIMEOUT = 3,
        psy_screen_center_x = 0,
        psy_screen_x_offset = 0,
        psy_screen_center_y = 0,
        psy_screen_y_offset = 0,
        psy_screen_width = 800,
        psy_screen_height = 600,
        psy_exp_start_time = 0,
        psy_exp_current_time = 0,
        tablerow = 0;
      possiblekeys = [];
      var keystatus = {
          key: 0,
          status: 0,
          time: 0,
          totaltime: 0,
          mouse_x: 0,
          mouse_y: 0,
        },
        mousestatus = { key: 0, status: 0, time: 0, totaltime: 0, x: 0, y: 0 },
        c = document.getElementById("exp"),
        canvas_x_offset = c.getBoundingClientRect().left,
        canvas_y_offset = c.getBoundingClientRect().top;
      window.addEventListener("keydown", getkeydown, !0);
      window.addEventListener("keyup", getkeyup, !0);
      var ctx = c.getContext("2d"),
        log = document.getElementById("log"),
        output = document.getElementById("Output");
      outputdata = String();
      var psy_bitmaps = [],
        bmp_number = 0,
        psy_sounds = [],
        psy_sound_number = 0;
      function psy_load_bitmap(a) {
        psy_bitmaps[bmp_number] = new Image();
        psy_bitmaps[bmp_number].src = a;
        bmp_number++;
        return bmp_number - 1;
      }
      function psy_load_sound(a) {
        psy_sounds[psy_sound_number] = new Audio();
        psy_sounds[psy_sound_number].src = a;
        psy_sound_number++;
        return psy_sound_number - 1;
      }
      function psy_play(a) {
        psy_sounds[a - 1].play();
      }
      function psy_silence(a) {
        psy_sounds[a - 1].pause();
        psy_sounds[a - 1].currentTime = 0;
      }
      function psy_load_font(a, b) {
        psy_fonts[psy_font_number] = b + "pt " + a;
        psy_fonts_size[psy_font_number] = b;
        psy_font_number++;
        return psy_font_number - 1;
      }
      function addlog(a) {
        null != log &&
          ((log.value += a + "\n"), (log.scrollTop = log.scrollHeight));
      }
      function addoutput(a) {
        null != output && (output.value += a + "\n");
        outputdata = outputdata + a + "\n";
      }
      function hexrgb(a, b, d) {
        h = "#";
        h = 16 > a ? h + "0" + a.toString(16) : h + a.toString(16);
        h = 16 > b ? h + "0" + b.toString(16) : h + b.toString(16);
        return (h = 16 > d ? h + "0" + d.toString(16) : h + d.toString(16));
      }
      starttime = 0;
      function psy_keyboard(a, b, d, f) {
        psy_readkey.expectedkey = a[d];
        psy_readkey.start(current_task, f);
      }
      var psy_readkey = {
          lasttask: "",
          starttime: 0,
          readkeytimer: "",
          rt: 0,
          key: 0,
          status: 0,
          keys: 0,
          expectkey: !1,
          expectedkey: 0,
          bitmap: 0,
          bitmap_range: [-1, -1],
          mouseovereventlistener: !1,
          mousedowneventlistener: !1,
          start: function (a, b) {
            psy_readkey.rt = b;
            psy_readkey.key = 0;
            psy_readkey.starttime = new Date().getTime();
            psy_readkey.lasttask = a;
            psy_readkey.readkeytimer = setTimeout("psy_readkey.timeout()", b);
            psy_readkey.expectkey = !0;
            keystatus.status = 3;
            keystatus.time = b;
            keystatus.key = 0;
          },
          stop: function () {
            clearTimeout(psy_readkey.readkeytimer);
            psy_readkey.expectkey = !1;
            1 == psy_readkey.mouseovereventlistener &&
              (window.removeEventListener("mousemove", getmouse_in_area, !1),
              (psy_readkey.mouseovereventlistener = !1));
            1 == psy_readkey.mousedowneventlistener &&
              (window.removeEventListener(
                "mousedown",
                getmouseclick_in_area,
                !1
              ),
              (psy_readkey.mousedowneventlistener = !1));
            eval(psy_readkey.lasttask + ".run()");
          },
          timeout: function () {
            psy_readkey.expectkey = !1;
            1 == psy_readkey.mouseovereventlistener &&
              (window.removeEventListener("mousemove", getmouse_in_area, !1),
              (psy_readkey.mouseovereventlistener = !1));
            1 == psy_readkey.mousedowneventlistener &&
              (window.removeEventListener(
                "mousedown",
                getmouseclick_in_area,
                !1
              ),
              (psy_readkey.mousedowneventlistener = !1));
            eval(psy_readkey.lasttask + ".run()");
          },
        },
        inkeypress = 0;
      function getkeydown(a) {
        inkeypress++;
        1 == psy_readkey.expectkey &&
          1 == inkeypress &&
          ((keystatus.time = new Date().getTime() - psy_readkey.starttime),
          (keystatus.key = a.keyCode),
          (keystatus.status = a.keyCode == psy_readkey.expectedkey ? 1 : 2),
          (psy_readkey.expectkey = !1),
          psy_readkey.stop());
      }
      function getkeyup(a) {
        1 == inkeypress &&
          (keystatus.totaltime = new Date().getTime() - psy_readkey.starttime);
        inkeypress = 0;
      }
      function getmouse_in_area(a) {
        1 == psy_readkey.expectkey &&
          ((canvas_x_offset = c.getBoundingClientRect().left),
          (canvas_y_offset = c.getBoundingClientRect().top),
          (tmpmouseX = a.clientX - canvas_x_offset),
          (tmpmouseY = a.clientY - canvas_y_offset),
          tmpmouseX >= psy_stimuli1[psy_readkey.bitmap - 1].rect.x &&
            tmpmouseX <=
              psy_stimuli1[psy_readkey.bitmap - 1].rect.x +
                psy_stimuli1[psy_readkey.bitmap - 1].rect.width &&
            tmpmouseY >= psy_stimuli1[psy_readkey.bitmap - 1].rect.y &&
            tmpmouseX <=
              psy_stimuli1[psy_readkey.bitmap - 1].rect.x +
                psy_stimuli1[psy_readkey.bitmap - 1].rect.height &&
            ((keystatus.time = new Date().getTime() - psy_readkey.starttime),
            (keystatus.status = 1),
            (keystatus.mouse_x = tmpmouseX - psy_screen_x_offset),
            (keystatus.mouse_y = tmpmouseY - psy_screen_y_offset),
            (psy_readkey.expectkey = !1),
            psy_readkey.stop()));
      }
      function getmouseclick_in_area(a) {
        if (1 == psy_readkey.expectkey && -1 == psy_readkey.bitmap_range[1]) {
          keystatus.time = new Date().getTime() - psy_readkey.starttime;
          canvas_x_offset = c.getBoundingClientRect().left;
          canvas_y_offset = c.getBoundingClientRect().top;
          tmpmouseX = a.clientX - canvas_x_offset;
          tmpmouseY = a.clientY - canvas_y_offset;
          var b = !1;
          tmpmouseX >= psy_stimuli1[psy_readkey.bitmap - 1].rect.x &&
            tmpmouseX <=
              psy_stimuli1[psy_readkey.bitmap - 1].rect.x +
                psy_stimuli1[psy_readkey.bitmap - 1].rect.width &&
            tmpmouseY >= psy_stimuli1[psy_readkey.bitmap - 1].rect.y &&
            tmpmouseX <=
              psy_stimuli1[psy_readkey.bitmap - 1].rect.x +
                psy_stimuli1[psy_readkey.bitmap - 1].rect.height &&
            (b = !0);
          keystatus.status =
            psy_readkey.expectedkey == a.button && 1 == b ? 1 : 2;
          keystatus.mouse_x = tmpmouseX;
          keystatus.mouse_y = tmpmouseY;
          psy_readkey.expectkey = !1;
          psy_readkey.stop();
        }
        1 == psy_readkey.expectkey &&
          -1 < psy_readkey.bitmap_range[0] &&
          ((keystatus.time = new Date().getTime() - psy_readkey.starttime),
          (canvas_x_offset = c.getBoundingClientRect().left),
          (canvas_y_offset = c.getBoundingClientRect().top),
          (tmpmouseX = a.clientX - canvas_x_offset),
          (tmpmouseY = a.clientY - canvas_y_offset),
          (b = psy_bitmap_under_mouse(
            0,
            psy_readkey.bitmap_range[0],
            psy_readkey.bitmap_range[1],
            tmpmouseX - psy_screen_x_offset,
            tmpmouseY - psy_screen_y_offset
          )),
          b >= psy_readkey.bitmap_range[0] &&
            b <= psy_readkey.bitmap_range[1] &&
            ((b = !1),
            tmpmouseX >= psy_stimuli1[psy_readkey.bitmap - 1].rect.x &&
              tmpmouseX <=
                psy_stimuli1[psy_readkey.bitmap - 1].rect.x +
                  psy_stimuli1[psy_readkey.bitmap - 1].rect.width &&
              tmpmouseY >= psy_stimuli1[psy_readkey.bitmap - 1].rect.y &&
              tmpmouseX <=
                psy_stimuli1[psy_readkey.bitmap - 1].rect.x +
                  psy_stimuli1[psy_readkey.bitmap - 1].rect.height &&
              (b = !0),
            (keystatus.status =
              psy_readkey.expectedkey == a.button && 1 == b ? 1 : 2),
            (keystatus.mouse_x = tmpmouseX - psy_screen_x_offset),
            (keystatus.mouse_y = tmpmouseY - psy_screen_y_offset),
            (psy_readkey.expectkey = !1),
            (psy_readkey.bitmap_range = [-1, -1]),
            psy_readkey.stop()));
      }
      function psy_mouse_in_bitmap_rectangle(a, b) {
        psy_readkey.bitmap = a;
        window.addEventListener("mousemove", getmouse_in_area, !1);
        psy_readkey.mouseovereventlistener = !0;
        psy_readkey.start(current_task, b);
      }
      function psy_mouse_click_bitmap_rectangle(a, b, d) {
        psy_readkey.bitmap = b;
        psy_readkey.expectedkey = "l" == a ? 0 : 1;
        window.addEventListener("mousedown", getmouseclick_in_area, !1);
        psy_readkey.mousedowneventlistener = !0;
        psy_readkey.start(current_task, d);
      }
      function psy_mouse_click_bitmap_rectangle_range(a, b, d, f, k) {
        psy_readkey.bitmap = b;
        psy_readkey.expectedkey = "l" == a ? 0 : 1;
        window.addEventListener("mousedown", getmouseclick_in_area, !1);
        psy_readkey.mousedowneventlistener = !0;
        psy_readkey.bitmap_range = [f, k];
        psy_readkey.start(current_task, d);
      }
      function psy_bitmap_under_mouse(a, b, d, f, k) {
        var e = 0,
          g = 0,
          n = 0,
          m = -1,
          l = 1,
          e = 0,
          g = psy_stimuli1_n;
        -1 < b && (e = b - 1);
        -1 < d && (g = d - 1);
        0 == a && e > g && ((n = g), (g = e), (e = n));
        1 == a && e < g && ((n = g), (g = e), (e = n));
        for (; 1 == l && -1 == m; )
          f + psy_screen_x_offset >= psy_stimuli1[e].rect.x &&
            f + psy_screen_x_offset <=
              psy_stimuli1[e].rect.x + psy_stimuli1[e].rect.width &&
            k + psy_screen_y_offset >= psy_stimuli1[e].rect.y &&
            k + psy_screen_y_offset <=
              psy_stimuli1[e].rect.y + psy_stimuli1[e].rect.height &&
            (m = e),
            0 == a && -1 == m && (e >= g && (l = 0), e++),
            1 == a && -1 == m && (e <= g && (l = 0), e--);
        return m + 1;
      }
      function psy_wait(a, b) {
        0 != a &&
          (psy_clear_stimulus_counters_db(),
          psy_add_centered_bitmap_db(a, PSY_CENTRAL, PSY_CENTRAL),
          psy_draw_all_db());
        psy_readkey.expectedkey = b;
        psy_readkey.start(current_block, 99999999);
      }
      var psy_pager = {
        original_block: "",
        current_bitmap_in_pager: 0,
        bitmaps: [],
        n: 0,
        start: function (a) {
          psy_pager.original_block = current_block;
          psy_pager.n = a.length;
          psy_pager.bitmaps = a;
          current_block = "psy_pager";
          psy_pager.current_bitmap_in_pager = 0;
          keystatus.key = -1;
          psy_pager.run();
        },
        run: function () {
          (32 == keystatus.key || 40 == keystatus.key) &&
            psy_pager.current_bitmap_in_pager < psy_pager.n - 1 &&
            psy_pager.current_bitmap_in_pager++;
          38 == keystatus.key &&
            0 < psy_pager.current_bitmap_in_pager &&
            psy_pager.current_bitmap_in_pager--;
          81 == keystatus.key &&
            ((current_block = psy_pager.original_block),
            psy_clear_screen_db(),
            setTimeout(current_block + ".run()", 10));
          psy_wait(psy_pager.bitmaps[psy_pager.current_bitmap_in_pager], 32);
        },
      };
      function psy_add_text_rgb_db(a, b, d, f, k, e, g, n, m) {
        var l = 0,
          p = 0,
          r = 0,
          q = 0;
        psy_stimuli1[psy_stimuli1_end].type = 2;
        psy_stimuli1[psy_stimuli1_end].on = 1;
        ctx.font = psy_fonts[a];
        tmpsize = ctx.measureText(m);
        q = psy_fonts_size[a];
        r = tmpsize.width;
        tmpgraphicsCanvas = document.createElement("canvas");
        tmpgraphicsCanvas.width = r;
        tmpgraphicsCanvas.height = Math.round(1.3 * q);
        tmpgraphics = tmpgraphicsCanvas.getContext("2d");
        tmpgraphics.fillStyle = "#000000";
        tmpgraphics.fillRect(0, 0, r, q);
        tmpgraphics.fillStyle = hexrgb(e, g, n);
        tmpgraphics.font = psy_fonts[a];
        tmpgraphics.fillText(m, 0, q);
        psy_stimuli1[psy_stimuli1_end].text = tmpgraphicsCanvas;
        l = b == PSY_CENTRAL ? psy_screen_center_x : b + psy_screen_x_offset;
        p = d == PSY_CENTRAL ? psy_screen_center_y : d + psy_screen_y_offset;
        f == PSY_CENTRAL && (l -= r / 2);
        k == PSY_CENTRAL && (p -= q / 2);
        0 > l && (l = 0);
        0 > p && (p = 0);
        psy_stimuli1[psy_stimuli1_end].rect.x = l;
        psy_stimuli1[psy_stimuli1_end].rect.y = p;
        psy_stimuli1[psy_stimuli1_end].rect.width = r;
        psy_stimuli1[psy_stimuli1_end].rect.height = q;
        psy_stimuli1_n++;
        psy_stimuli1_end++;
        return psy_stimuli1_end;
      }
      function psy_clear_screen_db() {
        psy_clear_stimulus_counters_db();
        psy_draw_all_db();
      }
      function psy_clear_stimuli1(a) {
        psy_stimuli1[0 > a ? psy_stimuli1_end + a : a - 1].on = 0;
        psy_stimuli1_n--;
      }
      function psy_clear_stimulus_counters_db() {
        for (var a = 0; a < psy_stimuli1_n; ) (psy_stimuli1[a].on = 0), a++;
        psy_stimuli1_n = psy_stimuli1_end = 0;
      }
      function psy_random(a, b) {
        return Math.floor(Math.random() * (b - a + 1) + a);
      }
      function psy_random_weighted(a, b) {
        var d = 0,
          f = 0,
          k = 0,
          e;
        for (e = 0; e < b; e++)
          0 < a[e] &&
            ((f = psy_random(1e4 * a[e], 1e4)), f > k && ((k = f), (d = e)));
        return d;
      }
      function psy_random_by(a, b, d) {
        return Math.floor((Math.random() * (b + d - a)) / d) * d + a;
      }
      function psy_random_from_array(a) {
        return a[Math.round(Math.random() * (a.length - 1))];
      }
      function psy_draw_all_db() {
        var a = 0,
          b = 0;
        ctx.fillStyle = hexrgb(0, 0, 0);
        for (
          ctx.fillRect(0, 0, psy_screen_width, psy_screen_height);
          b < psy_stimuli1_n;

        ) {
          if (1 == psy_stimuli1[a].on)
            switch ((b++, psy_stimuli1[a].type)) {
              case 0:
                ctx.fillStyle = hexrgb(
                  psy_stimuli1[a].r,
                  psy_stimuli1[a].g,
                  psy_stimuli1[a].b
                );
                ctx.fillRect(
                  psy_stimuli1[a].rect.x,
                  psy_stimuli1[a].rect.y,
                  psy_stimuli1[a].rect.width,
                  psy_stimuli1[a].rect.height
                );
                break;
              case 1:
                ctx.drawImage(
                  psy_bitmaps[psy_stimuli1[a].bitmap - 1],
                  psy_stimuli1[a].rect.x,
                  psy_stimuli1[a].rect.y
                );
                break;
              case 2:
                ctx.drawImage(
                  psy_stimuli1[a].text,
                  psy_stimuli1[a].rect.x,
                  psy_stimuli1[a].rect.y
                );
            }
          a++;
        }
      }
      function psy_add_centered_rectangle_rgb_db(a, b, d, f, k, e, g) {
        psy_stimuli1[psy_stimuli1_end].type = 0;
        psy_stimuli1[psy_stimuli1_end].on = 1;
        a =
          a == PSY_CENTRAL
            ? psy_screen_center_x - d / 2
            : a + psy_screen_x_offset - d / 2;
        b =
          b == PSY_CENTRAL
            ? psy_screen_center_y - f / 2
            : b + psy_screen_y_offset - f / 2;
        psy_stimuli1[psy_stimuli1_end].rect.x = a;
        psy_stimuli1[psy_stimuli1_end].rect.y = b;
        psy_stimuli1[psy_stimuli1_end].rect.width = d;
        psy_stimuli1[psy_stimuli1_end].rect.height = f;
        psy_stimuli1[psy_stimuli1_end].r = k;
        psy_stimuli1[psy_stimuli1_end].g = e;
        psy_stimuli1[psy_stimuli1_end].b = g;
        psy_stimuli1_n++;
        psy_stimuli1_end++;
        return psy_stimuli1_end;
      }
      function psy_add_centered_bitmap_db(a, b, d) {
        psy_stimuli1[psy_stimuli1_end].type = 1;
        psy_stimuli1[psy_stimuli1_end].on = 1;
        psy_stimuli1[psy_stimuli1_end].bitmap = a;
        b =
          b == PSY_CENTRAL
            ? psy_screen_center_x - psy_bitmaps[a - 1].width / 2
            : b + psy_screen_x_offset - psy_bitmaps[a - 1].width / 2;
        d =
          d == PSY_CENTRAL
            ? psy_screen_center_y - psy_bitmaps[a - 1].height / 2
            : d + psy_screen_y_offset - psy_bitmaps[a - 1].height / 2;
        psy_stimuli1[psy_stimuli1_end].rect.x = b;
        psy_stimuli1[psy_stimuli1_end].rect.y = d;
        psy_stimuli1[psy_stimuli1_end].rect.width = psy_bitmaps[a - 1].width;
        psy_stimuli1[psy_stimuli1_end].rect.height = psy_bitmaps[a - 1].height;
        psy_stimuli1_n++;
        psy_stimuli1_end++;
        return psy_stimuli1_end;
      }
      function psy_set_coordinate_system(a) {
        "c" == a &&
          ((psy_screen_x_offset = psy_screen_center_x),
          (psy_screen_y_offset = psy_screen_center_y));
      }
      function Rectangle() {
        this.h = this.w = this.y = this.x = 0;
      }
      function psy_stimulus1() {
        this.rect =
          this.h =
          this.w =
          this.y =
          this.x =
          this.bitmap =
          this.a =
          this.b =
          this.g =
          this.r =
          this.type =
          this.on =
            0;
      }
      for (var psy_stimuli1 = [], i = 0; 100 > i; i++)
        (psy_stimuli1[i] = new psy_stimulus1()),
          (psy_stimuli1[i].rect = new Rectangle());
      var psy_stimuli1_n = 0,
        psy_stimuli1_end = 0;
      function psy_mouse_visibility(a) {
        c.style.cursor = 1 == a ? "default" : "none";
      }
      var trial_counter,
        i,
        trials_left_to_do = 0,
        tasklist_end_request = 0,
        Timer_tasklist_begin,
        Timer_tasklist_now,
        maxtasklisttime = 0,
        TRIAL_SELECTION_RANDOM = 0,
        TRIAL_SELECTION_RANDOM_NEVER_REPEAT = 1,
        TRIAL_SELECTION_FIXED_SEQUENCE = 2,
        TRIAL_SELECTION_REPEAT_ON_ERROR = 3,
        TRIAL_SELECTION_ONCE = 4,
        error_status;
      trial_counter_per_task = [];
      task_probability = [];
      var blockname = "",
        blockrepeat = 1,
        current_trial = [],
        current_task = "",
        current_block = "";
      function psy_time_since_start() {}
      function psy_diff_timers(a, b) {
        return b - a;
      }
      function psy_delay(a) {
        setTimeout(current_task + ".run();", a);
      }
      var choose = {
        first: 0,
        last: 0,
        counter: 0,
        mouse_select_bitmap: 0,
        mouse_select_bg_bitmap: 0,
        maxselect: 9999,
        currentlyselected: 0,
        exit: -1,
        selectedstimuli: [],
        firstselected: [],
        expect_key: 0,
        timer: 0,
        getmouseclick: function (a) {
          1 == choose.expect_key &&
            ((canvas_x_offset = c.getBoundingClientRect().left),
            (canvas_y_offset = c.getBoundingClientRect().top),
            (tmpmouseX = a.clientX - canvas_x_offset - psy_screen_x_offset),
            (tmpmouseY = a.clientY - canvas_y_offset - psy_screen_y_offset),
            -1 != choose.exit &&
              ((tmpnum = psy_bitmap_under_mouse(
                0,
                choose.exit,
                choose.exit + 1,
                tmpmouseX,
                tmpmouseY
              )),
              tmpnum == choose.exit && choose.stop()),
            (tmpnum = psy_bitmap_under_mouse(
              0,
              choose.first,
              choose.last,
              tmpmouseX,
              tmpmouseY
            )),
            (tmpx = psy_stimuli1[tmpnum - 1].rect.x),
            (tmpy = psy_stimuli1[tmpnum - 1].rect.y),
            (tmpw = psy_stimuli1[tmpnum - 1].rect.width),
            (tmph = psy_stimuli1[tmpnum - 1].rect.height),
            null == choose.selectedstimuli[tmpnum]
              ? choose.currentlyselected < choose.maxselect &&
                ((choose.selectedstimuli[tmpnum] = psy_add_centered_bitmap_db(
                  choose.mouse_select_bitmap + 1,
                  tmpx + tmpw / 2,
                  tmpy + tmph / 2
                )),
                null == choose.firstselected[tmpnum] &&
                  (choose.firstselected[tmpnum] =
                    new Date().getTime() - choose.starttime),
                choose.currentlyselected++)
              : (psy_clear_stimuli1(choose.selectedstimuli[tmpnum]),
                (choose.selectedstimuli[tmpnum] = null),
                choose.currentlyselected--),
            psy_draw_all_db());
        },
        timeout: function () {
          window.removeEventListener("mousedown", choose.getmouseclick, !1);
          for (i = choose.first; i < choose.last; i++)
            null != choose.selectedstimuli[i] &&
              psy_clear_stimuli1(choose.selectedstimuli[i]);
          psy_draw_all_db();
          psy_stimuli1_n = choose.counter;
          choose.expect_key = 0;
          choose.maxselect = 9999;
          eval(current_task + ".run()");
        },
        stop: function () {
          clearTimeout(choose.timer);
          choose.timeout();
        },
        outselected: function () {
          tmpoutput = "";
          for (i = choose.first; i <= choose.last; i++)
            tmpoutput =
              null == choose.selectedstimuli[i]
                ? tmpoutput + " 0"
                : tmpoutput + " 1";
          return tmpoutput;
        },
        outrt: function () {
          tmpoutput = "";
          for (i = choose.first; i <= choose.last; i++)
            tmpoutput =
              null == choose.firstselected[i]
                ? tmpoutput + " 0"
                : tmpoutput + " " + choose.firstselected[i];
          return tmpoutput;
        },
      };
      function psy_choose(a, b, d) {
        choose.counter = psy_stimuli1_n;
        choose.expect_key = 1;
        choose.first = b;
        choose.last = d;
        choose.firstselected = [];
        choose.selectedstimuli = [];
        window.addEventListener("mousedown", choose.getmouseclick, !1);
        choose.timer = setTimeout("choose.timeout()", a);
        choose.starttime = new Date().getTime();
      }
      var aims = 1,
        target = 2,
        distractor1 = 3,
        distractor2 = 4,
        empty = 5,
        mask1 = 6,
        mask2 = 7,
        fixpoint = 8,
        frame = 9,
        therewasnone = 10,
        toolate = 11,
        arial = 0,
        x = 0,
        RTfive = 0,
        RTten = 0,
        RTfifteen = 0,
        RTtwenty = 0;
      
        selectedoncecount = [0, 0],
        task_search = {
          step: 1,
          task_trial_selection: 0,
          current_trial: -1,
          taskname: "task_search",
          tasknumber: 1,
          start: function (a) {
            task_search.trial_selection = a;
            task_search.step = 1;
            psy_clear_stimulus_counters_db();
            task_search.run();
          },
          run: function () {
            current_task = task_search.taskname;
            switch (task_search.step) {
              case 1:
                task_search.step++;
                task_search.trial_selection == TRIAL_SELECTION_RANDOM &&
                  ((tablerow = psy_random(0, 55)),
                  (task_search.current_trial = tablerow));
                task_search.trial_selection == TRIAL_SELECTION_FIXED_SEQUENCE &&
                  (task_search.current_trial++,
                  56 == task_search.current_trial &&
                    (task_search.current_trial = 0),
                  (tablerow = task_search.current_trial));
                task_search.trial_selection ==
                  TRIAL_SELECTION_REPEAT_ON_ERROR &&
                  (0 != error_status && -1 != task_search.current_trial
                    ? (tablerow = task_search.current_trial)
                    : ((tablerow = psy_random(0, 55)),
                      (task_search.current_trial = tablerow)));
                if (task_search.trial_selection == TRIAL_SELECTION_ONCE) {
                  if (56 == selectedoncecount[task_search.tasknumber]) {
                    for (tmptr = 0; 56 > tmptr; tmptr++)
                      general[tmptr].selected = 0;
                    selectedoncecount[task_search.tasknumber] = 0;
                  }
                  for (
                    tablerow = psy_random(0, 55);
                    1 == general[tablerow].selected;

                  )
                    tablerow = psy_random(0, 55);
                  task_search.current_trial = tablerow;
                  selectedoncecount[task_search.tasknumber]++;
                  general[tablerow].selected = 1;
                }
                error_status = 0;
                possiblekeys = [32];
                psy_add_centered_bitmap_db(fixpoint, PSY_CENTRAL, PSY_CENTRAL);
                psy_draw_all_db();
                psy_delay(100);
                break;
              case 2:
                task_search.step++;
                psy_clear_stimuli1(1);
                psy_draw_all_db();
                psy_delay(400);
                break;
              case 3:
                task_search.step++;
                psy_add_centered_bitmap_db(
                  general[tablerow].c4,
                  general[tablerow].c5,
                  general[tablerow].c6
                );
                psy_add_centered_bitmap_db(
                  general[tablerow].c7,
                  general[tablerow].c8,
                  general[tablerow].c9
                );
                psy_add_centered_bitmap_db(
                  general[tablerow].c10,
                  general[tablerow].c11,
                  general[tablerow].c12
                );
                psy_add_centered_bitmap_db(
                  general[tablerow].c13,
                  general[tablerow].c14,
                  general[tablerow].c15
                );
                psy_add_centered_bitmap_db(
                  general[tablerow].c16,
                  general[tablerow].c17,
                  general[tablerow].c18
                );
                psy_add_centered_bitmap_db(
                  general[tablerow].c19,
                  general[tablerow].c20,
                  general[tablerow].c21
                );
                psy_add_centered_bitmap_db(
                  general[tablerow].c22,
                  general[tablerow].c23,
                  general[tablerow].c24
                );
                psy_add_centered_bitmap_db(
                  general[tablerow].c25,
                  general[tablerow].c26,
                  general[tablerow].c27
                );
                psy_add_centered_bitmap_db(
                  general[tablerow].c28,
                  general[tablerow].c29,
                  general[tablerow].c30
                );
                psy_add_centered_bitmap_db(
                  general[tablerow].c31,
                  general[tablerow].c32,
                  general[tablerow].c33
                );
                psy_add_centered_bitmap_db(
                  general[tablerow].c34,
                  general[tablerow].c35,
                  general[tablerow].c36
                );
                psy_add_centered_bitmap_db(
                  general[tablerow].c37,
                  general[tablerow].c38,
                  general[tablerow].c39
                );
                psy_add_centered_bitmap_db(
                  general[tablerow].c40,
                  general[tablerow].c41,
                  general[tablerow].c42
                );
                psy_add_centered_bitmap_db(
                  general[tablerow].c43,
                  general[tablerow].c44,
                  general[tablerow].c45
                );
                psy_add_centered_bitmap_db(
                  general[tablerow].c46,
                  general[tablerow].c47,
                  general[tablerow].c48
                );
                psy_add_centered_bitmap_db(
                  general[tablerow].c49,
                  general[tablerow].c50,
                  general[tablerow].c51
                );
                psy_add_centered_bitmap_db(
                  general[tablerow].c52,
                  general[tablerow].c53,
                  general[tablerow].c54
                );
                psy_add_centered_bitmap_db(
                  general[tablerow].c55,
                  general[tablerow].c56,
                  general[tablerow].c57
                );
                psy_add_centered_bitmap_db(
                  general[tablerow].c58,
                  general[tablerow].c59,
                  general[tablerow].c60
                );
                psy_add_centered_bitmap_db(
                  general[tablerow].c61,
                  general[tablerow].c62,
                  general[tablerow].c63
                );
                psy_draw_all_db();
                psy_keyboard(possiblekeys, 1, 0, 4e3);
                break;
              case 4:
                task_search.step++;
                x = 0;
                1 != keystatus.status && (task_search.step = 12);
                eval("task_search.run()");
                break;
              case 5:
                task_search.step++;
                0 != general[tablerow].c2 && (task_search.step = 11);
                eval("task_search.run()");
                break;
              case 6:
                task_search.step++;
                psy_add_centered_bitmap_db(therewasnone, 0, 200);
                psy_draw_all_db();
                psy_delay(2e3);
                break;
              case 7:
                task_search.step++;
                psy_clear_stimuli1(22);
                psy_draw_all_db();
                psy_delay(500);
                break;
              case 8:
                task_search.step++;
                psy_add_centered_bitmap_db(mask1, PSY_CENTRAL, PSY_CENTRAL);
                psy_draw_all_db();
                psy_delay(100);
                break;
              case 9:
                task_search.step++;
                psy_add_centered_bitmap_db(mask2, PSY_CENTRAL, PSY_CENTRAL);
                psy_draw_all_db();
                psy_delay(100);
                break;
              case 10:
                task_search.step++;
                psy_clear_stimuli1(1);
                psy_clear_stimuli1(2);
                psy_clear_stimuli1(3);
                psy_clear_stimuli1(4);
                psy_clear_stimuli1(5);
                psy_clear_stimuli1(6);
                psy_clear_stimuli1(7);
                psy_clear_stimuli1(8);
                psy_clear_stimuli1(9);
                psy_clear_stimuli1(10);
                psy_clear_stimuli1(11);
                psy_clear_stimuli1(12);
                psy_clear_stimuli1(13);
                psy_clear_stimuli1(14);
                psy_clear_stimuli1(15);
                psy_clear_stimuli1(16);
                psy_clear_stimuli1(17);
                psy_clear_stimuli1(18);
                psy_clear_stimuli1(19);
                psy_clear_stimuli1(20);
                psy_clear_stimuli1(21);
                psy_clear_stimuli1(22);
                psy_clear_stimuli1(23);
                psy_clear_stimuli1(24);
                psy_draw_all_db();
                x = 1;
                task_search.run();
                break;
              case 11:
                task_search.step++;
                task_search.run();
                break;
              case 12:
                task_search.step++;
                3 != keystatus.status && (task_search.step = 20);
                eval("task_search.run()");
                break;
              case 13:
                task_search.step++;
                1 != general[tablerow].c2 && (task_search.step = 19);
                eval("task_search.run()");
                break;
              case 14:
                task_search.step++;
                psy_add_centered_bitmap_db(toolate, 0, 200);
                psy_draw_all_db();
                psy_add_centered_bitmap_db(
                  frame,
                  general[tablerow].c5,
                  general[tablerow].c6
                );
                psy_draw_all_db();
                psy_add_centered_bitmap_db(
                  target,
                  general[tablerow].c5,
                  general[tablerow].c6
                );
                psy_draw_all_db();
                psy_delay(2e3);
                break;
              case 15:
                task_search.step++;
                psy_clear_stimuli1(22);
                psy_draw_all_db();
                psy_delay(500);
                break;
              case 16:
                task_search.step++;
                psy_add_centered_bitmap_db(mask1, PSY_CENTRAL, PSY_CENTRAL);
                psy_draw_all_db();
                psy_delay(100);
                break;
              case 17:
                task_search.step++;
                psy_add_centered_bitmap_db(mask2, PSY_CENTRAL, PSY_CENTRAL);
                psy_draw_all_db();
                psy_delay(100);
                break;
              case 18:
                task_search.step++;
                psy_clear_stimuli1(1);
                psy_clear_stimuli1(2);
                psy_clear_stimuli1(3);
                psy_clear_stimuli1(4);
                psy_clear_stimuli1(5);
                psy_clear_stimuli1(6);
                psy_clear_stimuli1(7);
                psy_clear_stimuli1(8);
                psy_clear_stimuli1(9);
                psy_clear_stimuli1(10);
                psy_clear_stimuli1(11);
                psy_clear_stimuli1(12);
                psy_clear_stimuli1(13);
                psy_clear_stimuli1(14);
                psy_clear_stimuli1(15);
                psy_clear_stimuli1(16);
                psy_clear_stimuli1(17);
                psy_clear_stimuli1(18);
                psy_clear_stimuli1(19);
                psy_clear_stimuli1(20);
                psy_clear_stimuli1(21);
                psy_clear_stimuli1(22);
                psy_clear_stimuli1(23);
                psy_clear_stimuli1(24);
                psy_clear_stimuli1(25);
                psy_clear_stimuli1(26);
                psy_draw_all_db();
                x = 1;
                task_search.run();
                break;
              case 19:
                task_search.step++;
                task_search.run();
                break;
              case 20:
                task_search.step++;
                0 != x && (task_search.step = 24);
                eval("task_search.run()");
                break;
              case 21:
                task_search.step++;
                psy_add_centered_bitmap_db(mask1, PSY_CENTRAL, PSY_CENTRAL);
                psy_draw_all_db();
                psy_delay(100);
                break;
              case 22:
                task_search.step++;
                psy_add_centered_bitmap_db(mask2, PSY_CENTRAL, PSY_CENTRAL);
                psy_draw_all_db();
                psy_delay(100);
                break;
              case 23:
                task_search.step++;
                psy_clear_stimuli1(1);
                psy_clear_stimuli1(2);
                psy_clear_stimuli1(3);
                psy_clear_stimuli1(4);
                psy_clear_stimuli1(5);
                psy_clear_stimuli1(6);
                psy_clear_stimuli1(7);
                psy_clear_stimuli1(8);
                psy_clear_stimuli1(9);
                psy_clear_stimuli1(10);
                psy_clear_stimuli1(11);
                psy_clear_stimuli1(12);
                psy_clear_stimuli1(13);
                psy_clear_stimuli1(14);
                psy_clear_stimuli1(15);
                psy_clear_stimuli1(16);
                psy_clear_stimuli1(17);
                psy_clear_stimuli1(18);
                psy_clear_stimuli1(19);
                psy_clear_stimuli1(20);
                psy_clear_stimuli1(21);
                psy_clear_stimuli1(22);
                psy_clear_stimuli1(23);
                psy_draw_all_db();
                task_search.run();
                break;
              case 24:
                task_search.step++;
                psy_delay(1e3);
                break;
              case 25:
                task_search.step++,
                  addoutput(
                    current_block +
                      " " +
                      general[tablerow].c1 +
                      " " +
                      general[tablerow].c2 +
                      " " +
                      general[tablerow].c3 +
                      " " +
                      keystatus.status +
                      " " +
                      keystatus.time
                  ),
                  eval(current_block + ".run()");
            }
          },
        },
        block_messagenumber1 = {
          blockname: "block_messagenumber1",
          step: 1,
          trial_counter: 0,
          start: function () {
            block_messagenumber1.step = 1;
            psy_clear_stimulus_counters_db();
            block_messagenumber1.run();
          },
          run: function () {
            current_block = block_messagenumber1.blockname;
            switch (block_messagenumber1.step) {
              case 1:
                block_messagenumber1.step++;
                psy_wait(aims, 32);
                break;
              case 2:
                block_messagenumber1.step++, eval("blocks.run()");
            }
          },
        },
        block_block1 = {
          blockname: "block_block1",
          step: 1,
          trial_counter: 0,
          trial_counter_per_task: [0],
          max_trials_in_block: 999999,
          criteria_fullfilled: 1,
          choosetask: 0,
          start: function () {
            block_block1.step = 1;
            current_task = "block_block1";
            block_block1.trial_counter_per_task[0] = 50;
            psy_clear_stimulus_counters_db();
            block_block1.run();
          },
          run: function () {
            current_block = block_block1.blockname;
            switch (block_block1.step) {
              case 1:
                block_block1.step++;
                psy_clear_screen_db();
                block_block1.max_trials_in_block = 999999;
                block_block1.criteria_fullfilled = 1;
                0 < block_block1.criteria_fullfilled &&
                block_block1.trial_counter <= block_block1.max_trials_in_block
                  ? task_search.start(TRIAL_SELECTION_ONCE)
                  : eval("block_block1.run()");
                break;
              case 2:
                block_block1.step++;
                block_block1.trial_counter_per_task[0]--;
                if (
                  0 == block_block1.trial_counter_per_task[0] ||
                  block_block1.trial_counter >= block_block1.max_trials_in_block
                )
                  block_block1.criteria_fullfilled = 0;
                1 == block_block1.criteria_fullfilled &&
                  (block_block1.step -= 2);
                eval("block_block1.run()");
                break;
              case 3:
                block_block1.step++;
                psy_clear_screen_db();
                datalines = outputdata.split("\n");
                var a = 0,
                  b = 0,
                  d = 987654321,
                  f = -987654321;
                for (tmpx = 0; tmpx < datalines.length - 1; tmpx++)
                  (datalinenumbers = datalines[tmpx].split(/ +/)),
                    1 == parseInt(datalinenumbers[2]) &&
                      1 == parseInt(datalinenumbers[4]) &&
                      5 == parseInt(datalinenumbers[3]) &&
                      (parseInt(datalinenumbers[5]),
                      (b += parseInt(datalinenumbers[5])),
                      parseInt(datalinenumbers[5]) < d &&
                        (d = parseInt(datalinenumbers[5])),
                      parseInt(datalinenumbers[5]) > f &&
                        (f = parseInt(datalinenumbers[5])),
                      a++);
                RTfive = 0 < a ? Math.round(b / a) : 0;
                datalines = outputdata.split("\n");
                b = a = 0;
                d = 987654321;
                f = -987654321;
                for (tmpx = 0; tmpx < datalines.length - 1; tmpx++)
                  (datalinenumbers = datalines[tmpx].split(/ +/)),
                    1 == parseInt(datalinenumbers[2]) &&
                      1 == parseInt(datalinenumbers[4]) &&
                      10 == parseInt(datalinenumbers[3]) &&
                      (parseInt(datalinenumbers[5]),
                      (b += parseInt(datalinenumbers[5])),
                      parseInt(datalinenumbers[5]) < d &&
                        (d = parseInt(datalinenumbers[5])),
                      parseInt(datalinenumbers[5]) > f &&
                        (f = parseInt(datalinenumbers[5])),
                      a++);
                RTten = 0 < a ? Math.round(b / a) : 0;
                datalines = outputdata.split("\n");
                b = a = 0;
                d = 987654321;
                f = -987654321;
                for (tmpx = 0; tmpx < datalines.length - 1; tmpx++)
                  (datalinenumbers = datalines[tmpx].split(/ +/)),
                    1 == parseInt(datalinenumbers[2]) &&
                      1 == parseInt(datalinenumbers[4]) &&
                      15 == parseInt(datalinenumbers[3]) &&
                      (parseInt(datalinenumbers[5]),
                      (b += parseInt(datalinenumbers[5])),
                      parseInt(datalinenumbers[5]) < d &&
                        (d = parseInt(datalinenumbers[5])),
                      parseInt(datalinenumbers[5]) > f &&
                        (f = parseInt(datalinenumbers[5])),
                      a++);
                RTfifteen = 0 < a ? Math.round(b / a) : 0;
                datalines = outputdata.split("\n");
                b = a = 0;
                d = 987654321;
                f = -987654321;
                for (tmpx = 0; tmpx < datalines.length - 1; tmpx++)
                  (datalinenumbers = datalines[tmpx].split(/ +/)),
                    1 == parseInt(datalinenumbers[2]) &&
                      1 == parseInt(datalinenumbers[4]) &&
                      20 == parseInt(datalinenumbers[3]) &&
                      (parseInt(datalinenumbers[5]),
                      (b += parseInt(datalinenumbers[5])),
                      parseInt(datalinenumbers[5]) < d &&
                        (d = parseInt(datalinenumbers[5])),
                      parseInt(datalinenumbers[5]) > f &&
                        (f = parseInt(datalinenumbers[5])),
                      a++);
                RTtwenty = 0 < a ? Math.round(b / a) : 0;
                psy_add_text_rgb_db(
                  0,
                  0,
                  0,
                  PSY_CENTRAL,
                  PSY_CENTRAL,
                  255,
                  255,
                  255,
                  "Search time (ms)"
                );
                psy_draw_all_db();
                tmptext = "With  5 items: " + RTfive + " ms";
                psy_add_text_rgb_db(
                  0,
                  0,
                  50,
                  PSY_CENTRAL,
                  PSY_CENTRAL,
                  255,
                  255,
                  255,
                  tmptext
                );
                psy_draw_all_db();
                tmptext = "With 10 items: " + RTten + " ms";
                psy_add_text_rgb_db(
                  0,
                  0,
                  100,
                  PSY_CENTRAL,
                  PSY_CENTRAL,
                  255,
                  255,
                  255,
                  tmptext
                );
                psy_draw_all_db();
                tmptext = "With 15 items: " + RTfifteen + " ms";
                psy_add_text_rgb_db(
                  0,
                  0,
                  150,
                  PSY_CENTRAL,
                  PSY_CENTRAL,
                  255,
                  255,
                  255,
                  tmptext
                );
                psy_draw_all_db();
                tmptext = "With 20 items: " + RTtwenty + " ms";
                psy_add_text_rgb_db(
                  0,
                  0,
                  200,
                  PSY_CENTRAL,
                  PSY_CENTRAL,
                  255,
                  255,
                  255,
                  tmptext
                );
                psy_draw_all_db();
                psy_add_text_rgb_db(
                  0,
                  0,
                  250,
                  PSY_CENTRAL,
                  PSY_CENTRAL,
                  255,
                  255,
                  255,
                  "Press space bar to continue"
                );
                psy_draw_all_db();
                psy_wait(0, 0);
                break;
              case 4:
                block_block1.step++,
                  psy_clear_screen_db(),
                  eval("blocks.run()");
            }
          },
        };
      
      var blocks = {
        blocknumber: 0,
        run: function () {
          blocks.blocknumber++;
          switch (blocks.blocknumber) {
            case 1:
              block_messagenumber1.start();
              break;
            case 2:
              block_block1.start();
              break;
            case 3:
              document.getElementById("continuebutton") &&
                (document.getElementById("continuebutton").disabled = !1);
              var a = document.createElement("BUTTON"),
                b = document.createTextNode("Show data");
              a.appendChild(b);
              a.setAttribute(
                "onclick",
                'showdata.innerHTML = "<pre>" + outputdata + "</pre>";'
              );
              document.body.appendChild(a);
          }
        },
      };
  