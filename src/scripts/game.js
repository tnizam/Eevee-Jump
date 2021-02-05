// game
const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d");
const startButton = document.getElementById("btnStart");
const resetButton = document.getElementById("btnReset");
const playAgain = document.getElementById("playAgain");

const contButton = document.getElementById("btnCont");

const startModal = document.getElementById("startModal");
const endModal = document.getElementById("endModal");
const gameLost = document.getElementById("gameLost");
const scoreCount = document.getElementById("score-count") 

const playerSprite = new Image();
playerSprite.src = "src/images/eevee2.png";
const flareSprite = new Image();
flareSprite.src = "src/images/flare2.png";
const fireSprite = new Image();
fireSprite.src = "src/images/flareon.png"; 
const background = new Image();
background.src = "src/images/bg-img.jpg";

const enemySprite = new Image();
enemySprite.src = "src/images/teamR.png";

const lifeSprite = new Image();
lifeSprite.src = "src/images/pokeball.png";

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
let enemies = [];
let lives = [];
let jumpHeight = 0;

let totalLife = 3;
let totalStones = 0;
let frame = 0;
let gameSpeed = 0.5;
let wid = canvas.width;
let minX = 5;
let minY = 100;
// let minGap = 20;
// let maxGap = 30;

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
    jumping: true
}

function reset() {
    platforms = [];
    stones = [];
    enemies = [];
    lives = [];
    totalStones = 0;
    totalLife = 3;
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
        jumping: true
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


    // console.log(keys);
});

window.addEventListener("keyup", function(event){
    delete keys[event.key];
    player.moving = false;
    player.jumping = false;
});

function movePlayer() {
    if((keys["ArrowLeft"] || keys["a"]) && player.x > 0) {
        player.x_velocity -= 1.0;
        player.frameY = 0;
        player.moving = true;
        player.jumping = true;

    }
    if(keys["ArrowRight"] || keys["d"]) { // && player.x < canvas.width - player.width
        player.x_velocity += 1.0;
        player.frameY = 1;
        player.moving = true;
    }
    if((keys["ArrowUp"] || keys['w']) && player.jumping == false) {
        player.y_velocity -= 15;
        console.log("vel", player.y_velocity)
        player.jumping = true;
    } 

    // gravity
    player.y_velocity += 0.5; 
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
        // let gap = Math.floor(Math.random()*(maxGap-minGap + 1) + minGap);
            let platform = {
                x,
                y,
                width: 77,
                height: 37
            };
            let stone = {
                x: x + 120,
                y: y - 40,
                width: 47,
                height: 37
            }

            let enemy = {
                x: x + 10,
                y: y - 35,
                width: 47,
                height: 37
            }

            if(frame % 80 === 0) {
                platforms.push(platform);
                stones.push(stone);  
                frame = 0; 

                if (platforms.length % 2 === 0) {
                    enemies.push(enemy);
                } 
            }

            for(let i = 0; i < platforms.length; i++) {
                // updatePlatform();
                setInterval(updatePlatform(), 5000)
            }
                
    
    }

    function createLife() {
        for(let i = 1; i <= 3; i++) {
            let lifeLine = {
                x: i * 30,
                y: 22,
                width: 57,
                height: 57
            }
            lives.push(lifeLine);

        }
    }
    function renderLives(){
        for(let i = 0; i < lives.length; i++) {
            context.drawImage(lifeSprite, lives[i].x, lives[i].y, lives[i].width, lives[i].height);
        }
    }

    function renderplatform(){
        for(i = 0; i < platforms.length; i++) {
            context.drawImage(platformSprite1, platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
            context.drawImage(platformSprite3, platforms[i].x+77, platforms[i].y, platforms[i].width, platforms[i].height);        
        }
    
    }

    function renderStones(){
        for(let i = 0; i < stones.length; i++) {
            context.drawImage(fireStone, stones[i].x, stones[i].y, stones[i].width, stones[i].height);
        }
    }

    function renderEnemy() {
        for(let i = 0; i < enemies.length; i++) {
            context.drawImage(enemySprite, enemies[i].x, enemies[i].y, enemies[i].width, enemies[i].height);
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

        for(let i = 0; i < enemies.length; i++) {
            enemies[i].x -=gameSpeed;
            renderEnemy();
        }

        renderLives();
    }

    function collisionCheck(platform) {
            if(player.x > platform.x + platform.width + 40) {return false};
            if(player.y > platform.y + platform.height ) {return false};
            if(player.x + player.width < platform.x) {return false};
            if(player.y + player.height < platform.y) {return false};
            return true;
    };

    function platformCollision() {
        for(let i = 0; i < platforms.length; i++) {
            if(collisionCheck(platforms[i])) {
                player.y_velocity -= 1;
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

        function enemyCollisionCheck(enemy) {

        if(player.x > enemy.x + enemy.width) {return false};
        if(player.x + player.width < enemy.x) {return false};
        if(player.y > enemy.y + enemy.height) {return false};
        if(player.y + player.height < enemy.y) {return false};
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

    function enemyCollision() {  
        for(let i = 0; i < enemies.length; i++) {
            if (enemyCollisionCheck(enemies[i])) {
                enemies.splice(i, 1);
                totalLife -= 1;
                lives.pop();
                console.log("totallife",totalLife)
            }
        }
    }

    // for continuous
function animateNext() {

    lives = [];
    totalLife = 3;
        
    context.save();
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.drawImage(background, 0, 0, canvas.width, canvas.height); //background
    
    context.beginPath();
    
    
    movePlayer();
    PlayerFrame();
    
    platformCollision();
    enemyCollision();
    stoneCollision();
    createPlatform();
    
    // createLife();
    
    let animationId = requestAnimationFrame(animate);

    if(totalLife === 0) {
        console.log("lives", totalLife)
        cancelAnimationFrame(animationId);
        gameLost.style.display = "flex";
        resetButton.style.display = "flex";
        startButton.style.display = "none";        
    }

    frame+=0.5
}

// start of game
console.log("stone", )

function animate() {
    context.save();
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.drawImage(background, 0, 0, canvas.width, canvas.height); //background
    
    context.beginPath();
    
    
    movePlayer();
    PlayerFrame();
    
    platformCollision();
    enemyCollision();
    stoneCollision();
    createPlatform();
    // createLife();
    
    let animationId = requestAnimationFrame(animate);
    // context.restore();
    if(totalStones < 20) {
        drawChar(playerSprite, player.width * player.frameX, player.height * player.frameY, 
            player.width, player.height, player.x, player.y, player.width, player.height);    
    } else if (totalStones === 20) {
        context.drawImage(fireSprite, player.x, player.y, player.width, player.height); 
        cancelAnimationFrame(animationId);
        endModal.style.display = "flex";
        resetButton.style.display = "flex";
        contButton.style.display = "flex";
        startButton.style.display = "none";
    } else if (totalStones > 20) {
        context.drawImage(fireSprite, player.x, player.y, 80, player.height); 
    }


    if(totalLife === 0) {
        console.log("lives", totalLife)
        cancelAnimationFrame(animationId);
        gameLost.style.display = "flex";
        resetButton.style.display = "flex";
        startButton.style.display = "none";        
    }

    frame+=0.5
}

// start game

startButton.addEventListener('click', () => {
    reset();
    animate();
    createLife();
    startModal.style.display = "none";
})

// reset game

playAgain.addEventListener('click', () => {
    reset();
    animate();
    createLife();
    endModal.style.display = "none";
    gameLost.style.display = "none";
    startModal.style.display = "none";
})

resetButton.style.display = "none";
resetButton.addEventListener('click', () => {
    reset();
    animate();
    createLife();
    endModal.style.display = "none";
    gameLost.style.display = "none";
    startModal.style.display = "none";
})


           
contButton.style.display = "none";
contButton.addEventListener('click', () => {
    animateNext();
    createLife();
    totalStones += 1;
    endModal.style.display = "none";
    startModal.style.display = "none";
})
createLife();
totalStones -= 1;

