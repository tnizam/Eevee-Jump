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
/******/ 	__webpack_require__.p = "/dist/";
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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _src_scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/scripts/game */ "./src/scripts/game.js");
/* harmony import */ var _src_scripts_game__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_scripts_game__WEBPACK_IMPORTED_MODULE_1__);
 // import "../src/scripts/player"

 // import '../src/scripts/main_player';

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// game
var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
canvas.height = 400;
canvas.width = 600; // context.fillStyle = "#202020";
// context.fillRect(0,0,600,400);

var keys = [];
var player = {
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
};
var playerSprite = new Image();
playerSprite.src = "src/images/eevee2.png";
var background = new Image();
background.src = "src/images/bg-img.jpg";
var platformSprite1 = new Image();
platformSprite1.src = "src/images/13.png";
var platformSprite2 = new Image();
platformSprite2.src = "src/images/14.png";
var platformSprite3 = new Image();
platformSprite3.src = "src/images/15.png";
var fireStone = new Image();
fireStone.src = "src/images/stones1.png";

function drawSprite(img, spriteX, spriteY, spriteW, spriteH, dX, dY, dW, dH) {
  context.drawImage(img, spriteX, spriteY, spriteW, spriteH, dX, dY, dW, dH);
}

window.addEventListener("keydown", function (event) {
  keys[event.key] = true;
  player.moving = true;
  player.jumping = false; // console.log(keys);
});
window.addEventListener("keyup", function (event) {
  delete keys[event.key];
  player.moving = false;
  player.jumping = false;
});

function movePlayer() {
  if (keys["ArrowLeft"] && player.x > 0) {
    // player.x -= player.x_velocity;
    player.x_velocity -= 0.5; // player.frameY = 1;

    player.frameY = 0;
    player.moving = true;
    player.jumping = true;
  }

  if (keys["ArrowRight"]) {
    // && player.x < canvas.width - player.width
    // player.x += player.x_velocity;
    player.x_velocity += 0.5;
    player.frameY = 1; // player.frameX = 1;

    player.moving = true;
  }

  if (keys["ArrowUp"] && player.jumping == false) {
    player.y_velocity -= 30; // player.frameY = 2;

    player.jumping = true;
  }

  player.y_velocity += 1.5; // gravity

  player.x += player.x_velocity;
  player.y += player.y_velocity;
  player.x_velocity *= 0.9;
  player.y_velocity *= 0.9;

  if (player.y > 400 - 65 - 67) {
    // 32 is top cord of rect
    player.jumping = false;
    player.y = 400 - 65 - 67;
    player.y_velocity = 0;
  }
}

function PlayerFrame() {
  if (player.frameX < 3 && player.moving) {
    player.frameX++;
  } else {
    player.frameX = 0;
  }

  ;
} // cordinates


var cord = [{
  x: 100,
  y: 200
}, {
  x: 150,
  y: 200
}, {
  x: 200,
  y: 100
}, {
  x: 250,
  y: 200
}, {
  x: 300,
  y: 200
}, {
  x: 350,
  y: 200
}]; // platforms

var platforms = [];
var num = 5;

function createplat() {
  for (i = 0; platforms.length < num; i++) {
    var randomCord = cord[Math.floor(Math.random() * cord.length)];
    console.log(randomCord);
    var platform = {
      x: randomCord.x,
      y: randomCord.y,
      width: 47,
      height: 37
    };
    platforms.push(platform);
  }
}

function renderplatform() {
  for (i = 0; i < platforms.length; i++) {
    context.drawImage(platformSprite1, platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
    context.drawImage(platformSprite3, platforms[i].x + 47, platforms[i].y, platforms[i].width, platforms[i].height);
  }
}

function collisionCheck(platform) {
  if (player.x > platform.x + platform.width) {
    return false;
  }

  ;

  if (player.x + player.width < platform.x) {
    return false;
  }

  ;

  if (player.y > platform.y + platform.height) {
    return false;
  }

  ;

  if (player.y + player.height < platform.y) {
    return false;
  }

  ;
  return true;
}

;

function platformCollision() {
  for (var _i = 0; _i < platforms.length; _i++) {
    if (collisionCheck(platforms[_i])) {
      player.y_velocity = 0;
      player.y = platforms[_i].y - 60; // player.x = platforms[0].x;
    }
  }
} // stones


var stones = [];

function stoneCollection() {
  for (var _i2 = 0; _i2 < platforms.length; _i2++) {
    var stone = {
      x: platforms[_i2].x + 50,
      y: platforms[_i2].y - 40,
      width: platforms[_i2].width,
      height: platforms[_i2].height
    };
    stones.push(stone);
  }
}

function renderStones() {
  for (var _i3 = 0; _i3 < stones.length; _i3++) {
    context.drawImage(fireStone, stones[_i3].x, stones[_i3].y, stones[_i3].width, stones[_i3].height);
  }
}

function stoneCollisionCheck(stone) {
  if (player.x > stone.x + stone.width) {
    return false;
  }

  ;

  if (player.x + player.width < stone.x) {
    return false;
  }

  ;

  if (player.y > stone.y + stone.height) {
    return false;
  }

  ;

  if (player.y + player.height < stone.y) {
    return false;
  }

  ;
  return true;
}

;

function stoneCollision() {
  for (var _i4 = 0; _i4 < stones.length; _i4++) {
    if (stoneCollisionCheck(stones[_i4])) {
      stones.splice(_i4, 1);
    }
  }
}

function removeStone() {}

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

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJrZXlzIiwicGxheWVyIiwieCIsInkiLCJmcmFtZVgiLCJmcmFtZVkiLCJ4X3ZlbG9jaXR5IiwieV92ZWxvY2l0eSIsIm1vdmluZyIsImp1bXAiLCJwbGF5ZXJTcHJpdGUiLCJJbWFnZSIsInNyYyIsImJhY2tncm91bmQiLCJwbGF0Zm9ybVNwcml0ZTEiLCJwbGF0Zm9ybVNwcml0ZTIiLCJwbGF0Zm9ybVNwcml0ZTMiLCJmaXJlU3RvbmUiLCJkcmF3U3ByaXRlIiwiaW1nIiwic3ByaXRlWCIsInNwcml0ZVkiLCJzcHJpdGVXIiwic3ByaXRlSCIsImRYIiwiZFkiLCJkVyIsImRIIiwiZHJhd0ltYWdlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5IiwianVtcGluZyIsIm1vdmVQbGF5ZXIiLCJQbGF5ZXJGcmFtZSIsImNvcmQiLCJwbGF0Zm9ybXMiLCJudW0iLCJjcmVhdGVwbGF0IiwiaSIsImxlbmd0aCIsInJhbmRvbUNvcmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb25zb2xlIiwibG9nIiwicGxhdGZvcm0iLCJwdXNoIiwicmVuZGVycGxhdGZvcm0iLCJjb2xsaXNpb25DaGVjayIsInBsYXRmb3JtQ29sbGlzaW9uIiwic3RvbmVzIiwic3RvbmVDb2xsZWN0aW9uIiwic3RvbmUiLCJyZW5kZXJTdG9uZXMiLCJzdG9uZUNvbGxpc2lvbkNoZWNrIiwic3RvbmVDb2xsaXNpb24iLCJzcGxpY2UiLCJyZW1vdmVTdG9uZSIsImFuaW1hdGUi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Q0FBQ0ssTUFBN0M7QUFDQUYsU0FBTyxDQUFDZ0MsU0FBUixDQUFrQmYsVUFBbEIsRUFBOEIsQ0FBOUIsRUFBaUMsQ0FBakMsRUFBb0NwQixNQUFNLENBQUNNLEtBQTNDLEVBQWtETixNQUFNLENBQUNLLE1BQXpEO0FBQ0FGLFNBQU8sQ0FBQ21FLFNBQVI7QUFDQTdDLFlBQVUsQ0FBQ1IsWUFBRCxFQUFlVCxNQUFNLENBQUNGLEtBQVAsR0FBZUUsTUFBTSxDQUFDRyxNQUFyQyxFQUE2Q0gsTUFBTSxDQUFDSCxNQUFQLEdBQWdCRyxNQUFNLENBQUNJLE1BQXBFLEVBQTRFSixNQUFNLENBQUNGLEtBQW5GLEVBQTBGRSxNQUFNLENBQUNILE1BQWpHLEVBQXlHRyxNQUFNLENBQUNDLENBQWhILEVBQW1IRCxNQUFNLENBQUNFLENBQTFILEVBQTZIRixNQUFNLENBQUNGLEtBQXBJLEVBQTJJRSxNQUFNLENBQUNILE1BQWxKLENBQVY7QUFDQW9DLFlBQVU7QUFDVkMsYUFBVztBQUVYZSxnQkFBYztBQUNkRSxtQkFBaUI7QUFFakJJLGNBQVk7QUFDWkYsaUJBQWU7QUFDZkksZ0JBQWM7QUFFZE0sdUJBQXFCLENBQUNILE9BQUQsQ0FBckI7QUFDSDs7QUFFRHRCLFVBQVU7QUFDVnNCLE9BQU8sRzs7Ozs7Ozs7Ozs7O0FDek5QO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuLy8gaW1wb3J0IFwiLi4vc3JjL3NjcmlwdHMvcGxheWVyXCJcblxuaW1wb3J0ICcuLi9zcmMvc2NyaXB0cy9nYW1lJztcbi8vIGltcG9ydCAnLi4vc3JjL3NjcmlwdHMvbWFpbl9wbGF5ZXInO1xuXG4iLCIvLyBnYW1lXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzXCIpXG5jb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiBcblxuY2FudmFzLmhlaWdodCA9IDQwMDtcbmNhbnZhcy53aWR0aCA9IDYwMDtcbi8vIGNvbnRleHQuZmlsbFN0eWxlID0gXCIjMjAyMDIwXCI7XG4vLyBjb250ZXh0LmZpbGxSZWN0KDAsMCw2MDAsNDAwKTtcbmNvbnN0IGtleXMgPSBbXTtcblxuY29uc3QgcGxheWVyID0ge1xuICAgIHg6IDIzMCxcbiAgICB5OiAwLFxuICAgIHdpZHRoOiA2NyxcbiAgICBoZWlnaHQ6IDY3LFxuICAgIGZyYW1lWDogMCxcbiAgICBmcmFtZVk6IDEsXG4gICAgeF92ZWxvY2l0eTogMCxcbiAgICB5X3ZlbG9jaXR5OiAwLFxuICAgIG1vdmluZzogZmFsc2UsXG4gICAganVtcDogdHJ1ZVxufVxuXG5jb25zdCBwbGF5ZXJTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbnBsYXllclNwcml0ZS5zcmMgPSBcInNyYy9pbWFnZXMvZWV2ZWUyLnBuZ1wiO1xuY29uc3QgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuYmFja2dyb3VuZC5zcmMgPSBcInNyYy9pbWFnZXMvYmctaW1nLmpwZ1wiO1xuXG5jb25zdCBwbGF0Zm9ybVNwcml0ZTEgPSBuZXcgSW1hZ2UoKTtcbnBsYXRmb3JtU3ByaXRlMS5zcmMgPSBcInNyYy9pbWFnZXMvMTMucG5nXCI7XG5jb25zdCBwbGF0Zm9ybVNwcml0ZTIgPSBuZXcgSW1hZ2UoKTtcbnBsYXRmb3JtU3ByaXRlMi5zcmMgPSBcInNyYy9pbWFnZXMvMTQucG5nXCI7XG5jb25zdCBwbGF0Zm9ybVNwcml0ZTMgPSBuZXcgSW1hZ2UoKTtcbnBsYXRmb3JtU3ByaXRlMy5zcmMgPSBcInNyYy9pbWFnZXMvMTUucG5nXCI7XG5jb25zdCBmaXJlU3RvbmUgPSBuZXcgSW1hZ2UoKTtcbmZpcmVTdG9uZS5zcmMgPSBcInNyYy9pbWFnZXMvc3RvbmVzMS5wbmdcIjtcblxuZnVuY3Rpb24gZHJhd1Nwcml0ZShpbWcsIHNwcml0ZVgsIHNwcml0ZVksIHNwcml0ZVcsIHNwcml0ZUgsIGRYLCBkWSwgZFcsIGRIKSB7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCBzcHJpdGVYLCBzcHJpdGVZLCBzcHJpdGVXLCBzcHJpdGVILCBkWCwgZFksIGRXLCBkSCk7XG59XG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAga2V5c1tldmVudC5rZXldID0gdHJ1ZTtcbiAgICBwbGF5ZXIubW92aW5nID0gdHJ1ZTtcbiAgICBwbGF5ZXIuanVtcGluZyA9IGZhbHNlO1xuXG5cbiAgICAvLyBjb25zb2xlLmxvZyhrZXlzKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICBkZWxldGUga2V5c1tldmVudC5rZXldO1xuICAgIHBsYXllci5tb3ZpbmcgPSBmYWxzZTtcbiAgICBwbGF5ZXIuanVtcGluZyA9IGZhbHNlO1xufSk7XG5cbmZ1bmN0aW9uIG1vdmVQbGF5ZXIoKSB7XG4gICAgaWYoa2V5c1tcIkFycm93TGVmdFwiXSAmJiBwbGF5ZXIueCA+IDApIHtcbiAgICAgICAgLy8gcGxheWVyLnggLT0gcGxheWVyLnhfdmVsb2NpdHk7XG4gICAgICAgIHBsYXllci54X3ZlbG9jaXR5IC09IDAuNTtcbiAgICAgICAgLy8gcGxheWVyLmZyYW1lWSA9IDE7XG4gICAgICAgIHBsYXllci5mcmFtZVkgPSAwO1xuICAgICAgICBwbGF5ZXIubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgcGxheWVyLmp1bXBpbmcgPSB0cnVlO1xuXG4gICAgfVxuICAgIGlmKGtleXNbXCJBcnJvd1JpZ2h0XCJdKSB7IC8vICYmIHBsYXllci54IDwgY2FudmFzLndpZHRoIC0gcGxheWVyLndpZHRoXG4gICAgICAgIC8vIHBsYXllci54ICs9IHBsYXllci54X3ZlbG9jaXR5O1xuICAgICAgICBwbGF5ZXIueF92ZWxvY2l0eSArPSAwLjU7XG4gICAgICAgIHBsYXllci5mcmFtZVkgPSAxO1xuICAgICAgICAvLyBwbGF5ZXIuZnJhbWVYID0gMTtcbiAgICAgICAgcGxheWVyLm1vdmluZyA9IHRydWU7XG4gICAgfVxuICAgIGlmKGtleXNbXCJBcnJvd1VwXCJdICYmIHBsYXllci5qdW1waW5nID09IGZhbHNlKSB7XG4gICAgICAgIHBsYXllci55X3ZlbG9jaXR5IC09IDMwO1xuICAgICAgICAvLyBwbGF5ZXIuZnJhbWVZID0gMjtcbiAgICAgICAgcGxheWVyLmp1bXBpbmcgPSB0cnVlO1xuICAgIH1cbiAgICBwbGF5ZXIueV92ZWxvY2l0eSArPSAxLjU7IC8vIGdyYXZpdHlcbiAgICBwbGF5ZXIueCArPSBwbGF5ZXIueF92ZWxvY2l0eTtcbiAgICBwbGF5ZXIueSArPSBwbGF5ZXIueV92ZWxvY2l0eTtcbiAgICBwbGF5ZXIueF92ZWxvY2l0eSAqPSAwLjk7XG4gICAgcGxheWVyLnlfdmVsb2NpdHkgKj0gMC45O1xuICAgIFxuICAgIGlmIChwbGF5ZXIueSA+IDQwMCAtIDY1IC0gNjcpIHsgLy8gMzIgaXMgdG9wIGNvcmQgb2YgcmVjdFxuICAgICAgICBwbGF5ZXIuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICBwbGF5ZXIueSA9IDQwMCAtIDY1IC0gNjc7XG4gICAgICAgIHBsYXllci55X3ZlbG9jaXR5ID0gMDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIFBsYXllckZyYW1lKCkge1xuICAgIGlmKHBsYXllci5mcmFtZVggPCAzICYmIHBsYXllci5tb3ZpbmcpIHtcbiAgICAgICAgcGxheWVyLmZyYW1lWCsrXG4gICAgfSBlbHNlIHtwbGF5ZXIuZnJhbWVYID0gMH07XG59XG5cbi8vIGNvcmRpbmF0ZXNcblxuICAgIGxldCBjb3JkID0gW1xuICAgICAgICB7eDoxMDAsIHk6MjAwfSxcbiAgICAgICAge3g6MTUwLCB5OjIwMH0sXG4gICAgICAgIHt4OjIwMCwgeToxMDB9LFxuICAgICAgICB7eDoyNTAsIHk6MjAwfSxcbiAgICAgICAge3g6MzAwLCB5OjIwMH0sXG4gICAgICAgIHt4OjM1MCwgeToyMDB9XG4gICAgXVxuXG5cbi8vIHBsYXRmb3Jtc1xuICAgIGxldCBwbGF0Zm9ybXMgPSBbXTtcbiAgICBsZXQgbnVtID0gNTtcbiAgICBmdW5jdGlvbiBjcmVhdGVwbGF0KCl7XG4gICAgICAgIGZvcihpID0gMDsgcGxhdGZvcm1zLmxlbmd0aCA8IG51bTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmFuZG9tQ29yZCA9IGNvcmRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmNvcmQubGVuZ3RoKV07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyYW5kb21Db3JkKVxuICAgICAgICAgICAgbGV0IHBsYXRmb3JtID0ge1xuICAgICAgICAgICAgICAgIHg6IHJhbmRvbUNvcmQueCxcbiAgICAgICAgICAgICAgICB5OiByYW5kb21Db3JkLnksXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ3LFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwbGF0Zm9ybXMucHVzaChwbGF0Zm9ybSk7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiByZW5kZXJwbGF0Zm9ybSgpe1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBwbGF0Zm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShwbGF0Zm9ybVNwcml0ZTEsIHBsYXRmb3Jtc1tpXS54LCBwbGF0Zm9ybXNbaV0ueSwgcGxhdGZvcm1zW2ldLndpZHRoLCBwbGF0Zm9ybXNbaV0uaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShwbGF0Zm9ybVNwcml0ZTMsIHBsYXRmb3Jtc1tpXS54KzQ3LCBwbGF0Zm9ybXNbaV0ueSwgcGxhdGZvcm1zW2ldLndpZHRoLCBwbGF0Zm9ybXNbaV0uaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbGxpc2lvbkNoZWNrKHBsYXRmb3JtKSB7XG4gICAgICAgICAgICBpZihwbGF5ZXIueCA+IHBsYXRmb3JtLnggKyBwbGF0Zm9ybS53aWR0aCkge3JldHVybiBmYWxzZX07XG4gICAgICAgICAgICBpZihwbGF5ZXIueCArIHBsYXllci53aWR0aCA8IHBsYXRmb3JtLngpIHtyZXR1cm4gZmFsc2V9O1xuICAgICAgICAgICAgaWYocGxheWVyLnkgPiBwbGF0Zm9ybS55ICsgcGxhdGZvcm0uaGVpZ2h0KSB7cmV0dXJuIGZhbHNlfTtcbiAgICAgICAgICAgIGlmKHBsYXllci55ICsgcGxheWVyLmhlaWdodCA8IHBsYXRmb3JtLnkpIHtyZXR1cm4gZmFsc2V9O1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHBsYXRmb3JtQ29sbGlzaW9uKCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcGxhdGZvcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihjb2xsaXNpb25DaGVjayhwbGF0Zm9ybXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLnlfdmVsb2NpdHkgPSAwO1xuICAgICAgICAgICAgICAgIHBsYXllci55ID0gcGxhdGZvcm1zW2ldLnkgLSA2MDtcbiAgICAgICAgICAgICAgICAvLyBwbGF5ZXIueCA9IHBsYXRmb3Jtc1swXS54O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4vLyBzdG9uZXNcbiAgICBsZXQgc3RvbmVzID0gW107XG4gICAgZnVuY3Rpb24gc3RvbmVDb2xsZWN0aW9uKCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcGxhdGZvcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3RvbmUgPSB7XG4gICAgICAgICAgICAgICAgeDogcGxhdGZvcm1zW2ldLnggKyA1MCxcbiAgICAgICAgICAgICAgICB5OiBwbGF0Zm9ybXNbaV0ueSAtNDAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHBsYXRmb3Jtc1tpXS53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHBsYXRmb3Jtc1tpXS5oZWlnaHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0b25lcy5wdXNoKHN0b25lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclN0b25lcygpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHN0b25lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoZmlyZVN0b25lLCBzdG9uZXNbaV0ueCwgc3RvbmVzW2ldLnksIHN0b25lc1tpXS53aWR0aCwgc3RvbmVzW2ldLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9uZUNvbGxpc2lvbkNoZWNrKHN0b25lKSB7XG5cbiAgICAgICAgaWYocGxheWVyLnggPiBzdG9uZS54ICsgc3RvbmUud2lkdGgpIHtyZXR1cm4gZmFsc2V9O1xuICAgICAgICBpZihwbGF5ZXIueCArIHBsYXllci53aWR0aCA8IHN0b25lLngpIHtyZXR1cm4gZmFsc2V9O1xuICAgICAgICBpZihwbGF5ZXIueSA+IHN0b25lLnkgKyBzdG9uZS5oZWlnaHQpIHtyZXR1cm4gZmFsc2V9O1xuICAgICAgICBpZihwbGF5ZXIueSArIHBsYXllci5oZWlnaHQgPCBzdG9uZS55KSB7cmV0dXJuIGZhbHNlfTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHN0b25lQ29sbGlzaW9uKCkge1xuICAgICAgICBcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHN0b25lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHN0b25lQ29sbGlzaW9uQ2hlY2soc3RvbmVzW2ldKSkge1xuICAgICAgICAgICAgICAgIHN0b25lcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVTdG9uZSgpIHtcblxuICAgIH1cblxuXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIC8vIGZvciBiYWNrZ3JvdW5kIGxhdGVyXG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBjb250ZXh0LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgZHJhd1Nwcml0ZShwbGF5ZXJTcHJpdGUsIHBsYXllci53aWR0aCAqIHBsYXllci5mcmFtZVgsIHBsYXllci5oZWlnaHQgKiBwbGF5ZXIuZnJhbWVZLCBwbGF5ZXIud2lkdGgsIHBsYXllci5oZWlnaHQsIHBsYXllci54LCBwbGF5ZXIueSwgcGxheWVyLndpZHRoLCBwbGF5ZXIuaGVpZ2h0KTtcbiAgICBtb3ZlUGxheWVyKCk7XG4gICAgUGxheWVyRnJhbWUoKTtcblxuICAgIHJlbmRlcnBsYXRmb3JtKCk7XG4gICAgcGxhdGZvcm1Db2xsaXNpb24oKTtcblxuICAgIHJlbmRlclN0b25lcygpO1xuICAgIHN0b25lQ29sbGVjdGlvbigpO1xuICAgIHN0b25lQ29sbGlzaW9uKCk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG59XG5cbmNyZWF0ZXBsYXQoKTtcbmFuaW1hdGUoKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9