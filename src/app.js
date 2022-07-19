const color = document.getElementById('color');
const lineWidth = document.getElementById('line-width');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;
let isPainting = false;
/**
 * https://flatuicolors.com/palette/defo
 */
const colors = [
  '#ff3838',
  '#ffb8b8',
  '#c56cf0',
  '#ff9f1a',
  '#fff200',
  '#32ff7e',
  '#7efff5',
  '#18dcff',
  '#7d5fff',
];

function onClick(event) {
  console.dir(event);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    // ctx.fill();
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
  console.log(`${event.offsetX}, ${event.offsetY}`);
}
function startPainting() {
  isPainting = true;
}
function cancelPainting() {
  isPainting = false;
  ctx.beginPath();
}

function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}

function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);

lineWidth.addEventListener('change', onLineWidthChange);
color.addEventListener('change', onColorChange);
// 2.0 Painting lines
// canvas.addEventListener('mousemove', onClick);
// canvas.addEventListener('click', onClick);
