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

/***/ "./bg/1.jpg":
/*!******************!*\
  !*** ./bg/1.jpg ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "81dce5bb6237d5e04fc93f9c42df53de.jpg";

/***/ }),

/***/ "./bg/10.jpg":
/*!*******************!*\
  !*** ./bg/10.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b9e1c1e41b3563dd0bd10f6da39fce4e.jpg";

/***/ }),

/***/ "./bg/100.jpg":
/*!********************!*\
  !*** ./bg/100.jpg ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "36c1473376a0df1dff280b1938031e4a.jpg";

/***/ }),

/***/ "./bg/11.jpg":
/*!*******************!*\
  !*** ./bg/11.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "484c8b64ee942731173447ae47b7ddf3.jpg";

/***/ }),

/***/ "./bg/12.jpg":
/*!*******************!*\
  !*** ./bg/12.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "12d9f55cc853200e4d4be8f6baeeebd1.jpg";

/***/ }),

/***/ "./bg/13.jpg":
/*!*******************!*\
  !*** ./bg/13.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6854385f6fd596e7cff7567f8ee10585.jpg";

/***/ }),

/***/ "./bg/14.jpg":
/*!*******************!*\
  !*** ./bg/14.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d8a688da50442252fbaaf338f5f2593b.jpg";

/***/ }),

/***/ "./bg/15.jpg":
/*!*******************!*\
  !*** ./bg/15.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "38619a36a14dbb3bedd92accfc290572.jpg";

/***/ }),

/***/ "./bg/16.jpg":
/*!*******************!*\
  !*** ./bg/16.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "daa4c341ca97a6e7d83cc3700f360b05.jpg";

/***/ }),

/***/ "./bg/17.jpg":
/*!*******************!*\
  !*** ./bg/17.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "749cd14184e285bac9a93a063ab617df.jpg";

/***/ }),

/***/ "./bg/18.jpg":
/*!*******************!*\
  !*** ./bg/18.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "05e081870c0bd9d6436a9e4a527446d1.jpg";

/***/ }),

/***/ "./bg/19.jpg":
/*!*******************!*\
  !*** ./bg/19.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9478f9315aded7b88a5672932afe2574.jpg";

/***/ }),

/***/ "./bg/2.jpg":
/*!******************!*\
  !*** ./bg/2.jpg ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "47e95dec788ab7c25c21f6261b758e37.jpg";

/***/ }),

/***/ "./bg/20.jpg":
/*!*******************!*\
  !*** ./bg/20.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "322b412783d301db5bdf7246c2afe9b3.jpg";

/***/ }),

/***/ "./bg/21.jpg":
/*!*******************!*\
  !*** ./bg/21.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7afeab913eb6a46ac48dff6ba315a2c0.jpg";

/***/ }),

/***/ "./bg/22.jpg":
/*!*******************!*\
  !*** ./bg/22.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b4445d0ebd4c86d78f61c69ee008ac07.jpg";

/***/ }),

/***/ "./bg/23.jpg":
/*!*******************!*\
  !*** ./bg/23.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f3853abed5d6a45da283bd4555c63c19.jpg";

/***/ }),

/***/ "./bg/24.jpg":
/*!*******************!*\
  !*** ./bg/24.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4ee96eeebcc6e2208fe767f18adf58b6.jpg";

/***/ }),

/***/ "./bg/25.jpg":
/*!*******************!*\
  !*** ./bg/25.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "84d240ee0dbe51d444b57c9ac0b747bf.jpg";

/***/ }),

/***/ "./bg/26.jpg":
/*!*******************!*\
  !*** ./bg/26.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "953a1fe478d9545ce3c6e9b3e59752c1.jpg";

/***/ }),

/***/ "./bg/27.jpg":
/*!*******************!*\
  !*** ./bg/27.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5aeff190b67891149465c39e100d889c.jpg";

/***/ }),

/***/ "./bg/28.jpg":
/*!*******************!*\
  !*** ./bg/28.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1a9d52dcebe604bd0b5aa08f06c32376.jpg";

/***/ }),

/***/ "./bg/29.jpg":
/*!*******************!*\
  !*** ./bg/29.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8ec35af5229ee932bc423fedaca8b375.jpg";

/***/ }),

/***/ "./bg/3.jpg":
/*!******************!*\
  !*** ./bg/3.jpg ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "777646f5d88dde0f6de8f596a254c8eb.jpg";

/***/ }),

/***/ "./bg/30.jpg":
/*!*******************!*\
  !*** ./bg/30.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3fe1746f8f8efd260e900f160f8fa485.jpg";

/***/ }),

/***/ "./bg/31.jpg":
/*!*******************!*\
  !*** ./bg/31.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "39738aa3dbfbb7792f952eb5a451328a.jpg";

/***/ }),

/***/ "./bg/32.jpg":
/*!*******************!*\
  !*** ./bg/32.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8f3144c52686ff03318e52897940e0e3.jpg";

/***/ }),

/***/ "./bg/33.jpg":
/*!*******************!*\
  !*** ./bg/33.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "04e13540a1a0115c615e07f7903f41d0.jpg";

/***/ }),

/***/ "./bg/34.jpg":
/*!*******************!*\
  !*** ./bg/34.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "05600e3d49e42707e04f18c971dbfacf.jpg";

/***/ }),

/***/ "./bg/35.jpg":
/*!*******************!*\
  !*** ./bg/35.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "528e50a6d98f047b5209612f0b843ad7.jpg";

/***/ }),

/***/ "./bg/36.jpg":
/*!*******************!*\
  !*** ./bg/36.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e2684f1eb90f2e263709624650a569eb.jpg";

/***/ }),

/***/ "./bg/37.jpg":
/*!*******************!*\
  !*** ./bg/37.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "34718d84b4ab14fd9fef4088a6822f3f.jpg";

/***/ }),

/***/ "./bg/38.jpg":
/*!*******************!*\
  !*** ./bg/38.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "05546d03aacb74f91edf630d64cd9f39.jpg";

/***/ }),

/***/ "./bg/39.jpg":
/*!*******************!*\
  !*** ./bg/39.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "35012ee78b027d60d52dd5f65acb4024.jpg";

/***/ }),

/***/ "./bg/4.jpg":
/*!******************!*\
  !*** ./bg/4.jpg ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2631c81a3eedcc10a1411c0b4061e514.jpg";

/***/ }),

/***/ "./bg/40.jpg":
/*!*******************!*\
  !*** ./bg/40.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eaa0cd331485eec0259c537c18f58870.jpg";

/***/ }),

/***/ "./bg/41.jpg":
/*!*******************!*\
  !*** ./bg/41.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "64a374e513b4abc497870230e57587d4.jpg";

/***/ }),

/***/ "./bg/42.jpg":
/*!*******************!*\
  !*** ./bg/42.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c434f653261bdee1bc236071380984d9.jpg";

/***/ }),

/***/ "./bg/43.jpg":
/*!*******************!*\
  !*** ./bg/43.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e887f88271bf5aa3ac4079b3c7fcdf3f.jpg";

/***/ }),

/***/ "./bg/44.jpg":
/*!*******************!*\
  !*** ./bg/44.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aef164ab707fd4c6f36b38417d4e6cf4.jpg";

/***/ }),

/***/ "./bg/45.jpg":
/*!*******************!*\
  !*** ./bg/45.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "654fac7b9ee21eb6d78f622385396b70.jpg";

/***/ }),

/***/ "./bg/46.jpg":
/*!*******************!*\
  !*** ./bg/46.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "62d16430e81711a210b766c9003726b6.jpg";

/***/ }),

/***/ "./bg/47.jpg":
/*!*******************!*\
  !*** ./bg/47.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5ff8df482a66c3ae849494d12c33069e.jpg";

/***/ }),

/***/ "./bg/48.jpg":
/*!*******************!*\
  !*** ./bg/48.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "384c136b0f192dc056bf0e044d9c94e3.jpg";

/***/ }),

/***/ "./bg/49.jpg":
/*!*******************!*\
  !*** ./bg/49.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e9017ce45415c03467dc1e63c4f2b29e.jpg";

/***/ }),

/***/ "./bg/5.jpg":
/*!******************!*\
  !*** ./bg/5.jpg ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "842044a562a085b24b7f04b2b1148373.jpg";

/***/ }),

/***/ "./bg/50.jpg":
/*!*******************!*\
  !*** ./bg/50.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cce09671be0d5979276cfe63bfb3a4a3.jpg";

/***/ }),

/***/ "./bg/51.jpg":
/*!*******************!*\
  !*** ./bg/51.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0b5f389f0e37a5420077b1cf948693bd.jpg";

/***/ }),

/***/ "./bg/52.jpg":
/*!*******************!*\
  !*** ./bg/52.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "02bef921621ec901c3bd5516faf4194f.jpg";

/***/ }),

/***/ "./bg/53.jpg":
/*!*******************!*\
  !*** ./bg/53.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a0890a452e9154777e186cb4fbd929b6.jpg";

/***/ }),

/***/ "./bg/54.jpg":
/*!*******************!*\
  !*** ./bg/54.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "83be2a58e07105cdbcc43341e0acc1ef.jpg";

/***/ }),

/***/ "./bg/55.jpg":
/*!*******************!*\
  !*** ./bg/55.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "db04f1453b11778c7de997d4032b1093.jpg";

/***/ }),

/***/ "./bg/56.jpg":
/*!*******************!*\
  !*** ./bg/56.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "560d955f425496ff836c4b925f8f6f77.jpg";

/***/ }),

/***/ "./bg/57.jpg":
/*!*******************!*\
  !*** ./bg/57.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bf71116f20cd6b1e6cc134e3ba71e35a.jpg";

/***/ }),

/***/ "./bg/58.jpg":
/*!*******************!*\
  !*** ./bg/58.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e5651eb2e34c24485d90e041224e6173.jpg";

/***/ }),

/***/ "./bg/59.jpg":
/*!*******************!*\
  !*** ./bg/59.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c2301dc8caa84a72ab88e3bddd6256b1.jpg";

/***/ }),

/***/ "./bg/6.jpg":
/*!******************!*\
  !*** ./bg/6.jpg ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c018bbc278e9d9276241cadbbedd830d.jpg";

/***/ }),

/***/ "./bg/60.jpg":
/*!*******************!*\
  !*** ./bg/60.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f77a0b26d4b1426d1d00d0cc0015ee9d.jpg";

/***/ }),

/***/ "./bg/61.jpg":
/*!*******************!*\
  !*** ./bg/61.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "91098c3c2b0a0c4b8bb98a8d7f27edef.jpg";

/***/ }),

/***/ "./bg/62.jpg":
/*!*******************!*\
  !*** ./bg/62.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f6723b1209acb152732c3fd277162e8d.jpg";

/***/ }),

/***/ "./bg/63.jpg":
/*!*******************!*\
  !*** ./bg/63.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d7bb0e763c7edba1f0d0e9c1145c1f4b.jpg";

/***/ }),

/***/ "./bg/64.jpg":
/*!*******************!*\
  !*** ./bg/64.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fff227a6d75120ae03a8f90c4bd68b47.jpg";

/***/ }),

/***/ "./bg/65.jpg":
/*!*******************!*\
  !*** ./bg/65.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d34102b11cc5a67a3b618c9e11ce92ce.jpg";

/***/ }),

/***/ "./bg/66.jpg":
/*!*******************!*\
  !*** ./bg/66.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "93cef576b388aaba73510c4a967f3280.jpg";

/***/ }),

/***/ "./bg/67.jpg":
/*!*******************!*\
  !*** ./bg/67.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2f7422dbe3adc8b1925dfa674a35b679.jpg";

/***/ }),

/***/ "./bg/68.jpg":
/*!*******************!*\
  !*** ./bg/68.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "33d2f8613c9c638fb74d02f4555ef8b1.jpg";

/***/ }),

/***/ "./bg/69.jpg":
/*!*******************!*\
  !*** ./bg/69.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5ffea8b1e7a8d9a313018ff205fbfbfc.jpg";

/***/ }),

/***/ "./bg/7.jpg":
/*!******************!*\
  !*** ./bg/7.jpg ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "de6b46943e27d73f88809f84e5fc7986.jpg";

/***/ }),

/***/ "./bg/70.jpg":
/*!*******************!*\
  !*** ./bg/70.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9502b594cf79fa7c6fe6be2eb35dbbc1.jpg";

/***/ }),

/***/ "./bg/71.jpg":
/*!*******************!*\
  !*** ./bg/71.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d8ff5ab35fbf391961e7e38319621b44.jpg";

/***/ }),

/***/ "./bg/72.jpg":
/*!*******************!*\
  !*** ./bg/72.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "12ecdd3e59f6e85db13e4fa529688a80.jpg";

/***/ }),

/***/ "./bg/73.jpg":
/*!*******************!*\
  !*** ./bg/73.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "01ba618c96e8bbcf701d436af4dc1277.jpg";

/***/ }),

/***/ "./bg/74.jpg":
/*!*******************!*\
  !*** ./bg/74.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4c45ca30d5f686bc618e91e62843d353.jpg";

/***/ }),

/***/ "./bg/75.jpg":
/*!*******************!*\
  !*** ./bg/75.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dcd8e4f16201a98b0bb01db7deba742a.jpg";

/***/ }),

/***/ "./bg/76.jpg":
/*!*******************!*\
  !*** ./bg/76.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4e93854c9115af273d9b47cf266689cf.jpg";

/***/ }),

/***/ "./bg/77.jpg":
/*!*******************!*\
  !*** ./bg/77.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8927b33683ea2c6f5907dae3ebbab884.jpg";

/***/ }),

/***/ "./bg/78.jpg":
/*!*******************!*\
  !*** ./bg/78.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4cb4a8a471e6dd7de4b7d61656f7c5fc.jpg";

/***/ }),

/***/ "./bg/79.jpg":
/*!*******************!*\
  !*** ./bg/79.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "54691b003c5e07d54ba1796e0142f6cd.jpg";

/***/ }),

/***/ "./bg/8.jpg":
/*!******************!*\
  !*** ./bg/8.jpg ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "24ea2b35fae5ec77f21df86672bfe05b.jpg";

/***/ }),

/***/ "./bg/80.jpg":
/*!*******************!*\
  !*** ./bg/80.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6044d0b273a1607fda9bf978066a0b65.jpg";

/***/ }),

/***/ "./bg/81.jpg":
/*!*******************!*\
  !*** ./bg/81.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1032848a4ee2f0acf01d1cb42f3824c0.jpg";

/***/ }),

/***/ "./bg/82.jpg":
/*!*******************!*\
  !*** ./bg/82.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "730bf947d417e14336beaf4ced2a5aac.jpg";

/***/ }),

/***/ "./bg/83.jpg":
/*!*******************!*\
  !*** ./bg/83.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6c2e0d7279201457738db57e33e6b5c3.jpg";

/***/ }),

/***/ "./bg/84.jpg":
/*!*******************!*\
  !*** ./bg/84.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "875a6938adb055e05297c250e329af34.jpg";

/***/ }),

/***/ "./bg/85.jpg":
/*!*******************!*\
  !*** ./bg/85.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ecf5f9018d8b56ad233487d1e321e225.jpg";

/***/ }),

/***/ "./bg/86.jpg":
/*!*******************!*\
  !*** ./bg/86.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5c5b5a6daacd2219205ef0b908124693.jpg";

/***/ }),

/***/ "./bg/87.jpg":
/*!*******************!*\
  !*** ./bg/87.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3f426d94634d5957e9d56945b050addc.jpg";

/***/ }),

/***/ "./bg/88.jpg":
/*!*******************!*\
  !*** ./bg/88.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f0f06ab1b92a67f3700f204cda1962e4.jpg";

/***/ }),

/***/ "./bg/89.jpg":
/*!*******************!*\
  !*** ./bg/89.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "332549a785dfb6b5112ac0188f414464.jpg";

/***/ }),

/***/ "./bg/9.jpg":
/*!******************!*\
  !*** ./bg/9.jpg ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "90549a30366f570ff0b5f38726249a5b.jpg";

/***/ }),

/***/ "./bg/90.jpg":
/*!*******************!*\
  !*** ./bg/90.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "37e89e0c8c3234de87d9815f282ee9d8.jpg";

/***/ }),

/***/ "./bg/91.jpg":
/*!*******************!*\
  !*** ./bg/91.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f9c3bd51c038107f4b084d8876518be1.jpg";

/***/ }),

/***/ "./bg/92.jpg":
/*!*******************!*\
  !*** ./bg/92.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8c6843e63f1131b601cd62b28a735566.jpg";

/***/ }),

/***/ "./bg/93.jpg":
/*!*******************!*\
  !*** ./bg/93.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3c195b59d304f42754b7d01c54dce2f0.jpg";

/***/ }),

/***/ "./bg/94.jpg":
/*!*******************!*\
  !*** ./bg/94.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1d07f16b712be41449189a0929a0e35c.jpg";

/***/ }),

/***/ "./bg/95.jpg":
/*!*******************!*\
  !*** ./bg/95.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "81201463c203dbcf80939fe173452159.jpg";

/***/ }),

/***/ "./bg/96.jpg":
/*!*******************!*\
  !*** ./bg/96.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "81201463c203dbcf80939fe173452159.jpg";

/***/ }),

/***/ "./bg/97.jpg":
/*!*******************!*\
  !*** ./bg/97.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fbf60aab0dac26c078c9407938dec221.jpg";

/***/ }),

/***/ "./bg/98.jpg":
/*!*******************!*\
  !*** ./bg/98.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "25832191707fd86365d56e1b2cd3198f.jpg";

/***/ }),

/***/ "./bg/99.jpg":
/*!*******************!*\
  !*** ./bg/99.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "36c1473376a0df1dff280b1938031e4a.jpg";

/***/ }),

/***/ "./images/before.png":
/*!***************************!*\
  !*** ./images/before.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d12d6b9138d60d8496e856960b4ec554.png";

/***/ }),

/***/ "./images/bg.jpg":
/*!***********************!*\
  !*** ./images/bg.jpg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3745f29bc391897325e9e15cb3b74ead.jpg";

/***/ }),

/***/ "./images/next.png":
/*!*************************!*\
  !*** ./images/next.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ff0a1f1a309e82a1f52a508fb5782ea2.png";

/***/ }),

/***/ "./images/pause.png":
/*!**************************!*\
  !*** ./images/pause.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "83fe5dd8f54f2fc2e5ab0244a9fc7539.png";

/***/ }),

/***/ "./images/play.png":
/*!*************************!*\
  !*** ./images/play.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7b0365a48088851bfe199d89290ed1fb.png";

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/style.css":
/*!*************************************************!*\
  !*** ./node_modules/css-loader!./src/style.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\r\n  height: 100%;\r\n  letter-spacing: 3px;\r\n  font-size: 14px;\r\n  margin: 0;\r\n}\r\n.wrapper {\r\n  height: 100%;\r\n  background-image: url(" + escape(__webpack_require__(/*! ../images/bg.jpg */ "./images/bg.jpg")) + ");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  text-align: center;\r\n}\r\n.header {\r\n  padding: 60px 0 0 0;\r\n}\r\n.content-wrapper {\r\n  margin: 20px 35px;\r\n  height: 220px;\r\n  overflow-y: hidden;\r\n}\r\n.content {\r\n  height: 220px;\r\n  overflow-y: scroll;\r\n  margin-right: -8px;\r\n}\r\np {\r\n  margin: 6px 0 ;\r\n}\r\n.footer {\r\n  margin: 30px 35px 0 35px;\r\n}\r\n.controls {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n  -ms-flex-pack: center;\r\n  justify-content: center;\r\n}\r\n.flex-div {\r\n  display: flex;\r\n}\r\n.pre {\r\n  background: url(" + escape(__webpack_require__(/*! ../images/before.png */ "./images/before.png")) + ") no-repeat center center;\r\n}\r\n.next {\r\n  background: url(" + escape(__webpack_require__(/*! ../images/next.png */ "./images/next.png")) + ") no-repeat center center;\r\n}\r\n.controls-icon {\r\n  width: 18px;\r\n  height: 18px;\r\n  background-size: 100% auto;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n  -ms-flex-pack: center;\r\n  justify-content: center;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  margin: auto 0;\r\n}\r\n.play {\r\n  width: 24px;\r\n  height: 24px;\r\n  background: url(" + escape(__webpack_require__(/*! ../images/play.png */ "./images/play.png")) + ") no-repeat center center;\r\n  background-size: 100% auto;\r\n  margin: 0 25%;\r\n}\r\n.pause {\r\n  background: url(" + escape(__webpack_require__(/*! ../images/pause.png */ "./images/pause.png")) + ") no-repeat center center;\r\n}\r\n.time-controls {\r\n  display: flex;\r\n  letter-spacing: 0;\r\n  color: #fff;\r\n  margin: 10px;\r\n}\r\n.timeline {\r\n  background-color: #000;\r\n  height: 1.5px;\r\n  width: 100%;\r\n  margin: 7px 14px;\r\n}\r\n.timeline__active {\r\n  background-color: #fff;\r\n  height: 1.5px;\r\n  width: 0%;\r\n  position: relative;\r\n}\r\n.timeline__active__ball {\r\n  position: absolute;\r\n  right: -10px;\r\n  top: -10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #fff;\r\n  border-radius: 10px;\r\n}\r\n.time {\r\n  font-size: 11px;\r\n  letter-spacing: 0px;\r\n  color: #fff;\r\n}\r\n.bgm-source {\r\n  color: #000;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./res/1.mp3":
/*!*******************!*\
  !*** ./res/1.mp3 ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cfc0b1927bdb654cd2b002c572899a64.mp3";

/***/ }),

/***/ "./res/10.mp3":
/*!********************!*\
  !*** ./res/10.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "646cb29a3c04bff0a89dbc538ffba565.mp3";

/***/ }),

/***/ "./res/100.mp3":
/*!*********************!*\
  !*** ./res/100.mp3 ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "31fe7503d6099b674f4f4f05f62b27fb.mp3";

/***/ }),

/***/ "./res/11.mp3":
/*!********************!*\
  !*** ./res/11.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "390bc7ff10f807999332d0e61f4e30b3.mp3";

/***/ }),

/***/ "./res/12.mp3":
/*!********************!*\
  !*** ./res/12.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5443c7f395c403bf40214d6cd150ad71.mp3";

/***/ }),

/***/ "./res/13.mp3":
/*!********************!*\
  !*** ./res/13.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "561241457030f1ab10ca834a6c8f73ed.mp3";

/***/ }),

/***/ "./res/14.mp3":
/*!********************!*\
  !*** ./res/14.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "48f2680c2b04bd62908f47c51fa1c1e5.mp3";

/***/ }),

/***/ "./res/15.mp3":
/*!********************!*\
  !*** ./res/15.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "126c7b2271374c4168a0b111a38328dd.mp3";

/***/ }),

/***/ "./res/16.mp3":
/*!********************!*\
  !*** ./res/16.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "85e84c18b8a71bae7e96debac9bcd26a.mp3";

/***/ }),

/***/ "./res/17.mp3":
/*!********************!*\
  !*** ./res/17.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "913888790d11afec4be5b5ae44129b30.mp3";

/***/ }),

/***/ "./res/18.mp3":
/*!********************!*\
  !*** ./res/18.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "574e81f61cb7c87502cc23dda9c16b1c.mp3";

/***/ }),

/***/ "./res/19.mp3":
/*!********************!*\
  !*** ./res/19.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "645a85a56cf7631bea4f5b091e0bcf5f.mp3";

/***/ }),

/***/ "./res/2.mp3":
/*!*******************!*\
  !*** ./res/2.mp3 ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "83aac0b62f983dc66a518ddc299f8fe9.mp3";

/***/ }),

/***/ "./res/20.mp3":
/*!********************!*\
  !*** ./res/20.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "141a33f816c4c793b3e5bf2d79c1ddb5.mp3";

/***/ }),

/***/ "./res/21.mp3":
/*!********************!*\
  !*** ./res/21.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "07e36f9a0fd1cc62172a8f4cf5f40aa9.mp3";

/***/ }),

/***/ "./res/22.mp3":
/*!********************!*\
  !*** ./res/22.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d9b43665bf459392077f8f1cd2414237.mp3";

/***/ }),

/***/ "./res/23.mp3":
/*!********************!*\
  !*** ./res/23.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0c719cd4094e51ef4c41ee639374a43a.mp3";

/***/ }),

/***/ "./res/24.mp3":
/*!********************!*\
  !*** ./res/24.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4e6d3473240181480fe83a6ddc3f1450.mp3";

/***/ }),

/***/ "./res/25.mp3":
/*!********************!*\
  !*** ./res/25.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6b94261fa660be2d92b5097a47392f0f.mp3";

/***/ }),

/***/ "./res/26.mp3":
/*!********************!*\
  !*** ./res/26.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5d41d2bb815dd91d6e71935f1456a305.mp3";

/***/ }),

/***/ "./res/27.mp3":
/*!********************!*\
  !*** ./res/27.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f2534b37d2f3fa6c3b57affd0039a2c3.mp3";

/***/ }),

/***/ "./res/28.mp3":
/*!********************!*\
  !*** ./res/28.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5ab49fe676d5a6baaed1537edd584d57.mp3";

/***/ }),

/***/ "./res/29.mp3":
/*!********************!*\
  !*** ./res/29.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f24ab761ee73cd987f25e873aa0096b0.mp3";

/***/ }),

/***/ "./res/3.mp3":
/*!*******************!*\
  !*** ./res/3.mp3 ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0ab03b1f49f718ce44040908e311c1a1.mp3";

/***/ }),

/***/ "./res/30.mp3":
/*!********************!*\
  !*** ./res/30.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1c69e1b54cced860da1df523385fcf7e.mp3";

/***/ }),

/***/ "./res/31.mp3":
/*!********************!*\
  !*** ./res/31.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "167e1d6109a4f66837446f14a8f9d600.mp3";

/***/ }),

/***/ "./res/32.mp3":
/*!********************!*\
  !*** ./res/32.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4d49230968dfceb28a671e6092a75b00.mp3";

/***/ }),

/***/ "./res/33.mp3":
/*!********************!*\
  !*** ./res/33.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aecb4d8164eeabc329c2600f5074169a.mp3";

/***/ }),

/***/ "./res/34.mp3":
/*!********************!*\
  !*** ./res/34.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b2a2bcd2795d20f7957efe717bada4f4.mp3";

/***/ }),

/***/ "./res/35.mp3":
/*!********************!*\
  !*** ./res/35.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5fa765c10cb218ea8c37c8ec61a6db73.mp3";

/***/ }),

/***/ "./res/36.mp3":
/*!********************!*\
  !*** ./res/36.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "86f49465a5534fd1263560cff6b81614.mp3";

/***/ }),

/***/ "./res/37.mp3":
/*!********************!*\
  !*** ./res/37.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a9ddb929a11518a44229937491227c1c.mp3";

/***/ }),

/***/ "./res/38.mp3":
/*!********************!*\
  !*** ./res/38.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "533498b811d6659d053a91b69eaa29ed.mp3";

/***/ }),

/***/ "./res/39.mp3":
/*!********************!*\
  !*** ./res/39.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c987b06d166cc3a20b888d29adf9ae01.mp3";

/***/ }),

/***/ "./res/4.mp3":
/*!*******************!*\
  !*** ./res/4.mp3 ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e6aadd4b8225aa5d4f44e0ec524564b0.mp3";

/***/ }),

/***/ "./res/40.mp3":
/*!********************!*\
  !*** ./res/40.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c0910e98720b4ce0f7d9bc27146387b0.mp3";

/***/ }),

/***/ "./res/41.mp3":
/*!********************!*\
  !*** ./res/41.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4a6cb08b7076d43e8166122e6d37b33b.mp3";

/***/ }),

/***/ "./res/42.mp3":
/*!********************!*\
  !*** ./res/42.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ced1d6eb5a8dfe6e2d373dbb1c3033fb.mp3";

/***/ }),

/***/ "./res/43.mp3":
/*!********************!*\
  !*** ./res/43.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "835076bb3de2a2c7f36cad04cf132b2d.mp3";

/***/ }),

/***/ "./res/44.mp3":
/*!********************!*\
  !*** ./res/44.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7d1ecf84b833c9bdf8b07ec75c2fc2a0.mp3";

/***/ }),

/***/ "./res/45.mp3":
/*!********************!*\
  !*** ./res/45.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3a71b4290276782985a3b9f5286de9b2.mp3";

/***/ }),

/***/ "./res/46.mp3":
/*!********************!*\
  !*** ./res/46.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0d6defcd4742c866df8256fd95edb1a6.mp3";

/***/ }),

/***/ "./res/47.mp3":
/*!********************!*\
  !*** ./res/47.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ca9d34955a76002f6c3b9084d9e8d64d.mp3";

/***/ }),

/***/ "./res/48.mp3":
/*!********************!*\
  !*** ./res/48.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f9c85a9d9ac8d07fcf4f0fdd1a385dff.mp3";

/***/ }),

/***/ "./res/49.mp3":
/*!********************!*\
  !*** ./res/49.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f1861dbfaf68319c94c3cbd216d2a093.mp3";

/***/ }),

/***/ "./res/5.mp3":
/*!*******************!*\
  !*** ./res/5.mp3 ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "13abb130f67bc39d4894e279fa796e2e.mp3";

/***/ }),

/***/ "./res/50.mp3":
/*!********************!*\
  !*** ./res/50.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "40121e87e260e1a7244ab93cf0c118d8.mp3";

/***/ }),

/***/ "./res/51.mp3":
/*!********************!*\
  !*** ./res/51.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b95a7d3631c9f2bc6e5b28e67e8a5923.mp3";

/***/ }),

/***/ "./res/52.mp3":
/*!********************!*\
  !*** ./res/52.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0c7127d762f3035b363c2512d675861f.mp3";

/***/ }),

/***/ "./res/53.mp3":
/*!********************!*\
  !*** ./res/53.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "78d9d60762ee943b27b55fe04550cdb2.mp3";

/***/ }),

/***/ "./res/54.mp3":
/*!********************!*\
  !*** ./res/54.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7d563a03ace02199de40cb3104e100d4.mp3";

/***/ }),

/***/ "./res/55.mp3":
/*!********************!*\
  !*** ./res/55.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "43b2ec67891c43138e95a6a2e8cf979d.mp3";

/***/ }),

/***/ "./res/56.mp3":
/*!********************!*\
  !*** ./res/56.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "91fe8ea46dc35f6952640133ed674520.mp3";

/***/ }),

/***/ "./res/57.mp3":
/*!********************!*\
  !*** ./res/57.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fb63f6098496cfcb2d5b04e0e50af246.mp3";

/***/ }),

/***/ "./res/58.mp3":
/*!********************!*\
  !*** ./res/58.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "578aca67a87c0a14be2533722b77b4f6.mp3";

/***/ }),

/***/ "./res/59.mp3":
/*!********************!*\
  !*** ./res/59.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a25402ec23c82260f08702de9b38d2e4.mp3";

/***/ }),

/***/ "./res/6.mp3":
/*!*******************!*\
  !*** ./res/6.mp3 ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "073d70b397d939475333e3d9b6df6457.mp3";

/***/ }),

/***/ "./res/60.mp3":
/*!********************!*\
  !*** ./res/60.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "caae0b7aef418c63f3f4dc598fdc0258.mp3";

/***/ }),

/***/ "./res/61.mp3":
/*!********************!*\
  !*** ./res/61.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4a7ff4ef7b146ffa6c1e9562c9df498c.mp3";

/***/ }),

/***/ "./res/62.mp3":
/*!********************!*\
  !*** ./res/62.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9b82c7aabc1c5edf54eb932a2395f5de.mp3";

/***/ }),

/***/ "./res/63.mp3":
/*!********************!*\
  !*** ./res/63.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ea223f8979dd30a6f75603d2b1a42d3d.mp3";

/***/ }),

/***/ "./res/64.mp3":
/*!********************!*\
  !*** ./res/64.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b0149a59913d2d8e0146fc6382446047.mp3";

/***/ }),

/***/ "./res/65.mp3":
/*!********************!*\
  !*** ./res/65.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6055de9156c6fe7ab6a0c7ea6ac70d03.mp3";

/***/ }),

/***/ "./res/66.mp3":
/*!********************!*\
  !*** ./res/66.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "608e4be6c80eaf31f567f2823a49706e.mp3";

/***/ }),

/***/ "./res/67.mp3":
/*!********************!*\
  !*** ./res/67.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b01e505cba0b01472a23d59bf93f1524.mp3";

/***/ }),

/***/ "./res/68.mp3":
/*!********************!*\
  !*** ./res/68.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eaaad923dab058fe9082e0d44e23ba55.mp3";

/***/ }),

/***/ "./res/69.mp3":
/*!********************!*\
  !*** ./res/69.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4ab0823f0b0db422d5b0383a5f1c6594.mp3";

/***/ }),

/***/ "./res/7.mp3":
/*!*******************!*\
  !*** ./res/7.mp3 ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ed797fd4488509b2482bc11d8e3d1015.mp3";

/***/ }),

/***/ "./res/70.mp3":
/*!********************!*\
  !*** ./res/70.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bb502d47aea148e5af2d8a0d26fb852e.mp3";

/***/ }),

/***/ "./res/71.mp3":
/*!********************!*\
  !*** ./res/71.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a6083523d0092bb11e35b75d8969048e.mp3";

/***/ }),

/***/ "./res/72.mp3":
/*!********************!*\
  !*** ./res/72.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c07f5507888a6632560d8d8bf20798fa.mp3";

/***/ }),

/***/ "./res/73.mp3":
/*!********************!*\
  !*** ./res/73.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9d7f97edf3b0fc0d3384275327a98488.mp3";

/***/ }),

/***/ "./res/74.mp3":
/*!********************!*\
  !*** ./res/74.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7afb0d2aa3133fe9ffb90aff663ae46c.mp3";

/***/ }),

/***/ "./res/75.mp3":
/*!********************!*\
  !*** ./res/75.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a1cd47adc0b276b24fa37bbf08eaad2e.mp3";

/***/ }),

/***/ "./res/76.mp3":
/*!********************!*\
  !*** ./res/76.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "26bc40c6c4aea4f52891c1087d1aea82.mp3";

/***/ }),

/***/ "./res/77.mp3":
/*!********************!*\
  !*** ./res/77.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eea97487c2f8809da026106ac2e80bd3.mp3";

/***/ }),

/***/ "./res/78.mp3":
/*!********************!*\
  !*** ./res/78.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6aab83927328af3b38e731409b5954f8.mp3";

/***/ }),

/***/ "./res/79.mp3":
/*!********************!*\
  !*** ./res/79.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0e742bb4dafcc20719cf11d05ce588d8.mp3";

/***/ }),

/***/ "./res/8.mp3":
/*!*******************!*\
  !*** ./res/8.mp3 ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8fd8117ef010e0aaf97d636577659cc3.mp3";

/***/ }),

/***/ "./res/80.mp3":
/*!********************!*\
  !*** ./res/80.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6cebd43362f57c1d1bd646de327fbff3.mp3";

/***/ }),

/***/ "./res/81.mp3":
/*!********************!*\
  !*** ./res/81.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "275d42eaf43c67d93ef2fd31166282e5.mp3";

/***/ }),

/***/ "./res/82.mp3":
/*!********************!*\
  !*** ./res/82.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "13af026bec4daca20db634f78a5fae06.mp3";

/***/ }),

/***/ "./res/83.mp3":
/*!********************!*\
  !*** ./res/83.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f5afc799fbe913d010127b2d79c9d159.mp3";

/***/ }),

/***/ "./res/84.mp3":
/*!********************!*\
  !*** ./res/84.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f7d4b68029456a9548b4269307e7ee67.mp3";

/***/ }),

/***/ "./res/85.mp3":
/*!********************!*\
  !*** ./res/85.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d7a542528b56af274560d68892b39dca.mp3";

/***/ }),

/***/ "./res/86.mp3":
/*!********************!*\
  !*** ./res/86.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9f69b4eb4a2bc80911d4836ac64e1d67.mp3";

/***/ }),

/***/ "./res/87.mp3":
/*!********************!*\
  !*** ./res/87.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0d55b09032ea080f8eb0ebf1e1ed794d.mp3";

/***/ }),

/***/ "./res/88.mp3":
/*!********************!*\
  !*** ./res/88.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "01a388c985c17444fd46f40e7900594b.mp3";

/***/ }),

/***/ "./res/89.mp3":
/*!********************!*\
  !*** ./res/89.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6483b12eff5b9da7841c8c55b6e76533.mp3";

/***/ }),

/***/ "./res/9.mp3":
/*!*******************!*\
  !*** ./res/9.mp3 ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8d731fef3d9aef68c47daade6eebf031.mp3";

/***/ }),

/***/ "./res/90.mp3":
/*!********************!*\
  !*** ./res/90.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7750e75281a8ff43e52370e654c90d64.mp3";

/***/ }),

/***/ "./res/91.mp3":
/*!********************!*\
  !*** ./res/91.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7fe4e0ff2e9276f598cd878632f95288.mp3";

/***/ }),

/***/ "./res/92.mp3":
/*!********************!*\
  !*** ./res/92.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e6f540474751baf5dfc3f264c3ec4ea7.mp3";

/***/ }),

/***/ "./res/93.mp3":
/*!********************!*\
  !*** ./res/93.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4a79d38660db0603ef9d2c3af3232205.mp3";

/***/ }),

/***/ "./res/94.mp3":
/*!********************!*\
  !*** ./res/94.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "018109f15c1fe2abc5a820b7796bd1ab.mp3";

/***/ }),

/***/ "./res/95.mp3":
/*!********************!*\
  !*** ./res/95.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fe11a2d98cc7653fcd0b64c4b218adaa.mp3";

/***/ }),

/***/ "./res/96.mp3":
/*!********************!*\
  !*** ./res/96.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4301ed7682a35b27f05fd39501986486.mp3";

/***/ }),

/***/ "./res/97.mp3":
/*!********************!*\
  !*** ./res/97.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a5dd0af28ac0970c755cfae9dba7b8dd.mp3";

/***/ }),

/***/ "./res/98.mp3":
/*!********************!*\
  !*** ./res/98.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b254d1c261a60e1c34ca5e9809f7076f.mp3";

/***/ }),

/***/ "./res/99.mp3":
/*!********************!*\
  !*** ./res/99.mp3 ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e655c557df359b8cc5eaa81f16f3dbbe.mp3";

/***/ }),

/***/ "./src/audios.js":
/*!***********************!*\
  !*** ./src/audios.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var audios = {
  1: __webpack_require__(/*! ../res/1.mp3 */ "./res/1.mp3"),
  2: __webpack_require__(/*! ../res/2.mp3 */ "./res/2.mp3"),
  3: __webpack_require__(/*! ../res/3.mp3 */ "./res/3.mp3"),
  4: __webpack_require__(/*! ../res/4.mp3 */ "./res/4.mp3"),
  5: __webpack_require__(/*! ../res/5.mp3 */ "./res/5.mp3"),
  6: __webpack_require__(/*! ../res/6.mp3 */ "./res/6.mp3"),
  7: __webpack_require__(/*! ../res/7.mp3 */ "./res/7.mp3"),
  8: __webpack_require__(/*! ../res/8.mp3 */ "./res/8.mp3"),
  9: __webpack_require__(/*! ../res/9.mp3 */ "./res/9.mp3"),
  10: __webpack_require__(/*! ../res/10.mp3 */ "./res/10.mp3"),
  11: __webpack_require__(/*! ../res/11.mp3 */ "./res/11.mp3"),
  12: __webpack_require__(/*! ../res/12.mp3 */ "./res/12.mp3"),
  13: __webpack_require__(/*! ../res/13.mp3 */ "./res/13.mp3"),
  14: __webpack_require__(/*! ../res/14.mp3 */ "./res/14.mp3"),
  15: __webpack_require__(/*! ../res/15.mp3 */ "./res/15.mp3"),
  16: __webpack_require__(/*! ../res/16.mp3 */ "./res/16.mp3"),
  17: __webpack_require__(/*! ../res/17.mp3 */ "./res/17.mp3"),
  18: __webpack_require__(/*! ../res/18.mp3 */ "./res/18.mp3"),
  19: __webpack_require__(/*! ../res/19.mp3 */ "./res/19.mp3"),
  20: __webpack_require__(/*! ../res/20.mp3 */ "./res/20.mp3"),
  21: __webpack_require__(/*! ../res/21.mp3 */ "./res/21.mp3"),
  22: __webpack_require__(/*! ../res/22.mp3 */ "./res/22.mp3"),
  23: __webpack_require__(/*! ../res/23.mp3 */ "./res/23.mp3"),
  24: __webpack_require__(/*! ../res/24.mp3 */ "./res/24.mp3"),
  25: __webpack_require__(/*! ../res/25.mp3 */ "./res/25.mp3"),
  26: __webpack_require__(/*! ../res/26.mp3 */ "./res/26.mp3"),
  27: __webpack_require__(/*! ../res/27.mp3 */ "./res/27.mp3"),
  28: __webpack_require__(/*! ../res/28.mp3 */ "./res/28.mp3"),
  29: __webpack_require__(/*! ../res/29.mp3 */ "./res/29.mp3"),
  30: __webpack_require__(/*! ../res/30.mp3 */ "./res/30.mp3"),
  31: __webpack_require__(/*! ../res/31.mp3 */ "./res/31.mp3"),
  32: __webpack_require__(/*! ../res/32.mp3 */ "./res/32.mp3"),
  33: __webpack_require__(/*! ../res/33.mp3 */ "./res/33.mp3"),
  34: __webpack_require__(/*! ../res/34.mp3 */ "./res/34.mp3"),
  35: __webpack_require__(/*! ../res/35.mp3 */ "./res/35.mp3"),
  36: __webpack_require__(/*! ../res/36.mp3 */ "./res/36.mp3"),
  37: __webpack_require__(/*! ../res/37.mp3 */ "./res/37.mp3"),
  38: __webpack_require__(/*! ../res/38.mp3 */ "./res/38.mp3"),
  39: __webpack_require__(/*! ../res/39.mp3 */ "./res/39.mp3"),
  40: __webpack_require__(/*! ../res/40.mp3 */ "./res/40.mp3"),
  41: __webpack_require__(/*! ../res/41.mp3 */ "./res/41.mp3"),
  42: __webpack_require__(/*! ../res/42.mp3 */ "./res/42.mp3"),
  43: __webpack_require__(/*! ../res/43.mp3 */ "./res/43.mp3"),
  44: __webpack_require__(/*! ../res/44.mp3 */ "./res/44.mp3"),
  45: __webpack_require__(/*! ../res/45.mp3 */ "./res/45.mp3"),
  46: __webpack_require__(/*! ../res/46.mp3 */ "./res/46.mp3"),
  47: __webpack_require__(/*! ../res/47.mp3 */ "./res/47.mp3"),
  48: __webpack_require__(/*! ../res/48.mp3 */ "./res/48.mp3"),
  49: __webpack_require__(/*! ../res/49.mp3 */ "./res/49.mp3"),
  50: __webpack_require__(/*! ../res/50.mp3 */ "./res/50.mp3"),
  51: __webpack_require__(/*! ../res/51.mp3 */ "./res/51.mp3"),
  52: __webpack_require__(/*! ../res/52.mp3 */ "./res/52.mp3"),
  53: __webpack_require__(/*! ../res/53.mp3 */ "./res/53.mp3"),
  54: __webpack_require__(/*! ../res/54.mp3 */ "./res/54.mp3"),
  55: __webpack_require__(/*! ../res/55.mp3 */ "./res/55.mp3"),
  56: __webpack_require__(/*! ../res/56.mp3 */ "./res/56.mp3"),
  57: __webpack_require__(/*! ../res/57.mp3 */ "./res/57.mp3"),
  58: __webpack_require__(/*! ../res/58.mp3 */ "./res/58.mp3"),
  59: __webpack_require__(/*! ../res/59.mp3 */ "./res/59.mp3"),
  60: __webpack_require__(/*! ../res/60.mp3 */ "./res/60.mp3"),
  61: __webpack_require__(/*! ../res/61.mp3 */ "./res/61.mp3"),
  62: __webpack_require__(/*! ../res/62.mp3 */ "./res/62.mp3"),
  63: __webpack_require__(/*! ../res/63.mp3 */ "./res/63.mp3"),
  64: __webpack_require__(/*! ../res/64.mp3 */ "./res/64.mp3"),
  65: __webpack_require__(/*! ../res/65.mp3 */ "./res/65.mp3"),
  66: __webpack_require__(/*! ../res/66.mp3 */ "./res/66.mp3"),
  67: __webpack_require__(/*! ../res/67.mp3 */ "./res/67.mp3"),
  68: __webpack_require__(/*! ../res/68.mp3 */ "./res/68.mp3"),
  69: __webpack_require__(/*! ../res/69.mp3 */ "./res/69.mp3"),
  70: __webpack_require__(/*! ../res/70.mp3 */ "./res/70.mp3"),
  71: __webpack_require__(/*! ../res/71.mp3 */ "./res/71.mp3"),
  72: __webpack_require__(/*! ../res/72.mp3 */ "./res/72.mp3"),
  73: __webpack_require__(/*! ../res/73.mp3 */ "./res/73.mp3"),
  74: __webpack_require__(/*! ../res/74.mp3 */ "./res/74.mp3"),
  75: __webpack_require__(/*! ../res/75.mp3 */ "./res/75.mp3"),
  76: __webpack_require__(/*! ../res/76.mp3 */ "./res/76.mp3"),
  77: __webpack_require__(/*! ../res/77.mp3 */ "./res/77.mp3"),
  78: __webpack_require__(/*! ../res/78.mp3 */ "./res/78.mp3"),
  79: __webpack_require__(/*! ../res/79.mp3 */ "./res/79.mp3"),
  80: __webpack_require__(/*! ../res/80.mp3 */ "./res/80.mp3"),
  81: __webpack_require__(/*! ../res/81.mp3 */ "./res/81.mp3"),
  82: __webpack_require__(/*! ../res/82.mp3 */ "./res/82.mp3"),
  83: __webpack_require__(/*! ../res/83.mp3 */ "./res/83.mp3"),
  84: __webpack_require__(/*! ../res/84.mp3 */ "./res/84.mp3"),
  85: __webpack_require__(/*! ../res/85.mp3 */ "./res/85.mp3"),
  86: __webpack_require__(/*! ../res/86.mp3 */ "./res/86.mp3"),
  87: __webpack_require__(/*! ../res/87.mp3 */ "./res/87.mp3"),
  88: __webpack_require__(/*! ../res/88.mp3 */ "./res/88.mp3"),
  89: __webpack_require__(/*! ../res/89.mp3 */ "./res/89.mp3"),
  90: __webpack_require__(/*! ../res/90.mp3 */ "./res/90.mp3"),
  91: __webpack_require__(/*! ../res/91.mp3 */ "./res/91.mp3"),
  92: __webpack_require__(/*! ../res/92.mp3 */ "./res/92.mp3"),
  93: __webpack_require__(/*! ../res/93.mp3 */ "./res/93.mp3"),
  94: __webpack_require__(/*! ../res/94.mp3 */ "./res/94.mp3"),
  95: __webpack_require__(/*! ../res/95.mp3 */ "./res/95.mp3"),
  96: __webpack_require__(/*! ../res/96.mp3 */ "./res/96.mp3"),
  97: __webpack_require__(/*! ../res/97.mp3 */ "./res/97.mp3"),
  98: __webpack_require__(/*! ../res/98.mp3 */ "./res/98.mp3"),
  99: __webpack_require__(/*! ../res/99.mp3 */ "./res/99.mp3"),
  100: __webpack_require__(/*! ../res/100.mp3 */ "./res/100.mp3")
}
module.exports = audios


/***/ }),

/***/ "./src/bgs.js":
/*!********************!*\
  !*** ./src/bgs.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var audios = {
  1: __webpack_require__(/*! ../bg/1.jpg */ "./bg/1.jpg"),
  2: __webpack_require__(/*! ../bg/2.jpg */ "./bg/2.jpg"),
  3: __webpack_require__(/*! ../bg/3.jpg */ "./bg/3.jpg"),
  4: __webpack_require__(/*! ../bg/4.jpg */ "./bg/4.jpg"),
  5: __webpack_require__(/*! ../bg/5.jpg */ "./bg/5.jpg"),
  6: __webpack_require__(/*! ../bg/6.jpg */ "./bg/6.jpg"),
  7: __webpack_require__(/*! ../bg/7.jpg */ "./bg/7.jpg"),
  8: __webpack_require__(/*! ../bg/8.jpg */ "./bg/8.jpg"),
  9: __webpack_require__(/*! ../bg/9.jpg */ "./bg/9.jpg"),
  10: __webpack_require__(/*! ../bg/10.jpg */ "./bg/10.jpg"),
  11: __webpack_require__(/*! ../bg/11.jpg */ "./bg/11.jpg"),
  12: __webpack_require__(/*! ../bg/12.jpg */ "./bg/12.jpg"),
  13: __webpack_require__(/*! ../bg/13.jpg */ "./bg/13.jpg"),
  14: __webpack_require__(/*! ../bg/14.jpg */ "./bg/14.jpg"),
  15: __webpack_require__(/*! ../bg/15.jpg */ "./bg/15.jpg"),
  16: __webpack_require__(/*! ../bg/16.jpg */ "./bg/16.jpg"),
  17: __webpack_require__(/*! ../bg/17.jpg */ "./bg/17.jpg"),
  18: __webpack_require__(/*! ../bg/18.jpg */ "./bg/18.jpg"),
  19: __webpack_require__(/*! ../bg/19.jpg */ "./bg/19.jpg"),
  20: __webpack_require__(/*! ../bg/20.jpg */ "./bg/20.jpg"),
  21: __webpack_require__(/*! ../bg/21.jpg */ "./bg/21.jpg"),
  22: __webpack_require__(/*! ../bg/22.jpg */ "./bg/22.jpg"),
  23: __webpack_require__(/*! ../bg/23.jpg */ "./bg/23.jpg"),
  24: __webpack_require__(/*! ../bg/24.jpg */ "./bg/24.jpg"),
  25: __webpack_require__(/*! ../bg/25.jpg */ "./bg/25.jpg"),
  26: __webpack_require__(/*! ../bg/26.jpg */ "./bg/26.jpg"),
  27: __webpack_require__(/*! ../bg/27.jpg */ "./bg/27.jpg"),
  28: __webpack_require__(/*! ../bg/28.jpg */ "./bg/28.jpg"),
  29: __webpack_require__(/*! ../bg/29.jpg */ "./bg/29.jpg"),
  30: __webpack_require__(/*! ../bg/30.jpg */ "./bg/30.jpg"),
  31: __webpack_require__(/*! ../bg/31.jpg */ "./bg/31.jpg"),
  32: __webpack_require__(/*! ../bg/32.jpg */ "./bg/32.jpg"),
  33: __webpack_require__(/*! ../bg/33.jpg */ "./bg/33.jpg"),
  34: __webpack_require__(/*! ../bg/34.jpg */ "./bg/34.jpg"),
  35: __webpack_require__(/*! ../bg/35.jpg */ "./bg/35.jpg"),
  36: __webpack_require__(/*! ../bg/36.jpg */ "./bg/36.jpg"),
  37: __webpack_require__(/*! ../bg/37.jpg */ "./bg/37.jpg"),
  38: __webpack_require__(/*! ../bg/38.jpg */ "./bg/38.jpg"),
  39: __webpack_require__(/*! ../bg/39.jpg */ "./bg/39.jpg"),
  40: __webpack_require__(/*! ../bg/40.jpg */ "./bg/40.jpg"),
  41: __webpack_require__(/*! ../bg/41.jpg */ "./bg/41.jpg"),
  42: __webpack_require__(/*! ../bg/42.jpg */ "./bg/42.jpg"),
  43: __webpack_require__(/*! ../bg/43.jpg */ "./bg/43.jpg"),
  44: __webpack_require__(/*! ../bg/44.jpg */ "./bg/44.jpg"),
  45: __webpack_require__(/*! ../bg/45.jpg */ "./bg/45.jpg"),
  46: __webpack_require__(/*! ../bg/46.jpg */ "./bg/46.jpg"),
  47: __webpack_require__(/*! ../bg/47.jpg */ "./bg/47.jpg"),
  48: __webpack_require__(/*! ../bg/48.jpg */ "./bg/48.jpg"),
  49: __webpack_require__(/*! ../bg/49.jpg */ "./bg/49.jpg"),
  50: __webpack_require__(/*! ../bg/50.jpg */ "./bg/50.jpg"),
  51: __webpack_require__(/*! ../bg/51.jpg */ "./bg/51.jpg"),
  52: __webpack_require__(/*! ../bg/52.jpg */ "./bg/52.jpg"),
  53: __webpack_require__(/*! ../bg/53.jpg */ "./bg/53.jpg"),
  54: __webpack_require__(/*! ../bg/54.jpg */ "./bg/54.jpg"),
  55: __webpack_require__(/*! ../bg/55.jpg */ "./bg/55.jpg"),
  56: __webpack_require__(/*! ../bg/56.jpg */ "./bg/56.jpg"),
  57: __webpack_require__(/*! ../bg/57.jpg */ "./bg/57.jpg"),
  58: __webpack_require__(/*! ../bg/58.jpg */ "./bg/58.jpg"),
  59: __webpack_require__(/*! ../bg/59.jpg */ "./bg/59.jpg"),
  60: __webpack_require__(/*! ../bg/60.jpg */ "./bg/60.jpg"),
  61: __webpack_require__(/*! ../bg/61.jpg */ "./bg/61.jpg"),
  62: __webpack_require__(/*! ../bg/62.jpg */ "./bg/62.jpg"),
  63: __webpack_require__(/*! ../bg/63.jpg */ "./bg/63.jpg"),
  64: __webpack_require__(/*! ../bg/64.jpg */ "./bg/64.jpg"),
  65: __webpack_require__(/*! ../bg/65.jpg */ "./bg/65.jpg"),
  66: __webpack_require__(/*! ../bg/66.jpg */ "./bg/66.jpg"),
  67: __webpack_require__(/*! ../bg/67.jpg */ "./bg/67.jpg"),
  68: __webpack_require__(/*! ../bg/68.jpg */ "./bg/68.jpg"),
  69: __webpack_require__(/*! ../bg/69.jpg */ "./bg/69.jpg"),
  70: __webpack_require__(/*! ../bg/70.jpg */ "./bg/70.jpg"),
  71: __webpack_require__(/*! ../bg/71.jpg */ "./bg/71.jpg"),
  72: __webpack_require__(/*! ../bg/72.jpg */ "./bg/72.jpg"),
  73: __webpack_require__(/*! ../bg/73.jpg */ "./bg/73.jpg"),
  74: __webpack_require__(/*! ../bg/74.jpg */ "./bg/74.jpg"),
  75: __webpack_require__(/*! ../bg/75.jpg */ "./bg/75.jpg"),
  76: __webpack_require__(/*! ../bg/76.jpg */ "./bg/76.jpg"),
  77: __webpack_require__(/*! ../bg/77.jpg */ "./bg/77.jpg"),
  78: __webpack_require__(/*! ../bg/78.jpg */ "./bg/78.jpg"),
  79: __webpack_require__(/*! ../bg/79.jpg */ "./bg/79.jpg"),
  80: __webpack_require__(/*! ../bg/80.jpg */ "./bg/80.jpg"),
  81: __webpack_require__(/*! ../bg/81.jpg */ "./bg/81.jpg"),
  82: __webpack_require__(/*! ../bg/82.jpg */ "./bg/82.jpg"),
  83: __webpack_require__(/*! ../bg/83.jpg */ "./bg/83.jpg"),
  84: __webpack_require__(/*! ../bg/84.jpg */ "./bg/84.jpg"),
  85: __webpack_require__(/*! ../bg/85.jpg */ "./bg/85.jpg"),
  86: __webpack_require__(/*! ../bg/86.jpg */ "./bg/86.jpg"),
  87: __webpack_require__(/*! ../bg/87.jpg */ "./bg/87.jpg"),
  88: __webpack_require__(/*! ../bg/88.jpg */ "./bg/88.jpg"),
  89: __webpack_require__(/*! ../bg/89.jpg */ "./bg/89.jpg"),
  90: __webpack_require__(/*! ../bg/90.jpg */ "./bg/90.jpg"),
  91: __webpack_require__(/*! ../bg/91.jpg */ "./bg/91.jpg"),
  92: __webpack_require__(/*! ../bg/92.jpg */ "./bg/92.jpg"),
  93: __webpack_require__(/*! ../bg/93.jpg */ "./bg/93.jpg"),
  94: __webpack_require__(/*! ../bg/94.jpg */ "./bg/94.jpg"),
  95: __webpack_require__(/*! ../bg/95.jpg */ "./bg/95.jpg"),
  96: __webpack_require__(/*! ../bg/96.jpg */ "./bg/96.jpg"),
  97: __webpack_require__(/*! ../bg/97.jpg */ "./bg/97.jpg"),
  98: __webpack_require__(/*! ../bg/98.jpg */ "./bg/98.jpg"),
  99: __webpack_require__(/*! ../bg/99.jpg */ "./bg/99.jpg"),
  100: __webpack_require__(/*! ../bg/100.jpg */ "./bg/100.jpg")
}
module.exports = audios


/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// function format(data) {
//   var res = []
//   for (var i = 1; i < 100; i++) {
//     var cItem = data.split(`${i+1}、`)[0].split(`${i}、`)[1]
//     var list = cItem.split('\n')
//     var mdata = {
//       title: '',
//       author: '',
//       content: [],
//       bgm: '',
//       bgmSource: '',
//       reporter: ''
//     }
//     list.forEach(line => {
//       if (line === '') {
//         return
//       }
//       // 标题
//       if (!mdata.title) {
//         return mdata.title = line
//       }
//       // 作者
//       if (!mdata.author) {
//         return mdata.author = line
//       }
//       // 内容 + bgm
//       if (!mdata.bgm) {
//         if (line.indexOf('BGM：') > -1) {
//           return mdata.bgm = line.replace('BGM：', '')
//         } else {
//           return mdata.content.push(line)
//         }
//       }
//       // bgmsource
//       if (!mdata.bgmSource) {
//         if (line.indexOf('BGM来源：') > -1) {
//           return mdata.bgmSource = line.replace('BGM来源：', '')
//         }
//       }
//       //  朗诵
//       if (!mdata.reporter) {
//         if (line.indexOf('朗读者：') > -1) {
//           return mdata.reporter = line.replace('朗读者：', '')
//         }
//       }
//     })
//     res.push(mdata)
//   }
//   console.log(JSON.stringify(res))
// }

/* harmony default export */ __webpack_exports__["default"] = ([{
  "title": "《一握砂》节选",
  "author": "作者：石川啄木",
  "content": ["我所抱的一切思想", "仿佛都是没有钱而引起的；", "秋风吹起来了。"],
  "bgm": "Kevin MacLeod-Gymnopedie No 2",
  "bgmSource": "https://incompetech.com",
  "reporter": "右石先生"
}, {
  "title": "《锈》",
  "author": "作者：弗里德里希·威廉·尼采",
  "content": ["生锈也有必要", "光是锐利也不行", "否则人们常常会说你：", "他太年轻！"],
  "bgm": "Kevin MacLeod-Gymnopedie No 1",
  "bgmSource": "https://incompetech.com",
  "reporter": "右石先生"
}, {
  "title": "《寂寞》",
  "author": "作者：戴望舒",
  "content": ["园中野草渐离离，", "托根于我旧时的脚印，", "给他们披青春的彩衣，", "星下的盘从兹消隐。", "日子过去，寂寞永存，", "寄魂于离离的野草，", "像那些可怜的灵魂，",
          "长得如我一般高。", "我今不复到园中去，", "寂寞已如我一般高，", "我夜坐听风，昼眠听雨，", "悟得月如何缺，天如何老"],
  "bgm": "Alexander Nakarada-Winter",
  "bgmSource": "https://freepd.com",
  "reporter": "Nj宫袭"
}, {
  "title": "《爱眉小札》节选",
  "author": "作者：徐志摩",
  "content": ["爱的出发点，", "不一定是身体，", "但爱到了身体", "就到了顶点。", "厌恶的出发点，", "也不一定是身体，", "但厌恶到了身体，", "也就到了顶点。"],
  "bgm": "Alexander Nakarada-Winter",
  "bgmSource": "https://freepd.com",
  "reporter": "右石先生"
}, {
  "title": "《人间失格》",
  "author": "两则",
  "content": ["作者：太宰治", "早晨，我睁眼醒来翻身下床，", "又变成了原来那个浅薄无知、", "善于伪装的滑稽角色。", "胆小鬼连幸福都会惧怕，", "碰到棉花都会受伤，", "有时也会被幸福所伤。",
          "趁着还没有受伤，", "我想就这样赶快分道扬镳。", "我又放出了惯用的逗笑烟幕弹。", "所谓世人，不就是你吗？"],
  "bgm": "Alexander Nakarada-Winter",
  "bgmSource": "https://freepd.com",
  "reporter": "右石先生"
}, {
  "title": "《而已集·小杂感》节选",
  "author": "作者：鲁迅",
  "content": [],
  "bgm": "Josh Woodward-Autumn",
  "bgmSource": "http://joshwoodward.com/",
  "reporter": "右石先生"
}, {
  "title": "《寂寞的时候》",
  "author": "作者：金子美玲",
  "content": ["我寂寞的时候", "别人不知道", "我寂寞的时候", "朋友们在笑", "我寂寞的时候", "妈妈的脾气最好", "我寂寞的时候", "佛祖也寂寞"],
  "bgm": "Kevin MacLeod-Starry",
  "bgmSource": "https://incompetech.com",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《如梦记》节选",
  "author": "作者：石川啄木",
  "content": ["比人先知道了恋爱的甜味，", "知道了悲哀的我，", "也比人先老了。"],
  "bgm": "雨の夜",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "四夕"
}, {
  "title": "《沙与沫》节选",
  "author": "作者：纪·哈·纪伯伦",
  "content": ["仅仅在昨天，", "我认为我自己只是一个碎片，", "无韵律地在生命的穹苍中颤抖。", "现在我晓得，", "我就是那穹苍，", "一切生命都是在我里面有韵律地转动的碎片。",
          "他们在觉醒的时候对我说：", "“你和你所居住的世界，只不过是无边海洋的无边沙岸上的一粒沙子。”", "在梦里我对他们说：", "“我就是那无边的海洋，大千世界只不过是我的沙岸上的沙粒。”"],
  "bgm": "雨の夜",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "右石先生"
}, {
  "title": "《谁终将声震人间》",
  "author": "作者：弗里德里希·威廉·尼采",
  "content": ["谁终将声震人间，", "必长久深自缄默；", "谁终将点燃闪电，", "必长久如云漂泊。"],
  "bgm": "Josh Woodward-Ships-NoVox",
  "bgmSource": "http：//joshwoodward.com/",
  "reporter": "四夕"
}, {
  "title": "《爱的哲学》",
  "author": "作者：雪莱",
  "content": ["泉水总是向河水汇流，", "河水又汇入海中，", "天宇的轻风永远融有", "一种甜蜜的感情；", "世上哪有什么孤零零？", "万物由于自然律", "都必融会于一种精神。",
          "何以你我却独异？", "你看高山也在吻着碧空，", "波浪也相互拥抱；", "谁曾见花儿彼此不容：", "姊妹把弟兄轻蔑？", "阳光紧紧地拥抱着大地，", "月光在吻着海波：",
          "但这些接吻又有何益，", "要是你不肯吻我？"],
  "bgm": "SundaysChild",
  "bgmSource": "https://audionautix.com/",
  "reporter": "Nj宫袭"
}, {
  "title": "《拜伦致托马斯·摩尔》",
  "author": "作者：乔治·戈登·拜伦",
  "content": ["小艇停在岸边，", "舟楫泊在海里；", "在我临走之前，托姆·摩尔，", "我将双倍的祝福奉献给你！", "爱我的，我报以叹息。", "恨我的，我付之一笑。", "无论头上的苍穹如何不测，",
          "我对任何一种命运都不在意！", "即使海涛围着我咆哮，", "它仍将载行我的舟楫；", "即使沙漠将我困住，", "也仍有泉源让我寻觅。", "即令我挣扎在生命的悬崖，", "泉水决不会枯无一滴；",
          "在我衰微的灵魂离开之前，", "为了你，我将啜饮不已…", "且把那时的泉水当作今日的醇醪，", "我将把这杯奠酒泼洒在地；", "但愿你我安康无恙，", "啊，托姆·摩尔，祝福你！"],
  "bgm": "Josh Woodward-Ships-NoVox",
  "bgmSource": "http：//joshwoodward.com/",
  "reporter": "四夕"
}, {
  "title": "毛姆二则",
  "author": "作者：毛姆",
  "content": ["你要克服的是你的虚荣心", "是你的炫耀欲", "你要对付的是你的时刻想要冲出来想要出风头的小聪明", "我从来都无法得知，", "人们是究竟为什么会爱上另一个人，",
          "我猜也许我们的心上都有一个缺口，", "它是个空洞，呼呼的往灵魂里灌着刺骨的寒风，", "所以我们急切的需要一个正好形状的心来填上它，", "就算你是太阳一样完美的正圆形，", "可是我心里的缺口，",
          "或许却恰恰是个歪歪扭扭的锯齿形，", "所以你填不了。"],
  "bgm": "Kevin MacLeod-Oh Holy Night",
  "bgmSource": "https://incompetech.com",
  "reporter": "右石先生"
}, {
  "title": "《一剪梅·雨打梨花深闭门》",
  "author": "作者：唐寅",
  "content": ["雨打梨花深闭门，忘了青春，误了青春。", "赏心乐事共谁论？花下销魂，月下销魂。", "愁聚眉峰尽日颦，千点啼痕，万点啼痕。", "晓看天色暮看云，行也思君，坐也思君。"],
  "bgm": "hyoutouka",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "汇文"
}, {
  "title": "《木兰词·拟古决绝词柬友》",
  "author": "作者：纳兰性德",
  "content": ["人生若只如初见，何事秋风悲画扇。", "等闲变却故人心，却道故人心易变。", "骊山语罢清宵半，泪雨零铃终不怨。", "何如薄幸锦衣郎，比翼连枝当日愿。"],
  "bgm": "お地蔵様のいる小道",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "汇文"
}, {
  "title": "《如果我不曾见过太阳》",
  "author": "作者：艾米莉.狄金森",
  "content": ["我本可以忍受黑暗", "如果我不曾见过太阳", "然而阳光已使我的荒凉", "成为更新的荒凉"],
  "bgm": "Josh Woodward-Ships-NoVox",
  "bgmSource": "http：//joshwoodward.com/",
  "reporter": "汇文"
}, {
  "title": "《偶然》",
  "author": "作者：徐志摩",
  "content": ["我是天空里的一片云", "偶尔投影在你的波心", "你不必讶异", "更无须欢喜", "在转瞬间消灭了踪影", "你我相逢在黑夜的海上", "你有你的，我有我的，方向", "你记得也好",
          "最好你忘掉", "在这交会时互放的光亮"],
  "bgm": "Kevin MacLeod-Sapphire Isle",
  "bgmSource": "https://incompetech.com",
  "reporter": "四夕"
}, {
  "title": "《飞鸟集》节选",
  "author": "作者：泰戈尔",
  "content": ["When I stand before thee at the day's end,", "thou shalt see my scars and know that",
          "I had my wounds and also my healing.", "长日尽处，我站在你的面前，", "你将看到我的疤痕，", "知道我曾经受伤，也曾经痊愈。"],
  "bgm": "SundaysChild",
  "bgmSource": "https://audionautix.com/",
  "reporter": "右石先生"
}, {
  "title": "《我可否将你比做一个夏日》",
  "author": "作者：莎士比亚",
  "content": ["我是否可以把你比喻成夏天？", "虽然你比夏天更可爱更温和：", "狂风会使五月娇蕾红消香断，", "夏天拥有的时日也转瞬即过；", "有时天空之巨眼目光太炽热，",
          "它金灿灿的面色也常被遮暗；", "而千芳万艳都终将凋零飘落，", "被时运天道只更替剥尽红颜；", "但你永恒的夏天将没有止尽，", "你所拥有的美貌也不会消失，", "死神终难夸口你游荡于死荫，",
          "当你在不朽的诗中永葆盛时；", "只要人类生存，或人有眼睛，", "我的诗就会流传并赋予你生命。"],
  "bgm": "GreenLeaves",
  "bgmSource": "https://audionautix.com/",
  "reporter": "Nj宫袭"
}, {
  "title": "《我见过你哭》",
  "author": "作者：乔治·戈登·拜伦",
  "content": ["我见过你哭", "晶莹的的泪珠", "从蓝眼睛滑落", "像一朵梦中出现的紫罗兰", "滴下清透的露珠", "我见过你笑", "连蓝宝石的光芒", "也因你而失色",
          "它怎能比的上在你凝视的眼中", "闪现的灵活光彩", "就如同夕阳为远方的云朵", "染上绚烂的色彩", "缓缓而来的暮色也不能", "将霞光逐出天外", "你的笑容让沉闷的心灵", "分享纯真的欢乐",
          "这阳光留下的一道光芒", "照亮了心灵上空"],
  "bgm": "雨の夜",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "Nj宫袭"
}, {
  "title": "《醒来觉得甚是爱你》三则",
  "author": "作者：朱生豪",
  "content": ["醒来觉得甚是爱你。", "要是世上只有我们两个人多么好，我一定要把你欺负得哭不出来。", "我想要在茅亭里看雨、假山边看蚂蚁，看蝴蝶恋爱，看蜘蛛结网，看水，看船，看云，",
          "看瀑布，看宋清如甜甜地睡觉。"],
  "bgm": "Rafael Krux-Pond",
  "bgmSource": "https://freepd.com",
  "reporter": "Nj宫袭"
}, {
  "title": "《微言》节选",
  "author": "作者：纪·哈·纪伯伦",
  "content": ["在我今日的悲伤里，", "最为苦涩的是我昨日欢乐的回忆。", "记忆是一种相聚的方式。", "忘却是一种自由的方式。", "除了黑暗之路，人不可能到达黎明。",
          "除非我的心碎了，否则它又怎能被开启？"],
  "bgm": "Kevin MacLeod-Bethlehem",
  "bgmSource": "https://incompetech.com",
  "reporter": "右石先生"
}, {
  "title": "《花儿的眼泪》",
  "author": "作者：金子美玲",
  "content": ["谁都不要告诉", "好吗？", "清晨庭院角落里，", "花儿悄悄掉眼泪的事。", "万一这事说出去了，", "传到蜜蜂耳朵里，", "它会像做了亏心事一样，", "飞回去还蜂蜜的。"],
  "bgm": "Rafael Krux-Lovely Piano Song",
  "bgmSource": "https://freepd.com",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《于我，过去，现在以及未来》",
  "author": "作者：西格里夫·萨松",
  "content": ["于我，过去、现在和未来", "商讨聚会 各执一词 纷扰不息。", "林林总总的欲望，掠取着我的现在", "把“理性”扼杀于它的宝座", "我的爱情纷纷越过未来的藩篱",
          "梦想解放出它们的双脚 舞蹈不停", "于我，穴居人攫取了先知，", "佩戴花环的阿波罗神", "向亚伯拉罕的聋耳唱叹歌吟。", "心有猛虎，细嗅蔷薇。", "审视我的内心吧，亲爱的朋友，你应颤栗，",
          "因为那才是你本来的面目。"],
  "bgm": "Josh Woodward-Ships-NoVox",
  "bgmSource": "http：//joshwoodward.com/",
  "reporter": "右石先生"
}, {
  "title": "《一握砂》节选",
  "author": "作者：石川啄木",
  "content": ["假期的最后一天", "躺在沙滩上让潮水淹没", "等天亮了就爬起来上班", "路旁的狗打了个长长的哈欠", "我也学它的样子", "因为羡慕的缘故"],
  "bgm": "Kevin MacLeod-Gymnopedie No 1",
  "bgmSource": "https://incompetech.com",
  "reporter": "右石先生"
}, {
  "title": "《沙与沫》节选",
  "author": "作者：纪·哈·纪伯伦",
  "content": ["你在白天的太阳前面是自由的，", "在黑夜的星辰前面也是自由的；", "在没有太阳，没有月亮，没有星辰的时候，", "你也是自由的。", "但是你是你所爱的人的奴隶，", "因为你爱了他。",
          "你也是爱你的人的奴隶，", "因为他爱了你。"],
  "bgm": "Kevin MacLeod-Gymnopedie No 2",
  "bgmSource": "https://incompetech.com",
  "reporter": "右石先生"
}, {
  "title": "《你多么可爱》",
  "author": "作者：亚历山大·谢尔盖耶维奇·普希金",
  "content": [" “你最可爱”，我说时来不及思索，", "而思索之后，还是这样说。", "我对她说: 你多么可爱! ，", "心里却在说: 我多么爱你!", "你尽可注视别人的脸，", "但请信任我这颗心。",
          "在你孤独、悲伤的日子，", "请你悄悄地念一念我的名字，", "并且说：有人在思念我，", "在世间我活在一个人的心里。"],
  "bgm": "Rafael Krux-Lovely Piano Song",
  "bgmSource": "https://freepd.com",
  "reporter": "四夕"
}, {
  "title": "《造一个草原》",
  "author": "作者：艾米莉·狄金森",
  "content": ["去造一个草原", "需要一株三叶草和一只蜜蜂，", "一株三叶草和一只蜜蜂，", "还有梦。", "如果蜜蜂不多，", "单靠梦也行。"],
  "bgm": "Kevin MacLeod-Midsummer Sky",
  "bgmSource": "https://incompetech.com",
  "reporter": "Nj宫袭"
}, {
  "title": "夏目漱石二则",
  "author": "作者：夏目漱石",
  "content": ["你不要说我喜欢你 你要说这夏夜的月色真美丽", "此刻烦躁的心情就像用十除以三得出的结果一样，无穷无尽"],
  "bgm": "Kevin MacLeod-Starry",
  "bgmSource": "https://incompetech.com",
  "reporter": "Nj宫袭"
}, {
  "title": "《寂寞人心》",
  "author": "作者：徐志摩",
  "content": ["我的世界太过安静，", "静得可以听见自己心跳的声音。", "心房的血液慢慢流回心室，", "如此这般的轮回。", "聪明的人，喜欢猜心，", "也许猜对了别人的心，", "却也失去了自己的。",
          "傻气的人，喜欢给心，", "也许会被人骗，", "却未必能得到别人的。", "你以为我刀枪不入，", "我以为你百毒不侵。"],
  "bgm": "Rafael Krux-Nostalgic Piano",
  "bgmSource": "https://freepd.com",
  "reporter": "右石先生"
}, {
  "title": "《我曾七次鄙视自己的灵魂》",
  "author": "作者：纪·哈·纪伯伦",
  "content": ["曾有七次我鄙视了自己的灵魂：", "第一次，当它本可进取时，却故作谦卑", "第二次，当它在空虚时，用爱欲来填充", "第三次，在困难和容易之间，它选择了容易",
          "第四次，它犯了错，却借由别人也会犯错来宽慰自己", "第五次，它自由软弱，却把它认为是生命的坚韧", "第六次，当它鄙夷一张丑恶的嘴脸时，却不知那正是自己面具中的一副；",
          "第七次，它侧身于生活的污泥中，虽不甘心，却又畏首畏尾。"],
  "bgm": "Kevin MacLeod-Oh Holy Night",
  "bgmSource": "https://incompetech.com",
  "reporter": "右石先生"
}, {
  "title": "《西江月·世事一场大梦》",
  "author": "作者：苏轼",
  "content": ["世事一场大梦，人生几度秋凉。", "夜来风叶已鸣廊。", "看取眉头鬓上。", "酒贱常愁客少，月明多被云妨。", "中秋谁与共孤光。", "把盏凄然北望。"],
  "bgm": "夏色叙情",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "四夕"
}, {
  "title": "《蒹葭》",
  "author": "作者：佚名",
  "content": ["蒹葭苍苍，白露为霜。所谓伊人，在水一方。溯洄从之，道阻且长。溯游从之，宛在水中央。", "蒹葭萋萋，白露未晞。所谓伊人，在水之湄。溯洄从之，道阻且跻。溯游从之，宛在水中坻。",
          "蒹葭采采，白露未已。所谓伊人，在水之涘。溯洄从之，道阻且右。溯游从之，宛在水中沚。"],
  "bgm": "nezame",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "四夕"
}, {
  "title": "《我是逃跑的那个》",
  "author": "作者：费尔南多·佩索阿",
  "content": ["我是逃跑的那个，", "我出生后", "他们把我锁在我里面", "可我跑了。", "我的灵魂寻找我，", "穿过山岗与山谷，", "我希望我的灵魂", "永远找不到我"],
  "bgm": "Alexander Nakarada-Winter",
  "bgmSource": "https://freepd.com",
  "reporter": "右石先生"
}, {
  "title": "《越人歌》",
  "author": "作者：",
  "content": ["今夕何夕兮搴洲中流。", "今日何日兮得与王子同舟。", "蒙羞被好兮不訾诟耻。", "心几烦而不绝兮得知王子。", "山有木兮木有枝。", "心悦君兮君不知。"],
  "bgm": "桜雲",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《生命是我们拥有的一切》",
  "author": "作者：D.H. 劳伦斯",
  "content": ["活着时，生命是我们拥有的一切；", "如果你不在生命中活着，你是一坨粪。", "工作是生命，生命寓于工作，", "除非你是工资的奴隶。", "当工资的奴隶工作，他将生命搁置一旁，",
          "站在那里像一坨粪。", "人应该拒绝毫无生气地工作。", "人应该拒绝变为一堆堆赚工资的粪。", "人应该彻底拒绝作为工资的奴隶而工作。", "人应该要求为自己工作，做自己的工作，将生命投入其中。",
          "因为如果人的工作里没有生命，他基本上是一堆粪。"],
  "bgm": "アイリッシュの風",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "右石先生"
}, {
  "title": "《1927年春，帕斯捷尔纳克致茨维塔耶娃》",
  "author": "作者：鲍利斯·列奥尼多维奇·帕斯捷尔纳克",
  "content": ["我们多么草率地成为了孤儿。 玛琳娜，", "这是我最后一次呼唤你的名字。", "大雪落在我锈迹斑斑的气管和肺叶上，", "说吧：今夜，我的嗓音是一列被截停的火车，",
          "你的名字是俄罗斯漫长的国境线。", "我想象我们的相遇，在一场隆重的死亡背面", "（玫瑰的矛盾贯穿了他硕大的心）；", "在一九二七年春夜，我们在国境线相遇", "因此错过了",
          "这个呼啸着奔向终点的世界。", "而今夜，你是舞曲，世界是错误。", "当新年的钟声敲响的时候，百合花盛放", "——他以他的死宣告了世纪的终结，", "而不是我们尴尬的生存。",
          "为什么我要对你们沉默？", "当华尔兹舞曲奏起的时候，我在谢幕。", "因为今夜，你是旋转，我是迷失。", "当你转换舞伴的时候，我将在世界的留言册上", "抹去我的名字。", "玛琳娜，国境线的舞会",
          "停止，大雪落向我们各自孤单的命运。", "我歌唱了这寒冷的春天，我歌唱了我们的废墟", "……然后我又将沉默不语。"],
  "bgm": "Rafael Krux-Nostalgic Piano",
  "bgmSource": "https://freepd.com",
  "reporter": "右石先生"
}, {
  "title": "《夏天》",
  "author": "作者：罗伯特.瓦尔泽",
  "content": ["在夏天，我们吃绿豆，", "桃，樱桃和甜瓜。", "在各种意义上都漫长且愉快", "日子发出声响。", "列车经过乡下，", "旗帜悦动在屋顶上。", "在船上多么惬意", "周围是渐长的水面。",
          "山顶上覆盖着雪，", "花散发香味。在湖上", "你可以花所有时间", "享受唱歌的乐趣。", "我不知道什么使我满足，", "你躺在草地上看书", "听到你的四周是", "无力的蚊蝇嗡嗡着。"],
  "bgm": "OneFineDay",
  "bgmSource": "https://audionautix.com/",
  "reporter": "Nj宫袭"
}, {
  "title": "《歌颂智慧之美》",
  "author": "作者：雪莱",
  "content": ["Thy light alone - like mist o'er the mountains driven，",
          "Or music by the night-wind sent through strings of some still instrument，",
          "Or moonlight on a midnight stream.", "唯有你的光辉 能像漫过山岭的薄雾", "像和风从静谧的世界琴弦里带来的夜曲", "像朗照溪水的月色"],
  "bgm": "Kevin MacLeod-Sapphire Isle",
  "bgmSource": "https://incompetech.com",
  "reporter": "汇文"
}, {
  "title": "《雨巷》",
  "author": "作者：戴望舒",
  "content": ["撑着油纸伞，独自", "彷徨在悠长、悠长", "又寂寥的雨巷", "我希望逢着", "一个丁香一样地", "结着愁怨的姑娘", "她是有", "丁香一样的颜色", "丁香一样的芬芳",
          "丁香一样的忧愁", "在雨中哀怨", "哀怨又彷徨", "她彷徨在这寂寥的雨巷", "撑着油纸伞", "像我一样", "像我一样地", "默默彳亍着", "冷漠、凄清，又惆怅", "她默默地走近",
          "走近，又投出", "太息一般的眼光", "她飘过", "像梦一般地", "像梦一般地凄婉迷茫", "像梦中飘过", "一枝丁香地", "我身旁飘过这女郎", "她静默地远了、远了", "到了颓圮的篱墙",
          "走尽这雨巷", "在雨的哀曲里", "消了她的颜色", "散了她的芬芳", "消散了，甚至她的", "太息般的眼光", "丁香般的惆怅", "撑着油纸伞，独自", "彷徨在悠长、悠长", "又寂寥的雨巷",
          "我希望飘过", "一个丁香一样地", "结着愁怨的姑娘"],
  "bgm": "Kevin MacLeod-Gymnopedie No 1",
  "bgmSource": "https://incompetech.com",
  "reporter": "四夕"
}, {
  "title": "《诗经·黍离》",
  "author": "作者：",
  "content": ["彼黍离离，彼稷之苗。行迈靡靡，中心摇摇。知我者，谓我心忧；不知我者，谓我何求。悠悠苍天，此何人哉？",
          "彼黍离离，彼稷之穗。行迈靡靡，中心如醉。知我者，谓我心忧；不知我者，谓我何求。悠悠苍天，此何人哉？",
          "彼黍离离，彼稷之实。行迈靡靡，中心如噎。知我者，谓我心忧；不知我者，谓我何求。悠悠苍天，此何人哉？"],
  "bgm": "omiwatari",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "四夕"
}, {
  "title": "《干草堆》",
  "author": "作者：奥西普·埃米尔耶维奇·曼德尔施塔姆",
  "content": ["我顺手搭起一架木梯", "爬上披散的干草棚顶，", "我在呼吸银河的碎屑，", "我在呼吸宇宙的病症。"],
  "bgm": "Kevin MacLeod-Starry",
  "bgmSource": "https://incompetech.com",
  "reporter": "Nj宫袭"
}, {
  "title": "《心的歌》",
  "author": "作者：卡瓦菲斯",
  "content": ["有了你，我想，一切愉快的事物都朝我微笑，", "在你眼睛的镜子里反映着欢乐。", "留下来，我的光，所有那些只要你看我一眼", "便充满激情地荡漾在我心上、",
          "涌到我唇间的感觉，我还没有告诉你哪怕一半。", "如果你希望，你可以不跟我讲，", "也不要说些爱和倾慕的迷人话。", "这些已足够：有你在近旁，", "我可以告诉你我需要你，可以接触你，",
          "可以呼吸你呼吸的早晨的清新；", "而如果你觉得就连这些也是多余的，", "那么仅仅见到你也已足够！", "希望以后你看到的都是属于自己的幸福，", "努力着的是属于自己幸福的小事。",
          "珍惜着的是靠近你的心。", "而不是别人的。", "关于爱这件小事，", "要和别人一起发生。", "才能抵达那似乎遥不可及的爱的彼岸。"],
  "bgm": "Kevin MacLeod-Midsummer Sky",
  "bgmSource": "https://incompetech.com",
  "reporter": "Nj宫袭"
}, {
  "title": "《云》",
  "author": "作者：金子美玲",
  "content": ["我想变成一朵云。", "又松又软", "飘在蓝天里", "从这头到那头", "看够了风景，", "晚上就跟月亮捉迷藏。", "玩腻了", "就变成雨。", "跟雷公", "结个伴，",
          "一起跳到", "人家的池塘里去。"],
  "bgm": "Rafael Krux-Pond",
  "bgmSource": "https://freepd.com",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《长久沉默后》",
  "author": "作者：威廉·巴特勒·叶芝",
  "content": ["长久沉默后开口：没错，", "别的情人都已疏远或死去，", "不友好的灯光用灯罩挡住，", "不友好的夜晚用窗帘挡住，", "我们谈啊谈啊", "反复谈论艺术和歌这最高主题：",
          "身体衰老智慧方开，年轻时", "我们曾相爱却浑然不知"],
  "bgm": "Josh Woodward-Autumn",
  "bgmSource": "http：//joshwoodward.com/",
  "reporter": "四夕"
}, {
  "title": "《吉檀迦利》节选",
  "author": "作者：泰戈尔",
  "content": ["Eyes are raining for her,", "heart is holding umbrella for her,", "this is love.", "眼睛为她下着雨，",
          "心却为她打着伞，", "这就是爱情。"],
  "bgm": "Kevin MacLeod-Sapphire Isle",
  "bgmSource": "https://incompetech.com",
  "reporter": "右石先生"
}, {
  "title": "《一握砂》节选",
  "author": "作者：石川啄木",
  "content": ["挨了骂", "哇的一声就哭出来的儿童的心情；", "我也想要有那种心情。"],
  "bgm": "Rafael Krux-Nostalgic Piano",
  "bgmSource": "https://freepd.com",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《我想和你一起生活》",
  "author": "作者：玛琳娜·伊万诺夫娜·茨维塔耶娃",
  "content": ["我想和你一起生活在某个小镇，", "共享无尽的黄昏和绵绵不绝的钟声。", "在这个小镇的旅店里——", "古老时钟敲出的微弱响声", "像时间轻轻滴落。",
          "有时候，在黄昏，自顶楼某个房间传来笛声，", "吹笛者倚著窗牖，", "而窗口大朵郁金香。", "此刻你若不爱我，我也不会在意。", "在房间中央，一个磁砖砌成的炉子", "每一块磁砖上画著一幅画",
          "一颗心，一艘帆船，一朵玫瑰", "而自我们唯一的窗户张望", "雪，雪，雪。", "你会躺成我喜欢的姿势", "慵懒，淡然，冷漠", "一两回点燃火柴的刺耳声", "香烟的火苗由旺转弱，",
          "烟的末梢颤抖著，颤抖著", "短小灰白的烟蒂", "连灰烬 你都懒得弹落", "香烟遂飞舞进火中"],
  "bgm": "Rafael Krux-Pond",
  "bgmSource": "https://freepd.com",
  "reporter": "汇文"
}, {
  "title": "《也是微云》",
  "author": "作者：胡适",
  "content": ["也是微云，", "也是微云过后月光明。", "只不见去年得游伴，", "也没有当日的心情。", "不愿勾起相思，", "不敢出门看月。", "偏偏月进窗来，", "害我相思一夜。"],
  "bgm": "Alexander Nakarada-Winter",
  "bgmSource": "https://freepd.com",
  "reporter": "汇文"
}, {
  "title": "《西洲曲》",
  "author": "作者：",
  "content": ["忆梅下西洲，折梅寄江北。", "单衫杏子红，双鬓鸦雏色。", "西洲在何处？两桨桥头渡。", "日暮伯劳飞，风吹乌臼树。", "树下即门前，门中露翠钿。", "开门郎不至，出门采红莲。",
          "采莲南塘秋，莲花过人头。", "低头弄莲子，莲子清如水。", "置莲怀袖中，莲心彻底红。", "忆郎郎不至，仰首望飞鸿。", "鸿飞满西洲，望郎上青楼。", "楼高望不见，尽日栏杆头。",
          "栏杆十二曲，垂手明如玉。", "卷帘天自高，海水摇空绿。", "海水梦悠悠，君愁我亦愁。", "南风知我意，吹梦到西洲。"],
  "bgm": "桜雲",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《你不喜欢的每一天不是你的 》",
  "author": "作者：费尔南多·佩索阿",
  "content": ["你不喜欢的每一天不是你的", "你仅仅度过了它 无论你过着什么样的", "没有喜悦的生活，你都没有生活", "你无须去爱，或者去饮酒或者微笑", "阳光倒映在水坑里",
          "就足够了，如果它令你愉悦", "幸福的人，把他们的欢乐", "放在微小的事物里，永远也不会剥夺", "属于每一天的、天然的财富"],
  "bgm": "yuubenohoshi",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "Nj宫袭"
}, {
  "title": "《诗经》节选",
  "author": "作者：佚名",
  "content": ["正月开岁", "二月绀香", "三月桃良", "四月秀蔓", "五月鸣蜩", "六月精阳", "七月流火", "八月未央", "九月授衣", "十月获稻", "葭月潜龙", "腊月嘉年"],
  "bgm": "古里の風",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《亚当的诅咒》",
  "author": "作者：威廉·巴特勒·叶芝",
  "content": ["有你闺中密友，还有你和我，", "她温柔而美丽，我们在谈诗。", "我说：“一行诗有时要几个小时；", "但若显得不像是即席之作，", "我们的推敲就算是白忙活。", "还不如弓着脊背趴在地面，",
          "去擦厨房地板，或像穷光蛋", "无论刮风下雨都忙着采石；", "要把美的声音组织在一起，", "真比上面的活儿都辛苦，但", "一帮人却吵吵说你是懒汉，", "银行家、教师还有神职人员，",
          "殉道者所谓的世人。”", "***************话刚完，", "那温柔美丽的女人接着说，", "许多人若发现她声音这么", "甜美而柔和，心儿就会狂跳，", "她回答我：“生为女人都知道――",
          "尽管在学校里没人这么说――", "要想美丽我们就得勤劳作。”", "我说：“我断言自从亚当堕落，", "再没有好东西不需勤劳作。", "恋人们曾经认为爱情应当", "充满着高贵殷勤礼仪有方，",
          "他们就长吁短叹引经据典，", "如饱学之士举出先例万千；", "如今这事似乎可算够偷懒。”", "说到了爱情我们沉寂一片；", "白日余烬在我们眼前燃完，", "在那摇曳着蓝绿色的天边，",
          "有一弯残月，消磨得如贝壳", "被时间之水冲刷，当它起落", "群星之间、升降在日日年年。", "我有一个心思只想对你言，", "我想说你很美丽，我也竭力", "用古老而高贵的方式爱过你；",
          "这看起来皆大欢喜，但我们", "内心疲惫却似那中空一轮。"],
  "bgm": "Josh Woodward-Autumn",
  "bgmSource": "http://joshwoodward.com/",
  "reporter": "右石先生"
}, {
  "title": "尼采五则",
  "author": "作者：尼采",
  "content": ["每一个不曾起舞的日子，都是对生命的辜负。", "其实人跟树是一样的，越是向往高处的阳光，它的根就越要伸向黑暗的地底。", "一个人知道自己为什么而活，就可以忍受任何一种生活。",
          "但凡不能杀死你的，最终都会使你更强大。", "当你凝视深渊时，深渊也在凝视着你。"],
  "bgm": "Kevin MacLeod-Bethlehem",
  "bgmSource": "https://incompetech.com",
  "reporter": "四夕"
}, {
  "title": "民国结婚证书誓词",
  "author": "作者：佚名",
  "content": ["两姓联姻，一堂缔约，", "良缘永结，匹配同称。", "看此日桃花灼灼，宜室宜家，", "卜他年瓜瓞绵绵，尔昌尔炽。", "谨以白头之约，书向鸿笺，", "好将红叶之盟，载明鸳谱。", "此证。"],
  "bgm": "古里の風",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "汇文"
}, {
  "title": "《无常》",
  "author": "作者：雪莱",
  "content": ["Whilst skies are blue and bright", "Whilst flowers are gay", "Whilst eyes that change ere night",
          "Make glad the day", "Whilst yet the calm hours creep", "Dream thou-and from thy sleep",
          "Then wake to weep", "趁天空还明媚，蔚蓝", "趁着花朵鲜艳", "趁眼睛看来一切美好", "趁夜幕还没降临", "呵 趁现在时流还平静", "做你的梦吧 且憩息", "等醒来再哭泣"],
  "bgm": "Rafael Krux-Nostalgic Piano",
  "bgmSource": "https://freepd.com",
  "reporter": "右石先生"
}, {
  "title": "《我曾经爱过你》",
  "author": "作者：亚历山大·谢尔盖耶维奇·普希金",
  "content": ["我曾经爱过你：爱情，也许", "在我的心灵里还没有完全消亡，", "但愿它不会再去打扰你，", "我也不想再让你难过悲伤。", "我曾经默默无语地、毫无指望地爱过你，",
          "我既忍受着羞怯，又忍受着嫉妒的折磨，", "我曾经那样真诚、那样温柔地爱过你，", "但愿上帝保佑你，", "另一个人也会像我一样地爱你"],
  "bgm": "Josh Woodward-Ships-NoVox",
  "bgmSource": "http：//joshwoodward.com/",
  "reporter": "汇文"
}, {
  "title": "《惶然录》节选",
  "author": "作者：费尔南多·佩索阿",
  "content": [],
  "bgm": "Rafael Krux-Pond",
  "bgmSource": "https://freepd.com",
  "reporter": "Nj羽凡"
}, {
  "title": "《周南·关雎》",
  "author": "作者：",
  "content": ["关关雎鸠，在河之洲。窈窕淑女，君子好逑。", "参差荇菜，左右流之。窈窕淑女，寤寐求之。", "求之不得，寤寐思服。悠哉悠哉，辗转反侧。", "参差荇菜，左右采之。窈窕淑女，琴瑟友之。",
          "参差荇菜，左右芼之。窈窕淑女，钟鼓乐之。"],
  "bgm": "弥生の空に",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "四夕"
}, {
  "title": "《一剪梅·舟过吴江》",
  "author": "作者：蒋捷",
  "content": ["一片春愁待酒浇。江上舟摇。楼上帘招。秋娘度与泰娘娇。风又飘飘。雨又萧萧。", "何日归家洗客袍。银字笙调。心字香烧。流光容易把人抛。红了樱桃。绿了芭蕉。"],
  "bgm": "風紋",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《飞鸟集》节选",
  "author": "作者：泰戈尔",
  "content": ["The water in a vessel is sparkling;", "the water in the sea is dark.",
          "The small truth has words that are clear;", "the great truth has great silence.", "一杯水是清澈的，",
          "而海水却是黑色的。", "就像小的道理可以说明，", "真正的大道理却是沉默的。"],
  "bgm": "Kevin MacLeod-Bethlehem",
  "bgmSource": "https://incompetech.com",
  "reporter": "右石先生"
}, {
  "title": "《鹊桥仙·纤云弄巧》",
  "author": "作者：秦观",
  "content": ["纤云弄巧，飞星传恨，银汉迢迢暗度。金风玉露一相逢，便胜却人间无数。", "柔情似水，佳期如梦，忍顾鹊桥归路？两情若是久长时，又岂在朝朝暮暮。"],
  "bgm": "kamunabi",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "汇文"
}, {
  "title": "《你是人间四月天》",
  "author": "作者：林徽因",
  "content": ["我说你是人间的四月天；", "笑响点亮了四面风；", "轻灵在春的光艳中交舞着变。", "你是四月早天里的云烟，", "黄昏吹着风的软，", "星子在无意中闪，", "细雨点洒在花前。",
          "那轻，那娉婷，你是，", "鲜妍百花的冠冕你戴着，", "你是天真，庄严，", "你是夜夜的月圆。", "雪化后那片鹅黄，你像；", "新鲜初放芽的绿，你是；", "柔嫩喜悦，",
          "水光浮动着你梦期待中白莲。", "你是一树一树的花开，", "是燕在梁间呢喃，", "——你是爱，是暖，是希望，", "你是人间的四月天！"],
  "bgm": "Rafael Krux-Pond",
  "bgmSource": "https://freepd.com",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《未选择的路》",
  "author": "作者：罗伯特·弗罗斯特",
  "content": ["黄树林里分出两条路，", "可惜我不能同时涉足，", "我在那路口久久伫立，", "我向着一条路极目望去，", "直到它消失在丛林深处。", "但我却选择了另外一条路，",
          "它荒草萋萋，十分幽寂，", "显得更诱人，更美丽；", "虽然在这条小路上，", "很少留下旅人的足迹。", "那天清晨落叶满地，", "两条路都未经脚印污染。", "啊，留下一条路等改日再见!",
          "但我知道路径延绵无尽头,", "恐怕我难以再回返。", "也许多少年后在某个地方，", "我将轻声叹息将往事回顾：", "一片树林里分出两条路，", "而我选择了人迹更少的一条，",
          "从此决定了我一生的道路。"],
  "bgm": "OnWaldenPond",
  "bgmSource": "https://audionautix.com/",
  "reporter": "右石先生"
}, {
  "title": "《红豆 》",
  "author": "作者：闻一多",
  "content": ["相思是不做声的蚊子", "偷偷地咬了一口", "陡然痛了一下", "以后便是一阵的奇痒"],
  "bgm": "Alexander Nakarada-Winter",
  "bgmSource": "https://freepd.com",
  "reporter": "四夕"
}, {
  "title": "《南歌子词二首 / 新添声杨柳枝词》",
  "author": "作者：温庭筠",
  "content": ["一尺深红胜曲尘，天生旧物不如新。", "合欢桃核终堪恨，里许元来别有人。", "井底点灯深烛伊，共郎长行莫围棋。", "玲珑骰子安红豆，入骨相思知不知。"],
  "bgm": "nezame",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "汇文"
}, {
  "title": "《像这样细细地听》",
  "author": "作者：玛琳娜·伊万诺夫娜·茨维塔耶娃",
  "content": ["像这样细细地听", "像这样细细地听，", "如河口凝神倾听自己的源头。", "像这样深深地嗅一朵小花，", "直到知觉化为乌有。", "像这样，在蔚蓝的空气里", "溶进了无底的渴望。",
          "像这样，在床单的蔚蓝里", "孩子遥望记忆的远方。", "像这样．莲花般的少年", "默默体验血的温泉", "就像这样，与爱情相恋", "就像这样，落入深渊。"],
  "bgm": "GreenLeaves",
  "bgmSource": "https://audionautix.com/",
  "reporter": "汇文"
}, {
  "title": "《飞鸟集》节选",
  "author": "作者：泰戈尔",
  "content": ["After the night I burned all memory,", "my dream becomes transparent,",
          "as I trashed all yesterdays,", "my step becomes lighter.", "有一个夜晚我烧毁了所有的记忆，", "从此我的梦就透明了；",
          "有一个早晨我扔掉了所有的昨天，", "从此我的脚步就轻盈了。"],
  "bgm": "SundaysChild",
  "bgmSource": "https://audionautix.com/",
  "reporter": "右石先生"
}, {
  "title": "《铜官窑瓷器题诗二十一首》",
  "author": "作者：佚名",
  "content": ["君生我未生,我生君已老。", "君恨我生迟,我恨君生早。", "君生我未生,我生君已老。", "恨不生同时,日日与君好。", "我生君未生,君生我已老。", "我离君天涯,君隔我海角。",
          "我生君未生,君生我已老。", "化蝶去寻花,夜夜栖芳草。"],
  "bgm": "風紋",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "汇文"
}, {
  "title": "王尔德四则",
  "author": "作者：王尔德",
  "content": ["We are all in the gutter, but some of us are looking at the stars.", "我们都在阴沟里，但仍有人仰望星空。",
          "When I was young, I thought money was everything. Now I'm old enough to know that it is true.",
          "年轻时我以为钱就是一切，现在老了才知道确实如此。", "Be yourself, everyone else is already taken.", "做你自己，因为别人都有人做了。",
          "To love oneself is the beginning of a lifelong romance.", "爱自己是终身浪漫的开始。"],
  "bgm": "Kevin MacLeod-Bethlehem",
  "bgmSource": "https://incompetech.com",
  "reporter": "右石先生"
}, {
  "title": "歌德三则",
  "author": "作者：歌德",
  "content": ["If who is the game of life，", "he accomplishes nothing；", "Who cannot control himself，",
          "he is always a slave。", "谁若游戏人生，他就一事无成；谁不能主宰自己，便永远是一个奴隶。",
          "If I love you, what business is it of yours?", "我爱你，与你无关。",
          "\"Do you know why you close your eyes when you kiss?\"",
          "\"because they shine too much on each other.\"", "“知道为什么亲吻的时候要闭着双眼吗？”", "“因为他们彼此都太闪耀。”"],
  "bgm": "Kevin MacLeod-Oh Holy Night",
  "bgmSource": "https://incompetech.com",
  "reporter": "右石先生"
}, {
  "title": "《梦与诗》",
  "author": "作者：胡适",
  "content": ["都是平常经验，", "都是平常影象，", "偶然涌到梦中来，", "变幻出多少新奇花样!", "都是平常情感，", "都是平常言语，", "偶然碰着个诗人，", "变幻出多少新奇诗句!",
          "醉过才知酒浓，", "爱过才知情重——", "你不能做我的诗，", "正如我不能做你的梦。"],
  "bgm": "Kevin MacLeod-Sapphire Isle",
  "bgmSource": "https://incompetech.com",
  "reporter": "Nj宫袭"
}, {
  "title": "《向着明亮那方》",
  "author": "作者：金子美玲",
  "content": ["向着明亮那方。", "向着明亮那方。", "哪怕一片叶子", "也要向着日光洒下的方向。", "灌木丛中的小草啊。", "向着明亮那方", "向着明亮那方。", "哪怕烧焦了翅膀",
          "也要飞向灯火闪烁的方向。", "寒夜里的飞虫啊。", "向着明亮那方", "向着明亮那方。", "哪怕只是分寸的宽敞", "也要向着阳光照射的方向。", "住在都会的孩子们啊。"],
  "bgm": "SundaysChild",
  "bgmSource": "https://audionautix.com/",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《补偿》",
  "author": "为每一个狂喜的瞬间",
  "content": ["我们必须偿以痛苦至极", "刺痛和颤抖，和狂喜成正比", "为每一个可爱的时刻", "必偿以多年的付出", "辛酸争夺的半分八厘", "和浸满泪水的钱箱", "作者：艾米莉·狄金森"],
  "bgm": "Kevin MacLeod-Oh Holy Night",
  "bgmSource": "https://incompetech.com",
  "reporter": "汇文"
}, {
  "title": "《清平调》",
  "author": "作者：李白",
  "content": ["云想衣裳花想容， 春风拂槛露华浓。", "若非群玉山头见， 会向瑶台月下逢。", "一枝红艳露凝香， 云雨巫山枉断肠。", "借问汉宫谁得似？ 可怜飞燕倚新妆。",
          "名花倾国两相欢， 长得君王带笑看。", "解释春风无限恨， 沉香亭北倚阑干。"],
  "bgm": "kamunabi",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "汇文"
}, {
  "title": "《当你老了》",
  "author": "作者：威廉·巴特勒·叶芝",
  "content": ["当你老了，头白了，睡意昏沉，", "炉火旁打盹，请取下这部诗歌，", "慢慢读，回想你过去眼神的柔和，", "回想它们昔日浓重的阴影；", "多少人爱你青春欢畅的时辰，",
          "爱慕你的美丽，假意或真心，", "只有一个人爱你那朝圣者的灵魂，", "爱你衰老了的脸上痛苦的皱纹；", "垂下头来，在红光闪耀的炉子旁，", "凄然地轻轻诉说那爱情的消逝，",
          "在头顶的山上它缓缓踱着步子，", "在一群星星中间隐藏着脸庞。"],
  "bgm": "Josh Woodward-Autumn",
  "bgmSource": "http：//joshwoodward.com/",
  "reporter": "汇文"
}, {
  "title": "《记得旧时好》",
  "author": "作者：陈白沙",
  "content": [],
  "bgm": "懐かしい風情",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "Nj宫袭"
}, {
  "title": "《人月圆·山中书事》",
  "author": "作者：张可久",
  "content": ["兴亡千古繁华梦，诗眼倦天涯。", "孔林乔木，吴宫蔓草，楚庙寒鸦。", "数间茅舍，藏书万卷，投老村家。", "山中何事？松花酿酒，春水煎茶。"],
  "bgm": "nezame",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "汇文"
}, {
  "title": "《将进酒·君不见》",
  "author": "作者：李白",
  "content": ["君不见，黄河之水天上来，奔流到海不复回。", "君不见，高堂明镜悲白发，朝如青丝暮成雪。", "人生得意须尽欢，莫使金樽空对月。", "天生我材必有用，千金散尽还复来。",
          "烹羊宰牛且为乐，会须一饮三百杯。", "岑夫子，丹丘生，将进酒，杯莫停。", "与君歌一曲，请君为我倾耳听。", "钟鼓馔玉不足贵，但愿长醉不复醒。", "古来圣贤皆寂寞，惟有饮者留其名。",
          "陈王昔时宴平乐，斗酒十千恣欢谑。", "主人何为言少钱，径须沽取对君酌。", "五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。"],
  "bgm": "omiwatari",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "四夕"
}, {
  "title": "《我的书本去的地方》",
  "author": "作者：威廉·巴特勒·叶芝",
  "content": ["我所学到的所有语言，", "我所写出的所有语言，", "必然要展翅，不倦的飞翔，", "绝不会在飞行中停一停。", "一直飞到你悲伤的心所在的地方，", "在夜色中向着你歌唱，",
          "远方，河水正在流淌，", "乌云密布，或是星光灿烂。"],
  "bgm": "Rafael Krux-Pond",
  "bgmSource": "https://freepd.com",
  "reporter": "Nj宫袭"
}, {
  "title": "《周南·桃夭》",
  "author": "作者：佚名",
  "content": ["桃之夭夭，灼灼其华。之子于归，宜其室家。", "桃之夭夭，有蕡其实。之子于归，宜其家室。", "桃之夭夭，其叶蓁蓁。之子于归，宜其家人。"],
  "bgm": "nezame",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《惶然录》节选",
  "author": "作者：费尔南多·佩索阿",
  "content": ["像一支没有完成的琴弓，", "灵魂从来不能存在于它的自身。", "伟大的景观统统属于我们已经亲历过的一个明天。", "而永不间断的交谈已经是一个失败。", "谁曾猜出生活就像这个样子？",
          "我找到自己之日，就是失落自己之时。", "如果我相信，我就必然怀疑。", "我紧紧抓住一些东西的时候，我的手里必定空无一物。", "我去睡觉就如我正在出去散步。", "生活毕竟是一次伟大的失眠，",
          "我们做过或想过的一切，都处在清澈的半醒状态之中。", "如果我能够入睡，我会快乐。", "至少我现在思考的时候我就睡不成。", "夜晚是一个巨大的重压，", "压得我在寂静的覆盖之下的梦里自我窒息。",
          "我有一种灵魂的反胃症。"],
  "bgm": "Kevin MacLeod-Bethlehem",
  "bgmSource": "https://incompetech.com",
  "reporter": "右石先生"
}, {
  "title": "《失窃的孩子》",
  "author": "作者：威廉·巴特勒·叶芝",
  "content": ["走吧", "人间的孩子", "走向那荒野和河流", "与一个精灵手牵手", "因为这个世界的悲伤太深了 而你不能懂"],
  "bgm": "Alexander Nakarada-Winter",
  "bgmSource": "https://freepd.com",
  "reporter": "汇文"
}, {
  "title": "《爱》",
  "author": "作者：托马斯.布朗",
  "content": ["我爱你，不是因为你是一个怎样的人，", "而是因为我喜欢与你在一起时的感觉。", "没有人值得你流泪，", "值得让你这么做的人不会让你哭泣。", "失去某人，最糟糕的莫过于，",
          "他近在身旁，却犹如远在天边。", "纵然伤心，也不要悉眉不展，", "因为你不知是谁会爱上你的笑容。", "对于世界而言，你是一个人；", "但是对于某人，你是他的整个世界。",
          "不要为那些不愿在你身上花费时间的人而浪费你的时间。", "爱你的人如果没有按你所希望的方式爱你，", "那并不代表他们没有全心全意地爱你。", "不要着急，最好的总会在最不经意的时候出现。",
          "在遇到梦中人之前，上天也许会安排我们先遇到别人；", "在我们终于遇见心仪的人时，便应当心存感激。", "不要因为结束而哭泣，微笑吧，为你的曾经拥有。", "“生命是束纯净的火焰，",
          "我们依靠自己内心看不见的太阳而存在。”"],
  "bgm": "Rafael Krux-Lovely Piano Song",
  "bgmSource": "https://freepd.com",
  "reporter": "右石先生"
}, {
  "title": "《季候》",
  "author": "作者：邵洵美",
  "content": ["初见你时你给我你的心，", "里面是一个春天的早晨。", "再见你时你给我你的话，", "说不出的是炽烈的火夏。", "三次见你你给我你的手，", "里面藏着个叶落的深秋。",
          "最后见你是我做的短梦，", "梦里有你还有一群冬风。"],
  "bgm": "Alexander Nakarada-Winter",
  "bgmSource": "https://freepd.com",
  "reporter": "Nj宫袭"
}, {
  "title": "《烦忧》",
  "author": "作者：戴望舒",
  "content": ["说是寂寞的秋的清愁，", "说是辽远的海的相思。", "假如有人问我的烦忧，", "我不敢说出你的名字。", "我不敢说出你的名字，", "假如有人问我的烦忧：", "说是辽远的海的相思，",
          "说是寂寞的秋的清愁。"],
  "bgm": "Alexander Nakarada-Winter",
  "bgmSource": "https://freepd.com",
  "reporter": "四夕"
}, {
  "title": "《凤求凰》",
  "author": "作者：司马相如",
  "content": ["有美人兮，见之不忘，一日不见兮，思之如狂。", "凤飞遨翔兮，四海求凰，无奈佳人兮，不在东墙。", "将琴代语兮，聊写衷肠，愿言配德兮，携手相将。",
          "何时见许兮，慰我旁徨，不得于飞兮，使我沦亡，使我沦亡。"],
  "bgm": "今昔ノ絆",
  "bgmSource": "http://www.rengoku-teien.com/",
  "reporter": "四夕"
}, {
  "title": "《折桂令·春情》",
  "author": "作者：徐再思",
  "content": ["平生不会相思，才会相思，便害相思。", "身似浮云，心如飞絮，", "气若游丝，空一缕馀香在此，", "盼千金游子何之。", "证候来时，正是何时？", "灯半昏时，月半明时。"],
  "bgm": "nezame",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《飞鸟集》节选",
  "author": "作者：泰戈尔",
  "content": ["我的心是旷野和鸟", "已经在你的眼睛里找到了天空", "你的眼睛是早上的摇篮", "你的眼睛是繁星的王国", "我的歌声消失在你眼睛的深处", "就让我翱翔在那一片天空里吧",
          "就让我翱翔在那一片孤寂无垠的天空里", "就让我排开它朵朵的云彩", "在它的阳光里展翅飞翔"],
  "bgm": "Rafael Krux-Lovely Piano Song",
  "bgmSource": "https://freepd.com",
  "reporter": "Nj宫袭"
}, {
  "title": "《双城记》节选",
  "author": "作者：狄更斯",
  "content": ["这是一个最好的时代，这是一个最坏的时代；", "这是一个智慧的年代，这是一个愚蠢的年代；", "这是一个信仰的时期，这是一个怀疑的时期；", "这是一个光明的季节，这是一个黑暗的季节；",
          "这是希望之春，这是失望之冬；", "人们面前应有尽有，人们面前一无所有；", "人们正踏上天堂之路，人们正走向地狱之门。"],
  "bgm": "Alexander Nakarada-Winter",
  "bgmSource": "https://freepd.com",
  "reporter": "四夕"
}, {
  "title": "《临江仙·送钱穆父》",
  "author": "作者：苏轼",
  "content": ["一别都门三改火，", "天涯踏尽红尘。", "依然一笑作春温。", "无波真古井，有节是秋筠。", "惆怅孤帆连夜发，", "送行淡月微云。", "尊前不用翠眉颦。",
          "人生如逆旅，我亦是行人。"],
  "bgm": "恋獄の彩",
  "bgmSource": "http://www.rengoku-teien.com/",
  "reporter": "四夕"
}, {
  "title": "《浣溪沙·细雨斜风作晓寒》",
  "author": "作者：苏轼",
  "content": ["细雨斜风作晓寒，", "淡烟疏柳媚晴滩。", "入淮清洛渐漫漫。", "雪沫乳花浮午盏，", "蓼茸蒿笋试春盘。", "人间有味是清欢。"],
  "bgm": "今昔ノ絆",
  "bgmSource": "http://www.rengoku-teien.com/",
  "reporter": "Nj宫袭"
}, {
  "title": "《题龙阳县青草湖》",
  "author": "作者：唐珙",
  "content": ["西风吹老洞庭波，", "一夜湘君白发多。", "醉后不知天在水，", "满船清梦压星河。"],
  "bgm": "hyoutouka",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine//hakuu_amabine/",
  "reporter": "四夕"
}, {
  "title": "《长相思·九月西风兴》",
  "author": "作者：白居易",
  "content": ["九月西风兴，月冷露华凝。", "思君秋夜长，一夜魂九升。", "二月东风来，草拆花心开。", "思君春日迟，一日肠九回。", "妾住洛桥北，君住洛桥南。", "十五即相识，今年二十三。",
          "有如女萝草，生在松之侧。", "蔓短枝苦高，萦回上不得。", "人言人有愿，愿至天必成。", "愿作远方兽，步步比肩行。", "愿作深山木，枝枝连理生。"],
  "bgm": "hyoutouka",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "汇文"
}, {
  "title": "《颂古五十五首其一》",
  "author": "作者：无门慧开禅师",
  "content": ["春有百花秋有月，", "夏有凉风冬有雪。", "若无闲事挂心头，", "便是一年好时节。"],
  "bgm": "懐かしい風情",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "四夕"
}, {
  "title": "《简卢陟》",
  "author": "作者：韦应物",
  "content": ["可怜白雪曲，未遇知音人。", "恓惶戎旅下，蹉跎淮海滨。", "涧树含朝雨，山鸟哢馀春。", "我有一瓢酒，可以慰风尘。"],
  "bgm": "hyoutouka",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "四夕"
}, {
  "title": "《汴河阻冻》",
  "author": "作者：杜牧",
  "content": ["千里长河初冻时，", "玉珂瑶佩响参差。", "浮生恰似冰底水，", "日夜东流人不知。"],
  "bgm": "恋獄の彩",
  "bgmSource": "http://www.rengoku-teien.com/",
  "reporter": "Nj宫袭"
}, {
  "title": "《长命女·春日宴》",
  "author": "作者：冯延己",
  "content": ["春日宴，", "绿酒一杯歌一遍。", "再拜陈三愿：", "一愿郎君千岁，", "二愿妾身常健，", "三愿如同梁上燕，岁岁长相见。"],
  "bgm": "懐かしい風情",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《先秦·卿云歌》",
  "author": "作者：佚名",
  "content": ["卿云烂兮，糺缦缦兮。", "日月光华，旦复旦兮。", "明明上天，烂然星陈。", "日月光华，弘于一人。", "日月有常，星辰有行。", "四时从经，万姓允诚。", "于予论乐，配天之灵。",
          "迁于圣贤，莫不咸听。", "鼚乎鼓之，轩乎舞之。", "菁华已竭，褰裳去之。"],
  "bgm": "弥生の空に",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "汇文"
}, {
  "title": "《蝶恋花·阅尽天涯离别苦》",
  "author": "作者：王国维",
  "content": ["阅尽天涯离别苦，", "不道归来，零落花如许。", "不道归来，零落花如许。", "花底相看无一语，", "绿窗春与天俱莫。", "待把相思灯下诉，", "一缕新欢，旧恨千千缕。",
          "最是人间留不住，", "朱颜辞镜花辞树。"],
  "bgm": "恋獄の彩",
  "bgmSource": "http://www.rengoku-teien.com/",
  "reporter": "右石先生"
}]);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _bgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bgs */ "./src/bgs.js");
/* harmony import */ var _bgs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bgs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _audios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audios */ "./src/audios.js");
/* harmony import */ var _audios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_audios__WEBPACK_IMPORTED_MODULE_3__);





var idx = location.search.replace('?id=', '')
var data = _data__WEBPACK_IMPORTED_MODULE_1__["default"][idx]
var bg = _bgs__WEBPACK_IMPORTED_MODULE_2___default.a[idx]
document.getElementById('wrapper').style.backgroundImage = `url('./${bg}')`

function renderTitle(val) {
  var title = document.getElementsByClassName('title')
  title[0] && (title[0].innerText = val)
  document.title = val
}

function renderAuthor(val) {
  var author = document.getElementsByClassName('author')
  author[0] && (author[0].innerText = val)
}

function renderContent(vals) {
  var content = document.getElementsByClassName('content')
  content = content && content[0]
  vals.forEach(function(val) {
    var line = document.createElement('p')
    line.innerText = val
    if (content.append) {
      content.append(line)
    } else {
      content.appendChild(line)
    }
  })
}

function renderBgm(val) {
  var bgm = document.getElementsByClassName('bgm')
  bgm[0] && (bgm[0].innerText = val)
}

function renderBgmSource(val) {
  document.getElementById('bgmSourceFix').innerText = 'BGM来源：'
  var bgmSource = document.getElementsByClassName('bgm-source')
  bgmSource[0] && (bgmSource[0].innerText = val) && (bgmSource[0].href = val)
}

function renderReporter(val) {
  var reporter = document.getElementsByClassName('reporter')
  reporter[0] && (reporter[0].innerText = val)
}

renderTitle(data.title)
renderAuthor(data.author)
renderContent(data.content)
renderBgm(`BGM：${data.bgm}`)
renderBgmSource(`${data.bgmSource}`)
renderReporter(`朗诵者：${data.reporter}`)
function createAudio() {
  var audio = new Audio()
  var _id = parseInt(idx) + 1
  audio.src = _audios__WEBPACK_IMPORTED_MODULE_3___default.a[_id]
  document.body.appendChild(audio)
  return audio
}
// audio controls
var audioDom = createAudio()
var playButton = document.getElementById('play')
var nextButton = document.getElementById('next')
var beforeButton = document.getElementById('before')
var playTime = document.getElementById('playTime')
var allTime = document.getElementById('allTime')
var progress = document.getElementById('progress')
// 滚动相关
var content = document.getElementById('content')
var clientHeight = content.clientHeight
var scrollHeight = content.scrollHeight
function audioTransTime(time) {
  if (!time > 0) {
    return '00:00'
  }
  if (time === Infinity) {
    return '--:--'
  }
  var duration = parseInt(time)
  let minute = parseInt(duration / 60)
  let sec = duration % 60 + ''
  var isM0 = ':'
  if (minute === 0) {
    minute = '00'
  } else if (minute < 10) {
    minute = '0' + minute
  }
  if (sec.length === 1) {
    sec = '0' + sec
  }
  return minute + isM0 + sec
}

function updateTime(time, duration) {
  // 更新时间
  playTime && (playTime.innerText = audioTransTime(time))
  const durationFormat = audioTransTime(duration)
  allTime && (allTime.innerText !== durationFormat) && (allTime.innerText = durationFormat)
  // 更新progress
  progress && (progress.style.width = parseInt(time * 100 / duration) + '%')
}

function updateScroll(time, duration) {
  content.scrollTop = (time / duration) * (scrollHeight - clientHeight)
}

function audioReset() {
  playButton.classList.remove('pause')
  updateTime(audioDom.currentTime, audioDom.duration)
  updateScroll(audioDom.currentTime, audioDom.duration)
}

function audioInit() {
  if (audioDom.duration) {
    allTime && (allTime.innerText = audioTransTime(audioDom.duration))
  }
  // 监听音频播放时间并更新进度条
  var updateProgress = function() {
    if (audioDom.currentTime > 0 && audioDom.duration !== Infinity) {
      // this.loadingClass = false
      updateTime(audioDom.currentTime, audioDom.duration)
      updateScroll(audioDom.currentTime, audioDom.duration)
    }
  }
  // 监听播放完成事件
  var audioEnded = function() {
    audioDom.currentTime = 0
    audioReset()
  }
  // 处理播放错误
  var handleError = e => {
    var errorCode = e && e.currentTarget && e.currentTarget.error.code
    switch (errorCode) {
      case 2:
        console.log('MEDIA_ERR_NETWORK')
        break
      case 3:
        console.log('MEDIA_ERR_DECODE')
        break
      case 4:
        console.log('MEDIA_ERR_SRC_NOT_SUPPORTED')
        break
      default:
        console.log('MEDIA_ERR_UNKNOWN')
    }
    audioEnded()
  }
  // 播放
  var handlePlay = function() {
    if (audioDom.paused) {
      audioDom.play && audioDom.play()
      playButton.classList.add('pause')
    } else {
      audioDom.pause && audioDom.pause()
      playButton.classList.remove('pause')
    }
  }

  // 是否支持 onended 监听播放完成事件
  _addEventListener(audioDom, 'ended', audioEnded)
  // error
  _addEventListener(audioDom, 'error', handleError)
  // 是否支持 ontimeupdate 监听更新事件
  _addEventListener(audioDom, 'timeupdate', updateProgress)
  // 点击播放
  _addEventListener(playButton, 'click', handlePlay)
}

function _addEventListener(elem, type, func) {
  if (elem['_is' + type]) {
    return
  }
  if (elem['on' + type] === undefined) {
    elem.addEventListener(type, func, false)
  } else {
    elem['on' + type] = func
  }
  elem['_is' + type] = true
}

audioInit()

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmcvMS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMTAuanBnIiwid2VicGFjazovLy8uL2JnLzEwMC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMTEuanBnIiwid2VicGFjazovLy8uL2JnLzEyLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8xMy5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMTQuanBnIiwid2VicGFjazovLy8uL2JnLzE1LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8xNi5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMTcuanBnIiwid2VicGFjazovLy8uL2JnLzE4LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8xOS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMi5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMjAuanBnIiwid2VicGFjazovLy8uL2JnLzIxLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8yMi5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMjMuanBnIiwid2VicGFjazovLy8uL2JnLzI0LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8yNS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMjYuanBnIiwid2VicGFjazovLy8uL2JnLzI3LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8yOC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMjkuanBnIiwid2VicGFjazovLy8uL2JnLzMuanBnIiwid2VicGFjazovLy8uL2JnLzMwLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8zMS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMzIuanBnIiwid2VicGFjazovLy8uL2JnLzMzLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8zNC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMzUuanBnIiwid2VicGFjazovLy8uL2JnLzM2LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8zNy5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMzguanBnIiwid2VicGFjazovLy8uL2JnLzM5LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy80LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy80MC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNDEuanBnIiwid2VicGFjazovLy8uL2JnLzQyLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy80My5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNDQuanBnIiwid2VicGFjazovLy8uL2JnLzQ1LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy80Ni5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNDcuanBnIiwid2VicGFjazovLy8uL2JnLzQ4LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy80OS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNTAuanBnIiwid2VicGFjazovLy8uL2JnLzUxLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy81Mi5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNTMuanBnIiwid2VicGFjazovLy8uL2JnLzU0LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy81NS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNTYuanBnIiwid2VicGFjazovLy8uL2JnLzU3LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy81OC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNTkuanBnIiwid2VicGFjazovLy8uL2JnLzYuanBnIiwid2VicGFjazovLy8uL2JnLzYwLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy82MS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNjIuanBnIiwid2VicGFjazovLy8uL2JnLzYzLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy82NC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNjUuanBnIiwid2VicGFjazovLy8uL2JnLzY2LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy82Ny5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNjguanBnIiwid2VicGFjazovLy8uL2JnLzY5LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy83LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy83MC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNzEuanBnIiwid2VicGFjazovLy8uL2JnLzcyLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy83My5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNzQuanBnIiwid2VicGFjazovLy8uL2JnLzc1LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy83Ni5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNzcuanBnIiwid2VicGFjazovLy8uL2JnLzc4LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy83OS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvOC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvODAuanBnIiwid2VicGFjazovLy8uL2JnLzgxLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy84Mi5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvODMuanBnIiwid2VicGFjazovLy8uL2JnLzg0LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy84NS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvODYuanBnIiwid2VicGFjazovLy8uL2JnLzg3LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy84OC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvODkuanBnIiwid2VicGFjazovLy8uL2JnLzkuanBnIiwid2VicGFjazovLy8uL2JnLzkwLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy85MS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvOTIuanBnIiwid2VicGFjazovLy8uL2JnLzkzLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy85NC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvOTUuanBnIiwid2VicGFjazovLy8uL2JnLzk2LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy85Ny5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvOTguanBnIiwid2VicGFjazovLy8uL2JnLzk5LmpwZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvYmVmb3JlLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvYmcuanBnIiwid2VicGFjazovLy8uL2ltYWdlcy9uZXh0LnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvcGF1c2UucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9wbGF5LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9yZXMvMS5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzEwLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvMTAwLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvMTEubXAzIiwid2VicGFjazovLy8uL3Jlcy8xMi5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzEzLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvMTQubXAzIiwid2VicGFjazovLy8uL3Jlcy8xNS5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzE2Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvMTcubXAzIiwid2VicGFjazovLy8uL3Jlcy8xOC5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzE5Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvMi5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzIwLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvMjEubXAzIiwid2VicGFjazovLy8uL3Jlcy8yMi5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzIzLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvMjQubXAzIiwid2VicGFjazovLy8uL3Jlcy8yNS5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzI2Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvMjcubXAzIiwid2VicGFjazovLy8uL3Jlcy8yOC5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzI5Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvMy5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzMwLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvMzEubXAzIiwid2VicGFjazovLy8uL3Jlcy8zMi5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzMzLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvMzQubXAzIiwid2VicGFjazovLy8uL3Jlcy8zNS5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzM2Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvMzcubXAzIiwid2VicGFjazovLy8uL3Jlcy8zOC5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzM5Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNC5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzQwLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNDEubXAzIiwid2VicGFjazovLy8uL3Jlcy80Mi5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzQzLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNDQubXAzIiwid2VicGFjazovLy8uL3Jlcy80NS5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzQ2Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNDcubXAzIiwid2VicGFjazovLy8uL3Jlcy80OC5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzQ5Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNS5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzUwLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNTEubXAzIiwid2VicGFjazovLy8uL3Jlcy81Mi5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzUzLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNTQubXAzIiwid2VicGFjazovLy8uL3Jlcy81NS5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzU2Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNTcubXAzIiwid2VicGFjazovLy8uL3Jlcy81OC5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzU5Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNi5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzYwLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNjEubXAzIiwid2VicGFjazovLy8uL3Jlcy82Mi5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzYzLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNjQubXAzIiwid2VicGFjazovLy8uL3Jlcy82NS5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzY2Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNjcubXAzIiwid2VicGFjazovLy8uL3Jlcy82OC5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzY5Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNy5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzcwLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNzEubXAzIiwid2VicGFjazovLy8uL3Jlcy83Mi5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzczLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNzQubXAzIiwid2VicGFjazovLy8uL3Jlcy83NS5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzc2Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNzcubXAzIiwid2VicGFjazovLy8uL3Jlcy83OC5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzc5Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvOC5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzgwLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvODEubXAzIiwid2VicGFjazovLy8uL3Jlcy84Mi5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzgzLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvODQubXAzIiwid2VicGFjazovLy8uL3Jlcy84NS5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzg2Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvODcubXAzIiwid2VicGFjazovLy8uL3Jlcy84OC5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzg5Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvOS5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzkwLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvOTEubXAzIiwid2VicGFjazovLy8uL3Jlcy85Mi5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzkzLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvOTQubXAzIiwid2VicGFjazovLy8uL3Jlcy85NS5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzk2Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvOTcubXAzIiwid2VicGFjazovLy8uL3Jlcy85OC5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzk5Lm1wMyIsIndlYnBhY2s6Ly8vLi9zcmMvYXVkaW9zLmpzIiwid2VicGFjazovLy8uL3NyYy9iZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/NzUyOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsYUFBYSxtQkFBTyxDQUFDLGlHQUE4QztBQUNuRSwyQkFBMkIsbUJBQU8sQ0FBQyw2RkFBNEM7QUFDL0U7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLGVBQWUsbUJBQW1CLDBCQUEwQixzQkFBc0IsZ0JBQWdCLEtBQUssY0FBYyxtQkFBbUIsdUNBQXVDLG1CQUFPLENBQUMseUNBQWtCLFFBQVEsNkJBQTZCLG1DQUFtQyx5QkFBeUIsS0FBSyxhQUFhLDBCQUEwQixLQUFLLHNCQUFzQix3QkFBd0Isb0JBQW9CLHlCQUF5QixLQUFLLGNBQWMsb0JBQW9CLHlCQUF5Qix5QkFBeUIsS0FBSyxPQUFPLHFCQUFxQixLQUFLLGFBQWEsK0JBQStCLEtBQUssZUFBZSwyQkFBMkIsMkJBQTJCLG9CQUFvQiwrQkFBK0IsNEJBQTRCLDhCQUE4QixLQUFLLGVBQWUsb0JBQW9CLEtBQUssVUFBVSxpQ0FBaUMsbUJBQU8sQ0FBQyxpREFBc0IsZ0NBQWdDLEtBQUssV0FBVyxpQ0FBaUMsbUJBQU8sQ0FBQyw2Q0FBb0IsZ0NBQWdDLEtBQUssb0JBQW9CLGtCQUFrQixtQkFBbUIsaUNBQWlDLDJCQUEyQiwyQkFBMkIsb0JBQW9CLCtCQUErQiw0QkFBNEIsOEJBQThCLGdDQUFnQyw2QkFBNkIsMEJBQTBCLHNCQUFzQixxQkFBcUIsS0FBSyxXQUFXLGtCQUFrQixtQkFBbUIsaUNBQWlDLG1CQUFPLENBQUMsNkNBQW9CLGdDQUFnQyxpQ0FBaUMsb0JBQW9CLEtBQUssWUFBWSxpQ0FBaUMsbUJBQU8sQ0FBQywrQ0FBcUIsZ0NBQWdDLEtBQUssb0JBQW9CLG9CQUFvQix3QkFBd0Isa0JBQWtCLG1CQUFtQixLQUFLLGVBQWUsNkJBQTZCLG9CQUFvQixrQkFBa0IsdUJBQXVCLEtBQUssdUJBQXVCLDZCQUE2QixvQkFBb0IsZ0JBQWdCLHlCQUF5QixLQUFLLDZCQUE2Qix5QkFBeUIsbUJBQW1CLGlCQUFpQixrQkFBa0IsbUJBQW1CLDZCQUE2QiwwQkFBMEIsS0FBSyxXQUFXLHNCQUFzQiwwQkFBMEIsa0JBQWtCLEtBQUssaUJBQWlCLGtCQUFrQixLQUFLOztBQUVwM0U7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0JBQWdCO0FBQ25ELElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGNBQWM7O0FBRWxFO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyx1REFBUTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDO0FBQ0EsS0FBSyxtQkFBTyxDQUFDLGlDQUFjO0FBQzNCLEtBQUssbUJBQU8sQ0FBQyxpQ0FBYztBQUMzQixLQUFLLG1CQUFPLENBQUMsaUNBQWM7QUFDM0IsS0FBSyxtQkFBTyxDQUFDLGlDQUFjO0FBQzNCLEtBQUssbUJBQU8sQ0FBQyxpQ0FBYztBQUMzQixLQUFLLG1CQUFPLENBQUMsaUNBQWM7QUFDM0IsS0FBSyxtQkFBTyxDQUFDLGlDQUFjO0FBQzNCLEtBQUssbUJBQU8sQ0FBQyxpQ0FBYztBQUMzQixLQUFLLG1CQUFPLENBQUMsaUNBQWM7QUFDM0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsT0FBTyxtQkFBTyxDQUFDLHFDQUFnQjtBQUMvQjtBQUNBOzs7Ozs7Ozs7Ozs7QUN0R0E7QUFDQSxLQUFLLG1CQUFPLENBQUMsK0JBQWE7QUFDMUIsS0FBSyxtQkFBTyxDQUFDLCtCQUFhO0FBQzFCLEtBQUssbUJBQU8sQ0FBQywrQkFBYTtBQUMxQixLQUFLLG1CQUFPLENBQUMsK0JBQWE7QUFDMUIsS0FBSyxtQkFBTyxDQUFDLCtCQUFhO0FBQzFCLEtBQUssbUJBQU8sQ0FBQywrQkFBYTtBQUMxQixLQUFLLG1CQUFPLENBQUMsK0JBQWE7QUFDMUIsS0FBSyxtQkFBTyxDQUFDLCtCQUFhO0FBQzFCLEtBQUssbUJBQU8sQ0FBQywrQkFBYTtBQUMxQixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixPQUFPLG1CQUFPLENBQUMsbUNBQWU7QUFDOUI7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RHQTtBQUFBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QixpQ0FBaUMsSUFBSSxnQkFBZ0IsRUFBRTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xELG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDeDFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9CO0FBQ007QUFDSDtBQUNNOztBQUU3QjtBQUNBLFdBQVcsNkNBQUs7QUFDaEIsU0FBUywyQ0FBRztBQUNaLHFFQUFxRSxHQUFHOztBQUV4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCLG1CQUFtQixlQUFlO0FBQ2xDLHNCQUFzQixjQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGNBQWMsOENBQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFc7Ozs7Ozs7Ozs7OztBQ3hMQSxjQUFjLG1CQUFPLENBQUMsbUdBQW1EOztBQUV6RSw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsbUdBQWdEOztBQUVyRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4MWRjZTViYjYyMzdkNWUwNGZjOTNmOWM0MmRmNTNkZS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiOWUxYzFlNDFiMzU2M2RkMGJkMTBmNmRhMzlmY2U0ZS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzNmMxNDczMzc2YTBkZjFkZmYyODBiMTkzODAzMWU0YS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0ODRjOGI2NGVlOTQyNzMxMTczNDQ3YWU0N2I3ZGRmMy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxMmQ5ZjU1Y2M4NTMyMDBlNGQ0YmU4ZjZiYWVlZWJkMS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2ODU0Mzg1ZjZmZDU5NmU3Y2ZmNzU2N2Y4ZWUxMDU4NS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkOGE2ODhkYTUwNDQyMjUyZmJhYWYzMzhmNWYyNTkzYi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzODYxOWEzNmExNGRiYjNiZWRkOTJhY2NmYzI5MDU3Mi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkYWE0YzM0MWNhOTdhNmU3ZDgzY2MzNzAwZjM2MGIwNS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3NDljZDE0MTg0ZTI4NWJhYzlhOTNhMDYzYWI2MTdkZi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwNWUwODE4NzBjMGJkOWQ2NDM2YTllNGE1Mjc0NDZkMS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5NDc4ZjkzMTVhZGVkN2I4OGE1NjcyOTMyYWZlMjU3NC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0N2U5NWRlYzc4OGFiN2MyNWMyMWY2MjYxYjc1OGUzNy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzMjJiNDEyNzgzZDMwMWRiNWJkZjcyNDZjMmFmZTliMy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3YWZlYWI5MTNlYjZhNDZhYzQ4ZGZmNmJhMzE1YTJjMC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiNDQ0NWQwZWJkNGM4NmQ3OGY2MWM2OWVlMDA4YWMwNy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmMzg1M2FiZWQ1ZDZhNDVkYTI4M2JkNDU1NWM2M2MxOS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0ZWU5NmVlZWJjYzZlMjIwOGZlNzY3ZjE4YWRmNThiNi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4NGQyNDBlZTBkYmU1MWQ0NDRiNTdjOWFjMGI3NDdiZi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5NTNhMWZlNDc4ZDk1NDVjZTNjNmU5YjNlNTk3NTJjMS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1YWVmZjE5MGI2Nzg5MTE0OTQ2NWMzOWUxMDBkODg5Yy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxYTlkNTJkY2ViZTYwNGJkMGI1YWEwOGYwNmMzMjM3Ni5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4ZWMzNWFmNTIyOWVlOTMyYmM0MjNmZWRhY2E4YjM3NS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3Nzc2NDZmNWQ4OGRkZTBmNmRlOGY1OTZhMjU0YzhlYi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzZmUxNzQ2ZjhmOGVmZDI2MGU5MDBmMTYwZjhmYTQ4NS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzOTczOGFhM2RiZmJiNzc5MmY5NTJlYjVhNDUxMzI4YS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4ZjMxNDRjNTI2ODZmZjAzMzE4ZTUyODk3OTQwZTBlMy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwNGUxMzU0MGExYTAxMTVjNjE1ZTA3Zjc5MDNmNDFkMC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwNTYwMGUzZDQ5ZTQyNzA3ZTA0ZjE4Yzk3MWRiZmFjZi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1MjhlNTBhNmQ5OGYwNDdiNTIwOTYxMmYwYjg0M2FkNy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlMjY4NGYxZWI5MGYyZTI2MzcwOTYyNDY1MGE1NjllYi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzNDcxOGQ4NGI0YWIxNGZkOWZlZjQwODhhNjgyMmYzZi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwNTU0NmQwM2FhY2I3NGY5MWVkZjYzMGQ2NGNkOWYzOS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzNTAxMmVlNzhiMDI3ZDYwZDUyZGQ1ZjY1YWNiNDAyNC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyNjMxYzgxYTNlZWRjYzEwYTE0MTFjMGI0MDYxZTUxNC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlYWEwY2QzMzE0ODVlZWMwMjU5YzUzN2MxOGY1ODg3MC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2NGEzNzRlNTEzYjRhYmM0OTc4NzAyMzBlNTc1ODdkNC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjNDM0ZjY1MzI2MWJkZWUxYmMyMzYwNzEzODA5ODRkOS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlODg3Zjg4MjcxYmY1YWEzYWM0MDc5YjNjN2ZjZGYzZi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhZWYxNjRhYjcwN2ZkNGM2ZjM2YjM4NDE3ZDRlNmNmNC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2NTRmYWM3YjllZTIxZWI2ZDc4ZjYyMjM4NTM5NmI3MC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2MmQxNjQzMGU4MTcxMWEyMTBiNzY2YzkwMDM3MjZiNi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1ZmY4ZGY0ODJhNjZjM2FlODQ5NDk0ZDEyYzMzMDY5ZS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzODRjMTM2YjBmMTkyZGMwNTZiZjBlMDQ0ZDljOTRlMy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlOTAxN2NlNDU0MTVjMDM0NjdkYzFlNjNjNGYyYjI5ZS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4NDIwNDRhNTYyYTA4NWIyNGI3ZjA0YjJiMTE0ODM3My5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjY2UwOTY3MWJlMGQ1OTc5Mjc2Y2ZlNjNiZmIzYTRhMy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwYjVmMzg5ZjBlMzdhNTQyMDA3N2IxY2Y5NDg2OTNiZC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwMmJlZjkyMTYyMWVjOTAxYzNiZDU1MTZmYWY0MTk0Zi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhMDg5MGE0NTJlOTE1NDc3N2UxODZjYjRmYmQ5MjliNi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4M2JlMmE1OGUwNzEwNWNkYmNjNDMzNDFlMGFjYzFlZi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkYjA0ZjE0NTNiMTE3NzhjN2RlOTk3ZDQwMzJiMTA5My5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1NjBkOTU1ZjQyNTQ5NmZmODM2YzRiOTI1ZjhmNmY3Ny5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiZjcxMTE2ZjIwY2Q2YjFlNmNjMTM0ZTNiYTcxZTM1YS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlNTY1MWViMmUzNGMyNDQ4NWQ5MGUwNDEyMjRlNjE3My5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjMjMwMWRjOGNhYTg0YTcyYWI4OGUzYmRkZDYyNTZiMS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjMDE4YmJjMjc4ZTlkOTI3NjI0MWNhZGJiZWRkODMwZC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmNzdhMGIyNmQ0YjE0MjZkMWQwMGQwY2MwMDE1ZWU5ZC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5MTA5OGMzYzJiMGEwYzRiOGJiOThhOGQ3ZjI3ZWRlZi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmNjcyM2IxMjA5YWNiMTUyNzMyYzNmZDI3NzE2MmU4ZC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkN2JiMGU3NjNjN2VkYmExZjBkMGU5YzExNDVjMWY0Yi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmZmYyMjdhNmQ3NTEyMGFlMDNhOGY5MGM0YmQ2OGI0Ny5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkMzQxMDJiMTFjYzVhNjdhM2I2MThjOWUxMWNlOTJjZS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5M2NlZjU3NmIzODhhYWJhNzM1MTBjNGE5NjdmMzI4MC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyZjc0MjJkYmUzYWRjOGIxOTI1ZGZhNjc0YTM1YjY3OS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzM2QyZjg2MTNjOWM2MzhmYjc0ZDAyZjQ1NTVlZjhiMS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1ZmZlYThiMWU3YThkOWEzMTMwMThmZjIwNWZiZmJmYy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkZTZiNDY5NDNlMjdkNzNmODg4MDlmODRlNWZjNzk4Ni5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5NTAyYjU5NGNmNzlmYTdjNmZlNmJlMmViMzVkYmJjMS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkOGZmNWFiMzVmYmYzOTE5NjFlN2UzODMxOTYyMWI0NC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxMmVjZGQzZTU5ZjZlODVkYjEzZTRmYTUyOTY4OGE4MC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwMWJhNjE4Yzk2ZThiYmNmNzAxZDQzNmFmNGRjMTI3Ny5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0YzQ1Y2EzMGQ1ZjY4NmJjNjE4ZTkxZTYyODQzZDM1My5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkY2Q4ZTRmMTYyMDFhOThiMGJiMDFkYjdkZWJhNzQyYS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0ZTkzODU0YzkxMTVhZjI3M2Q5YjQ3Y2YyNjY2ODljZi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4OTI3YjMzNjgzZWEyYzZmNTkwN2RhZTNlYmJhYjg4NC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0Y2I0YThhNDcxZTZkZDdkZTRiN2Q2MTY1NmY3YzVmYy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1NDY5MWIwMDNjNWUwN2Q1NGJhMTc5NmUwMTQyZjZjZC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyNGVhMmIzNWZhZTVlYzc3ZjIxZGY4NjY3MmJmZTA1Yi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2MDQ0ZDBiMjczYTE2MDdmZGE5YmY5NzgwNjZhMGI2NS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxMDMyODQ4YTRlZTJmMGFjZjAxZDFjYjQyZjM4MjRjMC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3MzBiZjk0N2Q0MTdlMTQzMzZiZWFmNGNlZDJhNWFhYy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2YzJlMGQ3Mjc5MjAxNDU3NzM4ZGI1N2UzM2U2YjVjMy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4NzVhNjkzOGFkYjA1NWUwNTI5N2MyNTBlMzI5YWYzNC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlY2Y1ZjkwMThkOGI1NmFkMjMzNDg3ZDFlMzIxZTIyNS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1YzViNWE2ZGFhY2QyMjE5MjA1ZWYwYjkwODEyNDY5My5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzZjQyNmQ5NDYzNGQ1OTU3ZTlkNTY5NDViMDUwYWRkYy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmMGYwNmFiMWI5MmE2N2YzNzAwZjIwNGNkYTE5NjJlNC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzMzI1NDlhNzg1ZGZiNmI1MTEyYWMwMTg4ZjQxNDQ2NC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5MDU0OWEzMDM2NmY1NzBmZjBiNWYzODcyNjI0OWE1Yi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzN2U4OWUwYzhjMzIzNGRlODdkOTgxNWYyODJlZTlkOC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmOWMzYmQ1MWMwMzgxMDdmNGIwODRkODg3NjUxOGJlMS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4YzY4NDNlNjNmMTEzMWI2MDFjZDYyYjI4YTczNTU2Ni5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzYzE5NWI1OWQzMDRmNDI3NTRiN2QwMWM1NGRjZTJmMC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxZDA3ZjE2YjcxMmJlNDE0NDkxODlhMDkyOWEwZTM1Yy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4MTIwMTQ2M2MyMDNkYmNmODA5MzlmZTE3MzQ1MjE1OS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4MTIwMTQ2M2MyMDNkYmNmODA5MzlmZTE3MzQ1MjE1OS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYmY2MGFhYjBkYWMyNmMwNzhjOTQwNzkzOGRlYzIyMS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyNTgzMjE5MTcwN2ZkODYzNjVkNTZlMWIyY2QzMTk4Zi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzNmMxNDczMzc2YTBkZjFkZmYyODBiMTkzODAzMWU0YS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkMTJkNmI5MTM4ZDYwZDg0OTZlODU2OTYwYjRlYzU1NC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzNzQ1ZjI5YmMzOTE4OTczMjVlOWUxNWNiM2I3NGVhZC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmZjBhMWYxYTMwOWU4MmExZjUyYTUwOGZiNTc4MmVhMi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4M2ZlNWRkOGY1NGYyZmMyZTVhYjAyNDRhOWZjNzUzOS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3YjAzNjVhNDgwODg4NTFiZmUxOTlkODkyOTBlZDFmYi5wbmdcIjsiLCJ2YXIgZXNjYXBlID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXCIpO1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi53cmFwcGVyIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL2JnLmpwZ1wiKSkgKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmhlYWRlciB7XFxyXFxuICBwYWRkaW5nOiA2MHB4IDAgMCAwO1xcclxcbn1cXHJcXG4uY29udGVudC13cmFwcGVyIHtcXHJcXG4gIG1hcmdpbjogMjBweCAzNXB4O1xcclxcbiAgaGVpZ2h0OiAyMjBweDtcXHJcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXHJcXG59XFxyXFxuLmNvbnRlbnQge1xcclxcbiAgaGVpZ2h0OiAyMjBweDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIG1hcmdpbi1yaWdodDogLThweDtcXHJcXG59XFxyXFxucCB7XFxyXFxuICBtYXJnaW46IDZweCAwIDtcXHJcXG59XFxyXFxuLmZvb3RlciB7XFxyXFxuICBtYXJnaW46IDMwcHggMzVweCAwIDM1cHg7XFxyXFxufVxcclxcbi5jb250cm9scyB7XFxyXFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXHJcXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uZmxleC1kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLnByZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ltYWdlcy9iZWZvcmUucG5nXCIpKSArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXHJcXG59XFxyXFxuLm5leHQge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvbmV4dC5wbmdcIikpICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcclxcbn1cXHJcXG4uY29udHJvbHMtaWNvbiB7XFxyXFxuICB3aWR0aDogMThweDtcXHJcXG4gIGhlaWdodDogMThweDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xcclxcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxyXFxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxyXFxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbjogYXV0byAwO1xcclxcbn1cXHJcXG4ucGxheSB7XFxyXFxuICB3aWR0aDogMjRweDtcXHJcXG4gIGhlaWdodDogMjRweDtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL3BsYXkucG5nXCIpKSArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xcclxcbiAgbWFyZ2luOiAwIDI1JTtcXHJcXG59XFxyXFxuLnBhdXNlIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL3BhdXNlLnBuZ1wiKSkgKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxyXFxufVxcclxcbi50aW1lLWNvbnRyb2xzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG4udGltZWxpbmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gIGhlaWdodDogMS41cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogN3B4IDE0cHg7XFxyXFxufVxcclxcbi50aW1lbGluZV9fYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBoZWlnaHQ6IDEuNXB4O1xcclxcbiAgd2lkdGg6IDAlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4udGltZWxpbmVfX2FjdGl2ZV9fYmFsbCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogLTEwcHg7XFxyXFxuICB0b3A6IC0xMHB4O1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuLnRpbWUge1xcclxcbiAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG4uYmdtLXNvdXJjZSB7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGUodXJsKSB7XG4gICAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gICAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gICAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gICAgfVxuICAgIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICAgIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSkge1xuICAgICAgICByZXR1cm4gJ1wiJyArIHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpICsgJ1wiJ1xuICAgIH1cblxuICAgIHJldHVybiB1cmxcbn1cbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNmYzBiMTkyN2JkYjY1NGNkMmIwMDJjNTcyODk5YTY0Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY0NmNiMjlhM2MwNGJmZjBhODlkYmM1MzhmZmJhNTY1Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjMxZmU3NTAzZDYwOTliNjc0ZjRmNGYwNWY2MmIyN2ZiLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM5MGJjN2ZmMTBmODA3OTk5MzMyZDBlNjFmNGUzMGIzLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjU0NDNjN2YzOTVjNDAzYmY0MDIxNGQ2Y2QxNTBhZDcxLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjU2MTI0MTQ1NzAzMGYxYWIxMGNhODM0YTZjOGY3M2VkLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQ4ZjI2ODBjMmIwNGJkNjI5MDhmNDdjNTFmYTFjMWU1Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjEyNmM3YjIyNzEzNzRjNDE2OGEwYjExMWEzODMyOGRkLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjg1ZTg0YzE4YjhhNzFiYWU3ZTk2ZGViYWM5YmNkMjZhLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjkxMzg4ODc5MGQxMWFmZWM0YmU1YjVhZTQ0MTI5YjMwLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjU3NGU4MWY2MWNiN2M4NzUwMmNjMjNkZGE5YzE2YjFjLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY0NWE4NWE1NmNmNzYzMWJlYTRmNWIwOTFlMGJjZjVmLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjgzYWFjMGI2MmY5ODNkYzY2YTUxOGRkYzI5OWY4ZmU5Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjE0MWEzM2Y4MTZjNGM3OTNiM2U1YmYyZDc5YzFkZGI1Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA3ZTM2ZjlhMGZkMWNjNjIxNzJhOGY0Y2Y1ZjQwYWE5Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQ5YjQzNjY1YmY0NTkzOTIwNzdmOGYxY2QyNDE0MjM3Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjBjNzE5Y2Q0MDk0ZTUxZWY0YzQxZWU2MzkzNzRhNDNhLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjRlNmQzNDczMjQwMTgxNDgwZmU4M2E2ZGRjM2YxNDUwLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjZiOTQyNjFmYTY2MGJlMmQ5MmI1MDk3YTQ3MzkyZjBmLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjVkNDFkMmJiODE1ZGQ5MWQ2ZTcxOTM1ZjE0NTZhMzA1Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImYyNTM0YjM3ZDJmM2ZhNmMzYjU3YWZmZDAwMzlhMmMzLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjVhYjQ5ZmU2NzZkNWE2YmFhZWQxNTM3ZWRkNTg0ZDU3Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImYyNGFiNzYxZWU3M2NkOTg3ZjI1ZTg3M2FhMDA5NmIwLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjBhYjAzYjFmNDlmNzE4Y2U0NDA0MDkwOGUzMTFjMWExLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFjNjllMWI1NGNjZWQ4NjBkYTFkZjUyMzM4NWZjZjdlLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjE2N2UxZDYxMDlhNGY2NjgzNzQ0NmYxNGE4ZjlkNjAwLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjRkNDkyMzA5NjhkZmNlYjI4YTY3MWU2MDkyYTc1YjAwLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFlY2I0ZDgxNjRlZWFiYzMyOWMyNjAwZjUwNzQxNjlhLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImIyYTJiY2QyNzk1ZDIwZjc5NTdlZmU3MTdiYWRhNGY0Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjVmYTc2NWMxMGNiMjE4ZWE4YzM3YzhlYzYxYTZkYjczLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjg2ZjQ5NDY1YTU1MzRmZDEyNjM1NjBjZmY2YjgxNjE0Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImE5ZGRiOTI5YTExNTE4YTQ0MjI5OTM3NDkxMjI3YzFjLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjUzMzQ5OGI4MTFkNjY1OWQwNTNhOTFiNjllYWEyOWVkLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImM5ODdiMDZkMTY2Y2MzYTIwYjg4OGQyOWFkZjlhZTAxLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU2YWFkZDRiODIyNWFhNWQ0ZjQ0ZTBlYzUyNDU2NGIwLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImMwOTEwZTk4NzIwYjRjZTBmN2Q5YmMyNzE0NjM4N2IwLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjRhNmNiMDhiNzA3NmQ0M2U4MTY2MTIyZTZkMzdiMzNiLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNlZDFkNmViNWE4ZGZlNmUyZDM3M2RiYjFjMzAzM2ZiLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjgzNTA3NmJiM2RlMmEyYzdmMzZjYWQwNGNmMTMyYjJkLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjdkMWVjZjg0YjgzM2M5YmRmOGIwN2VjNzVjMmZjMmEwLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjNhNzFiNDI5MDI3Njc4Mjk4NWEzYjlmNTI4NmRlOWIyLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjBkNmRlZmNkNDc0MmM4NjZkZjgyNTZmZDk1ZWRiMWE2Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNhOWQzNDk1NWE3NjAwMmY2YzNiOTA4NGQ5ZThkNjRkLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImY5Yzg1YTlkOWFjOGQwN2ZjZjRmMGZkZDFhMzg1ZGZmLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImYxODYxZGJmYWY2ODMxOWM5NGMzY2JkMjE2ZDJhMDkzLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjEzYWJiMTMwZjY3YmMzOWQ0ODk0ZTI3OWZhNzk2ZTJlLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQwMTIxZTg3ZTI2MGUxYTcyNDRhYjkzY2YwYzExOGQ4Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImI5NWE3ZDM2MzFjOWYyYmM2ZTViMjhlNjdlOGE1OTIzLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjBjNzEyN2Q3NjJmMzAzNWIzNjNjMjUxMmQ2NzU4NjFmLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjc4ZDlkNjA3NjJlZTk0M2IyN2I1NWZlMDQ1NTBjZGIyLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjdkNTYzYTAzYWNlMDIxOTlkZTQwY2IzMTA0ZTEwMGQ0Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQzYjJlYzY3ODkxYzQzMTM4ZTk1YTZhMmU4Y2Y5NzlkLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjkxZmU4ZWE0NmRjMzVmNjk1MjY0MDEzM2VkNjc0NTIwLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZiNjNmNjA5ODQ5NmNmY2IyZDViMDRlMGU1MGFmMjQ2Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjU3OGFjYTY3YTg3YzBhMTRiZTI1MzM3MjJiNzdiNGY2Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImEyNTQwMmVjMjNjODIyNjBmMDg3MDJkZTliMzhkMmU0Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA3M2Q3MGIzOTdkOTM5NDc1MzMzZTNkOWI2ZGY2NDU3Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNhYWUwYjdhZWY0MThjNjNmM2Y0ZGM1OThmZGMwMjU4Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjRhN2ZmNGVmN2IxNDZmZmE2YzFlOTU2MmM5ZGY0OThjLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjliODJjN2FhYmMxYzVlZGY1NGViOTMyYTIzOTVmNWRlLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImVhMjIzZjg5NzlkZDMwYTZmNzU2MDNkMmIxYTQyZDNkLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImIwMTQ5YTU5OTEzZDJkOGUwMTQ2ZmM2MzgyNDQ2MDQ3Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjYwNTVkZTkxNTZjNmZlN2FiNmEwYzdlYTZhYzcwZDAzLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjYwOGU0YmU2YzgwZWFmMzFmNTY3ZjI4MjNhNDk3MDZlLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImIwMWU1MDVjYmEwYjAxNDcyYTIzZDU5YmY5M2YxNTI0Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImVhYWFkOTIzZGFiMDU4ZmU5MDgyZTBkNDRlMjNiYTU1Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjRhYjA4MjNmMGIwZGI0MjJkNWIwMzgzYTVmMWM2NTk0Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImVkNzk3ZmQ0NDg4NTA5YjI0ODJiYzExZDhlM2QxMDE1Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJiNTAyZDQ3YWVhMTQ4ZTVhZjJkOGEwZDI2ZmI4NTJlLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImE2MDgzNTIzZDAwOTJiYjExZTM1Yjc1ZDg5NjkwNDhlLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImMwN2Y1NTA3ODg4YTY2MzI1NjBkOGQ4YmYyMDc5OGZhLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjlkN2Y5N2VkZjNiMGZjMGQzMzg0Mjc1MzI3YTk4NDg4Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjdhZmIwZDJhYTMxMzNmZTlmZmI5MGFmZjY2M2FlNDZjLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImExY2Q0N2FkYzBiMjc2YjI0ZmEzN2JiZjA4ZWFhZDJlLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjI2YmM0MGM2YzRhZWE0ZjUyODkxYzEwODdkMWFlYTgyLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImVlYTk3NDg3YzJmODgwOWRhMDI2MTA2YWMyZTgwYmQzLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjZhYWI4MzkyNzMyOGFmM2IzOGU3MzE0MDliNTk1NGY4Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjBlNzQyYmI0ZGFmY2MyMDcxOWNmMTFkMDVjZTU4OGQ4Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjhmZDgxMTdlZjAxMGUwYWFmOTdkNjM2NTc3NjU5Y2MzLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjZjZWJkNDMzNjJmNTdjMWQxYmQ2NDZkZTMyN2ZiZmYzLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjI3NWQ0MmVhZjQzYzY3ZDkzZWYyZmQzMTE2NjI4MmU1Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjEzYWYwMjZiZWM0ZGFjYTIwZGI2MzRmNzhhNWZhZTA2Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImY1YWZjNzk5ZmJlOTEzZDAxMDEyN2IyZDc5YzlkMTU5Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImY3ZDRiNjgwMjk0NTZhOTU0OGI0MjY5MzA3ZTdlZTY3Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQ3YTU0MjUyOGI1NmFmMjc0NTYwZDY4ODkyYjM5ZGNhLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjlmNjliNGViNGEyYmM4MDkxMWQ0ODM2YWM2NGUxZDY3Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjBkNTViMDkwMzJlYTA4MGY4ZWIwZWJmMWUxZWQ3OTRkLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjAxYTM4OGM5ODVjMTc0NDRmZDQ2ZjQwZTc5MDA1OTRiLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY0ODNiMTJlZmY1YjlkYTc4NDFjOGM1NWI2ZTc2NTMzLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjhkNzMxZmVmM2Q5YWVmNjhjNDdkYWFkZTZlZWJmMDMxLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjc3NTBlNzUyODFhOGZmNDNlNTIzNzBlNjU0YzkwZDY0Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjdmZTRlMGZmMmU5Mjc2ZjU5OGNkODc4NjMyZjk1Mjg4Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU2ZjU0MDQ3NDc1MWJhZjVkZmMzZjI2NGMzZWM0ZWE3Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjRhNzlkMzg2NjBkYjA2MDNlZjlkMmMzYWYzMjMyMjA1Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjAxODEwOWYxNWMxZmUyYWJjNWE4MjBiNzc5NmJkMWFiLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZlMTFhMmQ5OGNjNzY1M2ZjZDBiNjRjNGIyMThhZGFhLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQzMDFlZDc2ODJhMzViMjdmMDVmZDM5NTAxOTg2NDg2Lm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImE1ZGQwYWYyOGFjMDk3MGM3NTVjZmFlOWRiYTdiOGRkLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImIyNTRkMWMyNjFhNjBlMWMzNGNhNWU5ODA5ZjcwNzZmLm1wM1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU2NTVjNTU3ZGYzNTliOGNjNWVhYTgxZjE2ZjNkYmJlLm1wM1wiOyIsInZhciBhdWRpb3MgPSB7XHJcbiAgMTogcmVxdWlyZSgnLi4vcmVzLzEubXAzJyksXHJcbiAgMjogcmVxdWlyZSgnLi4vcmVzLzIubXAzJyksXHJcbiAgMzogcmVxdWlyZSgnLi4vcmVzLzMubXAzJyksXHJcbiAgNDogcmVxdWlyZSgnLi4vcmVzLzQubXAzJyksXHJcbiAgNTogcmVxdWlyZSgnLi4vcmVzLzUubXAzJyksXHJcbiAgNjogcmVxdWlyZSgnLi4vcmVzLzYubXAzJyksXHJcbiAgNzogcmVxdWlyZSgnLi4vcmVzLzcubXAzJyksXHJcbiAgODogcmVxdWlyZSgnLi4vcmVzLzgubXAzJyksXHJcbiAgOTogcmVxdWlyZSgnLi4vcmVzLzkubXAzJyksXHJcbiAgMTA6IHJlcXVpcmUoJy4uL3Jlcy8xMC5tcDMnKSxcclxuICAxMTogcmVxdWlyZSgnLi4vcmVzLzExLm1wMycpLFxyXG4gIDEyOiByZXF1aXJlKCcuLi9yZXMvMTIubXAzJyksXHJcbiAgMTM6IHJlcXVpcmUoJy4uL3Jlcy8xMy5tcDMnKSxcclxuICAxNDogcmVxdWlyZSgnLi4vcmVzLzE0Lm1wMycpLFxyXG4gIDE1OiByZXF1aXJlKCcuLi9yZXMvMTUubXAzJyksXHJcbiAgMTY6IHJlcXVpcmUoJy4uL3Jlcy8xNi5tcDMnKSxcclxuICAxNzogcmVxdWlyZSgnLi4vcmVzLzE3Lm1wMycpLFxyXG4gIDE4OiByZXF1aXJlKCcuLi9yZXMvMTgubXAzJyksXHJcbiAgMTk6IHJlcXVpcmUoJy4uL3Jlcy8xOS5tcDMnKSxcclxuICAyMDogcmVxdWlyZSgnLi4vcmVzLzIwLm1wMycpLFxyXG4gIDIxOiByZXF1aXJlKCcuLi9yZXMvMjEubXAzJyksXHJcbiAgMjI6IHJlcXVpcmUoJy4uL3Jlcy8yMi5tcDMnKSxcclxuICAyMzogcmVxdWlyZSgnLi4vcmVzLzIzLm1wMycpLFxyXG4gIDI0OiByZXF1aXJlKCcuLi9yZXMvMjQubXAzJyksXHJcbiAgMjU6IHJlcXVpcmUoJy4uL3Jlcy8yNS5tcDMnKSxcclxuICAyNjogcmVxdWlyZSgnLi4vcmVzLzI2Lm1wMycpLFxyXG4gIDI3OiByZXF1aXJlKCcuLi9yZXMvMjcubXAzJyksXHJcbiAgMjg6IHJlcXVpcmUoJy4uL3Jlcy8yOC5tcDMnKSxcclxuICAyOTogcmVxdWlyZSgnLi4vcmVzLzI5Lm1wMycpLFxyXG4gIDMwOiByZXF1aXJlKCcuLi9yZXMvMzAubXAzJyksXHJcbiAgMzE6IHJlcXVpcmUoJy4uL3Jlcy8zMS5tcDMnKSxcclxuICAzMjogcmVxdWlyZSgnLi4vcmVzLzMyLm1wMycpLFxyXG4gIDMzOiByZXF1aXJlKCcuLi9yZXMvMzMubXAzJyksXHJcbiAgMzQ6IHJlcXVpcmUoJy4uL3Jlcy8zNC5tcDMnKSxcclxuICAzNTogcmVxdWlyZSgnLi4vcmVzLzM1Lm1wMycpLFxyXG4gIDM2OiByZXF1aXJlKCcuLi9yZXMvMzYubXAzJyksXHJcbiAgMzc6IHJlcXVpcmUoJy4uL3Jlcy8zNy5tcDMnKSxcclxuICAzODogcmVxdWlyZSgnLi4vcmVzLzM4Lm1wMycpLFxyXG4gIDM5OiByZXF1aXJlKCcuLi9yZXMvMzkubXAzJyksXHJcbiAgNDA6IHJlcXVpcmUoJy4uL3Jlcy80MC5tcDMnKSxcclxuICA0MTogcmVxdWlyZSgnLi4vcmVzLzQxLm1wMycpLFxyXG4gIDQyOiByZXF1aXJlKCcuLi9yZXMvNDIubXAzJyksXHJcbiAgNDM6IHJlcXVpcmUoJy4uL3Jlcy80My5tcDMnKSxcclxuICA0NDogcmVxdWlyZSgnLi4vcmVzLzQ0Lm1wMycpLFxyXG4gIDQ1OiByZXF1aXJlKCcuLi9yZXMvNDUubXAzJyksXHJcbiAgNDY6IHJlcXVpcmUoJy4uL3Jlcy80Ni5tcDMnKSxcclxuICA0NzogcmVxdWlyZSgnLi4vcmVzLzQ3Lm1wMycpLFxyXG4gIDQ4OiByZXF1aXJlKCcuLi9yZXMvNDgubXAzJyksXHJcbiAgNDk6IHJlcXVpcmUoJy4uL3Jlcy80OS5tcDMnKSxcclxuICA1MDogcmVxdWlyZSgnLi4vcmVzLzUwLm1wMycpLFxyXG4gIDUxOiByZXF1aXJlKCcuLi9yZXMvNTEubXAzJyksXHJcbiAgNTI6IHJlcXVpcmUoJy4uL3Jlcy81Mi5tcDMnKSxcclxuICA1MzogcmVxdWlyZSgnLi4vcmVzLzUzLm1wMycpLFxyXG4gIDU0OiByZXF1aXJlKCcuLi9yZXMvNTQubXAzJyksXHJcbiAgNTU6IHJlcXVpcmUoJy4uL3Jlcy81NS5tcDMnKSxcclxuICA1NjogcmVxdWlyZSgnLi4vcmVzLzU2Lm1wMycpLFxyXG4gIDU3OiByZXF1aXJlKCcuLi9yZXMvNTcubXAzJyksXHJcbiAgNTg6IHJlcXVpcmUoJy4uL3Jlcy81OC5tcDMnKSxcclxuICA1OTogcmVxdWlyZSgnLi4vcmVzLzU5Lm1wMycpLFxyXG4gIDYwOiByZXF1aXJlKCcuLi9yZXMvNjAubXAzJyksXHJcbiAgNjE6IHJlcXVpcmUoJy4uL3Jlcy82MS5tcDMnKSxcclxuICA2MjogcmVxdWlyZSgnLi4vcmVzLzYyLm1wMycpLFxyXG4gIDYzOiByZXF1aXJlKCcuLi9yZXMvNjMubXAzJyksXHJcbiAgNjQ6IHJlcXVpcmUoJy4uL3Jlcy82NC5tcDMnKSxcclxuICA2NTogcmVxdWlyZSgnLi4vcmVzLzY1Lm1wMycpLFxyXG4gIDY2OiByZXF1aXJlKCcuLi9yZXMvNjYubXAzJyksXHJcbiAgNjc6IHJlcXVpcmUoJy4uL3Jlcy82Ny5tcDMnKSxcclxuICA2ODogcmVxdWlyZSgnLi4vcmVzLzY4Lm1wMycpLFxyXG4gIDY5OiByZXF1aXJlKCcuLi9yZXMvNjkubXAzJyksXHJcbiAgNzA6IHJlcXVpcmUoJy4uL3Jlcy83MC5tcDMnKSxcclxuICA3MTogcmVxdWlyZSgnLi4vcmVzLzcxLm1wMycpLFxyXG4gIDcyOiByZXF1aXJlKCcuLi9yZXMvNzIubXAzJyksXHJcbiAgNzM6IHJlcXVpcmUoJy4uL3Jlcy83My5tcDMnKSxcclxuICA3NDogcmVxdWlyZSgnLi4vcmVzLzc0Lm1wMycpLFxyXG4gIDc1OiByZXF1aXJlKCcuLi9yZXMvNzUubXAzJyksXHJcbiAgNzY6IHJlcXVpcmUoJy4uL3Jlcy83Ni5tcDMnKSxcclxuICA3NzogcmVxdWlyZSgnLi4vcmVzLzc3Lm1wMycpLFxyXG4gIDc4OiByZXF1aXJlKCcuLi9yZXMvNzgubXAzJyksXHJcbiAgNzk6IHJlcXVpcmUoJy4uL3Jlcy83OS5tcDMnKSxcclxuICA4MDogcmVxdWlyZSgnLi4vcmVzLzgwLm1wMycpLFxyXG4gIDgxOiByZXF1aXJlKCcuLi9yZXMvODEubXAzJyksXHJcbiAgODI6IHJlcXVpcmUoJy4uL3Jlcy84Mi5tcDMnKSxcclxuICA4MzogcmVxdWlyZSgnLi4vcmVzLzgzLm1wMycpLFxyXG4gIDg0OiByZXF1aXJlKCcuLi9yZXMvODQubXAzJyksXHJcbiAgODU6IHJlcXVpcmUoJy4uL3Jlcy84NS5tcDMnKSxcclxuICA4NjogcmVxdWlyZSgnLi4vcmVzLzg2Lm1wMycpLFxyXG4gIDg3OiByZXF1aXJlKCcuLi9yZXMvODcubXAzJyksXHJcbiAgODg6IHJlcXVpcmUoJy4uL3Jlcy84OC5tcDMnKSxcclxuICA4OTogcmVxdWlyZSgnLi4vcmVzLzg5Lm1wMycpLFxyXG4gIDkwOiByZXF1aXJlKCcuLi9yZXMvOTAubXAzJyksXHJcbiAgOTE6IHJlcXVpcmUoJy4uL3Jlcy85MS5tcDMnKSxcclxuICA5MjogcmVxdWlyZSgnLi4vcmVzLzkyLm1wMycpLFxyXG4gIDkzOiByZXF1aXJlKCcuLi9yZXMvOTMubXAzJyksXHJcbiAgOTQ6IHJlcXVpcmUoJy4uL3Jlcy85NC5tcDMnKSxcclxuICA5NTogcmVxdWlyZSgnLi4vcmVzLzk1Lm1wMycpLFxyXG4gIDk2OiByZXF1aXJlKCcuLi9yZXMvOTYubXAzJyksXHJcbiAgOTc6IHJlcXVpcmUoJy4uL3Jlcy85Ny5tcDMnKSxcclxuICA5ODogcmVxdWlyZSgnLi4vcmVzLzk4Lm1wMycpLFxyXG4gIDk5OiByZXF1aXJlKCcuLi9yZXMvOTkubXAzJyksXHJcbiAgMTAwOiByZXF1aXJlKCcuLi9yZXMvMTAwLm1wMycpXHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBhdWRpb3NcclxuIiwidmFyIGF1ZGlvcyA9IHtcbiAgMTogcmVxdWlyZSgnLi4vYmcvMS5qcGcnKSxcbiAgMjogcmVxdWlyZSgnLi4vYmcvMi5qcGcnKSxcbiAgMzogcmVxdWlyZSgnLi4vYmcvMy5qcGcnKSxcbiAgNDogcmVxdWlyZSgnLi4vYmcvNC5qcGcnKSxcbiAgNTogcmVxdWlyZSgnLi4vYmcvNS5qcGcnKSxcbiAgNjogcmVxdWlyZSgnLi4vYmcvNi5qcGcnKSxcbiAgNzogcmVxdWlyZSgnLi4vYmcvNy5qcGcnKSxcbiAgODogcmVxdWlyZSgnLi4vYmcvOC5qcGcnKSxcbiAgOTogcmVxdWlyZSgnLi4vYmcvOS5qcGcnKSxcbiAgMTA6IHJlcXVpcmUoJy4uL2JnLzEwLmpwZycpLFxuICAxMTogcmVxdWlyZSgnLi4vYmcvMTEuanBnJyksXG4gIDEyOiByZXF1aXJlKCcuLi9iZy8xMi5qcGcnKSxcbiAgMTM6IHJlcXVpcmUoJy4uL2JnLzEzLmpwZycpLFxuICAxNDogcmVxdWlyZSgnLi4vYmcvMTQuanBnJyksXG4gIDE1OiByZXF1aXJlKCcuLi9iZy8xNS5qcGcnKSxcbiAgMTY6IHJlcXVpcmUoJy4uL2JnLzE2LmpwZycpLFxuICAxNzogcmVxdWlyZSgnLi4vYmcvMTcuanBnJyksXG4gIDE4OiByZXF1aXJlKCcuLi9iZy8xOC5qcGcnKSxcbiAgMTk6IHJlcXVpcmUoJy4uL2JnLzE5LmpwZycpLFxuICAyMDogcmVxdWlyZSgnLi4vYmcvMjAuanBnJyksXG4gIDIxOiByZXF1aXJlKCcuLi9iZy8yMS5qcGcnKSxcbiAgMjI6IHJlcXVpcmUoJy4uL2JnLzIyLmpwZycpLFxuICAyMzogcmVxdWlyZSgnLi4vYmcvMjMuanBnJyksXG4gIDI0OiByZXF1aXJlKCcuLi9iZy8yNC5qcGcnKSxcbiAgMjU6IHJlcXVpcmUoJy4uL2JnLzI1LmpwZycpLFxuICAyNjogcmVxdWlyZSgnLi4vYmcvMjYuanBnJyksXG4gIDI3OiByZXF1aXJlKCcuLi9iZy8yNy5qcGcnKSxcbiAgMjg6IHJlcXVpcmUoJy4uL2JnLzI4LmpwZycpLFxuICAyOTogcmVxdWlyZSgnLi4vYmcvMjkuanBnJyksXG4gIDMwOiByZXF1aXJlKCcuLi9iZy8zMC5qcGcnKSxcbiAgMzE6IHJlcXVpcmUoJy4uL2JnLzMxLmpwZycpLFxuICAzMjogcmVxdWlyZSgnLi4vYmcvMzIuanBnJyksXG4gIDMzOiByZXF1aXJlKCcuLi9iZy8zMy5qcGcnKSxcbiAgMzQ6IHJlcXVpcmUoJy4uL2JnLzM0LmpwZycpLFxuICAzNTogcmVxdWlyZSgnLi4vYmcvMzUuanBnJyksXG4gIDM2OiByZXF1aXJlKCcuLi9iZy8zNi5qcGcnKSxcbiAgMzc6IHJlcXVpcmUoJy4uL2JnLzM3LmpwZycpLFxuICAzODogcmVxdWlyZSgnLi4vYmcvMzguanBnJyksXG4gIDM5OiByZXF1aXJlKCcuLi9iZy8zOS5qcGcnKSxcbiAgNDA6IHJlcXVpcmUoJy4uL2JnLzQwLmpwZycpLFxuICA0MTogcmVxdWlyZSgnLi4vYmcvNDEuanBnJyksXG4gIDQyOiByZXF1aXJlKCcuLi9iZy80Mi5qcGcnKSxcbiAgNDM6IHJlcXVpcmUoJy4uL2JnLzQzLmpwZycpLFxuICA0NDogcmVxdWlyZSgnLi4vYmcvNDQuanBnJyksXG4gIDQ1OiByZXF1aXJlKCcuLi9iZy80NS5qcGcnKSxcbiAgNDY6IHJlcXVpcmUoJy4uL2JnLzQ2LmpwZycpLFxuICA0NzogcmVxdWlyZSgnLi4vYmcvNDcuanBnJyksXG4gIDQ4OiByZXF1aXJlKCcuLi9iZy80OC5qcGcnKSxcbiAgNDk6IHJlcXVpcmUoJy4uL2JnLzQ5LmpwZycpLFxuICA1MDogcmVxdWlyZSgnLi4vYmcvNTAuanBnJyksXG4gIDUxOiByZXF1aXJlKCcuLi9iZy81MS5qcGcnKSxcbiAgNTI6IHJlcXVpcmUoJy4uL2JnLzUyLmpwZycpLFxuICA1MzogcmVxdWlyZSgnLi4vYmcvNTMuanBnJyksXG4gIDU0OiByZXF1aXJlKCcuLi9iZy81NC5qcGcnKSxcbiAgNTU6IHJlcXVpcmUoJy4uL2JnLzU1LmpwZycpLFxuICA1NjogcmVxdWlyZSgnLi4vYmcvNTYuanBnJyksXG4gIDU3OiByZXF1aXJlKCcuLi9iZy81Ny5qcGcnKSxcbiAgNTg6IHJlcXVpcmUoJy4uL2JnLzU4LmpwZycpLFxuICA1OTogcmVxdWlyZSgnLi4vYmcvNTkuanBnJyksXG4gIDYwOiByZXF1aXJlKCcuLi9iZy82MC5qcGcnKSxcbiAgNjE6IHJlcXVpcmUoJy4uL2JnLzYxLmpwZycpLFxuICA2MjogcmVxdWlyZSgnLi4vYmcvNjIuanBnJyksXG4gIDYzOiByZXF1aXJlKCcuLi9iZy82My5qcGcnKSxcbiAgNjQ6IHJlcXVpcmUoJy4uL2JnLzY0LmpwZycpLFxuICA2NTogcmVxdWlyZSgnLi4vYmcvNjUuanBnJyksXG4gIDY2OiByZXF1aXJlKCcuLi9iZy82Ni5qcGcnKSxcbiAgNjc6IHJlcXVpcmUoJy4uL2JnLzY3LmpwZycpLFxuICA2ODogcmVxdWlyZSgnLi4vYmcvNjguanBnJyksXG4gIDY5OiByZXF1aXJlKCcuLi9iZy82OS5qcGcnKSxcbiAgNzA6IHJlcXVpcmUoJy4uL2JnLzcwLmpwZycpLFxuICA3MTogcmVxdWlyZSgnLi4vYmcvNzEuanBnJyksXG4gIDcyOiByZXF1aXJlKCcuLi9iZy83Mi5qcGcnKSxcbiAgNzM6IHJlcXVpcmUoJy4uL2JnLzczLmpwZycpLFxuICA3NDogcmVxdWlyZSgnLi4vYmcvNzQuanBnJyksXG4gIDc1OiByZXF1aXJlKCcuLi9iZy83NS5qcGcnKSxcbiAgNzY6IHJlcXVpcmUoJy4uL2JnLzc2LmpwZycpLFxuICA3NzogcmVxdWlyZSgnLi4vYmcvNzcuanBnJyksXG4gIDc4OiByZXF1aXJlKCcuLi9iZy83OC5qcGcnKSxcbiAgNzk6IHJlcXVpcmUoJy4uL2JnLzc5LmpwZycpLFxuICA4MDogcmVxdWlyZSgnLi4vYmcvODAuanBnJyksXG4gIDgxOiByZXF1aXJlKCcuLi9iZy84MS5qcGcnKSxcbiAgODI6IHJlcXVpcmUoJy4uL2JnLzgyLmpwZycpLFxuICA4MzogcmVxdWlyZSgnLi4vYmcvODMuanBnJyksXG4gIDg0OiByZXF1aXJlKCcuLi9iZy84NC5qcGcnKSxcbiAgODU6IHJlcXVpcmUoJy4uL2JnLzg1LmpwZycpLFxuICA4NjogcmVxdWlyZSgnLi4vYmcvODYuanBnJyksXG4gIDg3OiByZXF1aXJlKCcuLi9iZy84Ny5qcGcnKSxcbiAgODg6IHJlcXVpcmUoJy4uL2JnLzg4LmpwZycpLFxuICA4OTogcmVxdWlyZSgnLi4vYmcvODkuanBnJyksXG4gIDkwOiByZXF1aXJlKCcuLi9iZy85MC5qcGcnKSxcbiAgOTE6IHJlcXVpcmUoJy4uL2JnLzkxLmpwZycpLFxuICA5MjogcmVxdWlyZSgnLi4vYmcvOTIuanBnJyksXG4gIDkzOiByZXF1aXJlKCcuLi9iZy85My5qcGcnKSxcbiAgOTQ6IHJlcXVpcmUoJy4uL2JnLzk0LmpwZycpLFxuICA5NTogcmVxdWlyZSgnLi4vYmcvOTUuanBnJyksXG4gIDk2OiByZXF1aXJlKCcuLi9iZy85Ni5qcGcnKSxcbiAgOTc6IHJlcXVpcmUoJy4uL2JnLzk3LmpwZycpLFxuICA5ODogcmVxdWlyZSgnLi4vYmcvOTguanBnJyksXG4gIDk5OiByZXF1aXJlKCcuLi9iZy85OS5qcGcnKSxcbiAgMTAwOiByZXF1aXJlKCcuLi9iZy8xMDAuanBnJylcbn1cbm1vZHVsZS5leHBvcnRzID0gYXVkaW9zXG4iLCIvLyBmdW5jdGlvbiBmb3JtYXQoZGF0YSkge1xyXG4vLyAgIHZhciByZXMgPSBbXVxyXG4vLyAgIGZvciAodmFyIGkgPSAxOyBpIDwgMTAwOyBpKyspIHtcclxuLy8gICAgIHZhciBjSXRlbSA9IGRhdGEuc3BsaXQoYCR7aSsxfeOAgWApWzBdLnNwbGl0KGAke2l944CBYClbMV1cclxuLy8gICAgIHZhciBsaXN0ID0gY0l0ZW0uc3BsaXQoJ1xcbicpXHJcbi8vICAgICB2YXIgbWRhdGEgPSB7XHJcbi8vICAgICAgIHRpdGxlOiAnJyxcclxuLy8gICAgICAgYXV0aG9yOiAnJyxcclxuLy8gICAgICAgY29udGVudDogW10sXHJcbi8vICAgICAgIGJnbTogJycsXHJcbi8vICAgICAgIGJnbVNvdXJjZTogJycsXHJcbi8vICAgICAgIHJlcG9ydGVyOiAnJ1xyXG4vLyAgICAgfVxyXG4vLyAgICAgbGlzdC5mb3JFYWNoKGxpbmUgPT4ge1xyXG4vLyAgICAgICBpZiAobGluZSA9PT0gJycpIHtcclxuLy8gICAgICAgICByZXR1cm5cclxuLy8gICAgICAgfVxyXG4vLyAgICAgICAvLyDmoIfpophcclxuLy8gICAgICAgaWYgKCFtZGF0YS50aXRsZSkge1xyXG4vLyAgICAgICAgIHJldHVybiBtZGF0YS50aXRsZSA9IGxpbmVcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICAvLyDkvZzogIVcclxuLy8gICAgICAgaWYgKCFtZGF0YS5hdXRob3IpIHtcclxuLy8gICAgICAgICByZXR1cm4gbWRhdGEuYXV0aG9yID0gbGluZVxyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIC8vIOWGheWuuSArIGJnbVxyXG4vLyAgICAgICBpZiAoIW1kYXRhLmJnbSkge1xyXG4vLyAgICAgICAgIGlmIChsaW5lLmluZGV4T2YoJ0JHTe+8micpID4gLTEpIHtcclxuLy8gICAgICAgICAgIHJldHVybiBtZGF0YS5iZ20gPSBsaW5lLnJlcGxhY2UoJ0JHTe+8micsICcnKVxyXG4vLyAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICByZXR1cm4gbWRhdGEuY29udGVudC5wdXNoKGxpbmUpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIC8vIGJnbXNvdXJjZVxyXG4vLyAgICAgICBpZiAoIW1kYXRhLmJnbVNvdXJjZSkge1xyXG4vLyAgICAgICAgIGlmIChsaW5lLmluZGV4T2YoJ0JHTeadpea6kO+8micpID4gLTEpIHtcclxuLy8gICAgICAgICAgIHJldHVybiBtZGF0YS5iZ21Tb3VyY2UgPSBsaW5lLnJlcGxhY2UoJ0JHTeadpea6kO+8micsICcnKVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgICAvLyAg5pyX6K+1XHJcbi8vICAgICAgIGlmICghbWRhdGEucmVwb3J0ZXIpIHtcclxuLy8gICAgICAgICBpZiAobGluZS5pbmRleE9mKCfmnJfor7vogIXvvJonKSA+IC0xKSB7XHJcbi8vICAgICAgICAgICByZXR1cm4gbWRhdGEucmVwb3J0ZXIgPSBsaW5lLnJlcGxhY2UoJ+acl+ivu+iAhe+8micsICcnKVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgfSlcclxuLy8gICAgIHJlcy5wdXNoKG1kYXRhKVxyXG4vLyAgIH1cclxuLy8gICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMpKVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbe1xyXG4gIFwidGl0bGVcIjogXCLjgIrkuIDmj6HnoILjgIvoioLpgIlcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muefs+W3neWVhOacqFwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLmiJHmiYDmirHnmoTkuIDliIfmgJ3mg7NcIiwgXCLku7/kvZvpg73mmK/msqHmnInpkrHogIzlvJXotbfnmoTvvJtcIiwgXCLnp4vpo47lkLnotbfmnaXkuobjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJLZXZpbiBNYWNMZW9kLUd5bW5vcGVkaWUgTm8gMlwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9pbmNvbXBldGVjaC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrplIjjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muW8l+mHjOW+t+mHjOW4jMK35aiB5buJwrflsLzph4dcIixcclxuICBcImNvbnRlbnRcIjogW1wi55Sf6ZSI5Lmf5pyJ5b+F6KaBXCIsIFwi5YWJ5piv6ZSQ5Yip5Lmf5LiN6KGMXCIsIFwi5ZCm5YiZ5Lq65Lus5bi45bi45Lya6K+05L2g77yaXCIsIFwi5LuW5aSq5bm06L2777yBXCJdLFxyXG4gIFwiYmdtXCI6IFwiS2V2aW4gTWFjTGVvZC1HeW1ub3BlZGllIE5vIDFcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vaW5jb21wZXRlY2guY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5a+C5a+e44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrmiLTmnJvoiJJcIixcclxuICBcImNvbnRlbnRcIjogW1wi5Zut5Lit6YeO6I2J5riQ56a756a777yMXCIsIFwi5omY5qC55LqO5oiR5pen5pe255qE6ISa5Y2w77yMXCIsIFwi57uZ5LuW5Lus5oqr6Z2S5pil55qE5b2p6KGj77yMXCIsIFwi5pif5LiL55qE55uY5LuO5YW55raI6ZqQ44CCXCIsIFwi5pel5a2Q6L+H5Y6777yM5a+C5a+e5rC45a2Y77yMXCIsIFwi5a+E6a2C5LqO56a756a755qE6YeO6I2J77yMXCIsIFwi5YOP6YKj5Lqb5Y+v5oCc55qE54G16a2C77yMXCIsXHJcbiAgICAgICAgICBcIumVv+W+l+WmguaIkeS4gOiIrOmrmOOAglwiLCBcIuaIkeS7iuS4jeWkjeWIsOWbreS4reWOu++8jFwiLCBcIuWvguWvnuW3suWmguaIkeS4gOiIrOmrmO+8jFwiLCBcIuaIkeWknOWdkOWQrOmjju+8jOaYvOecoOWQrOmbqO+8jFwiLCBcIuaCn+W+l+aciOWmguS9lee8uu+8jOWkqeWmguS9leiAgVwiXSxcclxuICBcImJnbVwiOiBcIkFsZXhhbmRlciBOYWthcmFkYS1XaW50ZXJcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vZnJlZXBkLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCJOauWuq+iirVwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK54ix55yJ5bCP5pyt44CL6IqC6YCJXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrlvpDlv5fmkalcIixcclxuICBcImNvbnRlbnRcIjogW1wi54ix55qE5Ye65Y+R54K577yMXCIsIFwi5LiN5LiA5a6a5piv6Lqr5L2T77yMXCIsIFwi5L2G54ix5Yiw5LqG6Lqr5L2TXCIsIFwi5bCx5Yiw5LqG6aG254K544CCXCIsIFwi5Y6M5oG255qE5Ye65Y+R54K577yMXCIsIFwi5Lmf5LiN5LiA5a6a5piv6Lqr5L2T77yMXCIsIFwi5L2G5Y6M5oG25Yiw5LqG6Lqr5L2T77yMXCIsIFwi5Lmf5bCx5Yiw5LqG6aG254K544CCXCJdLFxyXG4gIFwiYmdtXCI6IFwiQWxleGFuZGVyIE5ha2FyYWRhLVdpbnRlclwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9mcmVlcGQuY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5Lq66Ze05aSx5qC844CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkuKTliJlcIixcclxuICBcImNvbnRlbnRcIjogW1wi5L2c6ICF77ya5aSq5a6w5rK7XCIsIFwi5pep5pmo77yM5oiR552B55y86YaS5p2l57+76Lqr5LiL5bqK77yMXCIsIFwi5Y+I5Y+Y5oiQ5LqG5Y6f5p2l6YKj5Liq5rWF6JaE5peg55+l44CBXCIsIFwi5ZaE5LqO5Lyq6KOF55qE5ruR56i96KeS6Imy44CCXCIsIFwi6IOG5bCP6ay86L+e5bm456aP6YO95Lya5oOn5oCV77yMXCIsIFwi56Kw5Yiw5qOJ6Iqx6YO95Lya5Y+X5Lyk77yMXCIsIFwi5pyJ5pe25Lmf5Lya6KKr5bm456aP5omA5Lyk44CCXCIsXHJcbiAgICAgICAgICBcIui2geedgOi/mOayoeacieWPl+S8pO+8jFwiLCBcIuaIkeaDs+Wwsei/meagt+i1tuW/q+WIhumBk+aJrOmVs+OAglwiLCBcIuaIkeWPiOaUvuWHuuS6huaDr+eUqOeahOmAl+eskeeDn+W5leW8ueOAglwiLCBcIuaJgOiwk+S4luS6uu+8jOS4jeWwseaYr+S9oOWQl++8n1wiXSxcclxuICBcImJnbVwiOiBcIkFsZXhhbmRlciBOYWthcmFkYS1XaW50ZXJcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vZnJlZXBkLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlj7Pnn7PlhYjnlJ9cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuiAjOW3sumbhsK35bCP5p2C5oSf44CL6IqC6YCJXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrpsoHov4VcIixcclxuICBcImNvbnRlbnRcIjogW10sXHJcbiAgXCJiZ21cIjogXCJKb3NoIFdvb2R3YXJkLUF1dHVtblwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL2pvc2h3b29kd2FyZC5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5a+C5a+e55qE5pe25YCZ44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrph5HlrZDnvo7njrJcIixcclxuICBcImNvbnRlbnRcIjogW1wi5oiR5a+C5a+e55qE5pe25YCZXCIsIFwi5Yir5Lq65LiN55+l6YGTXCIsIFwi5oiR5a+C5a+e55qE5pe25YCZXCIsIFwi5pyL5Y+L5Lus5Zyo56yRXCIsIFwi5oiR5a+C5a+e55qE5pe25YCZXCIsIFwi5aaI5aaI55qE6IS+5rCU5pyA5aW9XCIsIFwi5oiR5a+C5a+e55qE5pe25YCZXCIsIFwi5L2b56WW5Lmf5a+C5a+eXCJdLFxyXG4gIFwiYmdtXCI6IFwiS2V2aW4gTWFjTGVvZC1TdGFycnlcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vaW5jb21wZXRlY2guY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWQg+ilv+eTnOeahOWwj+S6jOmDjlwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5aaC5qKm6K6w44CL6IqC6YCJXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrnn7Plt53llYTmnKhcIixcclxuICBcImNvbnRlbnRcIjogW1wi5q+U5Lq65YWI55+l6YGT5LqG5oGL54ix55qE55Sc5ZGz77yMXCIsIFwi55+l6YGT5LqG5oKy5ZOA55qE5oiR77yMXCIsIFwi5Lmf5q+U5Lq65YWI6ICB5LqG44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwi6Zuo44Gu5aScXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vYW1hY2hhbXVzaWMuY2hhZ2FzaS5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWbm+WklVwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5rKZ5LiO5rKr44CL6IqC6YCJXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrnuqrCt+WTiMK357qq5Lyv5LymXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuS7heS7heWcqOaYqOWkqe+8jFwiLCBcIuaIkeiupOS4uuaIkeiHquW3seWPquaYr+S4gOS4queijueJh++8jFwiLCBcIuaXoOmfteW+i+WcsOWcqOeUn+WRveeahOepueiLjeS4remipOaKluOAglwiLCBcIueOsOWcqOaIkeaZk+W+l++8jFwiLCBcIuaIkeWwseaYr+mCo+epueiLje+8jFwiLCBcIuS4gOWIh+eUn+WRvemDveaYr+WcqOaIkemHjOmdouaciemfteW+i+WcsOi9rOWKqOeahOeijueJh+OAglwiLFxyXG4gICAgICAgICAgXCLku5bku6zlnKjop4nphpLnmoTml7blgJnlr7nmiJHor7TvvJpcIiwgXCLigJzkvaDlkozkvaDmiYDlsYXkvY/nmoTkuJbnlYzvvIzlj6rkuI3ov4fmmK/ml6DovrnmtbfmtIvnmoTml6DovrnmspnlsrjkuIrnmoTkuIDnspLmspnlrZDjgILigJ1cIiwgXCLlnKjmoqbph4zmiJHlr7nku5bku6zor7TvvJpcIiwgXCLigJzmiJHlsLHmmK/pgqPml6DovrnnmoTmtbfmtIvvvIzlpKfljYPkuJbnlYzlj6rkuI3ov4fmmK/miJHnmoTmspnlsrjkuIrnmoTmspnnspLjgILigJ1cIl0sXHJcbiAgXCJiZ21cIjogXCLpm6jjga7lpJxcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9hbWFjaGFtdXNpYy5jaGFnYXNpLmNvbS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrosIHnu4jlsIblo7DpnIfkurrpl7TjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muW8l+mHjOW+t+mHjOW4jMK35aiB5buJwrflsLzph4dcIixcclxuICBcImNvbnRlbnRcIjogW1wi6LCB57uI5bCG5aOw6ZyH5Lq66Ze077yMXCIsIFwi5b+F6ZW/5LmF5rex6Ieq57yE6buY77ybXCIsIFwi6LCB57uI5bCG54K554eD6Zeq55S177yMXCIsIFwi5b+F6ZW/5LmF5aaC5LqR5ryC5rOK44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwiSm9zaCBXb29kd2FyZC1TaGlwcy1Ob1ZveFwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cO+8mi8vam9zaHdvb2R3YXJkLmNvbS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Zub5aSVXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrniLHnmoTlk7LlrabjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mumbquiOsVwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLms4nmsLTmgLvmmK/lkJHmsrPmsLTmsYfmtYHvvIxcIiwgXCLmsrPmsLTlj4jmsYflhaXmtbfkuK3vvIxcIiwgXCLlpKnlrofnmoTovbvpo47msLjov5zono3mnIlcIiwgXCLkuIDnp43nlJzonJznmoTmhJ/mg4XvvJtcIiwgXCLkuJbkuIrlk6rmnInku4DkuYjlraTpm7bpm7bvvJ9cIiwgXCLkuIfniannlLHkuo7oh6rnhLblvotcIiwgXCLpg73lv4Xono3kvJrkuo7kuIDnp43nsr7npZ7jgIJcIixcclxuICAgICAgICAgIFwi5L2V5Lul5L2g5oiR5Y2054us5byC77yfXCIsIFwi5L2g55yL6auY5bGx5Lmf5Zyo5ZC7552A56Kn56m677yMXCIsIFwi5rOi5rWq5Lmf55u45LqS5oul5oqx77ybXCIsIFwi6LCB5pu+6KeB6Iqx5YS/5b285q2k5LiN5a6577yaXCIsIFwi5aeK5aa55oqK5byf5YWE6L276JSR77yfXCIsIFwi6Ziz5YWJ57Sn57Sn5Zyw5oul5oqx552A5aSn5Zyw77yMXCIsIFwi5pyI5YWJ5Zyo5ZC7552A5rW35rOi77yaXCIsXHJcbiAgICAgICAgICBcIuS9hui/meS6m+aOpeWQu+WPiOacieS9leebiu+8jFwiLCBcIuimgeaYr+S9oOS4jeiCr+WQu+aIke+8n1wiXSxcclxuICBcImJnbVwiOiBcIlN1bmRheXNDaGlsZFwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9hdWRpb25hdXRpeC5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIk5q5a6r6KKtXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrmi5zkvKboh7TmiZjpqazmlq/Ct+aRqeWwlOOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5LmU5rK7wrfmiIjnmbvCt+aLnOS8plwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLlsI/oiYflgZzlnKjlsrjovrnvvIxcIiwgXCLoiJ/mpavms4rlnKjmtbfph4zvvJtcIiwgXCLlnKjmiJHkuLTotbDkuYvliY3vvIzmiZjlp4bCt+aRqeWwlO+8jFwiLCBcIuaIkeWwhuWPjOWAjeeahOelneemj+WlieeMrue7meS9oO+8gVwiLCBcIueIseaIkeeahO+8jOaIkeaKpeS7peWPueaBr+OAglwiLCBcIuaBqOaIkeeahO+8jOaIkeS7mOS5i+S4gOeskeOAglwiLCBcIuaXoOiuuuWktOS4iueahOiLjeepueWmguS9leS4jea1i++8jFwiLFxyXG4gICAgICAgICAgXCLmiJHlr7nku7vkvZXkuIDnp43lkb3ov5Dpg73kuI3lnKjmhI/vvIFcIiwgXCLljbPkvb/mtbfmtpvlm7TnnYDmiJHlkoblk67vvIxcIiwgXCLlroPku43lsIbovb3ooYzmiJHnmoToiJ/mpavvvJtcIiwgXCLljbPkvb/mspnmvKDlsIbmiJHlm7DkvY/vvIxcIiwgXCLkuZ/ku43mnInms4nmupDorqnmiJHlr7vop4XjgIJcIiwgXCLljbPku6TmiJHmjKPmiY7lnKjnlJ/lkb3nmoTmgqzltJbvvIxcIiwgXCLms4nmsLTlhrPkuI3kvJrmnq/ml6DkuIDmu7TvvJtcIixcclxuICAgICAgICAgIFwi5Zyo5oiR6KGw5b6u55qE54G16a2C56a75byA5LmL5YmN77yMXCIsIFwi5Li65LqG5L2g77yM5oiR5bCG5ZWc6aWu5LiN5bey4oCmXCIsIFwi5LiU5oqK6YKj5pe255qE5rOJ5rC05b2T5L2c5LuK5pel55qE6YaH6Yaq77yMXCIsIFwi5oiR5bCG5oqK6L+Z5p2v5aWg6YWS5rO85rSS5Zyo5Zyw77ybXCIsIFwi5L2G5oS/5L2g5oiR5a6J5bq35peg5oGZ77yMXCIsIFwi5ZWK77yM5omY5aeGwrfmkanlsJTvvIznpZ3npo/kvaDvvIFcIl0sXHJcbiAgXCJiZ21cIjogXCJKb3NoIFdvb2R3YXJkLVNoaXBzLU5vVm94XCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRw77yaLy9qb3Nod29vZHdhcmQuY29tL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlm5vlpJVcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuavm+WnhuS6jOWImVwiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5q+b5aeGXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuS9oOimgeWFi+acjeeahOaYr+S9oOeahOiZmuiNo+W/g1wiLCBcIuaYr+S9oOeahOeCq+iAgOasslwiLCBcIuS9oOimgeWvueS7mOeahOaYr+S9oOeahOaXtuWIu+aDs+imgeWGsuWHuuadpeaDs+imgeWHuumjjuWktOeahOWwj+iBquaYjlwiLCBcIuaIkeS7juadpemDveaXoOazleW+l+efpe+8jFwiLCBcIuS6uuS7rOaYr+eptuern+S4uuS7gOS5iOS8mueIseS4iuWPpuS4gOS4quS6uu+8jFwiLFxyXG4gICAgICAgICAgXCLmiJHnjJzkuZ/orrjmiJHku6znmoTlv4PkuIrpg73mnInkuIDkuKrnvLrlj6PvvIxcIiwgXCLlroPmmK/kuKrnqbrmtJ7vvIzlkbzlkbznmoTlvoDngbXprYLph4zngYznnYDliLrpqqjnmoTlr5Lpo47vvIxcIiwgXCLmiYDku6XmiJHku6zmgKXliIfnmoTpnIDopoHkuIDkuKrmraPlpb3lvaLnirbnmoTlv4PmnaXloavkuIrlroPvvIxcIiwgXCLlsLHnrpfkvaDmmK/lpKrpmLPkuIDmoLflroznvo7nmoTmraPlnIblvaLvvIxcIiwgXCLlj6/mmK/miJHlv4Pph4znmoTnvLrlj6PvvIxcIixcclxuICAgICAgICAgIFwi5oiW6K645Y205oGw5oGw5piv5Liq5q2q5q2q5omt5omt55qE6ZSv6b2/5b2i77yMXCIsIFwi5omA5Lul5L2g5aGr5LiN5LqG44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwiS2V2aW4gTWFjTGVvZC1PaCBIb2x5IE5pZ2h0XCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2luY29tcGV0ZWNoLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlj7Pnn7PlhYjnlJ9cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuS4gOWJquaihcK36Zuo5omT5qKo6Iqx5rex6Zet6Zeo44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrllJDlr4VcIixcclxuICBcImNvbnRlbnRcIjogW1wi6Zuo5omT5qKo6Iqx5rex6Zet6Zeo77yM5b+Y5LqG6Z2S5pil77yM6K+v5LqG6Z2S5pil44CCXCIsIFwi6LWP5b+D5LmQ5LqL5YWx6LCB6K6677yf6Iqx5LiL6ZSA6a2C77yM5pyI5LiL6ZSA6a2C44CCXCIsIFwi5oSB6IGa55yJ5bOw5bC95pel6aKm77yM5Y2D54K55ZW855eV77yM5LiH54K55ZW855eV44CCXCIsIFwi5pmT55yL5aSp6Imy5pqu55yL5LqR77yM6KGM5Lmf5oCd5ZCb77yM5Z2Q5Lmf5oCd5ZCb44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwiaHlvdXRvdWthXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vbXVzaWMuZ2VvY2l0aWVzLmpwL2hha3V1X2FtYWJpbmUvXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuaxh+aWh1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5pyo5YWw6K+Nwrfmi5/lj6TlhrPnu53or43mn6zlj4vjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mue6s+WFsOaAp+W+t1wiLFxyXG4gIFwiY29udGVudFwiOiBbXCLkurrnlJ/oi6Xlj6rlpoLliJ3op4HvvIzkvZXkuovnp4vpo47mgrLnlLvmiYfjgIJcIiwgXCLnrYnpl7Llj5jljbTmlYXkurrlv4PvvIzljbTpgZPmlYXkurrlv4PmmJPlj5jjgIJcIiwgXCLpqorlsbHor63nvaLmuIXlrrXljYrvvIzms6rpm6jpm7bpk4Pnu4jkuI3mgKjjgIJcIiwgXCLkvZXlpoLoloTlubjplKbooaPpg47vvIzmr5Tnv7zov57mnp3lvZPml6XmhL/jgIJcIl0sXHJcbiAgXCJiZ21cIjogXCLjgYrlnLDolLXmp5jjga7jgYTjgovlsI/pgZNcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9hbWFjaGFtdXNpYy5jaGFnYXNpLmNvbS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5rGH5paHXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrlpoLmnpzmiJHkuI3mm77op4Hov4flpKrpmLPjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muiJvuexs+iOiS7ni4Tph5Hmo65cIixcclxuICBcImNvbnRlbnRcIjogW1wi5oiR5pys5Y+v5Lul5b+N5Y+X6buR5pqXXCIsIFwi5aaC5p6c5oiR5LiN5pu+6KeB6L+H5aSq6ZizXCIsIFwi54S26ICM6Ziz5YWJ5bey5L2/5oiR55qE6I2S5YeJXCIsIFwi5oiQ5Li65pu05paw55qE6I2S5YeJXCJdLFxyXG4gIFwiYmdtXCI6IFwiSm9zaCBXb29kd2FyZC1TaGlwcy1Ob1ZveFwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cO+8mi8vam9zaHdvb2R3YXJkLmNvbS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5rGH5paHXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrlgbbnhLbjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muW+kOW/l+aRqVwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLmiJHmmK/lpKnnqbrph4znmoTkuIDniYfkupFcIiwgXCLlgbblsJTmipXlvbHlnKjkvaDnmoTms6Llv4NcIiwgXCLkvaDkuI3lv4XorrblvIJcIiwgXCLmm7Tml6DpobvmrKLllpxcIiwgXCLlnKjovaznnqzpl7Tmtojnga3kuobouKrlvbFcIiwgXCLkvaDmiJHnm7jpgKLlnKjpu5HlpJznmoTmtbfkuIpcIiwgXCLkvaDmnInkvaDnmoTvvIzmiJHmnInmiJHnmoTvvIzmlrnlkJFcIiwgXCLkvaDorrDlvpfkuZ/lpb1cIixcclxuICAgICAgICAgIFwi5pyA5aW95L2g5b+Y5o6JXCIsIFwi5Zyo6L+Z5Lqk5Lya5pe25LqS5pS+55qE5YWJ5LquXCJdLFxyXG4gIFwiYmdtXCI6IFwiS2V2aW4gTWFjTGVvZC1TYXBwaGlyZSBJc2xlXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2luY29tcGV0ZWNoLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlm5vlpJVcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiumjnum4n+mbhuOAi+iKgumAiVwiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5rOw5oiI5bCUXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIldoZW4gSSBzdGFuZCBiZWZvcmUgdGhlZSBhdCB0aGUgZGF5J3MgZW5kLFwiLCBcInRob3Ugc2hhbHQgc2VlIG15IHNjYXJzIGFuZCBrbm93IHRoYXRcIixcclxuICAgICAgICAgIFwiSSBoYWQgbXkgd291bmRzIGFuZCBhbHNvIG15IGhlYWxpbmcuXCIsIFwi6ZW/5pel5bC95aSE77yM5oiR56uZ5Zyo5L2g55qE6Z2i5YmN77yMXCIsIFwi5L2g5bCG55yL5Yiw5oiR55qE55ak55eV77yMXCIsIFwi55+l6YGT5oiR5pu+57uP5Y+X5Lyk77yM5Lmf5pu+57uP55eK5oSI44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwiU3VuZGF5c0NoaWxkXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2F1ZGlvbmF1dGl4LmNvbS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrmiJHlj6/lkKblsIbkvaDmr5TlgZrkuIDkuKrlpI/ml6XjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muiOjuWjq+avlOS6mlwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLmiJHmmK/lkKblj6/ku6XmiorkvaDmr5TllrvmiJDlpI/lpKnvvJ9cIiwgXCLomb3nhLbkvaDmr5TlpI/lpKnmm7Tlj6/niLHmm7TmuKnlkozvvJpcIiwgXCLni4Lpo47kvJrkvb/kupTmnIjlqIfolb7nuqLmtojpppnmlq3vvIxcIiwgXCLlpI/lpKnmi6XmnInnmoTml7bml6XkuZ/ovaznnqzljbPov4fvvJtcIiwgXCLmnInml7blpKnnqbrkuYvlt6jnnLznm67lhYnlpKrngr3ng63vvIxcIixcclxuICAgICAgICAgIFwi5a6D6YeR54G/54G/55qE6Z2i6Imy5Lmf5bi46KKr6YGu5pqX77ybXCIsIFwi6ICM5Y2D6Iqz5LiH6Imz6YO957uI5bCG5YeL6Zu26aOY6JC977yMXCIsIFwi6KKr5pe26L+Q5aSp6YGT5Y+q5pu05pu/5Yml5bC957qi6aKc77ybXCIsIFwi5L2G5L2g5rC45oGS55qE5aSP5aSp5bCG5rKh5pyJ5q2i5bC977yMXCIsIFwi5L2g5omA5oul5pyJ55qE576O6LKM5Lmf5LiN5Lya5raI5aSx77yMXCIsIFwi5q2756We57uI6Zq+5aS45Y+j5L2g5ri46I2h5LqO5q276I2r77yMXCIsXHJcbiAgICAgICAgICBcIuW9k+S9oOWcqOS4jeacveeahOivl+S4reawuOiRhuebm+aXtu+8m1wiLCBcIuWPquimgeS6uuexu+eUn+WtmO+8jOaIluS6uuacieecvOedm++8jFwiLCBcIuaIkeeahOivl+WwseS8mua1geS8oOW5tui1i+S6iOS9oOeUn+WRveOAglwiXSxcclxuICBcImJnbVwiOiBcIkdyZWVuTGVhdmVzXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2F1ZGlvbmF1dGl4LmNvbS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwiTmrlrqvooq1cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuaIkeingei/h+S9oOWTreOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5LmU5rK7wrfmiIjnmbvCt+aLnOS8plwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLmiJHop4Hov4fkvaDlk61cIiwgXCLmmbbojrnnmoTnmoTms6rnj6BcIiwgXCLku47ok53nnLznnZvmu5HokL1cIiwgXCLlg4/kuIDmnLXmoqbkuK3lh7rnjrDnmoTntKvnvZflhbBcIiwgXCLmu7TkuIvmuIXpgI/nmoTpnLLnj6BcIiwgXCLmiJHop4Hov4fkvaDnrJFcIiwgXCLov57ok53lrp3nn7PnmoTlhYnoipJcIiwgXCLkuZ/lm6DkvaDogIzlpLHoibJcIixcclxuICAgICAgICAgIFwi5a6D5oCO6IO95q+U55qE5LiK5Zyo5L2g5Yed6KeG55qE55y85LitXCIsIFwi6Zeq546w55qE54G15rS75YWJ5b2pXCIsIFwi5bCx5aaC5ZCM5aSV6Ziz5Li66L+c5pa555qE5LqR5py1XCIsIFwi5p+T5LiK57ua54OC55qE6Imy5b2pXCIsIFwi57yT57yT6ICM5p2l55qE5pqu6Imy5Lmf5LiN6IO9XCIsIFwi5bCG6Zye5YWJ6YCQ5Ye65aSp5aSWXCIsIFwi5L2g55qE56yR5a656K6p5rKJ6Ze355qE5b+D54G1XCIsIFwi5YiG5Lqr57qv55yf55qE5qyi5LmQXCIsXHJcbiAgICAgICAgICBcIui/memYs+WFieeVmeS4i+eahOS4gOmBk+WFieiKklwiLCBcIueFp+S6ruS6huW/g+eBteS4iuepulwiXSxcclxuICBcImJnbVwiOiBcIumbqOOBruWknFwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL2FtYWNoYW11c2ljLmNoYWdhc2kuY29tL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCJOauWuq+iirVwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK6YaS5p2l6KeJ5b6X55Sa5piv54ix5L2g44CL5LiJ5YiZXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrmnLHnlJ/osapcIixcclxuICBcImNvbnRlbnRcIjogW1wi6YaS5p2l6KeJ5b6X55Sa5piv54ix5L2g44CCXCIsIFwi6KaB5piv5LiW5LiK5Y+q5pyJ5oiR5Lus5Lik5Liq5Lq65aSa5LmI5aW977yM5oiR5LiA5a6a6KaB5oqK5L2g5qy66LSf5b6X5ZOt5LiN5Ye65p2l44CCXCIsIFwi5oiR5oOz6KaB5Zyo6IyF5Lqt6YeM55yL6Zuo44CB5YGH5bGx6L6555yL6JqC6JqB77yM55yL6J206J225oGL54ix77yM55yL6JyY6Jub57uT572R77yM55yL5rC077yM55yL6Ii577yM55yL5LqR77yMXCIsXHJcbiAgICAgICAgICBcIueci+eAkeW4g++8jOeci+Wui+a4heWmgueUnOeUnOWcsOedoeinieOAglwiXSxcclxuICBcImJnbVwiOiBcIlJhZmFlbCBLcnV4LVBvbmRcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vZnJlZXBkLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCJOauWuq+iirVwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5b6u6KiA44CL6IqC6YCJXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrnuqrCt+WTiMK357qq5Lyv5LymXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuWcqOaIkeS7iuaXpeeahOaCsuS8pOmHjO+8jFwiLCBcIuacgOS4uuiLpua2qeeahOaYr+aIkeaYqOaXpeasouS5kOeahOWbnuW/huOAglwiLCBcIuiusOW/huaYr+S4gOenjeebuOiBmueahOaWueW8j+OAglwiLCBcIuW/mOWNtOaYr+S4gOenjeiHqueUseeahOaWueW8j+OAglwiLCBcIumZpOS6hum7keaal+S5i+i3r++8jOS6uuS4jeWPr+iDveWIsOi+vum7juaYjuOAglwiLFxyXG4gICAgICAgICAgXCLpmaTpnZ7miJHnmoTlv4Pnoo7kuobvvIzlkKbliJnlroPlj4jmgI7og73ooqvlvIDlkK/vvJ9cIl0sXHJcbiAgXCJiZ21cIjogXCJLZXZpbiBNYWNMZW9kLUJldGhsZWhlbVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9pbmNvbXBldGVjaC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIroirHlhL/nmoTnnLzms6rjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mumHkeWtkOe+jueOslwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLosIHpg73kuI3opoHlkYror4lcIiwgXCLlpb3lkJfvvJ9cIiwgXCLmuIXmmajluq3pmaLop5LokL3ph4zvvIxcIiwgXCLoirHlhL/mgoTmgoTmjonnnLzms6rnmoTkuovjgIJcIiwgXCLkuIfkuIDov5nkuovor7Tlh7rljrvkuobvvIxcIiwgXCLkvKDliLDonJzonILogLPmnLXph4zvvIxcIiwgXCLlroPkvJrlg4/lgZrkuobkuo/lv4PkuovkuIDmoLfvvIxcIiwgXCLpo57lm57ljrvov5jonILonJznmoTjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJSYWZhZWwgS3J1eC1Mb3ZlbHkgUGlhbm8gU29uZ1wiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9mcmVlcGQuY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWQg+ilv+eTnOeahOWwj+S6jOmDjlwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5LqO5oiR77yM6L+H5Y6777yM546w5Zyo5Lul5Y+K5pyq5p2l44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJropb/moLzph4zlpKvCt+iQqOadvlwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLkuo7miJHvvIzov4fljrvjgIHnjrDlnKjlkozmnKrmnaVcIiwgXCLllYborqjogZrkvJog5ZCE5omn5LiA6K+NIOe6t+aJsOS4jeaBr+OAglwiLCBcIuael+ael+aAu+aAu+eahOassuacm++8jOaOoOWPluedgOaIkeeahOeOsOWcqFwiLCBcIuaKiuKAnOeQhuaAp+KAneaJvOadgOS6juWug+eahOWuneW6p1wiLCBcIuaIkeeahOeIseaDhee6t+e6t+i2iui/h+acquadpeeahOiXqeevsVwiLFxyXG4gICAgICAgICAgXCLmoqbmg7Pop6PmlL7lh7rlroPku6znmoTlj4zohJog6Iie6LmI5LiN5YGcXCIsIFwi5LqO5oiR77yM56m05bGF5Lq65pSr5Y+W5LqG5YWI55+l77yMXCIsIFwi5L2p5oi06Iqx546v55qE6Zi/5rOi572X56WeXCIsIFwi5ZCR5Lqa5Lyv5ouJ572V55qE6IGL6ICz5ZSx5Y+55q2M5ZCf44CCXCIsIFwi5b+D5pyJ54yb6JmO77yM57uG5ZeF6JS36JaH44CCXCIsIFwi5a6h6KeG5oiR55qE5YaF5b+D5ZCn77yM5Lqy54ix55qE5pyL5Y+L77yM5L2g5bqU6aKk5qCX77yMXCIsXHJcbiAgICAgICAgICBcIuWboOS4uumCo+aJjeaYr+S9oOacrOadpeeahOmdouebruOAglwiXSxcclxuICBcImJnbVwiOiBcIkpvc2ggV29vZHdhcmQtU2hpcHMtTm9Wb3hcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHDvvJovL2pvc2h3b29kd2FyZC5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5LiA5o+h56CC44CL6IqC6YCJXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrnn7Plt53llYTmnKhcIixcclxuICBcImNvbnRlbnRcIjogW1wi5YGH5pyf55qE5pyA5ZCO5LiA5aSpXCIsIFwi6Lq65Zyo5rKZ5rup5LiK6K6p5r2u5rC05re55rKhXCIsIFwi562J5aSp5Lqu5LqG5bCx54is6LW35p2l5LiK54+tXCIsIFwi6Lev5peB55qE54uX5omT5LqG5Liq6ZW/6ZW/55qE5ZOI5qygXCIsIFwi5oiR5Lmf5a2m5a6D55qE5qC35a2QXCIsIFwi5Zug5Li6576h5oWV55qE57yY5pWFXCJdLFxyXG4gIFwiYmdtXCI6IFwiS2V2aW4gTWFjTGVvZC1HeW1ub3BlZGllIE5vIDFcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vaW5jb21wZXRlY2guY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5rKZ5LiO5rKr44CL6IqC6YCJXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrnuqrCt+WTiMK357qq5Lyv5LymXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuS9oOWcqOeZveWkqeeahOWkqumYs+WJjemdouaYr+iHqueUseeahO+8jFwiLCBcIuWcqOm7keWknOeahOaYn+i+sOWJjemdouS5n+aYr+iHqueUseeahO+8m1wiLCBcIuWcqOayoeacieWkqumYs++8jOayoeacieaciOS6ru+8jOayoeacieaYn+i+sOeahOaXtuWAme+8jFwiLCBcIuS9oOS5n+aYr+iHqueUseeahOOAglwiLCBcIuS9huaYr+S9oOaYr+S9oOaJgOeIseeahOS6uueahOWltOmatu+8jFwiLCBcIuWboOS4uuS9oOeIseS6huS7luOAglwiLFxyXG4gICAgICAgICAgXCLkvaDkuZ/mmK/niLHkvaDnmoTkurrnmoTlpbTpmrbvvIxcIiwgXCLlm6DkuLrku5bniLHkuobkvaDjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJLZXZpbiBNYWNMZW9kLUd5bW5vcGVkaWUgTm8gMlwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9pbmNvbXBldGVjaC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrkvaDlpJrkuYjlj6/niLHjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muS6muWOhuWxseWkp8K36LCi5bCU55uW6IC257u05aWHwrfmma7luIzph5FcIixcclxuICBcImNvbnRlbnRcIjogW1wiIOKAnOS9oOacgOWPr+eIseKAne+8jOaIkeivtOaXtuadpeS4jeWPiuaAnee0ou+8jFwiLCBcIuiAjOaAnee0ouS5i+WQju+8jOi/mOaYr+i/meagt+ivtOOAglwiLCBcIuaIkeWvueWlueivtDog5L2g5aSa5LmI5Y+v54ixISDvvIxcIiwgXCLlv4Pph4zljbTlnKjor7Q6IOaIkeWkmuS5iOeIseS9oCFcIiwgXCLkvaDlsL3lj6/ms6jop4bliKvkurrnmoTohLjvvIxcIiwgXCLkvYbor7fkv6Hku7vmiJHov5npopflv4PjgIJcIixcclxuICAgICAgICAgIFwi5Zyo5L2g5a2k54us44CB5oKy5Lyk55qE5pel5a2Q77yMXCIsIFwi6K+35L2g5oKE5oKE5Zyw5b+15LiA5b+15oiR55qE5ZCN5a2X77yMXCIsIFwi5bm25LiU6K+077ya5pyJ5Lq65Zyo5oCd5b+15oiR77yMXCIsIFwi5Zyo5LiW6Ze05oiR5rS75Zyo5LiA5Liq5Lq655qE5b+D6YeM44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwiUmFmYWVsIEtydXgtTG92ZWx5IFBpYW5vIFNvbmdcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vZnJlZXBkLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlm5vlpJVcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiumAoOS4gOS4quiNieWOn+OAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya6Im+57Gz6I6Jwrfni4Tph5Hmo65cIixcclxuICBcImNvbnRlbnRcIjogW1wi5Y676YCg5LiA5Liq6I2J5Y6fXCIsIFwi6ZyA6KaB5LiA5qCq5LiJ5Y+26I2J5ZKM5LiA5Y+q6Jyc6JyC77yMXCIsIFwi5LiA5qCq5LiJ5Y+26I2J5ZKM5LiA5Y+q6Jyc6JyC77yMXCIsIFwi6L+Y5pyJ5qKm44CCXCIsIFwi5aaC5p6c6Jyc6JyC5LiN5aSa77yMXCIsIFwi5Y2V6Z2g5qKm5Lmf6KGM44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwiS2V2aW4gTWFjTGVvZC1NaWRzdW1tZXIgU2t5XCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2luY29tcGV0ZWNoLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCJOauWuq+iirVwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi5aSP55uu5ryx55+z5LqM5YiZXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrlpI/nm67mvLHnn7NcIixcclxuICBcImNvbnRlbnRcIjogW1wi5L2g5LiN6KaB6K+05oiR5Zac5qyi5L2gIOS9oOimgeivtOi/meWkj+WknOeahOaciOiJsuecn+e+juS4vVwiLCBcIuatpOWIu+eDpui6geeahOW/g+aDheWwseWDj+eUqOWNgemZpOS7peS4ieW+l+WHuueahOe7k+aenOS4gOagt++8jOaXoOept+aXoOWwvVwiXSxcclxuICBcImJnbVwiOiBcIktldmluIE1hY0xlb2QtU3RhcnJ5XCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2luY29tcGV0ZWNoLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCJOauWuq+iirVwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5a+C5a+e5Lq65b+D44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrlvpDlv5fmkalcIixcclxuICBcImNvbnRlbnRcIjogW1wi5oiR55qE5LiW55WM5aSq6L+H5a6J6Z2Z77yMXCIsIFwi6Z2Z5b6X5Y+v5Lul5ZCs6KeB6Ieq5bex5b+D6Lez55qE5aOw6Z+z44CCXCIsIFwi5b+D5oi/55qE6KGA5ray5oWi5oWi5rWB5Zue5b+D5a6k77yMXCIsIFwi5aaC5q2k6L+Z6Iis55qE6L2u5Zue44CCXCIsIFwi6IGq5piO55qE5Lq677yM5Zac5qyi54yc5b+D77yMXCIsIFwi5Lmf6K6454yc5a+55LqG5Yir5Lq655qE5b+D77yMXCIsIFwi5Y205Lmf5aSx5Y675LqG6Ieq5bex55qE44CCXCIsXHJcbiAgICAgICAgICBcIuWCu+awlOeahOS6uu+8jOWWnOasoue7meW/g++8jFwiLCBcIuS5n+iuuOS8muiiq+S6uumql++8jFwiLCBcIuWNtOacquW/heiDveW+l+WIsOWIq+S6uueahOOAglwiLCBcIuS9oOS7peS4uuaIkeWIgOaequS4jeWFpe+8jFwiLCBcIuaIkeS7peS4uuS9oOeZvuavkuS4jeS+teOAglwiXSxcclxuICBcImJnbVwiOiBcIlJhZmFlbCBLcnV4LU5vc3RhbGdpYyBQaWFub1wiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9mcmVlcGQuY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5oiR5pu+5LiD5qyh6YSZ6KeG6Ieq5bex55qE54G16a2C44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrnuqrCt+WTiMK357qq5Lyv5LymXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuabvuacieS4g+asoeaIkemEmeinhuS6huiHquW3seeahOeBtemtgu+8mlwiLCBcIuesrOS4gOasoe+8jOW9k+Wug+acrOWPr+i/m+WPluaXtu+8jOWNtOaVheS9nOiwpuWNkVwiLCBcIuesrOS6jOasoe+8jOW9k+Wug+WcqOepuuiZmuaXtu+8jOeUqOeIseassuadpeWhq+WFhVwiLCBcIuesrOS4ieasoe+8jOWcqOWbsOmavuWSjOWuueaYk+S5i+mXtO+8jOWug+mAieaLqeS6huWuueaYk1wiLFxyXG4gICAgICAgICAgXCLnrKzlm5vmrKHvvIzlroPniq/kuobplJnvvIzljbTlgJ/nlLHliKvkurrkuZ/kvJrniq/plJnmnaXlrr3mhbDoh6rlt7FcIiwgXCLnrKzkupTmrKHvvIzlroPoh6rnlLHova/lvLHvvIzljbTmiorlroPorqTkuLrmmK/nlJ/lkb3nmoTlnZrpn6dcIiwgXCLnrKzlha3mrKHvvIzlvZPlroPphJnlpLfkuIDlvKDkuJHmgbbnmoTlmLTohLjml7bvvIzljbTkuI3nn6XpgqPmraPmmK/oh6rlt7HpnaLlhbfkuK3nmoTkuIDlia/vvJtcIixcclxuICAgICAgICAgIFwi56ys5LiD5qyh77yM5a6D5L6n6Lqr5LqO55Sf5rS755qE5rGh5rOl5Lit77yM6Jm95LiN55SY5b+D77yM5Y205Y+I55WP6aaW55WP5bC+44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwiS2V2aW4gTWFjTGVvZC1PaCBIb2x5IE5pZ2h0XCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2luY29tcGV0ZWNoLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlj7Pnn7PlhYjnlJ9cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuilv+axn+aciMK35LiW5LqL5LiA5Zy65aSn5qKm44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJroi4/ovbxcIixcclxuICBcImNvbnRlbnRcIjogW1wi5LiW5LqL5LiA5Zy65aSn5qKm77yM5Lq655Sf5Yeg5bqm56eL5YeJ44CCXCIsIFwi5aSc5p2l6aOO5Y+25bey6bij5buK44CCXCIsIFwi55yL5Y+W55yJ5aS06ayT5LiK44CCXCIsIFwi6YWS6LSx5bi45oSB5a6i5bCR77yM5pyI5piO5aSa6KKr5LqR5aao44CCXCIsIFwi5Lit56eL6LCB5LiO5YWx5a2k5YWJ44CCXCIsIFwi5oqK55uP5YeE54S25YyX5pyb44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwi5aSP6Imy5Y+Z5oOFXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vYW1hY2hhbXVzaWMuY2hhZ2FzaS5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWbm+WklVwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK6JK56JGt44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrkvZrlkI1cIixcclxuICBcImNvbnRlbnRcIjogW1wi6JK56JGt6IuN6IuN77yM55m96Zyy5Li66Zyc44CC5omA6LCT5LyK5Lq677yM5Zyo5rC05LiA5pa544CC5rqv5rSE5LuO5LmL77yM6YGT6Zi75LiU6ZW/44CC5rqv5ri45LuO5LmL77yM5a6b5Zyo5rC05Lit5aSu44CCXCIsIFwi6JK56JGt6JCL6JCL77yM55m96Zyy5pyq5pme44CC5omA6LCT5LyK5Lq677yM5Zyo5rC05LmL5rmE44CC5rqv5rSE5LuO5LmL77yM6YGT6Zi75LiU6Le744CC5rqv5ri45LuO5LmL77yM5a6b5Zyo5rC05Lit5Z2744CCXCIsXHJcbiAgICAgICAgICBcIuiSueiRremHh+mHh++8jOeZvemcsuacquW3suOAguaJgOiwk+S8iuS6uu+8jOWcqOawtOS5i+a2mOOAgua6r+a0hOS7juS5i++8jOmBk+mYu+S4lOWPs+OAgua6r+a4uOS7juS5i++8jOWum+WcqOawtOS4reaymuOAglwiXSxcclxuICBcImJnbVwiOiBcIm5lemFtZVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL211c2ljLmdlb2NpdGllcy5qcC9oYWt1dV9hbWFiaW5lL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlm5vlpJVcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuaIkeaYr+mAg+i3keeahOmCo+S4quOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya6LS55bCU5Y2X5aSawrfkvanntKLpmL9cIixcclxuICBcImNvbnRlbnRcIjogW1wi5oiR5piv6YCD6LeR55qE6YKj5Liq77yMXCIsIFwi5oiR5Ye655Sf5ZCOXCIsIFwi5LuW5Lus5oqK5oiR6ZSB5Zyo5oiR6YeM6Z2iXCIsIFwi5Y+v5oiR6LeR5LqG44CCXCIsIFwi5oiR55qE54G16a2C5a+75om+5oiR77yMXCIsIFwi56m/6L+H5bGx5bKX5LiO5bGx6LC377yMXCIsIFwi5oiR5biM5pyb5oiR55qE54G16a2CXCIsIFwi5rC46L+c5om+5LiN5Yiw5oiRXCJdLFxyXG4gIFwiYmdtXCI6IFwiQWxleGFuZGVyIE5ha2FyYWRhLVdpbnRlclwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9mcmVlcGQuY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK6LaK5Lq65q2M44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJpcIixcclxuICBcImNvbnRlbnRcIjogW1wi5LuK5aSV5L2V5aSV5YWu5pC05rSy5Lit5rWB44CCXCIsIFwi5LuK5pel5L2V5pel5YWu5b6X5LiO546L5a2Q5ZCM6Iif44CCXCIsIFwi6JKZ576e6KKr5aW95YWu5LiN6Ki+6K+f6IC744CCXCIsIFwi5b+D5Yeg54Om6ICM5LiN57ud5YWu5b6X55+l546L5a2Q44CCXCIsIFwi5bGx5pyJ5pyo5YWu5pyo5pyJ5p6d44CCXCIsIFwi5b+D5oKm5ZCb5YWu5ZCb5LiN55+l44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwi5qGc6ZuyXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vYW1hY2hhbXVzaWMuY2hhZ2FzaS5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWQg+ilv+eTnOeahOWwj+S6jOmDjlwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK55Sf5ZG95piv5oiR5Lus5oul5pyJ55qE5LiA5YiH44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJpELkguIOWKs+S8puaWr1wiLFxyXG4gIFwiY29udGVudFwiOiBbXCLmtLvnnYDml7bvvIznlJ/lkb3mmK/miJHku6zmi6XmnInnmoTkuIDliIfvvJtcIiwgXCLlpoLmnpzkvaDkuI3lnKjnlJ/lkb3kuK3mtLvnnYDvvIzkvaDmmK/kuIDlnajnsqrjgIJcIiwgXCLlt6XkvZzmmK/nlJ/lkb3vvIznlJ/lkb3lr5Pkuo7lt6XkvZzvvIxcIiwgXCLpmaTpnZ7kvaDmmK/lt6XotYTnmoTlpbTpmrbjgIJcIiwgXCLlvZPlt6XotYTnmoTlpbTpmrblt6XkvZzvvIzku5blsIbnlJ/lkb3mkIHnva7kuIDml4HvvIxcIixcclxuICAgICAgICAgIFwi56uZ5Zyo6YKj6YeM5YOP5LiA5Z2o57Kq44CCXCIsIFwi5Lq65bqU6K+l5ouS57ud5q+r5peg55Sf5rCU5Zyw5bel5L2c44CCXCIsIFwi5Lq65bqU6K+l5ouS57ud5Y+Y5Li65LiA5aCG5aCG6LWa5bel6LWE55qE57Kq44CCXCIsIFwi5Lq65bqU6K+l5b275bqV5ouS57ud5L2c5Li65bel6LWE55qE5aW06Zq26ICM5bel5L2c44CCXCIsIFwi5Lq65bqU6K+l6KaB5rGC5Li66Ieq5bex5bel5L2c77yM5YGa6Ieq5bex55qE5bel5L2c77yM5bCG55Sf5ZG95oqV5YWl5YW25Lit44CCXCIsXHJcbiAgICAgICAgICBcIuWboOS4uuWmguaenOS6uueahOW3peS9nOmHjOayoeacieeUn+WRve+8jOS7luWfuuacrOS4iuaYr+S4gOWghueyquOAglwiXSxcclxuICBcImJnbVwiOiBcIuOCouOCpOODquODg+OCt+ODpeOBrumiqFwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL2FtYWNoYW11c2ljLmNoYWdhc2kuY29tL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlj7Pnn7PlhYjnlJ9cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAijE5MjflubTmmKXvvIzluJXmlq/mjbflsJTnurPlhYvoh7TojKjnu7TloZTogLblqIPjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mumyjeWIqeaWr8K35YiX5aWl5bC85aSa57u05aWHwrfluJXmlq/mjbflsJTnurPlhYtcIixcclxuICBcImNvbnRlbnRcIjogW1wi5oiR5Lus5aSa5LmI6I2J546H5Zyw5oiQ5Li65LqG5a2k5YS/44CCIOeOm+eQs+WonO+8jFwiLCBcIui/meaYr+aIkeacgOWQjuS4gOasoeWRvOWUpOS9oOeahOWQjeWtl+OAglwiLCBcIuWkp+mbquiQveWcqOaIkemUiOi/ueaWkeaWkeeahOawlOeuoeWSjOiCuuWPtuS4iu+8jFwiLCBcIuivtOWQp++8muS7iuWknO+8jOaIkeeahOWXk+mfs+aYr+S4gOWIl+iiq+aIquWBnOeahOeBq+i9pu+8jFwiLFxyXG4gICAgICAgICAgXCLkvaDnmoTlkI3lrZfmmK/kv4TnvZfmlq/mvKvplb/nmoTlm73looPnur/jgIJcIiwgXCLmiJHmg7PosaHmiJHku6znmoTnm7jpgYfvvIzlnKjkuIDlnLrpmobph43nmoTmrbvkuqHog4zpnaJcIiwgXCLvvIjnjqvnkbDnmoTnn5vnm77otK/nqb/kuobku5bnoZXlpKfnmoTlv4PvvInvvJtcIiwgXCLlnKjkuIDkuZ3kuozkuIPlubTmmKXlpJzvvIzmiJHku6zlnKjlm73looPnur/nm7jpgYdcIiwgXCLlm6DmraTplJnov4fkuoZcIixcclxuICAgICAgICAgIFwi6L+Z5Liq5ZG85ZW4552A5aWU5ZCR57uI54K555qE5LiW55WM44CCXCIsIFwi6ICM5LuK5aSc77yM5L2g5piv6Iie5puy77yM5LiW55WM5piv6ZSZ6K+v44CCXCIsIFwi5b2T5paw5bm055qE6ZKf5aOw5pWy5ZON55qE5pe25YCZ77yM55m+5ZCI6Iqx55ub5pS+XCIsIFwi4oCU4oCU5LuW5Lul5LuW55qE5q275a6j5ZGK5LqG5LiW57qq55qE57uI57uT77yMXCIsIFwi6ICM5LiN5piv5oiR5Lus5bC05bCs55qE55Sf5a2Y44CCXCIsXHJcbiAgICAgICAgICBcIuS4uuS7gOS5iOaIkeimgeWvueS9oOS7rOayiem7mO+8n1wiLCBcIuW9k+WNjuWwlOWFueiInuabsuWlj+i1t+eahOaXtuWAme+8jOaIkeWcqOiwouW5leOAglwiLCBcIuWboOS4uuS7iuWknO+8jOS9oOaYr+aXi+i9rO+8jOaIkeaYr+i/t+WkseOAglwiLCBcIuW9k+S9oOi9rOaNouiInuS8tOeahOaXtuWAme+8jOaIkeWwhuWcqOS4lueVjOeahOeVmeiogOWGjOS4ilwiLCBcIuaKueWOu+aIkeeahOWQjeWtl+OAglwiLCBcIueOm+eQs+WonO+8jOWbveWig+e6v+eahOiInuS8mlwiLFxyXG4gICAgICAgICAgXCLlgZzmraLvvIzlpKfpm6rokL3lkJHmiJHku6zlkIToh6rlraTljZXnmoTlkb3ov5DjgIJcIiwgXCLmiJHmrYzllLHkuobov5nlr5LlhrfnmoTmmKXlpKnvvIzmiJHmrYzllLHkuobmiJHku6znmoTlup/lop9cIiwgXCLigKbigKbnhLblkI7miJHlj4jlsIbmsonpu5jkuI3or63jgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJSYWZhZWwgS3J1eC1Ob3N0YWxnaWMgUGlhbm9cIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vZnJlZXBkLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlj7Pnn7PlhYjnlJ9cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuWkj+WkqeOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya572X5Lyv54m5LueTpuWwlOazvVwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLlnKjlpI/lpKnvvIzmiJHku6zlkIPnu7/osYbvvIxcIiwgXCLmoYPvvIzmqLHmoYPlkoznlJznk5zjgIJcIiwgXCLlnKjlkITnp43mhI/kuYnkuIrpg73mvKvplb/kuJTmhInlv6tcIiwgXCLml6XlrZDlj5Hlh7rlo7Dlk43jgIJcIiwgXCLliJfovabnu4/ov4fkuaHkuIvvvIxcIiwgXCLml5fluJzmgqbliqjlnKjlsYvpobbkuIrjgIJcIiwgXCLlnKjoiLnkuIrlpJrkuYjmg6zmhI9cIiwgXCLlkajlm7TmmK/muJDplb/nmoTmsLTpnaLjgIJcIixcclxuICAgICAgICAgIFwi5bGx6aG25LiK6KaG55uW552A6Zuq77yMXCIsIFwi6Iqx5pWj5Y+R6aaZ5ZGz44CC5Zyo5rmW5LiKXCIsIFwi5L2g5Y+v5Lul6Iqx5omA5pyJ5pe26Ze0XCIsIFwi5Lqr5Y+X5ZSx5q2M55qE5LmQ6Laj44CCXCIsIFwi5oiR5LiN55+l6YGT5LuA5LmI5L2/5oiR5ruh6Laz77yMXCIsIFwi5L2g6Lq65Zyo6I2J5Zyw5LiK55yL5LmmXCIsIFwi5ZCs5Yiw5L2g55qE5Zub5ZGo5pivXCIsIFwi5peg5Yqb55qE6JqK6J2H5Zeh5Zeh552A44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwiT25lRmluZURheVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9hdWRpb25hdXRpeC5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIk5q5a6r6KKtXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrmrYzpooLmmbrmhafkuYvnvo7jgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mumbquiOsVwiLFxyXG4gIFwiY29udGVudFwiOiBbXCJUaHkgbGlnaHQgYWxvbmUgLSBsaWtlIG1pc3QgbydlciB0aGUgbW91bnRhaW5zIGRyaXZlbu+8jFwiLFxyXG4gICAgICAgICAgXCJPciBtdXNpYyBieSB0aGUgbmlnaHQtd2luZCBzZW50IHRocm91Z2ggc3RyaW5ncyBvZiBzb21lIHN0aWxsIGluc3RydW1lbnTvvIxcIixcclxuICAgICAgICAgIFwiT3IgbW9vbmxpZ2h0IG9uIGEgbWlkbmlnaHQgc3RyZWFtLlwiLCBcIuWUr+acieS9oOeahOWFiei+iSDog73lg4/mvKvov4flsbHlsq3nmoToloTpm75cIiwgXCLlg4/lkozpo47ku47pnZnosKfnmoTkuJbnlYznkLTlvKbph4zluKbmnaXnmoTlpJzmm7JcIiwgXCLlg4/mnJfnhafmuqrmsLTnmoTmnIjoibJcIl0sXHJcbiAgXCJiZ21cIjogXCJLZXZpbiBNYWNMZW9kLVNhcHBoaXJlIElzbGVcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vaW5jb21wZXRlY2guY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuaxh+aWh1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK6Zuo5be344CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrmiLTmnJvoiJJcIixcclxuICBcImNvbnRlbnRcIjogW1wi5pKR552A5rK557q45Lye77yM54us6IeqXCIsIFwi5b235b6o5Zyo5oKg6ZW/44CB5oKg6ZW/XCIsIFwi5Y+I5a+C5a+l55qE6Zuo5be3XCIsIFwi5oiR5biM5pyb6YCi552AXCIsIFwi5LiA5Liq5LiB6aaZ5LiA5qC35ZywXCIsIFwi57uT552A5oSB5oCo55qE5aeR5aiYXCIsIFwi5aW55piv5pyJXCIsIFwi5LiB6aaZ5LiA5qC355qE6aKc6ImyXCIsIFwi5LiB6aaZ5LiA5qC355qE6Iqs6IqzXCIsXHJcbiAgICAgICAgICBcIuS4gemmmeS4gOagt+eahOW/p+aEgVwiLCBcIuWcqOmbqOS4reWTgOaAqFwiLCBcIuWTgOaAqOWPiOW9t+W+qFwiLCBcIuWlueW9t+W+qOWcqOi/meWvguWvpeeahOmbqOW3t1wiLCBcIuaSkeedgOayuee6uOS8nlwiLCBcIuWDj+aIkeS4gOagt1wiLCBcIuWDj+aIkeS4gOagt+WcsFwiLCBcIum7mOm7mOW9s+S6jeedgFwiLCBcIuWGt+a8oOOAgeWHhOa4he+8jOWPiOaDhuaAhVwiLCBcIuWluem7mOm7mOWcsOi1sOi/kVwiLFxyXG4gICAgICAgICAgXCLotbDov5HvvIzlj4jmipXlh7pcIiwgXCLlpKrmga/kuIDoiKznmoTnnLzlhYlcIiwgXCLlpbnpo5jov4dcIiwgXCLlg4/moqbkuIDoiKzlnLBcIiwgXCLlg4/moqbkuIDoiKzlnLDlh4TlqYnov7fojKtcIiwgXCLlg4/moqbkuK3po5jov4dcIiwgXCLkuIDmnp3kuIHpppnlnLBcIiwgXCLmiJHouqvml4Hpo5jov4fov5nlpbPpg45cIiwgXCLlpbnpnZnpu5jlnLDov5zkuobjgIHov5zkuoZcIiwgXCLliLDkuobpopPlnK7nmoTnr7HloplcIixcclxuICAgICAgICAgIFwi6LWw5bC96L+Z6Zuo5be3XCIsIFwi5Zyo6Zuo55qE5ZOA5puy6YeMXCIsIFwi5raI5LqG5aW555qE6aKc6ImyXCIsIFwi5pWj5LqG5aW555qE6Iqs6IqzXCIsIFwi5raI5pWj5LqG77yM55Sa6Iez5aW555qEXCIsIFwi5aSq5oGv6Iis55qE55y85YWJXCIsIFwi5LiB6aaZ6Iis55qE5oOG5oCFXCIsIFwi5pKR552A5rK557q45Lye77yM54us6IeqXCIsIFwi5b235b6o5Zyo5oKg6ZW/44CB5oKg6ZW/XCIsIFwi5Y+I5a+C5a+l55qE6Zuo5be3XCIsXHJcbiAgICAgICAgICBcIuaIkeW4jOacm+mjmOi/h1wiLCBcIuS4gOS4quS4gemmmeS4gOagt+WcsFwiLCBcIue7k+edgOaEgeaAqOeahOWnkeWomFwiXSxcclxuICBcImJnbVwiOiBcIktldmluIE1hY0xlb2QtR3ltbm9wZWRpZSBObyAxXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2luY29tcGV0ZWNoLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlm5vlpJVcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuivl+e7j8K36buN56a744CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJpcIixcclxuICBcImNvbnRlbnRcIjogW1wi5b286buN56a756a777yM5b2856i35LmL6IuX44CC6KGM6L+I6Z2h6Z2h77yM5Lit5b+D5pGH5pGH44CC55+l5oiR6ICF77yM6LCT5oiR5b+D5b+n77yb5LiN55+l5oiR6ICF77yM6LCT5oiR5L2V5rGC44CC5oKg5oKg6IuN5aSp77yM5q2k5L2V5Lq65ZOJ77yfXCIsXHJcbiAgICAgICAgICBcIuW9vOm7jeemu+emu++8jOW9vOeot+S5i+epl+OAguihjOi/iOmdoemdoe+8jOS4reW/g+WmgumGieOAguefpeaIkeiAhe+8jOiwk+aIkeW/g+W/p++8m+S4jeefpeaIkeiAhe+8jOiwk+aIkeS9leaxguOAguaCoOaCoOiLjeWkqe+8jOatpOS9leS6uuWTie+8n1wiLFxyXG4gICAgICAgICAgXCLlvbzpu43nprvnprvvvIzlvbznqLfkuYvlrp7jgILooYzov4jpnaHpnaHvvIzkuK3lv4PlpoLlmY7jgILnn6XmiJHogIXvvIzosJPmiJHlv4Plv6fvvJvkuI3nn6XmiJHogIXvvIzosJPmiJHkvZXmsYLjgILmgqDmgqDoi43lpKnvvIzmraTkvZXkurrlk4nvvJ9cIl0sXHJcbiAgXCJiZ21cIjogXCJvbWl3YXRhcmlcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9tdXNpYy5nZW9jaXRpZXMuanAvaGFrdXVfYW1hYmluZS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Zub5aSVXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrlubLojYnloIbjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muWlpeilv+aZrsK35Z+D57Gz5bCU6IC257u05aWHwrfmm7zlvrflsJTmlr3loZTlp4ZcIixcclxuICBcImNvbnRlbnRcIjogW1wi5oiR6aG65omL5pCt6LW35LiA5p625pyo5qKvXCIsIFwi54is5LiK5oqr5pWj55qE5bmy6I2J5qOa6aG277yMXCIsIFwi5oiR5Zyo5ZG85ZC46ZO25rKz55qE56KO5bGR77yMXCIsIFwi5oiR5Zyo5ZG85ZC45a6H5a6Z55qE55eF55eH44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwiS2V2aW4gTWFjTGVvZC1TdGFycnlcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vaW5jb21wZXRlY2guY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIk5q5a6r6KKtXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrlv4PnmoTmrYzjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muWNoeeTpuiPsuaWr1wiLFxyXG4gIFwiY29udGVudFwiOiBbXCLmnInkuobkvaDvvIzmiJHmg7PvvIzkuIDliIfmhInlv6vnmoTkuovnianpg73mnJ3miJHlvq7nrJHvvIxcIiwgXCLlnKjkvaDnnLznnZvnmoTplZzlrZDph4zlj43mmKDnnYDmrKLkuZDjgIJcIiwgXCLnlZnkuIvmnaXvvIzmiJHnmoTlhYnvvIzmiYDmnInpgqPkupvlj6ropoHkvaDnnIvmiJHkuIDnnLxcIiwgXCLkvr/lhYXmu6Hmv4Dmg4XlnLDojaHmvL7lnKjmiJHlv4PkuIrjgIFcIixcclxuICAgICAgICAgIFwi5raM5Yiw5oiR5ZSH6Ze055qE5oSf6KeJ77yM5oiR6L+Y5rKh5pyJ5ZGK6K+J5L2g5ZOq5oCV5LiA5Y2K44CCXCIsIFwi5aaC5p6c5L2g5biM5pyb77yM5L2g5Y+v5Lul5LiN6Lef5oiR6K6y77yMXCIsIFwi5Lmf5LiN6KaB6K+05Lqb54ix5ZKM5YC+5oWV55qE6L+35Lq66K+d44CCXCIsIFwi6L+Z5Lqb5bey6Laz5aSf77ya5pyJ5L2g5Zyo6L+R5peB77yMXCIsIFwi5oiR5Y+v5Lul5ZGK6K+J5L2g5oiR6ZyA6KaB5L2g77yM5Y+v5Lul5o6l6Kem5L2g77yMXCIsXHJcbiAgICAgICAgICBcIuWPr+S7peWRvOWQuOS9oOWRvOWQuOeahOaXqeaZqOeahOa4heaWsO+8m1wiLCBcIuiAjOWmguaenOS9oOinieW+l+Wwsei/nui/meS6m+S5n+aYr+WkmuS9meeahO+8jFwiLCBcIumCo+S5iOS7heS7heingeWIsOS9oOS5n+W3sui2s+Wkn++8gVwiLCBcIuW4jOacm+S7peWQjuS9oOeci+WIsOeahOmDveaYr+WxnuS6juiHquW3seeahOW5uOemj++8jFwiLCBcIuWKquWKm+edgOeahOaYr+WxnuS6juiHquW3seW5uOemj+eahOWwj+S6i+OAglwiLFxyXG4gICAgICAgICAgXCLnj43mg5znnYDnmoTmmK/pnaDov5HkvaDnmoTlv4PjgIJcIiwgXCLogIzkuI3mmK/liKvkurrnmoTjgIJcIiwgXCLlhbPkuo7niLHov5nku7blsI/kuovvvIxcIiwgXCLopoHlkozliKvkurrkuIDotbflj5HnlJ/jgIJcIiwgXCLmiY3og73mirXovr7pgqPkvLzkuY7pgaXkuI3lj6/lj4rnmoTniLHnmoTlvbzlsrjjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJLZXZpbiBNYWNMZW9kLU1pZHN1bW1lciBTa3lcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vaW5jb21wZXRlY2guY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIk5q5a6r6KKtXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrkupHjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mumHkeWtkOe+jueOslwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLmiJHmg7Plj5jmiJDkuIDmnLXkupHjgIJcIiwgXCLlj4jmnb7lj4jova9cIiwgXCLpo5jlnKjok53lpKnph4xcIiwgXCLku47ov5nlpLTliLDpgqPlpLRcIiwgXCLnnIvlpJ/kuobpo47mma/vvIxcIiwgXCLmmZrkuIrlsLHot5/mnIjkuq7mjYnov7fol4/jgIJcIiwgXCLnjqnohbvkuoZcIiwgXCLlsLHlj5jmiJDpm6jjgIJcIiwgXCLot5/pm7flhaxcIiwgXCLnu5PkuKrkvLTvvIxcIixcclxuICAgICAgICAgIFwi5LiA6LW36Lez5YiwXCIsIFwi5Lq65a6255qE5rGg5aGY6YeM5Y6744CCXCJdLFxyXG4gIFwiYmdtXCI6IFwiUmFmYWVsIEtydXgtUG9uZFwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9mcmVlcGQuY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWQg+ilv+eTnOeahOWwj+S6jOmDjlwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK6ZW/5LmF5rKJ6buY5ZCO44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrlqIHlu4nCt+W3tOeJueWLksK35Y+26IqdXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIumVv+S5heayiem7mOWQjuW8gOWPo++8muayoemUme+8jFwiLCBcIuWIq+eahOaDheS6uumDveW3sueWj+i/nOaIluatu+WOu++8jFwiLCBcIuS4jeWPi+WlveeahOeBr+WFieeUqOeBr+e9qeaMoeS9j++8jFwiLCBcIuS4jeWPi+WlveeahOWknOaZmueUqOeql+W4mOaMoeS9j++8jFwiLCBcIuaIkeS7rOiwiOWViuiwiOWVilwiLCBcIuWPjeWkjeiwiOiuuuiJuuacr+WSjOatjOi/meacgOmrmOS4u+mimO+8mlwiLFxyXG4gICAgICAgICAgXCLouqvkvZPoobDogIHmmbrmhafmlrnlvIDvvIzlubTovbvml7ZcIiwgXCLmiJHku6zmm77nm7jniLHljbTmtZHnhLbkuI3nn6VcIl0sXHJcbiAgXCJiZ21cIjogXCJKb3NoIFdvb2R3YXJkLUF1dHVtblwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cO+8mi8vam9zaHdvb2R3YXJkLmNvbS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Zub5aSVXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrlkInmqoDov6bliKnjgIvoioLpgIlcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muazsOaIiOWwlFwiLFxyXG4gIFwiY29udGVudFwiOiBbXCJFeWVzIGFyZSByYWluaW5nIGZvciBoZXIsXCIsIFwiaGVhcnQgaXMgaG9sZGluZyB1bWJyZWxsYSBmb3IgaGVyLFwiLCBcInRoaXMgaXMgbG92ZS5cIiwgXCLnnLznnZvkuLrlpbnkuIvnnYDpm6jvvIxcIixcclxuICAgICAgICAgIFwi5b+D5Y205Li65aW55omT552A5Lye77yMXCIsIFwi6L+Z5bCx5piv54ix5oOF44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwiS2V2aW4gTWFjTGVvZC1TYXBwaGlyZSBJc2xlXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2luY29tcGV0ZWNoLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlj7Pnn7PlhYjnlJ9cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuS4gOaPoeegguOAi+iKgumAiVwiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya55+z5bed5ZWE5pyoXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuaMqOS6humqglwiLCBcIuWTh+eahOS4gOWjsOWwseWTreWHuuadpeeahOWEv+erpeeahOW/g+aDhe+8m1wiLCBcIuaIkeS5n+aDs+imgeaciemCo+enjeW/g+aDheOAglwiXSxcclxuICBcImJnbVwiOiBcIlJhZmFlbCBLcnV4LU5vc3RhbGdpYyBQaWFub1wiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9mcmVlcGQuY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWQg+ilv+eTnOeahOWwj+S6jOmDjlwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5oiR5oOz5ZKM5L2g5LiA6LW355Sf5rS744CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrnjpvnkLPlqJzCt+S8iuS4h+ivuuWkq+WonMK36Iyo57u05aGU6IC25aiDXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuaIkeaDs+WSjOS9oOS4gOi1t+eUn+a0u+WcqOafkOS4quWwj+mVh++8jFwiLCBcIuWFseS6q+aXoOWwveeahOm7hOaYj+WSjOe7tee7teS4jee7neeahOmSn+WjsOOAglwiLCBcIuWcqOi/meS4quWwj+mVh+eahOaXheW6l+mHjOKAlOKAlFwiLCBcIuWPpOiAgeaXtumSn+aVsuWHuueahOW+ruW8seWTjeWjsFwiLCBcIuWDj+aXtumXtOi9u+i9u+a7tOiQveOAglwiLFxyXG4gICAgICAgICAgXCLmnInml7blgJnvvIzlnKjpu4TmmI/vvIzoh6rpobbmpbzmn5DkuKrmiL/pl7TkvKDmnaXnrJvlo7DvvIxcIiwgXCLlkLnnrJvogIXlgJrokZfnqpfniZbvvIxcIiwgXCLogIznqpflj6PlpKfmnLXpg4Hph5HpppnjgIJcIiwgXCLmraTliLvkvaDoi6XkuI3niLHmiJHvvIzmiJHkuZ/kuI3kvJrlnKjmhI/jgIJcIiwgXCLlnKjmiL/pl7TkuK3lpK7vvIzkuIDkuKrno4HnoJbnoIzmiJDnmoTngonlrZBcIiwgXCLmr4/kuIDlnZfno4HnoJbkuIrnlLvokZfkuIDluYXnlLtcIixcclxuICAgICAgICAgIFwi5LiA6aKX5b+D77yM5LiA6ImY5biG6Ii577yM5LiA5py1546r55GwXCIsIFwi6ICM6Ieq5oiR5Lus5ZSv5LiA55qE56qX5oi35byg5pybXCIsIFwi6Zuq77yM6Zuq77yM6Zuq44CCXCIsIFwi5L2g5Lya6Lq65oiQ5oiR5Zac5qyi55qE5ae/5Yq/XCIsIFwi5oW15oeS77yM5reh54S277yM5Ya35rygXCIsIFwi5LiA5Lik5Zue54K554eD54Gr5p+055qE5Yi66ICz5aOwXCIsIFwi6aaZ54Of55qE54Gr6IuX55Sx5pe66L2s5byx77yMXCIsXHJcbiAgICAgICAgICBcIueDn+eahOacq+aioumipOaKluiRl++8jOmipOaKluiRl1wiLCBcIuefreWwj+eBsOeZveeahOeDn+iSglwiLCBcIui/nueBsOeDrCDkvaDpg73mh5LlvpflvLnokL1cIiwgXCLpppnng5/pgYLpo57oiJ7ov5vngavkuK1cIl0sXHJcbiAgXCJiZ21cIjogXCJSYWZhZWwgS3J1eC1Qb25kXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2ZyZWVwZC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5rGH5paHXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrkuZ/mmK/lvq7kupHjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muiDoemAglwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLkuZ/mmK/lvq7kupHvvIxcIiwgXCLkuZ/mmK/lvq7kupHov4flkI7mnIjlhYnmmI7jgIJcIiwgXCLlj6rkuI3op4HljrvlubTlvpfmuLjkvLTvvIxcIiwgXCLkuZ/msqHmnInlvZPml6XnmoTlv4Pmg4XjgIJcIiwgXCLkuI3mhL/li77otbfnm7jmgJ3vvIxcIiwgXCLkuI3mlaLlh7rpl6jnnIvmnIjjgIJcIiwgXCLlgY/lgY/mnIjov5vnqpfmnaXvvIxcIiwgXCLlrrPmiJHnm7jmgJ3kuIDlpJzjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJBbGV4YW5kZXIgTmFrYXJhZGEtV2ludGVyXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2ZyZWVwZC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5rGH5paHXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIropb/mtLLmm7LjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mlwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLlv4bmooXkuIvopb/mtLLvvIzmipjmooXlr4TmsZ/ljJfjgIJcIiwgXCLljZXooavmnY/lrZDnuqLvvIzlj4zprJPpuKbpm4/oibLjgIJcIiwgXCLopb/mtLLlnKjkvZXlpITvvJ/kuKTmoajmoaXlpLTmuKHjgIJcIiwgXCLml6Xmmq7kvK/lirPpo57vvIzpo47lkLnkuYzoh7zmoJHjgIJcIiwgXCLmoJHkuIvljbPpl6jliY3vvIzpl6jkuK3pnLLnv6Dpkr/jgIJcIiwgXCLlvIDpl6jpg47kuI3oh7PvvIzlh7rpl6jph4fnuqLojrLjgIJcIixcclxuICAgICAgICAgIFwi6YeH6I6y5Y2X5aGY56eL77yM6I6y6Iqx6L+H5Lq65aS044CCXCIsIFwi5L2O5aS05byE6I6y5a2Q77yM6I6y5a2Q5riF5aaC5rC044CCXCIsIFwi572u6I6y5oCA6KKW5Lit77yM6I6y5b+D5b275bqV57qi44CCXCIsIFwi5b+G6YOO6YOO5LiN6Iez77yM5Luw6aaW5pyb6aOe6bi/44CCXCIsIFwi6bi/6aOe5ruh6KW/5rSy77yM5pyb6YOO5LiK6Z2S5qW844CCXCIsIFwi5qW86auY5pyb5LiN6KeB77yM5bC95pel5qCP5p2G5aS044CCXCIsXHJcbiAgICAgICAgICBcIuagj+adhuWNgeS6jOabsu+8jOWeguaJi+aYjuWmgueOieOAglwiLCBcIuWNt+W4mOWkqeiHqumrmO+8jOa1t+awtOaRh+epuue7v+OAglwiLCBcIua1t+awtOaipuaCoOaCoO+8jOWQm+aEgeaIkeS6puaEgeOAglwiLCBcIuWNl+mjjuefpeaIkeaEj++8jOWQueaipuWIsOilv+a0suOAglwiXSxcclxuICBcImJnbVwiOiBcIuahnOmbslwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL2FtYWNoYW11c2ljLmNoYWdhc2kuY29tL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlkIPopb/nk5znmoTlsI/kuozpg45cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuS9oOS4jeWWnOasoueahOavj+S4gOWkqeS4jeaYr+S9oOeahCDjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mui0ueWwlOWNl+WkmsK35L2p57Si6Zi/XCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuS9oOS4jeWWnOasoueahOavj+S4gOWkqeS4jeaYr+S9oOeahFwiLCBcIuS9oOS7heS7heW6pui/h+S6huWugyDml6DorrrkvaDov4fnnYDku4DkuYjmoLfnmoRcIiwgXCLmsqHmnInllpzmgqbnmoTnlJ/mtLvvvIzkvaDpg73msqHmnInnlJ/mtLtcIiwgXCLkvaDml6DpobvljrvniLHvvIzmiJbogIXljrvppa7phZLmiJbogIXlvq7nrJFcIiwgXCLpmLPlhYnlgJLmmKDlnKjmsLTlnZHph4xcIixcclxuICAgICAgICAgIFwi5bCx6Laz5aSf5LqG77yM5aaC5p6c5a6D5Luk5L2g5oSJ5oKmXCIsIFwi5bm456aP55qE5Lq677yM5oqK5LuW5Lus55qE5qyi5LmQXCIsIFwi5pS+5Zyo5b6u5bCP55qE5LqL54mp6YeM77yM5rC46L+c5Lmf5LiN5Lya5Yml5aS6XCIsIFwi5bGe5LqO5q+P5LiA5aSp55qE44CB5aSp54S255qE6LSi5a+MXCJdLFxyXG4gIFwiYmdtXCI6IFwieXV1YmVub2hvc2hpXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vYW1hY2hhbXVzaWMuY2hhZ2FzaS5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIk5q5a6r6KKtXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIror5fnu4/jgIvoioLpgIlcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muS9muWQjVwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLmraPmnIjlvIDlsoFcIiwgXCLkuozmnIjnu4DppplcIiwgXCLkuInmnIjmoYPoia9cIiwgXCLlm5vmnIjnp4DolJNcIiwgXCLkupTmnIjpuKPonKlcIiwgXCLlha3mnIjnsr7pmLNcIiwgXCLkuIPmnIjmtYHngatcIiwgXCLlhavmnIjmnKrlpK5cIiwgXCLkuZ3mnIjmjojooaNcIiwgXCLljYHmnIjojrfnqLtcIiwgXCLoka3mnIjmvZzpvplcIiwgXCLohYrmnIjlmInlubRcIl0sXHJcbiAgXCJiZ21cIjogXCLlj6Tph4zjga7poqhcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9hbWFjaGFtdXNpYy5jaGFnYXNpLmNvbS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5ZCD6KW/55Oc55qE5bCP5LqM6YOOXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrkuprlvZPnmoTor4XlkpLjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muWogeW7icK35be054m55YuSwrflj7boip1cIixcclxuICBcImNvbnRlbnRcIjogW1wi5pyJ5L2g6Ze65Lit5a+G5Y+L77yM6L+Y5pyJ5L2g5ZKM5oiR77yMXCIsIFwi5aW55rip5p+U6ICM576O5Li977yM5oiR5Lus5Zyo6LCI6K+X44CCXCIsIFwi5oiR6K+077ya4oCc5LiA6KGM6K+X5pyJ5pe26KaB5Yeg5Liq5bCP5pe277ybXCIsIFwi5L2G6Iul5pi+5b6X5LiN5YOP5piv5Y2z5bit5LmL5L2c77yMXCIsIFwi5oiR5Lus55qE5o6o5pWy5bCx566X5piv55m95b+Z5rS744CCXCIsIFwi6L+Y5LiN5aaC5byT552A6ISK6IOM6La05Zyo5Zyw6Z2i77yMXCIsXHJcbiAgICAgICAgICBcIuWOu+aTpuWOqOaIv+WcsOadv++8jOaIluWDj+ept+WFieibi1wiLCBcIuaXoOiuuuWIrumjjuS4i+mbqOmDveW/meedgOmHh+efs++8m1wiLCBcIuimgeaKiue+jueahOWjsOmfs+e7hOe7h+WcqOS4gOi1t++8jFwiLCBcIuecn+avlOS4iumdoueahOa0u+WEv+mDvei+m+iLpu+8jOS9hlwiLCBcIuS4gOW4ruS6uuWNtOWQteWQteivtOS9oOaYr+aHkuaxie+8jFwiLCBcIumTtuihjOWutuOAgeaVmeW4iOi/mOacieelnuiBjOS6uuWRmO+8jFwiLFxyXG4gICAgICAgICAgXCLmronpgZPogIXmiYDosJPnmoTkuJbkurrjgILigJ1cIiwgXCIqKioqKioqKioqKioqKiror53liJrlrozvvIxcIiwgXCLpgqPmuKnmn5Tnvo7kuL3nmoTlpbPkurrmjqXnnYDor7TvvIxcIiwgXCLorrjlpJrkurroi6Xlj5HnjrDlpbnlo7Dpn7Pov5nkuYhcIiwgXCLnlJznvo7ogIzmn5TlkozvvIzlv4PlhL/lsLHkvJrni4Lot7PvvIxcIiwgXCLlpbnlm57nrZTmiJHvvJrigJznlJ/kuLrlpbPkurrpg73nn6XpgZPigJXigJVcIixcclxuICAgICAgICAgIFwi5bC9566h5Zyo5a2m5qCh6YeM5rKh5Lq66L+Z5LmI6K+04oCV4oCVXCIsIFwi6KaB5oOz576O5Li95oiR5Lus5bCx5b6X5Yuk5Yqz5L2c44CC4oCdXCIsIFwi5oiR6K+077ya4oCc5oiR5pat6KiA6Ieq5LuO5Lqa5b2T5aCV6JC977yMXCIsIFwi5YaN5rKh5pyJ5aW95Lic6KW/5LiN6ZyA5Yuk5Yqz5L2c44CCXCIsIFwi5oGL5Lq65Lus5pu+57uP6K6k5Li654ix5oOF5bqU5b2TXCIsIFwi5YWF5ruh552A6auY6LS15q635Yuk56S85Luq5pyJ5pa577yMXCIsXHJcbiAgICAgICAgICBcIuS7luS7rOWwsemVv+WQgeefreWPueW8lee7j+aNruWFuO+8jFwiLCBcIuWmgumlseWtpuS5i+Wjq+S4vuWHuuWFiOS+i+S4h+WNg++8m1wiLCBcIuWmguS7iui/meS6i+S8vOS5juWPr+eul+Wkn+WBt+aHkuOAguKAnVwiLCBcIuivtOWIsOS6hueIseaDheaIkeS7rOayieWvguS4gOeJh++8m1wiLCBcIueZveaXpeS9meeDrOWcqOaIkeS7rOecvOWJjeeHg+WujO+8jFwiLCBcIuWcqOmCo+aRh+abs+edgOiTnee7v+iJsueahOWkqei+ue+8jFwiLFxyXG4gICAgICAgICAgXCLmnInkuIDlvK/mrovmnIjvvIzmtojno6jlvpflpoLotJ3lo7NcIiwgXCLooqvml7bpl7TkuYvmsLTlhrLliLfvvIzlvZPlroPotbfokL1cIiwgXCLnvqTmmJ/kuYvpl7TjgIHljYfpmY3lnKjml6Xml6XlubTlubTjgIJcIiwgXCLmiJHmnInkuIDkuKrlv4PmgJ3lj6rmg7Plr7nkvaDoqIDvvIxcIiwgXCLmiJHmg7Por7TkvaDlvojnvo7kuL3vvIzmiJHkuZ/nq63liptcIiwgXCLnlKjlj6TogIHogIzpq5jotLXnmoTmlrnlvI/niLHov4fkvaDvvJtcIixcclxuICAgICAgICAgIFwi6L+Z55yL6LW35p2l55qG5aSn5qyi5Zac77yM5L2G5oiR5LusXCIsIFwi5YaF5b+D55ay5oOr5Y205Ly86YKj5Lit56m65LiA6L2u44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwiSm9zaCBXb29kd2FyZC1BdXR1bW5cIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9qb3Nod29vZHdhcmQuY29tL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlj7Pnn7PlhYjnlJ9cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuWwvOmHh+S6lOWImVwiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5bC86YeHXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuavj+S4gOS4quS4jeabvui1t+iInueahOaXpeWtkO+8jOmDveaYr+WvueeUn+WRveeahOi+nOi0n+OAglwiLCBcIuWFtuWunuS6uui3n+agkeaYr+S4gOagt+eahO+8jOi2iuaYr+WQkeW+gOmrmOWkhOeahOmYs+WFie+8jOWug+eahOagueWwsei2iuimgeS8uOWQkem7keaal+eahOWcsOW6leOAglwiLCBcIuS4gOS4quS6uuefpemBk+iHquW3seS4uuS7gOS5iOiAjOa0u++8jOWwseWPr+S7peW/jeWPl+S7u+S9leS4gOenjeeUn+a0u+OAglwiLFxyXG4gICAgICAgICAgXCLkvYblh6HkuI3og73mnYDmrbvkvaDnmoTvvIzmnIDnu4jpg73kvJrkvb/kvaDmm7TlvLrlpKfjgIJcIiwgXCLlvZPkvaDlh53op4bmt7HmuIrml7bvvIzmt7HmuIrkuZ/lnKjlh53op4bnnYDkvaDjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJLZXZpbiBNYWNMZW9kLUJldGhsZWhlbVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9pbmNvbXBldGVjaC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Zub5aSVXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLmsJHlm73nu5PlqZror4HkuaboqpPor41cIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muS9muWQjVwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLkuKTlp5PogZTlp7vvvIzkuIDloILnvJTnuqbvvIxcIiwgXCLoia/nvJjmsLjnu5PvvIzljLnphY3lkIznp7DjgIJcIiwgXCLnnIvmraTml6XmoYPoirHngbzngbzvvIzlrpzlrqTlrpzlrrbvvIxcIiwgXCLljZzku5blubTnk5znk57nu7Xnu7XvvIzlsJTmmIzlsJTngr3jgIJcIiwgXCLosKjku6Xnmb3lpLTkuYvnuqbvvIzkuablkJHpuL/nrLrvvIxcIiwgXCLlpb3lsIbnuqLlj7bkuYvnm5/vvIzovb3mmI7puLPosLHjgIJcIiwgXCLmraTor4HjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCLlj6Tph4zjga7poqhcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9hbWFjaGFtdXNpYy5jaGFnYXNpLmNvbS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5rGH5paHXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrml6DluLjjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mumbquiOsVwiLFxyXG4gIFwiY29udGVudFwiOiBbXCJXaGlsc3Qgc2tpZXMgYXJlIGJsdWUgYW5kIGJyaWdodFwiLCBcIldoaWxzdCBmbG93ZXJzIGFyZSBnYXlcIiwgXCJXaGlsc3QgZXllcyB0aGF0IGNoYW5nZSBlcmUgbmlnaHRcIixcclxuICAgICAgICAgIFwiTWFrZSBnbGFkIHRoZSBkYXlcIiwgXCJXaGlsc3QgeWV0IHRoZSBjYWxtIGhvdXJzIGNyZWVwXCIsIFwiRHJlYW0gdGhvdS1hbmQgZnJvbSB0aHkgc2xlZXBcIixcclxuICAgICAgICAgIFwiVGhlbiB3YWtlIHRvIHdlZXBcIiwgXCLotoHlpKnnqbrov5jmmI7lqprvvIzolJrok51cIiwgXCLotoHnnYDoirHmnLXpspzoibNcIiwgXCLotoHnnLznnZvnnIvmnaXkuIDliIfnvo7lpb1cIiwgXCLotoHlpJzluZXov5jmsqHpmY3kuLRcIiwgXCLlkbUg6LaB546w5Zyo5pe25rWB6L+Y5bmz6Z2ZXCIsIFwi5YGa5L2g55qE5qKm5ZCnIOS4lOaGqeaBr1wiLCBcIuetiemGkuadpeWGjeWTreazo1wiXSxcclxuICBcImJnbVwiOiBcIlJhZmFlbCBLcnV4LU5vc3RhbGdpYyBQaWFub1wiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9mcmVlcGQuY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5oiR5pu+57uP54ix6L+H5L2g44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrkuprljoblsbHlpKfCt+iwouWwlOebluiAtue7tOWlh8K35pmu5biM6YeRXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuaIkeabvue7j+eIsei/h+S9oO+8mueIseaDhe+8jOS5n+iuuFwiLCBcIuWcqOaIkeeahOW/g+eBtemHjOi/mOayoeacieWujOWFqOa2iOS6oe+8jFwiLCBcIuS9huaEv+Wug+S4jeS8muWGjeWOu+aJk+aJsOS9oO+8jFwiLCBcIuaIkeS5n+S4jeaDs+WGjeiuqeS9oOmavui/h+aCsuS8pOOAglwiLCBcIuaIkeabvue7j+m7mOm7mOaXoOivreWcsOOAgeavq+aXoOaMh+acm+WcsOeIsei/h+S9oO+8jFwiLFxyXG4gICAgICAgICAgXCLmiJHml6Llv43lj5fnnYDnvp7mgK/vvIzlj4jlv43lj5fnnYDlq4nlppLnmoTmipjno6jvvIxcIiwgXCLmiJHmm77nu4/pgqPmoLfnnJ/or5rjgIHpgqPmoLfmuKnmn5TlnLDniLHov4fkvaDvvIxcIiwgXCLkvYbmhL/kuIrluJ3kv53kvZHkvaDvvIxcIiwgXCLlj6bkuIDkuKrkurrkuZ/kvJrlg4/miJHkuIDmoLflnLDniLHkvaBcIl0sXHJcbiAgXCJiZ21cIjogXCJKb3NoIFdvb2R3YXJkLVNoaXBzLU5vVm94XCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRw77yaLy9qb3Nod29vZHdhcmQuY29tL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLmsYfmlodcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuaDtueEtuW9leOAi+iKgumAiVwiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya6LS55bCU5Y2X5aSawrfkvanntKLpmL9cIixcclxuICBcImNvbnRlbnRcIjogW10sXHJcbiAgXCJiZ21cIjogXCJSYWZhZWwgS3J1eC1Qb25kXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2ZyZWVwZC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwiTmrnvr3lh6FcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuWRqOWNl8K35YWz6ZuO44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJpcIixcclxuICBcImNvbnRlbnRcIjogW1wi5YWz5YWz6ZuO6big77yM5Zyo5rKz5LmL5rSy44CC56qI56qV5reR5aWz77yM5ZCb5a2Q5aW96YCR44CCXCIsIFwi5Y+C5beu6I2H6I+c77yM5bem5Y+z5rWB5LmL44CC56qI56qV5reR5aWz77yM5a+k5a+Q5rGC5LmL44CCXCIsIFwi5rGC5LmL5LiN5b6X77yM5a+k5a+Q5oCd5pyN44CC5oKg5ZOJ5oKg5ZOJ77yM6L6X6L2s5Y+N5L6n44CCXCIsIFwi5Y+C5beu6I2H6I+c77yM5bem5Y+z6YeH5LmL44CC56qI56qV5reR5aWz77yM55C055Gf5Y+L5LmL44CCXCIsXHJcbiAgICAgICAgICBcIuWPguW3ruiNh+iPnO+8jOW3puWPs+iKvOS5i+OAgueqiOeqlea3keWls++8jOmSn+m8k+S5kOS5i+OAglwiXSxcclxuICBcImJnbVwiOiBcIuW8peeUn+OBruepuuOBq1wiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL2FtYWNoYW11c2ljLmNoYWdhc2kuY29tL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlm5vlpJVcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuS4gOWJquaihcK36Iif6L+H5ZC05rGf44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrokovmjbdcIixcclxuICBcImNvbnRlbnRcIjogW1wi5LiA54mH5pil5oSB5b6F6YWS5rWH44CC5rGf5LiK6Iif5pGH44CC5qW85LiK5biY5oub44CC56eL5aiY5bqm5LiO5rOw5aiY5aiH44CC6aOO5Y+I6aOY6aOY44CC6Zuo5Y+I6JCn6JCn44CCXCIsIFwi5L2V5pel5b2S5a625rSX5a6i6KKN44CC6ZO25a2X56yZ6LCD44CC5b+D5a2X6aaZ54On44CC5rWB5YWJ5a655piT5oqK5Lq65oqb44CC57qi5LqG5qix5qGD44CC57u/5LqG6Iqt6JWJ44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwi6aKo57SLXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vbXVzaWMuZ2VvY2l0aWVzLmpwL2hha3V1X2FtYWJpbmUvXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWQg+ilv+eTnOeahOWwj+S6jOmDjlwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK6aOe6bif6ZuG44CL6IqC6YCJXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrms7DmiIjlsJRcIixcclxuICBcImNvbnRlbnRcIjogW1wiVGhlIHdhdGVyIGluIGEgdmVzc2VsIGlzIHNwYXJrbGluZztcIiwgXCJ0aGUgd2F0ZXIgaW4gdGhlIHNlYSBpcyBkYXJrLlwiLFxyXG4gICAgICAgICAgXCJUaGUgc21hbGwgdHJ1dGggaGFzIHdvcmRzIHRoYXQgYXJlIGNsZWFyO1wiLCBcInRoZSBncmVhdCB0cnV0aCBoYXMgZ3JlYXQgc2lsZW5jZS5cIiwgXCLkuIDmna/msLTmmK/muIXmvojnmoTvvIxcIixcclxuICAgICAgICAgIFwi6ICM5rW35rC05Y205piv6buR6Imy55qE44CCXCIsIFwi5bCx5YOP5bCP55qE6YGT55CG5Y+v5Lul6K+05piO77yMXCIsIFwi55yf5q2j55qE5aSn6YGT55CG5Y205piv5rKJ6buY55qE44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwiS2V2aW4gTWFjTGVvZC1CZXRobGVoZW1cIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vaW5jb21wZXRlY2guY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK6bmK5qGl5LuZwrfnuqTkupHlvITlt6fjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muenpuinglwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLnuqTkupHlvITlt6fvvIzpo57mmJ/kvKDmgajvvIzpk7bmsYnov6Lov6LmmpfluqbjgILph5Hpo47njonpnLLkuIDnm7jpgKLvvIzkvr/og5zljbTkurrpl7Tml6DmlbDjgIJcIiwgXCLmn5Tmg4XkvLzmsLTvvIzkvbPmnJ/lpoLmoqbvvIzlv43pob7puYrmoaXlvZLot6/vvJ/kuKTmg4Xoi6XmmK/kuYXplb/ml7bvvIzlj4jlsoLlnKjmnJ3mnJ3mmq7mmq7jgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJrYW11bmFiaVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL211c2ljLmdlb2NpdGllcy5qcC9oYWt1dV9hbWFiaW5lL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLmsYfmlodcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuS9oOaYr+S6uumXtOWbm+aciOWkqeOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5p6X5b695ZugXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuaIkeivtOS9oOaYr+S6uumXtOeahOWbm+aciOWkqe+8m1wiLCBcIueskeWTjeeCueS6ruS6huWbm+mdoumjju+8m1wiLCBcIui9u+eBteWcqOaYpeeahOWFieiJs+S4reS6pOiInuedgOWPmOOAglwiLCBcIuS9oOaYr+Wbm+aciOaXqeWkqemHjOeahOS6keeDn++8jFwiLCBcIum7hOaYj+WQueedgOmjjueahOi9r++8jFwiLCBcIuaYn+WtkOWcqOaXoOaEj+S4remXqu+8jFwiLCBcIue7humbqOeCuea0kuWcqOiKseWJjeOAglwiLFxyXG4gICAgICAgICAgXCLpgqPovbvvvIzpgqPlqInlqbfvvIzkvaDmmK/vvIxcIiwgXCLpspzlpo3nmb7oirHnmoTlhqDlhpXkvaDmiLTnnYDvvIxcIiwgXCLkvaDmmK/lpKnnnJ/vvIzluoTkuKXvvIxcIiwgXCLkvaDmmK/lpJzlpJznmoTmnIjlnIbjgIJcIiwgXCLpm6rljJblkI7pgqPniYfpuYXpu4TvvIzkvaDlg4/vvJtcIiwgXCLmlrDpspzliJ3mlL7oir3nmoTnu7/vvIzkvaDmmK/vvJtcIiwgXCLmn5Tlq6nllpzmgqbvvIxcIixcclxuICAgICAgICAgIFwi5rC05YWJ5rWu5Yqo552A5L2g5qKm5pyf5b6F5Lit55m96I6y44CCXCIsIFwi5L2g5piv5LiA5qCR5LiA5qCR55qE6Iqx5byA77yMXCIsIFwi5piv54eV5Zyo5qKB6Ze05ZGi5ZaD77yMXCIsIFwi4oCU4oCU5L2g5piv54ix77yM5piv5pqW77yM5piv5biM5pyb77yMXCIsIFwi5L2g5piv5Lq66Ze055qE5Zub5pyI5aSp77yBXCJdLFxyXG4gIFwiYmdtXCI6IFwiUmFmYWVsIEtydXgtUG9uZFwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9mcmVlcGQuY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWQg+ilv+eTnOeahOWwj+S6jOmDjlwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5pyq6YCJ5oup55qE6Lev44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrnvZfkvK/nibnCt+W8l+e9l+aWr+eJuVwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLpu4TmoJHmnpfph4zliIblh7rkuKTmnaHot6/vvIxcIiwgXCLlj6/mg5zmiJHkuI3og73lkIzml7bmtonotrPvvIxcIiwgXCLmiJHlnKjpgqPot6/lj6PkuYXkuYXkvKvnq4vvvIxcIiwgXCLmiJHlkJHnnYDkuIDmnaHot6/mnoHnm67mnJvljrvvvIxcIiwgXCLnm7TliLDlroPmtojlpLHlnKjkuJvmnpfmt7HlpITjgIJcIiwgXCLkvYbmiJHljbTpgInmi6nkuoblj6blpJbkuIDmnaHot6/vvIxcIixcclxuICAgICAgICAgIFwi5a6D6I2S6I2J6JCL6JCL77yM5Y2B5YiG5bm95a+C77yMXCIsIFwi5pi+5b6X5pu06K+x5Lq677yM5pu0576O5Li977ybXCIsIFwi6Jm954S25Zyo6L+Z5p2h5bCP6Lev5LiK77yMXCIsIFwi5b6I5bCR55WZ5LiL5peF5Lq655qE6Laz6L+544CCXCIsIFwi6YKj5aSp5riF5pmo6JC95Y+25ruh5Zyw77yMXCIsIFwi5Lik5p2h6Lev6YO95pyq57uP6ISa5Y2w5rGh5p+T44CCXCIsIFwi5ZWK77yM55WZ5LiL5LiA5p2h6Lev562J5pS55pel5YaN6KeBIVwiLFxyXG4gICAgICAgICAgXCLkvYbmiJHnn6XpgZPot6/lvoTlu7bnu7Xml6DlsL3lpLQsXCIsIFwi5oGQ5oCV5oiR6Zq+5Lul5YaN5Zue6L+U44CCXCIsIFwi5Lmf6K645aSa5bCR5bm05ZCO5Zyo5p+Q5Liq5Zyw5pa577yMXCIsIFwi5oiR5bCG6L275aOw5Y+55oGv5bCG5b6A5LqL5Zue6aG+77yaXCIsIFwi5LiA54mH5qCR5p6X6YeM5YiG5Ye65Lik5p2h6Lev77yMXCIsIFwi6ICM5oiR6YCJ5oup5LqG5Lq66L+55pu05bCR55qE5LiA5p2h77yMXCIsXHJcbiAgICAgICAgICBcIuS7juatpOWGs+WumuS6huaIkeS4gOeUn+eahOmBk+i3r+OAglwiXSxcclxuICBcImJnbVwiOiBcIk9uV2FsZGVuUG9uZFwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9hdWRpb25hdXRpeC5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK57qi6LGGIOOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya6Ze75LiA5aSaXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuebuOaAneaYr+S4jeWBmuWjsOeahOiaiuWtkFwiLCBcIuWBt+WBt+WcsOWSrOS6huS4gOWPo1wiLCBcIumZoeeEtueXm+S6huS4gOS4i1wiLCBcIuS7peWQjuS+v+aYr+S4gOmYteeahOWlh+eXklwiXSxcclxuICBcImJnbVwiOiBcIkFsZXhhbmRlciBOYWthcmFkYS1XaW50ZXJcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vZnJlZXBkLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlm5vlpJVcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuWNl+atjOWtkOivjeS6jOmmliAvIOaWsOa3u+WjsOadqOafs+aeneivjeOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5rip5bqt562gXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuS4gOWwuua3see6ouiDnOabsuWwmO+8jOWkqeeUn+aXp+eJqeS4jeWmguaWsOOAglwiLCBcIuWQiOasouahg+aguOe7iOWgquaBqO+8jOmHjOiuuOWFg+adpeWIq+acieS6uuOAglwiLCBcIuS6leW6leeCueeBr+a3seeDm+S8iu+8jOWFsemDjumVv+ihjOiOq+WbtOaji+OAglwiLCBcIueOsuePkemqsOWtkOWuiee6ouixhu+8jOWFpemqqOebuOaAneefpeS4jeefpeOAglwiXSxcclxuICBcImJnbVwiOiBcIm5lemFtZVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL211c2ljLmdlb2NpdGllcy5qcC9oYWt1dV9hbWFiaW5lL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLmsYfmlodcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuWDj+i/meagt+e7hue7huWcsOWQrOOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya546b55Cz5aicwrfkvIrkuIfor7rlpKvlqJzCt+iMqOe7tOWhlOiAtuWog1wiLFxyXG4gIFwiY29udGVudFwiOiBbXCLlg4/ov5nmoLfnu4bnu4blnLDlkKxcIiwgXCLlg4/ov5nmoLfnu4bnu4blnLDlkKzvvIxcIiwgXCLlpoLmsrPlj6Plh53npZ7lgL7lkKzoh6rlt7HnmoTmupDlpLTjgIJcIiwgXCLlg4/ov5nmoLfmt7Hmt7HlnLDll4XkuIDmnLXlsI/oirHvvIxcIiwgXCLnm7TliLDnn6Xop4nljJbkuLrkuYzmnInjgIJcIiwgXCLlg4/ov5nmoLfvvIzlnKjolJrok53nmoTnqbrmsJTph4xcIiwgXCLmurbov5vkuobml6DlupXnmoTmuLTmnJvjgIJcIixcclxuICAgICAgICAgIFwi5YOP6L+Z5qC377yM5Zyo5bqK5Y2V55qE6JSa6JOd6YeMXCIsIFwi5a2p5a2Q6YGl5pyb6K6w5b+G55qE6L+c5pa544CCXCIsIFwi5YOP6L+Z5qC377yO6I6y6Iqx6Iis55qE5bCR5bm0XCIsIFwi6buY6buY5L2T6aqM6KGA55qE5rip5rOJXCIsIFwi5bCx5YOP6L+Z5qC377yM5LiO54ix5oOF55u45oGLXCIsIFwi5bCx5YOP6L+Z5qC377yM6JC95YWl5rex5riK44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwiR3JlZW5MZWF2ZXNcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vYXVkaW9uYXV0aXguY29tL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLmsYfmlodcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiumjnum4n+mbhuOAi+iKgumAiVwiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5rOw5oiI5bCUXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIkFmdGVyIHRoZSBuaWdodCBJIGJ1cm5lZCBhbGwgbWVtb3J5LFwiLCBcIm15IGRyZWFtIGJlY29tZXMgdHJhbnNwYXJlbnQsXCIsXHJcbiAgICAgICAgICBcImFzIEkgdHJhc2hlZCBhbGwgeWVzdGVyZGF5cyxcIiwgXCJteSBzdGVwIGJlY29tZXMgbGlnaHRlci5cIiwgXCLmnInkuIDkuKrlpJzmmZrmiJHng6fmr4HkuobmiYDmnInnmoTorrDlv4bvvIxcIiwgXCLku47mraTmiJHnmoTmoqblsLHpgI/mmI7kuobvvJtcIixcclxuICAgICAgICAgIFwi5pyJ5LiA5Liq5pep5pmo5oiR5omU5o6J5LqG5omA5pyJ55qE5pio5aSp77yMXCIsIFwi5LuO5q2k5oiR55qE6ISa5q2l5bCx6L2755uI5LqG44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwiU3VuZGF5c0NoaWxkXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2F1ZGlvbmF1dGl4LmNvbS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrpk5zlrpjnqpHnk7flmajpopjor5fkuozljYHkuIDpppbjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muS9muWQjVwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLlkJvnlJ/miJHmnKrnlJ8s5oiR55Sf5ZCb5bey6ICB44CCXCIsIFwi5ZCb5oGo5oiR55Sf6L+fLOaIkeaBqOWQm+eUn+aXqeOAglwiLCBcIuWQm+eUn+aIkeacqueUnyzmiJHnlJ/lkJvlt7LogIHjgIJcIiwgXCLmgajkuI3nlJ/lkIzml7Ys5pel5pel5LiO5ZCb5aW944CCXCIsIFwi5oiR55Sf5ZCb5pyq55SfLOWQm+eUn+aIkeW3suiAgeOAglwiLCBcIuaIkeemu+WQm+Wkqea2ryzlkJvpmpTmiJHmtbfop5LjgIJcIixcclxuICAgICAgICAgIFwi5oiR55Sf5ZCb5pyq55SfLOWQm+eUn+aIkeW3suiAgeOAglwiLCBcIuWMluidtuWOu+Wvu+iKsSzlpJzlpJzmoJboirPojYnjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCLpoqjntItcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9tdXNpYy5nZW9jaXRpZXMuanAvaGFrdXVfYW1hYmluZS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5rGH5paHXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLnjovlsJTlvrflm5vliJlcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mueOi+WwlOW+t1wiLFxyXG4gIFwiY29udGVudFwiOiBbXCJXZSBhcmUgYWxsIGluIHRoZSBndXR0ZXIsIGJ1dCBzb21lIG9mIHVzIGFyZSBsb29raW5nIGF0IHRoZSBzdGFycy5cIiwgXCLmiJHku6zpg73lnKjpmLTmsp/ph4zvvIzkvYbku43mnInkurrku7DmnJvmmJ/nqbrjgIJcIixcclxuICAgICAgICAgIFwiV2hlbiBJIHdhcyB5b3VuZywgSSB0aG91Z2h0IG1vbmV5IHdhcyBldmVyeXRoaW5nLiBOb3cgSSdtIG9sZCBlbm91Z2ggdG8ga25vdyB0aGF0IGl0IGlzIHRydWUuXCIsXHJcbiAgICAgICAgICBcIuW5tOi9u+aXtuaIkeS7peS4uumSseWwseaYr+S4gOWIh++8jOeOsOWcqOiAgeS6huaJjeefpemBk+ehruWunuWmguatpOOAglwiLCBcIkJlIHlvdXJzZWxmLCBldmVyeW9uZSBlbHNlIGlzIGFscmVhZHkgdGFrZW4uXCIsIFwi5YGa5L2g6Ieq5bex77yM5Zug5Li65Yir5Lq66YO95pyJ5Lq65YGa5LqG44CCXCIsXHJcbiAgICAgICAgICBcIlRvIGxvdmUgb25lc2VsZiBpcyB0aGUgYmVnaW5uaW5nIG9mIGEgbGlmZWxvbmcgcm9tYW5jZS5cIiwgXCLniLHoh6rlt7HmmK/nu4jouqvmtarmvKvnmoTlvIDlp4vjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJLZXZpbiBNYWNMZW9kLUJldGhsZWhlbVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9pbmNvbXBldGVjaC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLmrYzlvrfkuInliJlcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muatjOW+t1wiLFxyXG4gIFwiY29udGVudFwiOiBbXCJJZiB3aG8gaXMgdGhlIGdhbWUgb2YgbGlmZe+8jFwiLCBcImhlIGFjY29tcGxpc2hlcyBub3RoaW5n77ybXCIsIFwiV2hvIGNhbm5vdCBjb250cm9sIGhpbXNlbGbvvIxcIixcclxuICAgICAgICAgIFwiaGUgaXMgYWx3YXlzIGEgc2xhdmXjgIJcIiwgXCLosIHoi6XmuLjmiI/kurrnlJ/vvIzku5blsLHkuIDkuovml6DmiJDvvJvosIHkuI3og73kuLvlrrDoh6rlt7HvvIzkvr/msLjov5zmmK/kuIDkuKrlpbTpmrbjgIJcIixcclxuICAgICAgICAgIFwiSWYgSSBsb3ZlIHlvdSwgd2hhdCBidXNpbmVzcyBpcyBpdCBvZiB5b3Vycz9cIiwgXCLmiJHniLHkvaDvvIzkuI7kvaDml6DlhbPjgIJcIixcclxuICAgICAgICAgIFwiXFxcIkRvIHlvdSBrbm93IHdoeSB5b3UgY2xvc2UgeW91ciBleWVzIHdoZW4geW91IGtpc3M/XFxcIlwiLFxyXG4gICAgICAgICAgXCJcXFwiYmVjYXVzZSB0aGV5IHNoaW5lIHRvbyBtdWNoIG9uIGVhY2ggb3RoZXIuXFxcIlwiLCBcIuKAnOefpemBk+S4uuS7gOS5iOS6suWQu+eahOaXtuWAmeimgemXreedgOWPjOecvOWQl++8n+KAnVwiLCBcIuKAnOWboOS4uuS7luS7rOW9vOatpOmDveWkqumXquiAgOOAguKAnVwiXSxcclxuICBcImJnbVwiOiBcIktldmluIE1hY0xlb2QtT2ggSG9seSBOaWdodFwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9pbmNvbXBldGVjaC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrmoqbkuI7or5fjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muiDoemAglwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLpg73mmK/lubPluLjnu4/pqozvvIxcIiwgXCLpg73mmK/lubPluLjlvbHosaHvvIxcIiwgXCLlgbbnhLbmtozliLDmoqbkuK3mnaXvvIxcIiwgXCLlj5jlubvlh7rlpJrlsJHmlrDlpYfoirHmoLchXCIsIFwi6YO95piv5bmz5bi45oOF5oSf77yMXCIsIFwi6YO95piv5bmz5bi46KiA6K+t77yMXCIsIFwi5YG254S256Kw552A5Liq6K+X5Lq677yMXCIsIFwi5Y+Y5bm75Ye65aSa5bCR5paw5aWH6K+X5Y+lIVwiLFxyXG4gICAgICAgICAgXCLphonov4fmiY3nn6XphZLmtZPvvIxcIiwgXCLniLHov4fmiY3nn6Xmg4Xph43igJTigJRcIiwgXCLkvaDkuI3og73lgZrmiJHnmoTor5fvvIxcIiwgXCLmraPlpoLmiJHkuI3og73lgZrkvaDnmoTmoqbjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJLZXZpbiBNYWNMZW9kLVNhcHBoaXJlIElzbGVcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vaW5jb21wZXRlY2guY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIk5q5a6r6KKtXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrlkJHnnYDmmI7kuq7pgqPmlrnjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mumHkeWtkOe+jueOslwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLlkJHnnYDmmI7kuq7pgqPmlrnjgIJcIiwgXCLlkJHnnYDmmI7kuq7pgqPmlrnjgIJcIiwgXCLlk6rmgJXkuIDniYflj7blrZBcIiwgXCLkuZ/opoHlkJHnnYDml6XlhYnmtJLkuIvnmoTmlrnlkJHjgIJcIiwgXCLngYzmnKjkuJvkuK3nmoTlsI/ojYnllYrjgIJcIiwgXCLlkJHnnYDmmI7kuq7pgqPmlrlcIiwgXCLlkJHnnYDmmI7kuq7pgqPmlrnjgIJcIiwgXCLlk6rmgJXng6fnhKbkuobnv4XohoBcIixcclxuICAgICAgICAgIFwi5Lmf6KaB6aOe5ZCR54Gv54Gr6Zeq54OB55qE5pa55ZCR44CCXCIsIFwi5a+S5aSc6YeM55qE6aOe6Jmr5ZWK44CCXCIsIFwi5ZCR552A5piO5Lqu6YKj5pa5XCIsIFwi5ZCR552A5piO5Lqu6YKj5pa544CCXCIsIFwi5ZOq5oCV5Y+q5piv5YiG5a+455qE5a695pWeXCIsIFwi5Lmf6KaB5ZCR552A6Ziz5YWJ54Wn5bCE55qE5pa55ZCR44CCXCIsIFwi5L2P5Zyo6YO95Lya55qE5a2p5a2Q5Lus5ZWK44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwiU3VuZGF5c0NoaWxkXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2F1ZGlvbmF1dGl4LmNvbS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5ZCD6KW/55Oc55qE5bCP5LqM6YOOXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrooaXlgb/jgItcIixcclxuICBcImF1dGhvclwiOiBcIuS4uuavj+S4gOS4queLguWWnOeahOeerOmXtFwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLmiJHku6zlv4Xpobvlgb/ku6Xnl5voi6boh7PmnoFcIiwgXCLliLrnl5vlkozpoqTmipbvvIzlkozni4LllpzmiJDmraPmr5RcIiwgXCLkuLrmr4/kuIDkuKrlj6/niLHnmoTml7bliLtcIiwgXCLlv4Xlgb/ku6XlpJrlubTnmoTku5jlh7pcIiwgXCLovpvphbjkuonlpLrnmoTljYrliIblhavljphcIiwgXCLlkozmtbjmu6Hms6rmsLTnmoTpkrHnrrFcIiwgXCLkvZzogIXvvJroib7nsbPojonCt+eLhOmHkeajrlwiXSxcclxuICBcImJnbVwiOiBcIktldmluIE1hY0xlb2QtT2ggSG9seSBOaWdodFwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9pbmNvbXBldGVjaC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5rGH5paHXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrmuIXlubPosIPjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muadjueZvVwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLkupHmg7PooaPoo7PoirHmg7PlrrnvvIwg5pil6aOO5ouC5qeb6Zyy5Y2O5rWT44CCXCIsIFwi6Iul6Z2e576k546J5bGx5aS06KeB77yMIOS8muWQkeeRtuWPsOaciOS4i+mAouOAglwiLCBcIuS4gOaenee6ouiJs+mcsuWHnemmme+8jCDkupHpm6jlt6vlsbHmnonmlq3ogqDjgIJcIiwgXCLlgJ/pl67msYnlrqvosIHlvpfkvLzvvJ8g5Y+v5oCc6aOe54eV5YCa5paw5aaG44CCXCIsXHJcbiAgICAgICAgICBcIuWQjeiKseWAvuWbveS4pOebuOasou+8jCDplb/lvpflkJvnjovluKbnrJHnnIvjgIJcIiwgXCLop6Pph4rmmKXpo47ml6DpmZDmgajvvIwg5rKJ6aaZ5Lqt5YyX5YCa6ZiR5bmy44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwia2FtdW5hYmlcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9tdXNpYy5nZW9jaXRpZXMuanAvaGFrdXVfYW1hYmluZS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5rGH5paHXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrlvZPkvaDogIHkuobjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muWogeW7icK35be054m55YuSwrflj7boip1cIixcclxuICBcImNvbnRlbnRcIjogW1wi5b2T5L2g6ICB5LqG77yM5aS055m95LqG77yM552h5oSP5piP5rKJ77yMXCIsIFwi54KJ54Gr5peB5omT55u577yM6K+35Y+W5LiL6L+Z6YOo6K+X5q2M77yMXCIsIFwi5oWi5oWi6K+777yM5Zue5oOz5L2g6L+H5Y6755y856We55qE5p+U5ZKM77yMXCIsIFwi5Zue5oOz5a6D5Lus5piU5pel5rWT6YeN55qE6Zi05b2x77ybXCIsIFwi5aSa5bCR5Lq654ix5L2g6Z2S5pil5qyi55WF55qE5pe26L6w77yMXCIsXHJcbiAgICAgICAgICBcIueIseaFleS9oOeahOe+juS4ve+8jOWBh+aEj+aIluecn+W/g++8jFwiLCBcIuWPquacieS4gOS4quS6uueIseS9oOmCo+acneWco+iAheeahOeBtemtgu+8jFwiLCBcIueIseS9oOihsOiAgeS6hueahOiEuOS4iueXm+iLpueahOeasee6ue+8m1wiLCBcIuWeguS4i+WktOadpe+8jOWcqOe6ouWFiemXquiAgOeahOeCieWtkOaXge+8jFwiLCBcIuWHhOeEtuWcsOi9u+i9u+ivieivtOmCo+eIseaDheeahOa2iOmAne+8jFwiLFxyXG4gICAgICAgICAgXCLlnKjlpLTpobbnmoTlsbHkuIrlroPnvJPnvJPouLHnnYDmraXlrZDvvIxcIiwgXCLlnKjkuIDnvqTmmJ/mmJ/kuK3pl7TpmpDol4/nnYDohLjlup7jgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJKb3NoIFdvb2R3YXJkLUF1dHVtblwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cO+8mi8vam9zaHdvb2R3YXJkLmNvbS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5rGH5paHXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrorrDlvpfml6fml7blpb3jgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mumZiOeZveaymVwiLFxyXG4gIFwiY29udGVudFwiOiBbXSxcclxuICBcImJnbVwiOiBcIuaHkOOBi+OBl+OBhOmiqOaDhVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL2FtYWNoYW11c2ljLmNoYWdhc2kuY29tL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCJOauWuq+iirVwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5Lq65pyI5ZyGwrflsbHkuK3kuabkuovjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muW8oOWPr+S5hVwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLlhbTkuqHljYPlj6TnuYHljY7moqbvvIzor5fnnLzlgKblpKnmtq/jgIJcIiwgXCLlrZTmnpfkuZTmnKjvvIzlkLTlrqvolJPojYnvvIzmpZrlupnlr5LpuKbjgIJcIiwgXCLmlbDpl7TojIXoiI3vvIzol4/kuabkuIfljbfvvIzmipXogIHmnZHlrrbjgIJcIiwgXCLlsbHkuK3kvZXkuovvvJ/mnb7oirHphb/phZLvvIzmmKXmsLTnhY7ojLbjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJuZXphbWVcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9tdXNpYy5nZW9jaXRpZXMuanAvaGFrdXVfYW1hYmluZS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5rGH5paHXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrlsIbov5vphZLCt+WQm+S4jeingeOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5p2O55m9XCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuWQm+S4jeinge+8jOm7hOays+S5i+awtOWkqeS4iuadpe+8jOWllOa1geWIsOa1t+S4jeWkjeWbnuOAglwiLCBcIuWQm+S4jeinge+8jOmrmOWgguaYjumVnOaCsueZveWPke+8jOacneWmgumdkuS4neaaruaIkOmbquOAglwiLCBcIuS6uueUn+W+l+aEj+mhu+Wwveasou+8jOiOq+S9v+mHkeaoveepuuWvueaciOOAglwiLCBcIuWkqeeUn+aIkeadkOW/heacieeUqO+8jOWNg+mHkeaVo+Wwvei/mOWkjeadpeOAglwiLFxyXG4gICAgICAgICAgXCLng7nnvorlrrDniZvkuJTkuLrkuZDvvIzkvJrpobvkuIDppa7kuInnmb7mna/jgIJcIiwgXCLlspHlpKvlrZDvvIzkuLnkuJjnlJ/vvIzlsIbov5vphZLvvIzmna/ojqvlgZzjgIJcIiwgXCLkuI7lkJvmrYzkuIDmm7LvvIzor7flkJvkuLrmiJHlgL7ogLPlkKzjgIJcIiwgXCLpkp/pvJPpppTnjonkuI3otrPotLXvvIzkvYbmhL/plb/phonkuI3lpI3phpLjgIJcIiwgXCLlj6TmnaXlnKPotKTnmoblr4Llr57vvIzmg5/mnInppa7ogIXnlZnlhbblkI3jgIJcIixcclxuICAgICAgICAgIFwi6ZmI546L5piU5pe25a605bmz5LmQ77yM5paX6YWS5Y2B5Y2D5oGj5qyi6LCR44CCXCIsIFwi5Li75Lq65L2V5Li66KiA5bCR6ZKx77yM5b6E6aG75rK95Y+W5a+55ZCb6YWM44CCXCIsIFwi5LqU6Iqx6ams77yM5Y2D6YeR6KOY77yM5ZG85YS/5bCG5Ye65o2i576O6YWS77yM5LiO5bCU5ZCM6ZSA5LiH5Y+k5oSB44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwib21pd2F0YXJpXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vbXVzaWMuZ2VvY2l0aWVzLmpwL2hha3V1X2FtYWJpbmUvXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWbm+WklVwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5oiR55qE5Lmm5pys5Y6755qE5Zyw5pa544CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrlqIHlu4nCt+W3tOeJueWLksK35Y+26IqdXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuaIkeaJgOWtpuWIsOeahOaJgOacieivreiogO+8jFwiLCBcIuaIkeaJgOWGmeWHuueahOaJgOacieivreiogO+8jFwiLCBcIuW/heeEtuimgeWxlee/he+8jOS4jeWApueahOmjnue/lO+8jFwiLCBcIue7neS4jeS8muWcqOmjnuihjOS4reWBnOS4gOWBnOOAglwiLCBcIuS4gOebtOmjnuWIsOS9oOaCsuS8pOeahOW/g+aJgOWcqOeahOWcsOaWue+8jFwiLCBcIuWcqOWknOiJsuS4reWQkeedgOS9oOatjOWUse+8jFwiLFxyXG4gICAgICAgICAgXCLov5zmlrnvvIzmsrPmsLTmraPlnKjmtYHmt4zvvIxcIiwgXCLkuYzkupHlr4bluIPvvIzmiJbmmK/mmJ/lhYnngb/ng4LjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJSYWZhZWwgS3J1eC1Qb25kXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2ZyZWVwZC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwiTmrlrqvooq1cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuWRqOWNl8K35qGD5aSt44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrkvZrlkI1cIixcclxuICBcImNvbnRlbnRcIjogW1wi5qGD5LmL5aSt5aSt77yM54G854G85YW25Y2O44CC5LmL5a2Q5LqO5b2S77yM5a6c5YW25a6k5a6244CCXCIsIFwi5qGD5LmL5aSt5aSt77yM5pyJ6JWh5YW25a6e44CC5LmL5a2Q5LqO5b2S77yM5a6c5YW25a625a6k44CCXCIsIFwi5qGD5LmL5aSt5aSt77yM5YW25Y+26JOB6JOB44CC5LmL5a2Q5LqO5b2S77yM5a6c5YW25a625Lq644CCXCJdLFxyXG4gIFwiYmdtXCI6IFwibmV6YW1lXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vbXVzaWMuZ2VvY2l0aWVzLmpwL2hha3V1X2FtYWJpbmUvXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWQg+ilv+eTnOeahOWwj+S6jOmDjlwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5oO254S25b2V44CL6IqC6YCJXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrotLnlsJTljZflpJrCt+S9qee0oumYv1wiLFxyXG4gIFwiY29udGVudFwiOiBbXCLlg4/kuIDmlK/msqHmnInlrozmiJDnmoTnkLTlvJPvvIxcIiwgXCLngbXprYLku47mnaXkuI3og73lrZjlnKjkuo7lroPnmoToh6rouqvjgIJcIiwgXCLkvJ/lpKfnmoTmma/op4Lnu5/nu5/lsZ7kuo7miJHku6zlt7Lnu4/kurLljobov4fnmoTkuIDkuKrmmI7lpKnjgIJcIiwgXCLogIzmsLjkuI3pl7Tmlq3nmoTkuqTosIjlt7Lnu4/mmK/kuIDkuKrlpLHotKXjgIJcIiwgXCLosIHmm77njJzlh7rnlJ/mtLvlsLHlg4/ov5nkuKrmoLflrZDvvJ9cIixcclxuICAgICAgICAgIFwi5oiR5om+5Yiw6Ieq5bex5LmL5pel77yM5bCx5piv5aSx6JC96Ieq5bex5LmL5pe244CCXCIsIFwi5aaC5p6c5oiR55u45L+h77yM5oiR5bCx5b+F54S25oCA55aR44CCXCIsIFwi5oiR57Sn57Sn5oqT5L2P5LiA5Lqb5Lic6KW/55qE5pe25YCZ77yM5oiR55qE5omL6YeM5b+F5a6a56m65peg5LiA54mp44CCXCIsIFwi5oiR5Y67552h6KeJ5bCx5aaC5oiR5q2j5Zyo5Ye65Y675pWj5q2l44CCXCIsIFwi55Sf5rS75q+V56uf5piv5LiA5qyh5Lyf5aSn55qE5aSx55yg77yMXCIsXHJcbiAgICAgICAgICBcIuaIkeS7rOWBmui/h+aIluaDs+i/h+eahOS4gOWIh++8jOmDveWkhOWcqOa4hea+iOeahOWNiumGkueKtuaAgeS5i+S4reOAglwiLCBcIuWmguaenOaIkeiDveWkn+WFpeedoe+8jOaIkeS8muW/q+S5kOOAglwiLCBcIuiHs+WwkeaIkeeOsOWcqOaAneiAg+eahOaXtuWAmeaIkeWwseedoeS4jeaIkOOAglwiLCBcIuWknOaZmuaYr+S4gOS4quW3qOWkp+eahOmHjeWOi++8jFwiLCBcIuWOi+W+l+aIkeWcqOWvgumdmeeahOimhuebluS5i+S4i+eahOaipumHjOiHquaIkeeqkuaBr+OAglwiLFxyXG4gICAgICAgICAgXCLmiJHmnInkuIDnp43ngbXprYLnmoTlj43og4Pnl4fjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJLZXZpbiBNYWNMZW9kLUJldGhsZWhlbVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9pbmNvbXBldGVjaC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrlpLHnqoPnmoTlranlrZDjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muWogeW7icK35be054m55YuSwrflj7boip1cIixcclxuICBcImNvbnRlbnRcIjogW1wi6LWw5ZCnXCIsIFwi5Lq66Ze055qE5a2p5a2QXCIsIFwi6LWw5ZCR6YKj6I2S6YeO5ZKM5rKz5rWBXCIsIFwi5LiO5LiA5Liq57K+54G15omL54m15omLXCIsIFwi5Zug5Li66L+Z5Liq5LiW55WM55qE5oKy5Lyk5aSq5rex5LqGIOiAjOS9oOS4jeiDveaHglwiXSxcclxuICBcImJnbVwiOiBcIkFsZXhhbmRlciBOYWthcmFkYS1XaW50ZXJcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vZnJlZXBkLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLmsYfmlodcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiueIseOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5omY6ams5pavLuW4g+acl1wiLFxyXG4gIFwiY29udGVudFwiOiBbXCLmiJHniLHkvaDvvIzkuI3mmK/lm6DkuLrkvaDmmK/kuIDkuKrmgI7moLfnmoTkurrvvIxcIiwgXCLogIzmmK/lm6DkuLrmiJHllpzmrKLkuI7kvaDlnKjkuIDotbfml7bnmoTmhJ/op4njgIJcIiwgXCLmsqHmnInkurrlgLzlvpfkvaDmtYHms6rvvIxcIiwgXCLlgLzlvpforqnkvaDov5nkuYjlgZrnmoTkurrkuI3kvJrorqnkvaDlk63ms6PjgIJcIiwgXCLlpLHljrvmn5DkurrvvIzmnIDns5/ns5XnmoTojqvov4fkuo7vvIxcIixcclxuICAgICAgICAgIFwi5LuW6L+R5Zyo6Lqr5peB77yM5Y2054q55aaC6L+c5Zyo5aSp6L6544CCXCIsIFwi57q154S25Lyk5b+D77yM5Lmf5LiN6KaB5oKJ55yJ5LiN5bGV77yMXCIsIFwi5Zug5Li65L2g5LiN55+l5piv6LCB5Lya54ix5LiK5L2g55qE56yR5a6544CCXCIsIFwi5a+55LqO5LiW55WM6ICM6KiA77yM5L2g5piv5LiA5Liq5Lq677ybXCIsIFwi5L2G5piv5a+55LqO5p+Q5Lq677yM5L2g5piv5LuW55qE5pW05Liq5LiW55WM44CCXCIsXHJcbiAgICAgICAgICBcIuS4jeimgeS4uumCo+S6m+S4jeaEv+WcqOS9oOi6q+S4iuiKsei0ueaXtumXtOeahOS6uuiAjOa1qui0ueS9oOeahOaXtumXtOOAglwiLCBcIueIseS9oOeahOS6uuWmguaenOayoeacieaMieS9oOaJgOW4jOacm+eahOaWueW8j+eIseS9oO+8jFwiLCBcIumCo+W5tuS4jeS7o+ihqOS7luS7rOayoeacieWFqOW/g+WFqOaEj+WcsOeIseS9oOOAglwiLCBcIuS4jeimgeedgOaApe+8jOacgOWlveeahOaAu+S8muWcqOacgOS4jee7j+aEj+eahOaXtuWAmeWHuueOsOOAglwiLFxyXG4gICAgICAgICAgXCLlnKjpgYfliLDmoqbkuK3kurrkuYvliY3vvIzkuIrlpKnkuZ/orrjkvJrlronmjpLmiJHku6zlhYjpgYfliLDliKvkurrvvJtcIiwgXCLlnKjmiJHku6znu4jkuo7pgYfop4Hlv4Pku6rnmoTkurrml7bvvIzkvr/lupTlvZPlv4PlrZjmhJ/mv4DjgIJcIiwgXCLkuI3opoHlm6DkuLrnu5PmnZ/ogIzlk63ms6PvvIzlvq7nrJHlkKfvvIzkuLrkvaDnmoTmm77nu4/mi6XmnInjgIJcIiwgXCLigJznlJ/lkb3mmK/mnZ/nuq/lh4DnmoTngavnhLDvvIxcIixcclxuICAgICAgICAgIFwi5oiR5Lus5L6d6Z2g6Ieq5bex5YaF5b+D55yL5LiN6KeB55qE5aSq6Ziz6ICM5a2Y5Zyo44CC4oCdXCJdLFxyXG4gIFwiYmdtXCI6IFwiUmFmYWVsIEtydXgtTG92ZWx5IFBpYW5vIFNvbmdcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vZnJlZXBkLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlj7Pnn7PlhYjnlJ9cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuWto+WAmeOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya6YK15rS1576OXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuWIneingeS9oOaXtuS9oOe7meaIkeS9oOeahOW/g++8jFwiLCBcIumHjOmdouaYr+S4gOS4quaYpeWkqeeahOaXqeaZqOOAglwiLCBcIuWGjeingeS9oOaXtuS9oOe7meaIkeS9oOeahOivne+8jFwiLCBcIuivtOS4jeWHuueahOaYr+eCveeDiOeahOeBq+Wkj+OAglwiLCBcIuS4ieasoeingeS9oOS9oOe7meaIkeS9oOeahOaJi++8jFwiLCBcIumHjOmdouiXj+edgOS4quWPtuiQveeahOa3seeni+OAglwiLFxyXG4gICAgICAgICAgXCLmnIDlkI7op4HkvaDmmK/miJHlgZrnmoTnn63moqbvvIxcIiwgXCLmoqbph4zmnInkvaDov5jmnInkuIDnvqTlhqzpo47jgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJBbGV4YW5kZXIgTmFrYXJhZGEtV2ludGVyXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2ZyZWVwZC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwiTmrlrqvooq1cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiueDpuW/p+OAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5oi05pyb6IiSXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuivtOaYr+WvguWvnueahOeni+eahOa4heaEge+8jFwiLCBcIuivtOaYr+i+vei/nOeahOa1t+eahOebuOaAneOAglwiLCBcIuWBh+WmguacieS6uumXruaIkeeahOeDpuW/p++8jFwiLCBcIuaIkeS4jeaVouivtOWHuuS9oOeahOWQjeWtl+OAglwiLCBcIuaIkeS4jeaVouivtOWHuuS9oOeahOWQjeWtl++8jFwiLCBcIuWBh+WmguacieS6uumXruaIkeeahOeDpuW/p++8mlwiLCBcIuivtOaYr+i+vei/nOeahOa1t+eahOebuOaAne+8jFwiLFxyXG4gICAgICAgICAgXCLor7TmmK/lr4Llr57nmoTnp4vnmoTmuIXmhIHjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJBbGV4YW5kZXIgTmFrYXJhZGEtV2ludGVyXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2ZyZWVwZC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Zub5aSVXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrlh6TmsYLlh7DjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muWPuOmprOebuOWmglwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLmnInnvo7kurrlha7vvIzop4HkuYvkuI3lv5jvvIzkuIDml6XkuI3op4Hlha7vvIzmgJ3kuYvlpoLni4LjgIJcIiwgXCLlh6Tpo57pgajnv5Tlha7vvIzlm5vmtbfmsYLlh7DvvIzml6DlpYjkvbPkurrlha7vvIzkuI3lnKjkuJzlopnjgIJcIiwgXCLlsIbnkLTku6Por63lha7vvIzogYrlhpnoobfogqDvvIzmhL/oqIDphY3lvrflha7vvIzmkLrmiYvnm7jlsIbjgIJcIixcclxuICAgICAgICAgIFwi5L2V5pe26KeB6K645YWu77yM5oWw5oiR5peB5b6o77yM5LiN5b6X5LqO6aOe5YWu77yM5L2/5oiR5rKm5Lqh77yM5L2/5oiR5rKm5Lqh44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwi5LuK5piU44OO57WGXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vd3d3LnJlbmdva3UtdGVpZW4uY29tL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlm5vlpJVcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuaKmOahguS7pMK35pil5oOF44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrlvpDlho3mgJ1cIixcclxuICBcImNvbnRlbnRcIjogW1wi5bmz55Sf5LiN5Lya55u45oCd77yM5omN5Lya55u45oCd77yM5L6/5a6z55u45oCd44CCXCIsIFwi6Lqr5Ly85rWu5LqR77yM5b+D5aaC6aOe57Wu77yMXCIsIFwi5rCU6Iul5ri45Lid77yM56m65LiA57yV6aaA6aaZ5Zyo5q2k77yMXCIsIFwi55u85Y2D6YeR5ri45a2Q5L2V5LmL44CCXCIsIFwi6K+B5YCZ5p2l5pe277yM5q2j5piv5L2V5pe277yfXCIsIFwi54Gv5Y2K5piP5pe277yM5pyI5Y2K5piO5pe244CCXCJdLFxyXG4gIFwiYmdtXCI6IFwibmV6YW1lXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vbXVzaWMuZ2VvY2l0aWVzLmpwL2hha3V1X2FtYWJpbmUvXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWQg+ilv+eTnOeahOWwj+S6jOmDjlwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK6aOe6bif6ZuG44CL6IqC6YCJXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrms7DmiIjlsJRcIixcclxuICBcImNvbnRlbnRcIjogW1wi5oiR55qE5b+D5piv5pe36YeO5ZKM6bifXCIsIFwi5bey57uP5Zyo5L2g55qE55y8552b6YeM5om+5Yiw5LqG5aSp56m6XCIsIFwi5L2g55qE55y8552b5piv5pep5LiK55qE5pGH56+uXCIsIFwi5L2g55qE55y8552b5piv57mB5pif55qE546L5Zu9XCIsIFwi5oiR55qE5q2M5aOw5raI5aSx5Zyo5L2g55y8552b55qE5rex5aSEXCIsIFwi5bCx6K6p5oiR57+x57+U5Zyo6YKj5LiA54mH5aSp56m66YeM5ZCnXCIsXHJcbiAgICAgICAgICBcIuWwseiuqeaIkee/see/lOWcqOmCo+S4gOeJh+WtpOWvguaXoOWeoOeahOWkqeepuumHjFwiLCBcIuWwseiuqeaIkeaOkuW8gOWug+acteacteeahOS6keW9qVwiLCBcIuWcqOWug+eahOmYs+WFiemHjOWxlee/hemjnue/lFwiXSxcclxuICBcImJnbVwiOiBcIlJhZmFlbCBLcnV4LUxvdmVseSBQaWFubyBTb25nXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2ZyZWVwZC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwiTmrlrqvooq1cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuWPjOWfjuiusOOAi+iKgumAiVwiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya54uE5pu05pavXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIui/meaYr+S4gOS4quacgOWlveeahOaXtuS7o++8jOi/meaYr+S4gOS4quacgOWdj+eahOaXtuS7o++8m1wiLCBcIui/meaYr+S4gOS4quaZuuaFp+eahOW5tOS7o++8jOi/meaYr+S4gOS4quaEmuigoueahOW5tOS7o++8m1wiLCBcIui/meaYr+S4gOS4quS/oeS7sOeahOaXtuacn++8jOi/meaYr+S4gOS4quaAgOeWkeeahOaXtuacn++8m1wiLCBcIui/meaYr+S4gOS4quWFieaYjueahOWto+iKgu+8jOi/meaYr+S4gOS4qum7keaal+eahOWto+iKgu+8m1wiLFxyXG4gICAgICAgICAgXCLov5nmmK/luIzmnJvkuYvmmKXvvIzov5nmmK/lpLHmnJvkuYvlhqzvvJtcIiwgXCLkurrku6zpnaLliY3lupTmnInlsL3mnInvvIzkurrku6zpnaLliY3kuIDml6DmiYDmnInvvJtcIiwgXCLkurrku6zmraPouI/kuIrlpKnloILkuYvot6/vvIzkurrku6zmraPotbDlkJHlnLDni7HkuYvpl6jjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJBbGV4YW5kZXIgTmFrYXJhZGEtV2ludGVyXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2ZyZWVwZC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Zub5aSVXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrkuLTmsZ/ku5nCt+mAgemSseephueItuOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya6IuP6L28XCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuS4gOWIq+mDvemXqOS4ieaUueeBq++8jFwiLCBcIuWkqea2r+i4j+Wwvee6ouWwmOOAglwiLCBcIuS+neeEtuS4gOeskeS9nOaYpea4qeOAglwiLCBcIuaXoOazouecn+WPpOS6le+8jOacieiKguaYr+eni+etoOOAglwiLCBcIuaDhuaAheWtpOW4hui/nuWknOWPke+8jFwiLCBcIumAgeihjOa3oeaciOW+ruS6keOAglwiLCBcIuWwiuWJjeS4jeeUqOe/oOeciemipuOAglwiLFxyXG4gICAgICAgICAgXCLkurrnlJ/lpoLpgIbml4XvvIzmiJHkuqbmmK/ooYzkurrjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCLmgYvnjYTjga7lvalcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly93d3cucmVuZ29rdS10ZWllbi5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWbm+WklVwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5rWj5rqq5rKZwrfnu4bpm6jmlpzpo47kvZzmmZPlr5LjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muiLj+i9vFwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLnu4bpm6jmlpzpo47kvZzmmZPlr5LvvIxcIiwgXCLmt6Hng5/nlo/mn7PlqprmmbTmu6njgIJcIiwgXCLlhaXmt67muIXmtJvmuJDmvKvmvKvjgIJcIiwgXCLpm6rmsqvkubPoirHmta7ljYjnm4/vvIxcIiwgXCLok7zojLjokr/nrIvor5XmmKXnm5jjgIJcIiwgXCLkurrpl7TmnInlkbPmmK/muIXmrKLjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCLku4rmmJTjg47ntYZcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly93d3cucmVuZ29rdS10ZWllbi5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIk5q5a6r6KKtXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrpopjpvpnpmLPljr/pnZLojYnmuZbjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muWUkOePmVwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLopb/po47lkLnogIHmtJ7luq3ms6LvvIxcIiwgXCLkuIDlpJzmuZjlkJvnmb3lj5HlpJrjgIJcIiwgXCLphonlkI7kuI3nn6XlpKnlnKjmsLTvvIxcIiwgXCLmu6HoiLnmuIXmoqbljovmmJ/msrPjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJoeW91dG91a2FcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9tdXNpYy5nZW9jaXRpZXMuanAvaGFrdXVfYW1hYmluZS8vaGFrdXVfYW1hYmluZS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Zub5aSVXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrplb/nm7jmgJ3Ct+S5neaciOilv+mjjuWFtOOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya55m95bGF5piTXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuS5neaciOilv+mjjuWFtO+8jOaciOWGt+mcsuWNjuWHneOAglwiLCBcIuaAneWQm+eni+WknOmVv++8jOS4gOWknOmtguS5neWNh+OAglwiLCBcIuS6jOaciOS4nOmjjuadpe+8jOiNieaLhuiKseW/g+W8gOOAglwiLCBcIuaAneWQm+aYpeaXpei/n++8jOS4gOaXpeiCoOS5neWbnuOAglwiLCBcIuWmvuS9j+a0m+ahpeWMl++8jOWQm+S9j+a0m+ahpeWNl+OAglwiLCBcIuWNgeS6lOWNs+ebuOivhu+8jOS7iuW5tOS6jOWNgeS4ieOAglwiLFxyXG4gICAgICAgICAgXCLmnInlpoLlpbPokJ3ojYnvvIznlJ/lnKjmnb7kuYvkvqfjgIJcIiwgXCLolJPnn63mnp3oi6bpq5jvvIzokKblm57kuIrkuI3lvpfjgIJcIiwgXCLkurroqIDkurrmnInmhL/vvIzmhL/oh7PlpKnlv4XmiJDjgIJcIiwgXCLmhL/kvZzov5zmlrnlhb3vvIzmraXmraXmr5TogqnooYzjgIJcIiwgXCLmhL/kvZzmt7HlsbHmnKjvvIzmnp3mnp3ov57nkIbnlJ/jgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJoeW91dG91a2FcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9tdXNpYy5nZW9jaXRpZXMuanAvaGFrdXVfYW1hYmluZS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5rGH5paHXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrpooLlj6TkupTljYHkupTpppblhbbkuIDjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muaXoOmXqOaFp+W8gOemheW4iFwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLmmKXmnInnmb7oirHnp4vmnInmnIjvvIxcIiwgXCLlpI/mnInlh4npo47lhqzmnInpm6rjgIJcIiwgXCLoi6Xml6Dpl7LkuovmjILlv4PlpLTvvIxcIiwgXCLkvr/mmK/kuIDlubTlpb3ml7boioLjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCLmh5DjgYvjgZfjgYTpoqjmg4VcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9hbWFjaGFtdXNpYy5jaGFnYXNpLmNvbS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Zub5aSVXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrnroDljaLpmZ/jgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mumfpuW6lOeJqVwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLlj6/mgJznmb3pm6rmm7LvvIzmnKrpgYfnn6Xpn7PkurrjgIJcIiwgXCLmgZPmg7bmiI7ml4XkuIvvvIzouYnot47mt67mtbfmu6jjgIJcIiwgXCLmtqfmoJHlkKvmnJ3pm6jvvIzlsbHpuJ/lk6LppoDmmKXjgIJcIiwgXCLmiJHmnInkuIDnk6LphZLvvIzlj6/ku6XmhbDpo47lsJjjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJoeW91dG91a2FcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9tdXNpYy5nZW9jaXRpZXMuanAvaGFrdXVfYW1hYmluZS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Zub5aSVXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrmsbTmsrPpmLvlhrvjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muadnOeJp1wiLFxyXG4gIFwiY29udGVudFwiOiBbXCLljYPph4zplb/msrPliJ3lhrvml7bvvIxcIiwgXCLnjonnj4Lnkbbkvanlk43lj4Llt67jgIJcIiwgXCLmta7nlJ/mgbDkvLzlhrDlupXmsLTvvIxcIiwgXCLml6XlpJzkuJzmtYHkurrkuI3nn6XjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCLmgYvnjYTjga7lvalcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly93d3cucmVuZ29rdS10ZWllbi5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIk5q5a6r6KKtXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrplb/lkb3lpbPCt+aYpeaXpeWutOOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5Yav5bu25bexXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuaYpeaXpeWutO+8jFwiLCBcIue7v+mFkuS4gOadr+atjOS4gOmBjeOAglwiLCBcIuWGjeaLnOmZiOS4ieaEv++8mlwiLCBcIuS4gOaEv+mDjuWQm+WNg+Wyge+8jFwiLCBcIuS6jOaEv+Wmvui6q+W4uOWBpe+8jFwiLCBcIuS4ieaEv+WmguWQjOaigeS4iueHle+8jOWygeWygemVv+ebuOingeOAglwiXSxcclxuICBcImJnbVwiOiBcIuaHkOOBi+OBl+OBhOmiqOaDhVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL2FtYWNoYW11c2ljLmNoYWdhc2kuY29tL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlkIPopb/nk5znmoTlsI/kuozpg45cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuWFiOenpsK35Y2/5LqR5q2M44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrkvZrlkI1cIixcclxuICBcImNvbnRlbnRcIjogW1wi5Y2/5LqR54OC5YWu77yM57O657ym57ym5YWu44CCXCIsIFwi5pel5pyI5YWJ5Y2O77yM5pem5aSN5pem5YWu44CCXCIsIFwi5piO5piO5LiK5aSp77yM54OC54S25pif6ZmI44CCXCIsIFwi5pel5pyI5YWJ5Y2O77yM5byY5LqO5LiA5Lq644CCXCIsIFwi5pel5pyI5pyJ5bi477yM5pif6L6w5pyJ6KGM44CCXCIsIFwi5Zub5pe25LuO57uP77yM5LiH5aeT5YWB6K+a44CCXCIsIFwi5LqO5LqI6K665LmQ77yM6YWN5aSp5LmL54G144CCXCIsXHJcbiAgICAgICAgICBcIui/geS6juWco+i0pO+8jOiOq+S4jeWSuOWQrOOAglwiLCBcIum8muS5jum8k+S5i++8jOi9qeS5juiInuS5i+OAglwiLCBcIuiPgeWNjuW3suerre+8jOiksOijs+WOu+S5i+OAglwiXSxcclxuICBcImJnbVwiOiBcIuW8peeUn+OBruepuuOBq1wiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL2FtYWNoYW11c2ljLmNoYWdhc2kuY29tL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLmsYfmlodcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuidtuaBi+iKscK36ZiF5bC95aSp5rav56a75Yir6Ium44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrnjovlm73nu7RcIixcclxuICBcImNvbnRlbnRcIjogW1wi6ZiF5bC95aSp5rav56a75Yir6Ium77yMXCIsIFwi5LiN6YGT5b2S5p2l77yM6Zu26JC96Iqx5aaC6K6444CCXCIsIFwi5LiN6YGT5b2S5p2l77yM6Zu26JC96Iqx5aaC6K6444CCXCIsIFwi6Iqx5bqV55u455yL5peg5LiA6K+t77yMXCIsIFwi57u/56qX5pil5LiO5aSp5L+x6I6r44CCXCIsIFwi5b6F5oqK55u45oCd54Gv5LiL6K+J77yMXCIsIFwi5LiA57yV5paw5qyi77yM5pen5oGo5Y2D5Y2D57yV44CCXCIsXHJcbiAgICAgICAgICBcIuacgOaYr+S6uumXtOeVmeS4jeS9j++8jFwiLCBcIuacseminOi+numVnOiKsei+nuagkeOAglwiXSxcclxuICBcImJnbVwiOiBcIuaBi+eNhOOBruW9qVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL3d3dy5yZW5nb2t1LXRlaWVuLmNvbS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcclxufV1cclxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuaW1wb3J0IGRhdGFzIGZyb20gJy4vZGF0YSdcclxuaW1wb3J0IGJncyBmcm9tICcuL2JncydcclxuaW1wb3J0IGF1ZGlvcyBmcm9tICcuL2F1ZGlvcydcclxuXHJcbnZhciBpZHggPSBsb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnP2lkPScsICcnKVxyXG52YXIgZGF0YSA9IGRhdGFzW2lkeF1cclxudmFyIGJnID0gYmdzW2lkeF1cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dyYXBwZXInKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcuLyR7Ymd9JylgXHJcblxyXG5mdW5jdGlvbiByZW5kZXJUaXRsZSh2YWwpIHtcclxuICB2YXIgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aXRsZScpXHJcbiAgdGl0bGVbMF0gJiYgKHRpdGxlWzBdLmlubmVyVGV4dCA9IHZhbClcclxuICBkb2N1bWVudC50aXRsZSA9IHZhbFxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJBdXRob3IodmFsKSB7XHJcbiAgdmFyIGF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2F1dGhvcicpXHJcbiAgYXV0aG9yWzBdICYmIChhdXRob3JbMF0uaW5uZXJUZXh0ID0gdmFsKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDb250ZW50KHZhbHMpIHtcclxuICB2YXIgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbnRlbnQnKVxyXG4gIGNvbnRlbnQgPSBjb250ZW50ICYmIGNvbnRlbnRbMF1cclxuICB2YWxzLmZvckVhY2goZnVuY3Rpb24odmFsKSB7XHJcbiAgICB2YXIgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgbGluZS5pbm5lclRleHQgPSB2YWxcclxuICAgIGlmIChjb250ZW50LmFwcGVuZCkge1xyXG4gICAgICBjb250ZW50LmFwcGVuZChsaW5lKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChsaW5lKVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckJnbSh2YWwpIHtcclxuICB2YXIgYmdtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYmdtJylcclxuICBiZ21bMF0gJiYgKGJnbVswXS5pbm5lclRleHQgPSB2YWwpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckJnbVNvdXJjZSh2YWwpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmdtU291cmNlRml4JykuaW5uZXJUZXh0ID0gJ0JHTeadpea6kO+8midcclxuICB2YXIgYmdtU291cmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYmdtLXNvdXJjZScpXHJcbiAgYmdtU291cmNlWzBdICYmIChiZ21Tb3VyY2VbMF0uaW5uZXJUZXh0ID0gdmFsKSAmJiAoYmdtU291cmNlWzBdLmhyZWYgPSB2YWwpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclJlcG9ydGVyKHZhbCkge1xyXG4gIHZhciByZXBvcnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JlcG9ydGVyJylcclxuICByZXBvcnRlclswXSAmJiAocmVwb3J0ZXJbMF0uaW5uZXJUZXh0ID0gdmFsKVxyXG59XHJcblxyXG5yZW5kZXJUaXRsZShkYXRhLnRpdGxlKVxyXG5yZW5kZXJBdXRob3IoZGF0YS5hdXRob3IpXHJcbnJlbmRlckNvbnRlbnQoZGF0YS5jb250ZW50KVxyXG5yZW5kZXJCZ20oYEJHTe+8miR7ZGF0YS5iZ219YClcclxucmVuZGVyQmdtU291cmNlKGAke2RhdGEuYmdtU291cmNlfWApXHJcbnJlbmRlclJlcG9ydGVyKGDmnJfor7XogIXvvJoke2RhdGEucmVwb3J0ZXJ9YClcclxuZnVuY3Rpb24gY3JlYXRlQXVkaW8oKSB7XHJcbiAgdmFyIGF1ZGlvID0gbmV3IEF1ZGlvKClcclxuICB2YXIgX2lkID0gcGFyc2VJbnQoaWR4KSArIDFcclxuICBhdWRpby5zcmMgPSBhdWRpb3NbX2lkXVxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXVkaW8pXHJcbiAgcmV0dXJuIGF1ZGlvXHJcbn1cclxuLy8gYXVkaW8gY29udHJvbHNcclxudmFyIGF1ZGlvRG9tID0gY3JlYXRlQXVkaW8oKVxyXG52YXIgcGxheUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5JylcclxudmFyIG5leHRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpXHJcbnZhciBiZWZvcmVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmVmb3JlJylcclxudmFyIHBsYXlUaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXlUaW1lJylcclxudmFyIGFsbFRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsVGltZScpXHJcbnZhciBwcm9ncmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzcycpXHJcbi8vIOa7muWKqOebuOWFs1xyXG52YXIgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxudmFyIGNsaWVudEhlaWdodCA9IGNvbnRlbnQuY2xpZW50SGVpZ2h0XHJcbnZhciBzY3JvbGxIZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodFxyXG5mdW5jdGlvbiBhdWRpb1RyYW5zVGltZSh0aW1lKSB7XHJcbiAgaWYgKCF0aW1lID4gMCkge1xyXG4gICAgcmV0dXJuICcwMDowMCdcclxuICB9XHJcbiAgaWYgKHRpbWUgPT09IEluZmluaXR5KSB7XHJcbiAgICByZXR1cm4gJy0tOi0tJ1xyXG4gIH1cclxuICB2YXIgZHVyYXRpb24gPSBwYXJzZUludCh0aW1lKVxyXG4gIGxldCBtaW51dGUgPSBwYXJzZUludChkdXJhdGlvbiAvIDYwKVxyXG4gIGxldCBzZWMgPSBkdXJhdGlvbiAlIDYwICsgJydcclxuICB2YXIgaXNNMCA9ICc6J1xyXG4gIGlmIChtaW51dGUgPT09IDApIHtcclxuICAgIG1pbnV0ZSA9ICcwMCdcclxuICB9IGVsc2UgaWYgKG1pbnV0ZSA8IDEwKSB7XHJcbiAgICBtaW51dGUgPSAnMCcgKyBtaW51dGVcclxuICB9XHJcbiAgaWYgKHNlYy5sZW5ndGggPT09IDEpIHtcclxuICAgIHNlYyA9ICcwJyArIHNlY1xyXG4gIH1cclxuICByZXR1cm4gbWludXRlICsgaXNNMCArIHNlY1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUaW1lKHRpbWUsIGR1cmF0aW9uKSB7XHJcbiAgLy8g5pu05paw5pe26Ze0XHJcbiAgcGxheVRpbWUgJiYgKHBsYXlUaW1lLmlubmVyVGV4dCA9IGF1ZGlvVHJhbnNUaW1lKHRpbWUpKVxyXG4gIGNvbnN0IGR1cmF0aW9uRm9ybWF0ID0gYXVkaW9UcmFuc1RpbWUoZHVyYXRpb24pXHJcbiAgYWxsVGltZSAmJiAoYWxsVGltZS5pbm5lclRleHQgIT09IGR1cmF0aW9uRm9ybWF0KSAmJiAoYWxsVGltZS5pbm5lclRleHQgPSBkdXJhdGlvbkZvcm1hdClcclxuICAvLyDmm7TmlrBwcm9ncmVzc1xyXG4gIHByb2dyZXNzICYmIChwcm9ncmVzcy5zdHlsZS53aWR0aCA9IHBhcnNlSW50KHRpbWUgKiAxMDAgLyBkdXJhdGlvbikgKyAnJScpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVNjcm9sbCh0aW1lLCBkdXJhdGlvbikge1xyXG4gIGNvbnRlbnQuc2Nyb2xsVG9wID0gKHRpbWUgLyBkdXJhdGlvbikgKiAoc2Nyb2xsSGVpZ2h0IC0gY2xpZW50SGVpZ2h0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBhdWRpb1Jlc2V0KCkge1xyXG4gIHBsYXlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgncGF1c2UnKVxyXG4gIHVwZGF0ZVRpbWUoYXVkaW9Eb20uY3VycmVudFRpbWUsIGF1ZGlvRG9tLmR1cmF0aW9uKVxyXG4gIHVwZGF0ZVNjcm9sbChhdWRpb0RvbS5jdXJyZW50VGltZSwgYXVkaW9Eb20uZHVyYXRpb24pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF1ZGlvSW5pdCgpIHtcclxuICBpZiAoYXVkaW9Eb20uZHVyYXRpb24pIHtcclxuICAgIGFsbFRpbWUgJiYgKGFsbFRpbWUuaW5uZXJUZXh0ID0gYXVkaW9UcmFuc1RpbWUoYXVkaW9Eb20uZHVyYXRpb24pKVxyXG4gIH1cclxuICAvLyDnm5HlkKzpn7PpopHmkq3mlL7ml7bpl7Tlubbmm7TmlrDov5vluqbmnaFcclxuICB2YXIgdXBkYXRlUHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmIChhdWRpb0RvbS5jdXJyZW50VGltZSA+IDAgJiYgYXVkaW9Eb20uZHVyYXRpb24gIT09IEluZmluaXR5KSB7XHJcbiAgICAgIC8vIHRoaXMubG9hZGluZ0NsYXNzID0gZmFsc2VcclxuICAgICAgdXBkYXRlVGltZShhdWRpb0RvbS5jdXJyZW50VGltZSwgYXVkaW9Eb20uZHVyYXRpb24pXHJcbiAgICAgIHVwZGF0ZVNjcm9sbChhdWRpb0RvbS5jdXJyZW50VGltZSwgYXVkaW9Eb20uZHVyYXRpb24pXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIOebkeWQrOaSreaUvuWujOaIkOS6i+S7tlxyXG4gIHZhciBhdWRpb0VuZGVkID0gZnVuY3Rpb24oKSB7XHJcbiAgICBhdWRpb0RvbS5jdXJyZW50VGltZSA9IDBcclxuICAgIGF1ZGlvUmVzZXQoKVxyXG4gIH1cclxuICAvLyDlpITnkIbmkq3mlL7plJnor69cclxuICB2YXIgaGFuZGxlRXJyb3IgPSBlID0+IHtcclxuICAgIHZhciBlcnJvckNvZGUgPSBlICYmIGUuY3VycmVudFRhcmdldCAmJiBlLmN1cnJlbnRUYXJnZXQuZXJyb3IuY29kZVxyXG4gICAgc3dpdGNoIChlcnJvckNvZGUpIHtcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNRURJQV9FUlJfTkVUV09SSycpXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNRURJQV9FUlJfREVDT0RFJylcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlIDQ6XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01FRElBX0VSUl9TUkNfTk9UX1NVUFBPUlRFRCcpXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBjb25zb2xlLmxvZygnTUVESUFfRVJSX1VOS05PV04nKVxyXG4gICAgfVxyXG4gICAgYXVkaW9FbmRlZCgpXHJcbiAgfVxyXG4gIC8vIOaSreaUvlxyXG4gIHZhciBoYW5kbGVQbGF5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoYXVkaW9Eb20ucGF1c2VkKSB7XHJcbiAgICAgIGF1ZGlvRG9tLnBsYXkgJiYgYXVkaW9Eb20ucGxheSgpXHJcbiAgICAgIHBsYXlCdXR0b24uY2xhc3NMaXN0LmFkZCgncGF1c2UnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXVkaW9Eb20ucGF1c2UgJiYgYXVkaW9Eb20ucGF1c2UoKVxyXG4gICAgICBwbGF5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3BhdXNlJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOaYr+WQpuaUr+aMgSBvbmVuZGVkIOebkeWQrOaSreaUvuWujOaIkOS6i+S7tlxyXG4gIF9hZGRFdmVudExpc3RlbmVyKGF1ZGlvRG9tLCAnZW5kZWQnLCBhdWRpb0VuZGVkKVxyXG4gIC8vIGVycm9yXHJcbiAgX2FkZEV2ZW50TGlzdGVuZXIoYXVkaW9Eb20sICdlcnJvcicsIGhhbmRsZUVycm9yKVxyXG4gIC8vIOaYr+WQpuaUr+aMgSBvbnRpbWV1cGRhdGUg55uR5ZCs5pu05paw5LqL5Lu2XHJcbiAgX2FkZEV2ZW50TGlzdGVuZXIoYXVkaW9Eb20sICd0aW1ldXBkYXRlJywgdXBkYXRlUHJvZ3Jlc3MpXHJcbiAgLy8g54K55Ye75pKt5pS+XHJcbiAgX2FkZEV2ZW50TGlzdGVuZXIocGxheUJ1dHRvbiwgJ2NsaWNrJywgaGFuZGxlUGxheSlcclxufVxyXG5cclxuZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXIoZWxlbSwgdHlwZSwgZnVuYykge1xyXG4gIGlmIChlbGVtWydfaXMnICsgdHlwZV0pIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBpZiAoZWxlbVsnb24nICsgdHlwZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZ1bmMsIGZhbHNlKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBlbGVtWydvbicgKyB0eXBlXSA9IGZ1bmNcclxuICB9XHJcbiAgZWxlbVsnX2lzJyArIHR5cGVdID0gdHJ1ZVxyXG59XHJcblxyXG5hdWRpb0luaXQoKSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=