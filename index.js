const canvas = document.createElement("canvas");

document.querySelector(".MyGame").appendChild(canvas);

canvas.height = innerHeight;

canvas.width = innerWidth;

const context = canvas.getContext("2d");

context.beginPath();
context.arc(100, 150, 10, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
context.stroke();

context.beginPath();
context.arc(150, 150, 10, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
context.stroke();

context.beginPath();
context.arc(100, 100, 10, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
context.stroke();

context.beginPath();
context.arc(150, 100, 10, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
context.stroke();

