const catDiv = document.getElementById("cat");

// Cat frames with blinking eyes and tail positions
const frames = [
`  /\\_/\\  
 ( o.o ) 
  > ^ <  `,
`  /\\_/\\  
 ( -.- ) 
  > ^ <  `,
`  /\\_/\\  
 ( o.o ) 
  > ~ <  `,
`  /\\_/\\  
 ( o.o ) 
  > - <  `
];

let currentFrame = 0;
let position = 0;
let direction = 1;

// Animate cat
setInterval(() => {
  // Add horizontal movement
  catDiv.textContent = " ".repeat(position) + frames[currentFrame];

  // Cycle frames
  currentFrame = (currentFrame + 1) % frames.length;

  // Move left and right
  position += direction;
  if (position > 20 || position < 0) direction *= -1;

}, 300);
