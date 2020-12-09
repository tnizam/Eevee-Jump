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
 // import "../src/scripts/player"

 // import '../src/scripts/main_player';

window.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById("canvas-background");
  var context = canvas.getContext("2d");
  var background = new Image();
  background.src = "src/images/bg-img.jpg";
  canvas.height = 400;
  canvas.width = 600; // context.clearRect(0, 0, canvas.width, canvas.height);

  context.drawImage(background, 0, 0, canvas.width, canvas.height);
});

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/scripts/player.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Game = /*#__PURE__*/function () {
  // constructor(height, width) {
  //     const canvas = document.querySelector("canvas")
  //     this.context = canvas.getContext("2d");
  //     this.background = new Image("src/images/bg-img.jpg");
  //     this.height = 400;
  //     this.width = 600;
  // }
  // handleBackground() {
  //     this.context.clearRect(0, 0, this.width, this.height);
  //     this.context.drawImage(this.background, 0, 0, this.width, this.height);
  //     this.context.beginPath();
  // }
  function Game() {
    _classCallCheck(this, Game);

    this.canvas = document.getElementById("canvas-background");
    this.context = canvas.getContext("2d");
    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  _createClass(Game, [{
    key: "play",
    value: function play() {
      this.running = true;
      this.animate();
    }
  }, {
    key: "registerEvents",
    value: function registerEvents() {
      this.boundClickHandler = this.boundClickHandler.bind(this);
      this.context.canvas.addEventListener('keydown');
    }
  }, {
    key: "animate",
    value: function (_animate) {
      function animate() {
        return _animate.apply(this, arguments);
      }

      animate.toString = function () {
        return _animate.toString();
      };

      return animate;
    }(function () {
      // for background later
      drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
      this.player.movePlayer();
      this.player.PlayerFrame();
      requestAnimationFrame(animate);
    })
  }]);

  return Game;
}(); // const background = new Image();
// background.src = "src/images/bg-img.jpg";
// function animate() {
//     // for background later
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     context.drawImage(background, 0, 0, canvas.width, canvas.height);
//     context.beginPath();
//     drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
//     movePlayer();
//     PlayerFrame();
//     requestAnimationFrame(animate);
// }
// animate();




/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.x = 230;
    this.y = 0;
    this.width = 67;
    this.height = 67;
    this.frameX = 0;
    this.frameY = 1;
    this.x_velocity = 0;
    this.y_velocity = 0;
    this.moving = false;
    this.jump = true;
  }

  _createClass(Player, [{
    key: "drawSprite",
    value: function drawSprite(context) {
      var playerSprite = new Image();
      playerSprite.src = "src/images/bg-img.jpg";
      context.drawImage(playerSprite, spriteX, spriteY, spriteW, spriteH, dX, dY, dW, dH);
    }
  }, {
    key: "movePlayer",
    value: function movePlayer() {
      if (keys["ArrowLeft"] && this.x > 0) {
        // this.x -= this.x_velocity;
        this.x_velocity -= 0.5; // this.frameY = 1;

        this.frameY = 0;
        this.moving = true;
        this.jumping = true;
      }

      if (keys["ArrowRight"]) {
        // && this.x < canvas.width - this.width
        // this.x += this.x_velocity;
        this.x_velocity += 0.5;
        this.frameY = 1; // this.frameX = 1;

        this.moving = true;
      }

      if (keys["ArrowUp"] && this.jumping == false) {
        this.y_velocity -= 30; // this.frameY = 2;

        this.jumping = true;
      }

      this.y_velocity += 1.5; // gravity

      this.x += this.x_velocity;
      this.y += this.y_velocity;
      this.x_velocity *= 0.9;
      this.y_velocity *= 0.9;

      if (this.y > 400 - 65 - 67) {
        // 32 is top cord of rect
        this.jumping = false;
        this.y = 400 - 65 - 67;
        this.y_velocity = 0;
      }
    }
  }, {
    key: "PlayerFrame",
    value: function PlayerFrame() {
      if (this.frameX < 3 && this.moving) {
        this.frameX++;
      } else {
        this.frameX = 0;
      }

      ;
    }
  }, {
    key: "animate",
    value: function animate() {
      // for background later
      this.drawSprite(context);
      this.movePlayer();
      this.PlayerFrame();
    }
  }]);

  return Player;
}();



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYmFja2dyb3VuZCIsIkltYWdlIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJkcmF3SW1hZ2UiLCJHYW1lIiwicGxheWVyIiwiUGxheWVyIiwicnVubmluZyIsImFuaW1hdGUiLCJib3VuZENsaWNrSGFuZGxlciIsImJpbmQiLCJkcmF3U3ByaXRlIiwicGxheWVyU3ByaXRlIiwiZnJhbWVYIiwiZnJhbWVZIiwieCIsInkiLCJtb3ZlUGxheWVyIiwiUGxheWVyRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ4X3ZlbG9jaXR5IiwieV92ZWxvY2l0eSIsIm1vdmluZyIsImp1bXAiLCJzcHJpdGVYIiwic3ByaXRlWSIsInNwcml0ZVciLCJzcHJpdGVIIiwiZFgiLCJkWSIsImRXIiwiZEgiLCJrZXlzIiwianVtcGluZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7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eEIsV0FBS04sQ0FBTCxJQUFVLEtBQUtLLFVBQWY7QUFDQSxXQUFLSixDQUFMLElBQVUsS0FBS0ssVUFBZjtBQUNBLFdBQUtELFVBQUwsSUFBbUIsR0FBbkI7QUFDQSxXQUFLQyxVQUFMLElBQW1CLEdBQW5COztBQUVBLFVBQUksS0FBS0wsQ0FBTCxHQUFTLE1BQU0sRUFBTixHQUFXLEVBQXhCLEVBQTRCO0FBQUU7QUFDMUIsYUFBS2lCLE9BQUwsR0FBZSxLQUFmO0FBQ0EsYUFBS2pCLENBQUwsR0FBUyxNQUFNLEVBQU4sR0FBVyxFQUFwQjtBQUNBLGFBQUtLLFVBQUwsR0FBa0IsQ0FBbEI7QUFDSDtBQUNKOzs7a0NBRWE7QUFDVixVQUFHLEtBQUtSLE1BQUwsR0FBYyxDQUFkLElBQW1CLEtBQUtTLE1BQTNCLEVBQW1DO0FBQy9CLGFBQUtULE1BQUw7QUFDSCxPQUZELE1BRU87QUFDSCxhQUFLQSxNQUFMLEdBQWMsQ0FBZDtBQUNIOztBQUFBO0FBQ0o7Ozs4QkFFUztBQUNOO0FBQ0EsV0FBS0YsVUFBTCxDQUFnQmYsT0FBaEI7QUFDQSxXQUFLcUIsVUFBTDtBQUNBLFdBQUtDLFdBQUw7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEVMO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuLy8gaW1wb3J0IFwiLi4vc3JjL3NjcmlwdHMvcGxheWVyXCJcblxuaW1wb3J0IEdhbWUgZnJvbSAnLi4vc3JjL3NjcmlwdHMvZ2FtZSc7XG4vLyBpbXBvcnQgJy4uL3NyYy9zY3JpcHRzL21haW5fcGxheWVyJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtYmFja2dyb3VuZFwiKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG4gICAgYmFja2dyb3VuZC5zcmMgPSBcInNyYy9pbWFnZXMvYmctaW1nLmpwZ1wiO1xuICAgIGNhbnZhcy5oZWlnaHQgPSA0MDA7XG4gICAgY2FudmFzLndpZHRoID0gNjAwO1xuICAgIC8vIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbn0pIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgLy8gY29uc3RydWN0b3IoaGVpZ2h0LCB3aWR0aCkge1xuICAgIC8vICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzXCIpXG4gICAgLy8gICAgIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgLy8gICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBJbWFnZShcInNyYy9pbWFnZXMvYmctaW1nLmpwZ1wiKTtcbiAgICAvLyAgICAgdGhpcy5oZWlnaHQgPSA0MDA7XG4gICAgLy8gICAgIHRoaXMud2lkdGggPSA2MDA7XG4gICAgLy8gfVxuXG4gICAgLy8gaGFuZGxlQmFja2dyb3VuZCgpIHtcbiAgICAvLyAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgLy8gICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5iYWNrZ3JvdW5kLCAwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgLy8gICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAvLyB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy1iYWNrZ3JvdW5kXCIpO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcGxheSgpIHtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuYm91bmRDbGlja0hhbmRsZXIgPSB0aGlzLmJvdW5kQ2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY29udGV4dC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicpXG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAvLyBmb3IgYmFja2dyb3VuZCBsYXRlclxuICAgICAgICBkcmF3U3ByaXRlKHBsYXllclNwcml0ZSwgcGxheWVyLndpZHRoICogcGxheWVyLmZyYW1lWCwgcGxheWVyLmhlaWdodCAqIHBsYXllci5mcmFtZVksIHBsYXllci53aWR0aCwgcGxheWVyLmhlaWdodCwgcGxheWVyLngsIHBsYXllci55LCBwbGF5ZXIud2lkdGgsIHBsYXllci5oZWlnaHQpO1xuICAgICAgICB0aGlzLnBsYXllci5tb3ZlUGxheWVyKCk7XG4gICAgICAgIHRoaXMucGxheWVyLlBsYXllckZyYW1lKCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xufVxuXG59XG5cblxuLy8gY29uc3QgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuLy8gYmFja2dyb3VuZC5zcmMgPSBcInNyYy9pbWFnZXMvYmctaW1nLmpwZ1wiO1xuXG4vLyBmdW5jdGlvbiBhbmltYXRlKCkge1xuLy8gICAgIC8vIGZvciBiYWNrZ3JvdW5kIGxhdGVyXG4vLyAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbi8vICAgICBjb250ZXh0LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuLy8gICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4vLyAgICAgZHJhd1Nwcml0ZShwbGF5ZXJTcHJpdGUsIHBsYXllci53aWR0aCAqIHBsYXllci5mcmFtZVgsIHBsYXllci5oZWlnaHQgKiBwbGF5ZXIuZnJhbWVZLCBwbGF5ZXIud2lkdGgsIHBsYXllci5oZWlnaHQsIHBsYXllci54LCBwbGF5ZXIueSwgcGxheWVyLndpZHRoLCBwbGF5ZXIuaGVpZ2h0KTtcbi8vICAgICBtb3ZlUGxheWVyKCk7XG4vLyAgICAgUGxheWVyRnJhbWUoKTtcbi8vICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4vLyB9XG4vLyBhbmltYXRlKCk7IiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnggPSAyMzA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMud2lkdGggPSA2NztcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA2NztcbiAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xuICAgICAgICB0aGlzLmZyYW1lWSA9IDE7XG4gICAgICAgIHRoaXMueF92ZWxvY2l0eSA9IDA7XG4gICAgICAgIHRoaXMueV92ZWxvY2l0eSA9IDA7XG4gICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuanVtcCA9IHRydWU7XG4gICAgfVxuXG5cbiAgICBkcmF3U3ByaXRlKGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcGxheWVyU3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHBsYXllclNwcml0ZS5zcmMgPSBcInNyYy9pbWFnZXMvYmctaW1nLmpwZ1wiO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShwbGF5ZXJTcHJpdGUsIHNwcml0ZVgsIHNwcml0ZVksIHNwcml0ZVcsIHNwcml0ZUgsIGRYLCBkWSwgZFcsIGRIKTtcbiAgICB9XG5cbiAgICBtb3ZlUGxheWVyKCkge1xuICAgICAgICBpZihrZXlzW1wiQXJyb3dMZWZ0XCJdICYmIHRoaXMueCA+IDApIHtcbiAgICAgICAgLy8gdGhpcy54IC09IHRoaXMueF92ZWxvY2l0eTtcbiAgICAgICAgdGhpcy54X3ZlbG9jaXR5IC09IDAuNTtcbiAgICAgICAgLy8gdGhpcy5mcmFtZVkgPSAxO1xuICAgICAgICB0aGlzLmZyYW1lWSA9IDA7XG4gICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5qdW1waW5nID0gdHJ1ZTtcblxuICAgICAgICB9XG4gICAgICAgIGlmKGtleXNbXCJBcnJvd1JpZ2h0XCJdKSB7IC8vICYmIHRoaXMueCA8IGNhbnZhcy53aWR0aCAtIHRoaXMud2lkdGhcbiAgICAgICAgICAgIC8vIHRoaXMueCArPSB0aGlzLnhfdmVsb2NpdHk7XG4gICAgICAgICAgICB0aGlzLnhfdmVsb2NpdHkgKz0gMC41O1xuICAgICAgICAgICAgdGhpcy5mcmFtZVkgPSAxO1xuICAgICAgICAgICAgLy8gdGhpcy5mcmFtZVggPSAxO1xuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmKGtleXNbXCJBcnJvd1VwXCJdICYmIHRoaXMuanVtcGluZyA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy55X3ZlbG9jaXR5IC09IDMwO1xuICAgICAgICAgICAgLy8gdGhpcy5mcmFtZVkgPSAyO1xuICAgICAgICAgICAgdGhpcy5qdW1waW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnlfdmVsb2NpdHkgKz0gMS41OyAvLyBncmF2aXR5XG4gICAgICAgIHRoaXMueCArPSB0aGlzLnhfdmVsb2NpdHk7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnlfdmVsb2NpdHk7XG4gICAgICAgIHRoaXMueF92ZWxvY2l0eSAqPSAwLjk7XG4gICAgICAgIHRoaXMueV92ZWxvY2l0eSAqPSAwLjk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy55ID4gNDAwIC0gNjUgLSA2NykgeyAvLyAzMiBpcyB0b3AgY29yZCBvZiByZWN0XG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMueSA9IDQwMCAtIDY1IC0gNjc7XG4gICAgICAgICAgICB0aGlzLnlfdmVsb2NpdHkgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgUGxheWVyRnJhbWUoKSB7XG4gICAgICAgIGlmKHRoaXMuZnJhbWVYIDwgMyAmJiB0aGlzLm1vdmluZykge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVgrK1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVggPSAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgLy8gZm9yIGJhY2tncm91bmQgbGF0ZXJcbiAgICAgICAgdGhpcy5kcmF3U3ByaXRlKGNvbnRleHQpO1xuICAgICAgICB0aGlzLm1vdmVQbGF5ZXIoKTtcbiAgICAgICAgdGhpcy5QbGF5ZXJGcmFtZSgpO1xuICAgIH1cblxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=