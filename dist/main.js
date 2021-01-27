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

eval("// game\nconst canvas = document.querySelector(\"canvas\")\nconst context = canvas.getContext(\"2d\");\nconst startButton = document.getElementById(\"btnStart\");\nconst resetButton = document.getElementById(\"btnReset\");\nconst startModal = document.getElementById(\"startModal\");\nconst endModal = document.getElementById(\"endModal\");\nconst scoreCount = document.getElementById(\"score-count\") \n\nconst playerSprite = new Image();\nplayerSprite.src = \"src/images/eevee2.png\";\nconst fireSprite = new Image();\nfireSprite.src = \"src/images/flareon.png\"; \nconst background = new Image();\nbackground.src = \"src/images/bg-img.jpg\";\n    \nconst platformSprite1 = new Image();\nplatformSprite1.src = \"src/images/13.png\";\nconst platformSprite2 = new Image();\nplatformSprite2.src = \"src/images/14.png\";\nconst platformSprite3 = new Image();\nplatformSprite3.src = \"src/images/15.png\";\nconst fireStone = new Image();\nfireStone.src = \"src/images/stones1.png\";\n\ncanvas.height = 400;\ncanvas.width = 600;\n\nlet keys = [];\nlet speed = -0.2;\nlet x = 0;\nlet platforms = [];\nlet stones = [];\n\nlet totalStones = 0;\nlet frame = 0;\nlet gameSpeed = 0.3;\nlet wid = canvas.width;\nlet minX = 5;\nlet minY = 100;\nlet minGap = 50;\nlet maxGap = 90;\n\nlet player = {\n    x: 230,\n    y: 0,\n    width: 67,\n    height: 67,\n    frameX: 0,\n    frameY: 1,\n    x_velocity: 0,\n    y_velocity: 0,\n    moving: false,\n    jump: true\n}\n\nfunction reset() {\n    platforms = [];\n    stones = [];\n    totalStones = 0;\n    scoreCount.innerHTML = totalStones;\n\n    player = {\n        x: 230,\n        y: 0,\n        width: 67,\n        height: 67,\n        frameX: 0,\n        frameY: 1,\n        x_velocity: 0,\n        y_velocity: 0,\n        moving: false,\n        jump: true\n    }\n}\n\n\n//background\n\nfunction drawChar(img, spriteX, spriteY, spriteW, spriteH, destX, destY, dW, dH) {\n    context.drawImage(img, spriteX, spriteY, spriteW, spriteH, destX, destY, dW, dH);\n}\n\n\nwindow.addEventListener(\"keydown\", function(event) {\n    keys[event.key] = true;\n    player.moving = true;\n    player.jumping = false;\n\n\n    // console.log(keys);\n});\n\nwindow.addEventListener(\"keyup\", function(event){\n    delete keys[event.key];\n    player.moving = false;\n    player.jumping = false;\n});\n\nfunction movePlayer() {\n    if((keys[\"ArrowLeft\"] || keys[\"a\"]) && player.x > 0) {\n        player.x_velocity -= 0.5;\n        player.frameY = 0;\n        player.moving = true;\n        player.jumping = true;\n\n    }\n    if(keys[\"ArrowRight\"] || keys[\"d\"]) { // && player.x < canvas.width - player.width\n        player.x_velocity += 0.5;\n        player.frameY = 1;\n        player.moving = true;\n    }\n    if((keys[\"ArrowUp\"] || keys['w']) && player.jumping == false) {\n        player.y_velocity -= 30;\n        player.jumping = true;\n    }\n\n    // gravity\n    player.y_velocity += 1.5; \n    player.x += player.x_velocity;\n    player.y += player.y_velocity;\n    player.x_velocity *= 0.9;\n    player.y_velocity *= 0.9;\n    \n    if (player.y > 268) { \n        player.jumping = false;\n        player.y = 268;\n        player.y_velocity = 0;\n    }\n\n    if (player.y < 0) { \n        player.jumping = false;\n        player.y = 0;\n        player.y_velocity = 0;\n    }\n}\n\nfunction PlayerFrame() {\n    if(player.frameX < 3 && player.moving) {\n        player.frameX++\n    } else {\n        player.frameX = 0\n    };\n}\n\n// platforms\n\n    function createPlatform(){\n        // let x = minX + Math.floor(Math.random()*(500));\n        let x = 600;\n        let y = minY + Math.floor(Math.random()*(150));\n        let gap = minGap + Math.floor(Math.random()*(maxGap-minGap + 1));\n\n            let platform = {\n                x,\n                y,\n                width: 47,\n                height: 37\n            };\n            let stone = {\n                x: x + 50,\n                y: y - 40,\n                width: 47,\n                height: 37\n            }\n            if(frame % gap === 0) {\n                platforms.push(platform);\n                stones.push(stone);  \n                frame = 0;    \n            }\n\n            for(let i = 0; i < platforms.length; i++) {\n                // updatePlatform();\n                setInterval(updatePlatform(), 5000)\n            }\n                \n    \n    }\n\n    function renderplatform(){\n        for(i = 0; i < platforms.length; i++) {\n            context.drawImage(platformSprite1, platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);\n            context.drawImage(platformSprite3, platforms[i].x+47, platforms[i].y, platforms[i].width, platforms[i].height);        \n        }\n    \n    }\n    function renderStones(){\n        for(let i = 0; i < stones.length; i++) {\n            context.drawImage(fireStone, stones[i].x, stones[i].y, stones[i].width, stones[i].height);\n        }\n    }\n\n\n    function updatePlatform() {\n\n        for(let i = 0; i < platforms.length; i++) {\n            platforms[i].x -= gameSpeed;\n            // stones[i].x -= 1;\n            renderplatform();\n            // renderStones();\n        }\n        for(let i = 0; i < stones.length; i++) {\n            stones[i].x -=gameSpeed;\n            renderStones();\n        }\n    }\n\n    function collisionCheck(platform) {\n            if(player.x > platform.x + platform.width) {return false};\n            if(player.y > platform.y + platform.height) {return false};\n            if(player.x + player.width < platform.x) {return false};\n            if(player.y + player.height < platform.y) {return false};\n            return true;\n    };\n\n    function platformCollision() {\n        for(let i = 0; i < platforms.length; i++) {\n            if(collisionCheck(platforms[i])) {\n                player.y_velocity = 0;\n                player.y = platforms[i].y - 60;\n            }\n        }\n    }\n\n\n    function stoneCollisionCheck(stone) {\n\n        if(player.x > stone.x + stone.width) {return false};\n        if(player.x + player.width < stone.x) {return false};\n        if(player.y > stone.y + stone.height) {return false};\n        if(player.y + player.height < stone.y) {return false};\n        return true;\n    };\n\n    // Check stone collision here \n    function stoneCollision() {\n        \n        for(let i = 0; i < stones.length; i++) {\n            if (stoneCollisionCheck(stones[i])) {\n                stones.splice(i, 1);\n                totalStones += 1;\n                scoreCount.innerHTML = totalStones;\n            }\n        }\n    }\n\nfunction animate() {\n    // for background later\n    context.save();\n    context.clearRect(0, 0, canvas.width, canvas.height);\n\n    context.drawImage(background, 0, 0, canvas.width, canvas.height); //background\n    \n    context.beginPath();\n    \n    \n    movePlayer();\n    PlayerFrame();\n    \n    platformCollision();\n    \n    stoneCollision();\n    createPlatform();\n    \n    let animationId = requestAnimationFrame(animate);\n    // context.restore();\n    if(totalStones < 20) {\n        drawChar(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);    \n    } else {\n        context.drawImage(fireSprite, player.x, player.y, player.width, player.height); \n        cancelAnimationFrame(animationId);\n        endModal.style.display = \"flex\";\n        resetButton.style.display = \"flex\";\n        startButton.style.display = \"none\";\n    }\n\n    frame+=1\n}\n\n// start game\n\nstartButton.addEventListener('click', () => {\n    reset();\n    animate();\n    startModal.style.display = \"none\";\n})\n\n// reset game\n\nresetButton.style.display = \"none\";\nresetButton.addEventListener('click', () => {\n    reset();\n    animate();\n    endModal.style.display = \"none\";\n    startModal.style.display = \"none\";\n})\n\n\n\n//# sourceURL=webpack:///./src/scripts/game.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .fullpage {\\n|     background-color: bisque;\\n| }\");\n\n//# sourceURL=webpack:///./src/styles/index.scss?");

/***/ })

/******/ });