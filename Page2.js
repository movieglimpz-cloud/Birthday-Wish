// SECRET BUTTON
function showSecret() {
  document.getElementById("secret-text").classList.remove("hidden");
}

// DOORS
function openDoor(num) {
  const result = document.getElementById("door-result");
  const messages = [
    "You picked Door 1: You win... one imaginary cookie 🍪.",
    "Door 2: Congratulations, you've unlocked the ability to blink 😎",
    "Door 3: You win a free high-five ✋ (valid for 10 seconds)"
  ];
  result.textContent = messages[num - 1];
}

// MINI GAME
let score = 0;
let gameRunning = false;

function startHeartsGame() {
  if (gameRunning) return;
  gameRunning = true;
  document.getElementById("game-section").classList.remove("hidden");

  const gameArea = document.getElementById("game-area");

  const gameInterval = setInterval(() => {
    const heart = document.createElement("div");
    heart.textContent = "💗";
    heart.className = "heart";
    heart.style.left = Math.random() * 90 + "%";
    gameArea.appendChild(heart);

    heart.onclick = () => {
      score++;
      document.getElementById("score").textContent = "Score: " + score;
      heart.remove();
    };

    setTimeout(() => heart.remove(), 2000);
  }, 500);

  setTimeout(() => {
    clearInterval(gameInterval);
    gameRunning = false;
  }, 10000);
}

// GIFT
function showGift() {
  document.getElementById("gift-text").classList.remove("hidden");
}

// CONFETTI
const confettiCanvas = document.getElementById("confetti-canvas");
const ctx = confettiCanvas.getContext("2d");

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = 300;

let confetti = [];

for (let i = 0; i < 150; i++) {
  confetti.push({
    x: Math.random() * confettiCanvas.width,
    y: Math.random() * -confettiCanvas.height,
    r: Math.random() * 6 + 2,
    c: `hsl(${Math.random() * 360}, 80%, 60%)`,
    s: Math.random() * 3 + 1
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  confetti.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.c;
    ctx.fill();

    p.y += p.s;
    if (p.y > confettiCanvas.height) p.y = -10;
  });

  requestAnimationFrame(drawConfetti);
}

drawConfetti();
