// game
const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d");
 

canvas.height = 400;
canvas.width = 600;
// context.fillStyle = "#202020";
// context.fillRect(0,0,600,400);
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

const platformSprite1 = new Image();
platformSprite1.src = "src/images/13.png";
const platformSprite2 = new Image();
platformSprite2.src = "src/images/14.png";
const platformSprite3 = new Image();
platformSprite3.src = "src/images/15.png";
const fireStone = new Image();
fireStone.src = "src/images/stones1.png";

function drawSprite(img, spriteX, spriteY, spriteW, spriteH, dX, dY, dW, dH) {
    context.drawImage(img, spriteX, spriteY, spriteW, spriteH, dX, dY, dW, dH);
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
    let num = 5;
    function createplat(){
        for(i = 0; platforms.length < num; i++) {
            let randomCord = cord[Math.floor(Math.random()*cord.length)];
            console.log(randomCord)
            let platform = {
                x: randomCord.x,
                y: randomCord.y,
                width: 47,
                height: 37
            }
                platforms.push(platform);

        }
    }
    function renderplatform(){
        for(i = 0; i < platforms.length; i++) {
                context.drawImage(platformSprite1, platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
                context.drawImage(platformSprite3, platforms[i].x+47, platforms[i].y, platforms[i].width, platforms[i].height);
        }
    
    }

    function collisionCheck(platform) {
            if(player.x > platform.x + platform.width) {return false};
            if(player.x + player.width < platform.x) {return false};
            if(player.y > platform.y + platform.height) {return false};
            if(player.y + player.height < platform.y) {return false};
            return true;
    };

    function platformCollision() {
        for(let i = 0; i < platforms.length; i++) {
            if(collisionCheck(platforms[i])) {
                player.y_velocity = 0;
                player.y = platforms[i].y - 60;
                // player.x = platforms[0].x;
            }
        }
    }

// stones
    let stones = [];
    function stoneCollection() {
        for(let i = 0; i < platforms.length; i++) {
            let stone = {
                x: platforms[i].x + 50,
                y: platforms[i].y -40,
                width: platforms[i].width,
                height: platforms[i].height
            }
            stones.push(stone);
        }
    }

    function renderStones() {
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
            }
        }
    }

    function removeStone() {

    }


function animate() {
    // for background later
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    context.beginPath();
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
    movePlayer();
    PlayerFrame();

    renderplatform();
    platformCollision();

    renderStones();
    stoneCollection();
    stoneCollision();

    requestAnimationFrame(animate);
}

createplat();
animate();