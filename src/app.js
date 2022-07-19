const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

console.dir(ctx);

canvas.width = 800;
canvas.height = 800;

// ctx.fillRect(100, 100, 100, 100);

//Use rect + fill => fillRect
// ctx.rect(300, 300, 100, 100);
// ctx.rect(50, 50, 100, 100);
// ctx.rect(150, 150, 100, 100);
// ctx.rect(250, 250, 100, 100);
// ctx.fill();

// ctx.rect(350, 350, 100, 100);
// ctx.rect(450, 450, 100, 100);
// ctx.fillStyle = "red";
// ctx.fill();

// Use lineTo + moveTo => rect t

// set start postiion
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(150, 150);
ctx.stroke();

// Start new line
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineTo(200, 200);
ctx.lineTo(300, 200);
ctx.lineTo(300, 100);
ctx.stroke();
