// game
const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d");
const startButton = document.getElementById("btnStart");
const resetButton = document.getElementById("btnReset");
const startModal = document.getElementById("startModal");
const endModal = document.getElementById("endModal");
const scoreCount = document.getElementById("score-count") 

const playerSprite = new Image();
playerSprite.src = "src/images/eevee2.png";
const fireSprite = new Image();
fireSprite.src = "src/images/flareon.png"; 
const background = new Image();
background.src = "src/images/bg-img.jpg";
    
const platformSprite1 = new Image();
platformSprite1.src = "src/images/13.png";
const platformSprite2 = new Image();
platformSprite2.src = "src/images/14.png";
const platformSprite3 = new Image();
platformSprite3.src = "src/images/15.png";
const fireStone = new Image();
fireStone.src = "src/images/stones1.png";

canvas.height = 400;
canvas.width = 600;

let keys = [];
let speed = -0.2;
let x = 0;
let platforms = [];
let stones = [];

let totalStones = 0;
let frame = 0;
let gameSpeed = 0.3;
let wid = canvas.width;
let minX = 5;
let minY = 100;
let minGap = 50;
let maxGap = 90;

let player = {
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

function reset() {
    platforms = [];
    stones = [];
    totalStones = 0;
    scoreCount.innerHTML = totalStones;

    player = {
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
}


//background

function drawChar(img, spriteX, spriteY, spriteW, spriteH, destX, destY, dW, dH) {
    context.drawImage(img, spriteX, spriteY, spriteW, spriteH, destX, destY, dW, dH);
}


window.addEventListener("keydown", function(event) {
    keys[event.key] = true;
    player.moving = true;
    player.jumping = false;

});

window.addEventListener("keyup", function(event){
    delete keys[event.key];
    player.moving = false;
    player.jumping = false;
});

function movePlayer() {
    if((keys["ArrowLeft"] || keys["a"]) && player.x > 0) {
        player.x_velocity -= 0.5;
        player.frameY = 0;
        player.moving = true;
        player.jumping = true;

    }
    if(keys["ArrowRight"] || keys["d"]) { // && player.x < canvas.width - player.width
        player.x_velocity += 0.5;
        player.frameY = 1;
        player.moving = true;
    }
    if((keys["ArrowUp"] || keys['w']) && player.jumping == false) {
        player.y_velocity -= 30;
        player.jumping = true;
    }

    // gravity
    player.y_velocity += 1.5; 
    player.x += player.x_velocity;
    player.y += player.y_velocity;
    player.x_velocity *= 0.9;
    player.y_velocity *= 0.9;
    
    if (player.y > 268) { 
        player.jumping = false;
        player.y = 268;
        player.y_velocity = 0;
    }

    if (player.y < 0) { 
        player.jumping = false;
        player.y = 0;
        player.y_velocity = 0;
    }
}

function PlayerFrame() {
    if(player.frameX < 3 && player.moving) {
        player.frameX++
    } else {
        player.frameX = 0
    };
}

// platforms

    function createPlatform(){
        let x = 600;
        let y = minY + Math.floor(Math.random()*(150));
        let gap = minGap + Math.floor(Math.random()*(maxGap-minGap + 1));

            let platform = {
                x,
                y,
                width: 47,
                height: 37
            };
            let stone = {
                x: x + 50,
                y: y - 40,
                width: 47,
                height: 37
            }
            if(frame % gap === 0) {
                platforms.push(platform);
                stones.push(stone);  
                frame = 0;    
            }

            for(let i = 0; i < platforms.length; i++) {
                setInterval(updatePlatform(), 5000)
            }
                
    
    }

    function renderplatform(){
        for(i = 0; i < platforms.length; i++) {
            context.drawImage(platformSprite1, platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
            context.drawImage(platformSprite3, platforms[i].x+47, platforms[i].y, platforms[i].width, platforms[i].height);        
        }
    
    }
    function renderStones(){
        for(let i = 0; i < stones.length; i++) {
            context.drawImage(fireStone, stones[i].x, stones[i].y, stones[i].width, stones[i].height);
        }
    }


    function updatePlatform() {

        for(let i = 0; i < platforms.length; i++) {
            platforms[i].x -= gameSpeed;
            renderplatform();
        }
        for(let i = 0; i < stones.length; i++) {
            stones[i].x -=gameSpeed;
            renderStones();
        }
    }

    function collisionCheck(platform) {
            if(player.x > platform.x + platform.width) {return false};
            if(player.y > platform.y + platform.height) {return false};
            if(player.x + player.width < platform.x) {return false};
            if(player.y + player.height < platform.y) {return false};
            return true;
    };

    function platformCollision() {
        for(let i = 0; i < platforms.length; i++) {
            if(collisionCheck(platforms[i])) {
                player.y_velocity = 0;
                player.y = platforms[i].y - 60;
            }
        }
    }


    function stoneCollisionCheck(stone) {

        if(player.x > stone.x + stone.width) {return false};
        if(player.x + player.width < stone.x) {return false};
        if(player.y > stone.y + stone.height) {return false};
        if(player.y + player.height < stone.y) {return false};
        return true;
    };

    // Check stone collision here 
    function stoneCollision() {
        
        for(let i = 0; i < stones.length; i++) {
            if (stoneCollisionCheck(stones[i])) {
                stones.splice(i, 1);
                totalStones += 1;
                scoreCount.innerHTML = totalStones;
            }
        }
    }

function animate() {
    context.save();
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.drawImage(background, 0, 0, canvas.width, canvas.height); //background
    
    context.beginPath();
    
    
    movePlayer();
    PlayerFrame();
    
    platformCollision();
    
    stoneCollision();
    createPlatform();
    
    let animationId = requestAnimationFrame(animate);
    if(totalStones < 20) {
        drawChar(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);    
    } else {
        context.drawImage(fireSprite, player.x, player.y, player.width, player.height); 
        cancelAnimationFrame(animationId);
        endModal.style.display = "flex";
        resetButton.style.display = "flex";
        startButton.style.display = "none";
    }

    frame+=1
}

// start game

startButton.addEventListener('click', () => {
    reset();
    animate();
    startModal.style.display = "none";
})

// reset game

resetButton.style.display = "none";
resetButton.addEventListener('click', () => {
    reset();
    animate();
    endModal.style.display = "none";
    startModal.style.display = "none";
})

