const catDiv = document.getElementById("cat");
const messageDiv = document.getElementById("message");

// Frames of the cat (blinking eyes, wagging tail)
const frames = [
`^~^  ,
(0Y0) )
/   \\/ 
(\\|||/)`,

`^~^  ,
(vYv) )
/   \\/ 
(\\|||/)`,

`^~^  ,
(oyo) )
/   \\/ 
(\\|||/)`,

`^~^  ,
(0Y0) )
/   \\/ 
(\\|/|/)`
];

let currentFrame = 0;
let position = 0;
let direction = 1;

// Random blinking and tail movement
function randomFrame() {
  if (Math.random() < 0.1) return 2; // blink frame
  if (Math.random() < 0.1) return 3; // tail wiggle
  return 0; // normal frame
}

// Animate cat
setInterval(() => {
  currentFrame = randomFrame();

  // Horizontal movement
  catDiv.textContent = " ".repeat(position) + frames[currentFrame];

  position += direction;
  if (position > 30 || position < 0) direction *= -1;

}, 300);

// Click to purr
catDiv.addEventListener("click", () => {
  messageDiv.textContent = "😺 Purr...";
  setTimeout(() => { messageDiv.textContent = ""; }, 1000);
});
