const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

console.dir(ctx);

const XOFFSET_HOME = -50;
const YOFFSET_HOME = -25;

canvas.width = 800;
canvas.height = 800;
ctx.fillRect(200 + XOFFSET_HOME, 200 + YOFFSET_HOME, 50, 200);
ctx.fillRect(400 + XOFFSET_HOME, 200 + YOFFSET_HOME, 50, 200);
ctx.fillRect(300 + XOFFSET_HOME, 300 + YOFFSET_HOME, 50, 100);
ctx.fillRect(200 + XOFFSET_HOME, 200 + YOFFSET_HOME, 200, 20);
ctx.moveTo(200 + XOFFSET_HOME, 200 + YOFFSET_HOME);
ctx.lineTo(325 + XOFFSET_HOME, 100 + YOFFSET_HOME);
ctx.lineTo(450 + XOFFSET_HOME, 200 + YOFFSET_HOME);
ctx.fill();


const xOffset = 320;
const yOffset = 320;

ctx.beginPath();
ctx.fillRect(170 + xOffset, 170 + yOffset, 15, 100);
ctx.fillRect(310 + xOffset, 170 + yOffset, 15, 100);
ctx.fillRect(220 + xOffset, 170 + yOffset, 60, 200);

ctx.arc(250 + xOffset, 100 + yOffset, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(270 + xOffset, 80 + yOffset, 8, Math.PI, 2 * Math.PI);
ctx.arc(230 + xOffset, 80 + yOffset, 8, Math.PI, 2 * Math.PI);
ctx.fill();
