/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _src_scripts_game__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_scripts_game__WEBPACK_IMPORTED_MODULE_1__);\n\n// import \"../src/scripts/player\"\n\n\n// import '../src/scripts/main_player';\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// game\nconst canvas = document.querySelector(\"canvas\")\nconst context = canvas.getContext(\"2d\");\n\n \nconst playerSprite = new Image();\nplayerSprite.src = \"src/images/eevee2.png\";\nconst background = new Image();\nbackground.src = \"src/images/bg-img.jpg\";\n    \nconst platformSprite1 = new Image();\nplatformSprite1.src = \"src/images/13.png\";\nconst platformSprite2 = new Image();\nplatformSprite2.src = \"src/images/14.png\";\nconst platformSprite3 = new Image();\nplatformSprite3.src = \"src/images/15.png\";\nconst fireStone = new Image();\nfireStone.src = \"src/images/stones1.png\";\n\ncanvas.height = 400;\ncanvas.width = 600;\n\nconst keys = [];\nlet speed = -0.2;\nlet x = 0;\n\nconst player = {\n    x: 230,\n    y: 0,\n    width: 67,\n    height: 67,\n    frameX: 0,\n    frameY: 1,\n    x_velocity: 0,\n    y_velocity: 0,\n    moving: false,\n    jump: true\n}\n\n//background\n\nfunction drawChar(img, spriteX, spriteY, spriteW, spriteH, destX, destY, dW, dH) {\n    context.drawImage(img, spriteX, spriteY, spriteW, spriteH, destX, destY, dW, dH);\n}\n\n\nwindow.addEventListener(\"keydown\", function(event) {\n    keys[event.key] = true;\n    player.moving = true;\n    player.jumping = false;\n\n\n    // console.log(keys);\n});\n\nwindow.addEventListener(\"keyup\", function(event){\n    delete keys[event.key];\n    player.moving = false;\n    player.jumping = false;\n});\n\nfunction movePlayer() {\n    if(keys[\"ArrowLeft\"] && player.x > 0) {\n        player.x_velocity -= 0.5;\n        player.frameY = 0;\n        player.moving = true;\n        player.jumping = true;\n\n    }\n    if(keys[\"ArrowRight\"]) { // && player.x < canvas.width - player.width\n        player.x_velocity += 0.5;\n        player.frameY = 1;\n        player.moving = true;\n    }\n    if(keys[\"ArrowUp\"] && player.jumping == false) {\n        player.y_velocity -= 30;\n        player.jumping = true;\n    }\n\n    // gravity\n    player.y_velocity += 1.5; \n    player.x += player.x_velocity;\n    player.y += player.y_velocity;\n    player.x_velocity *= 0.9;\n    player.y_velocity *= 0.9;\n    \n    if (player.y > 268) { \n        player.jumping = false;\n        player.y = 268;\n        player.y_velocity = 0;\n    }\n}\n\nfunction PlayerFrame() {\n    if(player.frameX < 3 && player.moving) {\n        player.frameX++\n    } else {\n        player.frameX = 0\n    };\n}\n\n// cordinates\n\n    // let cord = [\n    //     {x:100, y:200},\n    //     {x:150, y:200},\n    //     {x:200, y:100},\n    //     {x:250, y:200},\n    //     {x:300, y:200},\n    //     {x:350, y:200}\n    // ]\n\n\n// platforms\n    let platforms = [];\n    let stones = [];\n\n    let totalStones = 0;\n    let num = 5;\n    let frame = 0;\n    let gameSpeed = 2;\n    let wid = canvas.width;\n\n    function createPlatform(){\n        let minX = 50;\n        let minY = 100;\n        let x = minX + Math.floor(Math.random()*(250));\n        let y = minY + Math.floor(Math.random()*(100));\n        // let lastPlat = platforms[platforms.length -1];\n\n        // for(i = 0; platforms.length < num; i++) { // make a loop not to have \n            // let randomCord = cord[Math.floor(Math.random()*cord.length)];\n            // console.log(randomCord)\n            // let platform = {\n            //     x: randomCord.x,\n            //     y: randomCord.y,\n            //     width: 47,\n            //     height: 37\n            // };\n            let platform = {\n                x,\n                y,\n                width: 47,\n                height: 37\n            };\n            let stone = {\n                x: x + 50,\n                y: y - 40,\n                width: 47,\n                height: 37\n            }\n            if(frame% 50 === 0) {\n                platforms.unshift(platform);\n                stones.unshift(stone)                \n            }\n\n            for(let i = 0; i < platforms.length; i++) {\n                updatePlatform();\n            }\n\n            if(platforms.length > 5) {\n                platforms.pop(platforms[0]);\n                stones.pop(stones[0]);\n            }\n                \n            // }\n    }\n    \n    function renderplatform(){\n        for(i = 0; i < platforms.length; i++) {\n                context.drawImage(platformSprite1, platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);\n                context.drawImage(platformSprite3, platforms[i].x+47, platforms[i].y, platforms[i].width, platforms[i].height);\n        }\n    \n    }\n\n    function updatePlatform() {\n        x -= gameSpeed;\n        renderplatform();\n        renderStones();\n    }\n\n    // function renderplatform() {\n    //     platforms.forEach(({x, y})=> {\n    //     context.drawImage(platformSprite1, platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);\n    //     context.drawImage(platformSprite3, platforms[i].x+47, platforms[i].y, platforms[i].width, platforms[i].height);\n\n    //     })\n    // }\n\n    function collisionCheck(platform) {\n            if(player.x > platform.x + platform.width) {return false};\n            if(player.y > platform.y + platform.height) {return false};\n            if(player.x + player.width < platform.x) {return false};\n            if(player.y + player.height < platform.y) {return false};\n            return true;\n    };\n\n    function platformCollision() {\n        for(let i = 0; i < platforms.length; i++) {\n            if(collisionCheck(platforms[i])) {\n                player.y_velocity = 0;\n                player.y = platforms[i].y - 60;\n            }\n        }\n    }\n\n    function renderStones(){\n        for(let i = 0; i < stones.length; i++) {\n            context.drawImage(fireStone, stones[i].x, stones[i].y, stones[i].width, stones[i].height);\n        }\n    }\n\n    function stoneCollisionCheck(stone) {\n\n        if(player.x > stone.x + stone.width) {return false};\n        if(player.x + player.width < stone.x) {return false};\n        if(player.y > stone.y + stone.height) {return false};\n        if(player.y + player.height < stone.y) {return false};\n        return true;\n    };\n\n    function stoneCollision() {\n        \n        for(let i = 0; i < stones.length; i++) {\n            if (stoneCollisionCheck(stones[i])) {\n                stones.splice(i, 1);\n                totalStones += 1;\n            }\n        }\n    }\n\n\nfunction animate() {\n    // for background later\n    context.save();\n    context.clearRect(0, 0, canvas.width, canvas.height);\n\n    // x += speed;\n    // x %= canvas.width;\n\n    // context.drawImage(background, x, 0, canvas.width, canvas.height); //background\n    // context.drawImage(background, x + canvas.width, 0, canvas.width, canvas.height); //background\n\n    context.drawImage(background, 0, 0, canvas.width, canvas.height); //background\n    \n    // draw() // drawing of bgf\n    // loop();\n\n    context.beginPath();\n    drawChar(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);\n    movePlayer();\n    PlayerFrame();\n\n    renderplatform();\n    platformCollision();\n\n    // renderStones();\n    // stoneCollection();\n    stoneCollision();\n    createPlatform();\n\n    requestAnimationFrame(animate);\n    // context.restore();\n\n    frame++;\n}\n\n// createPlatform();\nanimate();\n\n//# sourceURL=webpack:///./src/scripts/game.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/styles/index.scss?");

/***/ })

/******/ });