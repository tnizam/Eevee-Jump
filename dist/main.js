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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJrZXlzIiwicGxheWVyIiwieCIsInkiLCJmcmFtZVgiLCJmcmFtZVkiLCJ4X3ZlbG9jaXR5IiwieV92ZWxvY2l0eSIsIm1vdmluZyIsImp1bXAiLCJwbGF5ZXJTcHJpdGUiLCJJbWFnZSIsInNyYyIsImJhY2tncm91bmQiLCJwbGF0Zm9ybVNwcml0ZTEiLCJwbGF0Zm9ybVNwcml0ZTIiLCJwbGF0Zm9ybVNwcml0ZTMiLCJmaXJlU3RvbmUiLCJkcmF3U3ByaXRlIiwiaW1nIiwic3ByaXRlWCIsInNwcml0ZVkiLCJzcHJpdGVXIiwic3ByaXRlSCIsImRYIiwiZFkiLCJkVyIsImRIIiwiZHJhd0ltYWdlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5IiwianVtcGluZyIsIm1vdmVQbGF5ZXIiLCJQbGF5ZXJGcmFtZSIsImNvcmQiLCJwbGF0Zm9ybXMiLCJudW0iLCJjcmVhdGVwbGF0IiwiaSIsImxlbmd0aCIsInJhbmRvbUNvcmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb25zb2xlIiwibG9nIiwicGxhdGZvcm0iLCJwdXNoIiwicmVuZGVycGxhdGZvcm0iLCJjb2xsaXNpb25DaGVjayIsInBsYXRmb3JtQ29sbGlzaW9uIiwic3RvbmVzIiwic3RvbmVDb2xsZWN0aW9uIiwic3RvbmUiLCJyZW5kZXJTdG9uZXMiLCJzdG9uZUNvbGxpc2lvbkNoZWNrIiwic3RvbmVDb2xsaXNpb24iLCJzcGxpY2UiLCJyZW1vdmVTdG9uZSIsImFuaW1hdGUi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LE1BQTdDO0FBQ0FGLFNBQU8sQ0FBQ2dDLFNBQVIsQ0FBa0JmLFVBQWxCLEVBQThCLENBQTlCLEVBQWlDLENBQWpDLEVBQW9DcEIsTUFBTSxDQUFDTSxLQUEzQyxFQUFrRE4sTUFBTSxDQUFDSyxNQUF6RDtBQUNBRixTQUFPLENBQUNtRSxTQUFSO0FBQ0E3QyxZQUFVLENBQUNSLFlBQUQsRUFBZVQsTUFBTSxDQUFDRixLQUFQLEdBQWVFLE1BQU0sQ0FBQ0csTUFBckMsRUFBNkNILE1BQU0sQ0FBQ0gsTUFBUCxHQUFnQkcsTUFBTSxDQUFDSSxNQUFwRSxFQUE0RUosTUFBTSxDQUFDRixLQUFuRixFQUEwRkUsTUFBTSxDQUFDSCxNQUFqRyxFQUF5R0csTUFBTSxDQUFDQyxDQUFoSCxFQUFtSEQsTUFBTSxDQUFDRSxDQUExSCxFQUE2SEYsTUFBTSxDQUFDRixLQUFwSSxFQUEySUUsTUFBTSxDQUFDSCxNQUFsSixDQUFWO0FBQ0FvQyxZQUFVO0FBQ1ZDLGFBQVc7QUFFWGUsZ0JBQWM7QUFDZEUsbUJBQWlCO0FBRWpCSSxjQUFZO0FBQ1pGLGlCQUFlO0FBQ2ZJLGdCQUFjO0FBRWRNLHVCQUFxQixDQUFDSCxPQUFELENBQXJCO0FBQ0g7O0FBRUR0QixVQUFVO0FBQ1ZzQixPQUFPLEc7Ozs7Ozs7Ozs7OztBQ3hOUDtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbi8vIGltcG9ydCBcIi4uL3NyYy9zY3JpcHRzL3BsYXllclwiXG5cbmltcG9ydCAnLi4vc3JjL3NjcmlwdHMvZ2FtZSc7XG4vLyBpbXBvcnQgJy4uL3NyYy9zY3JpcHRzL21haW5fcGxheWVyJztcblxuIiwiY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNhbnZhc1wiKVxuY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gXG5cbmNhbnZhcy5oZWlnaHQgPSA0MDA7XG5jYW52YXMud2lkdGggPSA2MDA7XG4vLyBjb250ZXh0LmZpbGxTdHlsZSA9IFwiIzIwMjAyMFwiO1xuLy8gY29udGV4dC5maWxsUmVjdCgwLDAsNjAwLDQwMCk7XG5jb25zdCBrZXlzID0gW107XG5cbmNvbnN0IHBsYXllciA9IHtcbiAgICB4OiAyMzAsXG4gICAgeTogMCxcbiAgICB3aWR0aDogNjcsXG4gICAgaGVpZ2h0OiA2NyxcbiAgICBmcmFtZVg6IDAsXG4gICAgZnJhbWVZOiAxLFxuICAgIHhfdmVsb2NpdHk6IDAsXG4gICAgeV92ZWxvY2l0eTogMCxcbiAgICBtb3Zpbmc6IGZhbHNlLFxuICAgIGp1bXA6IHRydWVcbn1cblxuY29uc3QgcGxheWVyU3ByaXRlID0gbmV3IEltYWdlKCk7XG5wbGF5ZXJTcHJpdGUuc3JjID0gXCJzcmMvaW1hZ2VzL2VldmVlMi5wbmdcIjtcbmNvbnN0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbmJhY2tncm91bmQuc3JjID0gXCJzcmMvaW1hZ2VzL2JnLWltZy5qcGdcIjtcblxuY29uc3QgcGxhdGZvcm1TcHJpdGUxID0gbmV3IEltYWdlKCk7XG5wbGF0Zm9ybVNwcml0ZTEuc3JjID0gXCJzcmMvaW1hZ2VzLzEzLnBuZ1wiO1xuY29uc3QgcGxhdGZvcm1TcHJpdGUyID0gbmV3IEltYWdlKCk7XG5wbGF0Zm9ybVNwcml0ZTIuc3JjID0gXCJzcmMvaW1hZ2VzLzE0LnBuZ1wiO1xuY29uc3QgcGxhdGZvcm1TcHJpdGUzID0gbmV3IEltYWdlKCk7XG5wbGF0Zm9ybVNwcml0ZTMuc3JjID0gXCJzcmMvaW1hZ2VzLzE1LnBuZ1wiO1xuY29uc3QgZmlyZVN0b25lID0gbmV3IEltYWdlKCk7XG5maXJlU3RvbmUuc3JjID0gXCJzcmMvaW1hZ2VzL3N0b25lczEucG5nXCI7XG5cbmZ1bmN0aW9uIGRyYXdTcHJpdGUoaW1nLCBzcHJpdGVYLCBzcHJpdGVZLCBzcHJpdGVXLCBzcHJpdGVILCBkWCwgZFksIGRXLCBkSCkge1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZywgc3ByaXRlWCwgc3ByaXRlWSwgc3ByaXRlVywgc3ByaXRlSCwgZFgsIGRZLCBkVywgZEgpO1xufVxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihldmVudCkge1xuICAgIGtleXNbZXZlbnQua2V5XSA9IHRydWU7XG4gICAgcGxheWVyLm1vdmluZyA9IHRydWU7XG4gICAgcGxheWVyLmp1bXBpbmcgPSBmYWxzZTtcblxuXG4gICAgLy8gY29uc29sZS5sb2coa2V5cyk7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihldmVudCl7XG4gICAgZGVsZXRlIGtleXNbZXZlbnQua2V5XTtcbiAgICBwbGF5ZXIubW92aW5nID0gZmFsc2U7XG4gICAgcGxheWVyLmp1bXBpbmcgPSBmYWxzZTtcbn0pO1xuXG5mdW5jdGlvbiBtb3ZlUGxheWVyKCkge1xuICAgIGlmKGtleXNbXCJBcnJvd0xlZnRcIl0gJiYgcGxheWVyLnggPiAwKSB7XG4gICAgICAgIC8vIHBsYXllci54IC09IHBsYXllci54X3ZlbG9jaXR5O1xuICAgICAgICBwbGF5ZXIueF92ZWxvY2l0eSAtPSAwLjU7XG4gICAgICAgIC8vIHBsYXllci5mcmFtZVkgPSAxO1xuICAgICAgICBwbGF5ZXIuZnJhbWVZID0gMDtcbiAgICAgICAgcGxheWVyLm1vdmluZyA9IHRydWU7XG4gICAgICAgIHBsYXllci5qdW1waW5nID0gdHJ1ZTtcblxuICAgIH1cbiAgICBpZihrZXlzW1wiQXJyb3dSaWdodFwiXSkgeyAvLyAmJiBwbGF5ZXIueCA8IGNhbnZhcy53aWR0aCAtIHBsYXllci53aWR0aFxuICAgICAgICAvLyBwbGF5ZXIueCArPSBwbGF5ZXIueF92ZWxvY2l0eTtcbiAgICAgICAgcGxheWVyLnhfdmVsb2NpdHkgKz0gMC41O1xuICAgICAgICBwbGF5ZXIuZnJhbWVZID0gMTtcbiAgICAgICAgLy8gcGxheWVyLmZyYW1lWCA9IDE7XG4gICAgICAgIHBsYXllci5tb3ZpbmcgPSB0cnVlO1xuICAgIH1cbiAgICBpZihrZXlzW1wiQXJyb3dVcFwiXSAmJiBwbGF5ZXIuanVtcGluZyA9PSBmYWxzZSkge1xuICAgICAgICBwbGF5ZXIueV92ZWxvY2l0eSAtPSAzMDtcbiAgICAgICAgLy8gcGxheWVyLmZyYW1lWSA9IDI7XG4gICAgICAgIHBsYXllci5qdW1waW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgcGxheWVyLnlfdmVsb2NpdHkgKz0gMS41OyAvLyBncmF2aXR5XG4gICAgcGxheWVyLnggKz0gcGxheWVyLnhfdmVsb2NpdHk7XG4gICAgcGxheWVyLnkgKz0gcGxheWVyLnlfdmVsb2NpdHk7XG4gICAgcGxheWVyLnhfdmVsb2NpdHkgKj0gMC45O1xuICAgIHBsYXllci55X3ZlbG9jaXR5ICo9IDAuOTtcbiAgICBcbiAgICBpZiAocGxheWVyLnkgPiA0MDAgLSA2NSAtIDY3KSB7IC8vIDMyIGlzIHRvcCBjb3JkIG9mIHJlY3RcbiAgICAgICAgcGxheWVyLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgcGxheWVyLnkgPSA0MDAgLSA2NSAtIDY3O1xuICAgICAgICBwbGF5ZXIueV92ZWxvY2l0eSA9IDA7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBQbGF5ZXJGcmFtZSgpIHtcbiAgICBpZihwbGF5ZXIuZnJhbWVYIDwgMyAmJiBwbGF5ZXIubW92aW5nKSB7XG4gICAgICAgIHBsYXllci5mcmFtZVgrK1xuICAgIH0gZWxzZSB7cGxheWVyLmZyYW1lWCA9IDB9O1xufVxuXG4vLyBjb3JkaW5hdGVzXG5cbiAgICBsZXQgY29yZCA9IFtcbiAgICAgICAge3g6MTAwLCB5OjIwMH0sXG4gICAgICAgIHt4OjE1MCwgeToyMDB9LFxuICAgICAgICB7eDoyMDAsIHk6MTAwfSxcbiAgICAgICAge3g6MjUwLCB5OjIwMH0sXG4gICAgICAgIHt4OjMwMCwgeToyMDB9LFxuICAgICAgICB7eDozNTAsIHk6MjAwfVxuICAgIF1cblxuXG4vLyBwbGF0Zm9ybXNcbiAgICBsZXQgcGxhdGZvcm1zID0gW107XG4gICAgbGV0IG51bSA9IDU7XG4gICAgZnVuY3Rpb24gY3JlYXRlcGxhdCgpe1xuICAgICAgICBmb3IoaSA9IDA7IHBsYXRmb3Jtcy5sZW5ndGggPCBudW07IGkrKykge1xuICAgICAgICAgICAgbGV0IHJhbmRvbUNvcmQgPSBjb3JkW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpjb3JkLmxlbmd0aCldO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmFuZG9tQ29yZClcbiAgICAgICAgICAgIGxldCBwbGF0Zm9ybSA9IHtcbiAgICAgICAgICAgICAgICB4OiByYW5kb21Db3JkLngsXG4gICAgICAgICAgICAgICAgeTogcmFuZG9tQ29yZC55LFxuICAgICAgICAgICAgICAgIHdpZHRoOiA0NyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM3XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGxhdGZvcm1zLnB1c2gocGxhdGZvcm0pO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcmVuZGVycGxhdGZvcm0oKXtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgcGxhdGZvcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UocGxhdGZvcm1TcHJpdGUxLCBwbGF0Zm9ybXNbaV0ueCwgcGxhdGZvcm1zW2ldLnksIHBsYXRmb3Jtc1tpXS53aWR0aCwgcGxhdGZvcm1zW2ldLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UocGxhdGZvcm1TcHJpdGUzLCBwbGF0Zm9ybXNbaV0ueCs0NywgcGxhdGZvcm1zW2ldLnksIHBsYXRmb3Jtc1tpXS53aWR0aCwgcGxhdGZvcm1zW2ldLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb2xsaXNpb25DaGVjayhwbGF0Zm9ybSkge1xuICAgICAgICAgICAgaWYocGxheWVyLnggPiBwbGF0Zm9ybS54ICsgcGxhdGZvcm0ud2lkdGgpIHtyZXR1cm4gZmFsc2V9O1xuICAgICAgICAgICAgaWYocGxheWVyLnggKyBwbGF5ZXIud2lkdGggPCBwbGF0Zm9ybS54KSB7cmV0dXJuIGZhbHNlfTtcbiAgICAgICAgICAgIGlmKHBsYXllci55ID4gcGxhdGZvcm0ueSArIHBsYXRmb3JtLmhlaWdodCkge3JldHVybiBmYWxzZX07XG4gICAgICAgICAgICBpZihwbGF5ZXIueSArIHBsYXllci5oZWlnaHQgPCBwbGF0Zm9ybS55KSB7cmV0dXJuIGZhbHNlfTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBwbGF0Zm9ybUNvbGxpc2lvbigpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBsYXRmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoY29sbGlzaW9uQ2hlY2socGxhdGZvcm1zW2ldKSkge1xuICAgICAgICAgICAgICAgIHBsYXllci55X3ZlbG9jaXR5ID0gMDtcbiAgICAgICAgICAgICAgICBwbGF5ZXIueSA9IHBsYXRmb3Jtc1tpXS55IC0gNjA7XG4gICAgICAgICAgICAgICAgLy8gcGxheWVyLnggPSBwbGF0Zm9ybXNbMF0ueDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuLy8gc3RvbmVzXG4gICAgbGV0IHN0b25lcyA9IFtdO1xuICAgIGZ1bmN0aW9uIHN0b25lQ29sbGVjdGlvbigpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBsYXRmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHN0b25lID0ge1xuICAgICAgICAgICAgICAgIHg6IHBsYXRmb3Jtc1tpXS54ICsgNTAsXG4gICAgICAgICAgICAgICAgeTogcGxhdGZvcm1zW2ldLnkgLTQwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBwbGF0Zm9ybXNbaV0ud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybXNbaV0uaGVpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdG9uZXMucHVzaChzdG9uZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJTdG9uZXMoKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdG9uZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGZpcmVTdG9uZSwgc3RvbmVzW2ldLngsIHN0b25lc1tpXS55LCBzdG9uZXNbaV0ud2lkdGgsIHN0b25lc1tpXS5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvbmVDb2xsaXNpb25DaGVjayhzdG9uZSkge1xuXG4gICAgICAgIGlmKHBsYXllci54ID4gc3RvbmUueCArIHN0b25lLndpZHRoKSB7cmV0dXJuIGZhbHNlfTtcbiAgICAgICAgaWYocGxheWVyLnggKyBwbGF5ZXIud2lkdGggPCBzdG9uZS54KSB7cmV0dXJuIGZhbHNlfTtcbiAgICAgICAgaWYocGxheWVyLnkgPiBzdG9uZS55ICsgc3RvbmUuaGVpZ2h0KSB7cmV0dXJuIGZhbHNlfTtcbiAgICAgICAgaWYocGxheWVyLnkgKyBwbGF5ZXIuaGVpZ2h0IDwgc3RvbmUueSkge3JldHVybiBmYWxzZX07XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzdG9uZUNvbGxpc2lvbigpIHtcbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdG9uZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzdG9uZUNvbGxpc2lvbkNoZWNrKHN0b25lc1tpXSkpIHtcbiAgICAgICAgICAgICAgICBzdG9uZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3RvbmUoKSB7XG4gICAgICAgIFxuICAgIH1cblxuXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIC8vIGZvciBiYWNrZ3JvdW5kIGxhdGVyXG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBjb250ZXh0LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgZHJhd1Nwcml0ZShwbGF5ZXJTcHJpdGUsIHBsYXllci53aWR0aCAqIHBsYXllci5mcmFtZVgsIHBsYXllci5oZWlnaHQgKiBwbGF5ZXIuZnJhbWVZLCBwbGF5ZXIud2lkdGgsIHBsYXllci5oZWlnaHQsIHBsYXllci54LCBwbGF5ZXIueSwgcGxheWVyLndpZHRoLCBwbGF5ZXIuaGVpZ2h0KTtcbiAgICBtb3ZlUGxheWVyKCk7XG4gICAgUGxheWVyRnJhbWUoKTtcblxuICAgIHJlbmRlcnBsYXRmb3JtKCk7XG4gICAgcGxhdGZvcm1Db2xsaXNpb24oKTtcblxuICAgIHJlbmRlclN0b25lcygpO1xuICAgIHN0b25lQ29sbGVjdGlvbigpO1xuICAgIHN0b25lQ29sbGlzaW9uKCk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG59XG5cbmNyZWF0ZXBsYXQoKTtcbmFuaW1hdGUoKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9