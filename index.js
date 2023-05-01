const canvas = document.createElement("canvas");

document.querySelector(".MyGame").appendChild(canvas);

canvas.height = innerHeight;

canvas.width = innerWidth;

const context = canvas.getContext("2d");


const playerPosition = {
    x:canvas.width / 2,
    y:canvas.height / 2,
}
class Player {
    constructor(x,y,radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color= color;

    }
    draw() {
        context.beginPath();
        context.arc(
           this.x,
           this.y,
           this.radius,
            (Math.PI / 180 ) * 0,
            (Math.PI / 180 ) * 360,
            false  
        );
           context.fillStyle = this.color;

         context.fill();
    }

}
  
const sam = new Player(playerPosition.x, playerPosition.y, 15 , "red");
sam.draw();
