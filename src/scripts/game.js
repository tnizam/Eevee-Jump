// window.addEventListener('DOMContentLoaded', (event) => {

const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d");

canvas.height = 400;
canvas.width = 600;

const keys = [];

const player = {
    x: 230,
    y: 0,
    width: 67,
    height: 67,
    frameX: 0,
    frameY: 1,
    x_velocity: 0,
    y_velocity: 0,
    moving: false,
    jump: true
}

const playerSprite = new Image();
playerSprite.src = "src/images/eevee2.png";
const background = new Image();
background.src = "src/images/bg-img.jpg";

function drawSprite(img, spriteX, spriteY, spriteW, spriteH, destX, destY, dW, dH) {
    context.drawImage(img, spriteX, spriteY, spriteW, spriteH, destX, destY, dW, dH);
}


window.addEventListener("keydown", function(event) {
    keys[event.key] = true;
    player.moving = true;
    player.jumping = false;


    // console.log(keys);
});

window.addEventListener("keyup", function(event){
    delete keys[event.key];
    player.moving = false;
    player.jumping = false;
});

function movePlayer() {
    if(keys["ArrowLeft"] && player.x > 0) {
        // player.x -= player.x_velocity;
        player.x_velocity -= 0.5;
        // player.frameY = 1;
        player.frameY = 0;
        player.moving = true;
        player.jumping = true;

    }
    if(keys["ArrowRight"]) { // && player.x < canvas.width - player.width
        // player.x += player.x_velocity;
        player.x_velocity += 0.5;
        player.frameY = 1;
        // player.frameX = 1;
        player.moving = true;
    }
    if(keys["ArrowUp"] && player.jumping == false) {
        player.y_velocity -= 30;
        // player.frameY = 2;
        player.jumping = true;
    }
    player.y_velocity += 1.5; // gravity
    player.x += player.x_velocity;
    player.y += player.y_velocity;
    player.x_velocity *= 0.9;
    player.y_velocity *= 0.9;
    
    if (player.y > 400 - 65 - 67) { // 32 is top cord of rect
        player.jumping = false;
        player.y = 400 - 65 - 67;
        player.y_velocity = 0;
    }
}

function PlayerFrame() {
    if(player.frameX < 3 && player.moving) {
        player.frameX++
    } else {player.frameX = 0};

    // if(player.frameX < 3 && player.jumping) {
    //             player.frameX++
    // } else {player.frameX = 0};
    // if (player.frameX === 1 && player.moving) {
    //     player.frameY = 0;
    //     player.frameX = 1;
    // } else {
    //     player.frameY = 0;
    //     player.frameX = 1;
    // }
}


function animate() {
    // for background later
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    context.beginPath();
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
    movePlayer();
    PlayerFrame();
    requestAnimationFrame(animate);
}
animate();

// setInterval(function(){
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     context.drawImage(background, 0, 0, canvas.width, canvas.height);
//     drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
//     movePlayer();
//     PlayerFrame();
//     // requestAnimationFrame(animate);
// }, 50);


