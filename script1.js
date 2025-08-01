function shuffleArray(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

let currentSlide = 0;

const centerX = 800 / 2;
const centerY = 600 / 2;
const randomizedTrials = shuffleArray(trialData);  


function showTrial(slideIndex) {
  const container = document.getElementById("stimuliContainer");
  container.innerHTML = '';
  const slide = randomizedTrials[slideIndex];
  slide.items.forEach(({ type, x, y }) => {
      if (type === "empty") return;
      
    const el = document.createElement("img");
    el.src = `images/${type}.png`; 
    el.classList.add("stimulus");
    el.style.position = "absolute";
    el.style.left = `${centerX + x - 25}px`;
    el.style.top = `${centerY - y - 25}px`;
    el.style.width = "50px";
    el.style.height = "50px";
    container.appendChild(el);
  });
}


document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentSlide < randomizedTrials.length) {
    showTrial(currentSlide);
    currentSlide++;
  } else {
    alert("All slides completed!");
  }
});

