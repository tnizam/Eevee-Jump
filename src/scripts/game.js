// game
const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d");

 
const playerSprite = new Image();
playerSprite.src = "src/images/eevee2.png";
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


// camera
// context.save();
// context.translate(-player.x + canvas.width/2, 0);
// 

//background

let looping = false;

function draw() {
    let seconds = 4;
    let bgVel = 100; // the background velocity
    let num = Math.ceil(canvas.width / canvas.width) + 1;
    let xPosition = seconds * bgVel % canvas.width;

    context.save();
    context.translate(xPosition, 0);

    for (let i = 0; i < num; i++) {
        context.drawImage(background, i * canvas.width, 0);
    }

    context.restore();
}

function imageLoaded() {
    draw();

    let button = document.getElementById('btnStart');
    button.addEventListener('click', startStop())


}

function startStop()

function loop() {
    if(!looping){
        return;
    }
    requestAnimationFrame(loop);
    draw();
}

window.onload = loop();

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
    if(keys["ArrowLeft"] && player.x > 0) {
        player.x_velocity -= 0.5;
        player.frameY = 0;
        player.moving = true;
        player.jumping = true;

    }
    if(keys["ArrowRight"]) { // && player.x < canvas.width - player.width
        player.x_velocity += 0.5;
        player.frameY = 1;
        player.moving = true;
    }
    if(keys["ArrowUp"] && player.jumping == false) {
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
}

function PlayerFrame() {
    if(player.frameX < 3 && player.moving) {
        player.frameX++
    } else {
        player.frameX = 0
    };
}

// cordinates

    let cord = [
        {x:100, y:200},
        {x:150, y:200},
        {x:200, y:100},
        {x:250, y:200},
        {x:300, y:200},
        {x:350, y:200}
    ]


// platforms
    let platforms = [];
    let stones = [];
    let totalStones = 0;

    let num = 5;
    function createPlatform(){
        for(i = 0; platforms.length < num; i++) { // make a loop not to have 
            let randomCord = cord[Math.floor(Math.random()*cord.length)];
            // console.log(randomCord)
            let platform = {
                x: randomCord.x,
                y: randomCord.y,
                width: 47,
                height: 37
            };
            let stone = {
                x: randomCord.x + 50,
                y: randomCord.y - 40,
                width: 47,
                height: 37
            }
                platforms.push(platform);
                stones.push(stone)
                
            }
            console.log(platforms)
    }
    function renderplatform(){
        for(i = 0; i < platforms.length; i++) {
                context.drawImage(platformSprite1, platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
                context.drawImage(platformSprite3, platforms[i].x+47, platforms[i].y, platforms[i].width, platforms[i].height);
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

// stones
    // function stoneCollection() {
    //     for(let i = 0; i < platforms.length; i++) {
    //         let stone = {
    //             x: platforms[i].x + 50,
    //             y: platforms[i].y -40,
    //             width: platforms[i].width,
    //             height: platforms[i].height
    //         }
    //         stones.push(stone);
    //     }
    //     // console.log("stones", stones)
    // }

    function renderStones(){
        for(let i = 0; i < stones.length; i++) {
            context.drawImage(fireStone, stones[i].x, stones[i].y, stones[i].width, stones[i].height);
        }
    }

    function stoneCollisionCheck(stone) {

        if(player.x > stone.x + stone.width) {return false};
        if(player.x + player.width < stone.x) {return false};
        if(player.y > stone.y + stone.height) {return false};
        if(player.y + player.height < stone.y) {return false};
        return true;
    };

    function stoneCollision() {
        
        for(let i = 0; i < stones.length; i++) {
            if (stoneCollisionCheck(stones[i])) {
                stones.splice(i, 1);
                totalStones += 1;
            }
        }
    }


function animate() {
    // for background later
    context.clearRect(0, 0, canvas.width, canvas.height);
    // context.drawImage(background, 0, 0, canvas.width, canvas.height); //background
    
    // draw() // drawing of bgf
    // loop();

    context.beginPath();
    drawChar(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
    movePlayer();
    PlayerFrame();

    renderplatform();
    platformCollision();

    renderStones();
    // stoneCollection();
    stoneCollision();

    requestAnimationFrame(animate);
}

// stoneCollection();
loop();
createPlatform();
animate();