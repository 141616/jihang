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

module.exports = __webpack_require__.p + "19d322fe41fe629c0a14598fc4eed267.jpg";

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

module.exports = __webpack_require__.p + "c04f56d1ece5cdd858f226d52897f174.jpg";

/***/ }),

/***/ "./bg/12.jpg":
/*!*******************!*\
  !*** ./bg/12.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cfc93ba2df07f25b37b776d47a6a66db.jpg";

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

module.exports = __webpack_require__.p + "bb31f313bc2647d847cf36daa8ac6939.jpg";

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

module.exports = __webpack_require__.p + "ac906f070260a1130c30d6ae540d4ded.jpg";

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

module.exports = __webpack_require__.p + "fee3fe36f8d337db3319b9b3b54d9c67.jpg";

/***/ }),

/***/ "./bg/29.jpg":
/*!*******************!*\
  !*** ./bg/29.jpg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e48d58f5cd183822c4085cd4c17caa96.jpg";

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

module.exports = __webpack_require__.p + "659729f56a3654526eab047b156357a2.jpg";

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

/***/ "./images/before_grey.png":
/*!********************************!*\
  !*** ./images/before_grey.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5f73b78f6fa8a2166b47025b33f334d5.png";

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

/***/ "./images/next_grey.png":
/*!******************************!*\
  !*** ./images/next_grey.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "946e5df85c4e6bb44d7bcaa0c6ad1d36.png";

/***/ }),

/***/ "./images/pause.png":
/*!**************************!*\
  !*** ./images/pause.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "83fe5dd8f54f2fc2e5ab0244a9fc7539.png";

/***/ }),

/***/ "./images/pause_grey.png":
/*!*******************************!*\
  !*** ./images/pause_grey.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "73bea96fc286bb05d930b46e0ff0b174.png";

/***/ }),

/***/ "./images/play.png":
/*!*************************!*\
  !*** ./images/play.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7b0365a48088851bfe199d89290ed1fb.png";

/***/ }),

/***/ "./images/play_grey.png":
/*!******************************!*\
  !*** ./images/play_grey.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a8c9dba395f62a39b4c590f45b397043.png";

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
exports.push([module.i, "html, body {\r\n  height: 100%;\r\n  /* letter-spacing: 3px; */\r\n  font-size: 13px;\r\n  margin: 0;\r\n}\r\n.wrapper {\r\n  height: 100%;\r\n  background-image: url(" + escape(__webpack_require__(/*! ../images/bg.jpg */ "./images/bg.jpg")) + ");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  text-align: center;\r\n}\r\n.header {\r\n  padding: 60px 0 0 0;\r\n}\r\n.content-wrapper {\r\n  margin: 35px;\r\n  height: 300px;\r\n  overflow-y: hidden;\r\n}\r\n.content {\r\n  height: 300px;\r\n  overflow-y: scroll;\r\n  margin-right: -8px;\r\n}\r\np {\r\n  margin: 6px 0 ;\r\n}\r\n.footer {\r\n  margin: 30px 35px 0 35px;\r\n}\r\n.controls {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n  -ms-flex-pack: center;\r\n  justify-content: center;\r\n}\r\n.flex-div {\r\n  display: flex;\r\n}\r\n.pre {\r\n  background: url(" + escape(__webpack_require__(/*! ../images/before.png */ "./images/before.png")) + ") no-repeat center center;\r\n}\r\n.pre-grey {\r\n  background: url(" + escape(__webpack_require__(/*! ../images/before_grey.png */ "./images/before_grey.png")) + ") no-repeat center center;\r\n}\r\n.next {\r\n  background: url(" + escape(__webpack_require__(/*! ../images/next.png */ "./images/next.png")) + ") no-repeat center center;\r\n}\r\n.next-grey {\r\n  background: url(" + escape(__webpack_require__(/*! ../images/next_grey.png */ "./images/next_grey.png")) + ") no-repeat center center;\r\n}\r\n.controls-icon {\r\n  width: 18px;\r\n  height: 18px;\r\n  background-size: 100% auto;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n  -ms-flex-pack: center;\r\n  justify-content: center;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  margin: auto 0;\r\n}\r\n.play {\r\n  width: 24px;\r\n  height: 24px;\r\n  background: url(" + escape(__webpack_require__(/*! ../images/play.png */ "./images/play.png")) + ") no-repeat center center;\r\n  background-size: 100% auto;\r\n  margin: 0 25%;\r\n}\r\n.play-grey {\r\n  background: url(" + escape(__webpack_require__(/*! ../images/play_grey.png */ "./images/play_grey.png")) + ") no-repeat center center;\r\n  background-size: 100% auto;\r\n}\r\n.pause {\r\n  background: url(" + escape(__webpack_require__(/*! ../images/pause.png */ "./images/pause.png")) + ") no-repeat center center;\r\n}\r\n.pause-grey {\r\n  background: url(" + escape(__webpack_require__(/*! ../images/pause_grey.png */ "./images/pause_grey.png")) + ") no-repeat center center;\r\n  background-size: 100% auto;\r\n}\r\n.time-controls {\r\n  display: flex;\r\n  letter-spacing: 0;\r\n  color: #fff;\r\n  margin: 10px;\r\n}\r\n.timeline {\r\n  background-color: #000;\r\n  height: 1.5px;\r\n  width: 100%;\r\n  margin: 7px 14px;\r\n}\r\n.timeline__active {\r\n  background-color: #fff;\r\n  height: 1.5px;\r\n  width: 0%;\r\n  position: relative;\r\n}\r\n.grey .timeline__active {\r\n  background-color: #666;\r\n}\r\n.timeline__active__ball {\r\n  position: absolute;\r\n  right: -10px;\r\n  top: -10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #fff;\r\n  border-radius: 10px;\r\n}\r\n.grey .timeline__active__ball {\r\n  background-color: #666;\r\n}\r\n.time {\r\n  font-size: 11px;\r\n  letter-spacing: 0px;\r\n  color: #fff;\r\n  min-width: 2rem;\r\n}\r\n.grey .time {\r\n  color: #666;\r\n}\r\n.bgm-source {\r\n  color: #000;\r\n}", ""]);

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

/***/ "./src/audios.js":
/*!***********************!*\
  !*** ./src/audios.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

var audios = {
  1: "http://pw5lwe7zu.bkt.clouddn.com/1.mp3",
  2: "http://pw5lwe7zu.bkt.clouddn.com/2.mp3",
  3: "http://pw5lwe7zu.bkt.clouddn.com/3.mp3",
  4: "http://pw5lwe7zu.bkt.clouddn.com/4.mp3",
  5: "http://pw5lwe7zu.bkt.clouddn.com/5.mp3",
  6: "http://pw5lwe7zu.bkt.clouddn.com/6.mp3",
  7: "http://pw5lwe7zu.bkt.clouddn.com/7.mp3",
  8: "http://pw5lwe7zu.bkt.clouddn.com/8.mp3",
  9: "http://pw5lwe7zu.bkt.clouddn.com/9.mp3",
  10: "http://pw5lwe7zu.bkt.clouddn.com/10.mp3",
  11: "http://pw5lwe7zu.bkt.clouddn.com/11.mp3",
  12: "http://pw5lwe7zu.bkt.clouddn.com/12.mp3",
  13: "http://pw5lwe7zu.bkt.clouddn.com/13.mp3",
  14: "http://pw5lwe7zu.bkt.clouddn.com/14.mp3",
  15: "http://pw5lwe7zu.bkt.clouddn.com/15.mp3",
  16: "http://pw5lwe7zu.bkt.clouddn.com/16.mp3",
  17: "http://pw5lwe7zu.bkt.clouddn.com/17.mp3",
  18: "http://pw5lwe7zu.bkt.clouddn.com/18.mp3",
  19: "http://pw5lwe7zu.bkt.clouddn.com/19.mp3",
  20: "http://pw5lwe7zu.bkt.clouddn.com/20.mp3",
  21: "http://pw5lwe7zu.bkt.clouddn.com/21.mp3",
  22: "http://pw5lwe7zu.bkt.clouddn.com/22.mp3",
  23: "http://pw5lwe7zu.bkt.clouddn.com/23.mp3",
  24: "http://pw5lwe7zu.bkt.clouddn.com/24.mp3",
  25: "http://pw5lwe7zu.bkt.clouddn.com/25.mp3",
  26: "http://pw5lwe7zu.bkt.clouddn.com/26.mp3",
  27: "http://pw5lwe7zu.bkt.clouddn.com/27.mp3",
  28: "http://pw5lwe7zu.bkt.clouddn.com/28.mp3",
  29: "http://pw5lwe7zu.bkt.clouddn.com/29.mp3",
  30: "http://pw5lwe7zu.bkt.clouddn.com/30.mp3",
  31: "http://pw5lwe7zu.bkt.clouddn.com/31.mp3",
  32: "http://pw5lwe7zu.bkt.clouddn.com/32.mp3",
  33: "http://pw5lwe7zu.bkt.clouddn.com/33.mp3",
  34: "http://pw5lwe7zu.bkt.clouddn.com/34.mp3",
  35: "http://pw5lwe7zu.bkt.clouddn.com/35.mp3",
  36: "http://pw5lwe7zu.bkt.clouddn.com/36.mp3",
  37: "http://pw5lwe7zu.bkt.clouddn.com/37.mp3",
  38: "http://pw5lwe7zu.bkt.clouddn.com/38.mp3",
  39: "http://pw5lwe7zu.bkt.clouddn.com/39.mp3",
  40: "http://pw5lwe7zu.bkt.clouddn.com/40.mp3",
  41: "http://pw5lwe7zu.bkt.clouddn.com/41.mp3",
  42: "http://pw5lwe7zu.bkt.clouddn.com/42.mp3",
  43: "http://pw5lwe7zu.bkt.clouddn.com/43.mp3",
  44: "http://pw5lwe7zu.bkt.clouddn.com/44.mp3",
  45: "http://pw5lwe7zu.bkt.clouddn.com/45.mp3",
  46: "http://pw5lwe7zu.bkt.clouddn.com/46.mp3",
  47: "http://pw5lwe7zu.bkt.clouddn.com/47.mp3",
  48: "http://pw5lwe7zu.bkt.clouddn.com/48.mp3",
  49: "http://pw5lwe7zu.bkt.clouddn.com/49.mp3",
  50: "http://pw5lwe7zu.bkt.clouddn.com/50.mp3",
  51: "http://pw5lwe7zu.bkt.clouddn.com/51.mp3",
  52: "http://pw5lwe7zu.bkt.clouddn.com/52.mp3",
  53: "http://pw5lwe7zu.bkt.clouddn.com/53.mp3",
  54: "http://pw5lwe7zu.bkt.clouddn.com/54.mp3",
  55: "http://pw5lwe7zu.bkt.clouddn.com/55.mp3",
  56: "http://pw5lwe7zu.bkt.clouddn.com/56.mp3",
  57: "http://pw5lwe7zu.bkt.clouddn.com/57.mp3",
  58: "http://pw5lwe7zu.bkt.clouddn.com/58.mp3",
  59: "http://pw5lwe7zu.bkt.clouddn.com/59.mp3",
  60: "http://pw5lwe7zu.bkt.clouddn.com/60.mp3",
  61: "http://pw5lwe7zu.bkt.clouddn.com/61.mp3",
  62: "http://pw5lwe7zu.bkt.clouddn.com/62.mp3",
  63: "http://pw5lwe7zu.bkt.clouddn.com/63.mp3",
  64: "http://pw5lwe7zu.bkt.clouddn.com/64.mp3",
  65: "http://pw5lwe7zu.bkt.clouddn.com/65.mp3",
  66: "http://pw5lwe7zu.bkt.clouddn.com/66.mp3",
  67: "http://pw5lwe7zu.bkt.clouddn.com/67.mp3",
  68: "http://pw5lwe7zu.bkt.clouddn.com/68.mp3",
  69: "http://pw5lwe7zu.bkt.clouddn.com/69.mp3",
  70: "http://pw5lwe7zu.bkt.clouddn.com/70.mp3",
  71: "http://pw5lwe7zu.bkt.clouddn.com/71.mp3",
  72: "http://pw5lwe7zu.bkt.clouddn.com/72.mp3",
  73: "http://pw5lwe7zu.bkt.clouddn.com/73.mp3",
  74: "http://pw5lwe7zu.bkt.clouddn.com/74.mp3",
  75: "http://pw5lwe7zu.bkt.clouddn.com/75.mp3",
  76: "http://pw5lwe7zu.bkt.clouddn.com/76.mp3",
  77: "http://pw5lwe7zu.bkt.clouddn.com/77.mp3",
  78: "http://pw5lwe7zu.bkt.clouddn.com/78.mp3",
  79: "http://pw5lwe7zu.bkt.clouddn.com/79.mp3",
  80: "http://pw5lwe7zu.bkt.clouddn.com/80.mp3",
  81: "http://pw5lwe7zu.bkt.clouddn.com/81.mp3",
  82: "http://pw5lwe7zu.bkt.clouddn.com/82.mp3",
  83: "http://pw5lwe7zu.bkt.clouddn.com/83.mp3",
  84: "http://pw5lwe7zu.bkt.clouddn.com/84.mp3",
  85: "http://pw5lwe7zu.bkt.clouddn.com/85.mp3",
  86: "http://pw5lwe7zu.bkt.clouddn.com/86.mp3",
  87: "http://pw5lwe7zu.bkt.clouddn.com/87.mp3",
  88: "http://pw5lwe7zu.bkt.clouddn.com/88.mp3",
  89: "http://pw5lwe7zu.bkt.clouddn.com/89.mp3",
  90: "http://pw5lwe7zu.bkt.clouddn.com/90.mp3",
  91: "http://pw5lwe7zu.bkt.clouddn.com/91.mp3",
  92: "http://pw5lwe7zu.bkt.clouddn.com/92.mp3",
  93: "http://pw5lwe7zu.bkt.clouddn.com/93.mp3",
  94: "http://pw5lwe7zu.bkt.clouddn.com/94.mp3",
  95: "http://pw5lwe7zu.bkt.clouddn.com/95.mp3",
  96: "http://pw5lwe7zu.bkt.clouddn.com/96.mp3",
  97: "http://pw5lwe7zu.bkt.clouddn.com/97.mp3",
  98: "http://pw5lwe7zu.bkt.clouddn.com/98.mp3",
  99: "http://pw5lwe7zu.bkt.clouddn.com/99.mp3",
  100: "http://pw5lwe7zu.bkt.clouddn.com/100.mp3"
};
module.exports = audios;


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
  "title": "《人间失格》两则",
  "author": "作者：太宰治",
  "content": ["早晨，我睁眼醒来翻身下床，", "又变成了原来那个浅薄无知、", "善于伪装的滑稽角色。", "胆小鬼连幸福都会惧怕，", "碰到棉花都会受伤，", "有时也会被幸福所伤。",
          "趁着还没有受伤，", "我想就这样赶快分道扬镳。", "我又放出了惯用的逗笑烟幕弹。", "所谓世人，不就是你吗？"],
  "bgm": "Alexander Nakarada-Winter",
  "bgmSource": "https://freepd.com",
  "reporter": "右石先生"
}, {
  "title": "《而已集·小杂感》节选",
  "author": "作者：鲁迅",
  "content": ["楼下一个男人病得要死，", "那间隔壁的一家唱着留声机，", "对面是弄孩子。", "楼上有两人狂笑；", "还有打牌声。", "河中的船上有女人哭着她死去的母亲。",
          "人类的悲欢并不相通，", "我只觉得他们吵闹。"],
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
  "content": ["仅仅在昨天，", "我认为我自己只是一个碎片，", "无韵律地在生命的穹苍中颤抖。", "现在我晓得，", "我就是那穹苍，", "一切生命都是在我里面", "有韵律地转动的碎片。",
          "他们在觉醒的时候对我说：", "“你和你所居住的世界，", "只不过是无边海洋的", "无边沙岸上的一粒沙子。”", "在梦里我对他们说：", "“我就是那无边的海洋，", "大千世界只不过是我的", "沙岸上的沙粒。”"],
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
  "content": ["你要克服的是你的虚荣心", "是你的炫耀欲", "你要对付的是你的时刻想要冲出来", "想要出风头的小聪明", "我从来都无法得知，", "人们是究竟为什么会爱上另一个人，",
          "我猜也许我们的心上都有一个缺口，", "它是个空洞，", "呼呼的往灵魂里灌着刺骨的寒风，", "所以我们急切的需要一个正好形状的心来", "填上它，", "就算你是太阳一样完美的正圆形，", "可是我心里的缺口，",
          "或许却恰恰是个歪歪扭扭的锯齿形，", "所以你填不了。"],
  "bgm": "Kevin MacLeod-Oh Holy Night",
  "bgmSource": "https://incompetech.com",
  "reporter": "右石先生"
}, {
  "title": "《一剪梅·雨打梨花深闭门》",
  "author": "作者：唐寅",
  "content": ["雨打梨花深闭门，", "忘了青春，误了青春。", "赏心乐事共谁论？", "花下销魂，月下销魂。", "愁聚眉峰尽日颦，", "千点啼痕，万点啼痕。", "晓看天色暮看云，", "行也思君，坐也思君。"],
  "bgm": "hyoutouka",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "汇文"
}, {
  "title": "《木兰词·拟古决绝词柬友》",
  "author": "作者：纳兰性德",
  "content": ["人生若只如初见，", "何事秋风悲画扇。", "等闲变却故人心，", "却道故人心易变。", "骊山语罢清宵半，", "泪雨零铃终不怨。", "何如薄幸锦衣郎，", "比翼连枝当日愿。"],
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
  "content": ["醒来觉得甚是爱你。", "要是世上只有我们两个人多么好，我一定要把你欺负得哭不出来。", "我想要在茅亭里看雨、", "假山边看蚂蚁，看蝴蝶恋爱，", "看蜘蛛结网，看水，看船，看云，",
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
  "author": "亚历山大·谢尔盖耶维奇·普希金",
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
  "content": ["你不要说我喜欢你，", "你要说这夏夜的月色真美丽", "此刻烦躁的心情就像", "用十除以三得出的结果一样，", "无穷无尽"],
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
  "content": ["曾有七次我鄙视了自己的灵魂：", "第一次，", "当它本可进取时，却故作谦卑", "第二次，", "当它在空虚时，用爱欲来填充", "第三次，", "在困难和容易之间，它选择了容易",
          "第四次，", "它犯了错，却借由别人也会犯错来宽慰自己", "第五次，", "它自由软弱，却把它认为是生命的坚韧", "第六次，", "当它鄙夷一张丑恶的嘴脸时，", "却不知那正是自己面具中的一副；",
          "第七次，", "它侧身于生活的污泥中，虽不甘心，却又畏首畏尾。"],
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
  "content": ["蒹葭苍苍，白露为霜。", "所谓伊人，在水一方。", "溯洄从之，道阻且长。", "溯游从之，宛在水中央。", "蒹葭萋萋，白露未晞。", "所谓伊人，在水之湄。", "溯洄从之，道阻且跻。", "溯游从之，宛在水中坻。",
          "蒹葭采采，白露未已。", "所谓伊人，在水之涘。", "溯洄从之，道阻且右。", "溯游从之，宛在水中沚。"],
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
  "author": "作者：佚名",
  "content": ["今夕何夕兮搴洲中流。", "今日何日兮得与王子同舟。", "蒙羞被好兮不訾诟耻。", "心几烦而不绝兮得知王子。", "山有木兮木有枝。", "心悦君兮君不知。"],
  "bgm": "桜雲",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《生命是我们拥有的一切》",
  "author": "作者：D.H. 劳伦斯",
  "content": ["活着时，", "生命是我们拥有的一切；", "如果你不在生命中活着，", "你是一坨粪。", "工作是生命，生命寓于工作，", "除非你是工资的奴隶。", "当工资的奴隶工作，", "他将生命搁置一旁，",
          "站在那里像一坨粪。", "人应该拒绝毫无生气地工作。", "人应该拒绝变为", "一堆堆赚工资的粪。", "人应该彻底拒绝", "作为工资的奴隶而工作。", "人应该要求为自己工作，", "做自己的工作，", "将生命投入其中。",
          "因为如果人的工作里没有生命，", "他基本上是一堆粪。"],
  "bgm": "アイリッシュの風",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "右石先生"
}, {
  "title": "《1927年春，帕斯捷尔纳克致茨维塔耶娃》",
  "author": "鲍利斯·列奥尼多维奇·帕斯捷尔纳克",
  "content": ["我们多么草率地成为了孤儿。", "玛琳娜，", "这是我最后一次呼唤你的名字。", "大雪落在我锈迹斑斑的", "气管和肺叶上，", "说吧：", "今夜，", "我的嗓音是一列被截停的火车，",
          "你的名字是俄罗斯漫长的国境线。", "我想象我们的相遇，", "在一场隆重的死亡背面", "（玫瑰的矛盾贯穿了他硕大的心）；", "在一九二七年春夜，", "我们在国境线相遇", "因此错过了",
          "这个呼啸着奔向终点的世界。", "而今夜，你是舞曲，世界是错误。", "  ", "当新年的钟声敲响的时候，", "百合花盛放", "——他以他的死宣告了世纪的终结，", "而不是我们尴尬的生存。",
          "为什么我要对你们沉默？", "当华尔兹舞曲奏起的时候，", "我在谢幕。", "因为今夜，你是旋转，我是迷失。", "当你转换舞伴的时候，", "我将在世界的留言册上", "抹去我的名字。", "玛琳娜，国境线的舞会",
          "停止，", "大雪落向我们各自孤单的命运。", "我歌唱了这寒冷的春天，", "我歌唱了我们的废墟", "……然后我又将沉默不语。"],
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
  "content": ["Thy light alone - ", "like mist o'er the mountains driven, ",
          "Or music by the night-wind", "sent through strings of some still instrument,",
          "Or moonlight on a midnight stream.", "唯有你的光辉", "能像漫过山岭的薄雾", "像和风从静谧的世界琴弦里带来的夜曲", "像朗照溪水的月色"],
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
  "author": "作者：佚名",
  "content": ["彼黍离离，彼稷之苗。", "行迈靡靡，中心摇摇。", "知我者，谓我心忧；", "不知我者，谓我何求。", "悠悠苍天，此何人哉？",
          "彼黍离离，彼稷之穗。", "行迈靡靡，中心如醉。", "知我者，谓我心忧；", "不知我者，谓我何求。", "悠悠苍天，此何人哉？",
          "彼黍离离，彼稷之实。", "行迈靡靡，中心如噎。", "知我者，谓我心忧；", "不知我者，谓我何求。", "悠悠苍天，此何人哉？"],
  "bgm": "omiwatari",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "四夕"
}, {
  "title": "《干草堆》",
  "author": "奥西普·埃米尔耶维奇·曼德尔施塔姆",
  "content": ["我顺手搭起一架木梯，", "爬上披散的干草棚顶，", "我在呼吸银河的碎屑，", "我在呼吸宇宙的病症。"],
  "bgm": "Kevin MacLeod-Starry",
  "bgmSource": "https://incompetech.com",
  "reporter": "Nj宫袭"
}, {
  "title": "《心的歌》",
  "author": "作者：卡瓦菲斯",
  "content": ["有了你，我想，", "一切愉快的事物都朝我微笑，", "在你眼睛的镜子里反映着欢乐。", "留下来，我的光，", "所有那些只要你看我一眼", "便充满激情地荡漾在我心上、",
          "涌到我唇间的感觉，", "我还没有告诉你哪怕一半。", "如果你希望，你可以不跟我讲，", "也不要说些爱和倾慕的迷人话。", "这些已足够：有你在近旁，", "我可以告诉你我需要你，", "可以接触你，",
          "可以呼吸你呼吸的早晨的清新；", "而如果你觉得就连这些也是多余的，", "那么仅仅见到你也已足够！", "希望以后你看到的", "都是属于自己的幸福，", "努力着的是属于自己幸福的小事。",
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
  "author": "玛琳娜·伊万诺夫娜·茨维塔耶娃",
  "content": ["我想和你一起生活在某个小镇，", "共享无尽的黄昏", "和绵绵不绝的钟声。", "在这个小镇的旅店里——", "古老时钟敲出的微弱响声", "像时间轻轻滴落。",
          "有时候，在黄昏，", "自顶楼某个房间传来笛声，", "吹笛者倚著窗牖，", "而窗口大朵郁金香。", "此刻你若不爱我，我也不会在意。", "在房间中央，一个磁砖砌成的炉子", "每一块磁砖上画著一幅画",
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
  "author": "作者：佚名",
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
  "content": ["每一个不曾起舞的日子，", "都是对生命的辜负。", "其实人跟树是一样的，", "越是向往高处的阳光，", "它的根就越要伸向黑暗的地底。", "一个人知道自己为什么而活，", "就可以忍受任何一种生活。",
          "但凡不能杀死你的，", "最终都会使你更强大。", "当你凝视深渊时，", "深渊也在凝视着你。"],
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
  "content": ["何谓旅行？活着就是旅行。", "我从一天去到另一天，", "一如从一个车站去到另一个车站，", "乘坐我身体或命运的火车，", "将头探出窗户，", "看街道，看广场，", "看人们的脸和姿态，", "这些总是相同，又总是不同，如同风景。"],
  "bgm": "Rafael Krux-Pond",
  "bgmSource": "https://freepd.com",
  "reporter": "Nj羽凡"
}, {
  "title": "《周南·关雎》",
  "author": "作者：佚名",
  "content": ["关关雎鸠，在河之洲。", "窈窕淑女，君子好逑。", "参差荇菜，左右流之。", "窈窕淑女，寤寐求之。", "求之不得，寤寐思服。", "悠哉悠哉，辗转反侧。", "参差荇菜，左右采之。", "窈窕淑女，琴瑟友之。",
          "参差荇菜，左右芼之。", "窈窕淑女，钟鼓乐之。"],
  "bgm": "弥生の空に",
  "bgmSource": "http://amachamusic.chagasi.com/",
  "reporter": "四夕"
}, {
  "title": "《一剪梅·舟过吴江》",
  "author": "作者：蒋捷",
  "content": ["一片春愁待酒浇。", "江上舟摇。", "楼上帘招。秋娘度与泰娘娇。", "风又飘飘。雨又萧萧。", "何日归家洗客袍。", "银字笙调。心字香烧。", "流光容易把人抛。", "红了樱桃。绿了芭蕉。"],
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
  "content": ["纤云弄巧，飞星传恨，", "银汉迢迢暗度。", "金风玉露一相逢，", "便胜却人间无数。", "柔情似水，佳期如梦，", "忍顾鹊桥归路？", "两情若是久长时，", "又岂在朝朝暮暮。"],
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
  "title": "《红豆》",
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
  "author": "玛琳娜·伊万诺夫娜·茨维塔耶娃",
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
  "content": ["We are all in the gutter,", "but some of us are looking at the stars.", "我们都在阴沟里，但仍有人仰望星空。",
          "When I was young,", "I thought money was everything.", "Now I'm old enough to know that it is true.",
          "年轻时我以为钱就是一切，", "现在老了才知道确实如此。", "Be yourself,", "everyone else is already taken.", "做你自己，", "因为别人都有人做了。",
          "To love oneself is", "the beginning of a lifelong romance.", "爱自己是终身浪漫的开始。"],
  "bgm": "Kevin MacLeod-Bethlehem",
  "bgmSource": "https://incompetech.com",
  "reporter": "右石先生"
}, {
  "title": "歌德三则",
  "author": "作者：歌德",
  "content": ["If who is the game of life,", "he accomplishes nothing;", "Who cannot control himself,",
          "he is always a slave.", "谁若游戏人生，他就一事无成；", "谁不能主宰自己，便永远是一个奴隶。",
          "If I love you, what business is it of yours?", "我爱你，与你无关。",
          "\"Do you know why you close your eyes ", "when you kiss?\"",
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
  "author": "作者：艾米莉·狄金森",
  "content": ["为每一个狂喜的瞬间", "我们必须偿以痛苦至极", "刺痛和颤抖，和狂喜成正比", "为每一个可爱的时刻", "必偿以多年的付出", "辛酸争夺的半分八厘", "和浸满泪水的钱箱"],
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
  "content": ["记得旧时好，跟随阿娘去吃茶。", "门前磨螺壳，巷口弄泥沙。", "而今人长大，心事乱如麻。", "记得旧时遥，喜看阿婆纺线纱。", "瓦凹泡新茧，院内惹雏鸭。", "而今人长大，心绪淡若茶。",
            "记得旧时小，爱卷丫小衣襟角。", "檐底蹲蚁巢，树上共攀枣。", "而今人长大，心情恍比潮。", "记得旧时淘，总嫌先生讲乖巧。", "车马混鱼龙，睁眼乐妖娆。",
            "而今人长大，心思飘成草。", "记得旧时闹，偏要哥哥教捉虾。", "墙角挖青苔，梢头斗知了。", "而今人长大，心湖荡起潮。"],
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
  "content": ["君不见，", "黄河之水天上来，", "奔流到海不复回。", "君不见，", "高堂明镜悲白发，", "朝如青丝暮成雪。", "人生得意须尽欢，", "莫使金樽空对月。", "天生我材必有用，", "千金散尽还复来。",
          "烹羊宰牛且为乐，", "会须一饮三百杯。", "岑夫子，丹丘生，", "将进酒，杯莫停。", "与君歌一曲，", "请君为我倾耳听。", "钟鼓馔玉不足贵，", "但愿长醉不复醒。", "古来圣贤皆寂寞，", "惟有饮者留其名。",
          "陈王昔时宴平乐，", "斗酒十千恣欢谑。", "主人何为言少钱，", "径须沽取对君酌。", "五花马，千金裘，", "呼儿将出换美酒，", "与尔同销万古愁。"],
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
  "content": ["桃之夭夭，灼灼其华。", "之子于归，宜其室家。", "桃之夭夭，有蕡其实。", "之子于归，宜其家室。", "桃之夭夭，其叶蓁蓁。", "之子于归，宜其家人。"],
  "bgm": "nezame",
  "bgmSource": "http://music.geocities.jp/hakuu_amabine/",
  "reporter": "吃西瓜的小二郎"
}, {
  "title": "《惶然录》节选",
  "author": "作者：费尔南多·佩索阿",
  "content": ["像一支没有完成的琴弓，", "灵魂从来不能存在于它的自身。", "伟大的景观统统属于", "我们已经亲历过的一个明天。", "而永不间断的交谈已经是一个失败。", "谁曾猜出生活就像这个样子？",
          "我找到自己之日，", "就是失落自己之时。", "如果我相信，", "我就必然怀疑。", "我紧紧抓住一些东西的时候，", "我的手里必定空无一物。", "我去睡觉就如我正在出去散步。", "生活毕竟是一次伟大的失眠，",
          "我们做过或想过的一切，", "都处在清澈的半醒状态之中。", "如果我能够入睡，", "我会快乐。", "至少我现在思考的时候我就睡不成。", "夜晚是一个巨大的重压，", "压得我在寂静的覆盖之下的梦里自我窒息。",
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
  "content": ["我爱你，", "不是因为你是一个怎样的人，", "而是因为", "我喜欢与你在一起时的感觉。", "没有人值得你流泪，", "值得让你这么做的人不会让你哭泣。", "失去某人，", "最糟糕的莫过于，",
          "他近在身旁，", "却犹如远在天边。", "纵然伤心，也不要悉眉不展，", "因为你不知是谁会爱上你的笑容。", "对于世界而言，你是一个人；", "但是对于某人，", "你是他的整个世界。",
          "不要为那些不愿", "在你身上花费时间的人", "而浪费你的时间。", "爱你的人", "如果没有按你所希望的方式爱你，", "那并不代表他们没有全心全意地爱你。", "不要着急，", "最好的总会在最不经意的时候出现。",
          "在遇到梦中人之前，", "上天也许会安排我们先遇到别人；", "在我们终于遇见心仪的人时，", "便应当心存感激。", "不要因为结束而哭泣，", "微笑吧，为你的曾经拥有。", "“生命是束纯净的火焰，",
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
  "content": ["平生不会相思，", "才会相思，便害相思。", "身似浮云，心如飞絮，", "气若游丝，空一缕馀香在此，", "盼千金游子何之。", "证候来时，正是何时？", "灯半昏时，月半明时。"],
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
  "content": ["这是一个最好的时代，", "这是一个最坏的时代；", "这是一个智慧的年代，", "这是一个愚蠢的年代；", "这是一个信仰的时期，", "这是一个怀疑的时期；", "这是一个光明的季节，", "这是一个黑暗的季节；",
          "这是希望之春，", "这是失望之冬；", "人们面前应有尽有，", "人们面前一无所有；", "人们正踏上天堂之路，", "人们正走向地狱之门。"],
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





var PAUSE_CLASS = 'pause'
var changeColorList = ["5", "9", "15", "18", "27", "35", "36", "43", "46", "52", "53", "56", "64", "69", "72", "82", "83", "90", "92"]
var idx = location.search.replace('?id=', '')
var data = _data__WEBPACK_IMPORTED_MODULE_1__["default"][parseInt(idx) - 1]
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
  var content = document.getElementsByClassName('content-p')
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
  // var _id = parseInt(idx) + 1
  audio.src = _audios__WEBPACK_IMPORTED_MODULE_3___default.a[idx]
  document.body.appendChild(audio)
  return audio
}
// audio controls
var audioDom = createAudio()
var playButton = document.getElementById('play')
var nextButton = document.getElementById('next')
var beforeButton = document.getElementById('pre')
var playTime = document.getElementById('playTime')
var allTime = document.getElementById('allTime')
var progress = document.getElementById('progress')
var timeControls = document.getElementById('timeControls')
// 滚动相关
var content = document.getElementById('content')
var clientHeight = content.clientHeight
var scrollHeight = content.scrollHeight

function changeColor() {
  if (changeColorList.indexOf(idx) > -1) {
    playButton.classList.add('play-grey')
    nextButton.classList.add('next-grey')
    beforeButton.classList.add('pre-grey')
    timeControls.classList.add('grey')
    PAUSE_CLASS = 'pause-grey'
  }
}
changeColor()
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

// var scrollPos = 0
var interval = null
var isStart = false
function goScroll(content, val) {
  interval = setInterval(() => {
    content.scrollBy(0, 1)
  }, val);
}
function updateScroll(time, duration) {
  if (!isStart && duration && time > 15 && (scrollHeight - clientHeight) > 0) {
    var val = ((duration - time) * 1000) / (scrollHeight - clientHeight)
    goScroll(content, val)
    isStart = true
  }
  if (time === duration) {
    clearInterval(interval)
    content.scrollBy(0, 0)
  }
}

function audioReset() {
  playButton.classList.remove(PAUSE_CLASS)
  updateTime(audioDom.currentTime, audioDom.duration)
  updateScroll(audioDom.currentTime, audioDom.duration)
  isStart = false
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
      playButton.classList.add(PAUSE_CLASS)
    } else {
      audioDom.pause && audioDom.pause()
      playButton.classList.remove(PAUSE_CLASS)
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
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmcvMS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMTAuanBnIiwid2VicGFjazovLy8uL2JnLzEwMC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMTEuanBnIiwid2VicGFjazovLy8uL2JnLzEyLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8xMy5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMTQuanBnIiwid2VicGFjazovLy8uL2JnLzE1LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8xNi5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMTcuanBnIiwid2VicGFjazovLy8uL2JnLzE4LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8xOS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMi5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMjAuanBnIiwid2VicGFjazovLy8uL2JnLzIxLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8yMi5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMjMuanBnIiwid2VicGFjazovLy8uL2JnLzI0LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8yNS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMjYuanBnIiwid2VicGFjazovLy8uL2JnLzI3LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8yOC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMjkuanBnIiwid2VicGFjazovLy8uL2JnLzMuanBnIiwid2VicGFjazovLy8uL2JnLzMwLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8zMS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMzIuanBnIiwid2VicGFjazovLy8uL2JnLzMzLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8zNC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMzUuanBnIiwid2VicGFjazovLy8uL2JnLzM2LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8zNy5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMzguanBnIiwid2VicGFjazovLy8uL2JnLzM5LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy80LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy80MC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNDEuanBnIiwid2VicGFjazovLy8uL2JnLzQyLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy80My5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNDQuanBnIiwid2VicGFjazovLy8uL2JnLzQ1LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy80Ni5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNDcuanBnIiwid2VicGFjazovLy8uL2JnLzQ4LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy80OS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNTAuanBnIiwid2VicGFjazovLy8uL2JnLzUxLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy81Mi5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNTMuanBnIiwid2VicGFjazovLy8uL2JnLzU0LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy81NS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNTYuanBnIiwid2VicGFjazovLy8uL2JnLzU3LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy81OC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNTkuanBnIiwid2VicGFjazovLy8uL2JnLzYuanBnIiwid2VicGFjazovLy8uL2JnLzYwLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy82MS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNjIuanBnIiwid2VicGFjazovLy8uL2JnLzYzLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy82NC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNjUuanBnIiwid2VicGFjazovLy8uL2JnLzY2LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy82Ny5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNjguanBnIiwid2VicGFjazovLy8uL2JnLzY5LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy83LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy83MC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNzEuanBnIiwid2VicGFjazovLy8uL2JnLzcyLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy83My5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNzQuanBnIiwid2VicGFjazovLy8uL2JnLzc1LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy83Ni5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNzcuanBnIiwid2VicGFjazovLy8uL2JnLzc4LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy83OS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvOC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvODAuanBnIiwid2VicGFjazovLy8uL2JnLzgxLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy84Mi5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvODMuanBnIiwid2VicGFjazovLy8uL2JnLzg0LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy84NS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvODYuanBnIiwid2VicGFjazovLy8uL2JnLzg3LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy84OC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvODkuanBnIiwid2VicGFjazovLy8uL2JnLzkuanBnIiwid2VicGFjazovLy8uL2JnLzkwLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy85MS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvOTIuanBnIiwid2VicGFjazovLy8uL2JnLzkzLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy85NC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvOTUuanBnIiwid2VicGFjazovLy8uL2JnLzk2LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy85Ny5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvOTguanBnIiwid2VicGFjazovLy8uL2JnLzk5LmpwZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvYmVmb3JlLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvYmVmb3JlX2dyZXkucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9iZy5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL25leHQucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9uZXh0X2dyZXkucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9wYXVzZS5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3BhdXNlX2dyZXkucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9wbGF5LnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvcGxheV9ncmV5LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXVkaW9zLmpzIiwid2VicGFjazovLy8uL3NyYy9iZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/NzUyOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsYUFBYSxtQkFBTyxDQUFDLGlHQUE4QztBQUNuRSwyQkFBMkIsbUJBQU8sQ0FBQyw2RkFBNEM7QUFDL0U7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLGVBQWUsbUJBQW1CLDZCQUE2Qix5QkFBeUIsZ0JBQWdCLEtBQUssY0FBYyxtQkFBbUIsdUNBQXVDLG1CQUFPLENBQUMseUNBQWtCLFFBQVEsNkJBQTZCLG1DQUFtQyx5QkFBeUIsS0FBSyxhQUFhLDBCQUEwQixLQUFLLHNCQUFzQixtQkFBbUIsb0JBQW9CLHlCQUF5QixLQUFLLGNBQWMsb0JBQW9CLHlCQUF5Qix5QkFBeUIsS0FBSyxPQUFPLHFCQUFxQixLQUFLLGFBQWEsK0JBQStCLEtBQUssZUFBZSwyQkFBMkIsMkJBQTJCLG9CQUFvQiwrQkFBK0IsNEJBQTRCLDhCQUE4QixLQUFLLGVBQWUsb0JBQW9CLEtBQUssVUFBVSxpQ0FBaUMsbUJBQU8sQ0FBQyxpREFBc0IsZ0NBQWdDLEtBQUssZUFBZSxpQ0FBaUMsbUJBQU8sQ0FBQywyREFBMkIsZ0NBQWdDLEtBQUssV0FBVyxpQ0FBaUMsbUJBQU8sQ0FBQyw2Q0FBb0IsZ0NBQWdDLEtBQUssZ0JBQWdCLGlDQUFpQyxtQkFBTyxDQUFDLHVEQUF5QixnQ0FBZ0MsS0FBSyxvQkFBb0Isa0JBQWtCLG1CQUFtQixpQ0FBaUMsMkJBQTJCLDJCQUEyQixvQkFBb0IsK0JBQStCLDRCQUE0Qiw4QkFBOEIsZ0NBQWdDLDZCQUE2QiwwQkFBMEIsc0JBQXNCLHFCQUFxQixLQUFLLFdBQVcsa0JBQWtCLG1CQUFtQixpQ0FBaUMsbUJBQU8sQ0FBQyw2Q0FBb0IsZ0NBQWdDLGlDQUFpQyxvQkFBb0IsS0FBSyxnQkFBZ0IsaUNBQWlDLG1CQUFPLENBQUMsdURBQXlCLGdDQUFnQyxpQ0FBaUMsS0FBSyxZQUFZLGlDQUFpQyxtQkFBTyxDQUFDLCtDQUFxQixnQ0FBZ0MsS0FBSyxpQkFBaUIsaUNBQWlDLG1CQUFPLENBQUMseURBQTBCLGdDQUFnQyxpQ0FBaUMsS0FBSyxvQkFBb0Isb0JBQW9CLHdCQUF3QixrQkFBa0IsbUJBQW1CLEtBQUssZUFBZSw2QkFBNkIsb0JBQW9CLGtCQUFrQix1QkFBdUIsS0FBSyx1QkFBdUIsNkJBQTZCLG9CQUFvQixnQkFBZ0IseUJBQXlCLEtBQUssNkJBQTZCLDZCQUE2QixLQUFLLDZCQUE2Qix5QkFBeUIsbUJBQW1CLGlCQUFpQixrQkFBa0IsbUJBQW1CLDZCQUE2QiwwQkFBMEIsS0FBSyxtQ0FBbUMsNkJBQTZCLEtBQUssV0FBVyxzQkFBc0IsMEJBQTBCLGtCQUFrQixzQkFBc0IsS0FBSyxpQkFBaUIsa0JBQWtCLEtBQUssaUJBQWlCLGtCQUFrQixLQUFLOztBQUV4bEc7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0JBQWdCO0FBQ25ELElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGNBQWM7O0FBRWxFO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyx1REFBUTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0R0E7QUFDQSxLQUFLLG1CQUFPLENBQUMsK0JBQWE7QUFDMUIsS0FBSyxtQkFBTyxDQUFDLCtCQUFhO0FBQzFCLEtBQUssbUJBQU8sQ0FBQywrQkFBYTtBQUMxQixLQUFLLG1CQUFPLENBQUMsK0JBQWE7QUFDMUIsS0FBSyxtQkFBTyxDQUFDLCtCQUFhO0FBQzFCLEtBQUssbUJBQU8sQ0FBQywrQkFBYTtBQUMxQixLQUFLLG1CQUFPLENBQUMsK0JBQWE7QUFDMUIsS0FBSyxtQkFBTyxDQUFDLCtCQUFhO0FBQzFCLEtBQUssbUJBQU8sQ0FBQywrQkFBYTtBQUMxQixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixPQUFPLG1CQUFPLENBQUMsbUNBQWU7QUFDOUI7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RHQTtBQUFBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QixpQ0FBaUMsSUFBSSxnQkFBZ0IsRUFBRTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xELG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvQjtBQUNNO0FBQ0g7QUFDTTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0EsV0FBVyw2Q0FBSztBQUNoQixTQUFTLDJDQUFHO0FBQ1oscUVBQXFFLEdBQUc7O0FBRXhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUIsbUJBQW1CLGVBQWU7QUFDbEMsc0JBQXNCLGNBQWM7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4Q0FBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXOzs7Ozs7Ozs7Ozs7QUN2TkEsY0FBYyxtQkFBTyxDQUFDLG1HQUFtRDs7QUFFekUsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLG1HQUFnRDs7QUFFckU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODFkY2U1YmI2MjM3ZDVlMDRmYzkzZjljNDJkZjUzZGUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjllMWMxZTQxYjM1NjNkZDBiZDEwZjZkYTM5ZmNlNGUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzZjMTQ3MzM3NmEwZGYxZGZmMjgwYjE5MzgwMzFlNGEuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDg0YzhiNjRlZTk0MjczMTE3MzQ0N2FlNDdiN2RkZjMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTJkOWY1NWNjODUzMjAwZTRkNGJlOGY2YmFlZWViZDEuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjg1NDM4NWY2ZmQ1OTZlN2NmZjc1NjdmOGVlMTA1ODUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDhhNjg4ZGE1MDQ0MjI1MmZiYWFmMzM4ZjVmMjU5M2IuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzg2MTlhMzZhMTRkYmIzYmVkZDkyYWNjZmMyOTA1NzIuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZGFhNGMzNDFjYTk3YTZlN2Q4M2NjMzcwMGYzNjBiMDUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzQ5Y2QxNDE4NGUyODViYWM5YTkzYTA2M2FiNjE3ZGYuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDVlMDgxODcwYzBiZDlkNjQzNmE5ZTRhNTI3NDQ2ZDEuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTQ3OGY5MzE1YWRlZDdiODhhNTY3MjkzMmFmZTI1NzQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDdlOTVkZWM3ODhhYjdjMjVjMjFmNjI2MWI3NThlMzcuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzIyYjQxMjc4M2QzMDFkYjViZGY3MjQ2YzJhZmU5YjMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiN2FmZWFiOTEzZWI2YTQ2YWM0OGRmZjZiYTMxNWEyYzAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjQ0NDVkMGViZDRjODZkNzhmNjFjNjllZTAwOGFjMDcuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjM4NTNhYmVkNWQ2YTQ1ZGEyODNiZDQ1NTVjNjNjMTkuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGVlOTZlZWViY2M2ZTIyMDhmZTc2N2YxOGFkZjU4YjYuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODRkMjQwZWUwZGJlNTFkNDQ0YjU3YzlhYzBiNzQ3YmYuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTUzYTFmZTQ3OGQ5NTQ1Y2UzYzZlOWIzZTU5NzUyYzEuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWFlZmYxOTBiNjc4OTExNDk0NjVjMzllMTAwZDg4OWMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMWE5ZDUyZGNlYmU2MDRiZDBiNWFhMDhmMDZjMzIzNzYuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOGVjMzVhZjUyMjllZTkzMmJjNDIzZmVkYWNhOGIzNzUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzc3NjQ2ZjVkODhkZGUwZjZkZThmNTk2YTI1NGM4ZWIuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2ZlMTc0NmY4ZjhlZmQyNjBlOTAwZjE2MGY4ZmE0ODUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzk3MzhhYTNkYmZiYjc3OTJmOTUyZWI1YTQ1MTMyOGEuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOGYzMTQ0YzUyNjg2ZmYwMzMxOGU1Mjg5Nzk0MGUwZTMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDRlMTM1NDBhMWEwMTE1YzYxNWUwN2Y3OTAzZjQxZDAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDU2MDBlM2Q0OWU0MjcwN2UwNGYxOGM5NzFkYmZhY2YuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTI4ZTUwYTZkOThmMDQ3YjUyMDk2MTJmMGI4NDNhZDcuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTI2ODRmMWViOTBmMmUyNjM3MDk2MjQ2NTBhNTY5ZWIuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzQ3MThkODRiNGFiMTRmZDlmZWY0MDg4YTY4MjJmM2YuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDU1NDZkMDNhYWNiNzRmOTFlZGY2MzBkNjRjZDlmMzkuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzUwMTJlZTc4YjAyN2Q2MGQ1MmRkNWY2NWFjYjQwMjQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjYzMWM4MWEzZWVkY2MxMGExNDExYzBiNDA2MWU1MTQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWFhMGNkMzMxNDg1ZWVjMDI1OWM1MzdjMThmNTg4NzAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjRhMzc0ZTUxM2I0YWJjNDk3ODcwMjMwZTU3NTg3ZDQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzQzNGY2NTMyNjFiZGVlMWJjMjM2MDcxMzgwOTg0ZDkuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTg4N2Y4ODI3MWJmNWFhM2FjNDA3OWIzYzdmY2RmM2YuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYWVmMTY0YWI3MDdmZDRjNmYzNmIzODQxN2Q0ZTZjZjQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjU0ZmFjN2I5ZWUyMWViNmQ3OGY2MjIzODUzOTZiNzAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjJkMTY0MzBlODE3MTFhMjEwYjc2NmM5MDAzNzI2YjYuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWZmOGRmNDgyYTY2YzNhZTg0OTQ5NGQxMmMzMzA2OWUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzg0YzEzNmIwZjE5MmRjMDU2YmYwZTA0NGQ5Yzk0ZTMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTkwMTdjZTQ1NDE1YzAzNDY3ZGMxZTYzYzRmMmIyOWUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODQyMDQ0YTU2MmEwODViMjRiN2YwNGIyYjExNDgzNzMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2NlMDk2NzFiZTBkNTk3OTI3NmNmZTYzYmZiM2E0YTMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMGI1ZjM4OWYwZTM3YTU0MjAwNzdiMWNmOTQ4NjkzYmQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDJiZWY5MjE2MjFlYzkwMWMzYmQ1NTE2ZmFmNDE5NGYuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTA4OTBhNDUyZTkxNTQ3NzdlMTg2Y2I0ZmJkOTI5YjYuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODNiZTJhNThlMDcxMDVjZGJjYzQzMzQxZTBhY2MxZWYuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZGIwNGYxNDUzYjExNzc4YzdkZTk5N2Q0MDMyYjEwOTMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTYwZDk1NWY0MjU0OTZmZjgzNmM0YjkyNWY4ZjZmNzcuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYmY3MTExNmYyMGNkNmIxZTZjYzEzNGUzYmE3MWUzNWEuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTU2NTFlYjJlMzRjMjQ0ODVkOTBlMDQxMjI0ZTYxNzMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzIzMDFkYzhjYWE4NGE3MmFiODhlM2JkZGQ2MjU2YjEuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzAxOGJiYzI3OGU5ZDkyNzYyNDFjYWRiYmVkZDgzMGQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjc3YTBiMjZkNGIxNDI2ZDFkMDBkMGNjMDAxNWVlOWQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTEwOThjM2MyYjBhMGM0YjhiYjk4YThkN2YyN2VkZWYuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjY3MjNiMTIwOWFjYjE1MjczMmMzZmQyNzcxNjJlOGQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDdiYjBlNzYzYzdlZGJhMWYwZDBlOWMxMTQ1YzFmNGIuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmZmMjI3YTZkNzUxMjBhZTAzYThmOTBjNGJkNjhiNDcuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDM0MTAyYjExY2M1YTY3YTNiNjE4YzllMTFjZTkyY2UuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTNjZWY1NzZiMzg4YWFiYTczNTEwYzRhOTY3ZjMyODAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMmY3NDIyZGJlM2FkYzhiMTkyNWRmYTY3NGEzNWI2NzkuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzNkMmY4NjEzYzljNjM4ZmI3NGQwMmY0NTU1ZWY4YjEuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWZmZWE4YjFlN2E4ZDlhMzEzMDE4ZmYyMDVmYmZiZmMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZGU2YjQ2OTQzZTI3ZDczZjg4ODA5Zjg0ZTVmYzc5ODYuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTUwMmI1OTRjZjc5ZmE3YzZmZTZiZTJlYjM1ZGJiYzEuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDhmZjVhYjM1ZmJmMzkxOTYxZTdlMzgzMTk2MjFiNDQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTJlY2RkM2U1OWY2ZTg1ZGIxM2U0ZmE1Mjk2ODhhODAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDFiYTYxOGM5NmU4YmJjZjcwMWQ0MzZhZjRkYzEyNzcuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGM0NWNhMzBkNWY2ODZiYzYxOGU5MWU2Mjg0M2QzNTMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZGNkOGU0ZjE2MjAxYTk4YjBiYjAxZGI3ZGViYTc0MmEuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGU5Mzg1NGM5MTE1YWYyNzNkOWI0N2NmMjY2Njg5Y2YuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODkyN2IzMzY4M2VhMmM2ZjU5MDdkYWUzZWJiYWI4ODQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGNiNGE4YTQ3MWU2ZGQ3ZGU0YjdkNjE2NTZmN2M1ZmMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTQ2OTFiMDAzYzVlMDdkNTRiYTE3OTZlMDE0MmY2Y2QuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjRlYTJiMzVmYWU1ZWM3N2YyMWRmODY2NzJiZmUwNWIuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjA0NGQwYjI3M2ExNjA3ZmRhOWJmOTc4MDY2YTBiNjUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTAzMjg0OGE0ZWUyZjBhY2YwMWQxY2I0MmYzODI0YzAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzMwYmY5NDdkNDE3ZTE0MzM2YmVhZjRjZWQyYTVhYWMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmMyZTBkNzI3OTIwMTQ1NzczOGRiNTdlMzNlNmI1YzMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODc1YTY5MzhhZGIwNTVlMDUyOTdjMjUwZTMyOWFmMzQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWNmNWY5MDE4ZDhiNTZhZDIzMzQ4N2QxZTMyMWUyMjUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWM1YjVhNmRhYWNkMjIxOTIwNWVmMGI5MDgxMjQ2OTMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2Y0MjZkOTQ2MzRkNTk1N2U5ZDU2OTQ1YjA1MGFkZGMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjBmMDZhYjFiOTJhNjdmMzcwMGYyMDRjZGExOTYyZTQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzMyNTQ5YTc4NWRmYjZiNTExMmFjMDE4OGY0MTQ0NjQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTA1NDlhMzAzNjZmNTcwZmYwYjVmMzg3MjYyNDlhNWIuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzdlODllMGM4YzMyMzRkZTg3ZDk4MTVmMjgyZWU5ZDguanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjljM2JkNTFjMDM4MTA3ZjRiMDg0ZDg4NzY1MThiZTEuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOGM2ODQzZTYzZjExMzFiNjAxY2Q2MmIyOGE3MzU1NjYuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2MxOTViNTlkMzA0ZjQyNzU0YjdkMDFjNTRkY2UyZjAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMWQwN2YxNmI3MTJiZTQxNDQ5MTg5YTA5MjlhMGUzNWMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODEyMDE0NjNjMjAzZGJjZjgwOTM5ZmUxNzM0NTIxNTkuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODEyMDE0NjNjMjAzZGJjZjgwOTM5ZmUxNzM0NTIxNTkuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmJmNjBhYWIwZGFjMjZjMDc4Yzk0MDc5MzhkZWMyMjEuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjU4MzIxOTE3MDdmZDg2MzY1ZDU2ZTFiMmNkMzE5OGYuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzZjMTQ3MzM3NmEwZGYxZGZmMjgwYjE5MzgwMzFlNGEuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDEyZDZiOTEzOGQ2MGQ4NDk2ZTg1Njk2MGI0ZWM1NTQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWY3M2I3OGY2ZmE4YTIxNjZiNDcwMjViMzNmMzM0ZDUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzc0NWYyOWJjMzkxODk3MzI1ZTllMTVjYjNiNzRlYWQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmYwYTFmMWEzMDllODJhMWY1MmE1MDhmYjU3ODJlYTIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTQ2ZTVkZjg1YzRlNmJiNDRkN2JjYWEwYzZhZDFkMzYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODNmZTVkZDhmNTRmMmZjMmU1YWIwMjQ0YTlmYzc1MzkucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzNiZWE5NmZjMjg2YmIwNWQ5MzBiNDZlMGZmMGIxNzQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiN2IwMzY1YTQ4MDg4ODUxYmZlMTk5ZDg5MjkwZWQxZmIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYThjOWRiYTM5NWY2MmEzOWI0YzU5MGY0NWIzOTcwNDMucG5nXCI7IiwidmFyIGVzY2FwZSA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qc1wiKTtcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAvKiBsZXR0ZXItc3BhY2luZzogM3B4OyAqL1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4ud3JhcHBlciB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ltYWdlcy9iZy5qcGdcIikpICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5oZWFkZXIge1xcclxcbiAgcGFkZGluZzogNjBweCAwIDAgMDtcXHJcXG59XFxyXFxuLmNvbnRlbnQtd3JhcHBlciB7XFxyXFxuICBtYXJnaW46IDM1cHg7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcclxcbn1cXHJcXG4uY29udGVudCB7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xcclxcbn1cXHJcXG5wIHtcXHJcXG4gIG1hcmdpbjogNnB4IDAgO1xcclxcbn1cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIG1hcmdpbjogMzBweCAzNXB4IDAgMzVweDtcXHJcXG59XFxyXFxuLmNvbnRyb2xzIHtcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcclxcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcclxcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5mbGV4LWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4ucHJlIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL2JlZm9yZS5wbmdcIikpICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcclxcbn1cXHJcXG4ucHJlLWdyZXkge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvYmVmb3JlX2dyZXkucG5nXCIpKSArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXHJcXG59XFxyXFxuLm5leHQge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvbmV4dC5wbmdcIikpICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcclxcbn1cXHJcXG4ubmV4dC1ncmV5IHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL25leHRfZ3JleS5wbmdcIikpICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcclxcbn1cXHJcXG4uY29udHJvbHMtaWNvbiB7XFxyXFxuICB3aWR0aDogMThweDtcXHJcXG4gIGhlaWdodDogMThweDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xcclxcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxyXFxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxyXFxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbjogYXV0byAwO1xcclxcbn1cXHJcXG4ucGxheSB7XFxyXFxuICB3aWR0aDogMjRweDtcXHJcXG4gIGhlaWdodDogMjRweDtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL3BsYXkucG5nXCIpKSArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xcclxcbiAgbWFyZ2luOiAwIDI1JTtcXHJcXG59XFxyXFxuLnBsYXktZ3JleSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ltYWdlcy9wbGF5X2dyZXkucG5nXCIpKSArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xcclxcbn1cXHJcXG4ucGF1c2Uge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvcGF1c2UucG5nXCIpKSArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXHJcXG59XFxyXFxuLnBhdXNlLWdyZXkge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvcGF1c2VfZ3JleS5wbmdcIikpICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XFxyXFxufVxcclxcbi50aW1lLWNvbnRyb2xzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG4udGltZWxpbmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gIGhlaWdodDogMS41cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogN3B4IDE0cHg7XFxyXFxufVxcclxcbi50aW1lbGluZV9fYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBoZWlnaHQ6IDEuNXB4O1xcclxcbiAgd2lkdGg6IDAlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4uZ3JleSAudGltZWxpbmVfX2FjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xcclxcbn1cXHJcXG4udGltZWxpbmVfX2FjdGl2ZV9fYmFsbCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogLTEwcHg7XFxyXFxuICB0b3A6IC0xMHB4O1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuLmdyZXkgLnRpbWVsaW5lX19hY3RpdmVfX2JhbGwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcXHJcXG59XFxyXFxuLnRpbWUge1xcclxcbiAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWluLXdpZHRoOiAycmVtO1xcclxcbn1cXHJcXG4uZ3JleSAudGltZSB7XFxyXFxuICBjb2xvcjogIzY2NjtcXHJcXG59XFxyXFxuLmJnbS1zb3VyY2Uge1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXNjYXBlKHVybCkge1xuICAgIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdXJsXG4gICAgfVxuICAgIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICAgIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgICAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICAgIH1cbiAgICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gICAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkpIHtcbiAgICAgICAgcmV0dXJuICdcIicgKyB1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSArICdcIidcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsXG59XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJ2YXIgYXVkaW9zID0ge1xuICAxOiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzEubXAzXCIsXG4gIDI6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vMi5tcDNcIixcbiAgMzogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS8zLm1wM1wiLFxuICA0OiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzQubXAzXCIsXG4gIDU6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vNS5tcDNcIixcbiAgNjogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS82Lm1wM1wiLFxuICA3OiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzcubXAzXCIsXG4gIDg6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vOC5tcDNcIixcbiAgOTogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS85Lm1wM1wiLFxuICAxMDogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS8xMC5tcDNcIixcbiAgMTE6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vMTEubXAzXCIsXG4gIDEyOiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzEyLm1wM1wiLFxuICAxMzogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS8xMy5tcDNcIixcbiAgMTQ6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vMTQubXAzXCIsXG4gIDE1OiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzE1Lm1wM1wiLFxuICAxNjogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS8xNi5tcDNcIixcbiAgMTc6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vMTcubXAzXCIsXG4gIDE4OiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzE4Lm1wM1wiLFxuICAxOTogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS8xOS5tcDNcIixcbiAgMjA6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vMjAubXAzXCIsXG4gIDIxOiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzIxLm1wM1wiLFxuICAyMjogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS8yMi5tcDNcIixcbiAgMjM6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vMjMubXAzXCIsXG4gIDI0OiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzI0Lm1wM1wiLFxuICAyNTogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS8yNS5tcDNcIixcbiAgMjY6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vMjYubXAzXCIsXG4gIDI3OiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzI3Lm1wM1wiLFxuICAyODogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS8yOC5tcDNcIixcbiAgMjk6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vMjkubXAzXCIsXG4gIDMwOiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzMwLm1wM1wiLFxuICAzMTogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS8zMS5tcDNcIixcbiAgMzI6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vMzIubXAzXCIsXG4gIDMzOiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzMzLm1wM1wiLFxuICAzNDogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS8zNC5tcDNcIixcbiAgMzU6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vMzUubXAzXCIsXG4gIDM2OiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzM2Lm1wM1wiLFxuICAzNzogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS8zNy5tcDNcIixcbiAgMzg6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vMzgubXAzXCIsXG4gIDM5OiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzM5Lm1wM1wiLFxuICA0MDogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS80MC5tcDNcIixcbiAgNDE6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vNDEubXAzXCIsXG4gIDQyOiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzQyLm1wM1wiLFxuICA0MzogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS80My5tcDNcIixcbiAgNDQ6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vNDQubXAzXCIsXG4gIDQ1OiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzQ1Lm1wM1wiLFxuICA0NjogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS80Ni5tcDNcIixcbiAgNDc6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vNDcubXAzXCIsXG4gIDQ4OiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzQ4Lm1wM1wiLFxuICA0OTogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS80OS5tcDNcIixcbiAgNTA6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vNTAubXAzXCIsXG4gIDUxOiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzUxLm1wM1wiLFxuICA1MjogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS81Mi5tcDNcIixcbiAgNTM6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vNTMubXAzXCIsXG4gIDU0OiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzU0Lm1wM1wiLFxuICA1NTogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS81NS5tcDNcIixcbiAgNTY6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vNTYubXAzXCIsXG4gIDU3OiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzU3Lm1wM1wiLFxuICA1ODogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS81OC5tcDNcIixcbiAgNTk6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vNTkubXAzXCIsXG4gIDYwOiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzYwLm1wM1wiLFxuICA2MTogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS82MS5tcDNcIixcbiAgNjI6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vNjIubXAzXCIsXG4gIDYzOiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzYzLm1wM1wiLFxuICA2NDogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS82NC5tcDNcIixcbiAgNjU6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vNjUubXAzXCIsXG4gIDY2OiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzY2Lm1wM1wiLFxuICA2NzogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS82Ny5tcDNcIixcbiAgNjg6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vNjgubXAzXCIsXG4gIDY5OiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzY5Lm1wM1wiLFxuICA3MDogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS83MC5tcDNcIixcbiAgNzE6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vNzEubXAzXCIsXG4gIDcyOiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzcyLm1wM1wiLFxuICA3MzogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS83My5tcDNcIixcbiAgNzQ6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vNzQubXAzXCIsXG4gIDc1OiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzc1Lm1wM1wiLFxuICA3NjogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS83Ni5tcDNcIixcbiAgNzc6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vNzcubXAzXCIsXG4gIDc4OiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzc4Lm1wM1wiLFxuICA3OTogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS83OS5tcDNcIixcbiAgODA6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vODAubXAzXCIsXG4gIDgxOiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzgxLm1wM1wiLFxuICA4MjogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS84Mi5tcDNcIixcbiAgODM6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vODMubXAzXCIsXG4gIDg0OiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzg0Lm1wM1wiLFxuICA4NTogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS84NS5tcDNcIixcbiAgODY6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vODYubXAzXCIsXG4gIDg3OiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzg3Lm1wM1wiLFxuICA4ODogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS84OC5tcDNcIixcbiAgODk6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vODkubXAzXCIsXG4gIDkwOiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzkwLm1wM1wiLFxuICA5MTogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS85MS5tcDNcIixcbiAgOTI6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vOTIubXAzXCIsXG4gIDkzOiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzkzLm1wM1wiLFxuICA5NDogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS85NC5tcDNcIixcbiAgOTU6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vOTUubXAzXCIsXG4gIDk2OiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzk2Lm1wM1wiLFxuICA5NzogXCJodHRwOi8vcHc1bHdlN3p1LmJrdC5jbG91ZGRuLmNvbS85Ny5tcDNcIixcbiAgOTg6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vOTgubXAzXCIsXG4gIDk5OiBcImh0dHA6Ly9wdzVsd2U3enUuYmt0LmNsb3VkZG4uY29tLzk5Lm1wM1wiLFxuICAxMDA6IFwiaHR0cDovL3B3NWx3ZTd6dS5ia3QuY2xvdWRkbi5jb20vMTAwLm1wM1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBhdWRpb3M7XG4iLCJ2YXIgYXVkaW9zID0ge1xyXG4gIDE6IHJlcXVpcmUoJy4uL2JnLzEuanBnJyksXHJcbiAgMjogcmVxdWlyZSgnLi4vYmcvMi5qcGcnKSxcclxuICAzOiByZXF1aXJlKCcuLi9iZy8zLmpwZycpLFxyXG4gIDQ6IHJlcXVpcmUoJy4uL2JnLzQuanBnJyksXHJcbiAgNTogcmVxdWlyZSgnLi4vYmcvNS5qcGcnKSxcclxuICA2OiByZXF1aXJlKCcuLi9iZy82LmpwZycpLFxyXG4gIDc6IHJlcXVpcmUoJy4uL2JnLzcuanBnJyksXHJcbiAgODogcmVxdWlyZSgnLi4vYmcvOC5qcGcnKSxcclxuICA5OiByZXF1aXJlKCcuLi9iZy85LmpwZycpLFxyXG4gIDEwOiByZXF1aXJlKCcuLi9iZy8xMC5qcGcnKSxcclxuICAxMTogcmVxdWlyZSgnLi4vYmcvMTEuanBnJyksXHJcbiAgMTI6IHJlcXVpcmUoJy4uL2JnLzEyLmpwZycpLFxyXG4gIDEzOiByZXF1aXJlKCcuLi9iZy8xMy5qcGcnKSxcclxuICAxNDogcmVxdWlyZSgnLi4vYmcvMTQuanBnJyksXHJcbiAgMTU6IHJlcXVpcmUoJy4uL2JnLzE1LmpwZycpLFxyXG4gIDE2OiByZXF1aXJlKCcuLi9iZy8xNi5qcGcnKSxcclxuICAxNzogcmVxdWlyZSgnLi4vYmcvMTcuanBnJyksXHJcbiAgMTg6IHJlcXVpcmUoJy4uL2JnLzE4LmpwZycpLFxyXG4gIDE5OiByZXF1aXJlKCcuLi9iZy8xOS5qcGcnKSxcclxuICAyMDogcmVxdWlyZSgnLi4vYmcvMjAuanBnJyksXHJcbiAgMjE6IHJlcXVpcmUoJy4uL2JnLzIxLmpwZycpLFxyXG4gIDIyOiByZXF1aXJlKCcuLi9iZy8yMi5qcGcnKSxcclxuICAyMzogcmVxdWlyZSgnLi4vYmcvMjMuanBnJyksXHJcbiAgMjQ6IHJlcXVpcmUoJy4uL2JnLzI0LmpwZycpLFxyXG4gIDI1OiByZXF1aXJlKCcuLi9iZy8yNS5qcGcnKSxcclxuICAyNjogcmVxdWlyZSgnLi4vYmcvMjYuanBnJyksXHJcbiAgMjc6IHJlcXVpcmUoJy4uL2JnLzI3LmpwZycpLFxyXG4gIDI4OiByZXF1aXJlKCcuLi9iZy8yOC5qcGcnKSxcclxuICAyOTogcmVxdWlyZSgnLi4vYmcvMjkuanBnJyksXHJcbiAgMzA6IHJlcXVpcmUoJy4uL2JnLzMwLmpwZycpLFxyXG4gIDMxOiByZXF1aXJlKCcuLi9iZy8zMS5qcGcnKSxcclxuICAzMjogcmVxdWlyZSgnLi4vYmcvMzIuanBnJyksXHJcbiAgMzM6IHJlcXVpcmUoJy4uL2JnLzMzLmpwZycpLFxyXG4gIDM0OiByZXF1aXJlKCcuLi9iZy8zNC5qcGcnKSxcclxuICAzNTogcmVxdWlyZSgnLi4vYmcvMzUuanBnJyksXHJcbiAgMzY6IHJlcXVpcmUoJy4uL2JnLzM2LmpwZycpLFxyXG4gIDM3OiByZXF1aXJlKCcuLi9iZy8zNy5qcGcnKSxcclxuICAzODogcmVxdWlyZSgnLi4vYmcvMzguanBnJyksXHJcbiAgMzk6IHJlcXVpcmUoJy4uL2JnLzM5LmpwZycpLFxyXG4gIDQwOiByZXF1aXJlKCcuLi9iZy80MC5qcGcnKSxcclxuICA0MTogcmVxdWlyZSgnLi4vYmcvNDEuanBnJyksXHJcbiAgNDI6IHJlcXVpcmUoJy4uL2JnLzQyLmpwZycpLFxyXG4gIDQzOiByZXF1aXJlKCcuLi9iZy80My5qcGcnKSxcclxuICA0NDogcmVxdWlyZSgnLi4vYmcvNDQuanBnJyksXHJcbiAgNDU6IHJlcXVpcmUoJy4uL2JnLzQ1LmpwZycpLFxyXG4gIDQ2OiByZXF1aXJlKCcuLi9iZy80Ni5qcGcnKSxcclxuICA0NzogcmVxdWlyZSgnLi4vYmcvNDcuanBnJyksXHJcbiAgNDg6IHJlcXVpcmUoJy4uL2JnLzQ4LmpwZycpLFxyXG4gIDQ5OiByZXF1aXJlKCcuLi9iZy80OS5qcGcnKSxcclxuICA1MDogcmVxdWlyZSgnLi4vYmcvNTAuanBnJyksXHJcbiAgNTE6IHJlcXVpcmUoJy4uL2JnLzUxLmpwZycpLFxyXG4gIDUyOiByZXF1aXJlKCcuLi9iZy81Mi5qcGcnKSxcclxuICA1MzogcmVxdWlyZSgnLi4vYmcvNTMuanBnJyksXHJcbiAgNTQ6IHJlcXVpcmUoJy4uL2JnLzU0LmpwZycpLFxyXG4gIDU1OiByZXF1aXJlKCcuLi9iZy81NS5qcGcnKSxcclxuICA1NjogcmVxdWlyZSgnLi4vYmcvNTYuanBnJyksXHJcbiAgNTc6IHJlcXVpcmUoJy4uL2JnLzU3LmpwZycpLFxyXG4gIDU4OiByZXF1aXJlKCcuLi9iZy81OC5qcGcnKSxcclxuICA1OTogcmVxdWlyZSgnLi4vYmcvNTkuanBnJyksXHJcbiAgNjA6IHJlcXVpcmUoJy4uL2JnLzYwLmpwZycpLFxyXG4gIDYxOiByZXF1aXJlKCcuLi9iZy82MS5qcGcnKSxcclxuICA2MjogcmVxdWlyZSgnLi4vYmcvNjIuanBnJyksXHJcbiAgNjM6IHJlcXVpcmUoJy4uL2JnLzYzLmpwZycpLFxyXG4gIDY0OiByZXF1aXJlKCcuLi9iZy82NC5qcGcnKSxcclxuICA2NTogcmVxdWlyZSgnLi4vYmcvNjUuanBnJyksXHJcbiAgNjY6IHJlcXVpcmUoJy4uL2JnLzY2LmpwZycpLFxyXG4gIDY3OiByZXF1aXJlKCcuLi9iZy82Ny5qcGcnKSxcclxuICA2ODogcmVxdWlyZSgnLi4vYmcvNjguanBnJyksXHJcbiAgNjk6IHJlcXVpcmUoJy4uL2JnLzY5LmpwZycpLFxyXG4gIDcwOiByZXF1aXJlKCcuLi9iZy83MC5qcGcnKSxcclxuICA3MTogcmVxdWlyZSgnLi4vYmcvNzEuanBnJyksXHJcbiAgNzI6IHJlcXVpcmUoJy4uL2JnLzcyLmpwZycpLFxyXG4gIDczOiByZXF1aXJlKCcuLi9iZy83My5qcGcnKSxcclxuICA3NDogcmVxdWlyZSgnLi4vYmcvNzQuanBnJyksXHJcbiAgNzU6IHJlcXVpcmUoJy4uL2JnLzc1LmpwZycpLFxyXG4gIDc2OiByZXF1aXJlKCcuLi9iZy83Ni5qcGcnKSxcclxuICA3NzogcmVxdWlyZSgnLi4vYmcvNzcuanBnJyksXHJcbiAgNzg6IHJlcXVpcmUoJy4uL2JnLzc4LmpwZycpLFxyXG4gIDc5OiByZXF1aXJlKCcuLi9iZy83OS5qcGcnKSxcclxuICA4MDogcmVxdWlyZSgnLi4vYmcvODAuanBnJyksXHJcbiAgODE6IHJlcXVpcmUoJy4uL2JnLzgxLmpwZycpLFxyXG4gIDgyOiByZXF1aXJlKCcuLi9iZy84Mi5qcGcnKSxcclxuICA4MzogcmVxdWlyZSgnLi4vYmcvODMuanBnJyksXHJcbiAgODQ6IHJlcXVpcmUoJy4uL2JnLzg0LmpwZycpLFxyXG4gIDg1OiByZXF1aXJlKCcuLi9iZy84NS5qcGcnKSxcclxuICA4NjogcmVxdWlyZSgnLi4vYmcvODYuanBnJyksXHJcbiAgODc6IHJlcXVpcmUoJy4uL2JnLzg3LmpwZycpLFxyXG4gIDg4OiByZXF1aXJlKCcuLi9iZy84OC5qcGcnKSxcclxuICA4OTogcmVxdWlyZSgnLi4vYmcvODkuanBnJyksXHJcbiAgOTA6IHJlcXVpcmUoJy4uL2JnLzkwLmpwZycpLFxyXG4gIDkxOiByZXF1aXJlKCcuLi9iZy85MS5qcGcnKSxcclxuICA5MjogcmVxdWlyZSgnLi4vYmcvOTIuanBnJyksXHJcbiAgOTM6IHJlcXVpcmUoJy4uL2JnLzkzLmpwZycpLFxyXG4gIDk0OiByZXF1aXJlKCcuLi9iZy85NC5qcGcnKSxcclxuICA5NTogcmVxdWlyZSgnLi4vYmcvOTUuanBnJyksXHJcbiAgOTY6IHJlcXVpcmUoJy4uL2JnLzk2LmpwZycpLFxyXG4gIDk3OiByZXF1aXJlKCcuLi9iZy85Ny5qcGcnKSxcclxuICA5ODogcmVxdWlyZSgnLi4vYmcvOTguanBnJyksXHJcbiAgOTk6IHJlcXVpcmUoJy4uL2JnLzk5LmpwZycpLFxyXG4gIDEwMDogcmVxdWlyZSgnLi4vYmcvMTAwLmpwZycpXHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBhdWRpb3NcclxuIiwiLy8gZnVuY3Rpb24gZm9ybWF0KGRhdGEpIHtcbi8vICAgdmFyIHJlcyA9IFtdXG4vLyAgIGZvciAodmFyIGkgPSAxOyBpIDwgMTAwOyBpKyspIHtcbi8vICAgICB2YXIgY0l0ZW0gPSBkYXRhLnNwbGl0KGAke2krMX3jgIFgKVswXS5zcGxpdChgJHtpfeOAgWApWzFdXG4vLyAgICAgdmFyIGxpc3QgPSBjSXRlbS5zcGxpdCgnXFxuJylcbi8vICAgICB2YXIgbWRhdGEgPSB7XG4vLyAgICAgICB0aXRsZTogJycsXG4vLyAgICAgICBhdXRob3I6ICcnLFxuLy8gICAgICAgY29udGVudDogW10sXG4vLyAgICAgICBiZ206ICcnLFxuLy8gICAgICAgYmdtU291cmNlOiAnJyxcbi8vICAgICAgIHJlcG9ydGVyOiAnJ1xuLy8gICAgIH1cbi8vICAgICBsaXN0LmZvckVhY2gobGluZSA9PiB7XG4vLyAgICAgICBpZiAobGluZSA9PT0gJycpIHtcbi8vICAgICAgICAgcmV0dXJuXG4vLyAgICAgICB9XG4vLyAgICAgICAvLyDmoIfpophcbi8vICAgICAgIGlmICghbWRhdGEudGl0bGUpIHtcbi8vICAgICAgICAgcmV0dXJuIG1kYXRhLnRpdGxlID0gbGluZVxuLy8gICAgICAgfVxuLy8gICAgICAgLy8g5L2c6ICFXG4vLyAgICAgICBpZiAoIW1kYXRhLmF1dGhvcikge1xuLy8gICAgICAgICByZXR1cm4gbWRhdGEuYXV0aG9yID0gbGluZVxuLy8gICAgICAgfVxuLy8gICAgICAgLy8g5YaF5a65ICsgYmdtXG4vLyAgICAgICBpZiAoIW1kYXRhLmJnbSkge1xuLy8gICAgICAgICBpZiAobGluZS5pbmRleE9mKCdCR03vvJonKSA+IC0xKSB7XG4vLyAgICAgICAgICAgcmV0dXJuIG1kYXRhLmJnbSA9IGxpbmUucmVwbGFjZSgnQkdN77yaJywgJycpXG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgcmV0dXJuIG1kYXRhLmNvbnRlbnQucHVzaChsaW5lKVxuLy8gICAgICAgICB9XG4vLyAgICAgICB9XG4vLyAgICAgICAvLyBiZ21zb3VyY2Vcbi8vICAgICAgIGlmICghbWRhdGEuYmdtU291cmNlKSB7XG4vLyAgICAgICAgIGlmIChsaW5lLmluZGV4T2YoJ0JHTeadpea6kO+8micpID4gLTEpIHtcbi8vICAgICAgICAgICByZXR1cm4gbWRhdGEuYmdtU291cmNlID0gbGluZS5yZXBsYWNlKCdCR03mnaXmupDvvJonLCAnJylcbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgICAgLy8gIOacl+ivtVxuLy8gICAgICAgaWYgKCFtZGF0YS5yZXBvcnRlcikge1xuLy8gICAgICAgICBpZiAobGluZS5pbmRleE9mKCfmnJfor7vogIXvvJonKSA+IC0xKSB7XG4vLyAgICAgICAgICAgcmV0dXJuIG1kYXRhLnJlcG9ydGVyID0gbGluZS5yZXBsYWNlKCfmnJfor7vogIXvvJonLCAnJylcbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgIH0pXG4vLyAgICAgcmVzLnB1c2gobWRhdGEpXG4vLyAgIH1cbi8vICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSlcbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgW3tcbiAgXCJ0aXRsZVwiOiBcIuOAiuS4gOaPoeegguOAi+iKgumAiVwiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muefs+W3neWVhOacqFwiLFxuICBcImNvbnRlbnRcIjogW1wi5oiR5omA5oqx55qE5LiA5YiH5oCd5oOzXCIsIFwi5Lu/5L2b6YO95piv5rKh5pyJ6ZKx6ICM5byV6LW355qE77ybXCIsIFwi56eL6aOO5ZC56LW35p2l5LqG44CCXCJdLFxuICBcImJnbVwiOiBcIktldmluIE1hY0xlb2QtR3ltbm9wZWRpZSBObyAyXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9pbmNvbXBldGVjaC5jb21cIixcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrplIjjgItcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrlvJfph4zlvrfph4zluIzCt+WogeW7icK35bC86YeHXCIsXG4gIFwiY29udGVudFwiOiBbXCLnlJ/plIjkuZ/mnInlv4XopoFcIiwgXCLlhYnmmK/plJDliKnkuZ/kuI3ooYxcIiwgXCLlkKbliJnkurrku6zluLjluLjkvJror7TkvaDvvJpcIiwgXCLku5blpKrlubTovbvvvIFcIl0sXG4gIFwiYmdtXCI6IFwiS2V2aW4gTWFjTGVvZC1HeW1ub3BlZGllIE5vIDFcIixcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2luY29tcGV0ZWNoLmNvbVwiLFxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiuWvguWvnuOAi1wiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muaItOacm+iIklwiLFxuICBcImNvbnRlbnRcIjogW1wi5Zut5Lit6YeO6I2J5riQ56a756a777yMXCIsIFwi5omY5qC55LqO5oiR5pen5pe255qE6ISa5Y2w77yMXCIsIFwi57uZ5LuW5Lus5oqr6Z2S5pil55qE5b2p6KGj77yMXCIsIFwi5pif5LiL55qE55uY5LuO5YW55raI6ZqQ44CCXCIsIFwi5pel5a2Q6L+H5Y6777yM5a+C5a+e5rC45a2Y77yMXCIsIFwi5a+E6a2C5LqO56a756a755qE6YeO6I2J77yMXCIsIFwi5YOP6YKj5Lqb5Y+v5oCc55qE54G16a2C77yMXCIsXG4gICAgICAgICAgXCLplb/lvpflpoLmiJHkuIDoiKzpq5jjgIJcIiwgXCLmiJHku4rkuI3lpI3liLDlm63kuK3ljrvvvIxcIiwgXCLlr4Llr57lt7LlpoLmiJHkuIDoiKzpq5jvvIxcIiwgXCLmiJHlpJzlnZDlkKzpo47vvIzmmLznnKDlkKzpm6jvvIxcIiwgXCLmgp/lvpfmnIjlpoLkvZXnvLrvvIzlpKnlpoLkvZXogIFcIl0sXG4gIFwiYmdtXCI6IFwiQWxleGFuZGVyIE5ha2FyYWRhLVdpbnRlclwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vZnJlZXBkLmNvbVwiLFxuICBcInJlcG9ydGVyXCI6IFwiTmrlrqvooq1cIlxufSwge1xuICBcInRpdGxlXCI6IFwi44CK54ix55yJ5bCP5pyt44CL6IqC6YCJXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5b6Q5b+X5pGpXCIsXG4gIFwiY29udGVudFwiOiBbXCLniLHnmoTlh7rlj5HngrnvvIxcIiwgXCLkuI3kuIDlrprmmK/ouqvkvZPvvIxcIiwgXCLkvYbniLHliLDkuobouqvkvZNcIiwgXCLlsLHliLDkuobpobbngrnjgIJcIiwgXCLljozmgbbnmoTlh7rlj5HngrnvvIxcIiwgXCLkuZ/kuI3kuIDlrprmmK/ouqvkvZPvvIxcIiwgXCLkvYbljozmgbbliLDkuobouqvkvZPvvIxcIiwgXCLkuZ/lsLHliLDkuobpobbngrnjgIJcIl0sXG4gIFwiYmdtXCI6IFwiQWxleGFuZGVyIE5ha2FyYWRhLVdpbnRlclwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vZnJlZXBkLmNvbVwiLFxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiuS6uumXtOWkseagvOOAi+S4pOWImVwiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muWkquWusOayu1wiLFxuICBcImNvbnRlbnRcIjogW1wi5pep5pmo77yM5oiR552B55y86YaS5p2l57+76Lqr5LiL5bqK77yMXCIsIFwi5Y+I5Y+Y5oiQ5LqG5Y6f5p2l6YKj5Liq5rWF6JaE5peg55+l44CBXCIsIFwi5ZaE5LqO5Lyq6KOF55qE5ruR56i96KeS6Imy44CCXCIsIFwi6IOG5bCP6ay86L+e5bm456aP6YO95Lya5oOn5oCV77yMXCIsIFwi56Kw5Yiw5qOJ6Iqx6YO95Lya5Y+X5Lyk77yMXCIsIFwi5pyJ5pe25Lmf5Lya6KKr5bm456aP5omA5Lyk44CCXCIsXG4gICAgICAgICAgXCLotoHnnYDov5jmsqHmnInlj5fkvKTvvIxcIiwgXCLmiJHmg7PlsLHov5nmoLfotbblv6vliIbpgZPmiazplbPjgIJcIiwgXCLmiJHlj4jmlL7lh7rkuobmg6/nlKjnmoTpgJfnrJHng5/luZXlvLnjgIJcIiwgXCLmiYDosJPkuJbkurrvvIzkuI3lsLHmmK/kvaDlkJfvvJ9cIl0sXG4gIFwiYmdtXCI6IFwiQWxleGFuZGVyIE5ha2FyYWRhLVdpbnRlclwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vZnJlZXBkLmNvbVwiLFxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiuiAjOW3sumbhsK35bCP5p2C5oSf44CL6IqC6YCJXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya6bKB6L+FXCIsXG4gIFwiY29udGVudFwiOiBbXSxcbiAgXCJiZ21cIjogXCJKb3NoIFdvb2R3YXJkLUF1dHVtblwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9qb3Nod29vZHdhcmQuY29tL1wiLFxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiuWvguWvnueahOaXtuWAmeOAi1wiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mumHkeWtkOe+jueOslwiLFxuICBcImNvbnRlbnRcIjogW1wi5oiR5a+C5a+e55qE5pe25YCZXCIsIFwi5Yir5Lq65LiN55+l6YGTXCIsIFwi5oiR5a+C5a+e55qE5pe25YCZXCIsIFwi5pyL5Y+L5Lus5Zyo56yRXCIsIFwi5oiR5a+C5a+e55qE5pe25YCZXCIsIFwi5aaI5aaI55qE6IS+5rCU5pyA5aW9XCIsIFwi5oiR5a+C5a+e55qE5pe25YCZXCIsIFwi5L2b56WW5Lmf5a+C5a+eXCJdLFxuICBcImJnbVwiOiBcIktldmluIE1hY0xlb2QtU3RhcnJ5XCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9pbmNvbXBldGVjaC5jb21cIixcbiAgXCJyZXBvcnRlclwiOiBcIuWQg+ilv+eTnOeahOWwj+S6jOmDjlwiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrlpoLmoqborrDjgIvoioLpgIlcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrnn7Plt53llYTmnKhcIixcbiAgXCJjb250ZW50XCI6IFtcIuavlOS6uuWFiOefpemBk+S6huaBi+eIseeahOeUnOWRs++8jFwiLCBcIuefpemBk+S6huaCsuWTgOeahOaIke+8jFwiLCBcIuS5n+avlOS6uuWFiOiAgeS6huOAglwiXSxcbiAgXCJiZ21cIjogXCLpm6jjga7lpJxcIixcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vYW1hY2hhbXVzaWMuY2hhZ2FzaS5jb20vXCIsXG4gIFwicmVwb3J0ZXJcIjogXCLlm5vlpJVcIlxufSwge1xuICBcInRpdGxlXCI6IFwi44CK5rKZ5LiO5rKr44CL6IqC6YCJXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya57qqwrflk4jCt+e6quS8r+S8plwiLFxuICBcImNvbnRlbnRcIjogW1wi5LuF5LuF5Zyo5pio5aSp77yMXCIsIFwi5oiR6K6k5Li65oiR6Ieq5bex5Y+q5piv5LiA5Liq56KO54mH77yMXCIsIFwi5peg6Z+15b6L5Zyw5Zyo55Sf5ZG955qE56m56IuN5Lit6aKk5oqW44CCXCIsIFwi546w5Zyo5oiR5pmT5b6X77yMXCIsIFwi5oiR5bCx5piv6YKj56m56IuN77yMXCIsIFwi5LiA5YiH55Sf5ZG96YO95piv5Zyo5oiR6YeM6Z2i5pyJ6Z+15b6L5Zyw6L2s5Yqo55qE56KO54mH44CCXCIsXG4gICAgICAgICAgXCLku5bku6zlnKjop4nphpLnmoTml7blgJnlr7nmiJHor7TvvJpcIiwgXCLigJzkvaDlkozkvaDmiYDlsYXkvY/nmoTkuJbnlYzvvIzlj6rkuI3ov4fmmK/ml6DovrnmtbfmtIvnmoTml6DovrnmspnlsrjkuIrnmoTkuIDnspLmspnlrZDjgILigJ1cIiwgXCLlnKjmoqbph4zmiJHlr7nku5bku6zor7TvvJpcIiwgXCLigJzmiJHlsLHmmK/pgqPml6DovrnnmoTmtbfmtIvvvIzlpKfljYPkuJbnlYzlj6rkuI3ov4fmmK/miJHnmoTmspnlsrjkuIrnmoTmspnnspLjgILigJ1cIl0sXG4gIFwiYmdtXCI6IFwi6Zuo44Gu5aScXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL2FtYWNoYW11c2ljLmNoYWdhc2kuY29tL1wiLFxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiuiwgee7iOWwhuWjsOmch+S6uumXtOOAi1wiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muW8l+mHjOW+t+mHjOW4jMK35aiB5buJwrflsLzph4dcIixcbiAgXCJjb250ZW50XCI6IFtcIuiwgee7iOWwhuWjsOmch+S6uumXtO+8jFwiLCBcIuW/hemVv+S5hea3seiHque8hOm7mO+8m1wiLCBcIuiwgee7iOWwhueCueeHg+mXqueUte+8jFwiLCBcIuW/hemVv+S5heWmguS6kea8guaziuOAglwiXSxcbiAgXCJiZ21cIjogXCJKb3NoIFdvb2R3YXJkLVNoaXBzLU5vVm94XCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cO+8mi8vam9zaHdvb2R3YXJkLmNvbS9cIixcbiAgXCJyZXBvcnRlclwiOiBcIuWbm+WklVwiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrniLHnmoTlk7LlrabjgItcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrpm6rojrFcIixcbiAgXCJjb250ZW50XCI6IFtcIuazieawtOaAu+aYr+WQkeays+awtOaxh+a1ge+8jFwiLCBcIuays+awtOWPiOaxh+WFpea1t+S4re+8jFwiLCBcIuWkqeWuh+eahOi9u+mjjuawuOi/nOiejeaciVwiLCBcIuS4gOenjeeUnOicnOeahOaEn+aDhe+8m1wiLCBcIuS4luS4iuWTquacieS7gOS5iOWtpOmbtumbtu+8n1wiLCBcIuS4h+eJqeeUseS6juiHqueEtuW+i1wiLCBcIumDveW/heiejeS8muS6juS4gOenjeeyvuelnuOAglwiLFxuICAgICAgICAgIFwi5L2V5Lul5L2g5oiR5Y2054us5byC77yfXCIsIFwi5L2g55yL6auY5bGx5Lmf5Zyo5ZC7552A56Kn56m677yMXCIsIFwi5rOi5rWq5Lmf55u45LqS5oul5oqx77ybXCIsIFwi6LCB5pu+6KeB6Iqx5YS/5b285q2k5LiN5a6577yaXCIsIFwi5aeK5aa55oqK5byf5YWE6L276JSR77yfXCIsIFwi6Ziz5YWJ57Sn57Sn5Zyw5oul5oqx552A5aSn5Zyw77yMXCIsIFwi5pyI5YWJ5Zyo5ZC7552A5rW35rOi77yaXCIsXG4gICAgICAgICAgXCLkvYbov5nkupvmjqXlkLvlj4jmnInkvZXnm4rvvIxcIiwgXCLopoHmmK/kvaDkuI3ogq/lkLvmiJHvvJ9cIl0sXG4gIFwiYmdtXCI6IFwiU3VuZGF5c0NoaWxkXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9hdWRpb25hdXRpeC5jb20vXCIsXG4gIFwicmVwb3J0ZXJcIjogXCJOauWuq+iirVwiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrmi5zkvKboh7TmiZjpqazmlq/Ct+aRqeWwlOOAi1wiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muS5lOayu8K35oiI55m7wrfmi5zkvKZcIixcbiAgXCJjb250ZW50XCI6IFtcIuWwj+iJh+WBnOWcqOWyuOi+ue+8jFwiLCBcIuiIn+alq+aziuWcqOa1t+mHjO+8m1wiLCBcIuWcqOaIkeS4tOi1sOS5i+WJje+8jOaJmOWnhsK35pGp5bCU77yMXCIsIFwi5oiR5bCG5Y+M5YCN55qE56Wd56aP5aWJ54yu57uZ5L2g77yBXCIsIFwi54ix5oiR55qE77yM5oiR5oql5Lul5Y+55oGv44CCXCIsIFwi5oGo5oiR55qE77yM5oiR5LuY5LmL5LiA56yR44CCXCIsIFwi5peg6K665aS05LiK55qE6IuN56m55aaC5L2V5LiN5rWL77yMXCIsXG4gICAgICAgICAgXCLmiJHlr7nku7vkvZXkuIDnp43lkb3ov5Dpg73kuI3lnKjmhI/vvIFcIiwgXCLljbPkvb/mtbfmtpvlm7TnnYDmiJHlkoblk67vvIxcIiwgXCLlroPku43lsIbovb3ooYzmiJHnmoToiJ/mpavvvJtcIiwgXCLljbPkvb/mspnmvKDlsIbmiJHlm7DkvY/vvIxcIiwgXCLkuZ/ku43mnInms4nmupDorqnmiJHlr7vop4XjgIJcIiwgXCLljbPku6TmiJHmjKPmiY7lnKjnlJ/lkb3nmoTmgqzltJbvvIxcIiwgXCLms4nmsLTlhrPkuI3kvJrmnq/ml6DkuIDmu7TvvJtcIixcbiAgICAgICAgICBcIuWcqOaIkeihsOW+rueahOeBtemtguemu+W8gOS5i+WJje+8jFwiLCBcIuS4uuS6huS9oO+8jOaIkeWwhuWVnOmlruS4jeW3suKAplwiLCBcIuS4lOaKiumCo+aXtueahOazieawtOW9k+S9nOS7iuaXpeeahOmGh+mGqu+8jFwiLCBcIuaIkeWwhuaKiui/meadr+WloOmFkuazvOa0kuWcqOWcsO+8m1wiLCBcIuS9huaEv+S9oOaIkeWuieW6t+aXoOaBme+8jFwiLCBcIuWViu+8jOaJmOWnhsK35pGp5bCU77yM56Wd56aP5L2g77yBXCJdLFxuICBcImJnbVwiOiBcIkpvc2ggV29vZHdhcmQtU2hpcHMtTm9Wb3hcIixcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRw77yaLy9qb3Nod29vZHdhcmQuY29tL1wiLFxuICBcInJlcG9ydGVyXCI6IFwi5Zub5aSVXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuavm+WnhuS6jOWImVwiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muavm+WnhlwiLFxuICBcImNvbnRlbnRcIjogW1wi5L2g6KaB5YWL5pyN55qE5piv5L2g55qE6Jma6I2j5b+DXCIsIFwi5piv5L2g55qE54Kr6ICA5qyyXCIsIFwi5L2g6KaB5a+55LuY55qE5piv5L2g55qE5pe25Yi75oOz6KaB5Yay5Ye65p2l5oOz6KaB5Ye66aOO5aS055qE5bCP6IGq5piOXCIsIFwi5oiR5LuO5p2l6YO95peg5rOV5b6X55+l77yMXCIsIFwi5Lq65Lus5piv56m256uf5Li65LuA5LmI5Lya54ix5LiK5Y+m5LiA5Liq5Lq677yMXCIsXG4gICAgICAgICAgXCLmiJHnjJzkuZ/orrjmiJHku6znmoTlv4PkuIrpg73mnInkuIDkuKrnvLrlj6PvvIxcIiwgXCLlroPmmK/kuKrnqbrmtJ7vvIzlkbzlkbznmoTlvoDngbXprYLph4zngYznnYDliLrpqqjnmoTlr5Lpo47vvIxcIiwgXCLmiYDku6XmiJHku6zmgKXliIfnmoTpnIDopoHkuIDkuKrmraPlpb3lvaLnirbnmoTlv4PmnaXloavkuIrlroPvvIxcIiwgXCLlsLHnrpfkvaDmmK/lpKrpmLPkuIDmoLflroznvo7nmoTmraPlnIblvaLvvIxcIiwgXCLlj6/mmK/miJHlv4Pph4znmoTnvLrlj6PvvIxcIixcbiAgICAgICAgICBcIuaIluiuuOWNtOaBsOaBsOaYr+S4quatquatquaJreaJreeahOmUr+m9v+W9ou+8jFwiLCBcIuaJgOS7peS9oOWhq+S4jeS6huOAglwiXSxcbiAgXCJiZ21cIjogXCJLZXZpbiBNYWNMZW9kLU9oIEhvbHkgTmlnaHRcIixcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2luY29tcGV0ZWNoLmNvbVwiLFxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiuS4gOWJquaihcK36Zuo5omT5qKo6Iqx5rex6Zet6Zeo44CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5ZSQ5a+FXCIsXG4gIFwiY29udGVudFwiOiBbXCLpm6jmiZPmoqjoirHmt7Hpl63pl6jvvIzlv5jkuobpnZLmmKXvvIzor6/kuobpnZLmmKXjgIJcIiwgXCLotY/lv4PkuZDkuovlhbHosIHorrrvvJ/oirHkuIvplIDprYLvvIzmnIjkuIvplIDprYLjgIJcIiwgXCLmhIHogZrnnInls7DlsL3ml6XpoqbvvIzljYPngrnllbznl5XvvIzkuIfngrnllbznl5XjgIJcIiwgXCLmmZPnnIvlpKnoibLmmq7nnIvkupHvvIzooYzkuZ/mgJ3lkJvvvIzlnZDkuZ/mgJ3lkJvjgIJcIl0sXG4gIFwiYmdtXCI6IFwiaHlvdXRvdWthXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL211c2ljLmdlb2NpdGllcy5qcC9oYWt1dV9hbWFiaW5lL1wiLFxuICBcInJlcG9ydGVyXCI6IFwi5rGH5paHXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiuacqOWFsOivjcK35ouf5Y+k5Yaz57ud6K+N5p+s5Y+L44CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya57qz5YWw5oCn5b63XCIsXG4gIFwiY29udGVudFwiOiBbXCLkurrnlJ/oi6Xlj6rlpoLliJ3op4HvvIzkvZXkuovnp4vpo47mgrLnlLvmiYfjgIJcIiwgXCLnrYnpl7Llj5jljbTmlYXkurrlv4PvvIzljbTpgZPmlYXkurrlv4PmmJPlj5jjgIJcIiwgXCLpqorlsbHor63nvaLmuIXlrrXljYrvvIzms6rpm6jpm7bpk4Pnu4jkuI3mgKjjgIJcIiwgXCLkvZXlpoLoloTlubjplKbooaPpg47vvIzmr5Tnv7zov57mnp3lvZPml6XmhL/jgIJcIl0sXG4gIFwiYmdtXCI6IFwi44GK5Zyw6JS15qeY44Gu44GE44KL5bCP6YGTXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL2FtYWNoYW11c2ljLmNoYWdhc2kuY29tL1wiLFxuICBcInJlcG9ydGVyXCI6IFwi5rGH5paHXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiuWmguaenOaIkeS4jeabvuingei/h+WkqumYs+OAi1wiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muiJvuexs+iOiS7ni4Tph5Hmo65cIixcbiAgXCJjb250ZW50XCI6IFtcIuaIkeacrOWPr+S7peW/jeWPl+m7keaal1wiLCBcIuWmguaenOaIkeS4jeabvuingei/h+WkqumYs1wiLCBcIueEtuiAjOmYs+WFieW3suS9v+aIkeeahOiNkuWHiVwiLCBcIuaIkOS4uuabtOaWsOeahOiNkuWHiVwiXSxcbiAgXCJiZ21cIjogXCJKb3NoIFdvb2R3YXJkLVNoaXBzLU5vVm94XCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cO+8mi8vam9zaHdvb2R3YXJkLmNvbS9cIixcbiAgXCJyZXBvcnRlclwiOiBcIuaxh+aWh1wiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrlgbbnhLbjgItcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrlvpDlv5fmkalcIixcbiAgXCJjb250ZW50XCI6IFtcIuaIkeaYr+WkqeepuumHjOeahOS4gOeJh+S6kVwiLCBcIuWBtuWwlOaKleW9seWcqOS9oOeahOazouW/g1wiLCBcIuS9oOS4jeW/heiutuW8glwiLCBcIuabtOaXoOmhu+asouWWnFwiLCBcIuWcqOi9rOeerOmXtOa2iOeBreS6hui4quW9sVwiLCBcIuS9oOaIkeebuOmAouWcqOm7keWknOeahOa1t+S4ilwiLCBcIuS9oOacieS9oOeahO+8jOaIkeacieaIkeeahO+8jOaWueWQkVwiLCBcIuS9oOiusOW+l+S5n+WlvVwiLFxuICAgICAgICAgIFwi5pyA5aW95L2g5b+Y5o6JXCIsIFwi5Zyo6L+Z5Lqk5Lya5pe25LqS5pS+55qE5YWJ5LquXCJdLFxuICBcImJnbVwiOiBcIktldmluIE1hY0xlb2QtU2FwcGhpcmUgSXNsZVwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vaW5jb21wZXRlY2guY29tXCIsXG4gIFwicmVwb3J0ZXJcIjogXCLlm5vlpJVcIlxufSwge1xuICBcInRpdGxlXCI6IFwi44CK6aOe6bif6ZuG44CL6IqC6YCJXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5rOw5oiI5bCUXCIsXG4gIFwiY29udGVudFwiOiBbXCJXaGVuIEkgc3RhbmQgYmVmb3JlIHRoZWUgYXQgdGhlIGRheSdzIGVuZCxcIiwgXCJ0aG91IHNoYWx0IHNlZSBteSBzY2FycyBhbmQga25vdyB0aGF0XCIsXG4gICAgICAgICAgXCJJIGhhZCBteSB3b3VuZHMgYW5kIGFsc28gbXkgaGVhbGluZy5cIiwgXCLplb/ml6XlsL3lpITvvIzmiJHnq5nlnKjkvaDnmoTpnaLliY3vvIxcIiwgXCLkvaDlsIbnnIvliLDmiJHnmoTnlqTnl5XvvIxcIiwgXCLnn6XpgZPmiJHmm77nu4/lj5fkvKTvvIzkuZ/mm77nu4/nl4rmhIjjgIJcIl0sXG4gIFwiYmdtXCI6IFwiU3VuZGF5c0NoaWxkXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9hdWRpb25hdXRpeC5jb20vXCIsXG4gIFwicmVwb3J0ZXJcIjogXCLlj7Pnn7PlhYjnlJ9cIlxufSwge1xuICBcInRpdGxlXCI6IFwi44CK5oiR5Y+v5ZCm5bCG5L2g5q+U5YGa5LiA5Liq5aSP5pel44CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya6I6O5aOr5q+U5LqaXCIsXG4gIFwiY29udGVudFwiOiBbXCLmiJHmmK/lkKblj6/ku6XmiorkvaDmr5TllrvmiJDlpI/lpKnvvJ9cIiwgXCLomb3nhLbkvaDmr5TlpI/lpKnmm7Tlj6/niLHmm7TmuKnlkozvvJpcIiwgXCLni4Lpo47kvJrkvb/kupTmnIjlqIfolb7nuqLmtojpppnmlq3vvIxcIiwgXCLlpI/lpKnmi6XmnInnmoTml7bml6XkuZ/ovaznnqzljbPov4fvvJtcIiwgXCLmnInml7blpKnnqbrkuYvlt6jnnLznm67lhYnlpKrngr3ng63vvIxcIixcbiAgICAgICAgICBcIuWug+mHkeeBv+eBv+eahOmdouiJsuS5n+W4uOiiq+mBruaal++8m1wiLCBcIuiAjOWNg+iKs+S4h+iJs+mDvee7iOWwhuWHi+mbtumjmOiQve+8jFwiLCBcIuiiq+aXtui/kOWkqemBk+WPquabtOabv+WJpeWwvee6ouminO+8m1wiLCBcIuS9huS9oOawuOaBkueahOWkj+WkqeWwhuayoeacieatouWwve+8jFwiLCBcIuS9oOaJgOaLpeacieeahOe+juiyjOS5n+S4jeS8mua2iOWkse+8jFwiLCBcIuatu+elnue7iOmavuWkuOWPo+S9oOa4uOiNoeS6juatu+iNq++8jFwiLFxuICAgICAgICAgIFwi5b2T5L2g5Zyo5LiN5py955qE6K+X5Lit5rC46JGG55ub5pe277ybXCIsIFwi5Y+q6KaB5Lq657G755Sf5a2Y77yM5oiW5Lq65pyJ55y8552b77yMXCIsIFwi5oiR55qE6K+X5bCx5Lya5rWB5Lyg5bm26LWL5LqI5L2g55Sf5ZG944CCXCJdLFxuICBcImJnbVwiOiBcIkdyZWVuTGVhdmVzXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9hdWRpb25hdXRpeC5jb20vXCIsXG4gIFwicmVwb3J0ZXJcIjogXCJOauWuq+iirVwiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrmiJHop4Hov4fkvaDlk63jgItcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrkuZTmsrvCt+aIiOeZu8K35ouc5LymXCIsXG4gIFwiY29udGVudFwiOiBbXCLmiJHop4Hov4fkvaDlk61cIiwgXCLmmbbojrnnmoTnmoTms6rnj6BcIiwgXCLku47ok53nnLznnZvmu5HokL1cIiwgXCLlg4/kuIDmnLXmoqbkuK3lh7rnjrDnmoTntKvnvZflhbBcIiwgXCLmu7TkuIvmuIXpgI/nmoTpnLLnj6BcIiwgXCLmiJHop4Hov4fkvaDnrJFcIiwgXCLov57ok53lrp3nn7PnmoTlhYnoipJcIiwgXCLkuZ/lm6DkvaDogIzlpLHoibJcIixcbiAgICAgICAgICBcIuWug+aAjuiDveavlOeahOS4iuWcqOS9oOWHneinhueahOecvOS4rVwiLCBcIumXqueOsOeahOeBtea0u+WFieW9qVwiLCBcIuWwseWmguWQjOWklemYs+S4uui/nOaWueeahOS6keactVwiLCBcIuafk+S4iue7mueDgueahOiJsuW9qVwiLCBcIue8k+e8k+iAjOadpeeahOaaruiJsuS5n+S4jeiDvVwiLCBcIuWwhumcnuWFiemAkOWHuuWkqeWkllwiLCBcIuS9oOeahOeskeWuueiuqeayiemXt+eahOW/g+eBtVwiLCBcIuWIhuS6q+e6r+ecn+eahOasouS5kFwiLFxuICAgICAgICAgIFwi6L+Z6Ziz5YWJ55WZ5LiL55qE5LiA6YGT5YWJ6IqSXCIsIFwi54Wn5Lqu5LqG5b+D54G15LiK56m6XCJdLFxuICBcImJnbVwiOiBcIumbqOOBruWknFwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9hbWFjaGFtdXNpYy5jaGFnYXNpLmNvbS9cIixcbiAgXCJyZXBvcnRlclwiOiBcIk5q5a6r6KKtXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiumGkuadpeinieW+l+eUmuaYr+eIseS9oOOAi+S4ieWImVwiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muacseeUn+ixqlwiLFxuICBcImNvbnRlbnRcIjogW1wi6YaS5p2l6KeJ5b6X55Sa5piv54ix5L2g44CCXCIsIFwi6KaB5piv5LiW5LiK5Y+q5pyJ5oiR5Lus5Lik5Liq5Lq65aSa5LmI5aW977yM5oiR5LiA5a6a6KaB5oqK5L2g5qy66LSf5b6X5ZOt5LiN5Ye65p2l44CCXCIsIFwi5oiR5oOz6KaB5Zyo6IyF5Lqt6YeM55yL6Zuo44CB5YGH5bGx6L6555yL6JqC6JqB77yM55yL6J206J225oGL54ix77yM55yL6JyY6Jub57uT572R77yM55yL5rC077yM55yL6Ii577yM55yL5LqR77yMXCIsXG4gICAgICAgICAgXCLnnIvngJHluIPvvIznnIvlrovmuIXlpoLnlJznlJzlnLDnnaHop4njgIJcIl0sXG4gIFwiYmdtXCI6IFwiUmFmYWVsIEtydXgtUG9uZFwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vZnJlZXBkLmNvbVwiLFxuICBcInJlcG9ydGVyXCI6IFwiTmrlrqvooq1cIlxufSwge1xuICBcInRpdGxlXCI6IFwi44CK5b6u6KiA44CL6IqC6YCJXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya57qqwrflk4jCt+e6quS8r+S8plwiLFxuICBcImNvbnRlbnRcIjogW1wi5Zyo5oiR5LuK5pel55qE5oKy5Lyk6YeM77yMXCIsIFwi5pyA5Li66Ium5rap55qE5piv5oiR5pio5pel5qyi5LmQ55qE5Zue5b+G44CCXCIsIFwi6K6w5b+G5piv5LiA56eN55u46IGa55qE5pa55byP44CCXCIsIFwi5b+Y5Y205piv5LiA56eN6Ieq55Sx55qE5pa55byP44CCXCIsIFwi6Zmk5LqG6buR5pqX5LmL6Lev77yM5Lq65LiN5Y+v6IO95Yiw6L6+6buO5piO44CCXCIsXG4gICAgICAgICAgXCLpmaTpnZ7miJHnmoTlv4Pnoo7kuobvvIzlkKbliJnlroPlj4jmgI7og73ooqvlvIDlkK/vvJ9cIl0sXG4gIFwiYmdtXCI6IFwiS2V2aW4gTWFjTGVvZC1CZXRobGVoZW1cIixcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2luY29tcGV0ZWNoLmNvbVwiLFxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiuiKseWEv+eahOecvOazquOAi1wiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mumHkeWtkOe+jueOslwiLFxuICBcImNvbnRlbnRcIjogW1wi6LCB6YO95LiN6KaB5ZGK6K+JXCIsIFwi5aW95ZCX77yfXCIsIFwi5riF5pmo5bqt6Zmi6KeS6JC96YeM77yMXCIsIFwi6Iqx5YS/5oKE5oKE5o6J55y85rOq55qE5LqL44CCXCIsIFwi5LiH5LiA6L+Z5LqL6K+05Ye65Y675LqG77yMXCIsIFwi5Lyg5Yiw6Jyc6JyC6ICz5py16YeM77yMXCIsIFwi5a6D5Lya5YOP5YGa5LqG5LqP5b+D5LqL5LiA5qC377yMXCIsIFwi6aOe5Zue5Y676L+Y6JyC6Jyc55qE44CCXCJdLFxuICBcImJnbVwiOiBcIlJhZmFlbCBLcnV4LUxvdmVseSBQaWFubyBTb25nXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9mcmVlcGQuY29tXCIsXG4gIFwicmVwb3J0ZXJcIjogXCLlkIPopb/nk5znmoTlsI/kuozpg45cIlxufSwge1xuICBcInRpdGxlXCI6IFwi44CK5LqO5oiR77yM6L+H5Y6777yM546w5Zyo5Lul5Y+K5pyq5p2l44CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya6KW/5qC86YeM5aSrwrfokKjmnb5cIixcbiAgXCJjb250ZW50XCI6IFtcIuS6juaIke+8jOi/h+WOu+OAgeeOsOWcqOWSjOacquadpVwiLCBcIuWVhuiuqOiBmuS8miDlkITmiafkuIDor40g57q35omw5LiN5oGv44CCXCIsIFwi5p6X5p6X5oC75oC755qE5qyy5pyb77yM5o6g5Y+W552A5oiR55qE546w5ZyoXCIsIFwi5oqK4oCc55CG5oCn4oCd5om85p2A5LqO5a6D55qE5a6d5bqnXCIsIFwi5oiR55qE54ix5oOF57q357q36LaK6L+H5pyq5p2l55qE6Jep56+xXCIsXG4gICAgICAgICAgXCLmoqbmg7Pop6PmlL7lh7rlroPku6znmoTlj4zohJog6Iie6LmI5LiN5YGcXCIsIFwi5LqO5oiR77yM56m05bGF5Lq65pSr5Y+W5LqG5YWI55+l77yMXCIsIFwi5L2p5oi06Iqx546v55qE6Zi/5rOi572X56WeXCIsIFwi5ZCR5Lqa5Lyv5ouJ572V55qE6IGL6ICz5ZSx5Y+55q2M5ZCf44CCXCIsIFwi5b+D5pyJ54yb6JmO77yM57uG5ZeF6JS36JaH44CCXCIsIFwi5a6h6KeG5oiR55qE5YaF5b+D5ZCn77yM5Lqy54ix55qE5pyL5Y+L77yM5L2g5bqU6aKk5qCX77yMXCIsXG4gICAgICAgICAgXCLlm6DkuLrpgqPmiY3mmK/kvaDmnKzmnaXnmoTpnaLnm67jgIJcIl0sXG4gIFwiYmdtXCI6IFwiSm9zaCBXb29kd2FyZC1TaGlwcy1Ob1ZveFwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHDvvJovL2pvc2h3b29kd2FyZC5jb20vXCIsXG4gIFwicmVwb3J0ZXJcIjogXCLlj7Pnn7PlhYjnlJ9cIlxufSwge1xuICBcInRpdGxlXCI6IFwi44CK5LiA5o+h56CC44CL6IqC6YCJXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya55+z5bed5ZWE5pyoXCIsXG4gIFwiY29udGVudFwiOiBbXCLlgYfmnJ/nmoTmnIDlkI7kuIDlpKlcIiwgXCLourrlnKjmspnmu6nkuIrorqnmva7msLTmt7nmsqFcIiwgXCLnrYnlpKnkuq7kuoblsLHniKzotbfmnaXkuIrnj61cIiwgXCLot6/ml4HnmoTni5fmiZPkuobkuKrplb/plb/nmoTlk4jmrKBcIiwgXCLmiJHkuZ/lrablroPnmoTmoLflrZBcIiwgXCLlm6DkuLrnvqHmhZXnmoTnvJjmlYVcIl0sXG4gIFwiYmdtXCI6IFwiS2V2aW4gTWFjTGVvZC1HeW1ub3BlZGllIE5vIDFcIixcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2luY29tcGV0ZWNoLmNvbVwiLFxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiuaymeS4juayq+OAi+iKgumAiVwiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mue6qsK35ZOIwrfnuqrkvK/kvKZcIixcbiAgXCJjb250ZW50XCI6IFtcIuS9oOWcqOeZveWkqeeahOWkqumYs+WJjemdouaYr+iHqueUseeahO+8jFwiLCBcIuWcqOm7keWknOeahOaYn+i+sOWJjemdouS5n+aYr+iHqueUseeahO+8m1wiLCBcIuWcqOayoeacieWkqumYs++8jOayoeacieaciOS6ru+8jOayoeacieaYn+i+sOeahOaXtuWAme+8jFwiLCBcIuS9oOS5n+aYr+iHqueUseeahOOAglwiLCBcIuS9huaYr+S9oOaYr+S9oOaJgOeIseeahOS6uueahOWltOmatu+8jFwiLCBcIuWboOS4uuS9oOeIseS6huS7luOAglwiLFxuICAgICAgICAgIFwi5L2g5Lmf5piv54ix5L2g55qE5Lq655qE5aW06Zq277yMXCIsIFwi5Zug5Li65LuW54ix5LqG5L2g44CCXCJdLFxuICBcImJnbVwiOiBcIktldmluIE1hY0xlb2QtR3ltbm9wZWRpZSBObyAyXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9pbmNvbXBldGVjaC5jb21cIixcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrkvaDlpJrkuYjlj6/niLHjgItcIixcbiAgXCJhdXRob3JcIjogXCLkuprljoblsbHlpKfCt+iwouWwlOebluiAtue7tOWlh8K35pmu5biM6YeRXCIsXG4gIFwiY29udGVudFwiOiBbXCIg4oCc5L2g5pyA5Y+v54ix4oCd77yM5oiR6K+05pe25p2l5LiN5Y+K5oCd57Si77yMXCIsIFwi6ICM5oCd57Si5LmL5ZCO77yM6L+Y5piv6L+Z5qC36K+044CCXCIsIFwi5oiR5a+55aW56K+0OiDkvaDlpJrkuYjlj6/niLEhIO+8jFwiLCBcIuW/g+mHjOWNtOWcqOivtDog5oiR5aSa5LmI54ix5L2gIVwiLCBcIuS9oOWwveWPr+azqOinhuWIq+S6uueahOiEuO+8jFwiLCBcIuS9huivt+S/oeS7u+aIkei/memil+W/g+OAglwiLFxuICAgICAgICAgIFwi5Zyo5L2g5a2k54us44CB5oKy5Lyk55qE5pel5a2Q77yMXCIsIFwi6K+35L2g5oKE5oKE5Zyw5b+15LiA5b+15oiR55qE5ZCN5a2X77yMXCIsIFwi5bm25LiU6K+077ya5pyJ5Lq65Zyo5oCd5b+15oiR77yMXCIsIFwi5Zyo5LiW6Ze05oiR5rS75Zyo5LiA5Liq5Lq655qE5b+D6YeM44CCXCJdLFxuICBcImJnbVwiOiBcIlJhZmFlbCBLcnV4LUxvdmVseSBQaWFubyBTb25nXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9mcmVlcGQuY29tXCIsXG4gIFwicmVwb3J0ZXJcIjogXCLlm5vlpJVcIlxufSwge1xuICBcInRpdGxlXCI6IFwi44CK6YCg5LiA5Liq6I2J5Y6f44CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya6Im+57Gz6I6Jwrfni4Tph5Hmo65cIixcbiAgXCJjb250ZW50XCI6IFtcIuWOu+mAoOS4gOS4quiNieWOn1wiLCBcIumcgOimgeS4gOagquS4ieWPtuiNieWSjOS4gOWPquicnOicgu+8jFwiLCBcIuS4gOagquS4ieWPtuiNieWSjOS4gOWPquicnOicgu+8jFwiLCBcIui/mOacieaipuOAglwiLCBcIuWmguaenOicnOicguS4jeWkmu+8jFwiLCBcIuWNlemdoOaipuS5n+ihjOOAglwiXSxcbiAgXCJiZ21cIjogXCJLZXZpbiBNYWNMZW9kLU1pZHN1bW1lciBTa3lcIixcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2luY29tcGV0ZWNoLmNvbVwiLFxuICBcInJlcG9ydGVyXCI6IFwiTmrlrqvooq1cIlxufSwge1xuICBcInRpdGxlXCI6IFwi5aSP55uu5ryx55+z5LqM5YiZXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5aSP55uu5ryx55+zXCIsXG4gIFwiY29udGVudFwiOiBbXCLkvaDkuI3opoHor7TmiJHllpzmrKLkvaAg5L2g6KaB6K+06L+Z5aSP5aSc55qE5pyI6Imy55yf576O5Li9XCIsIFwi5q2k5Yi754Om6LqB55qE5b+D5oOF5bCx5YOP55So5Y2B6Zmk5Lul5LiJ5b6X5Ye655qE57uT5p6c5LiA5qC377yM5peg56m35peg5bC9XCJdLFxuICBcImJnbVwiOiBcIktldmluIE1hY0xlb2QtU3RhcnJ5XCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9pbmNvbXBldGVjaC5jb21cIixcbiAgXCJyZXBvcnRlclwiOiBcIk5q5a6r6KKtXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiuWvguWvnuS6uuW/g+OAi1wiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muW+kOW/l+aRqVwiLFxuICBcImNvbnRlbnRcIjogW1wi5oiR55qE5LiW55WM5aSq6L+H5a6J6Z2Z77yMXCIsIFwi6Z2Z5b6X5Y+v5Lul5ZCs6KeB6Ieq5bex5b+D6Lez55qE5aOw6Z+z44CCXCIsIFwi5b+D5oi/55qE6KGA5ray5oWi5oWi5rWB5Zue5b+D5a6k77yMXCIsIFwi5aaC5q2k6L+Z6Iis55qE6L2u5Zue44CCXCIsIFwi6IGq5piO55qE5Lq677yM5Zac5qyi54yc5b+D77yMXCIsIFwi5Lmf6K6454yc5a+55LqG5Yir5Lq655qE5b+D77yMXCIsIFwi5Y205Lmf5aSx5Y675LqG6Ieq5bex55qE44CCXCIsXG4gICAgICAgICAgXCLlgrvmsJTnmoTkurrvvIzllpzmrKLnu5nlv4PvvIxcIiwgXCLkuZ/orrjkvJrooqvkurrpqpfvvIxcIiwgXCLljbTmnKrlv4Xog73lvpfliLDliKvkurrnmoTjgIJcIiwgXCLkvaDku6XkuLrmiJHliIDmnqrkuI3lhaXvvIxcIiwgXCLmiJHku6XkuLrkvaDnmb7mr5LkuI3kvrXjgIJcIl0sXG4gIFwiYmdtXCI6IFwiUmFmYWVsIEtydXgtTm9zdGFsZ2ljIFBpYW5vXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9mcmVlcGQuY29tXCIsXG4gIFwicmVwb3J0ZXJcIjogXCLlj7Pnn7PlhYjnlJ9cIlxufSwge1xuICBcInRpdGxlXCI6IFwi44CK5oiR5pu+5LiD5qyh6YSZ6KeG6Ieq5bex55qE54G16a2C44CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya57qqwrflk4jCt+e6quS8r+S8plwiLFxuICBcImNvbnRlbnRcIjogW1wi5pu+5pyJ5LiD5qyh5oiR6YSZ6KeG5LqG6Ieq5bex55qE54G16a2C77yaXCIsIFwi56ys5LiA5qyh77yM5b2T5a6D5pys5Y+v6L+b5Y+W5pe277yM5Y205pWF5L2c6LCm5Y2RXCIsIFwi56ys5LqM5qyh77yM5b2T5a6D5Zyo56m66Jma5pe277yM55So54ix5qyy5p2l5aGr5YWFXCIsIFwi56ys5LiJ5qyh77yM5Zyo5Zuw6Zq+5ZKM5a655piT5LmL6Ze077yM5a6D6YCJ5oup5LqG5a655piTXCIsXG4gICAgICAgICAgXCLnrKzlm5vmrKHvvIzlroPniq/kuobplJnvvIzljbTlgJ/nlLHliKvkurrkuZ/kvJrniq/plJnmnaXlrr3mhbDoh6rlt7FcIiwgXCLnrKzkupTmrKHvvIzlroPoh6rnlLHova/lvLHvvIzljbTmiorlroPorqTkuLrmmK/nlJ/lkb3nmoTlnZrpn6dcIiwgXCLnrKzlha3mrKHvvIzlvZPlroPphJnlpLfkuIDlvKDkuJHmgbbnmoTlmLTohLjml7bvvIzljbTkuI3nn6XpgqPmraPmmK/oh6rlt7HpnaLlhbfkuK3nmoTkuIDlia/vvJtcIixcbiAgICAgICAgICBcIuesrOS4g+asoe+8jOWug+S+p+i6q+S6jueUn+a0u+eahOaxoeazpeS4re+8jOiZveS4jeeUmOW/g++8jOWNtOWPiOeVj+mmlueVj+WwvuOAglwiXSxcbiAgXCJiZ21cIjogXCJLZXZpbiBNYWNMZW9kLU9oIEhvbHkgTmlnaHRcIixcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2luY29tcGV0ZWNoLmNvbVwiLFxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiuilv+axn+aciMK35LiW5LqL5LiA5Zy65aSn5qKm44CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya6IuP6L28XCIsXG4gIFwiY29udGVudFwiOiBbXCLkuJbkuovkuIDlnLrlpKfmoqbvvIzkurrnlJ/lh6Dluqbnp4vlh4njgIJcIiwgXCLlpJzmnaXpo47lj7blt7LpuKPlu4rjgIJcIiwgXCLnnIvlj5bnnInlpLTprJPkuIrjgIJcIiwgXCLphZLotLHluLjmhIHlrqLlsJHvvIzmnIjmmI7lpJrooqvkupHlpqjjgIJcIiwgXCLkuK3np4vosIHkuI7lhbHlraTlhYnjgIJcIiwgXCLmiornm4/lh4TnhLbljJfmnJvjgIJcIl0sXG4gIFwiYmdtXCI6IFwi5aSP6Imy5Y+Z5oOFXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL2FtYWNoYW11c2ljLmNoYWdhc2kuY29tL1wiLFxuICBcInJlcG9ydGVyXCI6IFwi5Zub5aSVXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiuiSueiRreOAi1wiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muS9muWQjVwiLFxuICBcImNvbnRlbnRcIjogW1wi6JK56JGt6IuN6IuN77yM55m96Zyy5Li66Zyc44CC5omA6LCT5LyK5Lq677yM5Zyo5rC05LiA5pa544CC5rqv5rSE5LuO5LmL77yM6YGT6Zi75LiU6ZW/44CC5rqv5ri45LuO5LmL77yM5a6b5Zyo5rC05Lit5aSu44CCXCIsIFwi6JK56JGt6JCL6JCL77yM55m96Zyy5pyq5pme44CC5omA6LCT5LyK5Lq677yM5Zyo5rC05LmL5rmE44CC5rqv5rSE5LuO5LmL77yM6YGT6Zi75LiU6Le744CC5rqv5ri45LuO5LmL77yM5a6b5Zyo5rC05Lit5Z2744CCXCIsXG4gICAgICAgICAgXCLokrnoka3ph4fph4fvvIznmb3pnLLmnKrlt7LjgILmiYDosJPkvIrkurrvvIzlnKjmsLTkuYvmtpjjgILmuq/mtITku47kuYvvvIzpgZPpmLvkuJTlj7PjgILmuq/muLjku47kuYvvvIzlrpvlnKjmsLTkuK3msprjgIJcIl0sXG4gIFwiYmdtXCI6IFwibmV6YW1lXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL211c2ljLmdlb2NpdGllcy5qcC9oYWt1dV9hbWFiaW5lL1wiLFxuICBcInJlcG9ydGVyXCI6IFwi5Zub5aSVXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiuaIkeaYr+mAg+i3keeahOmCo+S4quOAi1wiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mui0ueWwlOWNl+WkmsK35L2p57Si6Zi/XCIsXG4gIFwiY29udGVudFwiOiBbXCLmiJHmmK/pgIPot5HnmoTpgqPkuKrvvIxcIiwgXCLmiJHlh7rnlJ/lkI5cIiwgXCLku5bku6zmiormiJHplIHlnKjmiJHph4zpnaJcIiwgXCLlj6/miJHot5HkuobjgIJcIiwgXCLmiJHnmoTngbXprYLlr7vmib7miJHvvIxcIiwgXCLnqb/ov4flsbHlspfkuI7lsbHosLfvvIxcIiwgXCLmiJHluIzmnJvmiJHnmoTngbXprYJcIiwgXCLmsLjov5zmib7kuI3liLDmiJFcIl0sXG4gIFwiYmdtXCI6IFwiQWxleGFuZGVyIE5ha2FyYWRhLVdpbnRlclwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vZnJlZXBkLmNvbVwiLFxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiui2iuS6uuatjOOAi1wiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mlwiLFxuICBcImNvbnRlbnRcIjogW1wi5LuK5aSV5L2V5aSV5YWu5pC05rSy5Lit5rWB44CCXCIsIFwi5LuK5pel5L2V5pel5YWu5b6X5LiO546L5a2Q5ZCM6Iif44CCXCIsIFwi6JKZ576e6KKr5aW95YWu5LiN6Ki+6K+f6IC744CCXCIsIFwi5b+D5Yeg54Om6ICM5LiN57ud5YWu5b6X55+l546L5a2Q44CCXCIsIFwi5bGx5pyJ5pyo5YWu5pyo5pyJ5p6d44CCXCIsIFwi5b+D5oKm5ZCb5YWu5ZCb5LiN55+l44CCXCJdLFxuICBcImJnbVwiOiBcIuahnOmbslwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9hbWFjaGFtdXNpYy5jaGFnYXNpLmNvbS9cIixcbiAgXCJyZXBvcnRlclwiOiBcIuWQg+ilv+eTnOeahOWwj+S6jOmDjlwiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrnlJ/lkb3mmK/miJHku6zmi6XmnInnmoTkuIDliIfjgItcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJpELkguIOWKs+S8puaWr1wiLFxuICBcImNvbnRlbnRcIjogW1wi5rS7552A5pe277yM55Sf5ZG95piv5oiR5Lus5oul5pyJ55qE5LiA5YiH77ybXCIsIFwi5aaC5p6c5L2g5LiN5Zyo55Sf5ZG95Lit5rS7552A77yM5L2g5piv5LiA5Z2o57Kq44CCXCIsIFwi5bel5L2c5piv55Sf5ZG977yM55Sf5ZG95a+T5LqO5bel5L2c77yMXCIsIFwi6Zmk6Z2e5L2g5piv5bel6LWE55qE5aW06Zq244CCXCIsIFwi5b2T5bel6LWE55qE5aW06Zq25bel5L2c77yM5LuW5bCG55Sf5ZG95pCB572u5LiA5peB77yMXCIsXG4gICAgICAgICAgXCLnq5nlnKjpgqPph4zlg4/kuIDlnajnsqrjgIJcIiwgXCLkurrlupTor6Xmi5Lnu53mr6vml6DnlJ/msJTlnLDlt6XkvZzjgIJcIiwgXCLkurrlupTor6Xmi5Lnu53lj5jkuLrkuIDloIbloIbotZrlt6XotYTnmoTnsqrjgIJcIiwgXCLkurrlupTor6XlvbvlupXmi5Lnu53kvZzkuLrlt6XotYTnmoTlpbTpmrbogIzlt6XkvZzjgIJcIiwgXCLkurrlupTor6XopoHmsYLkuLroh6rlt7Hlt6XkvZzvvIzlgZroh6rlt7HnmoTlt6XkvZzvvIzlsIbnlJ/lkb3mipXlhaXlhbbkuK3jgIJcIixcbiAgICAgICAgICBcIuWboOS4uuWmguaenOS6uueahOW3peS9nOmHjOayoeacieeUn+WRve+8jOS7luWfuuacrOS4iuaYr+S4gOWghueyquOAglwiXSxcbiAgXCJiZ21cIjogXCLjgqLjgqTjg6rjg4Pjgrfjg6Xjga7poqhcIixcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vYW1hY2hhbXVzaWMuY2hhZ2FzaS5jb20vXCIsXG4gIFwicmVwb3J0ZXJcIjogXCLlj7Pnn7PlhYjnlJ9cIlxufSwge1xuICBcInRpdGxlXCI6IFwi44CKMTkyN+W5tOaYpe+8jOW4leaWr+aNt+WwlOe6s+WFi+iHtOiMqOe7tOWhlOiAtuWog+OAi1wiLFxuICBcImF1dGhvclwiOiBcIumyjeWIqeaWr8K35YiX5aWl5bC85aSa57u05aWHwrfluJXmlq/mjbflsJTnurPlhYtcIixcbiAgXCJjb250ZW50XCI6IFtcIuaIkeS7rOWkmuS5iOiNieeOh+WcsOaIkOS4uuS6huWtpOWEv+OAgiDnjpvnkLPlqJzvvIxcIiwgXCLov5nmmK/miJHmnIDlkI7kuIDmrKHlkbzllKTkvaDnmoTlkI3lrZfjgIJcIiwgXCLlpKfpm6rokL3lnKjmiJHplIjov7nmlpHmlpHnmoTmsJTnrqHlkozogrrlj7bkuIrvvIxcIiwgXCLor7TlkKfvvJrku4rlpJzvvIzmiJHnmoTll5Ppn7PmmK/kuIDliJfooqvmiKrlgZznmoTngavovabvvIxcIixcbiAgICAgICAgICBcIuS9oOeahOWQjeWtl+aYr+S/hOe9l+aWr+a8q+mVv+eahOWbveWig+e6v+OAglwiLCBcIuaIkeaDs+ixoeaIkeS7rOeahOebuOmBh++8jOWcqOS4gOWcuumahumHjeeahOatu+S6oeiDjOmdolwiLCBcIu+8iOeOq+eRsOeahOefm+ebvui0r+epv+S6huS7luehleWkp+eahOW/g++8ie+8m1wiLCBcIuWcqOS4gOS5neS6jOS4g+W5tOaYpeWknO+8jOaIkeS7rOWcqOWbveWig+e6v+ebuOmBh1wiLCBcIuWboOatpOmUmei/h+S6hlwiLFxuICAgICAgICAgIFwi6L+Z5Liq5ZG85ZW4552A5aWU5ZCR57uI54K555qE5LiW55WM44CCXCIsIFwi6ICM5LuK5aSc77yM5L2g5piv6Iie5puy77yM5LiW55WM5piv6ZSZ6K+v44CCXCIsIFwi5b2T5paw5bm055qE6ZKf5aOw5pWy5ZON55qE5pe25YCZ77yM55m+5ZCI6Iqx55ub5pS+XCIsIFwi4oCU4oCU5LuW5Lul5LuW55qE5q275a6j5ZGK5LqG5LiW57qq55qE57uI57uT77yMXCIsIFwi6ICM5LiN5piv5oiR5Lus5bC05bCs55qE55Sf5a2Y44CCXCIsXG4gICAgICAgICAgXCLkuLrku4DkuYjmiJHopoHlr7nkvaDku6zmsonpu5jvvJ9cIiwgXCLlvZPljY7lsJTlhbnoiJ7mm7LlpY/otbfnmoTml7blgJnvvIzmiJHlnKjosKLluZXjgIJcIiwgXCLlm6DkuLrku4rlpJzvvIzkvaDmmK/ml4vovazvvIzmiJHmmK/ov7flpLHjgIJcIiwgXCLlvZPkvaDovazmjaLoiJ7kvLTnmoTml7blgJnvvIzmiJHlsIblnKjkuJbnlYznmoTnlZnoqIDlhozkuIpcIiwgXCLmirnljrvmiJHnmoTlkI3lrZfjgIJcIiwgXCLnjpvnkLPlqJzvvIzlm73looPnur/nmoToiJ7kvJpcIixcbiAgICAgICAgICBcIuWBnOatou+8jOWkp+mbquiQveWQkeaIkeS7rOWQhOiHquWtpOWNleeahOWRvei/kOOAglwiLCBcIuaIkeatjOWUseS6hui/meWvkuWGt+eahOaYpeWkqe+8jOaIkeatjOWUseS6huaIkeS7rOeahOW6n+Win1wiLCBcIuKApuKApueEtuWQjuaIkeWPiOWwhuayiem7mOS4jeivreOAglwiXSxcbiAgXCJiZ21cIjogXCJSYWZhZWwgS3J1eC1Ob3N0YWxnaWMgUGlhbm9cIixcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2ZyZWVwZC5jb21cIixcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrlpI/lpKnjgItcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrnvZfkvK/nibku55Om5bCU5rO9XCIsXG4gIFwiY29udGVudFwiOiBbXCLlnKjlpI/lpKnvvIzmiJHku6zlkIPnu7/osYbvvIxcIiwgXCLmoYPvvIzmqLHmoYPlkoznlJznk5zjgIJcIiwgXCLlnKjlkITnp43mhI/kuYnkuIrpg73mvKvplb/kuJTmhInlv6tcIiwgXCLml6XlrZDlj5Hlh7rlo7Dlk43jgIJcIiwgXCLliJfovabnu4/ov4fkuaHkuIvvvIxcIiwgXCLml5fluJzmgqbliqjlnKjlsYvpobbkuIrjgIJcIiwgXCLlnKjoiLnkuIrlpJrkuYjmg6zmhI9cIiwgXCLlkajlm7TmmK/muJDplb/nmoTmsLTpnaLjgIJcIixcbiAgICAgICAgICBcIuWxsemhtuS4iuimhuebluedgOmbqu+8jFwiLCBcIuiKseaVo+WPkemmmeWRs+OAguWcqOa5luS4ilwiLCBcIuS9oOWPr+S7peiKseaJgOacieaXtumXtFwiLCBcIuS6q+WPl+WUseatjOeahOS5kOi2o+OAglwiLCBcIuaIkeS4jeefpemBk+S7gOS5iOS9v+aIkea7oei2s++8jFwiLCBcIuS9oOi6uuWcqOiNieWcsOS4iueci+S5plwiLCBcIuWQrOWIsOS9oOeahOWbm+WRqOaYr1wiLCBcIuaXoOWKm+eahOiaiuidh+WXoeWXoeedgOOAglwiXSxcbiAgXCJiZ21cIjogXCJPbmVGaW5lRGF5XCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9hdWRpb25hdXRpeC5jb20vXCIsXG4gIFwicmVwb3J0ZXJcIjogXCJOauWuq+iirVwiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrmrYzpooLmmbrmhafkuYvnvo7jgItcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrpm6rojrFcIixcbiAgXCJjb250ZW50XCI6IFtcIlRoeSBsaWdodCBhbG9uZSAtIGxpa2UgbWlzdCBvJ2VyIHRoZSBtb3VudGFpbnMgZHJpdmVu77yMXCIsXG4gICAgICAgICAgXCJPciBtdXNpYyBieSB0aGUgbmlnaHQtd2luZCBzZW50IHRocm91Z2ggc3RyaW5ncyBvZiBzb21lIHN0aWxsIGluc3RydW1lbnTvvIxcIixcbiAgICAgICAgICBcIk9yIG1vb25saWdodCBvbiBhIG1pZG5pZ2h0IHN0cmVhbS5cIiwgXCLllK/mnInkvaDnmoTlhYnovokg6IO95YOP5ryr6L+H5bGx5bKt55qE6JaE6Zu+XCIsIFwi5YOP5ZKM6aOO5LuO6Z2Z6LCn55qE5LiW55WM55C05bym6YeM5bim5p2l55qE5aSc5puyXCIsIFwi5YOP5pyX54Wn5rqq5rC055qE5pyI6ImyXCJdLFxuICBcImJnbVwiOiBcIktldmluIE1hY0xlb2QtU2FwcGhpcmUgSXNsZVwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vaW5jb21wZXRlY2guY29tXCIsXG4gIFwicmVwb3J0ZXJcIjogXCLmsYfmlodcIlxufSwge1xuICBcInRpdGxlXCI6IFwi44CK6Zuo5be344CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5oi05pyb6IiSXCIsXG4gIFwiY29udGVudFwiOiBbXCLmkpHnnYDmsrnnurjkvJ7vvIzni6zoh6pcIiwgXCLlvbflvqjlnKjmgqDplb/jgIHmgqDplb9cIiwgXCLlj4jlr4Llr6XnmoTpm6jlt7dcIiwgXCLmiJHluIzmnJvpgKLnnYBcIiwgXCLkuIDkuKrkuIHpppnkuIDmoLflnLBcIiwgXCLnu5PnnYDmhIHmgKjnmoTlp5HlqJhcIiwgXCLlpbnmmK/mnIlcIiwgXCLkuIHpppnkuIDmoLfnmoTpopzoibJcIiwgXCLkuIHpppnkuIDmoLfnmoToiqzoirNcIixcbiAgICAgICAgICBcIuS4gemmmeS4gOagt+eahOW/p+aEgVwiLCBcIuWcqOmbqOS4reWTgOaAqFwiLCBcIuWTgOaAqOWPiOW9t+W+qFwiLCBcIuWlueW9t+W+qOWcqOi/meWvguWvpeeahOmbqOW3t1wiLCBcIuaSkeedgOayuee6uOS8nlwiLCBcIuWDj+aIkeS4gOagt1wiLCBcIuWDj+aIkeS4gOagt+WcsFwiLCBcIum7mOm7mOW9s+S6jeedgFwiLCBcIuWGt+a8oOOAgeWHhOa4he+8jOWPiOaDhuaAhVwiLCBcIuWluem7mOm7mOWcsOi1sOi/kVwiLFxuICAgICAgICAgIFwi6LWw6L+R77yM5Y+I5oqV5Ye6XCIsIFwi5aSq5oGv5LiA6Iis55qE55y85YWJXCIsIFwi5aW56aOY6L+HXCIsIFwi5YOP5qKm5LiA6Iis5ZywXCIsIFwi5YOP5qKm5LiA6Iis5Zyw5YeE5amJ6L+36IyrXCIsIFwi5YOP5qKm5Lit6aOY6L+HXCIsIFwi5LiA5p6d5LiB6aaZ5ZywXCIsIFwi5oiR6Lqr5peB6aOY6L+H6L+Z5aWz6YOOXCIsIFwi5aW56Z2Z6buY5Zyw6L+c5LqG44CB6L+c5LqGXCIsIFwi5Yiw5LqG6aKT5Zyu55qE56+x5aKZXCIsXG4gICAgICAgICAgXCLotbDlsL3ov5npm6jlt7dcIiwgXCLlnKjpm6jnmoTlk4Dmm7Lph4xcIiwgXCLmtojkuoblpbnnmoTpopzoibJcIiwgXCLmlaPkuoblpbnnmoToiqzoirNcIiwgXCLmtojmlaPkuobvvIznlJroh7PlpbnnmoRcIiwgXCLlpKrmga/oiKznmoTnnLzlhYlcIiwgXCLkuIHpppnoiKznmoTmg4bmgIVcIiwgXCLmkpHnnYDmsrnnurjkvJ7vvIzni6zoh6pcIiwgXCLlvbflvqjlnKjmgqDplb/jgIHmgqDplb9cIiwgXCLlj4jlr4Llr6XnmoTpm6jlt7dcIixcbiAgICAgICAgICBcIuaIkeW4jOacm+mjmOi/h1wiLCBcIuS4gOS4quS4gemmmeS4gOagt+WcsFwiLCBcIue7k+edgOaEgeaAqOeahOWnkeWomFwiXSxcbiAgXCJiZ21cIjogXCJLZXZpbiBNYWNMZW9kLUd5bW5vcGVkaWUgTm8gMVwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vaW5jb21wZXRlY2guY29tXCIsXG4gIFwicmVwb3J0ZXJcIjogXCLlm5vlpJVcIlxufSwge1xuICBcInRpdGxlXCI6IFwi44CK6K+X57uPwrfpu43nprvjgItcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJpcIixcbiAgXCJjb250ZW50XCI6IFtcIuW9vOm7jeemu+emu++8jOW9vOeot+S5i+iLl+OAguihjOi/iOmdoemdoe+8jOS4reW/g+aRh+aRh+OAguefpeaIkeiAhe+8jOiwk+aIkeW/g+W/p++8m+S4jeefpeaIkeiAhe+8jOiwk+aIkeS9leaxguOAguaCoOaCoOiLjeWkqe+8jOatpOS9leS6uuWTie+8n1wiLFxuICAgICAgICAgIFwi5b286buN56a756a777yM5b2856i35LmL56mX44CC6KGM6L+I6Z2h6Z2h77yM5Lit5b+D5aaC6YaJ44CC55+l5oiR6ICF77yM6LCT5oiR5b+D5b+n77yb5LiN55+l5oiR6ICF77yM6LCT5oiR5L2V5rGC44CC5oKg5oKg6IuN5aSp77yM5q2k5L2V5Lq65ZOJ77yfXCIsXG4gICAgICAgICAgXCLlvbzpu43nprvnprvvvIzlvbznqLfkuYvlrp7jgILooYzov4jpnaHpnaHvvIzkuK3lv4PlpoLlmY7jgILnn6XmiJHogIXvvIzosJPmiJHlv4Plv6fvvJvkuI3nn6XmiJHogIXvvIzosJPmiJHkvZXmsYLjgILmgqDmgqDoi43lpKnvvIzmraTkvZXkurrlk4nvvJ9cIl0sXG4gIFwiYmdtXCI6IFwib21pd2F0YXJpXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL211c2ljLmdlb2NpdGllcy5qcC9oYWt1dV9hbWFiaW5lL1wiLFxuICBcInJlcG9ydGVyXCI6IFwi5Zub5aSVXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiuW5suiNieWghuOAi1wiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muWlpeilv+aZrsK35Z+D57Gz5bCU6IC257u05aWHwrfmm7zlvrflsJTmlr3loZTlp4ZcIixcbiAgXCJjb250ZW50XCI6IFtcIuaIkemhuuaJi+aQrei1t+S4gOaetuacqOair1wiLCBcIueIrOS4iuaKq+aVo+eahOW5suiNieajmumhtu+8jFwiLCBcIuaIkeWcqOWRvOWQuOmTtuays+eahOeijuWxke+8jFwiLCBcIuaIkeWcqOWRvOWQuOWuh+WumeeahOeXheeXh+OAglwiXSxcbiAgXCJiZ21cIjogXCJLZXZpbiBNYWNMZW9kLVN0YXJyeVwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vaW5jb21wZXRlY2guY29tXCIsXG4gIFwicmVwb3J0ZXJcIjogXCJOauWuq+iirVwiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrlv4PnmoTmrYzjgItcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrljaHnk6boj7Lmlq9cIixcbiAgXCJjb250ZW50XCI6IFtcIuacieS6huS9oO+8jOaIkeaDs++8jOS4gOWIh+aEieW/q+eahOS6i+eJqemDveacneaIkeW+rueske+8jFwiLCBcIuWcqOS9oOecvOedm+eahOmVnOWtkOmHjOWPjeaYoOedgOasouS5kOOAglwiLCBcIueVmeS4i+adpe+8jOaIkeeahOWFie+8jOaJgOaciemCo+S6m+WPquimgeS9oOeci+aIkeS4gOecvFwiLCBcIuS+v+WFhea7oea/gOaDheWcsOiNoea8vuWcqOaIkeW/g+S4iuOAgVwiLFxuICAgICAgICAgIFwi5raM5Yiw5oiR5ZSH6Ze055qE5oSf6KeJ77yM5oiR6L+Y5rKh5pyJ5ZGK6K+J5L2g5ZOq5oCV5LiA5Y2K44CCXCIsIFwi5aaC5p6c5L2g5biM5pyb77yM5L2g5Y+v5Lul5LiN6Lef5oiR6K6y77yMXCIsIFwi5Lmf5LiN6KaB6K+05Lqb54ix5ZKM5YC+5oWV55qE6L+35Lq66K+d44CCXCIsIFwi6L+Z5Lqb5bey6Laz5aSf77ya5pyJ5L2g5Zyo6L+R5peB77yMXCIsIFwi5oiR5Y+v5Lul5ZGK6K+J5L2g5oiR6ZyA6KaB5L2g77yM5Y+v5Lul5o6l6Kem5L2g77yMXCIsXG4gICAgICAgICAgXCLlj6/ku6XlkbzlkLjkvaDlkbzlkLjnmoTml6nmmajnmoTmuIXmlrDvvJtcIiwgXCLogIzlpoLmnpzkvaDop4nlvpflsLHov57ov5nkupvkuZ/mmK/lpJrkvZnnmoTvvIxcIiwgXCLpgqPkuYjku4Xku4Xop4HliLDkvaDkuZ/lt7LotrPlpJ/vvIFcIiwgXCLluIzmnJvku6XlkI7kvaDnnIvliLDnmoTpg73mmK/lsZ7kuo7oh6rlt7HnmoTlubjnpo/vvIxcIiwgXCLliqrlipvnnYDnmoTmmK/lsZ7kuo7oh6rlt7Hlubjnpo/nmoTlsI/kuovjgIJcIixcbiAgICAgICAgICBcIuePjeaDnOedgOeahOaYr+mdoOi/keS9oOeahOW/g+OAglwiLCBcIuiAjOS4jeaYr+WIq+S6uueahOOAglwiLCBcIuWFs+S6jueIsei/meS7tuWwj+S6i++8jFwiLCBcIuimgeWSjOWIq+S6uuS4gOi1t+WPkeeUn+OAglwiLCBcIuaJjeiDveaKtei+vumCo+S8vOS5jumBpeS4jeWPr+WPiueahOeIseeahOW9vOWyuOOAglwiXSxcbiAgXCJiZ21cIjogXCJLZXZpbiBNYWNMZW9kLU1pZHN1bW1lciBTa3lcIixcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2luY29tcGV0ZWNoLmNvbVwiLFxuICBcInJlcG9ydGVyXCI6IFwiTmrlrqvooq1cIlxufSwge1xuICBcInRpdGxlXCI6IFwi44CK5LqR44CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya6YeR5a2Q576O546yXCIsXG4gIFwiY29udGVudFwiOiBbXCLmiJHmg7Plj5jmiJDkuIDmnLXkupHjgIJcIiwgXCLlj4jmnb7lj4jova9cIiwgXCLpo5jlnKjok53lpKnph4xcIiwgXCLku47ov5nlpLTliLDpgqPlpLRcIiwgXCLnnIvlpJ/kuobpo47mma/vvIxcIiwgXCLmmZrkuIrlsLHot5/mnIjkuq7mjYnov7fol4/jgIJcIiwgXCLnjqnohbvkuoZcIiwgXCLlsLHlj5jmiJDpm6jjgIJcIiwgXCLot5/pm7flhaxcIiwgXCLnu5PkuKrkvLTvvIxcIixcbiAgICAgICAgICBcIuS4gOi1t+i3s+WIsFwiLCBcIuS6uuWutueahOaxoOWhmOmHjOWOu+OAglwiXSxcbiAgXCJiZ21cIjogXCJSYWZhZWwgS3J1eC1Qb25kXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9mcmVlcGQuY29tXCIsXG4gIFwicmVwb3J0ZXJcIjogXCLlkIPopb/nk5znmoTlsI/kuozpg45cIlxufSwge1xuICBcInRpdGxlXCI6IFwi44CK6ZW/5LmF5rKJ6buY5ZCO44CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5aiB5buJwrflt7Tnibnli5LCt+WPtuiKnVwiLFxuICBcImNvbnRlbnRcIjogW1wi6ZW/5LmF5rKJ6buY5ZCO5byA5Y+j77ya5rKh6ZSZ77yMXCIsIFwi5Yir55qE5oOF5Lq66YO95bey55aP6L+c5oiW5q275Y6777yMXCIsIFwi5LiN5Y+L5aW955qE54Gv5YWJ55So54Gv572p5oyh5L2P77yMXCIsIFwi5LiN5Y+L5aW955qE5aSc5pma55So56qX5biY5oyh5L2P77yMXCIsIFwi5oiR5Lus6LCI5ZWK6LCI5ZWKXCIsIFwi5Y+N5aSN6LCI6K666Im65pyv5ZKM5q2M6L+Z5pyA6auY5Li76aKY77yaXCIsXG4gICAgICAgICAgXCLouqvkvZPoobDogIHmmbrmhafmlrnlvIDvvIzlubTovbvml7ZcIiwgXCLmiJHku6zmm77nm7jniLHljbTmtZHnhLbkuI3nn6VcIl0sXG4gIFwiYmdtXCI6IFwiSm9zaCBXb29kd2FyZC1BdXR1bW5cIixcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRw77yaLy9qb3Nod29vZHdhcmQuY29tL1wiLFxuICBcInJlcG9ydGVyXCI6IFwi5Zub5aSVXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiuWQieaqgOi/puWIqeOAi+iKgumAiVwiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muazsOaIiOWwlFwiLFxuICBcImNvbnRlbnRcIjogW1wiRXllcyBhcmUgcmFpbmluZyBmb3IgaGVyLFwiLCBcImhlYXJ0IGlzIGhvbGRpbmcgdW1icmVsbGEgZm9yIGhlcixcIiwgXCJ0aGlzIGlzIGxvdmUuXCIsIFwi55y8552b5Li65aW55LiL552A6Zuo77yMXCIsXG4gICAgICAgICAgXCLlv4PljbTkuLrlpbnmiZPnnYDkvJ7vvIxcIiwgXCLov5nlsLHmmK/niLHmg4XjgIJcIl0sXG4gIFwiYmdtXCI6IFwiS2V2aW4gTWFjTGVvZC1TYXBwaGlyZSBJc2xlXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9pbmNvbXBldGVjaC5jb21cIixcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrkuIDmj6HnoILjgIvoioLpgIlcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrnn7Plt53llYTmnKhcIixcbiAgXCJjb250ZW50XCI6IFtcIuaMqOS6humqglwiLCBcIuWTh+eahOS4gOWjsOWwseWTreWHuuadpeeahOWEv+erpeeahOW/g+aDhe+8m1wiLCBcIuaIkeS5n+aDs+imgeaciemCo+enjeW/g+aDheOAglwiXSxcbiAgXCJiZ21cIjogXCJSYWZhZWwgS3J1eC1Ob3N0YWxnaWMgUGlhbm9cIixcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2ZyZWVwZC5jb21cIixcbiAgXCJyZXBvcnRlclwiOiBcIuWQg+ilv+eTnOeahOWwj+S6jOmDjlwiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrmiJHmg7PlkozkvaDkuIDotbfnlJ/mtLvjgItcIixcbiAgXCJhdXRob3JcIjogXCLnjpvnkLPlqJzCt+S8iuS4h+ivuuWkq+WonMK36Iyo57u05aGU6IC25aiDXCIsXG4gIFwiY29udGVudFwiOiBbXCLmiJHmg7PlkozkvaDkuIDotbfnlJ/mtLvlnKjmn5DkuKrlsI/plYfvvIxcIiwgXCLlhbHkuqvml6DlsL3nmoTpu4TmmI/lkoznu7Xnu7XkuI3nu53nmoTpkp/lo7DjgIJcIiwgXCLlnKjov5nkuKrlsI/plYfnmoTml4Xlupfph4zigJTigJRcIiwgXCLlj6TogIHml7bpkp/mlbLlh7rnmoTlvq7lvLHlk43lo7BcIiwgXCLlg4/ml7bpl7Tovbvovbvmu7TokL3jgIJcIixcbiAgICAgICAgICBcIuacieaXtuWAme+8jOWcqOm7hOaYj++8jOiHqumhtualvOafkOS4quaIv+mXtOS8oOadpeesm+WjsO+8jFwiLCBcIuWQueesm+iAheWAmuiRl+eql+eJlu+8jFwiLCBcIuiAjOeql+WPo+Wkp+actemDgemHkemmmeOAglwiLCBcIuatpOWIu+S9oOiLpeS4jeeIseaIke+8jOaIkeS5n+S4jeS8muWcqOaEj+OAglwiLCBcIuWcqOaIv+mXtOS4reWkru+8jOS4gOS4quejgeegluegjOaIkOeahOeCieWtkFwiLCBcIuavj+S4gOWdl+ejgeegluS4iueUu+iRl+S4gOW5heeUu1wiLFxuICAgICAgICAgIFwi5LiA6aKX5b+D77yM5LiA6ImY5biG6Ii577yM5LiA5py1546r55GwXCIsIFwi6ICM6Ieq5oiR5Lus5ZSv5LiA55qE56qX5oi35byg5pybXCIsIFwi6Zuq77yM6Zuq77yM6Zuq44CCXCIsIFwi5L2g5Lya6Lq65oiQ5oiR5Zac5qyi55qE5ae/5Yq/XCIsIFwi5oW15oeS77yM5reh54S277yM5Ya35rygXCIsIFwi5LiA5Lik5Zue54K554eD54Gr5p+055qE5Yi66ICz5aOwXCIsIFwi6aaZ54Of55qE54Gr6IuX55Sx5pe66L2s5byx77yMXCIsXG4gICAgICAgICAgXCLng5/nmoTmnKvmoqLpoqTmipbokZfvvIzpoqTmipbokZdcIiwgXCLnn63lsI/ngbDnmb3nmoTng5/okoJcIiwgXCLov57ngbDng6wg5L2g6YO95oeS5b6X5by56JC9XCIsIFwi6aaZ54Of6YGC6aOe6Iie6L+b54Gr5LitXCJdLFxuICBcImJnbVwiOiBcIlJhZmFlbCBLcnV4LVBvbmRcIixcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2ZyZWVwZC5jb21cIixcbiAgXCJyZXBvcnRlclwiOiBcIuaxh+aWh1wiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrkuZ/mmK/lvq7kupHjgItcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrog6HpgIJcIixcbiAgXCJjb250ZW50XCI6IFtcIuS5n+aYr+W+ruS6ke+8jFwiLCBcIuS5n+aYr+W+ruS6kei/h+WQjuaciOWFieaYjuOAglwiLCBcIuWPquS4jeingeWOu+W5tOW+l+a4uOS8tO+8jFwiLCBcIuS5n+ayoeacieW9k+aXpeeahOW/g+aDheOAglwiLCBcIuS4jeaEv+WLvui1t+ebuOaAne+8jFwiLCBcIuS4jeaVouWHuumXqOeci+aciOOAglwiLCBcIuWBj+WBj+aciOi/m+eql+adpe+8jFwiLCBcIuWus+aIkeebuOaAneS4gOWknOOAglwiXSxcbiAgXCJiZ21cIjogXCJBbGV4YW5kZXIgTmFrYXJhZGEtV2ludGVyXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9mcmVlcGQuY29tXCIsXG4gIFwicmVwb3J0ZXJcIjogXCLmsYfmlodcIlxufSwge1xuICBcInRpdGxlXCI6IFwi44CK6KW/5rSy5puy44CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77yaXCIsXG4gIFwiY29udGVudFwiOiBbXCLlv4bmooXkuIvopb/mtLLvvIzmipjmooXlr4TmsZ/ljJfjgIJcIiwgXCLljZXooavmnY/lrZDnuqLvvIzlj4zprJPpuKbpm4/oibLjgIJcIiwgXCLopb/mtLLlnKjkvZXlpITvvJ/kuKTmoajmoaXlpLTmuKHjgIJcIiwgXCLml6Xmmq7kvK/lirPpo57vvIzpo47lkLnkuYzoh7zmoJHjgIJcIiwgXCLmoJHkuIvljbPpl6jliY3vvIzpl6jkuK3pnLLnv6Dpkr/jgIJcIiwgXCLlvIDpl6jpg47kuI3oh7PvvIzlh7rpl6jph4fnuqLojrLjgIJcIixcbiAgICAgICAgICBcIumHh+iOsuWNl+WhmOeni++8jOiOsuiKsei/h+S6uuWktOOAglwiLCBcIuS9juWktOW8hOiOsuWtkO+8jOiOsuWtkOa4heWmguawtOOAglwiLCBcIue9ruiOsuaAgOiiluS4re+8jOiOsuW/g+W9u+W6lee6ouOAglwiLCBcIuW/humDjumDjuS4jeiHs++8jOS7sOmmluacm+mjnum4v+OAglwiLCBcIum4v+mjnua7oeilv+a0su+8jOacm+mDjuS4iumdkualvOOAglwiLCBcIualvOmrmOacm+S4jeinge+8jOWwveaXpeagj+adhuWktOOAglwiLFxuICAgICAgICAgIFwi5qCP5p2G5Y2B5LqM5puy77yM5Z6C5omL5piO5aaC546J44CCXCIsIFwi5Y235biY5aSp6Ieq6auY77yM5rW35rC05pGH56m657u/44CCXCIsIFwi5rW35rC05qKm5oKg5oKg77yM5ZCb5oSB5oiR5Lqm5oSB44CCXCIsIFwi5Y2X6aOO55+l5oiR5oSP77yM5ZC55qKm5Yiw6KW/5rSy44CCXCJdLFxuICBcImJnbVwiOiBcIuahnOmbslwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9hbWFjaGFtdXNpYy5jaGFnYXNpLmNvbS9cIixcbiAgXCJyZXBvcnRlclwiOiBcIuWQg+ilv+eTnOeahOWwj+S6jOmDjlwiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrkvaDkuI3llpzmrKLnmoTmr4/kuIDlpKnkuI3mmK/kvaDnmoQg44CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya6LS55bCU5Y2X5aSawrfkvanntKLpmL9cIixcbiAgXCJjb250ZW50XCI6IFtcIuS9oOS4jeWWnOasoueahOavj+S4gOWkqeS4jeaYr+S9oOeahFwiLCBcIuS9oOS7heS7heW6pui/h+S6huWugyDml6DorrrkvaDov4fnnYDku4DkuYjmoLfnmoRcIiwgXCLmsqHmnInllpzmgqbnmoTnlJ/mtLvvvIzkvaDpg73msqHmnInnlJ/mtLtcIiwgXCLkvaDml6DpobvljrvniLHvvIzmiJbogIXljrvppa7phZLmiJbogIXlvq7nrJFcIiwgXCLpmLPlhYnlgJLmmKDlnKjmsLTlnZHph4xcIixcbiAgICAgICAgICBcIuWwsei2s+Wkn+S6hu+8jOWmguaenOWug+S7pOS9oOaEieaCplwiLCBcIuW5uOemj+eahOS6uu+8jOaKiuS7luS7rOeahOasouS5kFwiLCBcIuaUvuWcqOW+ruWwj+eahOS6i+eJqemHjO+8jOawuOi/nOS5n+S4jeS8muWJpeWkulwiLCBcIuWxnuS6juavj+S4gOWkqeeahOOAgeWkqeeEtueahOi0ouWvjFwiXSxcbiAgXCJiZ21cIjogXCJ5dXViZW5vaG9zaGlcIixcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vYW1hY2hhbXVzaWMuY2hhZ2FzaS5jb20vXCIsXG4gIFwicmVwb3J0ZXJcIjogXCJOauWuq+iirVwiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIror5fnu4/jgIvoioLpgIlcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrkvZrlkI1cIixcbiAgXCJjb250ZW50XCI6IFtcIuato+aciOW8gOWygVwiLCBcIuS6jOaciOe7gOmmmVwiLCBcIuS4ieaciOahg+iJr1wiLCBcIuWbm+aciOengOiUk1wiLCBcIuS6lOaciOm4o+icqVwiLCBcIuWFreaciOeyvumYs1wiLCBcIuS4g+aciOa1geeBq1wiLCBcIuWFq+aciOacquWkrlwiLCBcIuS5neaciOaOiOiho1wiLCBcIuWNgeaciOiOt+eou1wiLCBcIuiRreaciOa9nOm+mVwiLCBcIuiFiuaciOWYieW5tFwiXSxcbiAgXCJiZ21cIjogXCLlj6Tph4zjga7poqhcIixcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vYW1hY2hhbXVzaWMuY2hhZ2FzaS5jb20vXCIsXG4gIFwicmVwb3J0ZXJcIjogXCLlkIPopb/nk5znmoTlsI/kuozpg45cIlxufSwge1xuICBcInRpdGxlXCI6IFwi44CK5Lqa5b2T55qE6K+F5ZKS44CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5aiB5buJwrflt7Tnibnli5LCt+WPtuiKnVwiLFxuICBcImNvbnRlbnRcIjogW1wi5pyJ5L2g6Ze65Lit5a+G5Y+L77yM6L+Y5pyJ5L2g5ZKM5oiR77yMXCIsIFwi5aW55rip5p+U6ICM576O5Li977yM5oiR5Lus5Zyo6LCI6K+X44CCXCIsIFwi5oiR6K+077ya4oCc5LiA6KGM6K+X5pyJ5pe26KaB5Yeg5Liq5bCP5pe277ybXCIsIFwi5L2G6Iul5pi+5b6X5LiN5YOP5piv5Y2z5bit5LmL5L2c77yMXCIsIFwi5oiR5Lus55qE5o6o5pWy5bCx566X5piv55m95b+Z5rS744CCXCIsIFwi6L+Y5LiN5aaC5byT552A6ISK6IOM6La05Zyo5Zyw6Z2i77yMXCIsXG4gICAgICAgICAgXCLljrvmk6bljqjmiL/lnLDmnb/vvIzmiJblg4/nqbflhYnom4tcIiwgXCLml6DorrrliK7po47kuIvpm6jpg73lv5nnnYDph4fnn7PvvJtcIiwgXCLopoHmiornvo7nmoTlo7Dpn7Pnu4Tnu4flnKjkuIDotbfvvIxcIiwgXCLnnJ/mr5TkuIrpnaLnmoTmtLvlhL/pg73ovpvoi6bvvIzkvYZcIiwgXCLkuIDluK7kurrljbTlkLXlkLXor7TkvaDmmK/mh5LmsYnvvIxcIiwgXCLpk7booYzlrrbjgIHmlZnluIjov5jmnInnpZ7ogYzkurrlkZjvvIxcIixcbiAgICAgICAgICBcIuauiemBk+iAheaJgOiwk+eahOS4luS6uuOAguKAnVwiLCBcIioqKioqKioqKioqKioqKuivneWImuWujO+8jFwiLCBcIumCo+a4qeaflOe+juS4veeahOWls+S6uuaOpeedgOivtO+8jFwiLCBcIuiuuOWkmuS6uuiLpeWPkeeOsOWlueWjsOmfs+i/meS5iFwiLCBcIueUnOe+juiAjOaflOWSjO+8jOW/g+WEv+WwseS8mueLgui3s++8jFwiLCBcIuWlueWbnuetlOaIke+8muKAnOeUn+S4uuWls+S6uumDveefpemBk+KAleKAlVwiLFxuICAgICAgICAgIFwi5bC9566h5Zyo5a2m5qCh6YeM5rKh5Lq66L+Z5LmI6K+04oCV4oCVXCIsIFwi6KaB5oOz576O5Li95oiR5Lus5bCx5b6X5Yuk5Yqz5L2c44CC4oCdXCIsIFwi5oiR6K+077ya4oCc5oiR5pat6KiA6Ieq5LuO5Lqa5b2T5aCV6JC977yMXCIsIFwi5YaN5rKh5pyJ5aW95Lic6KW/5LiN6ZyA5Yuk5Yqz5L2c44CCXCIsIFwi5oGL5Lq65Lus5pu+57uP6K6k5Li654ix5oOF5bqU5b2TXCIsIFwi5YWF5ruh552A6auY6LS15q635Yuk56S85Luq5pyJ5pa577yMXCIsXG4gICAgICAgICAgXCLku5bku6zlsLHplb/lkIHnn63lj7nlvJXnu4/mja7lhbjvvIxcIiwgXCLlpoLppbHlrabkuYvlo6vkuL7lh7rlhYjkvovkuIfljYPvvJtcIiwgXCLlpoLku4rov5nkuovkvLzkuY7lj6/nrpflpJ/lgbfmh5LjgILigJ1cIiwgXCLor7TliLDkuobniLHmg4XmiJHku6zmsonlr4LkuIDniYfvvJtcIiwgXCLnmb3ml6XkvZnng6zlnKjmiJHku6znnLzliY3nh4PlrozvvIxcIiwgXCLlnKjpgqPmkYfmm7PnnYDok53nu7/oibLnmoTlpKnovrnvvIxcIixcbiAgICAgICAgICBcIuacieS4gOW8r+aui+aciO+8jOa2iOejqOW+l+Wmgui0neWjs1wiLCBcIuiiq+aXtumXtOS5i+awtOWGsuWIt++8jOW9k+Wug+i1t+iQvVwiLCBcIue+pOaYn+S5i+mXtOOAgeWNh+mZjeWcqOaXpeaXpeW5tOW5tOOAglwiLCBcIuaIkeacieS4gOS4quW/g+aAneWPquaDs+WvueS9oOiogO+8jFwiLCBcIuaIkeaDs+ivtOS9oOW+iOe+juS4ve+8jOaIkeS5n+erreWKm1wiLCBcIueUqOWPpOiAgeiAjOmrmOi0teeahOaWueW8j+eIsei/h+S9oO+8m1wiLFxuICAgICAgICAgIFwi6L+Z55yL6LW35p2l55qG5aSn5qyi5Zac77yM5L2G5oiR5LusXCIsIFwi5YaF5b+D55ay5oOr5Y205Ly86YKj5Lit56m65LiA6L2u44CCXCJdLFxuICBcImJnbVwiOiBcIkpvc2ggV29vZHdhcmQtQXV0dW1uXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL2pvc2h3b29kd2FyZC5jb20vXCIsXG4gIFwicmVwb3J0ZXJcIjogXCLlj7Pnn7PlhYjnlJ9cIlxufSwge1xuICBcInRpdGxlXCI6IFwi5bC86YeH5LqU5YiZXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5bC86YeHXCIsXG4gIFwiY29udGVudFwiOiBbXCLmr4/kuIDkuKrkuI3mm77otbfoiJ7nmoTml6XlrZDvvIzpg73mmK/lr7nnlJ/lkb3nmoTovpzotJ/jgIJcIiwgXCLlhbblrp7kurrot5/moJHmmK/kuIDmoLfnmoTvvIzotormmK/lkJHlvoDpq5jlpITnmoTpmLPlhYnvvIzlroPnmoTmoLnlsLHotoropoHkvLjlkJHpu5HmmpfnmoTlnLDlupXjgIJcIiwgXCLkuIDkuKrkurrnn6XpgZPoh6rlt7HkuLrku4DkuYjogIzmtLvvvIzlsLHlj6/ku6Xlv43lj5fku7vkvZXkuIDnp43nlJ/mtLvjgIJcIixcbiAgICAgICAgICBcIuS9huWHoeS4jeiDveadgOatu+S9oOeahO+8jOacgOe7iOmDveS8muS9v+S9oOabtOW8uuWkp+OAglwiLCBcIuW9k+S9oOWHneinhua3sea4iuaXtu+8jOa3sea4iuS5n+WcqOWHneinhuedgOS9oOOAglwiXSxcbiAgXCJiZ21cIjogXCJLZXZpbiBNYWNMZW9kLUJldGhsZWhlbVwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vaW5jb21wZXRlY2guY29tXCIsXG4gIFwicmVwb3J0ZXJcIjogXCLlm5vlpJVcIlxufSwge1xuICBcInRpdGxlXCI6IFwi5rCR5Zu957uT5ama6K+B5Lmm6KqT6K+NXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5L2a5ZCNXCIsXG4gIFwiY29udGVudFwiOiBbXCLkuKTlp5PogZTlp7vvvIzkuIDloILnvJTnuqbvvIxcIiwgXCLoia/nvJjmsLjnu5PvvIzljLnphY3lkIznp7DjgIJcIiwgXCLnnIvmraTml6XmoYPoirHngbzngbzvvIzlrpzlrqTlrpzlrrbvvIxcIiwgXCLljZzku5blubTnk5znk57nu7Xnu7XvvIzlsJTmmIzlsJTngr3jgIJcIiwgXCLosKjku6Xnmb3lpLTkuYvnuqbvvIzkuablkJHpuL/nrLrvvIxcIiwgXCLlpb3lsIbnuqLlj7bkuYvnm5/vvIzovb3mmI7puLPosLHjgIJcIiwgXCLmraTor4HjgIJcIl0sXG4gIFwiYmdtXCI6IFwi5Y+k6YeM44Gu6aKoXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL2FtYWNoYW11c2ljLmNoYWdhc2kuY29tL1wiLFxuICBcInJlcG9ydGVyXCI6IFwi5rGH5paHXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiuaXoOW4uOOAi1wiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mumbquiOsVwiLFxuICBcImNvbnRlbnRcIjogW1wiV2hpbHN0IHNraWVzIGFyZSBibHVlIGFuZCBicmlnaHRcIiwgXCJXaGlsc3QgZmxvd2VycyBhcmUgZ2F5XCIsIFwiV2hpbHN0IGV5ZXMgdGhhdCBjaGFuZ2UgZXJlIG5pZ2h0XCIsXG4gICAgICAgICAgXCJNYWtlIGdsYWQgdGhlIGRheVwiLCBcIldoaWxzdCB5ZXQgdGhlIGNhbG0gaG91cnMgY3JlZXBcIiwgXCJEcmVhbSB0aG91LWFuZCBmcm9tIHRoeSBzbGVlcFwiLFxuICAgICAgICAgIFwiVGhlbiB3YWtlIHRvIHdlZXBcIiwgXCLotoHlpKnnqbrov5jmmI7lqprvvIzolJrok51cIiwgXCLotoHnnYDoirHmnLXpspzoibNcIiwgXCLotoHnnLznnZvnnIvmnaXkuIDliIfnvo7lpb1cIiwgXCLotoHlpJzluZXov5jmsqHpmY3kuLRcIiwgXCLlkbUg6LaB546w5Zyo5pe25rWB6L+Y5bmz6Z2ZXCIsIFwi5YGa5L2g55qE5qKm5ZCnIOS4lOaGqeaBr1wiLCBcIuetiemGkuadpeWGjeWTreazo1wiXSxcbiAgXCJiZ21cIjogXCJSYWZhZWwgS3J1eC1Ob3N0YWxnaWMgUGlhbm9cIixcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2ZyZWVwZC5jb21cIixcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrmiJHmm77nu4/niLHov4fkvaDjgItcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrkuprljoblsbHlpKfCt+iwouWwlOebluiAtue7tOWlh8K35pmu5biM6YeRXCIsXG4gIFwiY29udGVudFwiOiBbXCLmiJHmm77nu4/niLHov4fkvaDvvJrniLHmg4XvvIzkuZ/orrhcIiwgXCLlnKjmiJHnmoTlv4PngbXph4zov5jmsqHmnInlrozlhajmtojkuqHvvIxcIiwgXCLkvYbmhL/lroPkuI3kvJrlho3ljrvmiZPmibDkvaDvvIxcIiwgXCLmiJHkuZ/kuI3mg7Plho3orqnkvaDpmr7ov4fmgrLkvKTjgIJcIiwgXCLmiJHmm77nu4/pu5jpu5jml6Dor63lnLDjgIHmr6vml6DmjIfmnJvlnLDniLHov4fkvaDvvIxcIixcbiAgICAgICAgICBcIuaIkeaXouW/jeWPl+edgOe+nuaAr++8jOWPiOW/jeWPl+edgOWrieWmkueahOaKmOejqO+8jFwiLCBcIuaIkeabvue7j+mCo+agt+ecn+ivmuOAgemCo+agt+a4qeaflOWcsOeIsei/h+S9oO+8jFwiLCBcIuS9huaEv+S4iuW4neS/neS9keS9oO+8jFwiLCBcIuWPpuS4gOS4quS6uuS5n+S8muWDj+aIkeS4gOagt+WcsOeIseS9oFwiXSxcbiAgXCJiZ21cIjogXCJKb3NoIFdvb2R3YXJkLVNoaXBzLU5vVm94XCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cO+8mi8vam9zaHdvb2R3YXJkLmNvbS9cIixcbiAgXCJyZXBvcnRlclwiOiBcIuaxh+aWh1wiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrmg7bnhLblvZXjgIvoioLpgIlcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrotLnlsJTljZflpJrCt+S9qee0oumYv1wiLFxuICBcImNvbnRlbnRcIjogW10sXG4gIFwiYmdtXCI6IFwiUmFmYWVsIEtydXgtUG9uZFwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vZnJlZXBkLmNvbVwiLFxuICBcInJlcG9ydGVyXCI6IFwiTmrnvr3lh6FcIlxufSwge1xuICBcInRpdGxlXCI6IFwi44CK5ZGo5Y2XwrflhbPpm47jgItcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJpcIixcbiAgXCJjb250ZW50XCI6IFtcIuWFs+WFs+mbjum4oO+8jOWcqOays+S5i+a0suOAgueqiOeqlea3keWls++8jOWQm+WtkOWlvemAkeOAglwiLCBcIuWPguW3ruiNh+iPnO+8jOW3puWPs+a1geS5i+OAgueqiOeqlea3keWls++8jOWvpOWvkOaxguS5i+OAglwiLCBcIuaxguS5i+S4jeW+l++8jOWvpOWvkOaAneacjeOAguaCoOWTieaCoOWTie+8jOi+l+i9rOWPjeS+p+OAglwiLCBcIuWPguW3ruiNh+iPnO+8jOW3puWPs+mHh+S5i+OAgueqiOeqlea3keWls++8jOeQtOeRn+WPi+S5i+OAglwiLFxuICAgICAgICAgIFwi5Y+C5beu6I2H6I+c77yM5bem5Y+z6Iq85LmL44CC56qI56qV5reR5aWz77yM6ZKf6byT5LmQ5LmL44CCXCJdLFxuICBcImJnbVwiOiBcIuW8peeUn+OBruepuuOBq1wiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9hbWFjaGFtdXNpYy5jaGFnYXNpLmNvbS9cIixcbiAgXCJyZXBvcnRlclwiOiBcIuWbm+WklVwiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrkuIDliarmooXCt+iIn+i/h+WQtOaxn+OAi1wiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muiSi+aNt1wiLFxuICBcImNvbnRlbnRcIjogW1wi5LiA54mH5pil5oSB5b6F6YWS5rWH44CC5rGf5LiK6Iif5pGH44CC5qW85LiK5biY5oub44CC56eL5aiY5bqm5LiO5rOw5aiY5aiH44CC6aOO5Y+I6aOY6aOY44CC6Zuo5Y+I6JCn6JCn44CCXCIsIFwi5L2V5pel5b2S5a625rSX5a6i6KKN44CC6ZO25a2X56yZ6LCD44CC5b+D5a2X6aaZ54On44CC5rWB5YWJ5a655piT5oqK5Lq65oqb44CC57qi5LqG5qix5qGD44CC57u/5LqG6Iqt6JWJ44CCXCJdLFxuICBcImJnbVwiOiBcIumiqOe0i1wiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9tdXNpYy5nZW9jaXRpZXMuanAvaGFrdXVfYW1hYmluZS9cIixcbiAgXCJyZXBvcnRlclwiOiBcIuWQg+ilv+eTnOeahOWwj+S6jOmDjlwiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrpo57puJ/pm4bjgIvoioLpgIlcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrms7DmiIjlsJRcIixcbiAgXCJjb250ZW50XCI6IFtcIlRoZSB3YXRlciBpbiBhIHZlc3NlbCBpcyBzcGFya2xpbmc7XCIsIFwidGhlIHdhdGVyIGluIHRoZSBzZWEgaXMgZGFyay5cIixcbiAgICAgICAgICBcIlRoZSBzbWFsbCB0cnV0aCBoYXMgd29yZHMgdGhhdCBhcmUgY2xlYXI7XCIsIFwidGhlIGdyZWF0IHRydXRoIGhhcyBncmVhdCBzaWxlbmNlLlwiLCBcIuS4gOadr+awtOaYr+a4hea+iOeahO+8jFwiLFxuICAgICAgICAgIFwi6ICM5rW35rC05Y205piv6buR6Imy55qE44CCXCIsIFwi5bCx5YOP5bCP55qE6YGT55CG5Y+v5Lul6K+05piO77yMXCIsIFwi55yf5q2j55qE5aSn6YGT55CG5Y205piv5rKJ6buY55qE44CCXCJdLFxuICBcImJnbVwiOiBcIktldmluIE1hY0xlb2QtQmV0aGxlaGVtXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9pbmNvbXBldGVjaC5jb21cIixcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrpuYrmoaXku5nCt+e6pOS6keW8hOW3p+OAi1wiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muenpuinglwiLFxuICBcImNvbnRlbnRcIjogW1wi57qk5LqR5byE5ben77yM6aOe5pif5Lyg5oGo77yM6ZO25rGJ6L+i6L+i5pqX5bqm44CC6YeR6aOO546J6Zyy5LiA55u46YCi77yM5L6/6IOc5Y205Lq66Ze05peg5pWw44CCXCIsIFwi5p+U5oOF5Ly85rC077yM5L2z5pyf5aaC5qKm77yM5b+N6aG+6bmK5qGl5b2S6Lev77yf5Lik5oOF6Iul5piv5LmF6ZW/5pe277yM5Y+I5bKC5Zyo5pyd5pyd5pqu5pqu44CCXCJdLFxuICBcImJnbVwiOiBcImthbXVuYWJpXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL211c2ljLmdlb2NpdGllcy5qcC9oYWt1dV9hbWFiaW5lL1wiLFxuICBcInJlcG9ydGVyXCI6IFwi5rGH5paHXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiuS9oOaYr+S6uumXtOWbm+aciOWkqeOAi1wiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muael+W+veWboFwiLFxuICBcImNvbnRlbnRcIjogW1wi5oiR6K+05L2g5piv5Lq66Ze055qE5Zub5pyI5aSp77ybXCIsIFwi56yR5ZON54K55Lqu5LqG5Zub6Z2i6aOO77ybXCIsIFwi6L2754G15Zyo5pil55qE5YWJ6Imz5Lit5Lqk6Iie552A5Y+Y44CCXCIsIFwi5L2g5piv5Zub5pyI5pep5aSp6YeM55qE5LqR54Of77yMXCIsIFwi6buE5piP5ZC5552A6aOO55qE6L2v77yMXCIsIFwi5pif5a2Q5Zyo5peg5oSP5Lit6Zeq77yMXCIsIFwi57uG6Zuo54K55rSS5Zyo6Iqx5YmN44CCXCIsXG4gICAgICAgICAgXCLpgqPovbvvvIzpgqPlqInlqbfvvIzkvaDmmK/vvIxcIiwgXCLpspzlpo3nmb7oirHnmoTlhqDlhpXkvaDmiLTnnYDvvIxcIiwgXCLkvaDmmK/lpKnnnJ/vvIzluoTkuKXvvIxcIiwgXCLkvaDmmK/lpJzlpJznmoTmnIjlnIbjgIJcIiwgXCLpm6rljJblkI7pgqPniYfpuYXpu4TvvIzkvaDlg4/vvJtcIiwgXCLmlrDpspzliJ3mlL7oir3nmoTnu7/vvIzkvaDmmK/vvJtcIiwgXCLmn5Tlq6nllpzmgqbvvIxcIixcbiAgICAgICAgICBcIuawtOWFiea1ruWKqOedgOS9oOaipuacn+W+heS4reeZveiOsuOAglwiLCBcIuS9oOaYr+S4gOagkeS4gOagkeeahOiKseW8gO+8jFwiLCBcIuaYr+eHleWcqOaigemXtOWRouWWg++8jFwiLCBcIuKAlOKAlOS9oOaYr+eIse+8jOaYr+aalu+8jOaYr+W4jOacm++8jFwiLCBcIuS9oOaYr+S6uumXtOeahOWbm+aciOWkqe+8gVwiXSxcbiAgXCJiZ21cIjogXCJSYWZhZWwgS3J1eC1Qb25kXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9mcmVlcGQuY29tXCIsXG4gIFwicmVwb3J0ZXJcIjogXCLlkIPopb/nk5znmoTlsI/kuozpg45cIlxufSwge1xuICBcInRpdGxlXCI6IFwi44CK5pyq6YCJ5oup55qE6Lev44CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya572X5Lyv54m5wrflvJfnvZfmlq/niblcIixcbiAgXCJjb250ZW50XCI6IFtcIum7hOagkeael+mHjOWIhuWHuuS4pOadoei3r++8jFwiLCBcIuWPr+aDnOaIkeS4jeiDveWQjOaXtua2iei2s++8jFwiLCBcIuaIkeWcqOmCo+i3r+WPo+S5heS5heS8q+eri++8jFwiLCBcIuaIkeWQkeedgOS4gOadoei3r+aegeebruacm+WOu++8jFwiLCBcIuebtOWIsOWug+a2iOWkseWcqOS4m+ael+a3seWkhOOAglwiLCBcIuS9huaIkeWNtOmAieaLqeS6huWPpuWkluS4gOadoei3r++8jFwiLFxuICAgICAgICAgIFwi5a6D6I2S6I2J6JCL6JCL77yM5Y2B5YiG5bm95a+C77yMXCIsIFwi5pi+5b6X5pu06K+x5Lq677yM5pu0576O5Li977ybXCIsIFwi6Jm954S25Zyo6L+Z5p2h5bCP6Lev5LiK77yMXCIsIFwi5b6I5bCR55WZ5LiL5peF5Lq655qE6Laz6L+544CCXCIsIFwi6YKj5aSp5riF5pmo6JC95Y+25ruh5Zyw77yMXCIsIFwi5Lik5p2h6Lev6YO95pyq57uP6ISa5Y2w5rGh5p+T44CCXCIsIFwi5ZWK77yM55WZ5LiL5LiA5p2h6Lev562J5pS55pel5YaN6KeBIVwiLFxuICAgICAgICAgIFwi5L2G5oiR55+l6YGT6Lev5b6E5bu257u15peg5bC95aS0LFwiLCBcIuaBkOaAleaIkemavuS7peWGjeWbnui/lOOAglwiLCBcIuS5n+iuuOWkmuWwkeW5tOWQjuWcqOafkOS4quWcsOaWue+8jFwiLCBcIuaIkeWwhui9u+WjsOWPueaBr+WwhuW+gOS6i+Wbnumhvu+8mlwiLCBcIuS4gOeJh+agkeael+mHjOWIhuWHuuS4pOadoei3r++8jFwiLCBcIuiAjOaIkemAieaLqeS6huS6uui/ueabtOWwkeeahOS4gOadoe+8jFwiLFxuICAgICAgICAgIFwi5LuO5q2k5Yaz5a6a5LqG5oiR5LiA55Sf55qE6YGT6Lev44CCXCJdLFxuICBcImJnbVwiOiBcIk9uV2FsZGVuUG9uZFwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vYXVkaW9uYXV0aXguY29tL1wiLFxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiue6ouixhuOAi1wiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mumXu+S4gOWkmlwiLFxuICBcImNvbnRlbnRcIjogW1wi55u45oCd5piv5LiN5YGa5aOw55qE6JqK5a2QXCIsIFwi5YG35YG35Zyw5ZKs5LqG5LiA5Y+jXCIsIFwi6Zmh54S255eb5LqG5LiA5LiLXCIsIFwi5Lul5ZCO5L6/5piv5LiA6Zi155qE5aWH55eSXCJdLFxuICBcImJnbVwiOiBcIkFsZXhhbmRlciBOYWthcmFkYS1XaW50ZXJcIixcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2ZyZWVwZC5jb21cIixcbiAgXCJyZXBvcnRlclwiOiBcIuWbm+WklVwiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrljZfmrYzlrZDor43kuozpppYgLyDmlrDmt7vlo7Dmnajmn7Pmnp3or43jgItcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrmuKnluq3nraBcIixcbiAgXCJjb250ZW50XCI6IFtcIuS4gOWwuua3see6ouiDnOabsuWwmO+8jOWkqeeUn+aXp+eJqeS4jeWmguaWsOOAglwiLCBcIuWQiOasouahg+aguOe7iOWgquaBqO+8jOmHjOiuuOWFg+adpeWIq+acieS6uuOAglwiLCBcIuS6leW6leeCueeBr+a3seeDm+S8iu+8jOWFsemDjumVv+ihjOiOq+WbtOaji+OAglwiLCBcIueOsuePkemqsOWtkOWuiee6ouixhu+8jOWFpemqqOebuOaAneefpeS4jeefpeOAglwiXSxcbiAgXCJiZ21cIjogXCJuZXphbWVcIixcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vbXVzaWMuZ2VvY2l0aWVzLmpwL2hha3V1X2FtYWJpbmUvXCIsXG4gIFwicmVwb3J0ZXJcIjogXCLmsYfmlodcIlxufSwge1xuICBcInRpdGxlXCI6IFwi44CK5YOP6L+Z5qC357uG57uG5Zyw5ZCs44CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi546b55Cz5aicwrfkvIrkuIfor7rlpKvlqJzCt+iMqOe7tOWhlOiAtuWog1wiLFxuICBcImNvbnRlbnRcIjogW1wi5YOP6L+Z5qC357uG57uG5Zyw5ZCsXCIsIFwi5YOP6L+Z5qC357uG57uG5Zyw5ZCs77yMXCIsIFwi5aaC5rKz5Y+j5Yed56We5YC+5ZCs6Ieq5bex55qE5rqQ5aS044CCXCIsIFwi5YOP6L+Z5qC35rex5rex5Zyw5ZeF5LiA5py15bCP6Iqx77yMXCIsIFwi55u05Yiw55+l6KeJ5YyW5Li65LmM5pyJ44CCXCIsIFwi5YOP6L+Z5qC377yM5Zyo6JSa6JOd55qE56m65rCU6YeMXCIsIFwi5rq26L+b5LqG5peg5bqV55qE5ri05pyb44CCXCIsXG4gICAgICAgICAgXCLlg4/ov5nmoLfvvIzlnKjluorljZXnmoTolJrok53ph4xcIiwgXCLlranlrZDpgaXmnJvorrDlv4bnmoTov5zmlrnjgIJcIiwgXCLlg4/ov5nmoLfvvI7ojrLoirHoiKznmoTlsJHlubRcIiwgXCLpu5jpu5jkvZPpqozooYDnmoTmuKnms4lcIiwgXCLlsLHlg4/ov5nmoLfvvIzkuI7niLHmg4Xnm7jmgYtcIiwgXCLlsLHlg4/ov5nmoLfvvIzokL3lhaXmt7HmuIrjgIJcIl0sXG4gIFwiYmdtXCI6IFwiR3JlZW5MZWF2ZXNcIixcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2F1ZGlvbmF1dGl4LmNvbS9cIixcbiAgXCJyZXBvcnRlclwiOiBcIuaxh+aWh1wiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrpo57puJ/pm4bjgIvoioLpgIlcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrms7DmiIjlsJRcIixcbiAgXCJjb250ZW50XCI6IFtcIkFmdGVyIHRoZSBuaWdodCBJIGJ1cm5lZCBhbGwgbWVtb3J5LFwiLCBcIm15IGRyZWFtIGJlY29tZXMgdHJhbnNwYXJlbnQsXCIsXG4gICAgICAgICAgXCJhcyBJIHRyYXNoZWQgYWxsIHllc3RlcmRheXMsXCIsIFwibXkgc3RlcCBiZWNvbWVzIGxpZ2h0ZXIuXCIsIFwi5pyJ5LiA5Liq5aSc5pma5oiR54On5q+B5LqG5omA5pyJ55qE6K6w5b+G77yMXCIsIFwi5LuO5q2k5oiR55qE5qKm5bCx6YCP5piO5LqG77ybXCIsXG4gICAgICAgICAgXCLmnInkuIDkuKrml6nmmajmiJHmiZTmjonkuobmiYDmnInnmoTmmKjlpKnvvIxcIiwgXCLku47mraTmiJHnmoTohJrmraXlsLHovbvnm4jkuobjgIJcIl0sXG4gIFwiYmdtXCI6IFwiU3VuZGF5c0NoaWxkXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9hdWRpb25hdXRpeC5jb20vXCIsXG4gIFwicmVwb3J0ZXJcIjogXCLlj7Pnn7PlhYjnlJ9cIlxufSwge1xuICBcInRpdGxlXCI6IFwi44CK6ZOc5a6Y56qR55O35Zmo6aKY6K+X5LqM5Y2B5LiA6aaW44CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5L2a5ZCNXCIsXG4gIFwiY29udGVudFwiOiBbXCLlkJvnlJ/miJHmnKrnlJ8s5oiR55Sf5ZCb5bey6ICB44CCXCIsIFwi5ZCb5oGo5oiR55Sf6L+fLOaIkeaBqOWQm+eUn+aXqeOAglwiLCBcIuWQm+eUn+aIkeacqueUnyzmiJHnlJ/lkJvlt7LogIHjgIJcIiwgXCLmgajkuI3nlJ/lkIzml7Ys5pel5pel5LiO5ZCb5aW944CCXCIsIFwi5oiR55Sf5ZCb5pyq55SfLOWQm+eUn+aIkeW3suiAgeOAglwiLCBcIuaIkeemu+WQm+Wkqea2ryzlkJvpmpTmiJHmtbfop5LjgIJcIixcbiAgICAgICAgICBcIuaIkeeUn+WQm+acqueUnyzlkJvnlJ/miJHlt7LogIHjgIJcIiwgXCLljJbonbbljrvlr7voirEs5aSc5aSc5qCW6Iqz6I2J44CCXCJdLFxuICBcImJnbVwiOiBcIumiqOe0i1wiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9tdXNpYy5nZW9jaXRpZXMuanAvaGFrdXVfYW1hYmluZS9cIixcbiAgXCJyZXBvcnRlclwiOiBcIuaxh+aWh1wiXG59LCB7XG4gIFwidGl0bGVcIjogXCLnjovlsJTlvrflm5vliJlcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrnjovlsJTlvrdcIixcbiAgXCJjb250ZW50XCI6IFtcIldlIGFyZSBhbGwgaW4gdGhlIGd1dHRlciwgYnV0IHNvbWUgb2YgdXMgYXJlIGxvb2tpbmcgYXQgdGhlIHN0YXJzLlwiLCBcIuaIkeS7rOmDveWcqOmYtOayn+mHjO+8jOS9huS7jeacieS6uuS7sOacm+aYn+epuuOAglwiLFxuICAgICAgICAgIFwiV2hlbiBJIHdhcyB5b3VuZywgSSB0aG91Z2h0IG1vbmV5IHdhcyBldmVyeXRoaW5nLiBOb3cgSSdtIG9sZCBlbm91Z2ggdG8ga25vdyB0aGF0IGl0IGlzIHRydWUuXCIsXG4gICAgICAgICAgXCLlubTovbvml7bmiJHku6XkuLrpkrHlsLHmmK/kuIDliIfvvIznjrDlnKjogIHkuobmiY3nn6XpgZPnoa7lrp7lpoLmraTjgIJcIiwgXCJCZSB5b3Vyc2VsZiwgZXZlcnlvbmUgZWxzZSBpcyBhbHJlYWR5IHRha2VuLlwiLCBcIuWBmuS9oOiHquW3se+8jOWboOS4uuWIq+S6uumDveacieS6uuWBmuS6huOAglwiLFxuICAgICAgICAgIFwiVG8gbG92ZSBvbmVzZWxmIGlzIHRoZSBiZWdpbm5pbmcgb2YgYSBsaWZlbG9uZyByb21hbmNlLlwiLCBcIueIseiHquW3seaYr+e7iOi6q+a1qua8q+eahOW8gOWni+OAglwiXSxcbiAgXCJiZ21cIjogXCJLZXZpbiBNYWNMZW9kLUJldGhsZWhlbVwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vaW5jb21wZXRlY2guY29tXCIsXG4gIFwicmVwb3J0ZXJcIjogXCLlj7Pnn7PlhYjnlJ9cIlxufSwge1xuICBcInRpdGxlXCI6IFwi5q2M5b635LiJ5YiZXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5q2M5b63XCIsXG4gIFwiY29udGVudFwiOiBbXCJJZiB3aG8gaXMgdGhlIGdhbWUgb2YgbGlmZe+8jFwiLCBcImhlIGFjY29tcGxpc2hlcyBub3RoaW5n77ybXCIsIFwiV2hvIGNhbm5vdCBjb250cm9sIGhpbXNlbGbvvIxcIixcbiAgICAgICAgICBcImhlIGlzIGFsd2F5cyBhIHNsYXZl44CCXCIsIFwi6LCB6Iul5ri45oiP5Lq655Sf77yM5LuW5bCx5LiA5LqL5peg5oiQ77yb6LCB5LiN6IO95Li75a6w6Ieq5bex77yM5L6/5rC46L+c5piv5LiA5Liq5aW06Zq244CCXCIsXG4gICAgICAgICAgXCJJZiBJIGxvdmUgeW91LCB3aGF0IGJ1c2luZXNzIGlzIGl0IG9mIHlvdXJzP1wiLCBcIuaIkeeIseS9oO+8jOS4juS9oOaXoOWFs+OAglwiLFxuICAgICAgICAgIFwiXFxcIkRvIHlvdSBrbm93IHdoeSB5b3UgY2xvc2UgeW91ciBleWVzIHdoZW4geW91IGtpc3M/XFxcIlwiLFxuICAgICAgICAgIFwiXFxcImJlY2F1c2UgdGhleSBzaGluZSB0b28gbXVjaCBvbiBlYWNoIG90aGVyLlxcXCJcIiwgXCLigJznn6XpgZPkuLrku4DkuYjkurLlkLvnmoTml7blgJnopoHpl63nnYDlj4znnLzlkJfvvJ/igJ1cIiwgXCLigJzlm6DkuLrku5bku6zlvbzmraTpg73lpKrpl6rogIDjgILigJ1cIl0sXG4gIFwiYmdtXCI6IFwiS2V2aW4gTWFjTGVvZC1PaCBIb2x5IE5pZ2h0XCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9pbmNvbXBldGVjaC5jb21cIixcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrmoqbkuI7or5fjgItcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrog6HpgIJcIixcbiAgXCJjb250ZW50XCI6IFtcIumDveaYr+W5s+W4uOe7j+mqjO+8jFwiLCBcIumDveaYr+W5s+W4uOW9seixoe+8jFwiLCBcIuWBtueEtua2jOWIsOaipuS4readpe+8jFwiLCBcIuWPmOW5u+WHuuWkmuWwkeaWsOWlh+iKseagtyFcIiwgXCLpg73mmK/lubPluLjmg4XmhJ/vvIxcIiwgXCLpg73mmK/lubPluLjoqIDor63vvIxcIiwgXCLlgbbnhLbnorDnnYDkuKror5fkurrvvIxcIiwgXCLlj5jlubvlh7rlpJrlsJHmlrDlpYfor5flj6UhXCIsXG4gICAgICAgICAgXCLphonov4fmiY3nn6XphZLmtZPvvIxcIiwgXCLniLHov4fmiY3nn6Xmg4Xph43igJTigJRcIiwgXCLkvaDkuI3og73lgZrmiJHnmoTor5fvvIxcIiwgXCLmraPlpoLmiJHkuI3og73lgZrkvaDnmoTmoqbjgIJcIl0sXG4gIFwiYmdtXCI6IFwiS2V2aW4gTWFjTGVvZC1TYXBwaGlyZSBJc2xlXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9pbmNvbXBldGVjaC5jb21cIixcbiAgXCJyZXBvcnRlclwiOiBcIk5q5a6r6KKtXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiuWQkeedgOaYjuS6rumCo+aWueOAi1wiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mumHkeWtkOe+jueOslwiLFxuICBcImNvbnRlbnRcIjogW1wi5ZCR552A5piO5Lqu6YKj5pa544CCXCIsIFwi5ZCR552A5piO5Lqu6YKj5pa544CCXCIsIFwi5ZOq5oCV5LiA54mH5Y+25a2QXCIsIFwi5Lmf6KaB5ZCR552A5pel5YWJ5rSS5LiL55qE5pa55ZCR44CCXCIsIFwi54GM5pyo5Lib5Lit55qE5bCP6I2J5ZWK44CCXCIsIFwi5ZCR552A5piO5Lqu6YKj5pa5XCIsIFwi5ZCR552A5piO5Lqu6YKj5pa544CCXCIsIFwi5ZOq5oCV54On54Sm5LqG57+F6IaAXCIsXG4gICAgICAgICAgXCLkuZ/opoHpo57lkJHnga/ngavpl6rng4HnmoTmlrnlkJHjgIJcIiwgXCLlr5LlpJzph4znmoTpo57omavllYrjgIJcIiwgXCLlkJHnnYDmmI7kuq7pgqPmlrlcIiwgXCLlkJHnnYDmmI7kuq7pgqPmlrnjgIJcIiwgXCLlk6rmgJXlj6rmmK/liIblr7jnmoTlrr3mlZ5cIiwgXCLkuZ/opoHlkJHnnYDpmLPlhYnnhaflsITnmoTmlrnlkJHjgIJcIiwgXCLkvY/lnKjpg73kvJrnmoTlranlrZDku6zllYrjgIJcIl0sXG4gIFwiYmdtXCI6IFwiU3VuZGF5c0NoaWxkXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9hdWRpb25hdXRpeC5jb20vXCIsXG4gIFwicmVwb3J0ZXJcIjogXCLlkIPopb/nk5znmoTlsI/kuozpg45cIlxufSwge1xuICBcInRpdGxlXCI6IFwi44CK6KGl5YG/44CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya6Im+57Gz6I6Jwrfni4Tph5Hmo65cIixcbiAgXCJjb250ZW50XCI6IFtcIuS4uuavj+S4gOS4queLguWWnOeahOeerOmXtFwiLCBcIuaIkeS7rOW/hemhu+WBv+S7peeXm+iLpuiHs+aegVwiLCBcIuWIuueXm+WSjOmipOaKlu+8jOWSjOeLguWWnOaIkOato+avlFwiLCBcIuS4uuavj+S4gOS4quWPr+eIseeahOaXtuWIu1wiLCBcIuW/heWBv+S7peWkmuW5tOeahOS7mOWHulwiLCBcIui+m+mFuOS6ieWkuueahOWNiuWIhuWFq+WOmFwiLCBcIuWSjOa1uOa7oeazquawtOeahOmSseeusVwiLCBcIuS9nOiAhe+8muiJvuexs+iOicK354uE6YeR5qOuXCJdLFxuICBcImJnbVwiOiBcIktldmluIE1hY0xlb2QtT2ggSG9seSBOaWdodFwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vaW5jb21wZXRlY2guY29tXCIsXG4gIFwicmVwb3J0ZXJcIjogXCLmsYfmlodcIlxufSwge1xuICBcInRpdGxlXCI6IFwi44CK5riF5bmz6LCD44CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5p2O55m9XCIsXG4gIFwiY29udGVudFwiOiBbXCLkupHmg7PooaPoo7PoirHmg7PlrrnvvIwg5pil6aOO5ouC5qeb6Zyy5Y2O5rWT44CCXCIsIFwi6Iul6Z2e576k546J5bGx5aS06KeB77yMIOS8muWQkeeRtuWPsOaciOS4i+mAouOAglwiLCBcIuS4gOaenee6ouiJs+mcsuWHnemmme+8jCDkupHpm6jlt6vlsbHmnonmlq3ogqDjgIJcIiwgXCLlgJ/pl67msYnlrqvosIHlvpfkvLzvvJ8g5Y+v5oCc6aOe54eV5YCa5paw5aaG44CCXCIsXG4gICAgICAgICAgXCLlkI3oirHlgL7lm73kuKTnm7jmrKLvvIwg6ZW/5b6X5ZCb546L5bim56yR55yL44CCXCIsIFwi6Kej6YeK5pil6aOO5peg6ZmQ5oGo77yMIOayiemmmeS6reWMl+WAmumYkeW5suOAglwiXSxcbiAgXCJiZ21cIjogXCJrYW11bmFiaVwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9tdXNpYy5nZW9jaXRpZXMuanAvaGFrdXVfYW1hYmluZS9cIixcbiAgXCJyZXBvcnRlclwiOiBcIuaxh+aWh1wiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrlvZPkvaDogIHkuobjgItcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrlqIHlu4nCt+W3tOeJueWLksK35Y+26IqdXCIsXG4gIFwiY29udGVudFwiOiBbXCLlvZPkvaDogIHkuobvvIzlpLTnmb3kuobvvIznnaHmhI/mmI/msonvvIxcIiwgXCLngonngavml4HmiZPnm7nvvIzor7flj5bkuIvov5npg6jor5fmrYzvvIxcIiwgXCLmhaLmhaLor7vvvIzlm57mg7PkvaDov4fljrvnnLznpZ7nmoTmn5TlkozvvIxcIiwgXCLlm57mg7PlroPku6zmmJTml6XmtZPph43nmoTpmLTlvbHvvJtcIiwgXCLlpJrlsJHkurrniLHkvaDpnZLmmKXmrKLnlYXnmoTml7bovrDvvIxcIixcbiAgICAgICAgICBcIueIseaFleS9oOeahOe+juS4ve+8jOWBh+aEj+aIluecn+W/g++8jFwiLCBcIuWPquacieS4gOS4quS6uueIseS9oOmCo+acneWco+iAheeahOeBtemtgu+8jFwiLCBcIueIseS9oOihsOiAgeS6hueahOiEuOS4iueXm+iLpueahOeasee6ue+8m1wiLCBcIuWeguS4i+WktOadpe+8jOWcqOe6ouWFiemXquiAgOeahOeCieWtkOaXge+8jFwiLCBcIuWHhOeEtuWcsOi9u+i9u+ivieivtOmCo+eIseaDheeahOa2iOmAne+8jFwiLFxuICAgICAgICAgIFwi5Zyo5aS06aG255qE5bGx5LiK5a6D57yT57yT6Lix552A5q2l5a2Q77yMXCIsIFwi5Zyo5LiA576k5pif5pif5Lit6Ze06ZqQ6JeP552A6IS45bqe44CCXCJdLFxuICBcImJnbVwiOiBcIkpvc2ggV29vZHdhcmQtQXV0dW1uXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cO+8mi8vam9zaHdvb2R3YXJkLmNvbS9cIixcbiAgXCJyZXBvcnRlclwiOiBcIuaxh+aWh1wiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrorrDlvpfml6fml7blpb3jgItcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrpmYjnmb3msplcIixcbiAgXCJjb250ZW50XCI6IFtcIuiusOW+l+aXp+aXtuWlve+8jOi3n+maj+mYv+WomOWOu+WQg+iMtuOAglwiLCBcIumXqOWJjeejqOieuuWjs++8jOW3t+WPo+W8hOazpeaymeOAglwiLCBcIuiAjOS7iuS6uumVv+Wkp++8jOW/g+S6i+S5seWmgum6u+OAglwiLCBcIuiusOW+l+aXp+aXtumBpe+8jOWWnOeci+mYv+Wphue6uue6v+e6seOAglwiLCBcIueTpuWHueazoeaWsOiMp++8jOmZouWGheaDuembj+m4reOAglwiLCBcIuiAjOS7iuS6uumVv+Wkp++8jOW/g+e7qua3oeiLpeiMtuOAglwiLFxuICAgICAgICAgICAgXCLorrDlvpfml6fml7blsI/vvIzniLHljbfkuKvlsI/ooaPopZ/op5LjgIJcIiwgXCLmqpDlupXoubLomoHlt6LvvIzmoJHkuIrlhbHmlIDmnqPjgIJcIiwgXCLogIzku4rkurrplb/lpKfvvIzlv4Pmg4XmgY3mr5Tmva7jgIJcIiwgXCLorrDlvpfml6fml7bmt5jvvIzmgLvlq4zlhYjnlJ/orrLkuZblt6fjgIJcIiwgXCLovabpqazmt7fpsbzpvpnvvIznnYHnnLzkuZDlppblqIbjgIJcIixcbiAgICAgICAgICAgIFwi6ICM5LuK5Lq66ZW/5aSn77yM5b+D5oCd6aOY5oiQ6I2J44CCXCIsIFwi6K6w5b6X5pen5pe26Ze577yM5YGP6KaB5ZOl5ZOl5pWZ5o2J6Jm+44CCXCIsIFwi5aKZ6KeS5oyW6Z2S6IuU77yM5qKi5aS05paX55+l5LqG44CCXCIsIFwi6ICM5LuK5Lq66ZW/5aSn77yM5b+D5rmW6I2h6LW35r2u44CCXCJdLFxuICBcImJnbVwiOiBcIuaHkOOBi+OBl+OBhOmiqOaDhVwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9hbWFjaGFtdXNpYy5jaGFnYXNpLmNvbS9cIixcbiAgXCJyZXBvcnRlclwiOiBcIk5q5a6r6KKtXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiuS6uuaciOWchsK35bGx5Lit5Lmm5LqL44CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5byg5Y+v5LmFXCIsXG4gIFwiY29udGVudFwiOiBbXCLlhbTkuqHljYPlj6TnuYHljY7moqbvvIzor5fnnLzlgKblpKnmtq/jgIJcIiwgXCLlrZTmnpfkuZTmnKjvvIzlkLTlrqvolJPojYnvvIzmpZrlupnlr5LpuKbjgIJcIiwgXCLmlbDpl7TojIXoiI3vvIzol4/kuabkuIfljbfvvIzmipXogIHmnZHlrrbjgIJcIiwgXCLlsbHkuK3kvZXkuovvvJ/mnb7oirHphb/phZLvvIzmmKXmsLTnhY7ojLbjgIJcIl0sXG4gIFwiYmdtXCI6IFwibmV6YW1lXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL211c2ljLmdlb2NpdGllcy5qcC9oYWt1dV9hbWFiaW5lL1wiLFxuICBcInJlcG9ydGVyXCI6IFwi5rGH5paHXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiuWwhui/m+mFksK35ZCb5LiN6KeB44CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5p2O55m9XCIsXG4gIFwiY29udGVudFwiOiBbXCLlkJvkuI3op4HvvIzpu4TmsrPkuYvmsLTlpKnkuIrmnaXvvIzlpZTmtYHliLDmtbfkuI3lpI3lm57jgIJcIiwgXCLlkJvkuI3op4HvvIzpq5jloILmmI7plZzmgrLnmb3lj5HvvIzmnJ3lpoLpnZLkuJ3mmq7miJDpm6rjgIJcIiwgXCLkurrnlJ/lvpfmhI/pobvlsL3mrKLvvIzojqvkvb/ph5HmqL3nqbrlr7nmnIjjgIJcIiwgXCLlpKnnlJ/miJHmnZDlv4XmnInnlKjvvIzljYPph5HmlaPlsL3ov5jlpI3mnaXjgIJcIixcbiAgICAgICAgICBcIueDuee+iuWusOeJm+S4lOS4uuS5kO+8jOS8mumhu+S4gOmlruS4ieeZvuadr+OAglwiLCBcIuWykeWkq+WtkO+8jOS4ueS4mOeUn++8jOWwhui/m+mFku+8jOadr+iOq+WBnOOAglwiLCBcIuS4juWQm+atjOS4gOabsu+8jOivt+WQm+S4uuaIkeWAvuiAs+WQrOOAglwiLCBcIumSn+m8k+mmlOeOieS4jei2s+i0te+8jOS9huaEv+mVv+mGieS4jeWkjemGkuOAglwiLCBcIuWPpOadpeWco+i0pOeahuWvguWvnu+8jOaDn+aciemlruiAheeVmeWFtuWQjeOAglwiLFxuICAgICAgICAgIFwi6ZmI546L5piU5pe25a605bmz5LmQ77yM5paX6YWS5Y2B5Y2D5oGj5qyi6LCR44CCXCIsIFwi5Li75Lq65L2V5Li66KiA5bCR6ZKx77yM5b6E6aG75rK95Y+W5a+55ZCb6YWM44CCXCIsIFwi5LqU6Iqx6ams77yM5Y2D6YeR6KOY77yM5ZG85YS/5bCG5Ye65o2i576O6YWS77yM5LiO5bCU5ZCM6ZSA5LiH5Y+k5oSB44CCXCJdLFxuICBcImJnbVwiOiBcIm9taXdhdGFyaVwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9tdXNpYy5nZW9jaXRpZXMuanAvaGFrdXVfYW1hYmluZS9cIixcbiAgXCJyZXBvcnRlclwiOiBcIuWbm+WklVwiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrmiJHnmoTkuabmnKzljrvnmoTlnLDmlrnjgItcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrlqIHlu4nCt+W3tOeJueWLksK35Y+26IqdXCIsXG4gIFwiY29udGVudFwiOiBbXCLmiJHmiYDlrabliLDnmoTmiYDmnInor63oqIDvvIxcIiwgXCLmiJHmiYDlhpnlh7rnmoTmiYDmnInor63oqIDvvIxcIiwgXCLlv4XnhLbopoHlsZXnv4XvvIzkuI3lgKbnmoTpo57nv5TvvIxcIiwgXCLnu53kuI3kvJrlnKjpo57ooYzkuK3lgZzkuIDlgZzjgIJcIiwgXCLkuIDnm7Tpo57liLDkvaDmgrLkvKTnmoTlv4PmiYDlnKjnmoTlnLDmlrnvvIxcIiwgXCLlnKjlpJzoibLkuK3lkJHnnYDkvaDmrYzllLHvvIxcIixcbiAgICAgICAgICBcIui/nOaWue+8jOays+awtOato+WcqOa1gea3jO+8jFwiLCBcIuS5jOS6keWvhuW4g++8jOaIluaYr+aYn+WFieeBv+eDguOAglwiXSxcbiAgXCJiZ21cIjogXCJSYWZhZWwgS3J1eC1Qb25kXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9mcmVlcGQuY29tXCIsXG4gIFwicmVwb3J0ZXJcIjogXCJOauWuq+iirVwiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrlkajljZfCt+ahg+WkreOAi1wiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muS9muWQjVwiLFxuICBcImNvbnRlbnRcIjogW1wi5qGD5LmL5aSt5aSt77yM54G854G85YW25Y2O44CC5LmL5a2Q5LqO5b2S77yM5a6c5YW25a6k5a6244CCXCIsIFwi5qGD5LmL5aSt5aSt77yM5pyJ6JWh5YW25a6e44CC5LmL5a2Q5LqO5b2S77yM5a6c5YW25a625a6k44CCXCIsIFwi5qGD5LmL5aSt5aSt77yM5YW25Y+26JOB6JOB44CC5LmL5a2Q5LqO5b2S77yM5a6c5YW25a625Lq644CCXCJdLFxuICBcImJnbVwiOiBcIm5lemFtZVwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9tdXNpYy5nZW9jaXRpZXMuanAvaGFrdXVfYW1hYmluZS9cIixcbiAgXCJyZXBvcnRlclwiOiBcIuWQg+ilv+eTnOeahOWwj+S6jOmDjlwiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrmg7bnhLblvZXjgIvoioLpgIlcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrotLnlsJTljZflpJrCt+S9qee0oumYv1wiLFxuICBcImNvbnRlbnRcIjogW1wi5YOP5LiA5pSv5rKh5pyJ5a6M5oiQ55qE55C05byT77yMXCIsIFwi54G16a2C5LuO5p2l5LiN6IO95a2Y5Zyo5LqO5a6D55qE6Ieq6Lqr44CCXCIsIFwi5Lyf5aSn55qE5pmv6KeC57uf57uf5bGe5LqO5oiR5Lus5bey57uP5Lqy5Y6G6L+H55qE5LiA5Liq5piO5aSp44CCXCIsIFwi6ICM5rC45LiN6Ze05pat55qE5Lqk6LCI5bey57uP5piv5LiA5Liq5aSx6LSl44CCXCIsIFwi6LCB5pu+54yc5Ye655Sf5rS75bCx5YOP6L+Z5Liq5qC35a2Q77yfXCIsXG4gICAgICAgICAgXCLmiJHmib7liLDoh6rlt7HkuYvml6XvvIzlsLHmmK/lpLHokL3oh6rlt7HkuYvml7bjgIJcIiwgXCLlpoLmnpzmiJHnm7jkv6HvvIzmiJHlsLHlv4XnhLbmgIDnlpHjgIJcIiwgXCLmiJHntKfntKfmipPkvY/kuIDkupvkuJzopb/nmoTml7blgJnvvIzmiJHnmoTmiYvph4zlv4Xlrprnqbrml6DkuIDnianjgIJcIiwgXCLmiJHljrvnnaHop4nlsLHlpoLmiJHmraPlnKjlh7rljrvmlaPmraXjgIJcIiwgXCLnlJ/mtLvmr5Xnq5/mmK/kuIDmrKHkvJ/lpKfnmoTlpLHnnKDvvIxcIixcbiAgICAgICAgICBcIuaIkeS7rOWBmui/h+aIluaDs+i/h+eahOS4gOWIh++8jOmDveWkhOWcqOa4hea+iOeahOWNiumGkueKtuaAgeS5i+S4reOAglwiLCBcIuWmguaenOaIkeiDveWkn+WFpeedoe+8jOaIkeS8muW/q+S5kOOAglwiLCBcIuiHs+WwkeaIkeeOsOWcqOaAneiAg+eahOaXtuWAmeaIkeWwseedoeS4jeaIkOOAglwiLCBcIuWknOaZmuaYr+S4gOS4quW3qOWkp+eahOmHjeWOi++8jFwiLCBcIuWOi+W+l+aIkeWcqOWvgumdmeeahOimhuebluS5i+S4i+eahOaipumHjOiHquaIkeeqkuaBr+OAglwiLFxuICAgICAgICAgIFwi5oiR5pyJ5LiA56eN54G16a2C55qE5Y+N6IOD55eH44CCXCJdLFxuICBcImJnbVwiOiBcIktldmluIE1hY0xlb2QtQmV0aGxlaGVtXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9pbmNvbXBldGVjaC5jb21cIixcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrlpLHnqoPnmoTlranlrZDjgItcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrlqIHlu4nCt+W3tOeJueWLksK35Y+26IqdXCIsXG4gIFwiY29udGVudFwiOiBbXCLotbDlkKdcIiwgXCLkurrpl7TnmoTlranlrZBcIiwgXCLotbDlkJHpgqPojZLph47lkozmsrPmtYFcIiwgXCLkuI7kuIDkuKrnsr7ngbXmiYvnibXmiYtcIiwgXCLlm6DkuLrov5nkuKrkuJbnlYznmoTmgrLkvKTlpKrmt7HkuoYg6ICM5L2g5LiN6IO95oeCXCJdLFxuICBcImJnbVwiOiBcIkFsZXhhbmRlciBOYWthcmFkYS1XaW50ZXJcIixcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2ZyZWVwZC5jb21cIixcbiAgXCJyZXBvcnRlclwiOiBcIuaxh+aWh1wiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrniLHjgItcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrmiZjpqazmlq8u5biD5pyXXCIsXG4gIFwiY29udGVudFwiOiBbXCLmiJHniLHkvaDvvIzkuI3mmK/lm6DkuLrkvaDmmK/kuIDkuKrmgI7moLfnmoTkurrvvIxcIiwgXCLogIzmmK/lm6DkuLrmiJHllpzmrKLkuI7kvaDlnKjkuIDotbfml7bnmoTmhJ/op4njgIJcIiwgXCLmsqHmnInkurrlgLzlvpfkvaDmtYHms6rvvIxcIiwgXCLlgLzlvpforqnkvaDov5nkuYjlgZrnmoTkurrkuI3kvJrorqnkvaDlk63ms6PjgIJcIiwgXCLlpLHljrvmn5DkurrvvIzmnIDns5/ns5XnmoTojqvov4fkuo7vvIxcIixcbiAgICAgICAgICBcIuS7lui/keWcqOi6q+aXge+8jOWNtOeKueWmgui/nOWcqOWkqei+ueOAglwiLCBcIue6teeEtuS8pOW/g++8jOS5n+S4jeimgeaCieecieS4jeWxle+8jFwiLCBcIuWboOS4uuS9oOS4jeefpeaYr+iwgeS8mueIseS4iuS9oOeahOeskeWuueOAglwiLCBcIuWvueS6juS4lueVjOiAjOiogO+8jOS9oOaYr+S4gOS4quS6uu+8m1wiLCBcIuS9huaYr+WvueS6juafkOS6uu+8jOS9oOaYr+S7lueahOaVtOS4quS4lueVjOOAglwiLFxuICAgICAgICAgIFwi5LiN6KaB5Li66YKj5Lqb5LiN5oS/5Zyo5L2g6Lqr5LiK6Iqx6LS55pe26Ze055qE5Lq66ICM5rWq6LS55L2g55qE5pe26Ze044CCXCIsIFwi54ix5L2g55qE5Lq65aaC5p6c5rKh5pyJ5oyJ5L2g5omA5biM5pyb55qE5pa55byP54ix5L2g77yMXCIsIFwi6YKj5bm25LiN5Luj6KGo5LuW5Lus5rKh5pyJ5YWo5b+D5YWo5oSP5Zyw54ix5L2g44CCXCIsIFwi5LiN6KaB552A5oCl77yM5pyA5aW955qE5oC75Lya5Zyo5pyA5LiN57uP5oSP55qE5pe25YCZ5Ye6546w44CCXCIsXG4gICAgICAgICAgXCLlnKjpgYfliLDmoqbkuK3kurrkuYvliY3vvIzkuIrlpKnkuZ/orrjkvJrlronmjpLmiJHku6zlhYjpgYfliLDliKvkurrvvJtcIiwgXCLlnKjmiJHku6znu4jkuo7pgYfop4Hlv4Pku6rnmoTkurrml7bvvIzkvr/lupTlvZPlv4PlrZjmhJ/mv4DjgIJcIiwgXCLkuI3opoHlm6DkuLrnu5PmnZ/ogIzlk63ms6PvvIzlvq7nrJHlkKfvvIzkuLrkvaDnmoTmm77nu4/mi6XmnInjgIJcIiwgXCLigJznlJ/lkb3mmK/mnZ/nuq/lh4DnmoTngavnhLDvvIxcIixcbiAgICAgICAgICBcIuaIkeS7rOS+nemdoOiHquW3seWGheW/g+eci+S4jeingeeahOWkqumYs+iAjOWtmOWcqOOAguKAnVwiXSxcbiAgXCJiZ21cIjogXCJSYWZhZWwgS3J1eC1Mb3ZlbHkgUGlhbm8gU29uZ1wiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vZnJlZXBkLmNvbVwiLFxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiuWto+WAmeOAi1wiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mumCtea0tee+jlwiLFxuICBcImNvbnRlbnRcIjogW1wi5Yid6KeB5L2g5pe25L2g57uZ5oiR5L2g55qE5b+D77yMXCIsIFwi6YeM6Z2i5piv5LiA5Liq5pil5aSp55qE5pep5pmo44CCXCIsIFwi5YaN6KeB5L2g5pe25L2g57uZ5oiR5L2g55qE6K+d77yMXCIsIFwi6K+05LiN5Ye655qE5piv54K954OI55qE54Gr5aSP44CCXCIsIFwi5LiJ5qyh6KeB5L2g5L2g57uZ5oiR5L2g55qE5omL77yMXCIsIFwi6YeM6Z2i6JeP552A5Liq5Y+26JC955qE5rex56eL44CCXCIsXG4gICAgICAgICAgXCLmnIDlkI7op4HkvaDmmK/miJHlgZrnmoTnn63moqbvvIxcIiwgXCLmoqbph4zmnInkvaDov5jmnInkuIDnvqTlhqzpo47jgIJcIl0sXG4gIFwiYmdtXCI6IFwiQWxleGFuZGVyIE5ha2FyYWRhLVdpbnRlclwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vZnJlZXBkLmNvbVwiLFxuICBcInJlcG9ydGVyXCI6IFwiTmrlrqvooq1cIlxufSwge1xuICBcInRpdGxlXCI6IFwi44CK54Om5b+n44CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5oi05pyb6IiSXCIsXG4gIFwiY29udGVudFwiOiBbXCLor7TmmK/lr4Llr57nmoTnp4vnmoTmuIXmhIHvvIxcIiwgXCLor7TmmK/ovr3ov5znmoTmtbfnmoTnm7jmgJ3jgIJcIiwgXCLlgYflpoLmnInkurrpl67miJHnmoTng6blv6fvvIxcIiwgXCLmiJHkuI3mlaLor7Tlh7rkvaDnmoTlkI3lrZfjgIJcIiwgXCLmiJHkuI3mlaLor7Tlh7rkvaDnmoTlkI3lrZfvvIxcIiwgXCLlgYflpoLmnInkurrpl67miJHnmoTng6blv6fvvJpcIiwgXCLor7TmmK/ovr3ov5znmoTmtbfnmoTnm7jmgJ3vvIxcIixcbiAgICAgICAgICBcIuivtOaYr+WvguWvnueahOeni+eahOa4heaEgeOAglwiXSxcbiAgXCJiZ21cIjogXCJBbGV4YW5kZXIgTmFrYXJhZGEtV2ludGVyXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9mcmVlcGQuY29tXCIsXG4gIFwicmVwb3J0ZXJcIjogXCLlm5vlpJVcIlxufSwge1xuICBcInRpdGxlXCI6IFwi44CK5Yek5rGC5Yew44CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5Y+46ams55u45aaCXCIsXG4gIFwiY29udGVudFwiOiBbXCLmnInnvo7kurrlha7vvIzop4HkuYvkuI3lv5jvvIzkuIDml6XkuI3op4Hlha7vvIzmgJ3kuYvlpoLni4LjgIJcIiwgXCLlh6Tpo57pgajnv5Tlha7vvIzlm5vmtbfmsYLlh7DvvIzml6DlpYjkvbPkurrlha7vvIzkuI3lnKjkuJzlopnjgIJcIiwgXCLlsIbnkLTku6Por63lha7vvIzogYrlhpnoobfogqDvvIzmhL/oqIDphY3lvrflha7vvIzmkLrmiYvnm7jlsIbjgIJcIixcbiAgICAgICAgICBcIuS9leaXtuingeiuuOWFru+8jOaFsOaIkeaXgeW+qO+8jOS4jeW+l+S6jumjnuWFru+8jOS9v+aIkeaypuS6oe+8jOS9v+aIkeaypuS6oeOAglwiXSxcbiAgXCJiZ21cIjogXCLku4rmmJTjg47ntYZcIixcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vd3d3LnJlbmdva3UtdGVpZW4uY29tL1wiLFxuICBcInJlcG9ydGVyXCI6IFwi5Zub5aSVXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiuaKmOahguS7pMK35pil5oOF44CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5b6Q5YaN5oCdXCIsXG4gIFwiY29udGVudFwiOiBbXCLlubPnlJ/kuI3kvJrnm7jmgJ3vvIzmiY3kvJrnm7jmgJ3vvIzkvr/lrrPnm7jmgJ3jgIJcIiwgXCLouqvkvLzmta7kupHvvIzlv4PlpoLpo57nta7vvIxcIiwgXCLmsJToi6XmuLjkuJ3vvIznqbrkuIDnvJXppoDpppnlnKjmraTvvIxcIiwgXCLnm7zljYPph5HmuLjlrZDkvZXkuYvjgIJcIiwgXCLor4HlgJnmnaXml7bvvIzmraPmmK/kvZXml7bvvJ9cIiwgXCLnga/ljYrmmI/ml7bvvIzmnIjljYrmmI7ml7bjgIJcIl0sXG4gIFwiYmdtXCI6IFwibmV6YW1lXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL211c2ljLmdlb2NpdGllcy5qcC9oYWt1dV9hbWFiaW5lL1wiLFxuICBcInJlcG9ydGVyXCI6IFwi5ZCD6KW/55Oc55qE5bCP5LqM6YOOXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiumjnum4n+mbhuOAi+iKgumAiVwiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muazsOaIiOWwlFwiLFxuICBcImNvbnRlbnRcIjogW1wi5oiR55qE5b+D5piv5pe36YeO5ZKM6bifXCIsIFwi5bey57uP5Zyo5L2g55qE55y8552b6YeM5om+5Yiw5LqG5aSp56m6XCIsIFwi5L2g55qE55y8552b5piv5pep5LiK55qE5pGH56+uXCIsIFwi5L2g55qE55y8552b5piv57mB5pif55qE546L5Zu9XCIsIFwi5oiR55qE5q2M5aOw5raI5aSx5Zyo5L2g55y8552b55qE5rex5aSEXCIsIFwi5bCx6K6p5oiR57+x57+U5Zyo6YKj5LiA54mH5aSp56m66YeM5ZCnXCIsXG4gICAgICAgICAgXCLlsLHorqnmiJHnv7Hnv5TlnKjpgqPkuIDniYflraTlr4Lml6DlnqDnmoTlpKnnqbrph4xcIiwgXCLlsLHorqnmiJHmjpLlvIDlroPmnLXmnLXnmoTkupHlvalcIiwgXCLlnKjlroPnmoTpmLPlhYnph4zlsZXnv4Xpo57nv5RcIl0sXG4gIFwiYmdtXCI6IFwiUmFmYWVsIEtydXgtTG92ZWx5IFBpYW5vIFNvbmdcIixcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2ZyZWVwZC5jb21cIixcbiAgXCJyZXBvcnRlclwiOiBcIk5q5a6r6KKtXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiuWPjOWfjuiusOOAi+iKgumAiVwiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mueLhOabtOaWr1wiLFxuICBcImNvbnRlbnRcIjogW1wi6L+Z5piv5LiA5Liq5pyA5aW955qE5pe25Luj77yM6L+Z5piv5LiA5Liq5pyA5Z2P55qE5pe25Luj77ybXCIsIFwi6L+Z5piv5LiA5Liq5pm65oWn55qE5bm05Luj77yM6L+Z5piv5LiA5Liq5oSa6KCi55qE5bm05Luj77ybXCIsIFwi6L+Z5piv5LiA5Liq5L+h5Luw55qE5pe25pyf77yM6L+Z5piv5LiA5Liq5oCA55aR55qE5pe25pyf77ybXCIsIFwi6L+Z5piv5LiA5Liq5YWJ5piO55qE5a2j6IqC77yM6L+Z5piv5LiA5Liq6buR5pqX55qE5a2j6IqC77ybXCIsXG4gICAgICAgICAgXCLov5nmmK/luIzmnJvkuYvmmKXvvIzov5nmmK/lpLHmnJvkuYvlhqzvvJtcIiwgXCLkurrku6zpnaLliY3lupTmnInlsL3mnInvvIzkurrku6zpnaLliY3kuIDml6DmiYDmnInvvJtcIiwgXCLkurrku6zmraPouI/kuIrlpKnloILkuYvot6/vvIzkurrku6zmraPotbDlkJHlnLDni7HkuYvpl6jjgIJcIl0sXG4gIFwiYmdtXCI6IFwiQWxleGFuZGVyIE5ha2FyYWRhLVdpbnRlclwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vZnJlZXBkLmNvbVwiLFxuICBcInJlcG9ydGVyXCI6IFwi5Zub5aSVXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiuS4tOaxn+S7mcK36YCB6ZKx56mG54i244CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya6IuP6L28XCIsXG4gIFwiY29udGVudFwiOiBbXCLkuIDliKvpg73pl6jkuInmlLnngavvvIxcIiwgXCLlpKnmtq/ouI/lsL3nuqLlsJjjgIJcIiwgXCLkvp3nhLbkuIDnrJHkvZzmmKXmuKnjgIJcIiwgXCLml6Dms6LnnJ/lj6TkupXvvIzmnInoioLmmK/np4vnraDjgIJcIiwgXCLmg4bmgIXlraTluIbov57lpJzlj5HvvIxcIiwgXCLpgIHooYzmt6HmnIjlvq7kupHjgIJcIiwgXCLlsIrliY3kuI3nlKjnv6DnnInpoqbjgIJcIixcbiAgICAgICAgICBcIuS6uueUn+WmgumAhuaXhe+8jOaIkeS6puaYr+ihjOS6uuOAglwiXSxcbiAgXCJiZ21cIjogXCLmgYvnjYTjga7lvalcIixcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vd3d3LnJlbmdva3UtdGVpZW4uY29tL1wiLFxuICBcInJlcG9ydGVyXCI6IFwi5Zub5aSVXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiua1o+a6quaymcK357uG6Zuo5pac6aOO5L2c5pmT5a+S44CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya6IuP6L28XCIsXG4gIFwiY29udGVudFwiOiBbXCLnu4bpm6jmlpzpo47kvZzmmZPlr5LvvIxcIiwgXCLmt6Hng5/nlo/mn7PlqprmmbTmu6njgIJcIiwgXCLlhaXmt67muIXmtJvmuJDmvKvmvKvjgIJcIiwgXCLpm6rmsqvkubPoirHmta7ljYjnm4/vvIxcIiwgXCLok7zojLjokr/nrIvor5XmmKXnm5jjgIJcIiwgXCLkurrpl7TmnInlkbPmmK/muIXmrKLjgIJcIl0sXG4gIFwiYmdtXCI6IFwi5LuK5piU44OO57WGXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL3d3dy5yZW5nb2t1LXRlaWVuLmNvbS9cIixcbiAgXCJyZXBvcnRlclwiOiBcIk5q5a6r6KKtXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiumimOm+memYs+WOv+mdkuiNiea5luOAi1wiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muWUkOePmVwiLFxuICBcImNvbnRlbnRcIjogW1wi6KW/6aOO5ZC56ICB5rSe5bqt5rOi77yMXCIsIFwi5LiA5aSc5rmY5ZCb55m95Y+R5aSa44CCXCIsIFwi6YaJ5ZCO5LiN55+l5aSp5Zyo5rC077yMXCIsIFwi5ruh6Ii55riF5qKm5Y6L5pif5rKz44CCXCJdLFxuICBcImJnbVwiOiBcImh5b3V0b3VrYVwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9tdXNpYy5nZW9jaXRpZXMuanAvaGFrdXVfYW1hYmluZS8vaGFrdXVfYW1hYmluZS9cIixcbiAgXCJyZXBvcnRlclwiOiBcIuWbm+WklVwiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrplb/nm7jmgJ3Ct+S5neaciOilv+mjjuWFtOOAi1wiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mueZveWxheaYk1wiLFxuICBcImNvbnRlbnRcIjogW1wi5Lmd5pyI6KW/6aOO5YW077yM5pyI5Ya36Zyy5Y2O5Yed44CCXCIsIFwi5oCd5ZCb56eL5aSc6ZW/77yM5LiA5aSc6a2C5Lmd5Y2H44CCXCIsIFwi5LqM5pyI5Lic6aOO5p2l77yM6I2J5ouG6Iqx5b+D5byA44CCXCIsIFwi5oCd5ZCb5pil5pel6L+f77yM5LiA5pel6IKg5Lmd5Zue44CCXCIsIFwi5aa+5L2P5rSb5qGl5YyX77yM5ZCb5L2P5rSb5qGl5Y2X44CCXCIsIFwi5Y2B5LqU5Y2z55u46K+G77yM5LuK5bm05LqM5Y2B5LiJ44CCXCIsXG4gICAgICAgICAgXCLmnInlpoLlpbPokJ3ojYnvvIznlJ/lnKjmnb7kuYvkvqfjgIJcIiwgXCLolJPnn63mnp3oi6bpq5jvvIzokKblm57kuIrkuI3lvpfjgIJcIiwgXCLkurroqIDkurrmnInmhL/vvIzmhL/oh7PlpKnlv4XmiJDjgIJcIiwgXCLmhL/kvZzov5zmlrnlhb3vvIzmraXmraXmr5TogqnooYzjgIJcIiwgXCLmhL/kvZzmt7HlsbHmnKjvvIzmnp3mnp3ov57nkIbnlJ/jgIJcIl0sXG4gIFwiYmdtXCI6IFwiaHlvdXRvdWthXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL211c2ljLmdlb2NpdGllcy5qcC9oYWt1dV9hbWFiaW5lL1wiLFxuICBcInJlcG9ydGVyXCI6IFwi5rGH5paHXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiumiguWPpOS6lOWNgeS6lOmmluWFtuS4gOOAi1wiLFxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muaXoOmXqOaFp+W8gOemheW4iFwiLFxuICBcImNvbnRlbnRcIjogW1wi5pil5pyJ55m+6Iqx56eL5pyJ5pyI77yMXCIsIFwi5aSP5pyJ5YeJ6aOO5Yas5pyJ6Zuq44CCXCIsIFwi6Iul5peg6Zey5LqL5oyC5b+D5aS077yMXCIsIFwi5L6/5piv5LiA5bm05aW95pe26IqC44CCXCJdLFxuICBcImJnbVwiOiBcIuaHkOOBi+OBl+OBhOmiqOaDhVwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9hbWFjaGFtdXNpYy5jaGFnYXNpLmNvbS9cIixcbiAgXCJyZXBvcnRlclwiOiBcIuWbm+WklVwiXG59LCB7XG4gIFwidGl0bGVcIjogXCLjgIrnroDljaLpmZ/jgItcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrpn6blupTnialcIixcbiAgXCJjb250ZW50XCI6IFtcIuWPr+aAnOeZvembquabsu+8jOacqumBh+efpemfs+S6uuOAglwiLCBcIuaBk+aDtuaIjuaXheS4i++8jOi5iei3jua3rua1t+a7qOOAglwiLCBcIua2p+agkeWQq+acnembqO+8jOWxsem4n+WToummgOaYpeOAglwiLCBcIuaIkeacieS4gOeToumFku+8jOWPr+S7peaFsOmjjuWwmOOAglwiXSxcbiAgXCJiZ21cIjogXCJoeW91dG91a2FcIixcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vbXVzaWMuZ2VvY2l0aWVzLmpwL2hha3V1X2FtYWJpbmUvXCIsXG4gIFwicmVwb3J0ZXJcIjogXCLlm5vlpJVcIlxufSwge1xuICBcInRpdGxlXCI6IFwi44CK5rG05rKz6Zi75Ya744CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5p2c54mnXCIsXG4gIFwiY29udGVudFwiOiBbXCLljYPph4zplb/msrPliJ3lhrvml7bvvIxcIiwgXCLnjonnj4Lnkbbkvanlk43lj4Llt67jgIJcIiwgXCLmta7nlJ/mgbDkvLzlhrDlupXmsLTvvIxcIiwgXCLml6XlpJzkuJzmtYHkurrkuI3nn6XjgIJcIl0sXG4gIFwiYmdtXCI6IFwi5oGL542E44Gu5b2pXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL3d3dy5yZW5nb2t1LXRlaWVuLmNvbS9cIixcbiAgXCJyZXBvcnRlclwiOiBcIk5q5a6r6KKtXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiumVv+WRveWls8K35pil5pel5a6044CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5Yav5bu25bexXCIsXG4gIFwiY29udGVudFwiOiBbXCLmmKXml6XlrrTvvIxcIiwgXCLnu7/phZLkuIDmna/mrYzkuIDpgY3jgIJcIiwgXCLlho3mi5zpmYjkuInmhL/vvJpcIiwgXCLkuIDmhL/pg47lkJvljYPlsoHvvIxcIiwgXCLkuozmhL/lpr7ouqvluLjlgaXvvIxcIiwgXCLkuInmhL/lpoLlkIzmooHkuIrnh5XvvIzlsoHlsoHplb/nm7jop4HjgIJcIl0sXG4gIFwiYmdtXCI6IFwi5oeQ44GL44GX44GE6aKo5oOFXCIsXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL2FtYWNoYW11c2ljLmNoYWdhc2kuY29tL1wiLFxuICBcInJlcG9ydGVyXCI6IFwi5ZCD6KW/55Oc55qE5bCP5LqM6YOOXCJcbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIuOAiuWFiOenpsK35Y2/5LqR5q2M44CLXCIsXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5L2a5ZCNXCIsXG4gIFwiY29udGVudFwiOiBbXCLljb/kupHng4Llha7vvIzns7rnvKbnvKblha7jgIJcIiwgXCLml6XmnIjlhYnljY7vvIzml6blpI3ml6blha7jgIJcIiwgXCLmmI7mmI7kuIrlpKnvvIzng4LnhLbmmJ/pmYjjgIJcIiwgXCLml6XmnIjlhYnljY7vvIzlvJjkuo7kuIDkurrjgIJcIiwgXCLml6XmnIjmnInluLjvvIzmmJ/ovrDmnInooYzjgIJcIiwgXCLlm5vml7bku47nu4/vvIzkuIflp5PlhYHor5rjgIJcIiwgXCLkuo7kuojorrrkuZDvvIzphY3lpKnkuYvngbXjgIJcIixcbiAgICAgICAgICBcIui/geS6juWco+i0pO+8jOiOq+S4jeWSuOWQrOOAglwiLCBcIum8muS5jum8k+S5i++8jOi9qeS5juiInuS5i+OAglwiLCBcIuiPgeWNjuW3suerre+8jOiksOijs+WOu+S5i+OAglwiXSxcbiAgXCJiZ21cIjogXCLlvKXnlJ/jga7nqbrjgatcIixcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vYW1hY2hhbXVzaWMuY2hhZ2FzaS5jb20vXCIsXG4gIFwicmVwb3J0ZXJcIjogXCLmsYfmlodcIlxufSwge1xuICBcInRpdGxlXCI6IFwi44CK6J225oGL6IqxwrfpmIXlsL3lpKnmtq/nprvliKvoi6bjgItcIixcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrnjovlm73nu7RcIixcbiAgXCJjb250ZW50XCI6IFtcIumYheWwveWkqea2r+emu+WIq+iLpu+8jFwiLCBcIuS4jemBk+W9kuadpe+8jOmbtuiQveiKseWmguiuuOOAglwiLCBcIuS4jemBk+W9kuadpe+8jOmbtuiQveiKseWmguiuuOOAglwiLCBcIuiKseW6leebuOeci+aXoOS4gOivre+8jFwiLCBcIue7v+eql+aYpeS4juWkqeS/seiOq+OAglwiLCBcIuW+heaKiuebuOaAneeBr+S4i+ivie+8jFwiLCBcIuS4gOe8leaWsOasou+8jOaXp+aBqOWNg+WNg+e8leOAglwiLFxuICAgICAgICAgIFwi5pyA5piv5Lq66Ze055WZ5LiN5L2P77yMXCIsIFwi5pyx6aKc6L6e6ZWc6Iqx6L6e5qCR44CCXCJdLFxuICBcImJnbVwiOiBcIuaBi+eNhOOBruW9qVwiLFxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly93d3cucmVuZ29rdS10ZWllbi5jb20vXCIsXG4gIFwicmVwb3J0ZXJcIjogXCLlj7Pnn7PlhYjnlJ9cIlxufV1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnXHJcbmltcG9ydCBkYXRhcyBmcm9tICcuL2RhdGEnXHJcbmltcG9ydCBiZ3MgZnJvbSAnLi9iZ3MnXHJcbmltcG9ydCBhdWRpb3MgZnJvbSAnLi9hdWRpb3MnXHJcblxyXG52YXIgUEFVU0VfQ0xBU1MgPSAncGF1c2UnXHJcbnZhciBjaGFuZ2VDb2xvckxpc3QgPSBbXCI5XCIsIFwiMThcIiwgXCIyN1wiLCBcIjM2XCIsIFwiNDZcIiwgXCI1NlwiLCBcIjY0XCIsIFwiNzJcIiwgXCI4MlwiLCBcIjkwXCJdXHJcbnZhciBpZHggPSBsb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnP2lkPScsICcnKVxyXG52YXIgZGF0YSA9IGRhdGFzW3BhcnNlSW50KGlkeCkgLSAxXVxyXG52YXIgYmcgPSBiZ3NbaWR4XVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJy4vJHtiZ30nKWBcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclRpdGxlKHZhbCkge1xyXG4gIHZhciB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpdGxlJylcclxuICB0aXRsZVswXSAmJiAodGl0bGVbMF0uaW5uZXJUZXh0ID0gdmFsKVxyXG4gIGRvY3VtZW50LnRpdGxlID0gdmFsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckF1dGhvcih2YWwpIHtcclxuICB2YXIgYXV0aG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYXV0aG9yJylcclxuICBhdXRob3JbMF0gJiYgKGF1dGhvclswXS5pbm5lclRleHQgPSB2YWwpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNvbnRlbnQodmFscykge1xyXG4gIHZhciBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29udGVudC1wJylcclxuICBjb250ZW50ID0gY29udGVudCAmJiBjb250ZW50WzBdXHJcbiAgdmFscy5mb3JFYWNoKGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgdmFyIGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGxpbmUuaW5uZXJUZXh0ID0gdmFsXHJcbiAgICBpZiAoY29udGVudC5hcHBlbmQpIHtcclxuICAgICAgY29udGVudC5hcHBlbmQobGluZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGluZSlcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJCZ20odmFsKSB7XHJcbiAgdmFyIGJnbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JnbScpXHJcbiAgYmdtWzBdICYmIChiZ21bMF0uaW5uZXJUZXh0ID0gdmFsKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJCZ21Tb3VyY2UodmFsKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JnbVNvdXJjZUZpeCcpLmlubmVyVGV4dCA9ICdCR03mnaXmupDvvJonXHJcbiAgdmFyIGJnbVNvdXJjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JnbS1zb3VyY2UnKVxyXG4gIGJnbVNvdXJjZVswXSAmJiAoYmdtU291cmNlWzBdLmlubmVyVGV4dCA9IHZhbCkgJiYgKGJnbVNvdXJjZVswXS5ocmVmID0gdmFsKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJSZXBvcnRlcih2YWwpIHtcclxuICB2YXIgcmVwb3J0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZXBvcnRlcicpXHJcbiAgcmVwb3J0ZXJbMF0gJiYgKHJlcG9ydGVyWzBdLmlubmVyVGV4dCA9IHZhbClcclxufVxyXG5cclxucmVuZGVyVGl0bGUoZGF0YS50aXRsZSlcclxucmVuZGVyQXV0aG9yKGRhdGEuYXV0aG9yKVxyXG5yZW5kZXJDb250ZW50KGRhdGEuY29udGVudClcclxucmVuZGVyQmdtKGBCR03vvJoke2RhdGEuYmdtfWApXHJcbnJlbmRlckJnbVNvdXJjZShgJHtkYXRhLmJnbVNvdXJjZX1gKVxyXG5yZW5kZXJSZXBvcnRlcihg5pyX6K+16ICF77yaJHtkYXRhLnJlcG9ydGVyfWApXHJcbmZ1bmN0aW9uIGNyZWF0ZUF1ZGlvKCkge1xyXG4gIHZhciBhdWRpbyA9IG5ldyBBdWRpbygpXHJcbiAgLy8gdmFyIF9pZCA9IHBhcnNlSW50KGlkeCkgKyAxXHJcbiAgYXVkaW8uc3JjID0gYXVkaW9zW2lkeF1cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGF1ZGlvKVxyXG4gIHJldHVybiBhdWRpb1xyXG59XHJcbi8vIGF1ZGlvIGNvbnRyb2xzXHJcbnZhciBhdWRpb0RvbSA9IGNyZWF0ZUF1ZGlvKClcclxudmFyIHBsYXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheScpXHJcbnZhciBuZXh0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKVxyXG52YXIgYmVmb3JlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZScpXHJcbnZhciBwbGF5VGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5VGltZScpXHJcbnZhciBhbGxUaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbFRpbWUnKVxyXG52YXIgcHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3MnKVxyXG52YXIgdGltZUNvbnRyb2xzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVDb250cm9scycpXHJcbi8vIOa7muWKqOebuOWFs1xyXG52YXIgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxudmFyIGNsaWVudEhlaWdodCA9IGNvbnRlbnQuY2xpZW50SGVpZ2h0XHJcbnZhciBzY3JvbGxIZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodFxyXG5cclxuZnVuY3Rpb24gY2hhbmdlQ29sb3IoKSB7XHJcbiAgaWYgKGNoYW5nZUNvbG9yTGlzdC5pbmRleE9mKGlkeCkgPiAtMSkge1xyXG4gICAgcGxheUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwbGF5LWdyZXknKVxyXG4gICAgbmV4dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduZXh0LWdyZXknKVxyXG4gICAgYmVmb3JlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3ByZS1ncmV5JylcclxuICAgIHRpbWVDb250cm9scy5jbGFzc0xpc3QuYWRkKCdncmV5JylcclxuICAgIFBBVVNFX0NMQVNTID0gJ3BhdXNlLWdyZXknXHJcbiAgfVxyXG59XHJcbmNoYW5nZUNvbG9yKClcclxuZnVuY3Rpb24gYXVkaW9UcmFuc1RpbWUodGltZSkge1xyXG4gIGlmICghdGltZSA+IDApIHtcclxuICAgIHJldHVybiAnMDA6MDAnXHJcbiAgfVxyXG4gIGlmICh0aW1lID09PSBJbmZpbml0eSkge1xyXG4gICAgcmV0dXJuICctLTotLSdcclxuICB9XHJcbiAgdmFyIGR1cmF0aW9uID0gcGFyc2VJbnQodGltZSlcclxuICBsZXQgbWludXRlID0gcGFyc2VJbnQoZHVyYXRpb24gLyA2MClcclxuICBsZXQgc2VjID0gZHVyYXRpb24gJSA2MCArICcnXHJcbiAgdmFyIGlzTTAgPSAnOidcclxuICBpZiAobWludXRlID09PSAwKSB7XHJcbiAgICBtaW51dGUgPSAnMDAnXHJcbiAgfSBlbHNlIGlmIChtaW51dGUgPCAxMCkge1xyXG4gICAgbWludXRlID0gJzAnICsgbWludXRlXHJcbiAgfVxyXG4gIGlmIChzZWMubGVuZ3RoID09PSAxKSB7XHJcbiAgICBzZWMgPSAnMCcgKyBzZWNcclxuICB9XHJcbiAgcmV0dXJuIG1pbnV0ZSArIGlzTTAgKyBzZWNcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVGltZSh0aW1lLCBkdXJhdGlvbikge1xyXG4gIC8vIOabtOaWsOaXtumXtFxyXG4gIHBsYXlUaW1lICYmIChwbGF5VGltZS5pbm5lclRleHQgPSBhdWRpb1RyYW5zVGltZSh0aW1lKSlcclxuICBjb25zdCBkdXJhdGlvbkZvcm1hdCA9IGF1ZGlvVHJhbnNUaW1lKGR1cmF0aW9uKVxyXG4gIGFsbFRpbWUgJiYgKGFsbFRpbWUuaW5uZXJUZXh0ICE9PSBkdXJhdGlvbkZvcm1hdCkgJiYgKGFsbFRpbWUuaW5uZXJUZXh0ID0gZHVyYXRpb25Gb3JtYXQpXHJcbiAgLy8g5pu05pawcHJvZ3Jlc3NcclxuICBwcm9ncmVzcyAmJiAocHJvZ3Jlc3Muc3R5bGUud2lkdGggPSBwYXJzZUludCh0aW1lICogMTAwIC8gZHVyYXRpb24pICsgJyUnKVxyXG59XHJcblxyXG4vLyB2YXIgc2Nyb2xsUG9zID0gMFxyXG52YXIgaW50ZXJ2YWwgPSBudWxsXHJcbnZhciBpc1N0YXJ0ID0gZmFsc2VcclxuZnVuY3Rpb24gZ29TY3JvbGwoY29udGVudCwgdmFsKSB7XHJcbiAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBjb250ZW50LnNjcm9sbEJ5KDAsIDEpXHJcbiAgfSwgdmFsKTtcclxufVxyXG5mdW5jdGlvbiB1cGRhdGVTY3JvbGwodGltZSwgZHVyYXRpb24pIHtcclxuICBpZiAoIWlzU3RhcnQgJiYgZHVyYXRpb24gJiYgdGltZSA+IDE1ICYmIChzY3JvbGxIZWlnaHQgLSBjbGllbnRIZWlnaHQpID4gMCkge1xyXG4gICAgdmFyIHZhbCA9ICgoZHVyYXRpb24gLSB0aW1lKSAqIDEwMDApIC8gKHNjcm9sbEhlaWdodCAtIGNsaWVudEhlaWdodClcclxuICAgIGdvU2Nyb2xsKGNvbnRlbnQsIHZhbClcclxuICAgIGlzU3RhcnQgPSB0cnVlXHJcbiAgfVxyXG4gIGlmICh0aW1lID09PSBkdXJhdGlvbikge1xyXG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcclxuICAgIGNvbnRlbnQuc2Nyb2xsQnkoMCwgMClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF1ZGlvUmVzZXQoKSB7XHJcbiAgcGxheUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFBBVVNFX0NMQVNTKVxyXG4gIHVwZGF0ZVRpbWUoYXVkaW9Eb20uY3VycmVudFRpbWUsIGF1ZGlvRG9tLmR1cmF0aW9uKVxyXG4gIHVwZGF0ZVNjcm9sbChhdWRpb0RvbS5jdXJyZW50VGltZSwgYXVkaW9Eb20uZHVyYXRpb24pXHJcbiAgaXNTdGFydCA9IGZhbHNlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF1ZGlvSW5pdCgpIHtcclxuICBpZiAoYXVkaW9Eb20uZHVyYXRpb24pIHtcclxuICAgIGFsbFRpbWUgJiYgKGFsbFRpbWUuaW5uZXJUZXh0ID0gYXVkaW9UcmFuc1RpbWUoYXVkaW9Eb20uZHVyYXRpb24pKVxyXG4gIH1cclxuICAvLyDnm5HlkKzpn7PpopHmkq3mlL7ml7bpl7Tlubbmm7TmlrDov5vluqbmnaFcclxuICB2YXIgdXBkYXRlUHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmIChhdWRpb0RvbS5jdXJyZW50VGltZSA+IDAgJiYgYXVkaW9Eb20uZHVyYXRpb24gIT09IEluZmluaXR5KSB7XHJcbiAgICAgIC8vIHRoaXMubG9hZGluZ0NsYXNzID0gZmFsc2VcclxuICAgICAgdXBkYXRlVGltZShhdWRpb0RvbS5jdXJyZW50VGltZSwgYXVkaW9Eb20uZHVyYXRpb24pXHJcbiAgICAgIHVwZGF0ZVNjcm9sbChhdWRpb0RvbS5jdXJyZW50VGltZSwgYXVkaW9Eb20uZHVyYXRpb24pXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIOebkeWQrOaSreaUvuWujOaIkOS6i+S7tlxyXG4gIHZhciBhdWRpb0VuZGVkID0gZnVuY3Rpb24oKSB7XHJcbiAgICBhdWRpb0RvbS5jdXJyZW50VGltZSA9IDBcclxuICAgIGF1ZGlvUmVzZXQoKVxyXG4gIH1cclxuICAvLyDlpITnkIbmkq3mlL7plJnor69cclxuICB2YXIgaGFuZGxlRXJyb3IgPSBlID0+IHtcclxuICAgIHZhciBlcnJvckNvZGUgPSBlICYmIGUuY3VycmVudFRhcmdldCAmJiBlLmN1cnJlbnRUYXJnZXQuZXJyb3IuY29kZVxyXG4gICAgc3dpdGNoIChlcnJvckNvZGUpIHtcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNRURJQV9FUlJfTkVUV09SSycpXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNRURJQV9FUlJfREVDT0RFJylcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlIDQ6XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01FRElBX0VSUl9TUkNfTk9UX1NVUFBPUlRFRCcpXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBjb25zb2xlLmxvZygnTUVESUFfRVJSX1VOS05PV04nKVxyXG4gICAgfVxyXG4gICAgYXVkaW9FbmRlZCgpXHJcbiAgfVxyXG4gIC8vIOaSreaUvlxyXG4gIHZhciBoYW5kbGVQbGF5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoYXVkaW9Eb20ucGF1c2VkKSB7XHJcbiAgICAgIGF1ZGlvRG9tLnBsYXkgJiYgYXVkaW9Eb20ucGxheSgpXHJcbiAgICAgIHBsYXlCdXR0b24uY2xhc3NMaXN0LmFkZChQQVVTRV9DTEFTUylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF1ZGlvRG9tLnBhdXNlICYmIGF1ZGlvRG9tLnBhdXNlKClcclxuICAgICAgcGxheUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFBBVVNFX0NMQVNTKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5piv5ZCm5pSv5oyBIG9uZW5kZWQg55uR5ZCs5pKt5pS+5a6M5oiQ5LqL5Lu2XHJcbiAgX2FkZEV2ZW50TGlzdGVuZXIoYXVkaW9Eb20sICdlbmRlZCcsIGF1ZGlvRW5kZWQpXHJcbiAgLy8gZXJyb3JcclxuICBfYWRkRXZlbnRMaXN0ZW5lcihhdWRpb0RvbSwgJ2Vycm9yJywgaGFuZGxlRXJyb3IpXHJcbiAgLy8g5piv5ZCm5pSv5oyBIG9udGltZXVwZGF0ZSDnm5HlkKzmm7TmlrDkuovku7ZcclxuICBfYWRkRXZlbnRMaXN0ZW5lcihhdWRpb0RvbSwgJ3RpbWV1cGRhdGUnLCB1cGRhdGVQcm9ncmVzcylcclxuICAvLyDngrnlh7vmkq3mlL5cclxuICBfYWRkRXZlbnRMaXN0ZW5lcihwbGF5QnV0dG9uLCAnY2xpY2snLCBoYW5kbGVQbGF5KVxyXG59XHJcblxyXG5mdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCB0eXBlLCBmdW5jKSB7XHJcbiAgaWYgKGVsZW1bJ19pcycgKyB0eXBlXSkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGlmIChlbGVtWydvbicgKyB0eXBlXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZnVuYywgZmFsc2UpXHJcbiAgfSBlbHNlIHtcclxuICAgIGVsZW1bJ29uJyArIHR5cGVdID0gZnVuY1xyXG4gIH1cclxuICBlbGVtWydfaXMnICsgdHlwZV0gPSB0cnVlXHJcbn1cclxuXHJcbmF1ZGlvSW5pdCgpIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmcvMS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMTAuanBnIiwid2VicGFjazovLy8uL2JnLzEwMC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMTEuanBnIiwid2VicGFjazovLy8uL2JnLzEyLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8xMy5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMTQuanBnIiwid2VicGFjazovLy8uL2JnLzE1LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8xNi5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMTcuanBnIiwid2VicGFjazovLy8uL2JnLzE4LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8xOS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMi5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMjAuanBnIiwid2VicGFjazovLy8uL2JnLzIxLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8yMi5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMjMuanBnIiwid2VicGFjazovLy8uL2JnLzI0LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8yNS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMjYuanBnIiwid2VicGFjazovLy8uL2JnLzI3LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8yOC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMjkuanBnIiwid2VicGFjazovLy8uL2JnLzMuanBnIiwid2VicGFjazovLy8uL2JnLzMwLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8zMS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMzIuanBnIiwid2VicGFjazovLy8uL2JnLzMzLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8zNC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMzUuanBnIiwid2VicGFjazovLy8uL2JnLzM2LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy8zNy5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvMzguanBnIiwid2VicGFjazovLy8uL2JnLzM5LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy80LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy80MC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNDEuanBnIiwid2VicGFjazovLy8uL2JnLzQyLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy80My5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNDQuanBnIiwid2VicGFjazovLy8uL2JnLzQ1LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy80Ni5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNDcuanBnIiwid2VicGFjazovLy8uL2JnLzQ4LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy80OS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNTAuanBnIiwid2VicGFjazovLy8uL2JnLzUxLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy81Mi5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNTMuanBnIiwid2VicGFjazovLy8uL2JnLzU0LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy81NS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNTYuanBnIiwid2VicGFjazovLy8uL2JnLzU3LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy81OC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNTkuanBnIiwid2VicGFjazovLy8uL2JnLzYuanBnIiwid2VicGFjazovLy8uL2JnLzYwLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy82MS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNjIuanBnIiwid2VicGFjazovLy8uL2JnLzYzLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy82NC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNjUuanBnIiwid2VicGFjazovLy8uL2JnLzY2LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy82Ny5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNjguanBnIiwid2VicGFjazovLy8uL2JnLzY5LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy83LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy83MC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNzEuanBnIiwid2VicGFjazovLy8uL2JnLzcyLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy83My5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNzQuanBnIiwid2VicGFjazovLy8uL2JnLzc1LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy83Ni5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvNzcuanBnIiwid2VicGFjazovLy8uL2JnLzc4LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy83OS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvOC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvODAuanBnIiwid2VicGFjazovLy8uL2JnLzgxLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy84Mi5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvODMuanBnIiwid2VicGFjazovLy8uL2JnLzg0LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy84NS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvODYuanBnIiwid2VicGFjazovLy8uL2JnLzg3LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy84OC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvODkuanBnIiwid2VicGFjazovLy8uL2JnLzkuanBnIiwid2VicGFjazovLy8uL2JnLzkwLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy85MS5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvOTIuanBnIiwid2VicGFjazovLy8uL2JnLzkzLmpwZyIsIndlYnBhY2s6Ly8vLi9iZy85NC5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvOTUuanBnIiwid2VicGFjazovLy8uL2JnLzk2LmpwZyIsIndlYnBhY2s6Ly8vLi9iZy85Ny5qcGciLCJ3ZWJwYWNrOi8vLy4vYmcvOTguanBnIiwid2VicGFjazovLy8uL2JnLzk5LmpwZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvYmVmb3JlLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvYmVmb3JlX2dyZXkucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9iZy5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL25leHQucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9uZXh0X2dyZXkucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9wYXVzZS5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3BhdXNlX2dyZXkucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9wbGF5LnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvcGxheV9ncmV5LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9yZXMvMS5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzEwLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvMTAwLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvMTEubXAzIiwid2VicGFjazovLy8uL3Jlcy8xMi5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzEzLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvMTQubXAzIiwid2VicGFjazovLy8uL3Jlcy8xNS5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzE2Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvMTcubXAzIiwid2VicGFjazovLy8uL3Jlcy8xOC5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzE5Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvMi5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzIwLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvMjEubXAzIiwid2VicGFjazovLy8uL3Jlcy8yMi5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzIzLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvMjQubXAzIiwid2VicGFjazovLy8uL3Jlcy8yNS5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzI2Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvMjcubXAzIiwid2VicGFjazovLy8uL3Jlcy8yOC5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzI5Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvMy5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzMwLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvMzEubXAzIiwid2VicGFjazovLy8uL3Jlcy8zMi5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzMzLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvMzQubXAzIiwid2VicGFjazovLy8uL3Jlcy8zNS5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzM2Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvMzcubXAzIiwid2VicGFjazovLy8uL3Jlcy8zOC5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzM5Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNC5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzQwLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNDEubXAzIiwid2VicGFjazovLy8uL3Jlcy80Mi5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzQzLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNDQubXAzIiwid2VicGFjazovLy8uL3Jlcy80NS5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzQ2Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNDcubXAzIiwid2VicGFjazovLy8uL3Jlcy80OC5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzQ5Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNS5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzUwLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNTEubXAzIiwid2VicGFjazovLy8uL3Jlcy81Mi5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzUzLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNTQubXAzIiwid2VicGFjazovLy8uL3Jlcy81NS5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzU2Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNTcubXAzIiwid2VicGFjazovLy8uL3Jlcy81OC5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzU5Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNi5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzYwLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNjEubXAzIiwid2VicGFjazovLy8uL3Jlcy82Mi5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzYzLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNjQubXAzIiwid2VicGFjazovLy8uL3Jlcy82NS5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzY2Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNjcubXAzIiwid2VicGFjazovLy8uL3Jlcy82OC5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzY5Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNy5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzcwLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNzEubXAzIiwid2VicGFjazovLy8uL3Jlcy83Mi5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzczLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNzQubXAzIiwid2VicGFjazovLy8uL3Jlcy83NS5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzc2Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvNzcubXAzIiwid2VicGFjazovLy8uL3Jlcy83OC5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzc5Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvOC5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzgwLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvODEubXAzIiwid2VicGFjazovLy8uL3Jlcy84Mi5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzgzLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvODQubXAzIiwid2VicGFjazovLy8uL3Jlcy84NS5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzg2Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvODcubXAzIiwid2VicGFjazovLy8uL3Jlcy84OC5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzg5Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvOS5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzkwLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvOTEubXAzIiwid2VicGFjazovLy8uL3Jlcy85Mi5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzkzLm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvOTQubXAzIiwid2VicGFjazovLy8uL3Jlcy85NS5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzk2Lm1wMyIsIndlYnBhY2s6Ly8vLi9yZXMvOTcubXAzIiwid2VicGFjazovLy8uL3Jlcy85OC5tcDMiLCJ3ZWJwYWNrOi8vLy4vcmVzLzk5Lm1wMyIsIndlYnBhY2s6Ly8vLi9zcmMvYXVkaW9zLmpzIiwid2VicGFjazovLy8uL3NyYy9iZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/NzUyOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsYUFBYSxtQkFBTyxDQUFDLGlHQUE4QztBQUNuRSwyQkFBMkIsbUJBQU8sQ0FBQyw2RkFBNEM7QUFDL0U7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLGVBQWUsbUJBQW1CLDZCQUE2Qix5QkFBeUIsZ0JBQWdCLEtBQUssY0FBYyxtQkFBbUIsdUNBQXVDLG1CQUFPLENBQUMseUNBQWtCLFFBQVEsNkJBQTZCLG1DQUFtQyx5QkFBeUIsS0FBSyxhQUFhLDBCQUEwQixLQUFLLHNCQUFzQixtQkFBbUIsb0JBQW9CLHlCQUF5QixLQUFLLGNBQWMsb0JBQW9CLHlCQUF5Qix5QkFBeUIsS0FBSyxPQUFPLHFCQUFxQixLQUFLLGFBQWEsK0JBQStCLEtBQUssZUFBZSwyQkFBMkIsMkJBQTJCLG9CQUFvQiwrQkFBK0IsNEJBQTRCLDhCQUE4QixLQUFLLGVBQWUsb0JBQW9CLEtBQUssVUFBVSxpQ0FBaUMsbUJBQU8sQ0FBQyxpREFBc0IsZ0NBQWdDLEtBQUssZUFBZSxpQ0FBaUMsbUJBQU8sQ0FBQywyREFBMkIsZ0NBQWdDLEtBQUssV0FBVyxpQ0FBaUMsbUJBQU8sQ0FBQyw2Q0FBb0IsZ0NBQWdDLEtBQUssZ0JBQWdCLGlDQUFpQyxtQkFBTyxDQUFDLHVEQUF5QixnQ0FBZ0MsS0FBSyxvQkFBb0Isa0JBQWtCLG1CQUFtQixpQ0FBaUMsMkJBQTJCLDJCQUEyQixvQkFBb0IsK0JBQStCLDRCQUE0Qiw4QkFBOEIsZ0NBQWdDLDZCQUE2QiwwQkFBMEIsc0JBQXNCLHFCQUFxQixLQUFLLFdBQVcsa0JBQWtCLG1CQUFtQixpQ0FBaUMsbUJBQU8sQ0FBQyw2Q0FBb0IsZ0NBQWdDLGlDQUFpQyxvQkFBb0IsS0FBSyxnQkFBZ0IsaUNBQWlDLG1CQUFPLENBQUMsdURBQXlCLGdDQUFnQyxpQ0FBaUMsS0FBSyxZQUFZLGlDQUFpQyxtQkFBTyxDQUFDLCtDQUFxQixnQ0FBZ0MsS0FBSyxpQkFBaUIsaUNBQWlDLG1CQUFPLENBQUMseURBQTBCLGdDQUFnQyxpQ0FBaUMsS0FBSyxvQkFBb0Isb0JBQW9CLHdCQUF3QixrQkFBa0IsbUJBQW1CLEtBQUssZUFBZSw2QkFBNkIsb0JBQW9CLGtCQUFrQix1QkFBdUIsS0FBSyx1QkFBdUIsNkJBQTZCLG9CQUFvQixnQkFBZ0IseUJBQXlCLEtBQUssNkJBQTZCLDZCQUE2QixLQUFLLDZCQUE2Qix5QkFBeUIsbUJBQW1CLGlCQUFpQixrQkFBa0IsbUJBQW1CLDZCQUE2QiwwQkFBMEIsS0FBSyxtQ0FBbUMsNkJBQTZCLEtBQUssV0FBVyxzQkFBc0IsMEJBQTBCLGtCQUFrQixzQkFBc0IsS0FBSyxpQkFBaUIsa0JBQWtCLEtBQUssaUJBQWlCLGtCQUFrQixLQUFLOztBQUV4bEc7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0JBQWdCO0FBQ25ELElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGNBQWM7O0FBRWxFO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyx1REFBUTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDO0FBQ0EsS0FBSyxtQkFBTyxDQUFDLGlDQUFjO0FBQzNCLEtBQUssbUJBQU8sQ0FBQyxpQ0FBYztBQUMzQixLQUFLLG1CQUFPLENBQUMsaUNBQWM7QUFDM0IsS0FBSyxtQkFBTyxDQUFDLGlDQUFjO0FBQzNCLEtBQUssbUJBQU8sQ0FBQyxpQ0FBYztBQUMzQixLQUFLLG1CQUFPLENBQUMsaUNBQWM7QUFDM0IsS0FBSyxtQkFBTyxDQUFDLGlDQUFjO0FBQzNCLEtBQUssbUJBQU8sQ0FBQyxpQ0FBYztBQUMzQixLQUFLLG1CQUFPLENBQUMsaUNBQWM7QUFDM0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsTUFBTSxtQkFBTyxDQUFDLG1DQUFlO0FBQzdCLE1BQU0sbUJBQU8sQ0FBQyxtQ0FBZTtBQUM3QixNQUFNLG1CQUFPLENBQUMsbUNBQWU7QUFDN0IsT0FBTyxtQkFBTyxDQUFDLHFDQUFnQjtBQUMvQjtBQUNBOzs7Ozs7Ozs7Ozs7QUN0R0E7QUFDQSxLQUFLLG1CQUFPLENBQUMsK0JBQWE7QUFDMUIsS0FBSyxtQkFBTyxDQUFDLCtCQUFhO0FBQzFCLEtBQUssbUJBQU8sQ0FBQywrQkFBYTtBQUMxQixLQUFLLG1CQUFPLENBQUMsK0JBQWE7QUFDMUIsS0FBSyxtQkFBTyxDQUFDLCtCQUFhO0FBQzFCLEtBQUssbUJBQU8sQ0FBQywrQkFBYTtBQUMxQixLQUFLLG1CQUFPLENBQUMsK0JBQWE7QUFDMUIsS0FBSyxtQkFBTyxDQUFDLCtCQUFhO0FBQzFCLEtBQUssbUJBQU8sQ0FBQywrQkFBYTtBQUMxQixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixNQUFNLG1CQUFPLENBQUMsaUNBQWM7QUFDNUIsTUFBTSxtQkFBTyxDQUFDLGlDQUFjO0FBQzVCLE1BQU0sbUJBQU8sQ0FBQyxpQ0FBYztBQUM1QixPQUFPLG1CQUFPLENBQUMsbUNBQWU7QUFDOUI7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RHQTtBQUFBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QixpQ0FBaUMsSUFBSSxnQkFBZ0IsRUFBRTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQsb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMzMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0I7QUFDTTtBQUNIO0FBQ007O0FBRTdCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNkNBQUs7QUFDaEIsU0FBUywyQ0FBRztBQUNaLHFFQUFxRSxHQUFHOztBQUV4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCLG1CQUFtQixlQUFlO0FBQ2xDLHNCQUFzQixjQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGNBQWMsOENBQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVzs7Ozs7Ozs7Ozs7O0FDdk5BLGNBQWMsbUJBQU8sQ0FBQyxtR0FBbUQ7O0FBRXpFLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtR0FBZ0Q7O0FBRXJFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjgxZGNlNWJiNjIzN2Q1ZTA0ZmM5M2Y5YzQyZGY1M2RlLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjE5ZDMyMmZlNDFmZTYyOWMwYTE0NTk4ZmM0ZWVkMjY3LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM2YzE0NzMzNzZhMGRmMWRmZjI4MGIxOTM4MDMxZTRhLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImMwNGY1NmQxZWNlNWNkZDg1OGYyMjZkNTI4OTdmMTc0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNmYzkzYmEyZGYwN2YyNWIzN2I3NzZkNDdhNmE2NmRiLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY4NTQzODVmNmZkNTk2ZTdjZmY3NTY3ZjhlZTEwNTg1LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQ4YTY4OGRhNTA0NDIyNTJmYmFhZjMzOGY1ZjI1OTNiLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM4NjE5YTM2YTE0ZGJiM2JlZGQ5MmFjY2ZjMjkwNTcyLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRhYTRjMzQxY2E5N2E2ZTdkODNjYzM3MDBmMzYwYjA1LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjc0OWNkMTQxODRlMjg1YmFjOWE5M2EwNjNhYjYxN2RmLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA1ZTA4MTg3MGMwYmQ5ZDY0MzZhOWU0YTUyNzQ0NmQxLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJiMzFmMzEzYmMyNjQ3ZDg0N2NmMzZkYWE4YWM2OTM5LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQ3ZTk1ZGVjNzg4YWI3YzI1YzIxZjYyNjFiNzU4ZTM3LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFjOTA2ZjA3MDI2MGExMTMwYzMwZDZhZTU0MGQ0ZGVkLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjdhZmVhYjkxM2ViNmE0NmFjNDhkZmY2YmEzMTVhMmMwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImI0NDQ1ZDBlYmQ0Yzg2ZDc4ZjYxYzY5ZWUwMDhhYzA3LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImYzODUzYWJlZDVkNmE0NWRhMjgzYmQ0NTU1YzYzYzE5LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjRlZTk2ZWVlYmNjNmUyMjA4ZmU3NjdmMThhZGY1OGI2LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjg0ZDI0MGVlMGRiZTUxZDQ0NGI1N2M5YWMwYjc0N2JmLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjk1M2ExZmU0NzhkOTU0NWNlM2M2ZTliM2U1OTc1MmMxLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjVhZWZmMTkwYjY3ODkxMTQ5NDY1YzM5ZTEwMGQ4ODljLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZlZTNmZTM2ZjhkMzM3ZGIzMzE5YjliM2I1NGQ5YzY3LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU0OGQ1OGY1Y2QxODM4MjJjNDA4NWNkNGMxN2NhYTk2LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjc3NzY0NmY1ZDg4ZGRlMGY2ZGU4ZjU5NmEyNTRjOGViLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjNmZTE3NDZmOGY4ZWZkMjYwZTkwMGYxNjBmOGZhNDg1LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM5NzM4YWEzZGJmYmI3NzkyZjk1MmViNWE0NTEzMjhhLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjhmMzE0NGM1MjY4NmZmMDMzMThlNTI4OTc5NDBlMGUzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA0ZTEzNTQwYTFhMDExNWM2MTVlMDdmNzkwM2Y0MWQwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA1NjAwZTNkNDllNDI3MDdlMDRmMThjOTcxZGJmYWNmLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjUyOGU1MGE2ZDk4ZjA0N2I1MjA5NjEyZjBiODQzYWQ3LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImUyNjg0ZjFlYjkwZjJlMjYzNzA5NjI0NjUwYTU2OWViLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM0NzE4ZDg0YjRhYjE0ZmQ5ZmVmNDA4OGE2ODIyZjNmLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA1NTQ2ZDAzYWFjYjc0ZjkxZWRmNjMwZDY0Y2Q5ZjM5LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY1OTcyOWY1NmEzNjU0NTI2ZWFiMDQ3YjE1NjM1N2EyLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjI2MzFjODFhM2VlZGNjMTBhMTQxMWMwYjQwNjFlNTE0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImVhYTBjZDMzMTQ4NWVlYzAyNTljNTM3YzE4ZjU4ODcwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY0YTM3NGU1MTNiNGFiYzQ5Nzg3MDIzMGU1NzU4N2Q0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImM0MzRmNjUzMjYxYmRlZTFiYzIzNjA3MTM4MDk4NGQ5LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU4ODdmODgyNzFiZjVhYTNhYzQwNzliM2M3ZmNkZjNmLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFlZjE2NGFiNzA3ZmQ0YzZmMzZiMzg0MTdkNGU2Y2Y0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY1NGZhYzdiOWVlMjFlYjZkNzhmNjIyMzg1Mzk2YjcwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjYyZDE2NDMwZTgxNzExYTIxMGI3NjZjOTAwMzcyNmI2LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjVmZjhkZjQ4MmE2NmMzYWU4NDk0OTRkMTJjMzMwNjllLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM4NGMxMzZiMGYxOTJkYzA1NmJmMGUwNDRkOWM5NGUzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU5MDE3Y2U0NTQxNWMwMzQ2N2RjMWU2M2M0ZjJiMjllLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjg0MjA0NGE1NjJhMDg1YjI0YjdmMDRiMmIxMTQ4MzczLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNjZTA5NjcxYmUwZDU5NzkyNzZjZmU2M2JmYjNhNGEzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjBiNWYzODlmMGUzN2E1NDIwMDc3YjFjZjk0ODY5M2JkLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjAyYmVmOTIxNjIxZWM5MDFjM2JkNTUxNmZhZjQxOTRmLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImEwODkwYTQ1MmU5MTU0Nzc3ZTE4NmNiNGZiZDkyOWI2LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjgzYmUyYTU4ZTA3MTA1Y2RiY2M0MzM0MWUwYWNjMWVmLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRiMDRmMTQ1M2IxMTc3OGM3ZGU5OTdkNDAzMmIxMDkzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjU2MGQ5NTVmNDI1NDk2ZmY4MzZjNGI5MjVmOGY2Zjc3LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJmNzExMTZmMjBjZDZiMWU2Y2MxMzRlM2JhNzFlMzVhLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU1NjUxZWIyZTM0YzI0NDg1ZDkwZTA0MTIyNGU2MTczLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImMyMzAxZGM4Y2FhODRhNzJhYjg4ZTNiZGRkNjI1NmIxLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImMwMThiYmMyNzhlOWQ5Mjc2MjQxY2FkYmJlZGQ4MzBkLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImY3N2EwYjI2ZDRiMTQyNmQxZDAwZDBjYzAwMTVlZTlkLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjkxMDk4YzNjMmIwYTBjNGI4YmI5OGE4ZDdmMjdlZGVmLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImY2NzIzYjEyMDlhY2IxNTI3MzJjM2ZkMjc3MTYyZThkLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQ3YmIwZTc2M2M3ZWRiYTFmMGQwZTljMTE0NWMxZjRiLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZmZjIyN2E2ZDc1MTIwYWUwM2E4ZjkwYzRiZDY4YjQ3LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQzNDEwMmIxMWNjNWE2N2EzYjYxOGM5ZTExY2U5MmNlLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjkzY2VmNTc2YjM4OGFhYmE3MzUxMGM0YTk2N2YzMjgwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjJmNzQyMmRiZTNhZGM4YjE5MjVkZmE2NzRhMzViNjc5LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjMzZDJmODYxM2M5YzYzOGZiNzRkMDJmNDU1NWVmOGIxLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjVmZmVhOGIxZTdhOGQ5YTMxMzAxOGZmMjA1ZmJmYmZjLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRlNmI0Njk0M2UyN2Q3M2Y4ODgwOWY4NGU1ZmM3OTg2LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjk1MDJiNTk0Y2Y3OWZhN2M2ZmU2YmUyZWIzNWRiYmMxLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQ4ZmY1YWIzNWZiZjM5MTk2MWU3ZTM4MzE5NjIxYjQ0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjEyZWNkZDNlNTlmNmU4NWRiMTNlNGZhNTI5Njg4YTgwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjAxYmE2MThjOTZlOGJiY2Y3MDFkNDM2YWY0ZGMxMjc3LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjRjNDVjYTMwZDVmNjg2YmM2MThlOTFlNjI4NDNkMzUzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRjZDhlNGYxNjIwMWE5OGIwYmIwMWRiN2RlYmE3NDJhLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjRlOTM4NTRjOTExNWFmMjczZDliNDdjZjI2NjY4OWNmLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjg5MjdiMzM2ODNlYTJjNmY1OTA3ZGFlM2ViYmFiODg0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjRjYjRhOGE0NzFlNmRkN2RlNGI3ZDYxNjU2ZjdjNWZjLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjU0NjkxYjAwM2M1ZTA3ZDU0YmExNzk2ZTAxNDJmNmNkLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjI0ZWEyYjM1ZmFlNWVjNzdmMjFkZjg2NjcyYmZlMDViLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjYwNDRkMGIyNzNhMTYwN2ZkYTliZjk3ODA2NmEwYjY1LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjEwMzI4NDhhNGVlMmYwYWNmMDFkMWNiNDJmMzgyNGMwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjczMGJmOTQ3ZDQxN2UxNDMzNmJlYWY0Y2VkMmE1YWFjLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjZjMmUwZDcyNzkyMDE0NTc3MzhkYjU3ZTMzZTZiNWMzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjg3NWE2OTM4YWRiMDU1ZTA1Mjk3YzI1MGUzMjlhZjM0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImVjZjVmOTAxOGQ4YjU2YWQyMzM0ODdkMWUzMjFlMjI1LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjVjNWI1YTZkYWFjZDIyMTkyMDVlZjBiOTA4MTI0NjkzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjNmNDI2ZDk0NjM0ZDU5NTdlOWQ1Njk0NWIwNTBhZGRjLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImYwZjA2YWIxYjkyYTY3ZjM3MDBmMjA0Y2RhMTk2MmU0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjMzMjU0OWE3ODVkZmI2YjUxMTJhYzAxODhmNDE0NDY0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjkwNTQ5YTMwMzY2ZjU3MGZmMGI1ZjM4NzI2MjQ5YTViLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM3ZTg5ZTBjOGMzMjM0ZGU4N2Q5ODE1ZjI4MmVlOWQ4LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImY5YzNiZDUxYzAzODEwN2Y0YjA4NGQ4ODc2NTE4YmUxLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjhjNjg0M2U2M2YxMTMxYjYwMWNkNjJiMjhhNzM1NTY2LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjNjMTk1YjU5ZDMwNGY0Mjc1NGI3ZDAxYzU0ZGNlMmYwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFkMDdmMTZiNzEyYmU0MTQ0OTE4OWEwOTI5YTBlMzVjLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjgxMjAxNDYzYzIwM2RiY2Y4MDkzOWZlMTczNDUyMTU5LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjgxMjAxNDYzYzIwM2RiY2Y4MDkzOWZlMTczNDUyMTU5LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZiZjYwYWFiMGRhYzI2YzA3OGM5NDA3OTM4ZGVjMjIxLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjI1ODMyMTkxNzA3ZmQ4NjM2NWQ1NmUxYjJjZDMxOThmLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM2YzE0NzMzNzZhMGRmMWRmZjI4MGIxOTM4MDMxZTRhLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQxMmQ2YjkxMzhkNjBkODQ5NmU4NTY5NjBiNGVjNTU0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjVmNzNiNzhmNmZhOGEyMTY2YjQ3MDI1YjMzZjMzNGQ1LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM3NDVmMjliYzM5MTg5NzMyNWU5ZTE1Y2IzYjc0ZWFkLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZmMGExZjFhMzA5ZTgyYTFmNTJhNTA4ZmI1NzgyZWEyLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjk0NmU1ZGY4NWM0ZTZiYjQ0ZDdiY2FhMGM2YWQxZDM2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjgzZmU1ZGQ4ZjU0ZjJmYzJlNWFiMDI0NGE5ZmM3NTM5LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjczYmVhOTZmYzI4NmJiMDVkOTMwYjQ2ZTBmZjBiMTc0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjdiMDM2NWE0ODA4ODg1MWJmZTE5OWQ4OTI5MGVkMWZiLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImE4YzlkYmEzOTVmNjJhMzliNGM1OTBmNDViMzk3MDQzLnBuZ1wiOyIsInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcIik7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgLyogbGV0dGVyLXNwYWNpbmc6IDNweDsgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuLndyYXBwZXIge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvYmcuanBnXCIpKSArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDYwcHggMCAwIDA7XFxyXFxufVxcclxcbi5jb250ZW50LXdyYXBwZXIge1xcclxcbiAgbWFyZ2luOiAzNXB4O1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXHJcXG59XFxyXFxuLmNvbnRlbnQge1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIG1hcmdpbi1yaWdodDogLThweDtcXHJcXG59XFxyXFxucCB7XFxyXFxuICBtYXJnaW46IDZweCAwIDtcXHJcXG59XFxyXFxuLmZvb3RlciB7XFxyXFxuICBtYXJnaW46IDMwcHggMzVweCAwIDM1cHg7XFxyXFxufVxcclxcbi5jb250cm9scyB7XFxyXFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXHJcXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uZmxleC1kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLnByZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ltYWdlcy9iZWZvcmUucG5nXCIpKSArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXHJcXG59XFxyXFxuLnByZS1ncmV5IHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL2JlZm9yZV9ncmV5LnBuZ1wiKSkgKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxyXFxufVxcclxcbi5uZXh0IHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL25leHQucG5nXCIpKSArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXHJcXG59XFxyXFxuLm5leHQtZ3JleSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ltYWdlcy9uZXh0X2dyZXkucG5nXCIpKSArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXHJcXG59XFxyXFxuLmNvbnRyb2xzLWljb24ge1xcclxcbiAgd2lkdGg6IDE4cHg7XFxyXFxuICBoZWlnaHQ6IDE4cHg7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcclxcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcclxcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcclxcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW46IGF1dG8gMDtcXHJcXG59XFxyXFxuLnBsYXkge1xcclxcbiAgd2lkdGg6IDI0cHg7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ltYWdlcy9wbGF5LnBuZ1wiKSkgKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcXHJcXG4gIG1hcmdpbjogMCAyNSU7XFxyXFxufVxcclxcbi5wbGF5LWdyZXkge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvcGxheV9ncmV5LnBuZ1wiKSkgKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcXHJcXG59XFxyXFxuLnBhdXNlIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL3BhdXNlLnBuZ1wiKSkgKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxyXFxufVxcclxcbi5wYXVzZS1ncmV5IHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL3BhdXNlX2dyZXkucG5nXCIpKSArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xcclxcbn1cXHJcXG4udGltZS1jb250cm9scyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuLnRpbWVsaW5lIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICBoZWlnaHQ6IDEuNXB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDdweCAxNHB4O1xcclxcbn1cXHJcXG4udGltZWxpbmVfX2FjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgaGVpZ2h0OiAxLjVweDtcXHJcXG4gIHdpZHRoOiAwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmdyZXkgLnRpbWVsaW5lX19hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcXHJcXG59XFxyXFxuLnRpbWVsaW5lX19hY3RpdmVfX2JhbGwge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IC0xMHB4O1xcclxcbiAgdG9wOiAtMTBweDtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbi5ncmV5IC50aW1lbGluZV9fYWN0aXZlX19iYWxsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XFxyXFxufVxcclxcbi50aW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1pbi13aWR0aDogMnJlbTtcXHJcXG59XFxyXFxuLmdyZXkgLnRpbWUge1xcclxcbiAgY29sb3I6ICM2NjY7XFxyXFxufVxcclxcbi5iZ20tc291cmNlIHtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVzY2FwZSh1cmwpIHtcbiAgICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAgICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgICB9XG4gICAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAgIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gICAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpKSB7XG4gICAgICAgIHJldHVybiAnXCInICsgdXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykgKyAnXCInXG4gICAgfVxuXG4gICAgcmV0dXJuIHVybFxufVxuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2ZjMGIxOTI3YmRiNjU0Y2QyYjAwMmM1NzI4OTlhNjQubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjQ2Y2IyOWEzYzA0YmZmMGE4OWRiYzUzOGZmYmE1NjUubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzFmZTc1MDNkNjA5OWI2NzRmNGY0ZjA1ZjYyYjI3ZmIubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzkwYmM3ZmYxMGY4MDc5OTkzMzJkMGU2MWY0ZTMwYjMubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTQ0M2M3ZjM5NWM0MDNiZjQwMjE0ZDZjZDE1MGFkNzEubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTYxMjQxNDU3MDMwZjFhYjEwY2E4MzRhNmM4ZjczZWQubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDhmMjY4MGMyYjA0YmQ2MjkwOGY0N2M1MWZhMWMxZTUubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTI2YzdiMjI3MTM3NGM0MTY4YTBiMTExYTM4MzI4ZGQubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODVlODRjMThiOGE3MWJhZTdlOTZkZWJhYzliY2QyNmEubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTEzODg4NzkwZDExYWZlYzRiZTViNWFlNDQxMjliMzAubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTc0ZTgxZjYxY2I3Yzg3NTAyY2MyM2RkYTljMTZiMWMubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjQ1YTg1YTU2Y2Y3NjMxYmVhNGY1YjA5MWUwYmNmNWYubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODNhYWMwYjYyZjk4M2RjNjZhNTE4ZGRjMjk5ZjhmZTkubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTQxYTMzZjgxNmM0Yzc5M2IzZTViZjJkNzljMWRkYjUubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDdlMzZmOWEwZmQxY2M2MjE3MmE4ZjRjZjVmNDBhYTkubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDliNDM2NjViZjQ1OTM5MjA3N2Y4ZjFjZDI0MTQyMzcubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMGM3MTljZDQwOTRlNTFlZjRjNDFlZTYzOTM3NGE0M2EubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGU2ZDM0NzMyNDAxODE0ODBmZTgzYTZkZGMzZjE0NTAubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmI5NDI2MWZhNjYwYmUyZDkyYjUwOTdhNDczOTJmMGYubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWQ0MWQyYmI4MTVkZDkxZDZlNzE5MzVmMTQ1NmEzMDUubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjI1MzRiMzdkMmYzZmE2YzNiNTdhZmZkMDAzOWEyYzMubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWFiNDlmZTY3NmQ1YTZiYWFlZDE1MzdlZGQ1ODRkNTcubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjI0YWI3NjFlZTczY2Q5ODdmMjVlODczYWEwMDk2YjAubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMGFiMDNiMWY0OWY3MThjZTQ0MDQwOTA4ZTMxMWMxYTEubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMWM2OWUxYjU0Y2NlZDg2MGRhMWRmNTIzMzg1ZmNmN2UubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTY3ZTFkNjEwOWE0ZjY2ODM3NDQ2ZjE0YThmOWQ2MDAubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGQ0OTIzMDk2OGRmY2ViMjhhNjcxZTYwOTJhNzViMDAubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYWVjYjRkODE2NGVlYWJjMzI5YzI2MDBmNTA3NDE2OWEubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjJhMmJjZDI3OTVkMjBmNzk1N2VmZTcxN2JhZGE0ZjQubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWZhNzY1YzEwY2IyMThlYThjMzdjOGVjNjFhNmRiNzMubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODZmNDk0NjVhNTUzNGZkMTI2MzU2MGNmZjZiODE2MTQubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTlkZGI5MjlhMTE1MThhNDQyMjk5Mzc0OTEyMjdjMWMubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTMzNDk4YjgxMWQ2NjU5ZDA1M2E5MWI2OWVhYTI5ZWQubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzk4N2IwNmQxNjZjYzNhMjBiODg4ZDI5YWRmOWFlMDEubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTZhYWRkNGI4MjI1YWE1ZDRmNDRlMGVjNTI0NTY0YjAubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzA5MTBlOTg3MjBiNGNlMGY3ZDliYzI3MTQ2Mzg3YjAubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGE2Y2IwOGI3MDc2ZDQzZTgxNjYxMjJlNmQzN2IzM2IubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2VkMWQ2ZWI1YThkZmU2ZTJkMzczZGJiMWMzMDMzZmIubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODM1MDc2YmIzZGUyYTJjN2YzNmNhZDA0Y2YxMzJiMmQubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiN2QxZWNmODRiODMzYzliZGY4YjA3ZWM3NWMyZmMyYTAubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2E3MWI0MjkwMjc2NzgyOTg1YTNiOWY1Mjg2ZGU5YjIubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMGQ2ZGVmY2Q0NzQyYzg2NmRmODI1NmZkOTVlZGIxYTYubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2E5ZDM0OTU1YTc2MDAyZjZjM2I5MDg0ZDllOGQ2NGQubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjljODVhOWQ5YWM4ZDA3ZmNmNGYwZmRkMWEzODVkZmYubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjE4NjFkYmZhZjY4MzE5Yzk0YzNjYmQyMTZkMmEwOTMubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTNhYmIxMzBmNjdiYzM5ZDQ4OTRlMjc5ZmE3OTZlMmUubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDAxMjFlODdlMjYwZTFhNzI0NGFiOTNjZjBjMTE4ZDgubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjk1YTdkMzYzMWM5ZjJiYzZlNWIyOGU2N2U4YTU5MjMubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMGM3MTI3ZDc2MmYzMDM1YjM2M2MyNTEyZDY3NTg2MWYubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzhkOWQ2MDc2MmVlOTQzYjI3YjU1ZmUwNDU1MGNkYjIubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiN2Q1NjNhMDNhY2UwMjE5OWRlNDBjYjMxMDRlMTAwZDQubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDNiMmVjNjc4OTFjNDMxMzhlOTVhNmEyZThjZjk3OWQubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTFmZThlYTQ2ZGMzNWY2OTUyNjQwMTMzZWQ2NzQ1MjAubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmI2M2Y2MDk4NDk2Y2ZjYjJkNWIwNGUwZTUwYWYyNDYubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTc4YWNhNjdhODdjMGExNGJlMjUzMzcyMmI3N2I0ZjYubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTI1NDAyZWMyM2M4MjI2MGYwODcwMmRlOWIzOGQyZTQubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDczZDcwYjM5N2Q5Mzk0NzUzMzNlM2Q5YjZkZjY0NTcubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2FhZTBiN2FlZjQxOGM2M2YzZjRkYzU5OGZkYzAyNTgubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGE3ZmY0ZWY3YjE0NmZmYTZjMWU5NTYyYzlkZjQ5OGMubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOWI4MmM3YWFiYzFjNWVkZjU0ZWI5MzJhMjM5NWY1ZGUubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWEyMjNmODk3OWRkMzBhNmY3NTYwM2QyYjFhNDJkM2QubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjAxNDlhNTk5MTNkMmQ4ZTAxNDZmYzYzODI0NDYwNDcubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjA1NWRlOTE1NmM2ZmU3YWI2YTBjN2VhNmFjNzBkMDMubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjA4ZTRiZTZjODBlYWYzMWY1NjdmMjgyM2E0OTcwNmUubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjAxZTUwNWNiYTBiMDE0NzJhMjNkNTliZjkzZjE1MjQubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWFhYWQ5MjNkYWIwNThmZTkwODJlMGQ0NGUyM2JhNTUubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGFiMDgyM2YwYjBkYjQyMmQ1YjAzODNhNWYxYzY1OTQubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWQ3OTdmZDQ0ODg1MDliMjQ4MmJjMTFkOGUzZDEwMTUubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYmI1MDJkNDdhZWExNDhlNWFmMmQ4YTBkMjZmYjg1MmUubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTYwODM1MjNkMDA5MmJiMTFlMzViNzVkODk2OTA0OGUubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzA3ZjU1MDc4ODhhNjYzMjU2MGQ4ZDhiZjIwNzk4ZmEubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOWQ3Zjk3ZWRmM2IwZmMwZDMzODQyNzUzMjdhOTg0ODgubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiN2FmYjBkMmFhMzEzM2ZlOWZmYjkwYWZmNjYzYWU0NmMubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTFjZDQ3YWRjMGIyNzZiMjRmYTM3YmJmMDhlYWFkMmUubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjZiYzQwYzZjNGFlYTRmNTI4OTFjMTA4N2QxYWVhODIubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWVhOTc0ODdjMmY4ODA5ZGEwMjYxMDZhYzJlODBiZDMubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmFhYjgzOTI3MzI4YWYzYjM4ZTczMTQwOWI1OTU0ZjgubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMGU3NDJiYjRkYWZjYzIwNzE5Y2YxMWQwNWNlNTg4ZDgubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOGZkODExN2VmMDEwZTBhYWY5N2Q2MzY1Nzc2NTljYzMubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmNlYmQ0MzM2MmY1N2MxZDFiZDY0NmRlMzI3ZmJmZjMubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjc1ZDQyZWFmNDNjNjdkOTNlZjJmZDMxMTY2MjgyZTUubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTNhZjAyNmJlYzRkYWNhMjBkYjYzNGY3OGE1ZmFlMDYubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjVhZmM3OTlmYmU5MTNkMDEwMTI3YjJkNzljOWQxNTkubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjdkNGI2ODAyOTQ1NmE5NTQ4YjQyNjkzMDdlN2VlNjcubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDdhNTQyNTI4YjU2YWYyNzQ1NjBkNjg4OTJiMzlkY2EubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOWY2OWI0ZWI0YTJiYzgwOTExZDQ4MzZhYzY0ZTFkNjcubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMGQ1NWIwOTAzMmVhMDgwZjhlYjBlYmYxZTFlZDc5NGQubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDFhMzg4Yzk4NWMxNzQ0NGZkNDZmNDBlNzkwMDU5NGIubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjQ4M2IxMmVmZjViOWRhNzg0MWM4YzU1YjZlNzY1MzMubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOGQ3MzFmZWYzZDlhZWY2OGM0N2RhYWRlNmVlYmYwMzEubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzc1MGU3NTI4MWE4ZmY0M2U1MjM3MGU2NTRjOTBkNjQubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiN2ZlNGUwZmYyZTkyNzZmNTk4Y2Q4Nzg2MzJmOTUyODgubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTZmNTQwNDc0NzUxYmFmNWRmYzNmMjY0YzNlYzRlYTcubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGE3OWQzODY2MGRiMDYwM2VmOWQyYzNhZjMyMzIyMDUubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDE4MTA5ZjE1YzFmZTJhYmM1YTgyMGI3Nzk2YmQxYWIubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmUxMWEyZDk4Y2M3NjUzZmNkMGI2NGM0YjIxOGFkYWEubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDMwMWVkNzY4MmEzNWIyN2YwNWZkMzk1MDE5ODY0ODYubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTVkZDBhZjI4YWMwOTcwYzc1NWNmYWU5ZGJhN2I4ZGQubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjI1NGQxYzI2MWE2MGUxYzM0Y2E1ZTk4MDlmNzA3NmYubXAzXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTY1NWM1NTdkZjM1OWI4Y2M1ZWFhODFmMTZmM2RiYmUubXAzXCI7IiwidmFyIGF1ZGlvcyA9IHtcclxuICAxOiByZXF1aXJlKCcuLi9yZXMvMS5tcDMnKSxcclxuICAyOiByZXF1aXJlKCcuLi9yZXMvMi5tcDMnKSxcclxuICAzOiByZXF1aXJlKCcuLi9yZXMvMy5tcDMnKSxcclxuICA0OiByZXF1aXJlKCcuLi9yZXMvNC5tcDMnKSxcclxuICA1OiByZXF1aXJlKCcuLi9yZXMvNS5tcDMnKSxcclxuICA2OiByZXF1aXJlKCcuLi9yZXMvNi5tcDMnKSxcclxuICA3OiByZXF1aXJlKCcuLi9yZXMvNy5tcDMnKSxcclxuICA4OiByZXF1aXJlKCcuLi9yZXMvOC5tcDMnKSxcclxuICA5OiByZXF1aXJlKCcuLi9yZXMvOS5tcDMnKSxcclxuICAxMDogcmVxdWlyZSgnLi4vcmVzLzEwLm1wMycpLFxyXG4gIDExOiByZXF1aXJlKCcuLi9yZXMvMTEubXAzJyksXHJcbiAgMTI6IHJlcXVpcmUoJy4uL3Jlcy8xMi5tcDMnKSxcclxuICAxMzogcmVxdWlyZSgnLi4vcmVzLzEzLm1wMycpLFxyXG4gIDE0OiByZXF1aXJlKCcuLi9yZXMvMTQubXAzJyksXHJcbiAgMTU6IHJlcXVpcmUoJy4uL3Jlcy8xNS5tcDMnKSxcclxuICAxNjogcmVxdWlyZSgnLi4vcmVzLzE2Lm1wMycpLFxyXG4gIDE3OiByZXF1aXJlKCcuLi9yZXMvMTcubXAzJyksXHJcbiAgMTg6IHJlcXVpcmUoJy4uL3Jlcy8xOC5tcDMnKSxcclxuICAxOTogcmVxdWlyZSgnLi4vcmVzLzE5Lm1wMycpLFxyXG4gIDIwOiByZXF1aXJlKCcuLi9yZXMvMjAubXAzJyksXHJcbiAgMjE6IHJlcXVpcmUoJy4uL3Jlcy8yMS5tcDMnKSxcclxuICAyMjogcmVxdWlyZSgnLi4vcmVzLzIyLm1wMycpLFxyXG4gIDIzOiByZXF1aXJlKCcuLi9yZXMvMjMubXAzJyksXHJcbiAgMjQ6IHJlcXVpcmUoJy4uL3Jlcy8yNC5tcDMnKSxcclxuICAyNTogcmVxdWlyZSgnLi4vcmVzLzI1Lm1wMycpLFxyXG4gIDI2OiByZXF1aXJlKCcuLi9yZXMvMjYubXAzJyksXHJcbiAgMjc6IHJlcXVpcmUoJy4uL3Jlcy8yNy5tcDMnKSxcclxuICAyODogcmVxdWlyZSgnLi4vcmVzLzI4Lm1wMycpLFxyXG4gIDI5OiByZXF1aXJlKCcuLi9yZXMvMjkubXAzJyksXHJcbiAgMzA6IHJlcXVpcmUoJy4uL3Jlcy8zMC5tcDMnKSxcclxuICAzMTogcmVxdWlyZSgnLi4vcmVzLzMxLm1wMycpLFxyXG4gIDMyOiByZXF1aXJlKCcuLi9yZXMvMzIubXAzJyksXHJcbiAgMzM6IHJlcXVpcmUoJy4uL3Jlcy8zMy5tcDMnKSxcclxuICAzNDogcmVxdWlyZSgnLi4vcmVzLzM0Lm1wMycpLFxyXG4gIDM1OiByZXF1aXJlKCcuLi9yZXMvMzUubXAzJyksXHJcbiAgMzY6IHJlcXVpcmUoJy4uL3Jlcy8zNi5tcDMnKSxcclxuICAzNzogcmVxdWlyZSgnLi4vcmVzLzM3Lm1wMycpLFxyXG4gIDM4OiByZXF1aXJlKCcuLi9yZXMvMzgubXAzJyksXHJcbiAgMzk6IHJlcXVpcmUoJy4uL3Jlcy8zOS5tcDMnKSxcclxuICA0MDogcmVxdWlyZSgnLi4vcmVzLzQwLm1wMycpLFxyXG4gIDQxOiByZXF1aXJlKCcuLi9yZXMvNDEubXAzJyksXHJcbiAgNDI6IHJlcXVpcmUoJy4uL3Jlcy80Mi5tcDMnKSxcclxuICA0MzogcmVxdWlyZSgnLi4vcmVzLzQzLm1wMycpLFxyXG4gIDQ0OiByZXF1aXJlKCcuLi9yZXMvNDQubXAzJyksXHJcbiAgNDU6IHJlcXVpcmUoJy4uL3Jlcy80NS5tcDMnKSxcclxuICA0NjogcmVxdWlyZSgnLi4vcmVzLzQ2Lm1wMycpLFxyXG4gIDQ3OiByZXF1aXJlKCcuLi9yZXMvNDcubXAzJyksXHJcbiAgNDg6IHJlcXVpcmUoJy4uL3Jlcy80OC5tcDMnKSxcclxuICA0OTogcmVxdWlyZSgnLi4vcmVzLzQ5Lm1wMycpLFxyXG4gIDUwOiByZXF1aXJlKCcuLi9yZXMvNTAubXAzJyksXHJcbiAgNTE6IHJlcXVpcmUoJy4uL3Jlcy81MS5tcDMnKSxcclxuICA1MjogcmVxdWlyZSgnLi4vcmVzLzUyLm1wMycpLFxyXG4gIDUzOiByZXF1aXJlKCcuLi9yZXMvNTMubXAzJyksXHJcbiAgNTQ6IHJlcXVpcmUoJy4uL3Jlcy81NC5tcDMnKSxcclxuICA1NTogcmVxdWlyZSgnLi4vcmVzLzU1Lm1wMycpLFxyXG4gIDU2OiByZXF1aXJlKCcuLi9yZXMvNTYubXAzJyksXHJcbiAgNTc6IHJlcXVpcmUoJy4uL3Jlcy81Ny5tcDMnKSxcclxuICA1ODogcmVxdWlyZSgnLi4vcmVzLzU4Lm1wMycpLFxyXG4gIDU5OiByZXF1aXJlKCcuLi9yZXMvNTkubXAzJyksXHJcbiAgNjA6IHJlcXVpcmUoJy4uL3Jlcy82MC5tcDMnKSxcclxuICA2MTogcmVxdWlyZSgnLi4vcmVzLzYxLm1wMycpLFxyXG4gIDYyOiByZXF1aXJlKCcuLi9yZXMvNjIubXAzJyksXHJcbiAgNjM6IHJlcXVpcmUoJy4uL3Jlcy82My5tcDMnKSxcclxuICA2NDogcmVxdWlyZSgnLi4vcmVzLzY0Lm1wMycpLFxyXG4gIDY1OiByZXF1aXJlKCcuLi9yZXMvNjUubXAzJyksXHJcbiAgNjY6IHJlcXVpcmUoJy4uL3Jlcy82Ni5tcDMnKSxcclxuICA2NzogcmVxdWlyZSgnLi4vcmVzLzY3Lm1wMycpLFxyXG4gIDY4OiByZXF1aXJlKCcuLi9yZXMvNjgubXAzJyksXHJcbiAgNjk6IHJlcXVpcmUoJy4uL3Jlcy82OS5tcDMnKSxcclxuICA3MDogcmVxdWlyZSgnLi4vcmVzLzcwLm1wMycpLFxyXG4gIDcxOiByZXF1aXJlKCcuLi9yZXMvNzEubXAzJyksXHJcbiAgNzI6IHJlcXVpcmUoJy4uL3Jlcy83Mi5tcDMnKSxcclxuICA3MzogcmVxdWlyZSgnLi4vcmVzLzczLm1wMycpLFxyXG4gIDc0OiByZXF1aXJlKCcuLi9yZXMvNzQubXAzJyksXHJcbiAgNzU6IHJlcXVpcmUoJy4uL3Jlcy83NS5tcDMnKSxcclxuICA3NjogcmVxdWlyZSgnLi4vcmVzLzc2Lm1wMycpLFxyXG4gIDc3OiByZXF1aXJlKCcuLi9yZXMvNzcubXAzJyksXHJcbiAgNzg6IHJlcXVpcmUoJy4uL3Jlcy83OC5tcDMnKSxcclxuICA3OTogcmVxdWlyZSgnLi4vcmVzLzc5Lm1wMycpLFxyXG4gIDgwOiByZXF1aXJlKCcuLi9yZXMvODAubXAzJyksXHJcbiAgODE6IHJlcXVpcmUoJy4uL3Jlcy84MS5tcDMnKSxcclxuICA4MjogcmVxdWlyZSgnLi4vcmVzLzgyLm1wMycpLFxyXG4gIDgzOiByZXF1aXJlKCcuLi9yZXMvODMubXAzJyksXHJcbiAgODQ6IHJlcXVpcmUoJy4uL3Jlcy84NC5tcDMnKSxcclxuICA4NTogcmVxdWlyZSgnLi4vcmVzLzg1Lm1wMycpLFxyXG4gIDg2OiByZXF1aXJlKCcuLi9yZXMvODYubXAzJyksXHJcbiAgODc6IHJlcXVpcmUoJy4uL3Jlcy84Ny5tcDMnKSxcclxuICA4ODogcmVxdWlyZSgnLi4vcmVzLzg4Lm1wMycpLFxyXG4gIDg5OiByZXF1aXJlKCcuLi9yZXMvODkubXAzJyksXHJcbiAgOTA6IHJlcXVpcmUoJy4uL3Jlcy85MC5tcDMnKSxcclxuICA5MTogcmVxdWlyZSgnLi4vcmVzLzkxLm1wMycpLFxyXG4gIDkyOiByZXF1aXJlKCcuLi9yZXMvOTIubXAzJyksXHJcbiAgOTM6IHJlcXVpcmUoJy4uL3Jlcy85My5tcDMnKSxcclxuICA5NDogcmVxdWlyZSgnLi4vcmVzLzk0Lm1wMycpLFxyXG4gIDk1OiByZXF1aXJlKCcuLi9yZXMvOTUubXAzJyksXHJcbiAgOTY6IHJlcXVpcmUoJy4uL3Jlcy85Ni5tcDMnKSxcclxuICA5NzogcmVxdWlyZSgnLi4vcmVzLzk3Lm1wMycpLFxyXG4gIDk4OiByZXF1aXJlKCcuLi9yZXMvOTgubXAzJyksXHJcbiAgOTk6IHJlcXVpcmUoJy4uL3Jlcy85OS5tcDMnKSxcclxuICAxMDA6IHJlcXVpcmUoJy4uL3Jlcy8xMDAubXAzJylcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGF1ZGlvc1xyXG4iLCJ2YXIgYXVkaW9zID0ge1xuICAxOiByZXF1aXJlKCcuLi9iZy8xLmpwZycpLFxuICAyOiByZXF1aXJlKCcuLi9iZy8yLmpwZycpLFxuICAzOiByZXF1aXJlKCcuLi9iZy8zLmpwZycpLFxuICA0OiByZXF1aXJlKCcuLi9iZy80LmpwZycpLFxuICA1OiByZXF1aXJlKCcuLi9iZy81LmpwZycpLFxuICA2OiByZXF1aXJlKCcuLi9iZy82LmpwZycpLFxuICA3OiByZXF1aXJlKCcuLi9iZy83LmpwZycpLFxuICA4OiByZXF1aXJlKCcuLi9iZy84LmpwZycpLFxuICA5OiByZXF1aXJlKCcuLi9iZy85LmpwZycpLFxuICAxMDogcmVxdWlyZSgnLi4vYmcvMTAuanBnJyksXG4gIDExOiByZXF1aXJlKCcuLi9iZy8xMS5qcGcnKSxcbiAgMTI6IHJlcXVpcmUoJy4uL2JnLzEyLmpwZycpLFxuICAxMzogcmVxdWlyZSgnLi4vYmcvMTMuanBnJyksXG4gIDE0OiByZXF1aXJlKCcuLi9iZy8xNC5qcGcnKSxcbiAgMTU6IHJlcXVpcmUoJy4uL2JnLzE1LmpwZycpLFxuICAxNjogcmVxdWlyZSgnLi4vYmcvMTYuanBnJyksXG4gIDE3OiByZXF1aXJlKCcuLi9iZy8xNy5qcGcnKSxcbiAgMTg6IHJlcXVpcmUoJy4uL2JnLzE4LmpwZycpLFxuICAxOTogcmVxdWlyZSgnLi4vYmcvMTkuanBnJyksXG4gIDIwOiByZXF1aXJlKCcuLi9iZy8yMC5qcGcnKSxcbiAgMjE6IHJlcXVpcmUoJy4uL2JnLzIxLmpwZycpLFxuICAyMjogcmVxdWlyZSgnLi4vYmcvMjIuanBnJyksXG4gIDIzOiByZXF1aXJlKCcuLi9iZy8yMy5qcGcnKSxcbiAgMjQ6IHJlcXVpcmUoJy4uL2JnLzI0LmpwZycpLFxuICAyNTogcmVxdWlyZSgnLi4vYmcvMjUuanBnJyksXG4gIDI2OiByZXF1aXJlKCcuLi9iZy8yNi5qcGcnKSxcbiAgMjc6IHJlcXVpcmUoJy4uL2JnLzI3LmpwZycpLFxuICAyODogcmVxdWlyZSgnLi4vYmcvMjguanBnJyksXG4gIDI5OiByZXF1aXJlKCcuLi9iZy8yOS5qcGcnKSxcbiAgMzA6IHJlcXVpcmUoJy4uL2JnLzMwLmpwZycpLFxuICAzMTogcmVxdWlyZSgnLi4vYmcvMzEuanBnJyksXG4gIDMyOiByZXF1aXJlKCcuLi9iZy8zMi5qcGcnKSxcbiAgMzM6IHJlcXVpcmUoJy4uL2JnLzMzLmpwZycpLFxuICAzNDogcmVxdWlyZSgnLi4vYmcvMzQuanBnJyksXG4gIDM1OiByZXF1aXJlKCcuLi9iZy8zNS5qcGcnKSxcbiAgMzY6IHJlcXVpcmUoJy4uL2JnLzM2LmpwZycpLFxuICAzNzogcmVxdWlyZSgnLi4vYmcvMzcuanBnJyksXG4gIDM4OiByZXF1aXJlKCcuLi9iZy8zOC5qcGcnKSxcbiAgMzk6IHJlcXVpcmUoJy4uL2JnLzM5LmpwZycpLFxuICA0MDogcmVxdWlyZSgnLi4vYmcvNDAuanBnJyksXG4gIDQxOiByZXF1aXJlKCcuLi9iZy80MS5qcGcnKSxcbiAgNDI6IHJlcXVpcmUoJy4uL2JnLzQyLmpwZycpLFxuICA0MzogcmVxdWlyZSgnLi4vYmcvNDMuanBnJyksXG4gIDQ0OiByZXF1aXJlKCcuLi9iZy80NC5qcGcnKSxcbiAgNDU6IHJlcXVpcmUoJy4uL2JnLzQ1LmpwZycpLFxuICA0NjogcmVxdWlyZSgnLi4vYmcvNDYuanBnJyksXG4gIDQ3OiByZXF1aXJlKCcuLi9iZy80Ny5qcGcnKSxcbiAgNDg6IHJlcXVpcmUoJy4uL2JnLzQ4LmpwZycpLFxuICA0OTogcmVxdWlyZSgnLi4vYmcvNDkuanBnJyksXG4gIDUwOiByZXF1aXJlKCcuLi9iZy81MC5qcGcnKSxcbiAgNTE6IHJlcXVpcmUoJy4uL2JnLzUxLmpwZycpLFxuICA1MjogcmVxdWlyZSgnLi4vYmcvNTIuanBnJyksXG4gIDUzOiByZXF1aXJlKCcuLi9iZy81My5qcGcnKSxcbiAgNTQ6IHJlcXVpcmUoJy4uL2JnLzU0LmpwZycpLFxuICA1NTogcmVxdWlyZSgnLi4vYmcvNTUuanBnJyksXG4gIDU2OiByZXF1aXJlKCcuLi9iZy81Ni5qcGcnKSxcbiAgNTc6IHJlcXVpcmUoJy4uL2JnLzU3LmpwZycpLFxuICA1ODogcmVxdWlyZSgnLi4vYmcvNTguanBnJyksXG4gIDU5OiByZXF1aXJlKCcuLi9iZy81OS5qcGcnKSxcbiAgNjA6IHJlcXVpcmUoJy4uL2JnLzYwLmpwZycpLFxuICA2MTogcmVxdWlyZSgnLi4vYmcvNjEuanBnJyksXG4gIDYyOiByZXF1aXJlKCcuLi9iZy82Mi5qcGcnKSxcbiAgNjM6IHJlcXVpcmUoJy4uL2JnLzYzLmpwZycpLFxuICA2NDogcmVxdWlyZSgnLi4vYmcvNjQuanBnJyksXG4gIDY1OiByZXF1aXJlKCcuLi9iZy82NS5qcGcnKSxcbiAgNjY6IHJlcXVpcmUoJy4uL2JnLzY2LmpwZycpLFxuICA2NzogcmVxdWlyZSgnLi4vYmcvNjcuanBnJyksXG4gIDY4OiByZXF1aXJlKCcuLi9iZy82OC5qcGcnKSxcbiAgNjk6IHJlcXVpcmUoJy4uL2JnLzY5LmpwZycpLFxuICA3MDogcmVxdWlyZSgnLi4vYmcvNzAuanBnJyksXG4gIDcxOiByZXF1aXJlKCcuLi9iZy83MS5qcGcnKSxcbiAgNzI6IHJlcXVpcmUoJy4uL2JnLzcyLmpwZycpLFxuICA3MzogcmVxdWlyZSgnLi4vYmcvNzMuanBnJyksXG4gIDc0OiByZXF1aXJlKCcuLi9iZy83NC5qcGcnKSxcbiAgNzU6IHJlcXVpcmUoJy4uL2JnLzc1LmpwZycpLFxuICA3NjogcmVxdWlyZSgnLi4vYmcvNzYuanBnJyksXG4gIDc3OiByZXF1aXJlKCcuLi9iZy83Ny5qcGcnKSxcbiAgNzg6IHJlcXVpcmUoJy4uL2JnLzc4LmpwZycpLFxuICA3OTogcmVxdWlyZSgnLi4vYmcvNzkuanBnJyksXG4gIDgwOiByZXF1aXJlKCcuLi9iZy84MC5qcGcnKSxcbiAgODE6IHJlcXVpcmUoJy4uL2JnLzgxLmpwZycpLFxuICA4MjogcmVxdWlyZSgnLi4vYmcvODIuanBnJyksXG4gIDgzOiByZXF1aXJlKCcuLi9iZy84My5qcGcnKSxcbiAgODQ6IHJlcXVpcmUoJy4uL2JnLzg0LmpwZycpLFxuICA4NTogcmVxdWlyZSgnLi4vYmcvODUuanBnJyksXG4gIDg2OiByZXF1aXJlKCcuLi9iZy84Ni5qcGcnKSxcbiAgODc6IHJlcXVpcmUoJy4uL2JnLzg3LmpwZycpLFxuICA4ODogcmVxdWlyZSgnLi4vYmcvODguanBnJyksXG4gIDg5OiByZXF1aXJlKCcuLi9iZy84OS5qcGcnKSxcbiAgOTA6IHJlcXVpcmUoJy4uL2JnLzkwLmpwZycpLFxuICA5MTogcmVxdWlyZSgnLi4vYmcvOTEuanBnJyksXG4gIDkyOiByZXF1aXJlKCcuLi9iZy85Mi5qcGcnKSxcbiAgOTM6IHJlcXVpcmUoJy4uL2JnLzkzLmpwZycpLFxuICA5NDogcmVxdWlyZSgnLi4vYmcvOTQuanBnJyksXG4gIDk1OiByZXF1aXJlKCcuLi9iZy85NS5qcGcnKSxcbiAgOTY6IHJlcXVpcmUoJy4uL2JnLzk2LmpwZycpLFxuICA5NzogcmVxdWlyZSgnLi4vYmcvOTcuanBnJyksXG4gIDk4OiByZXF1aXJlKCcuLi9iZy85OC5qcGcnKSxcbiAgOTk6IHJlcXVpcmUoJy4uL2JnLzk5LmpwZycpLFxuICAxMDA6IHJlcXVpcmUoJy4uL2JnLzEwMC5qcGcnKVxufVxubW9kdWxlLmV4cG9ydHMgPSBhdWRpb3NcbiIsIi8vIGZ1bmN0aW9uIGZvcm1hdChkYXRhKSB7XHJcbi8vICAgdmFyIHJlcyA9IFtdXHJcbi8vICAgZm9yICh2YXIgaSA9IDE7IGkgPCAxMDA7IGkrKykge1xyXG4vLyAgICAgdmFyIGNJdGVtID0gZGF0YS5zcGxpdChgJHtpKzF944CBYClbMF0uc3BsaXQoYCR7aX3jgIFgKVsxXVxyXG4vLyAgICAgdmFyIGxpc3QgPSBjSXRlbS5zcGxpdCgnXFxuJylcclxuLy8gICAgIHZhciBtZGF0YSA9IHtcclxuLy8gICAgICAgdGl0bGU6ICcnLFxyXG4vLyAgICAgICBhdXRob3I6ICcnLFxyXG4vLyAgICAgICBjb250ZW50OiBbXSxcclxuLy8gICAgICAgYmdtOiAnJyxcclxuLy8gICAgICAgYmdtU291cmNlOiAnJyxcclxuLy8gICAgICAgcmVwb3J0ZXI6ICcnXHJcbi8vICAgICB9XHJcbi8vICAgICBsaXN0LmZvckVhY2gobGluZSA9PiB7XHJcbi8vICAgICAgIGlmIChsaW5lID09PSAnJykge1xyXG4vLyAgICAgICAgIHJldHVyblxyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIC8vIOagh+mimFxyXG4vLyAgICAgICBpZiAoIW1kYXRhLnRpdGxlKSB7XHJcbi8vICAgICAgICAgcmV0dXJuIG1kYXRhLnRpdGxlID0gbGluZVxyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIC8vIOS9nOiAhVxyXG4vLyAgICAgICBpZiAoIW1kYXRhLmF1dGhvcikge1xyXG4vLyAgICAgICAgIHJldHVybiBtZGF0YS5hdXRob3IgPSBsaW5lXHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgLy8g5YaF5a65ICsgYmdtXHJcbi8vICAgICAgIGlmICghbWRhdGEuYmdtKSB7XHJcbi8vICAgICAgICAgaWYgKGxpbmUuaW5kZXhPZignQkdN77yaJykgPiAtMSkge1xyXG4vLyAgICAgICAgICAgcmV0dXJuIG1kYXRhLmJnbSA9IGxpbmUucmVwbGFjZSgnQkdN77yaJywgJycpXHJcbi8vICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgIHJldHVybiBtZGF0YS5jb250ZW50LnB1c2gobGluZSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgLy8gYmdtc291cmNlXHJcbi8vICAgICAgIGlmICghbWRhdGEuYmdtU291cmNlKSB7XHJcbi8vICAgICAgICAgaWYgKGxpbmUuaW5kZXhPZignQkdN5p2l5rqQ77yaJykgPiAtMSkge1xyXG4vLyAgICAgICAgICAgcmV0dXJuIG1kYXRhLmJnbVNvdXJjZSA9IGxpbmUucmVwbGFjZSgnQkdN5p2l5rqQ77yaJywgJycpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIC8vICDmnJfor7VcclxuLy8gICAgICAgaWYgKCFtZGF0YS5yZXBvcnRlcikge1xyXG4vLyAgICAgICAgIGlmIChsaW5lLmluZGV4T2YoJ+acl+ivu+iAhe+8micpID4gLTEpIHtcclxuLy8gICAgICAgICAgIHJldHVybiBtZGF0YS5yZXBvcnRlciA9IGxpbmUucmVwbGFjZSgn5pyX6K+76ICF77yaJywgJycpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9KVxyXG4vLyAgICAgcmVzLnB1c2gobWRhdGEpXHJcbi8vICAgfVxyXG4vLyAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlcykpXHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFt7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuS4gOaPoeegguOAi+iKgumAiVwiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya55+z5bed5ZWE5pyoXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuaIkeaJgOaKseeahOS4gOWIh+aAneaDs1wiLCBcIuS7v+S9m+mDveaYr+ayoeaciemSseiAjOW8lei1t+eahO+8m1wiLCBcIueni+mjjuWQuei1t+adpeS6huOAglwiXSxcclxuICBcImJnbVwiOiBcIktldmluIE1hY0xlb2QtR3ltbm9wZWRpZSBObyAyXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2luY29tcGV0ZWNoLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlj7Pnn7PlhYjnlJ9cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiumUiOOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5byX6YeM5b636YeM5biMwrflqIHlu4nCt+WwvOmHh1wiLFxyXG4gIFwiY29udGVudFwiOiBbXCLnlJ/plIjkuZ/mnInlv4XopoFcIiwgXCLlhYnmmK/plJDliKnkuZ/kuI3ooYxcIiwgXCLlkKbliJnkurrku6zluLjluLjkvJror7TkvaDvvJpcIiwgXCLku5blpKrlubTovbvvvIFcIl0sXHJcbiAgXCJiZ21cIjogXCJLZXZpbiBNYWNMZW9kLUd5bW5vcGVkaWUgTm8gMVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9pbmNvbXBldGVjaC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrlr4Llr57jgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muaItOacm+iIklwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLlm63kuK3ph47ojYnmuJDnprvnprvvvIxcIiwgXCLmiZjmoLnkuo7miJHml6fml7bnmoTohJrljbDvvIxcIiwgXCLnu5nku5bku6zmiqvpnZLmmKXnmoTlvanooaPvvIxcIiwgXCLmmJ/kuIvnmoTnm5jku47lhbnmtojpmpDjgIJcIiwgXCLml6XlrZDov4fljrvvvIzlr4Llr57msLjlrZjvvIxcIiwgXCLlr4TprYLkuo7nprvnprvnmoTph47ojYnvvIxcIiwgXCLlg4/pgqPkupvlj6/mgJznmoTngbXprYLvvIxcIixcclxuICAgICAgICAgIFwi6ZW/5b6X5aaC5oiR5LiA6Iis6auY44CCXCIsIFwi5oiR5LuK5LiN5aSN5Yiw5Zut5Lit5Y6777yMXCIsIFwi5a+C5a+e5bey5aaC5oiR5LiA6Iis6auY77yMXCIsIFwi5oiR5aSc5Z2Q5ZCs6aOO77yM5pi855yg5ZCs6Zuo77yMXCIsIFwi5oKf5b6X5pyI5aaC5L2V57y677yM5aSp5aaC5L2V6ICBXCJdLFxyXG4gIFwiYmdtXCI6IFwiQWxleGFuZGVyIE5ha2FyYWRhLVdpbnRlclwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9mcmVlcGQuY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIk5q5a6r6KKtXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrniLHnnInlsI/mnK3jgIvoioLpgIlcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muW+kOW/l+aRqVwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLniLHnmoTlh7rlj5HngrnvvIxcIiwgXCLkuI3kuIDlrprmmK/ouqvkvZPvvIxcIiwgXCLkvYbniLHliLDkuobouqvkvZNcIiwgXCLlsLHliLDkuobpobbngrnjgIJcIiwgXCLljozmgbbnmoTlh7rlj5HngrnvvIxcIiwgXCLkuZ/kuI3kuIDlrprmmK/ouqvkvZPvvIxcIiwgXCLkvYbljozmgbbliLDkuobouqvkvZPvvIxcIiwgXCLkuZ/lsLHliLDkuobpobbngrnjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJBbGV4YW5kZXIgTmFrYXJhZGEtV2ludGVyXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2ZyZWVwZC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrkurrpl7TlpLHmoLzjgIvkuKTliJlcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muWkquWusOayu1wiLFxyXG4gIFwiY29udGVudFwiOiBbXCLml6nmmajvvIzmiJHnnYHnnLzphpLmnaXnv7vouqvkuIvluorvvIxcIiwgXCLlj4jlj5jmiJDkuobljp/mnaXpgqPkuKrmtYXoloTml6Dnn6XjgIFcIiwgXCLlloTkuo7kvKroo4XnmoTmu5HnqL3op5LoibLjgIJcIiwgXCLog4blsI/prLzov57lubjnpo/pg73kvJrmg6fmgJXvvIxcIiwgXCLnorDliLDmo4noirHpg73kvJrlj5fkvKTvvIxcIiwgXCLmnInml7bkuZ/kvJrooqvlubjnpo/miYDkvKTjgIJcIixcclxuICAgICAgICAgIFwi6LaB552A6L+Y5rKh5pyJ5Y+X5Lyk77yMXCIsIFwi5oiR5oOz5bCx6L+Z5qC36LW25b+r5YiG6YGT5oms6ZWz44CCXCIsIFwi5oiR5Y+I5pS+5Ye65LqG5oOv55So55qE6YCX56yR54Of5bmV5by544CCXCIsIFwi5omA6LCT5LiW5Lq677yM5LiN5bCx5piv5L2g5ZCX77yfXCJdLFxyXG4gIFwiYmdtXCI6IFwiQWxleGFuZGVyIE5ha2FyYWRhLVdpbnRlclwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9mcmVlcGQuY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK6ICM5bey6ZuGwrflsI/mnYLmhJ/jgIvoioLpgIlcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mumygei/hVwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLmpbzkuIvkuIDkuKrnlLfkurrnl4XlvpfopoHmrbvvvIxcIiwgXCLpgqPpl7TpmpTlo4HnmoTkuIDlrrbllLHnnYDnlZnlo7DmnLrvvIxcIiwgXCLlr7npnaLmmK/lvITlranlrZDjgIJcIiwgXCLmpbzkuIrmnInkuKTkurrni4LnrJHvvJtcIiwgXCLov5jmnInmiZPniYzlo7DjgIJcIiwgXCLmsrPkuK3nmoToiLnkuIrmnInlpbPkurrlk63nnYDlpbnmrbvljrvnmoTmr43kurLjgIJcIixcclxuICAgICAgICAgIFwi5Lq657G755qE5oKy5qyi5bm25LiN55u46YCa77yMXCIsIFwi5oiR5Y+q6KeJ5b6X5LuW5Lus5ZC16Ze544CCXCJdLFxyXG4gIFwiYmdtXCI6IFwiSm9zaCBXb29kd2FyZC1BdXR1bW5cIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9qb3Nod29vZHdhcmQuY29tL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlj7Pnn7PlhYjnlJ9cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuWvguWvnueahOaXtuWAmeOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya6YeR5a2Q576O546yXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuaIkeWvguWvnueahOaXtuWAmVwiLCBcIuWIq+S6uuS4jeefpemBk1wiLCBcIuaIkeWvguWvnueahOaXtuWAmVwiLCBcIuaci+WPi+S7rOWcqOeskVwiLCBcIuaIkeWvguWvnueahOaXtuWAmVwiLCBcIuWmiOWmiOeahOiEvuawlOacgOWlvVwiLCBcIuaIkeWvguWvnueahOaXtuWAmVwiLCBcIuS9m+elluS5n+WvguWvnlwiXSxcclxuICBcImJnbVwiOiBcIktldmluIE1hY0xlb2QtU3RhcnJ5XCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2luY29tcGV0ZWNoLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlkIPopb/nk5znmoTlsI/kuozpg45cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuWmguaipuiusOOAi+iKgumAiVwiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya55+z5bed5ZWE5pyoXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuavlOS6uuWFiOefpemBk+S6huaBi+eIseeahOeUnOWRs++8jFwiLCBcIuefpemBk+S6huaCsuWTgOeahOaIke+8jFwiLCBcIuS5n+avlOS6uuWFiOiAgeS6huOAglwiXSxcclxuICBcImJnbVwiOiBcIumbqOOBruWknFwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL2FtYWNoYW11c2ljLmNoYWdhc2kuY29tL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlm5vlpJVcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuaymeS4juayq+OAi+iKgumAiVwiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya57qqwrflk4jCt+e6quS8r+S8plwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLku4Xku4XlnKjmmKjlpKnvvIxcIiwgXCLmiJHorqTkuLrmiJHoh6rlt7Hlj6rmmK/kuIDkuKrnoo7niYfvvIxcIiwgXCLml6Dpn7XlvovlnLDlnKjnlJ/lkb3nmoTnqbnoi43kuK3poqTmipbjgIJcIiwgXCLnjrDlnKjmiJHmmZPlvpfvvIxcIiwgXCLmiJHlsLHmmK/pgqPnqbnoi43vvIxcIiwgXCLkuIDliIfnlJ/lkb3pg73mmK/lnKjmiJHph4zpnaJcIiwgXCLmnInpn7XlvovlnLDovazliqjnmoTnoo7niYfjgIJcIixcclxuICAgICAgICAgIFwi5LuW5Lus5Zyo6KeJ6YaS55qE5pe25YCZ5a+55oiR6K+077yaXCIsIFwi4oCc5L2g5ZKM5L2g5omA5bGF5L2P55qE5LiW55WM77yMXCIsIFwi5Y+q5LiN6L+H5piv5peg6L655rW35rSL55qEXCIsIFwi5peg6L655rKZ5bK45LiK55qE5LiA57KS5rKZ5a2Q44CC4oCdXCIsIFwi5Zyo5qKm6YeM5oiR5a+55LuW5Lus6K+077yaXCIsIFwi4oCc5oiR5bCx5piv6YKj5peg6L6555qE5rW35rSL77yMXCIsIFwi5aSn5Y2D5LiW55WM5Y+q5LiN6L+H5piv5oiR55qEXCIsIFwi5rKZ5bK45LiK55qE5rKZ57KS44CC4oCdXCJdLFxyXG4gIFwiYmdtXCI6IFwi6Zuo44Gu5aScXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vYW1hY2hhbXVzaWMuY2hhZ2FzaS5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK6LCB57uI5bCG5aOw6ZyH5Lq66Ze044CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrlvJfph4zlvrfph4zluIzCt+WogeW7icK35bC86YeHXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuiwgee7iOWwhuWjsOmch+S6uumXtO+8jFwiLCBcIuW/hemVv+S5hea3seiHque8hOm7mO+8m1wiLCBcIuiwgee7iOWwhueCueeHg+mXqueUte+8jFwiLCBcIuW/hemVv+S5heWmguS6kea8guaziuOAglwiXSxcclxuICBcImJnbVwiOiBcIkpvc2ggV29vZHdhcmQtU2hpcHMtTm9Wb3hcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHDvvJovL2pvc2h3b29kd2FyZC5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWbm+WklVwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK54ix55qE5ZOy5a2m44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrpm6rojrFcIixcclxuICBcImNvbnRlbnRcIjogW1wi5rOJ5rC05oC75piv5ZCR5rKz5rC05rGH5rWB77yMXCIsIFwi5rKz5rC05Y+I5rGH5YWl5rW35Lit77yMXCIsIFwi5aSp5a6H55qE6L276aOO5rC46L+c6J6N5pyJXCIsIFwi5LiA56eN55Sc6Jyc55qE5oSf5oOF77ybXCIsIFwi5LiW5LiK5ZOq5pyJ5LuA5LmI5a2k6Zu26Zu277yfXCIsIFwi5LiH54mp55Sx5LqO6Ieq54S25b6LXCIsIFwi6YO95b+F6J6N5Lya5LqO5LiA56eN57K+56We44CCXCIsXHJcbiAgICAgICAgICBcIuS9leS7peS9oOaIkeWNtOeLrOW8gu+8n1wiLCBcIuS9oOeci+mrmOWxseS5n+WcqOWQu+edgOeip+epuu+8jFwiLCBcIuazoua1quS5n+ebuOS6kuaLpeaKse+8m1wiLCBcIuiwgeabvuingeiKseWEv+W9vOatpOS4jeWuue+8mlwiLCBcIuWniuWmueaKiuW8n+WFhOi9u+iUke+8n1wiLCBcIumYs+WFiee0p+e0p+WcsOaLpeaKseedgOWkp+WcsO+8jFwiLCBcIuaciOWFieWcqOWQu+edgOa1t+azou+8mlwiLFxyXG4gICAgICAgICAgXCLkvYbov5nkupvmjqXlkLvlj4jmnInkvZXnm4rvvIxcIiwgXCLopoHmmK/kvaDkuI3ogq/lkLvmiJHvvJ9cIl0sXHJcbiAgXCJiZ21cIjogXCJTdW5kYXlzQ2hpbGRcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vYXVkaW9uYXV0aXguY29tL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCJOauWuq+iirVwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5ouc5Lym6Ie05omY6ams5pavwrfmkanlsJTjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muS5lOayu8K35oiI55m7wrfmi5zkvKZcIixcclxuICBcImNvbnRlbnRcIjogW1wi5bCP6ImH5YGc5Zyo5bK46L6577yMXCIsIFwi6Iif5qWr5rOK5Zyo5rW36YeM77ybXCIsIFwi5Zyo5oiR5Li06LWw5LmL5YmN77yM5omY5aeGwrfmkanlsJTvvIxcIiwgXCLmiJHlsIblj4zlgI3nmoTnpZ3npo/lpYnnjK7nu5nkvaDvvIFcIiwgXCLniLHmiJHnmoTvvIzmiJHmiqXku6Xlj7nmga/jgIJcIiwgXCLmgajmiJHnmoTvvIzmiJHku5jkuYvkuIDnrJHjgIJcIiwgXCLml6DorrrlpLTkuIrnmoToi43nqbnlpoLkvZXkuI3mtYvvvIxcIixcclxuICAgICAgICAgIFwi5oiR5a+55Lu75L2V5LiA56eN5ZG96L+Q6YO95LiN5Zyo5oSP77yBXCIsIFwi5Y2z5L2/5rW35rab5Zu0552A5oiR5ZKG5ZOu77yMXCIsIFwi5a6D5LuN5bCG6L296KGM5oiR55qE6Iif5qWr77ybXCIsIFwi5Y2z5L2/5rKZ5ryg5bCG5oiR5Zuw5L2P77yMXCIsIFwi5Lmf5LuN5pyJ5rOJ5rqQ6K6p5oiR5a+76KeF44CCXCIsIFwi5Y2z5Luk5oiR5oyj5omO5Zyo55Sf5ZG955qE5oKs5bSW77yMXCIsIFwi5rOJ5rC05Yaz5LiN5Lya5p6v5peg5LiA5ru077ybXCIsXHJcbiAgICAgICAgICBcIuWcqOaIkeihsOW+rueahOeBtemtguemu+W8gOS5i+WJje+8jFwiLCBcIuS4uuS6huS9oO+8jOaIkeWwhuWVnOmlruS4jeW3suKAplwiLCBcIuS4lOaKiumCo+aXtueahOazieawtOW9k+S9nOS7iuaXpeeahOmGh+mGqu+8jFwiLCBcIuaIkeWwhuaKiui/meadr+WloOmFkuazvOa0kuWcqOWcsO+8m1wiLCBcIuS9huaEv+S9oOaIkeWuieW6t+aXoOaBme+8jFwiLCBcIuWViu+8jOaJmOWnhsK35pGp5bCU77yM56Wd56aP5L2g77yBXCJdLFxyXG4gIFwiYmdtXCI6IFwiSm9zaCBXb29kd2FyZC1TaGlwcy1Ob1ZveFwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cO+8mi8vam9zaHdvb2R3YXJkLmNvbS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Zub5aSVXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLmr5vlp4bkuozliJlcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muavm+WnhlwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLkvaDopoHlhYvmnI3nmoTmmK/kvaDnmoTomZrojaPlv4NcIiwgXCLmmK/kvaDnmoTngqvogIDmrLJcIiwgXCLkvaDopoHlr7nku5jnmoTmmK/kvaDnmoTml7bliLvmg7PopoHlhrLlh7rmnaVcIiwgXCLmg7PopoHlh7rpo47lpLTnmoTlsI/ogarmmI5cIiwgXCLmiJHku47mnaXpg73ml6Dms5Xlvpfnn6XvvIxcIiwgXCLkurrku6zmmK/nqbbnq5/kuLrku4DkuYjkvJrniLHkuIrlj6bkuIDkuKrkurrvvIxcIixcclxuICAgICAgICAgIFwi5oiR54yc5Lmf6K645oiR5Lus55qE5b+D5LiK6YO95pyJ5LiA5Liq57y65Y+j77yMXCIsIFwi5a6D5piv5Liq56m65rSe77yMXCIsIFwi5ZG85ZG855qE5b6A54G16a2C6YeM54GM552A5Yi66aqo55qE5a+S6aOO77yMXCIsIFwi5omA5Lul5oiR5Lus5oCl5YiH55qE6ZyA6KaB5LiA5Liq5q2j5aW95b2i54q255qE5b+D5p2lXCIsIFwi5aGr5LiK5a6D77yMXCIsIFwi5bCx566X5L2g5piv5aSq6Ziz5LiA5qC35a6M576O55qE5q2j5ZyG5b2i77yMXCIsIFwi5Y+v5piv5oiR5b+D6YeM55qE57y65Y+j77yMXCIsXHJcbiAgICAgICAgICBcIuaIluiuuOWNtOaBsOaBsOaYr+S4quatquatquaJreaJreeahOmUr+m9v+W9ou+8jFwiLCBcIuaJgOS7peS9oOWhq+S4jeS6huOAglwiXSxcclxuICBcImJnbVwiOiBcIktldmluIE1hY0xlb2QtT2ggSG9seSBOaWdodFwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9pbmNvbXBldGVjaC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrkuIDliarmooXCt+mbqOaJk+aiqOiKsea3semXremXqOOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5ZSQ5a+FXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIumbqOaJk+aiqOiKsea3semXremXqO+8jFwiLCBcIuW/mOS6humdkuaYpe+8jOivr+S6humdkuaYpeOAglwiLCBcIui1j+W/g+S5kOS6i+WFseiwgeiuuu+8n1wiLCBcIuiKseS4i+mUgOmtgu+8jOaciOS4i+mUgOmtguOAglwiLCBcIuaEgeiBmuecieWzsOWwveaXpemipu+8jFwiLCBcIuWNg+eCueWVvOeXle+8jOS4h+eCueWVvOeXleOAglwiLCBcIuaZk+eci+WkqeiJsuaarueci+S6ke+8jFwiLCBcIuihjOS5n+aAneWQm++8jOWdkOS5n+aAneWQm+OAglwiXSxcclxuICBcImJnbVwiOiBcImh5b3V0b3VrYVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL211c2ljLmdlb2NpdGllcy5qcC9oYWt1dV9hbWFiaW5lL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLmsYfmlodcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuacqOWFsOivjcK35ouf5Y+k5Yaz57ud6K+N5p+s5Y+L44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrnurPlhbDmgKflvrdcIixcclxuICBcImNvbnRlbnRcIjogW1wi5Lq655Sf6Iul5Y+q5aaC5Yid6KeB77yMXCIsIFwi5L2V5LqL56eL6aOO5oKy55S75omH44CCXCIsIFwi562J6Zey5Y+Y5Y205pWF5Lq65b+D77yMXCIsIFwi5Y206YGT5pWF5Lq65b+D5piT5Y+Y44CCXCIsIFwi6aqK5bGx6K+t572i5riF5a615Y2K77yMXCIsIFwi5rOq6Zuo6Zu26ZOD57uI5LiN5oCo44CCXCIsIFwi5L2V5aaC6JaE5bm46ZSm6KGj6YOO77yMXCIsIFwi5q+U57+86L+e5p6d5b2T5pel5oS/44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwi44GK5Zyw6JS15qeY44Gu44GE44KL5bCP6YGTXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vYW1hY2hhbXVzaWMuY2hhZ2FzaS5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuaxh+aWh1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5aaC5p6c5oiR5LiN5pu+6KeB6L+H5aSq6Ziz44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJroib7nsbPojoku54uE6YeR5qOuXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuaIkeacrOWPr+S7peW/jeWPl+m7keaal1wiLCBcIuWmguaenOaIkeS4jeabvuingei/h+WkqumYs1wiLCBcIueEtuiAjOmYs+WFieW3suS9v+aIkeeahOiNkuWHiVwiLCBcIuaIkOS4uuabtOaWsOeahOiNkuWHiVwiXSxcclxuICBcImJnbVwiOiBcIkpvc2ggV29vZHdhcmQtU2hpcHMtTm9Wb3hcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHDvvJovL2pvc2h3b29kd2FyZC5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuaxh+aWh1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5YG254S244CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrlvpDlv5fmkalcIixcclxuICBcImNvbnRlbnRcIjogW1wi5oiR5piv5aSp56m66YeM55qE5LiA54mH5LqRXCIsIFwi5YG25bCU5oqV5b2x5Zyo5L2g55qE5rOi5b+DXCIsIFwi5L2g5LiN5b+F6K625byCXCIsIFwi5pu05peg6aG75qyi5ZacXCIsIFwi5Zyo6L2s556s6Ze05raI54Gt5LqG6Liq5b2xXCIsIFwi5L2g5oiR55u46YCi5Zyo6buR5aSc55qE5rW35LiKXCIsIFwi5L2g5pyJ5L2g55qE77yM5oiR5pyJ5oiR55qE77yM5pa55ZCRXCIsIFwi5L2g6K6w5b6X5Lmf5aW9XCIsXHJcbiAgICAgICAgICBcIuacgOWlveS9oOW/mOaOiVwiLCBcIuWcqOi/meS6pOS8muaXtuS6kuaUvueahOWFieS6rlwiXSxcclxuICBcImJnbVwiOiBcIktldmluIE1hY0xlb2QtU2FwcGhpcmUgSXNsZVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9pbmNvbXBldGVjaC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Zub5aSVXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrpo57puJ/pm4bjgIvoioLpgIlcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muazsOaIiOWwlFwiLFxyXG4gIFwiY29udGVudFwiOiBbXCJXaGVuIEkgc3RhbmQgYmVmb3JlIHRoZWUgYXQgdGhlIGRheSdzIGVuZCxcIiwgXCJ0aG91IHNoYWx0IHNlZSBteSBzY2FycyBhbmQga25vdyB0aGF0XCIsXHJcbiAgICAgICAgICBcIkkgaGFkIG15IHdvdW5kcyBhbmQgYWxzbyBteSBoZWFsaW5nLlwiLCBcIumVv+aXpeWwveWkhO+8jOaIkeermeWcqOS9oOeahOmdouWJje+8jFwiLCBcIuS9oOWwhueci+WIsOaIkeeahOeWpOeXle+8jFwiLCBcIuefpemBk+aIkeabvue7j+WPl+S8pO+8jOS5n+abvue7j+eXiuaEiOOAglwiXSxcclxuICBcImJnbVwiOiBcIlN1bmRheXNDaGlsZFwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9hdWRpb25hdXRpeC5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5oiR5Y+v5ZCm5bCG5L2g5q+U5YGa5LiA5Liq5aSP5pel44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrojo7lo6vmr5TkuppcIixcclxuICBcImNvbnRlbnRcIjogW1wi5oiR5piv5ZCm5Y+v5Lul5oqK5L2g5q+U5Za75oiQ5aSP5aSp77yfXCIsIFwi6Jm954S25L2g5q+U5aSP5aSp5pu05Y+v54ix5pu05rip5ZKM77yaXCIsIFwi54uC6aOO5Lya5L2/5LqU5pyI5aiH6JW+57qi5raI6aaZ5pat77yMXCIsIFwi5aSP5aSp5oul5pyJ55qE5pe25pel5Lmf6L2s556s5Y2z6L+H77ybXCIsIFwi5pyJ5pe25aSp56m65LmL5beo55y855uu5YWJ5aSq54K954Ot77yMXCIsXHJcbiAgICAgICAgICBcIuWug+mHkeeBv+eBv+eahOmdouiJsuS5n+W4uOiiq+mBruaal++8m1wiLCBcIuiAjOWNg+iKs+S4h+iJs+mDvee7iOWwhuWHi+mbtumjmOiQve+8jFwiLCBcIuiiq+aXtui/kOWkqemBk+WPquabtOabv+WJpeWwvee6ouminO+8m1wiLCBcIuS9huS9oOawuOaBkueahOWkj+WkqeWwhuayoeacieatouWwve+8jFwiLCBcIuS9oOaJgOaLpeacieeahOe+juiyjOS5n+S4jeS8mua2iOWkse+8jFwiLCBcIuatu+elnue7iOmavuWkuOWPo+S9oOa4uOiNoeS6juatu+iNq++8jFwiLFxyXG4gICAgICAgICAgXCLlvZPkvaDlnKjkuI3mnL3nmoTor5fkuK3msLjokYbnm5vml7bvvJtcIiwgXCLlj6ropoHkurrnsbvnlJ/lrZjvvIzmiJbkurrmnInnnLznnZvvvIxcIiwgXCLmiJHnmoTor5flsLHkvJrmtYHkvKDlubbotYvkuojkvaDnlJ/lkb3jgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJHcmVlbkxlYXZlc1wiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9hdWRpb25hdXRpeC5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIk5q5a6r6KKtXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrmiJHop4Hov4fkvaDlk63jgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muS5lOayu8K35oiI55m7wrfmi5zkvKZcIixcclxuICBcImNvbnRlbnRcIjogW1wi5oiR6KeB6L+H5L2g5ZOtXCIsIFwi5pm26I6555qE55qE5rOq54+gXCIsIFwi5LuO6JOd55y8552b5ruR6JC9XCIsIFwi5YOP5LiA5py15qKm5Lit5Ye6546w55qE57Sr572X5YWwXCIsIFwi5ru05LiL5riF6YCP55qE6Zyy54+gXCIsIFwi5oiR6KeB6L+H5L2g56yRXCIsIFwi6L+e6JOd5a6d55+z55qE5YWJ6IqSXCIsIFwi5Lmf5Zug5L2g6ICM5aSx6ImyXCIsXHJcbiAgICAgICAgICBcIuWug+aAjuiDveavlOeahOS4iuWcqOS9oOWHneinhueahOecvOS4rVwiLCBcIumXqueOsOeahOeBtea0u+WFieW9qVwiLCBcIuWwseWmguWQjOWklemYs+S4uui/nOaWueeahOS6keactVwiLCBcIuafk+S4iue7mueDgueahOiJsuW9qVwiLCBcIue8k+e8k+iAjOadpeeahOaaruiJsuS5n+S4jeiDvVwiLCBcIuWwhumcnuWFiemAkOWHuuWkqeWkllwiLCBcIuS9oOeahOeskeWuueiuqeayiemXt+eahOW/g+eBtVwiLCBcIuWIhuS6q+e6r+ecn+eahOasouS5kFwiLFxyXG4gICAgICAgICAgXCLov5npmLPlhYnnlZnkuIvnmoTkuIDpgZPlhYnoipJcIiwgXCLnhafkuq7kuoblv4PngbXkuIrnqbpcIl0sXHJcbiAgXCJiZ21cIjogXCLpm6jjga7lpJxcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9hbWFjaGFtdXNpYy5jaGFnYXNpLmNvbS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwiTmrlrqvooq1cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiumGkuadpeinieW+l+eUmuaYr+eIseS9oOOAi+S4ieWImVwiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5pyx55Sf6LGqXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIumGkuadpeinieW+l+eUmuaYr+eIseS9oOOAglwiLCBcIuimgeaYr+S4luS4iuWPquacieaIkeS7rOS4pOS4quS6uuWkmuS5iOWlve+8jOaIkeS4gOWumuimgeaKiuS9oOasuui0n+W+l+WTreS4jeWHuuadpeOAglwiLCBcIuaIkeaDs+imgeWcqOiMheS6remHjOeci+mbqOOAgVwiLCBcIuWBh+Wxsei+ueeci+iaguiage+8jOeci+idtOidtuaBi+eIse+8jFwiLCBcIueci+icmOibm+e7k+e9ke+8jOeci+awtO+8jOeci+iIue+8jOeci+S6ke+8jFwiLFxyXG4gICAgICAgICAgXCLnnIvngJHluIPvvIznnIvlrovmuIXlpoLnlJznlJzlnLDnnaHop4njgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJSYWZhZWwgS3J1eC1Qb25kXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2ZyZWVwZC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwiTmrlrqvooq1cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuW+ruiogOOAi+iKgumAiVwiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya57qqwrflk4jCt+e6quS8r+S8plwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLlnKjmiJHku4rml6XnmoTmgrLkvKTph4zvvIxcIiwgXCLmnIDkuLroi6bmtqnnmoTmmK/miJHmmKjml6XmrKLkuZDnmoTlm57lv4bjgIJcIiwgXCLorrDlv4bmmK/kuIDnp43nm7jogZrnmoTmlrnlvI/jgIJcIiwgXCLlv5jljbTmmK/kuIDnp43oh6rnlLHnmoTmlrnlvI/jgIJcIiwgXCLpmaTkuobpu5HmmpfkuYvot6/vvIzkurrkuI3lj6/og73liLDovr7pu47mmI7jgIJcIixcclxuICAgICAgICAgIFwi6Zmk6Z2e5oiR55qE5b+D56KO5LqG77yM5ZCm5YiZ5a6D5Y+I5oCO6IO96KKr5byA5ZCv77yfXCJdLFxyXG4gIFwiYmdtXCI6IFwiS2V2aW4gTWFjTGVvZC1CZXRobGVoZW1cIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vaW5jb21wZXRlY2guY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK6Iqx5YS/55qE55y85rOq44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrph5HlrZDnvo7njrJcIixcclxuICBcImNvbnRlbnRcIjogW1wi6LCB6YO95LiN6KaB5ZGK6K+JXCIsIFwi5aW95ZCX77yfXCIsIFwi5riF5pmo5bqt6Zmi6KeS6JC96YeM77yMXCIsIFwi6Iqx5YS/5oKE5oKE5o6J55y85rOq55qE5LqL44CCXCIsIFwi5LiH5LiA6L+Z5LqL6K+05Ye65Y675LqG77yMXCIsIFwi5Lyg5Yiw6Jyc6JyC6ICz5py16YeM77yMXCIsIFwi5a6D5Lya5YOP5YGa5LqG5LqP5b+D5LqL5LiA5qC377yMXCIsIFwi6aOe5Zue5Y676L+Y6JyC6Jyc55qE44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwiUmFmYWVsIEtydXgtTG92ZWx5IFBpYW5vIFNvbmdcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vZnJlZXBkLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlkIPopb/nk5znmoTlsI/kuozpg45cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuS6juaIke+8jOi/h+WOu++8jOeOsOWcqOS7peWPiuacquadpeOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya6KW/5qC86YeM5aSrwrfokKjmnb5cIixcclxuICBcImNvbnRlbnRcIjogW1wi5LqO5oiR77yM6L+H5Y6744CB546w5Zyo5ZKM5pyq5p2lXCIsIFwi5ZWG6K6o6IGa5LyaIOWQhOaJp+S4gOivjSDnurfmibDkuI3mga/jgIJcIiwgXCLmnpfmnpfmgLvmgLvnmoTmrLLmnJvvvIzmjqDlj5bnnYDmiJHnmoTnjrDlnKhcIiwgXCLmiorigJznkIbmgKfigJ3mibzmnYDkuo7lroPnmoTlrp3luqdcIiwgXCLmiJHnmoTniLHmg4Xnurfnurfotorov4fmnKrmnaXnmoTol6nnr7FcIixcclxuICAgICAgICAgIFwi5qKm5oOz6Kej5pS+5Ye65a6D5Lus55qE5Y+M6ISaIOiInui5iOS4jeWBnFwiLCBcIuS6juaIke+8jOeptOWxheS6uuaUq+WPluS6huWFiOefpe+8jFwiLCBcIuS9qeaItOiKseeOr+eahOmYv+azoue9l+elnlwiLCBcIuWQkeS6muS8r+aLiee9leeahOiBi+iAs+WUseWPueatjOWQn+OAglwiLCBcIuW/g+acieeMm+iZju+8jOe7huWXheiUt+iWh+OAglwiLCBcIuWuoeinhuaIkeeahOWGheW/g+WQp++8jOS6sueIseeahOaci+WPi++8jOS9oOW6lOmipOagl++8jFwiLFxyXG4gICAgICAgICAgXCLlm6DkuLrpgqPmiY3mmK/kvaDmnKzmnaXnmoTpnaLnm67jgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJKb3NoIFdvb2R3YXJkLVNoaXBzLU5vVm94XCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRw77yaLy9qb3Nod29vZHdhcmQuY29tL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlj7Pnn7PlhYjnlJ9cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuS4gOaPoeegguOAi+iKgumAiVwiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya55+z5bed5ZWE5pyoXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuWBh+acn+eahOacgOWQjuS4gOWkqVwiLCBcIui6uuWcqOaymea7qeS4iuiuqea9ruawtOa3ueayoVwiLCBcIuetieWkqeS6ruS6huWwseeIrOi1t+adpeS4iuePrVwiLCBcIui3r+aXgeeahOeLl+aJk+S6huS4qumVv+mVv+eahOWTiOasoFwiLCBcIuaIkeS5n+WtpuWug+eahOagt+WtkFwiLCBcIuWboOS4uue+oeaFleeahOe8mOaVhVwiXSxcclxuICBcImJnbVwiOiBcIktldmluIE1hY0xlb2QtR3ltbm9wZWRpZSBObyAxXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2luY29tcGV0ZWNoLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlj7Pnn7PlhYjnlJ9cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuaymeS4juayq+OAi+iKgumAiVwiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya57qqwrflk4jCt+e6quS8r+S8plwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLkvaDlnKjnmb3lpKnnmoTlpKrpmLPliY3pnaLmmK/oh6rnlLHnmoTvvIxcIiwgXCLlnKjpu5HlpJznmoTmmJ/ovrDliY3pnaLkuZ/mmK/oh6rnlLHnmoTvvJtcIiwgXCLlnKjmsqHmnInlpKrpmLPvvIzmsqHmnInmnIjkuq7vvIzmsqHmnInmmJ/ovrDnmoTml7blgJnvvIxcIiwgXCLkvaDkuZ/mmK/oh6rnlLHnmoTjgIJcIiwgXCLkvYbmmK/kvaDmmK/kvaDmiYDniLHnmoTkurrnmoTlpbTpmrbvvIxcIiwgXCLlm6DkuLrkvaDniLHkuobku5bjgIJcIixcclxuICAgICAgICAgIFwi5L2g5Lmf5piv54ix5L2g55qE5Lq655qE5aW06Zq277yMXCIsIFwi5Zug5Li65LuW54ix5LqG5L2g44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwiS2V2aW4gTWFjTGVvZC1HeW1ub3BlZGllIE5vIDJcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vaW5jb21wZXRlY2guY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5L2g5aSa5LmI5Y+v54ix44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkuprljoblsbHlpKfCt+iwouWwlOebluiAtue7tOWlh8K35pmu5biM6YeRXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIiDigJzkvaDmnIDlj6/niLHigJ3vvIzmiJHor7Tml7bmnaXkuI3lj4rmgJ3ntKLvvIxcIiwgXCLogIzmgJ3ntKLkuYvlkI7vvIzov5jmmK/ov5nmoLfor7TjgIJcIiwgXCLmiJHlr7nlpbnor7Q6IOS9oOWkmuS5iOWPr+eIsSEg77yMXCIsIFwi5b+D6YeM5Y205Zyo6K+0OiDmiJHlpJrkuYjniLHkvaAhXCIsIFwi5L2g5bC95Y+v5rOo6KeG5Yir5Lq655qE6IS477yMXCIsIFwi5L2G6K+35L+h5Lu75oiR6L+Z6aKX5b+D44CCXCIsXHJcbiAgICAgICAgICBcIuWcqOS9oOWtpOeLrOOAgeaCsuS8pOeahOaXpeWtkO+8jFwiLCBcIuivt+S9oOaChOaChOWcsOW/teS4gOW/teaIkeeahOWQjeWtl++8jFwiLCBcIuW5tuS4lOivtO+8muacieS6uuWcqOaAneW/teaIke+8jFwiLCBcIuWcqOS4lumXtOaIkea0u+WcqOS4gOS4quS6uueahOW/g+mHjOOAglwiXSxcclxuICBcImJnbVwiOiBcIlJhZmFlbCBLcnV4LUxvdmVseSBQaWFubyBTb25nXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2ZyZWVwZC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Zub5aSVXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrpgKDkuIDkuKrojYnljp/jgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muiJvuexs+iOicK354uE6YeR5qOuXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuWOu+mAoOS4gOS4quiNieWOn1wiLCBcIumcgOimgeS4gOagquS4ieWPtuiNieWSjOS4gOWPquicnOicgu+8jFwiLCBcIuS4gOagquS4ieWPtuiNieWSjOS4gOWPquicnOicgu+8jFwiLCBcIui/mOacieaipuOAglwiLCBcIuWmguaenOicnOicguS4jeWkmu+8jFwiLCBcIuWNlemdoOaipuS5n+ihjOOAglwiXSxcclxuICBcImJnbVwiOiBcIktldmluIE1hY0xlb2QtTWlkc3VtbWVyIFNreVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9pbmNvbXBldGVjaC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwiTmrlrqvooq1cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuWkj+ebrua8seefs+S6jOWImVwiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5aSP55uu5ryx55+zXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuS9oOS4jeimgeivtOaIkeWWnOasouS9oO+8jFwiLCBcIuS9oOimgeivtOi/meWkj+WknOeahOaciOiJsuecn+e+juS4vVwiLCBcIuatpOWIu+eDpui6geeahOW/g+aDheWwseWDj1wiLCBcIueUqOWNgemZpOS7peS4ieW+l+WHuueahOe7k+aenOS4gOagt++8jFwiLCBcIuaXoOept+aXoOWwvVwiXSxcclxuICBcImJnbVwiOiBcIktldmluIE1hY0xlb2QtU3RhcnJ5XCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2luY29tcGV0ZWNoLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCJOauWuq+iirVwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5a+C5a+e5Lq65b+D44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrlvpDlv5fmkalcIixcclxuICBcImNvbnRlbnRcIjogW1wi5oiR55qE5LiW55WM5aSq6L+H5a6J6Z2Z77yMXCIsIFwi6Z2Z5b6X5Y+v5Lul5ZCs6KeB6Ieq5bex5b+D6Lez55qE5aOw6Z+z44CCXCIsIFwi5b+D5oi/55qE6KGA5ray5oWi5oWi5rWB5Zue5b+D5a6k77yMXCIsIFwi5aaC5q2k6L+Z6Iis55qE6L2u5Zue44CCXCIsIFwi6IGq5piO55qE5Lq677yM5Zac5qyi54yc5b+D77yMXCIsIFwi5Lmf6K6454yc5a+55LqG5Yir5Lq655qE5b+D77yMXCIsIFwi5Y205Lmf5aSx5Y675LqG6Ieq5bex55qE44CCXCIsXHJcbiAgICAgICAgICBcIuWCu+awlOeahOS6uu+8jOWWnOasoue7meW/g++8jFwiLCBcIuS5n+iuuOS8muiiq+S6uumql++8jFwiLCBcIuWNtOacquW/heiDveW+l+WIsOWIq+S6uueahOOAglwiLCBcIuS9oOS7peS4uuaIkeWIgOaequS4jeWFpe+8jFwiLCBcIuaIkeS7peS4uuS9oOeZvuavkuS4jeS+teOAglwiXSxcclxuICBcImJnbVwiOiBcIlJhZmFlbCBLcnV4LU5vc3RhbGdpYyBQaWFub1wiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9mcmVlcGQuY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5oiR5pu+5LiD5qyh6YSZ6KeG6Ieq5bex55qE54G16a2C44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrnuqrCt+WTiMK357qq5Lyv5LymXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuabvuacieS4g+asoeaIkemEmeinhuS6huiHquW3seeahOeBtemtgu+8mlwiLCBcIuesrOS4gOasoe+8jFwiLCBcIuW9k+Wug+acrOWPr+i/m+WPluaXtu+8jOWNtOaVheS9nOiwpuWNkVwiLCBcIuesrOS6jOasoe+8jFwiLCBcIuW9k+Wug+WcqOepuuiZmuaXtu+8jOeUqOeIseassuadpeWhq+WFhVwiLCBcIuesrOS4ieasoe+8jFwiLCBcIuWcqOWbsOmavuWSjOWuueaYk+S5i+mXtO+8jOWug+mAieaLqeS6huWuueaYk1wiLFxyXG4gICAgICAgICAgXCLnrKzlm5vmrKHvvIxcIiwgXCLlroPniq/kuobplJnvvIzljbTlgJ/nlLHliKvkurrkuZ/kvJrniq/plJnmnaXlrr3mhbDoh6rlt7FcIiwgXCLnrKzkupTmrKHvvIxcIiwgXCLlroPoh6rnlLHova/lvLHvvIzljbTmiorlroPorqTkuLrmmK/nlJ/lkb3nmoTlnZrpn6dcIiwgXCLnrKzlha3mrKHvvIxcIiwgXCLlvZPlroPphJnlpLfkuIDlvKDkuJHmgbbnmoTlmLTohLjml7bvvIxcIiwgXCLljbTkuI3nn6XpgqPmraPmmK/oh6rlt7HpnaLlhbfkuK3nmoTkuIDlia/vvJtcIixcclxuICAgICAgICAgIFwi56ys5LiD5qyh77yMXCIsIFwi5a6D5L6n6Lqr5LqO55Sf5rS755qE5rGh5rOl5Lit77yM6Jm95LiN55SY5b+D77yM5Y205Y+I55WP6aaW55WP5bC+44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwiS2V2aW4gTWFjTGVvZC1PaCBIb2x5IE5pZ2h0XCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2luY29tcGV0ZWNoLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlj7Pnn7PlhYjnlJ9cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuilv+axn+aciMK35LiW5LqL5LiA5Zy65aSn5qKm44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJroi4/ovbxcIixcclxuICBcImNvbnRlbnRcIjogW1wi5LiW5LqL5LiA5Zy65aSn5qKm77yM5Lq655Sf5Yeg5bqm56eL5YeJ44CCXCIsIFwi5aSc5p2l6aOO5Y+25bey6bij5buK44CCXCIsIFwi55yL5Y+W55yJ5aS06ayT5LiK44CCXCIsIFwi6YWS6LSx5bi45oSB5a6i5bCR77yM5pyI5piO5aSa6KKr5LqR5aao44CCXCIsIFwi5Lit56eL6LCB5LiO5YWx5a2k5YWJ44CCXCIsIFwi5oqK55uP5YeE54S25YyX5pyb44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwi5aSP6Imy5Y+Z5oOFXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vYW1hY2hhbXVzaWMuY2hhZ2FzaS5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWbm+WklVwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK6JK56JGt44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrkvZrlkI1cIixcclxuICBcImNvbnRlbnRcIjogW1wi6JK56JGt6IuN6IuN77yM55m96Zyy5Li66Zyc44CCXCIsIFwi5omA6LCT5LyK5Lq677yM5Zyo5rC05LiA5pa544CCXCIsIFwi5rqv5rSE5LuO5LmL77yM6YGT6Zi75LiU6ZW/44CCXCIsIFwi5rqv5ri45LuO5LmL77yM5a6b5Zyo5rC05Lit5aSu44CCXCIsIFwi6JK56JGt6JCL6JCL77yM55m96Zyy5pyq5pme44CCXCIsIFwi5omA6LCT5LyK5Lq677yM5Zyo5rC05LmL5rmE44CCXCIsIFwi5rqv5rSE5LuO5LmL77yM6YGT6Zi75LiU6Le744CCXCIsIFwi5rqv5ri45LuO5LmL77yM5a6b5Zyo5rC05Lit5Z2744CCXCIsXHJcbiAgICAgICAgICBcIuiSueiRremHh+mHh++8jOeZvemcsuacquW3suOAglwiLCBcIuaJgOiwk+S8iuS6uu+8jOWcqOawtOS5i+a2mOOAglwiLCBcIua6r+a0hOS7juS5i++8jOmBk+mYu+S4lOWPs+OAglwiLCBcIua6r+a4uOS7juS5i++8jOWum+WcqOawtOS4reaymuOAglwiXSxcclxuICBcImJnbVwiOiBcIm5lemFtZVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL211c2ljLmdlb2NpdGllcy5qcC9oYWt1dV9hbWFiaW5lL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlm5vlpJVcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuaIkeaYr+mAg+i3keeahOmCo+S4quOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya6LS55bCU5Y2X5aSawrfkvanntKLpmL9cIixcclxuICBcImNvbnRlbnRcIjogW1wi5oiR5piv6YCD6LeR55qE6YKj5Liq77yMXCIsIFwi5oiR5Ye655Sf5ZCOXCIsIFwi5LuW5Lus5oqK5oiR6ZSB5Zyo5oiR6YeM6Z2iXCIsIFwi5Y+v5oiR6LeR5LqG44CCXCIsIFwi5oiR55qE54G16a2C5a+75om+5oiR77yMXCIsIFwi56m/6L+H5bGx5bKX5LiO5bGx6LC377yMXCIsIFwi5oiR5biM5pyb5oiR55qE54G16a2CXCIsIFwi5rC46L+c5om+5LiN5Yiw5oiRXCJdLFxyXG4gIFwiYmdtXCI6IFwiQWxleGFuZGVyIE5ha2FyYWRhLVdpbnRlclwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9mcmVlcGQuY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK6LaK5Lq65q2M44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrkvZrlkI1cIixcclxuICBcImNvbnRlbnRcIjogW1wi5LuK5aSV5L2V5aSV5YWu5pC05rSy5Lit5rWB44CCXCIsIFwi5LuK5pel5L2V5pel5YWu5b6X5LiO546L5a2Q5ZCM6Iif44CCXCIsIFwi6JKZ576e6KKr5aW95YWu5LiN6Ki+6K+f6IC744CCXCIsIFwi5b+D5Yeg54Om6ICM5LiN57ud5YWu5b6X55+l546L5a2Q44CCXCIsIFwi5bGx5pyJ5pyo5YWu5pyo5pyJ5p6d44CCXCIsIFwi5b+D5oKm5ZCb5YWu5ZCb5LiN55+l44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwi5qGc6ZuyXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vYW1hY2hhbXVzaWMuY2hhZ2FzaS5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWQg+ilv+eTnOeahOWwj+S6jOmDjlwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK55Sf5ZG95piv5oiR5Lus5oul5pyJ55qE5LiA5YiH44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJpELkguIOWKs+S8puaWr1wiLFxyXG4gIFwiY29udGVudFwiOiBbXCLmtLvnnYDml7bvvIxcIiwgXCLnlJ/lkb3mmK/miJHku6zmi6XmnInnmoTkuIDliIfvvJtcIiwgXCLlpoLmnpzkvaDkuI3lnKjnlJ/lkb3kuK3mtLvnnYDvvIxcIiwgXCLkvaDmmK/kuIDlnajnsqrjgIJcIiwgXCLlt6XkvZzmmK/nlJ/lkb3vvIznlJ/lkb3lr5Pkuo7lt6XkvZzvvIxcIiwgXCLpmaTpnZ7kvaDmmK/lt6XotYTnmoTlpbTpmrbjgIJcIiwgXCLlvZPlt6XotYTnmoTlpbTpmrblt6XkvZzvvIxcIiwgXCLku5blsIbnlJ/lkb3mkIHnva7kuIDml4HvvIxcIixcclxuICAgICAgICAgIFwi56uZ5Zyo6YKj6YeM5YOP5LiA5Z2o57Kq44CCXCIsIFwi5Lq65bqU6K+l5ouS57ud5q+r5peg55Sf5rCU5Zyw5bel5L2c44CCXCIsIFwi5Lq65bqU6K+l5ouS57ud5Y+Y5Li6XCIsIFwi5LiA5aCG5aCG6LWa5bel6LWE55qE57Kq44CCXCIsIFwi5Lq65bqU6K+l5b275bqV5ouS57udXCIsIFwi5L2c5Li65bel6LWE55qE5aW06Zq26ICM5bel5L2c44CCXCIsIFwi5Lq65bqU6K+l6KaB5rGC5Li66Ieq5bex5bel5L2c77yMXCIsIFwi5YGa6Ieq5bex55qE5bel5L2c77yMXCIsIFwi5bCG55Sf5ZG95oqV5YWl5YW25Lit44CCXCIsXHJcbiAgICAgICAgICBcIuWboOS4uuWmguaenOS6uueahOW3peS9nOmHjOayoeacieeUn+WRve+8jFwiLCBcIuS7luWfuuacrOS4iuaYr+S4gOWghueyquOAglwiXSxcclxuICBcImJnbVwiOiBcIuOCouOCpOODquODg+OCt+ODpeOBrumiqFwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL2FtYWNoYW11c2ljLmNoYWdhc2kuY29tL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlj7Pnn7PlhYjnlJ9cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAijE5MjflubTmmKXvvIzluJXmlq/mjbflsJTnurPlhYvoh7TojKjnu7TloZTogLblqIPjgItcIixcclxuICBcImF1dGhvclwiOiBcIumyjeWIqeaWr8K35YiX5aWl5bC85aSa57u05aWHwrfluJXmlq/mjbflsJTnurPlhYtcIixcclxuICBcImNvbnRlbnRcIjogW1wi5oiR5Lus5aSa5LmI6I2J546H5Zyw5oiQ5Li65LqG5a2k5YS/44CCXCIsIFwi546b55Cz5aic77yMXCIsIFwi6L+Z5piv5oiR5pyA5ZCO5LiA5qyh5ZG85ZSk5L2g55qE5ZCN5a2X44CCXCIsIFwi5aSn6Zuq6JC95Zyo5oiR6ZSI6L+55paR5paR55qEXCIsIFwi5rCU566h5ZKM6IK65Y+25LiK77yMXCIsIFwi6K+05ZCn77yaXCIsIFwi5LuK5aSc77yMXCIsIFwi5oiR55qE5ZeT6Z+z5piv5LiA5YiX6KKr5oiq5YGc55qE54Gr6L2m77yMXCIsXHJcbiAgICAgICAgICBcIuS9oOeahOWQjeWtl+aYr+S/hOe9l+aWr+a8q+mVv+eahOWbveWig+e6v+OAglwiLCBcIuaIkeaDs+ixoeaIkeS7rOeahOebuOmBh++8jFwiLCBcIuWcqOS4gOWcuumahumHjeeahOatu+S6oeiDjOmdolwiLCBcIu+8iOeOq+eRsOeahOefm+ebvui0r+epv+S6huS7luehleWkp+eahOW/g++8ie+8m1wiLCBcIuWcqOS4gOS5neS6jOS4g+W5tOaYpeWknO+8jFwiLCBcIuaIkeS7rOWcqOWbveWig+e6v+ebuOmBh1wiLCBcIuWboOatpOmUmei/h+S6hlwiLFxyXG4gICAgICAgICAgXCLov5nkuKrlkbzllbjnnYDlpZTlkJHnu4jngrnnmoTkuJbnlYzjgIJcIiwgXCLogIzku4rlpJzvvIzkvaDmmK/oiJ7mm7LvvIzkuJbnlYzmmK/plJnor6/jgIJcIiwgXCIgIFwiLCBcIuW9k+aWsOW5tOeahOmSn+WjsOaVsuWTjeeahOaXtuWAme+8jFwiLCBcIueZvuWQiOiKseebm+aUvlwiLCBcIuKAlOKAlOS7luS7peS7lueahOatu+Wuo+WRiuS6huS4lue6queahOe7iOe7k++8jFwiLCBcIuiAjOS4jeaYr+aIkeS7rOWwtOWwrOeahOeUn+WtmOOAglwiLFxyXG4gICAgICAgICAgXCLkuLrku4DkuYjmiJHopoHlr7nkvaDku6zmsonpu5jvvJ9cIiwgXCLlvZPljY7lsJTlhbnoiJ7mm7LlpY/otbfnmoTml7blgJnvvIxcIiwgXCLmiJHlnKjosKLluZXjgIJcIiwgXCLlm6DkuLrku4rlpJzvvIzkvaDmmK/ml4vovazvvIzmiJHmmK/ov7flpLHjgIJcIiwgXCLlvZPkvaDovazmjaLoiJ7kvLTnmoTml7blgJnvvIxcIiwgXCLmiJHlsIblnKjkuJbnlYznmoTnlZnoqIDlhozkuIpcIiwgXCLmirnljrvmiJHnmoTlkI3lrZfjgIJcIiwgXCLnjpvnkLPlqJzvvIzlm73looPnur/nmoToiJ7kvJpcIixcclxuICAgICAgICAgIFwi5YGc5q2i77yMXCIsIFwi5aSn6Zuq6JC95ZCR5oiR5Lus5ZCE6Ieq5a2k5Y2V55qE5ZG96L+Q44CCXCIsIFwi5oiR5q2M5ZSx5LqG6L+Z5a+S5Ya355qE5pil5aSp77yMXCIsIFwi5oiR5q2M5ZSx5LqG5oiR5Lus55qE5bqf5aKfXCIsIFwi4oCm4oCm54S25ZCO5oiR5Y+I5bCG5rKJ6buY5LiN6K+t44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwiUmFmYWVsIEtydXgtTm9zdGFsZ2ljIFBpYW5vXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2ZyZWVwZC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrlpI/lpKnjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mue9l+S8r+eJuS7nk6blsJTms71cIixcclxuICBcImNvbnRlbnRcIjogW1wi5Zyo5aSP5aSp77yM5oiR5Lus5ZCD57u/6LGG77yMXCIsIFwi5qGD77yM5qix5qGD5ZKM55Sc55Oc44CCXCIsIFwi5Zyo5ZCE56eN5oSP5LmJ5LiK6YO95ryr6ZW/5LiU5oSJ5b+rXCIsIFwi5pel5a2Q5Y+R5Ye65aOw5ZON44CCXCIsIFwi5YiX6L2m57uP6L+H5Lmh5LiL77yMXCIsIFwi5peX5bic5oKm5Yqo5Zyo5bGL6aG25LiK44CCXCIsIFwi5Zyo6Ii55LiK5aSa5LmI5oOs5oSPXCIsIFwi5ZGo5Zu05piv5riQ6ZW/55qE5rC06Z2i44CCXCIsXHJcbiAgICAgICAgICBcIuWxsemhtuS4iuimhuebluedgOmbqu+8jFwiLCBcIuiKseaVo+WPkemmmeWRs+OAguWcqOa5luS4ilwiLCBcIuS9oOWPr+S7peiKseaJgOacieaXtumXtFwiLCBcIuS6q+WPl+WUseatjOeahOS5kOi2o+OAglwiLCBcIuaIkeS4jeefpemBk+S7gOS5iOS9v+aIkea7oei2s++8jFwiLCBcIuS9oOi6uuWcqOiNieWcsOS4iueci+S5plwiLCBcIuWQrOWIsOS9oOeahOWbm+WRqOaYr1wiLCBcIuaXoOWKm+eahOiaiuidh+WXoeWXoeedgOOAglwiXSxcclxuICBcImJnbVwiOiBcIk9uZUZpbmVEYXlcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vYXVkaW9uYXV0aXguY29tL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCJOauWuq+iirVwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5q2M6aKC5pm65oWn5LmL576O44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrpm6rojrFcIixcclxuICBcImNvbnRlbnRcIjogW1wiVGh5IGxpZ2h0IGFsb25lIC0gXCIsIFwibGlrZSBtaXN0IG8nZXIgdGhlIG1vdW50YWlucyBkcml2ZW4sIFwiLFxyXG4gICAgICAgICAgXCJPciBtdXNpYyBieSB0aGUgbmlnaHQtd2luZFwiLCBcInNlbnQgdGhyb3VnaCBzdHJpbmdzIG9mIHNvbWUgc3RpbGwgaW5zdHJ1bWVudCxcIixcclxuICAgICAgICAgIFwiT3IgbW9vbmxpZ2h0IG9uIGEgbWlkbmlnaHQgc3RyZWFtLlwiLCBcIuWUr+acieS9oOeahOWFiei+iVwiLCBcIuiDveWDj+a8q+i/h+WxseWyreeahOiWhOmbvlwiLCBcIuWDj+WSjOmjjuS7jumdmeiwp+eahOS4lueVjOeQtOW8pumHjOW4puadpeeahOWknOabslwiLCBcIuWDj+acl+eFp+a6quawtOeahOaciOiJslwiXSxcclxuICBcImJnbVwiOiBcIktldmluIE1hY0xlb2QtU2FwcGhpcmUgSXNsZVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9pbmNvbXBldGVjaC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5rGH5paHXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrpm6jlt7fjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muaItOacm+iIklwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLmkpHnnYDmsrnnurjkvJ7vvIzni6zoh6pcIiwgXCLlvbflvqjlnKjmgqDplb/jgIHmgqDplb9cIiwgXCLlj4jlr4Llr6XnmoTpm6jlt7dcIiwgXCLmiJHluIzmnJvpgKLnnYBcIiwgXCLkuIDkuKrkuIHpppnkuIDmoLflnLBcIiwgXCLnu5PnnYDmhIHmgKjnmoTlp5HlqJhcIiwgXCLlpbnmmK/mnIlcIiwgXCLkuIHpppnkuIDmoLfnmoTpopzoibJcIiwgXCLkuIHpppnkuIDmoLfnmoToiqzoirNcIixcclxuICAgICAgICAgIFwi5LiB6aaZ5LiA5qC355qE5b+n5oSBXCIsIFwi5Zyo6Zuo5Lit5ZOA5oCoXCIsIFwi5ZOA5oCo5Y+I5b235b6oXCIsIFwi5aW55b235b6o5Zyo6L+Z5a+C5a+l55qE6Zuo5be3XCIsIFwi5pKR552A5rK557q45LyeXCIsIFwi5YOP5oiR5LiA5qC3XCIsIFwi5YOP5oiR5LiA5qC35ZywXCIsIFwi6buY6buY5b2z5LqN552AXCIsIFwi5Ya35ryg44CB5YeE5riF77yM5Y+I5oOG5oCFXCIsIFwi5aW56buY6buY5Zyw6LWw6L+RXCIsXHJcbiAgICAgICAgICBcIui1sOi/ke+8jOWPiOaKleWHulwiLCBcIuWkquaBr+S4gOiIrOeahOecvOWFiVwiLCBcIuWluemjmOi/h1wiLCBcIuWDj+aipuS4gOiIrOWcsFwiLCBcIuWDj+aipuS4gOiIrOWcsOWHhOWpiei/t+iMq1wiLCBcIuWDj+aipuS4remjmOi/h1wiLCBcIuS4gOaeneS4gemmmeWcsFwiLCBcIuaIkei6q+aXgemjmOi/h+i/meWls+mDjlwiLCBcIuWluemdmem7mOWcsOi/nOS6huOAgei/nOS6hlwiLCBcIuWIsOS6humik+WcrueahOevseWimVwiLFxyXG4gICAgICAgICAgXCLotbDlsL3ov5npm6jlt7dcIiwgXCLlnKjpm6jnmoTlk4Dmm7Lph4xcIiwgXCLmtojkuoblpbnnmoTpopzoibJcIiwgXCLmlaPkuoblpbnnmoToiqzoirNcIiwgXCLmtojmlaPkuobvvIznlJroh7PlpbnnmoRcIiwgXCLlpKrmga/oiKznmoTnnLzlhYlcIiwgXCLkuIHpppnoiKznmoTmg4bmgIVcIiwgXCLmkpHnnYDmsrnnurjkvJ7vvIzni6zoh6pcIiwgXCLlvbflvqjlnKjmgqDplb/jgIHmgqDplb9cIiwgXCLlj4jlr4Llr6XnmoTpm6jlt7dcIixcclxuICAgICAgICAgIFwi5oiR5biM5pyb6aOY6L+HXCIsIFwi5LiA5Liq5LiB6aaZ5LiA5qC35ZywXCIsIFwi57uT552A5oSB5oCo55qE5aeR5aiYXCJdLFxyXG4gIFwiYmdtXCI6IFwiS2V2aW4gTWFjTGVvZC1HeW1ub3BlZGllIE5vIDFcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vaW5jb21wZXRlY2guY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWbm+WklVwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK6K+X57uPwrfpu43nprvjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muS9muWQjVwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLlvbzpu43nprvnprvvvIzlvbznqLfkuYvoi5fjgIJcIiwgXCLooYzov4jpnaHpnaHvvIzkuK3lv4PmkYfmkYfjgIJcIiwgXCLnn6XmiJHogIXvvIzosJPmiJHlv4Plv6fvvJtcIiwgXCLkuI3nn6XmiJHogIXvvIzosJPmiJHkvZXmsYLjgIJcIiwgXCLmgqDmgqDoi43lpKnvvIzmraTkvZXkurrlk4nvvJ9cIixcclxuICAgICAgICAgIFwi5b286buN56a756a777yM5b2856i35LmL56mX44CCXCIsIFwi6KGM6L+I6Z2h6Z2h77yM5Lit5b+D5aaC6YaJ44CCXCIsIFwi55+l5oiR6ICF77yM6LCT5oiR5b+D5b+n77ybXCIsIFwi5LiN55+l5oiR6ICF77yM6LCT5oiR5L2V5rGC44CCXCIsIFwi5oKg5oKg6IuN5aSp77yM5q2k5L2V5Lq65ZOJ77yfXCIsXHJcbiAgICAgICAgICBcIuW9vOm7jeemu+emu++8jOW9vOeot+S5i+WunuOAglwiLCBcIuihjOi/iOmdoemdoe+8jOS4reW/g+WmguWZjuOAglwiLCBcIuefpeaIkeiAhe+8jOiwk+aIkeW/g+W/p++8m1wiLCBcIuS4jeefpeaIkeiAhe+8jOiwk+aIkeS9leaxguOAglwiLCBcIuaCoOaCoOiLjeWkqe+8jOatpOS9leS6uuWTie+8n1wiXSxcclxuICBcImJnbVwiOiBcIm9taXdhdGFyaVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL211c2ljLmdlb2NpdGllcy5qcC9oYWt1dV9hbWFiaW5lL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlm5vlpJVcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuW5suiNieWghuOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5aWl6KW/5pmuwrfln4PnsbPlsJTogLbnu7TlpYfCt+abvOW+t+WwlOaWveWhlOWnhlwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLmiJHpobrmiYvmkK3otbfkuIDmnrbmnKjmoq/vvIxcIiwgXCLniKzkuIrmiqvmlaPnmoTlubLojYnmo5rpobbvvIxcIiwgXCLmiJHlnKjlkbzlkLjpk7bmsrPnmoTnoo7lsZHvvIxcIiwgXCLmiJHlnKjlkbzlkLjlroflrpnnmoTnl4Xnl4fjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJLZXZpbiBNYWNMZW9kLVN0YXJyeVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9pbmNvbXBldGVjaC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwiTmrlrqvooq1cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuW/g+eahOatjOOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5Y2h55Om6I+y5pavXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuacieS6huS9oO+8jOaIkeaDs++8jFwiLCBcIuS4gOWIh+aEieW/q+eahOS6i+eJqemDveacneaIkeW+rueske+8jFwiLCBcIuWcqOS9oOecvOedm+eahOmVnOWtkOmHjOWPjeaYoOedgOasouS5kOOAglwiLCBcIueVmeS4i+adpe+8jOaIkeeahOWFie+8jFwiLCBcIuaJgOaciemCo+S6m+WPquimgeS9oOeci+aIkeS4gOecvFwiLCBcIuS+v+WFhea7oea/gOaDheWcsOiNoea8vuWcqOaIkeW/g+S4iuOAgVwiLFxyXG4gICAgICAgICAgXCLmtozliLDmiJHllIfpl7TnmoTmhJ/op4nvvIxcIiwgXCLmiJHov5jmsqHmnInlkYror4nkvaDlk6rmgJXkuIDljYrjgIJcIiwgXCLlpoLmnpzkvaDluIzmnJvvvIzkvaDlj6/ku6XkuI3ot5/miJHorrLvvIxcIiwgXCLkuZ/kuI3opoHor7TkupvniLHlkozlgL7mhZXnmoTov7fkurror53jgIJcIiwgXCLov5nkupvlt7LotrPlpJ/vvJrmnInkvaDlnKjov5Hml4HvvIxcIiwgXCLmiJHlj6/ku6XlkYror4nkvaDmiJHpnIDopoHkvaDvvIxcIiwgXCLlj6/ku6XmjqXop6bkvaDvvIxcIixcclxuICAgICAgICAgIFwi5Y+v5Lul5ZG85ZC45L2g5ZG85ZC455qE5pep5pmo55qE5riF5paw77ybXCIsIFwi6ICM5aaC5p6c5L2g6KeJ5b6X5bCx6L+e6L+Z5Lqb5Lmf5piv5aSa5L2Z55qE77yMXCIsIFwi6YKj5LmI5LuF5LuF6KeB5Yiw5L2g5Lmf5bey6Laz5aSf77yBXCIsIFwi5biM5pyb5Lul5ZCO5L2g55yL5Yiw55qEXCIsIFwi6YO95piv5bGe5LqO6Ieq5bex55qE5bm456aP77yMXCIsIFwi5Yqq5Yqb552A55qE5piv5bGe5LqO6Ieq5bex5bm456aP55qE5bCP5LqL44CCXCIsXHJcbiAgICAgICAgICBcIuePjeaDnOedgOeahOaYr+mdoOi/keS9oOeahOW/g+OAglwiLCBcIuiAjOS4jeaYr+WIq+S6uueahOOAglwiLCBcIuWFs+S6jueIsei/meS7tuWwj+S6i++8jFwiLCBcIuimgeWSjOWIq+S6uuS4gOi1t+WPkeeUn+OAglwiLCBcIuaJjeiDveaKtei+vumCo+S8vOS5jumBpeS4jeWPr+WPiueahOeIseeahOW9vOWyuOOAglwiXSxcclxuICBcImJnbVwiOiBcIktldmluIE1hY0xlb2QtTWlkc3VtbWVyIFNreVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9pbmNvbXBldGVjaC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwiTmrlrqvooq1cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuS6keOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya6YeR5a2Q576O546yXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuaIkeaDs+WPmOaIkOS4gOacteS6keOAglwiLCBcIuWPiOadvuWPiOi9r1wiLCBcIumjmOWcqOiTneWkqemHjFwiLCBcIuS7jui/meWktOWIsOmCo+WktFwiLCBcIueci+Wkn+S6humjjuaZr++8jFwiLCBcIuaZmuS4iuWwsei3n+aciOS6ruaNiei/t+iXj+OAglwiLCBcIueOqeiFu+S6hlwiLCBcIuWwseWPmOaIkOmbqOOAglwiLCBcIui3n+mbt+WFrFwiLCBcIue7k+S4quS8tO+8jFwiLFxyXG4gICAgICAgICAgXCLkuIDotbfot7PliLBcIiwgXCLkurrlrrbnmoTmsaDloZjph4zljrvjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJSYWZhZWwgS3J1eC1Qb25kXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2ZyZWVwZC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5ZCD6KW/55Oc55qE5bCP5LqM6YOOXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrplb/kuYXmsonpu5jlkI7jgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muWogeW7icK35be054m55YuSwrflj7boip1cIixcclxuICBcImNvbnRlbnRcIjogW1wi6ZW/5LmF5rKJ6buY5ZCO5byA5Y+j77ya5rKh6ZSZ77yMXCIsIFwi5Yir55qE5oOF5Lq66YO95bey55aP6L+c5oiW5q275Y6777yMXCIsIFwi5LiN5Y+L5aW955qE54Gv5YWJ55So54Gv572p5oyh5L2P77yMXCIsIFwi5LiN5Y+L5aW955qE5aSc5pma55So56qX5biY5oyh5L2P77yMXCIsIFwi5oiR5Lus6LCI5ZWK6LCI5ZWKXCIsIFwi5Y+N5aSN6LCI6K666Im65pyv5ZKM5q2M6L+Z5pyA6auY5Li76aKY77yaXCIsXHJcbiAgICAgICAgICBcIui6q+S9k+ihsOiAgeaZuuaFp+aWueW8gO+8jOW5tOi9u+aXtlwiLCBcIuaIkeS7rOabvuebuOeIseWNtOa1keeEtuS4jeefpVwiXSxcclxuICBcImJnbVwiOiBcIkpvc2ggV29vZHdhcmQtQXV0dW1uXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRw77yaLy9qb3Nod29vZHdhcmQuY29tL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlm5vlpJVcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuWQieaqgOi/puWIqeOAi+iKgumAiVwiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5rOw5oiI5bCUXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIkV5ZXMgYXJlIHJhaW5pbmcgZm9yIGhlcixcIiwgXCJoZWFydCBpcyBob2xkaW5nIHVtYnJlbGxhIGZvciBoZXIsXCIsIFwidGhpcyBpcyBsb3ZlLlwiLCBcIuecvOedm+S4uuWlueS4i+edgOmbqO+8jFwiLFxyXG4gICAgICAgICAgXCLlv4PljbTkuLrlpbnmiZPnnYDkvJ7vvIxcIiwgXCLov5nlsLHmmK/niLHmg4XjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJLZXZpbiBNYWNMZW9kLVNhcHBoaXJlIElzbGVcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vaW5jb21wZXRlY2guY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5LiA5o+h56CC44CL6IqC6YCJXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrnn7Plt53llYTmnKhcIixcclxuICBcImNvbnRlbnRcIjogW1wi5oyo5LqG6aqCXCIsIFwi5ZOH55qE5LiA5aOw5bCx5ZOt5Ye65p2l55qE5YS/56ul55qE5b+D5oOF77ybXCIsIFwi5oiR5Lmf5oOz6KaB5pyJ6YKj56eN5b+D5oOF44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwiUmFmYWVsIEtydXgtTm9zdGFsZ2ljIFBpYW5vXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2ZyZWVwZC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5ZCD6KW/55Oc55qE5bCP5LqM6YOOXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrmiJHmg7PlkozkvaDkuIDotbfnlJ/mtLvjgItcIixcclxuICBcImF1dGhvclwiOiBcIueOm+eQs+WonMK35LyK5LiH6K+65aSr5aicwrfojKjnu7TloZTogLblqINcIixcclxuICBcImNvbnRlbnRcIjogW1wi5oiR5oOz5ZKM5L2g5LiA6LW355Sf5rS75Zyo5p+Q5Liq5bCP6ZWH77yMXCIsIFwi5YWx5Lqr5peg5bC955qE6buE5piPXCIsIFwi5ZKM57u157u15LiN57ud55qE6ZKf5aOw44CCXCIsIFwi5Zyo6L+Z5Liq5bCP6ZWH55qE5peF5bqX6YeM4oCU4oCUXCIsIFwi5Y+k6ICB5pe26ZKf5pWy5Ye655qE5b6u5byx5ZON5aOwXCIsIFwi5YOP5pe26Ze06L276L275ru06JC944CCXCIsXHJcbiAgICAgICAgICBcIuacieaXtuWAme+8jOWcqOm7hOaYj++8jFwiLCBcIuiHqumhtualvOafkOS4quaIv+mXtOS8oOadpeesm+WjsO+8jFwiLCBcIuWQueesm+iAheWAmuiRl+eql+eJlu+8jFwiLCBcIuiAjOeql+WPo+Wkp+actemDgemHkemmmeOAglwiLCBcIuatpOWIu+S9oOiLpeS4jeeIseaIke+8jOaIkeS5n+S4jeS8muWcqOaEj+OAglwiLCBcIuWcqOaIv+mXtOS4reWkru+8jOS4gOS4quejgeegluegjOaIkOeahOeCieWtkFwiLCBcIuavj+S4gOWdl+ejgeegluS4iueUu+iRl+S4gOW5heeUu1wiLFxyXG4gICAgICAgICAgXCLkuIDpopflv4PvvIzkuIDoiZjluIboiLnvvIzkuIDmnLXnjqvnkbBcIiwgXCLogIzoh6rmiJHku6zllK/kuIDnmoTnqpfmiLflvKDmnJtcIiwgXCLpm6rvvIzpm6rvvIzpm6rjgIJcIiwgXCLkvaDkvJrourrmiJDmiJHllpzmrKLnmoTlp7/lir9cIiwgXCLmhbXmh5LvvIzmt6HnhLbvvIzlhrfmvKBcIiwgXCLkuIDkuKTlm57ngrnnh4Pngavmn7TnmoTliLrogLPlo7BcIiwgXCLpppnng5/nmoTngavoi5fnlLHml7rovazlvLHvvIxcIixcclxuICAgICAgICAgIFwi54Of55qE5pyr5qKi6aKk5oqW6JGX77yM6aKk5oqW6JGXXCIsIFwi55+t5bCP54Gw55m955qE54Of6JKCXCIsIFwi6L+e54Gw54OsIOS9oOmDveaHkuW+l+W8ueiQvVwiLCBcIummmeeDn+mBgumjnuiInui/m+eBq+S4rVwiXSxcclxuICBcImJnbVwiOiBcIlJhZmFlbCBLcnV4LVBvbmRcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vZnJlZXBkLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLmsYfmlodcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuS5n+aYr+W+ruS6keOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya6IOh6YCCXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuS5n+aYr+W+ruS6ke+8jFwiLCBcIuS5n+aYr+W+ruS6kei/h+WQjuaciOWFieaYjuOAglwiLCBcIuWPquS4jeingeWOu+W5tOW+l+a4uOS8tO+8jFwiLCBcIuS5n+ayoeacieW9k+aXpeeahOW/g+aDheOAglwiLCBcIuS4jeaEv+WLvui1t+ebuOaAne+8jFwiLCBcIuS4jeaVouWHuumXqOeci+aciOOAglwiLCBcIuWBj+WBj+aciOi/m+eql+adpe+8jFwiLCBcIuWus+aIkeebuOaAneS4gOWknOOAglwiXSxcclxuICBcImJnbVwiOiBcIkFsZXhhbmRlciBOYWthcmFkYS1XaW50ZXJcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vZnJlZXBkLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLmsYfmlodcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuilv+a0suabsuOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5L2a5ZCNXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuW/huaiheS4i+ilv+a0su+8jOaKmOaiheWvhOaxn+WMl+OAglwiLCBcIuWNleihq+adj+WtkOe6ou+8jOWPjOmsk+m4pumbj+iJsuOAglwiLCBcIuilv+a0suWcqOS9leWkhO+8n+S4pOahqOahpeWktOa4oeOAglwiLCBcIuaXpeaaruS8r+WKs+mjnu+8jOmjjuWQueS5jOiHvOagkeOAglwiLCBcIuagkeS4i+WNs+mXqOWJje+8jOmXqOS4remcsue/oOmSv+OAglwiLCBcIuW8gOmXqOmDjuS4jeiHs++8jOWHuumXqOmHh+e6ouiOsuOAglwiLFxyXG4gICAgICAgICAgXCLph4fojrLljZfloZjnp4vvvIzojrLoirHov4fkurrlpLTjgIJcIiwgXCLkvY7lpLTlvITojrLlrZDvvIzojrLlrZDmuIXlpoLmsLTjgIJcIiwgXCLnva7ojrLmgIDoopbkuK3vvIzojrLlv4PlvbvlupXnuqLjgIJcIiwgXCLlv4bpg47pg47kuI3oh7PvvIzku7DpppbmnJvpo57puL/jgIJcIiwgXCLpuL/po57mu6Hopb/mtLLvvIzmnJvpg47kuIrpnZLmpbzjgIJcIiwgXCLmpbzpq5jmnJvkuI3op4HvvIzlsL3ml6XmoI/mnYblpLTjgIJcIixcclxuICAgICAgICAgIFwi5qCP5p2G5Y2B5LqM5puy77yM5Z6C5omL5piO5aaC546J44CCXCIsIFwi5Y235biY5aSp6Ieq6auY77yM5rW35rC05pGH56m657u/44CCXCIsIFwi5rW35rC05qKm5oKg5oKg77yM5ZCb5oSB5oiR5Lqm5oSB44CCXCIsIFwi5Y2X6aOO55+l5oiR5oSP77yM5ZC55qKm5Yiw6KW/5rSy44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwi5qGc6ZuyXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vYW1hY2hhbXVzaWMuY2hhZ2FzaS5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWQg+ilv+eTnOeahOWwj+S6jOmDjlwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5L2g5LiN5Zac5qyi55qE5q+P5LiA5aSp5LiN5piv5L2g55qEIOOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya6LS55bCU5Y2X5aSawrfkvanntKLpmL9cIixcclxuICBcImNvbnRlbnRcIjogW1wi5L2g5LiN5Zac5qyi55qE5q+P5LiA5aSp5LiN5piv5L2g55qEXCIsIFwi5L2g5LuF5LuF5bqm6L+H5LqG5a6DIOaXoOiuuuS9oOi/h+edgOS7gOS5iOagt+eahFwiLCBcIuayoeacieWWnOaCpueahOeUn+a0u++8jOS9oOmDveayoeacieeUn+a0u1wiLCBcIuS9oOaXoOmhu+WOu+eIse+8jOaIluiAheWOu+mlrumFkuaIluiAheW+rueskVwiLCBcIumYs+WFieWAkuaYoOWcqOawtOWdkemHjFwiLFxyXG4gICAgICAgICAgXCLlsLHotrPlpJ/kuobvvIzlpoLmnpzlroPku6TkvaDmhInmgqZcIiwgXCLlubjnpo/nmoTkurrvvIzmiorku5bku6znmoTmrKLkuZBcIiwgXCLmlL7lnKjlvq7lsI/nmoTkuovnianph4zvvIzmsLjov5zkuZ/kuI3kvJrliaXlpLpcIiwgXCLlsZ7kuo7mr4/kuIDlpKnnmoTjgIHlpKnnhLbnmoTotKLlr4xcIl0sXHJcbiAgXCJiZ21cIjogXCJ5dXViZW5vaG9zaGlcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9hbWFjaGFtdXNpYy5jaGFnYXNpLmNvbS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwiTmrlrqvooq1cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuivl+e7j+OAi+iKgumAiVwiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5L2a5ZCNXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuato+aciOW8gOWygVwiLCBcIuS6jOaciOe7gOmmmVwiLCBcIuS4ieaciOahg+iJr1wiLCBcIuWbm+aciOengOiUk1wiLCBcIuS6lOaciOm4o+icqVwiLCBcIuWFreaciOeyvumYs1wiLCBcIuS4g+aciOa1geeBq1wiLCBcIuWFq+aciOacquWkrlwiLCBcIuS5neaciOaOiOiho1wiLCBcIuWNgeaciOiOt+eou1wiLCBcIuiRreaciOa9nOm+mVwiLCBcIuiFiuaciOWYieW5tFwiXSxcclxuICBcImJnbVwiOiBcIuWPpOmHjOOBrumiqFwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL2FtYWNoYW11c2ljLmNoYWdhc2kuY29tL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlkIPopb/nk5znmoTlsI/kuozpg45cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuS6muW9k+eahOivheWSkuOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5aiB5buJwrflt7Tnibnli5LCt+WPtuiKnVwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLmnInkvaDpl7rkuK3lr4blj4vvvIzov5jmnInkvaDlkozmiJHvvIxcIiwgXCLlpbnmuKnmn5TogIznvo7kuL3vvIzmiJHku6zlnKjosIjor5fjgIJcIiwgXCLmiJHor7TvvJrigJzkuIDooYzor5fmnInml7bopoHlh6DkuKrlsI/ml7bvvJtcIiwgXCLkvYboi6XmmL7lvpfkuI3lg4/mmK/ljbPluK3kuYvkvZzvvIxcIiwgXCLmiJHku6znmoTmjqjmlbLlsLHnrpfmmK/nmb3lv5nmtLvjgIJcIiwgXCLov5jkuI3lpoLlvJPnnYDohIrog4zotrTlnKjlnLDpnaLvvIxcIixcclxuICAgICAgICAgIFwi5Y675pOm5Y6o5oi/5Zyw5p2/77yM5oiW5YOP56m35YWJ6JuLXCIsIFwi5peg6K665Yiu6aOO5LiL6Zuo6YO95b+Z552A6YeH55+z77ybXCIsIFwi6KaB5oqK576O55qE5aOw6Z+z57uE57uH5Zyo5LiA6LW377yMXCIsIFwi55yf5q+U5LiK6Z2i55qE5rS75YS/6YO96L6b6Ium77yM5L2GXCIsIFwi5LiA5biu5Lq65Y205ZC15ZC16K+05L2g5piv5oeS5rGJ77yMXCIsIFwi6ZO26KGM5a6244CB5pWZ5biI6L+Y5pyJ56We6IGM5Lq65ZGY77yMXCIsXHJcbiAgICAgICAgICBcIuauiemBk+iAheaJgOiwk+eahOS4luS6uuOAguKAnVwiLCBcIioqKioqKioqKioqKioqKuivneWImuWujO+8jFwiLCBcIumCo+a4qeaflOe+juS4veeahOWls+S6uuaOpeedgOivtO+8jFwiLCBcIuiuuOWkmuS6uuiLpeWPkeeOsOWlueWjsOmfs+i/meS5iFwiLCBcIueUnOe+juiAjOaflOWSjO+8jOW/g+WEv+WwseS8mueLgui3s++8jFwiLCBcIuWlueWbnuetlOaIke+8muKAnOeUn+S4uuWls+S6uumDveefpemBk+KAleKAlVwiLFxyXG4gICAgICAgICAgXCLlsL3nrqHlnKjlrabmoKHph4zmsqHkurrov5nkuYjor7TigJXigJVcIiwgXCLopoHmg7Pnvo7kuL3miJHku6zlsLHlvpfli6TlirPkvZzjgILigJ1cIiwgXCLmiJHor7TvvJrigJzmiJHmlq3oqIDoh6rku47kuprlvZPloJXokL3vvIxcIiwgXCLlho3msqHmnInlpb3kuJzopb/kuI3pnIDli6TlirPkvZzjgIJcIiwgXCLmgYvkurrku6zmm77nu4/orqTkuLrniLHmg4XlupTlvZNcIiwgXCLlhYXmu6HnnYDpq5jotLXmrrfli6TnpLzku6rmnInmlrnvvIxcIixcclxuICAgICAgICAgIFwi5LuW5Lus5bCx6ZW/5ZCB55+t5Y+55byV57uP5o2u5YW477yMXCIsIFwi5aaC6aWx5a2m5LmL5aOr5Li+5Ye65YWI5L6L5LiH5Y2D77ybXCIsIFwi5aaC5LuK6L+Z5LqL5Ly85LmO5Y+v566X5aSf5YG35oeS44CC4oCdXCIsIFwi6K+05Yiw5LqG54ix5oOF5oiR5Lus5rKJ5a+C5LiA54mH77ybXCIsIFwi55m95pel5L2Z54Os5Zyo5oiR5Lus55y85YmN54eD5a6M77yMXCIsIFwi5Zyo6YKj5pGH5puz552A6JOd57u/6Imy55qE5aSp6L6577yMXCIsXHJcbiAgICAgICAgICBcIuacieS4gOW8r+aui+aciO+8jOa2iOejqOW+l+Wmgui0neWjs1wiLCBcIuiiq+aXtumXtOS5i+awtOWGsuWIt++8jOW9k+Wug+i1t+iQvVwiLCBcIue+pOaYn+S5i+mXtOOAgeWNh+mZjeWcqOaXpeaXpeW5tOW5tOOAglwiLCBcIuaIkeacieS4gOS4quW/g+aAneWPquaDs+WvueS9oOiogO+8jFwiLCBcIuaIkeaDs+ivtOS9oOW+iOe+juS4ve+8jOaIkeS5n+erreWKm1wiLCBcIueUqOWPpOiAgeiAjOmrmOi0teeahOaWueW8j+eIsei/h+S9oO+8m1wiLFxyXG4gICAgICAgICAgXCLov5nnnIvotbfmnaXnmoblpKfmrKLllpzvvIzkvYbmiJHku6xcIiwgXCLlhoXlv4PnlrLmg6vljbTkvLzpgqPkuK3nqbrkuIDova7jgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJKb3NoIFdvb2R3YXJkLUF1dHVtblwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL2pvc2h3b29kd2FyZC5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi5bC86YeH5LqU5YiZXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrlsLzph4dcIixcclxuICBcImNvbnRlbnRcIjogW1wi5q+P5LiA5Liq5LiN5pu+6LW36Iie55qE5pel5a2Q77yMXCIsIFwi6YO95piv5a+555Sf5ZG955qE6L6c6LSf44CCXCIsIFwi5YW25a6e5Lq66Lef5qCR5piv5LiA5qC355qE77yMXCIsIFwi6LaK5piv5ZCR5b6A6auY5aSE55qE6Ziz5YWJ77yMXCIsIFwi5a6D55qE5qC55bCx6LaK6KaB5Ly45ZCR6buR5pqX55qE5Zyw5bqV44CCXCIsIFwi5LiA5Liq5Lq655+l6YGT6Ieq5bex5Li65LuA5LmI6ICM5rS777yMXCIsIFwi5bCx5Y+v5Lul5b+N5Y+X5Lu75L2V5LiA56eN55Sf5rS744CCXCIsXHJcbiAgICAgICAgICBcIuS9huWHoeS4jeiDveadgOatu+S9oOeahO+8jFwiLCBcIuacgOe7iOmDveS8muS9v+S9oOabtOW8uuWkp+OAglwiLCBcIuW9k+S9oOWHneinhua3sea4iuaXtu+8jFwiLCBcIua3sea4iuS5n+WcqOWHneinhuedgOS9oOOAglwiXSxcclxuICBcImJnbVwiOiBcIktldmluIE1hY0xlb2QtQmV0aGxlaGVtXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2luY29tcGV0ZWNoLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlm5vlpJVcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuawkeWbvee7k+WpmuivgeS5puiqk+ivjVwiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5L2a5ZCNXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuS4pOWnk+iBlOWnu++8jOS4gOWggue8lOe6pu+8jFwiLCBcIuiJr+e8mOawuOe7k++8jOWMuemFjeWQjOensOOAglwiLCBcIueci+atpOaXpeahg+iKseeBvOeBvO+8jOWunOWupOWunOWutu+8jFwiLCBcIuWNnOS7luW5tOeTnOeTnue7tee7te+8jOWwlOaYjOWwlOeCveOAglwiLCBcIuiwqOS7peeZveWktOS5i+e6pu+8jOS5puWQkem4v+esuu+8jFwiLCBcIuWlveWwhue6ouWPtuS5i+ebn++8jOi9veaYjum4s+iwseOAglwiLCBcIuatpOivgeOAglwiXSxcclxuICBcImJnbVwiOiBcIuWPpOmHjOOBrumiqFwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL2FtYWNoYW11c2ljLmNoYWdhc2kuY29tL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLmsYfmlodcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuaXoOW4uOOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya6Zuq6I6xXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIldoaWxzdCBza2llcyBhcmUgYmx1ZSBhbmQgYnJpZ2h0XCIsIFwiV2hpbHN0IGZsb3dlcnMgYXJlIGdheVwiLCBcIldoaWxzdCBleWVzIHRoYXQgY2hhbmdlIGVyZSBuaWdodFwiLFxyXG4gICAgICAgICAgXCJNYWtlIGdsYWQgdGhlIGRheVwiLCBcIldoaWxzdCB5ZXQgdGhlIGNhbG0gaG91cnMgY3JlZXBcIiwgXCJEcmVhbSB0aG91LWFuZCBmcm9tIHRoeSBzbGVlcFwiLFxyXG4gICAgICAgICAgXCJUaGVuIHdha2UgdG8gd2VlcFwiLCBcIui2geWkqeepuui/mOaYjuWqmu+8jOiUmuiTnVwiLCBcIui2geedgOiKseactemynOiJs1wiLCBcIui2geecvOedm+eci+adpeS4gOWIh+e+juWlvVwiLCBcIui2geWknOW5lei/mOayoemZjeS4tFwiLCBcIuWRtSDotoHnjrDlnKjml7bmtYHov5jlubPpnZlcIiwgXCLlgZrkvaDnmoTmoqblkKcg5LiU5oap5oGvXCIsIFwi562J6YaS5p2l5YaN5ZOt5rOjXCJdLFxyXG4gIFwiYmdtXCI6IFwiUmFmYWVsIEtydXgtTm9zdGFsZ2ljIFBpYW5vXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2ZyZWVwZC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrmiJHmm77nu4/niLHov4fkvaDjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muS6muWOhuWxseWkp8K36LCi5bCU55uW6IC257u05aWHwrfmma7luIzph5FcIixcclxuICBcImNvbnRlbnRcIjogW1wi5oiR5pu+57uP54ix6L+H5L2g77ya54ix5oOF77yM5Lmf6K64XCIsIFwi5Zyo5oiR55qE5b+D54G16YeM6L+Y5rKh5pyJ5a6M5YWo5raI5Lqh77yMXCIsIFwi5L2G5oS/5a6D5LiN5Lya5YaN5Y675omT5omw5L2g77yMXCIsIFwi5oiR5Lmf5LiN5oOz5YaN6K6p5L2g6Zq+6L+H5oKy5Lyk44CCXCIsIFwi5oiR5pu+57uP6buY6buY5peg6K+t5Zyw44CB5q+r5peg5oyH5pyb5Zyw54ix6L+H5L2g77yMXCIsXHJcbiAgICAgICAgICBcIuaIkeaXouW/jeWPl+edgOe+nuaAr++8jOWPiOW/jeWPl+edgOWrieWmkueahOaKmOejqO+8jFwiLCBcIuaIkeabvue7j+mCo+agt+ecn+ivmuOAgemCo+agt+a4qeaflOWcsOeIsei/h+S9oO+8jFwiLCBcIuS9huaEv+S4iuW4neS/neS9keS9oO+8jFwiLCBcIuWPpuS4gOS4quS6uuS5n+S8muWDj+aIkeS4gOagt+WcsOeIseS9oFwiXSxcclxuICBcImJnbVwiOiBcIkpvc2ggV29vZHdhcmQtU2hpcHMtTm9Wb3hcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHDvvJovL2pvc2h3b29kd2FyZC5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuaxh+aWh1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5oO254S25b2V44CL6IqC6YCJXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrotLnlsJTljZflpJrCt+S9qee0oumYv1wiLFxyXG4gIFwiY29udGVudFwiOiBbXCLkvZXosJPml4XooYzvvJ/mtLvnnYDlsLHmmK/ml4XooYzjgIJcIiwgXCLmiJHku47kuIDlpKnljrvliLDlj6bkuIDlpKnvvIxcIiwgXCLkuIDlpoLku47kuIDkuKrovabnq5nljrvliLDlj6bkuIDkuKrovabnq5nvvIxcIiwgXCLkuZjlnZDmiJHouqvkvZPmiJblkb3ov5DnmoTngavovabvvIxcIiwgXCLlsIblpLTmjqLlh7rnqpfmiLfvvIxcIiwgXCLnnIvooZfpgZPvvIznnIvlub/lnLrvvIxcIiwgXCLnnIvkurrku6znmoTohLjlkozlp7/mgIHvvIxcIiwgXCLov5nkupvmgLvmmK/nm7jlkIzvvIzlj4jmgLvmmK/kuI3lkIzvvIzlpoLlkIzpo47mma/jgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJSYWZhZWwgS3J1eC1Qb25kXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2ZyZWVwZC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwiTmrnvr3lh6FcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuWRqOWNl8K35YWz6ZuO44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrkvZrlkI1cIixcclxuICBcImNvbnRlbnRcIjogW1wi5YWz5YWz6ZuO6big77yM5Zyo5rKz5LmL5rSy44CCXCIsIFwi56qI56qV5reR5aWz77yM5ZCb5a2Q5aW96YCR44CCXCIsIFwi5Y+C5beu6I2H6I+c77yM5bem5Y+z5rWB5LmL44CCXCIsIFwi56qI56qV5reR5aWz77yM5a+k5a+Q5rGC5LmL44CCXCIsIFwi5rGC5LmL5LiN5b6X77yM5a+k5a+Q5oCd5pyN44CCXCIsIFwi5oKg5ZOJ5oKg5ZOJ77yM6L6X6L2s5Y+N5L6n44CCXCIsIFwi5Y+C5beu6I2H6I+c77yM5bem5Y+z6YeH5LmL44CCXCIsIFwi56qI56qV5reR5aWz77yM55C055Gf5Y+L5LmL44CCXCIsXHJcbiAgICAgICAgICBcIuWPguW3ruiNh+iPnO+8jOW3puWPs+iKvOS5i+OAglwiLCBcIueqiOeqlea3keWls++8jOmSn+m8k+S5kOS5i+OAglwiXSxcclxuICBcImJnbVwiOiBcIuW8peeUn+OBruepuuOBq1wiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL2FtYWNoYW11c2ljLmNoYWdhc2kuY29tL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlm5vlpJVcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuS4gOWJquaihcK36Iif6L+H5ZC05rGf44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrokovmjbdcIixcclxuICBcImNvbnRlbnRcIjogW1wi5LiA54mH5pil5oSB5b6F6YWS5rWH44CCXCIsIFwi5rGf5LiK6Iif5pGH44CCXCIsIFwi5qW85LiK5biY5oub44CC56eL5aiY5bqm5LiO5rOw5aiY5aiH44CCXCIsIFwi6aOO5Y+I6aOY6aOY44CC6Zuo5Y+I6JCn6JCn44CCXCIsIFwi5L2V5pel5b2S5a625rSX5a6i6KKN44CCXCIsIFwi6ZO25a2X56yZ6LCD44CC5b+D5a2X6aaZ54On44CCXCIsIFwi5rWB5YWJ5a655piT5oqK5Lq65oqb44CCXCIsIFwi57qi5LqG5qix5qGD44CC57u/5LqG6Iqt6JWJ44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwi6aKo57SLXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vbXVzaWMuZ2VvY2l0aWVzLmpwL2hha3V1X2FtYWJpbmUvXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWQg+ilv+eTnOeahOWwj+S6jOmDjlwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK6aOe6bif6ZuG44CL6IqC6YCJXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrms7DmiIjlsJRcIixcclxuICBcImNvbnRlbnRcIjogW1wiVGhlIHdhdGVyIGluIGEgdmVzc2VsIGlzIHNwYXJrbGluZztcIiwgXCJ0aGUgd2F0ZXIgaW4gdGhlIHNlYSBpcyBkYXJrLlwiLFxyXG4gICAgICAgICAgXCJUaGUgc21hbGwgdHJ1dGggaGFzIHdvcmRzIHRoYXQgYXJlIGNsZWFyO1wiLCBcInRoZSBncmVhdCB0cnV0aCBoYXMgZ3JlYXQgc2lsZW5jZS5cIiwgXCLkuIDmna/msLTmmK/muIXmvojnmoTvvIxcIixcclxuICAgICAgICAgIFwi6ICM5rW35rC05Y205piv6buR6Imy55qE44CCXCIsIFwi5bCx5YOP5bCP55qE6YGT55CG5Y+v5Lul6K+05piO77yMXCIsIFwi55yf5q2j55qE5aSn6YGT55CG5Y205piv5rKJ6buY55qE44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwiS2V2aW4gTWFjTGVvZC1CZXRobGVoZW1cIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vaW5jb21wZXRlY2guY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK6bmK5qGl5LuZwrfnuqTkupHlvITlt6fjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muenpuinglwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLnuqTkupHlvITlt6fvvIzpo57mmJ/kvKDmgajvvIxcIiwgXCLpk7bmsYnov6Lov6LmmpfluqbjgIJcIiwgXCLph5Hpo47njonpnLLkuIDnm7jpgKLvvIxcIiwgXCLkvr/og5zljbTkurrpl7Tml6DmlbDjgIJcIiwgXCLmn5Tmg4XkvLzmsLTvvIzkvbPmnJ/lpoLmoqbvvIxcIiwgXCLlv43pob7puYrmoaXlvZLot6/vvJ9cIiwgXCLkuKTmg4Xoi6XmmK/kuYXplb/ml7bvvIxcIiwgXCLlj4jlsoLlnKjmnJ3mnJ3mmq7mmq7jgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJrYW11bmFiaVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL211c2ljLmdlb2NpdGllcy5qcC9oYWt1dV9hbWFiaW5lL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLmsYfmlodcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuS9oOaYr+S6uumXtOWbm+aciOWkqeOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5p6X5b695ZugXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuaIkeivtOS9oOaYr+S6uumXtOeahOWbm+aciOWkqe+8m1wiLCBcIueskeWTjeeCueS6ruS6huWbm+mdoumjju+8m1wiLCBcIui9u+eBteWcqOaYpeeahOWFieiJs+S4reS6pOiInuedgOWPmOOAglwiLCBcIuS9oOaYr+Wbm+aciOaXqeWkqemHjOeahOS6keeDn++8jFwiLCBcIum7hOaYj+WQueedgOmjjueahOi9r++8jFwiLCBcIuaYn+WtkOWcqOaXoOaEj+S4remXqu+8jFwiLCBcIue7humbqOeCuea0kuWcqOiKseWJjeOAglwiLFxyXG4gICAgICAgICAgXCLpgqPovbvvvIzpgqPlqInlqbfvvIzkvaDmmK/vvIxcIiwgXCLpspzlpo3nmb7oirHnmoTlhqDlhpXkvaDmiLTnnYDvvIxcIiwgXCLkvaDmmK/lpKnnnJ/vvIzluoTkuKXvvIxcIiwgXCLkvaDmmK/lpJzlpJznmoTmnIjlnIbjgIJcIiwgXCLpm6rljJblkI7pgqPniYfpuYXpu4TvvIzkvaDlg4/vvJtcIiwgXCLmlrDpspzliJ3mlL7oir3nmoTnu7/vvIzkvaDmmK/vvJtcIiwgXCLmn5Tlq6nllpzmgqbvvIxcIixcclxuICAgICAgICAgIFwi5rC05YWJ5rWu5Yqo552A5L2g5qKm5pyf5b6F5Lit55m96I6y44CCXCIsIFwi5L2g5piv5LiA5qCR5LiA5qCR55qE6Iqx5byA77yMXCIsIFwi5piv54eV5Zyo5qKB6Ze05ZGi5ZaD77yMXCIsIFwi4oCU4oCU5L2g5piv54ix77yM5piv5pqW77yM5piv5biM5pyb77yMXCIsIFwi5L2g5piv5Lq66Ze055qE5Zub5pyI5aSp77yBXCJdLFxyXG4gIFwiYmdtXCI6IFwiUmFmYWVsIEtydXgtUG9uZFwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9mcmVlcGQuY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWQg+ilv+eTnOeahOWwj+S6jOmDjlwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5pyq6YCJ5oup55qE6Lev44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrnvZfkvK/nibnCt+W8l+e9l+aWr+eJuVwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLpu4TmoJHmnpfph4zliIblh7rkuKTmnaHot6/vvIxcIiwgXCLlj6/mg5zmiJHkuI3og73lkIzml7bmtonotrPvvIxcIiwgXCLmiJHlnKjpgqPot6/lj6PkuYXkuYXkvKvnq4vvvIxcIiwgXCLmiJHlkJHnnYDkuIDmnaHot6/mnoHnm67mnJvljrvvvIxcIiwgXCLnm7TliLDlroPmtojlpLHlnKjkuJvmnpfmt7HlpITjgIJcIiwgXCLkvYbmiJHljbTpgInmi6nkuoblj6blpJbkuIDmnaHot6/vvIxcIixcclxuICAgICAgICAgIFwi5a6D6I2S6I2J6JCL6JCL77yM5Y2B5YiG5bm95a+C77yMXCIsIFwi5pi+5b6X5pu06K+x5Lq677yM5pu0576O5Li977ybXCIsIFwi6Jm954S25Zyo6L+Z5p2h5bCP6Lev5LiK77yMXCIsIFwi5b6I5bCR55WZ5LiL5peF5Lq655qE6Laz6L+544CCXCIsIFwi6YKj5aSp5riF5pmo6JC95Y+25ruh5Zyw77yMXCIsIFwi5Lik5p2h6Lev6YO95pyq57uP6ISa5Y2w5rGh5p+T44CCXCIsIFwi5ZWK77yM55WZ5LiL5LiA5p2h6Lev562J5pS55pel5YaN6KeBIVwiLFxyXG4gICAgICAgICAgXCLkvYbmiJHnn6XpgZPot6/lvoTlu7bnu7Xml6DlsL3lpLQsXCIsIFwi5oGQ5oCV5oiR6Zq+5Lul5YaN5Zue6L+U44CCXCIsIFwi5Lmf6K645aSa5bCR5bm05ZCO5Zyo5p+Q5Liq5Zyw5pa577yMXCIsIFwi5oiR5bCG6L275aOw5Y+55oGv5bCG5b6A5LqL5Zue6aG+77yaXCIsIFwi5LiA54mH5qCR5p6X6YeM5YiG5Ye65Lik5p2h6Lev77yMXCIsIFwi6ICM5oiR6YCJ5oup5LqG5Lq66L+55pu05bCR55qE5LiA5p2h77yMXCIsXHJcbiAgICAgICAgICBcIuS7juatpOWGs+WumuS6huaIkeS4gOeUn+eahOmBk+i3r+OAglwiXSxcclxuICBcImJnbVwiOiBcIk9uV2FsZGVuUG9uZFwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9hdWRpb25hdXRpeC5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK57qi6LGG44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrpl7vkuIDlpJpcIixcclxuICBcImNvbnRlbnRcIjogW1wi55u45oCd5piv5LiN5YGa5aOw55qE6JqK5a2QXCIsIFwi5YG35YG35Zyw5ZKs5LqG5LiA5Y+jXCIsIFwi6Zmh54S255eb5LqG5LiA5LiLXCIsIFwi5Lul5ZCO5L6/5piv5LiA6Zi155qE5aWH55eSXCJdLFxyXG4gIFwiYmdtXCI6IFwiQWxleGFuZGVyIE5ha2FyYWRhLVdpbnRlclwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9mcmVlcGQuY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWbm+WklVwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5Y2X5q2M5a2Q6K+N5LqM6aaWIC8g5paw5re75aOw5p2o5p+z5p6d6K+N44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrmuKnluq3nraBcIixcclxuICBcImNvbnRlbnRcIjogW1wi5LiA5bC65rex57qi6IOc5puy5bCY77yM5aSp55Sf5pen54mp5LiN5aaC5paw44CCXCIsIFwi5ZCI5qyi5qGD5qC457uI5aCq5oGo77yM6YeM6K645YWD5p2l5Yir5pyJ5Lq644CCXCIsIFwi5LqV5bqV54K554Gv5rex54Ob5LyK77yM5YWx6YOO6ZW/6KGM6I6r5Zu05qOL44CCXCIsIFwi546y54+R6aqw5a2Q5a6J57qi6LGG77yM5YWl6aqo55u45oCd55+l5LiN55+l44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwibmV6YW1lXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vbXVzaWMuZ2VvY2l0aWVzLmpwL2hha3V1X2FtYWJpbmUvXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuaxh+aWh1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5YOP6L+Z5qC357uG57uG5Zyw5ZCs44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLnjpvnkLPlqJzCt+S8iuS4h+ivuuWkq+WonMK36Iyo57u05aGU6IC25aiDXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuWDj+i/meagt+e7hue7huWcsOWQrFwiLCBcIuWDj+i/meagt+e7hue7huWcsOWQrO+8jFwiLCBcIuWmguays+WPo+WHneelnuWAvuWQrOiHquW3seeahOa6kOWktOOAglwiLCBcIuWDj+i/meagt+a3sea3seWcsOWXheS4gOacteWwj+iKse+8jFwiLCBcIuebtOWIsOefpeinieWMluS4uuS5jOacieOAglwiLCBcIuWDj+i/meagt++8jOWcqOiUmuiTneeahOepuuawlOmHjFwiLCBcIua6tui/m+S6huaXoOW6leeahOa4tOacm+OAglwiLFxyXG4gICAgICAgICAgXCLlg4/ov5nmoLfvvIzlnKjluorljZXnmoTolJrok53ph4xcIiwgXCLlranlrZDpgaXmnJvorrDlv4bnmoTov5zmlrnjgIJcIiwgXCLlg4/ov5nmoLfvvI7ojrLoirHoiKznmoTlsJHlubRcIiwgXCLpu5jpu5jkvZPpqozooYDnmoTmuKnms4lcIiwgXCLlsLHlg4/ov5nmoLfvvIzkuI7niLHmg4Xnm7jmgYtcIiwgXCLlsLHlg4/ov5nmoLfvvIzokL3lhaXmt7HmuIrjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJHcmVlbkxlYXZlc1wiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9hdWRpb25hdXRpeC5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuaxh+aWh1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK6aOe6bif6ZuG44CL6IqC6YCJXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrms7DmiIjlsJRcIixcclxuICBcImNvbnRlbnRcIjogW1wiQWZ0ZXIgdGhlIG5pZ2h0IEkgYnVybmVkIGFsbCBtZW1vcnksXCIsIFwibXkgZHJlYW0gYmVjb21lcyB0cmFuc3BhcmVudCxcIixcclxuICAgICAgICAgIFwiYXMgSSB0cmFzaGVkIGFsbCB5ZXN0ZXJkYXlzLFwiLCBcIm15IHN0ZXAgYmVjb21lcyBsaWdodGVyLlwiLCBcIuacieS4gOS4quWknOaZmuaIkeeDp+avgeS6huaJgOacieeahOiusOW/hu+8jFwiLCBcIuS7juatpOaIkeeahOaipuWwsemAj+aYjuS6hu+8m1wiLFxyXG4gICAgICAgICAgXCLmnInkuIDkuKrml6nmmajmiJHmiZTmjonkuobmiYDmnInnmoTmmKjlpKnvvIxcIiwgXCLku47mraTmiJHnmoTohJrmraXlsLHovbvnm4jkuobjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJTdW5kYXlzQ2hpbGRcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vYXVkaW9uYXV0aXguY29tL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlj7Pnn7PlhYjnlJ9cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiumTnOWumOeqkeeTt+WZqOmimOivl+S6jOWNgeS4gOmmluOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5L2a5ZCNXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuWQm+eUn+aIkeacqueUnyzmiJHnlJ/lkJvlt7LogIHjgIJcIiwgXCLlkJvmgajmiJHnlJ/ov58s5oiR5oGo5ZCb55Sf5pep44CCXCIsIFwi5ZCb55Sf5oiR5pyq55SfLOaIkeeUn+WQm+W3suiAgeOAglwiLCBcIuaBqOS4jeeUn+WQjOaXtizml6Xml6XkuI7lkJvlpb3jgIJcIiwgXCLmiJHnlJ/lkJvmnKrnlJ8s5ZCb55Sf5oiR5bey6ICB44CCXCIsIFwi5oiR56a75ZCb5aSp5ravLOWQm+malOaIkea1t+inkuOAglwiLFxyXG4gICAgICAgICAgXCLmiJHnlJ/lkJvmnKrnlJ8s5ZCb55Sf5oiR5bey6ICB44CCXCIsIFwi5YyW6J225Y675a+76IqxLOWknOWknOagluiKs+iNieOAglwiXSxcclxuICBcImJnbVwiOiBcIumiqOe0i1wiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL211c2ljLmdlb2NpdGllcy5qcC9oYWt1dV9hbWFiaW5lL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLmsYfmlodcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIueOi+WwlOW+t+Wbm+WImVwiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya546L5bCU5b63XCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIldlIGFyZSBhbGwgaW4gdGhlIGd1dHRlcixcIiwgXCJidXQgc29tZSBvZiB1cyBhcmUgbG9va2luZyBhdCB0aGUgc3RhcnMuXCIsIFwi5oiR5Lus6YO95Zyo6Zi05rKf6YeM77yM5L2G5LuN5pyJ5Lq65Luw5pyb5pif56m644CCXCIsXHJcbiAgICAgICAgICBcIldoZW4gSSB3YXMgeW91bmcsXCIsIFwiSSB0aG91Z2h0IG1vbmV5IHdhcyBldmVyeXRoaW5nLlwiLCBcIk5vdyBJJ20gb2xkIGVub3VnaCB0byBrbm93IHRoYXQgaXQgaXMgdHJ1ZS5cIixcclxuICAgICAgICAgIFwi5bm06L275pe25oiR5Lul5Li66ZKx5bCx5piv5LiA5YiH77yMXCIsIFwi546w5Zyo6ICB5LqG5omN55+l6YGT56Gu5a6e5aaC5q2k44CCXCIsIFwiQmUgeW91cnNlbGYsXCIsIFwiZXZlcnlvbmUgZWxzZSBpcyBhbHJlYWR5IHRha2VuLlwiLCBcIuWBmuS9oOiHquW3se+8jFwiLCBcIuWboOS4uuWIq+S6uumDveacieS6uuWBmuS6huOAglwiLFxyXG4gICAgICAgICAgXCJUbyBsb3ZlIG9uZXNlbGYgaXNcIiwgXCJ0aGUgYmVnaW5uaW5nIG9mIGEgbGlmZWxvbmcgcm9tYW5jZS5cIiwgXCLniLHoh6rlt7HmmK/nu4jouqvmtarmvKvnmoTlvIDlp4vjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJLZXZpbiBNYWNMZW9kLUJldGhsZWhlbVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9pbmNvbXBldGVjaC5jb21cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Y+z55+z5YWI55SfXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLmrYzlvrfkuInliJlcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muatjOW+t1wiLFxyXG4gIFwiY29udGVudFwiOiBbXCJJZiB3aG8gaXMgdGhlIGdhbWUgb2YgbGlmZSxcIiwgXCJoZSBhY2NvbXBsaXNoZXMgbm90aGluZztcIiwgXCJXaG8gY2Fubm90IGNvbnRyb2wgaGltc2VsZixcIixcclxuICAgICAgICAgIFwiaGUgaXMgYWx3YXlzIGEgc2xhdmUuXCIsIFwi6LCB6Iul5ri45oiP5Lq655Sf77yM5LuW5bCx5LiA5LqL5peg5oiQ77ybXCIsIFwi6LCB5LiN6IO95Li75a6w6Ieq5bex77yM5L6/5rC46L+c5piv5LiA5Liq5aW06Zq244CCXCIsXHJcbiAgICAgICAgICBcIklmIEkgbG92ZSB5b3UsIHdoYXQgYnVzaW5lc3MgaXMgaXQgb2YgeW91cnM/XCIsIFwi5oiR54ix5L2g77yM5LiO5L2g5peg5YWz44CCXCIsXHJcbiAgICAgICAgICBcIlxcXCJEbyB5b3Uga25vdyB3aHkgeW91IGNsb3NlIHlvdXIgZXllcyBcIiwgXCJ3aGVuIHlvdSBraXNzP1xcXCJcIixcclxuICAgICAgICAgIFwiXFxcImJlY2F1c2UgdGhleSBzaGluZSB0b28gbXVjaCBvbiBlYWNoIG90aGVyLlxcXCJcIiwgXCLigJznn6XpgZPkuLrku4DkuYjkurLlkLvnmoTml7blgJnopoHpl63nnYDlj4znnLzlkJfvvJ/igJ1cIiwgXCLigJzlm6DkuLrku5bku6zlvbzmraTpg73lpKrpl6rogIDjgILigJ1cIl0sXHJcbiAgXCJiZ21cIjogXCJLZXZpbiBNYWNMZW9kLU9oIEhvbHkgTmlnaHRcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vaW5jb21wZXRlY2guY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5qKm5LiO6K+X44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrog6HpgIJcIixcclxuICBcImNvbnRlbnRcIjogW1wi6YO95piv5bmz5bi457uP6aqM77yMXCIsIFwi6YO95piv5bmz5bi45b2x6LGh77yMXCIsIFwi5YG254S25raM5Yiw5qKm5Lit5p2l77yMXCIsIFwi5Y+Y5bm75Ye65aSa5bCR5paw5aWH6Iqx5qC3IVwiLCBcIumDveaYr+W5s+W4uOaDheaEn++8jFwiLCBcIumDveaYr+W5s+W4uOiogOivre+8jFwiLCBcIuWBtueEtueisOedgOS4quivl+S6uu+8jFwiLCBcIuWPmOW5u+WHuuWkmuWwkeaWsOWlh+ivl+WPpSFcIixcclxuICAgICAgICAgIFwi6YaJ6L+H5omN55+l6YWS5rWT77yMXCIsIFwi54ix6L+H5omN55+l5oOF6YeN4oCU4oCUXCIsIFwi5L2g5LiN6IO95YGa5oiR55qE6K+X77yMXCIsIFwi5q2j5aaC5oiR5LiN6IO95YGa5L2g55qE5qKm44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwiS2V2aW4gTWFjTGVvZC1TYXBwaGlyZSBJc2xlXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2luY29tcGV0ZWNoLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCJOauWuq+iirVwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5ZCR552A5piO5Lqu6YKj5pa544CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrph5HlrZDnvo7njrJcIixcclxuICBcImNvbnRlbnRcIjogW1wi5ZCR552A5piO5Lqu6YKj5pa544CCXCIsIFwi5ZCR552A5piO5Lqu6YKj5pa544CCXCIsIFwi5ZOq5oCV5LiA54mH5Y+25a2QXCIsIFwi5Lmf6KaB5ZCR552A5pel5YWJ5rSS5LiL55qE5pa55ZCR44CCXCIsIFwi54GM5pyo5Lib5Lit55qE5bCP6I2J5ZWK44CCXCIsIFwi5ZCR552A5piO5Lqu6YKj5pa5XCIsIFwi5ZCR552A5piO5Lqu6YKj5pa544CCXCIsIFwi5ZOq5oCV54On54Sm5LqG57+F6IaAXCIsXHJcbiAgICAgICAgICBcIuS5n+imgemjnuWQkeeBr+eBq+mXqueDgeeahOaWueWQkeOAglwiLCBcIuWvkuWknOmHjOeahOmjnuiZq+WViuOAglwiLCBcIuWQkeedgOaYjuS6rumCo+aWuVwiLCBcIuWQkeedgOaYjuS6rumCo+aWueOAglwiLCBcIuWTquaAleWPquaYr+WIhuWvuOeahOWuveaVnlwiLCBcIuS5n+imgeWQkeedgOmYs+WFieeFp+WwhOeahOaWueWQkeOAglwiLCBcIuS9j+WcqOmDveS8mueahOWtqeWtkOS7rOWViuOAglwiXSxcclxuICBcImJnbVwiOiBcIlN1bmRheXNDaGlsZFwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9hdWRpb25hdXRpeC5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWQg+ilv+eTnOeahOWwj+S6jOmDjlwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK6KGl5YG/44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJroib7nsbPojonCt+eLhOmHkeajrlwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLkuLrmr4/kuIDkuKrni4LllpznmoTnnqzpl7RcIiwgXCLmiJHku6zlv4Xpobvlgb/ku6Xnl5voi6boh7PmnoFcIiwgXCLliLrnl5vlkozpoqTmipbvvIzlkozni4LllpzmiJDmraPmr5RcIiwgXCLkuLrmr4/kuIDkuKrlj6/niLHnmoTml7bliLtcIiwgXCLlv4Xlgb/ku6XlpJrlubTnmoTku5jlh7pcIiwgXCLovpvphbjkuonlpLrnmoTljYrliIblhavljphcIiwgXCLlkozmtbjmu6Hms6rmsLTnmoTpkrHnrrFcIl0sXHJcbiAgXCJiZ21cIjogXCJLZXZpbiBNYWNMZW9kLU9oIEhvbHkgTmlnaHRcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vaW5jb21wZXRlY2guY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuaxh+aWh1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5riF5bmz6LCD44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrmnY7nmb1cIixcclxuICBcImNvbnRlbnRcIjogW1wi5LqR5oOz6KGj6KOz6Iqx5oOz5a6577yMIOaYpemjjuaLguanm+mcsuWNjua1k+OAglwiLCBcIuiLpemdnue+pOeOieWxseWktOinge+8jCDkvJrlkJHnkbblj7DmnIjkuIvpgKLjgIJcIiwgXCLkuIDmnp3nuqLoibPpnLLlh53pppnvvIwg5LqR6Zuo5ber5bGx5p6J5pat6IKg44CCXCIsIFwi5YCf6Zeu5rGJ5a6r6LCB5b6X5Ly877yfIOWPr+aAnOmjnueHleWAmuaWsOWmhuOAglwiLFxyXG4gICAgICAgICAgXCLlkI3oirHlgL7lm73kuKTnm7jmrKLvvIwg6ZW/5b6X5ZCb546L5bim56yR55yL44CCXCIsIFwi6Kej6YeK5pil6aOO5peg6ZmQ5oGo77yMIOayiemmmeS6reWMl+WAmumYkeW5suOAglwiXSxcclxuICBcImJnbVwiOiBcImthbXVuYWJpXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vbXVzaWMuZ2VvY2l0aWVzLmpwL2hha3V1X2FtYWJpbmUvXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuaxh+aWh1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5b2T5L2g6ICB5LqG44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrlqIHlu4nCt+W3tOeJueWLksK35Y+26IqdXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuW9k+S9oOiAgeS6hu+8jOWktOeZveS6hu+8jOedoeaEj+aYj+ayie+8jFwiLCBcIueCieeBq+aXgeaJk+ebue+8jOivt+WPluS4i+i/memDqOivl+atjO+8jFwiLCBcIuaFouaFouivu++8jOWbnuaDs+S9oOi/h+WOu+ecvOelnueahOaflOWSjO+8jFwiLCBcIuWbnuaDs+Wug+S7rOaYlOaXpea1k+mHjeeahOmYtOW9se+8m1wiLCBcIuWkmuWwkeS6uueIseS9oOmdkuaYpeasoueVheeahOaXtui+sO+8jFwiLFxyXG4gICAgICAgICAgXCLniLHmhZXkvaDnmoTnvo7kuL3vvIzlgYfmhI/miJbnnJ/lv4PvvIxcIiwgXCLlj6rmnInkuIDkuKrkurrniLHkvaDpgqPmnJ3lnKPogIXnmoTngbXprYLvvIxcIiwgXCLniLHkvaDoobDogIHkuobnmoTohLjkuIrnl5voi6bnmoTnmrHnurnvvJtcIiwgXCLlnoLkuIvlpLTmnaXvvIzlnKjnuqLlhYnpl6rogIDnmoTngonlrZDml4HvvIxcIiwgXCLlh4TnhLblnLDovbvovbvor4nor7TpgqPniLHmg4XnmoTmtojpgJ3vvIxcIixcclxuICAgICAgICAgIFwi5Zyo5aS06aG255qE5bGx5LiK5a6D57yT57yT6Lix552A5q2l5a2Q77yMXCIsIFwi5Zyo5LiA576k5pif5pif5Lit6Ze06ZqQ6JeP552A6IS45bqe44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwiSm9zaCBXb29kd2FyZC1BdXR1bW5cIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHDvvJovL2pvc2h3b29kd2FyZC5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuaxh+aWh1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK6K6w5b6X5pen5pe25aW944CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrpmYjnmb3msplcIixcclxuICBcImNvbnRlbnRcIjogW1wi6K6w5b6X5pen5pe25aW977yM6Lef6ZqP6Zi/5aiY5Y675ZCD6Iy244CCXCIsIFwi6Zeo5YmN56Oo6J665aOz77yM5be35Y+j5byE5rOl5rKZ44CCXCIsIFwi6ICM5LuK5Lq66ZW/5aSn77yM5b+D5LqL5Lmx5aaC6bq744CCXCIsIFwi6K6w5b6X5pen5pe26YGl77yM5Zac55yL6Zi/5amG57q657q/57qx44CCXCIsIFwi55Om5Ye55rOh5paw6Iyn77yM6Zmi5YaF5oO56ZuP6bit44CCXCIsIFwi6ICM5LuK5Lq66ZW/5aSn77yM5b+D57uq5reh6Iul6Iy244CCXCIsXHJcbiAgICAgICAgICAgIFwi6K6w5b6X5pen5pe25bCP77yM54ix5Y235Lir5bCP6KGj6KWf6KeS44CCXCIsIFwi5qqQ5bqV6Lmy6JqB5bei77yM5qCR5LiK5YWx5pSA5p6j44CCXCIsIFwi6ICM5LuK5Lq66ZW/5aSn77yM5b+D5oOF5oGN5q+U5r2u44CCXCIsIFwi6K6w5b6X5pen5pe25reY77yM5oC75auM5YWI55Sf6K6y5LmW5ben44CCXCIsIFwi6L2m6ams5re36bG86b6Z77yM552B55y85LmQ5aaW5aiG44CCXCIsXHJcbiAgICAgICAgICAgIFwi6ICM5LuK5Lq66ZW/5aSn77yM5b+D5oCd6aOY5oiQ6I2J44CCXCIsIFwi6K6w5b6X5pen5pe26Ze577yM5YGP6KaB5ZOl5ZOl5pWZ5o2J6Jm+44CCXCIsIFwi5aKZ6KeS5oyW6Z2S6IuU77yM5qKi5aS05paX55+l5LqG44CCXCIsIFwi6ICM5LuK5Lq66ZW/5aSn77yM5b+D5rmW6I2h6LW35r2u44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwi5oeQ44GL44GX44GE6aKo5oOFXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vYW1hY2hhbXVzaWMuY2hhZ2FzaS5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIk5q5a6r6KKtXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrkurrmnIjlnIbCt+WxseS4reS5puS6i+OAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5byg5Y+v5LmFXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuWFtOS6oeWNg+WPpOe5geWNjuaipu+8jOivl+ecvOWApuWkqea2r+OAglwiLCBcIuWtlOael+S5lOacqO+8jOWQtOWuq+iUk+iNie+8jOalmuW6meWvkum4puOAglwiLCBcIuaVsOmXtOiMheiIje+8jOiXj+S5puS4h+WNt++8jOaKleiAgeadkeWutuOAglwiLCBcIuWxseS4reS9leS6i++8n+advuiKsemFv+mFku+8jOaYpeawtOeFjuiMtuOAglwiXSxcclxuICBcImJnbVwiOiBcIm5lemFtZVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL211c2ljLmdlb2NpdGllcy5qcC9oYWt1dV9hbWFiaW5lL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLmsYfmlodcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuWwhui/m+mFksK35ZCb5LiN6KeB44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrmnY7nmb1cIixcclxuICBcImNvbnRlbnRcIjogW1wi5ZCb5LiN6KeB77yMXCIsIFwi6buE5rKz5LmL5rC05aSp5LiK5p2l77yMXCIsIFwi5aWU5rWB5Yiw5rW35LiN5aSN5Zue44CCXCIsIFwi5ZCb5LiN6KeB77yMXCIsIFwi6auY5aCC5piO6ZWc5oKy55m95Y+R77yMXCIsIFwi5pyd5aaC6Z2S5Lid5pqu5oiQ6Zuq44CCXCIsIFwi5Lq655Sf5b6X5oSP6aG75bC95qyi77yMXCIsIFwi6I6r5L2/6YeR5qi956m65a+55pyI44CCXCIsIFwi5aSp55Sf5oiR5p2Q5b+F5pyJ55So77yMXCIsIFwi5Y2D6YeR5pWj5bC96L+Y5aSN5p2l44CCXCIsXHJcbiAgICAgICAgICBcIueDuee+iuWusOeJm+S4lOS4uuS5kO+8jFwiLCBcIuS8mumhu+S4gOmlruS4ieeZvuadr+OAglwiLCBcIuWykeWkq+WtkO+8jOS4ueS4mOeUn++8jFwiLCBcIuWwhui/m+mFku+8jOadr+iOq+WBnOOAglwiLCBcIuS4juWQm+atjOS4gOabsu+8jFwiLCBcIuivt+WQm+S4uuaIkeWAvuiAs+WQrOOAglwiLCBcIumSn+m8k+mmlOeOieS4jei2s+i0te+8jFwiLCBcIuS9huaEv+mVv+mGieS4jeWkjemGkuOAglwiLCBcIuWPpOadpeWco+i0pOeahuWvguWvnu+8jFwiLCBcIuaDn+aciemlruiAheeVmeWFtuWQjeOAglwiLFxyXG4gICAgICAgICAgXCLpmYjnjovmmJTml7blrrTlubPkuZDvvIxcIiwgXCLmlpfphZLljYHljYPmgaPmrKLosJHjgIJcIiwgXCLkuLvkurrkvZXkuLroqIDlsJHpkrHvvIxcIiwgXCLlvoTpobvmsr3lj5blr7nlkJvphYzjgIJcIiwgXCLkupToirHpqazvvIzljYPph5Hoo5jvvIxcIiwgXCLlkbzlhL/lsIblh7rmjaLnvo7phZLvvIxcIiwgXCLkuI7lsJTlkIzplIDkuIflj6TmhIHjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJvbWl3YXRhcmlcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9tdXNpYy5nZW9jaXRpZXMuanAvaGFrdXVfYW1hYmluZS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Zub5aSVXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrmiJHnmoTkuabmnKzljrvnmoTlnLDmlrnjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muWogeW7icK35be054m55YuSwrflj7boip1cIixcclxuICBcImNvbnRlbnRcIjogW1wi5oiR5omA5a2m5Yiw55qE5omA5pyJ6K+t6KiA77yMXCIsIFwi5oiR5omA5YaZ5Ye655qE5omA5pyJ6K+t6KiA77yMXCIsIFwi5b+F54S26KaB5bGV57+F77yM5LiN5YCm55qE6aOe57+U77yMXCIsIFwi57ud5LiN5Lya5Zyo6aOe6KGM5Lit5YGc5LiA5YGc44CCXCIsIFwi5LiA55u06aOe5Yiw5L2g5oKy5Lyk55qE5b+D5omA5Zyo55qE5Zyw5pa577yMXCIsIFwi5Zyo5aSc6Imy5Lit5ZCR552A5L2g5q2M5ZSx77yMXCIsXHJcbiAgICAgICAgICBcIui/nOaWue+8jOays+awtOato+WcqOa1gea3jO+8jFwiLCBcIuS5jOS6keWvhuW4g++8jOaIluaYr+aYn+WFieeBv+eDguOAglwiXSxcclxuICBcImJnbVwiOiBcIlJhZmFlbCBLcnV4LVBvbmRcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vZnJlZXBkLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCJOauWuq+iirVwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5ZGo5Y2XwrfmoYPlpK3jgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muS9muWQjVwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLmoYPkuYvlpK3lpK3vvIzngbzngbzlhbbljY7jgIJcIiwgXCLkuYvlrZDkuo7lvZLvvIzlrpzlhbblrqTlrrbjgIJcIiwgXCLmoYPkuYvlpK3lpK3vvIzmnInolaHlhbblrp7jgIJcIiwgXCLkuYvlrZDkuo7lvZLvvIzlrpzlhbblrrblrqTjgIJcIiwgXCLmoYPkuYvlpK3lpK3vvIzlhbblj7bok4Hok4HjgIJcIiwgXCLkuYvlrZDkuo7lvZLvvIzlrpzlhbblrrbkurrjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJuZXphbWVcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9tdXNpYy5nZW9jaXRpZXMuanAvaGFrdXVfYW1hYmluZS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5ZCD6KW/55Oc55qE5bCP5LqM6YOOXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrmg7bnhLblvZXjgIvoioLpgIlcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mui0ueWwlOWNl+WkmsK35L2p57Si6Zi/XCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuWDj+S4gOaUr+ayoeacieWujOaIkOeahOeQtOW8k++8jFwiLCBcIueBtemtguS7juadpeS4jeiDveWtmOWcqOS6juWug+eahOiHqui6q+OAglwiLCBcIuS8n+Wkp+eahOaZr+ingue7n+e7n+WxnuS6jlwiLCBcIuaIkeS7rOW3sue7j+S6suWOhui/h+eahOS4gOS4quaYjuWkqeOAglwiLCBcIuiAjOawuOS4jemXtOaWreeahOS6pOiwiOW3sue7j+aYr+S4gOS4quWksei0peOAglwiLCBcIuiwgeabvueMnOWHuueUn+a0u+WwseWDj+i/meS4quagt+WtkO+8n1wiLFxyXG4gICAgICAgICAgXCLmiJHmib7liLDoh6rlt7HkuYvml6XvvIxcIiwgXCLlsLHmmK/lpLHokL3oh6rlt7HkuYvml7bjgIJcIiwgXCLlpoLmnpzmiJHnm7jkv6HvvIxcIiwgXCLmiJHlsLHlv4XnhLbmgIDnlpHjgIJcIiwgXCLmiJHntKfntKfmipPkvY/kuIDkupvkuJzopb/nmoTml7blgJnvvIxcIiwgXCLmiJHnmoTmiYvph4zlv4Xlrprnqbrml6DkuIDnianjgIJcIiwgXCLmiJHljrvnnaHop4nlsLHlpoLmiJHmraPlnKjlh7rljrvmlaPmraXjgIJcIiwgXCLnlJ/mtLvmr5Xnq5/mmK/kuIDmrKHkvJ/lpKfnmoTlpLHnnKDvvIxcIixcclxuICAgICAgICAgIFwi5oiR5Lus5YGa6L+H5oiW5oOz6L+H55qE5LiA5YiH77yMXCIsIFwi6YO95aSE5Zyo5riF5r6I55qE5Y2K6YaS54q25oCB5LmL5Lit44CCXCIsIFwi5aaC5p6c5oiR6IO95aSf5YWl552h77yMXCIsIFwi5oiR5Lya5b+r5LmQ44CCXCIsIFwi6Iez5bCR5oiR546w5Zyo5oCd6ICD55qE5pe25YCZ5oiR5bCx552h5LiN5oiQ44CCXCIsIFwi5aSc5pma5piv5LiA5Liq5beo5aSn55qE6YeN5Y6L77yMXCIsIFwi5Y6L5b6X5oiR5Zyo5a+C6Z2Z55qE6KaG55uW5LmL5LiL55qE5qKm6YeM6Ieq5oiR56qS5oGv44CCXCIsXHJcbiAgICAgICAgICBcIuaIkeacieS4gOenjeeBtemtgueahOWPjeiDg+eXh+OAglwiXSxcclxuICBcImJnbVwiOiBcIktldmluIE1hY0xlb2QtQmV0aGxlaGVtXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwczovL2luY29tcGV0ZWNoLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlj7Pnn7PlhYjnlJ9cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuWkseeqg+eahOWtqeWtkOOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5aiB5buJwrflt7Tnibnli5LCt+WPtuiKnVwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLotbDlkKdcIiwgXCLkurrpl7TnmoTlranlrZBcIiwgXCLotbDlkJHpgqPojZLph47lkozmsrPmtYFcIiwgXCLkuI7kuIDkuKrnsr7ngbXmiYvnibXmiYtcIiwgXCLlm6DkuLrov5nkuKrkuJbnlYznmoTmgrLkvKTlpKrmt7HkuoYg6ICM5L2g5LiN6IO95oeCXCJdLFxyXG4gIFwiYmdtXCI6IFwiQWxleGFuZGVyIE5ha2FyYWRhLVdpbnRlclwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9mcmVlcGQuY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuaxh+aWh1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK54ix44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrmiZjpqazmlq8u5biD5pyXXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuaIkeeIseS9oO+8jFwiLCBcIuS4jeaYr+WboOS4uuS9oOaYr+S4gOS4quaAjuagt+eahOS6uu+8jFwiLCBcIuiAjOaYr+WboOS4ulwiLCBcIuaIkeWWnOasouS4juS9oOWcqOS4gOi1t+aXtueahOaEn+inieOAglwiLCBcIuayoeacieS6uuWAvOW+l+S9oOa1geazqu+8jFwiLCBcIuWAvOW+l+iuqeS9oOi/meS5iOWBmueahOS6uuS4jeS8muiuqeS9oOWTreazo+OAglwiLCBcIuWkseWOu+afkOS6uu+8jFwiLCBcIuacgOezn+ezleeahOiOq+i/h+S6ju+8jFwiLFxyXG4gICAgICAgICAgXCLku5bov5HlnKjouqvml4HvvIxcIiwgXCLljbTnirnlpoLov5zlnKjlpKnovrnjgIJcIiwgXCLnurXnhLbkvKTlv4PvvIzkuZ/kuI3opoHmgonnnInkuI3lsZXvvIxcIiwgXCLlm6DkuLrkvaDkuI3nn6XmmK/osIHkvJrniLHkuIrkvaDnmoTnrJHlrrnjgIJcIiwgXCLlr7nkuo7kuJbnlYzogIzoqIDvvIzkvaDmmK/kuIDkuKrkurrvvJtcIiwgXCLkvYbmmK/lr7nkuo7mn5DkurrvvIxcIiwgXCLkvaDmmK/ku5bnmoTmlbTkuKrkuJbnlYzjgIJcIixcclxuICAgICAgICAgIFwi5LiN6KaB5Li66YKj5Lqb5LiN5oS/XCIsIFwi5Zyo5L2g6Lqr5LiK6Iqx6LS55pe26Ze055qE5Lq6XCIsIFwi6ICM5rWq6LS55L2g55qE5pe26Ze044CCXCIsIFwi54ix5L2g55qE5Lq6XCIsIFwi5aaC5p6c5rKh5pyJ5oyJ5L2g5omA5biM5pyb55qE5pa55byP54ix5L2g77yMXCIsIFwi6YKj5bm25LiN5Luj6KGo5LuW5Lus5rKh5pyJ5YWo5b+D5YWo5oSP5Zyw54ix5L2g44CCXCIsIFwi5LiN6KaB552A5oCl77yMXCIsIFwi5pyA5aW955qE5oC75Lya5Zyo5pyA5LiN57uP5oSP55qE5pe25YCZ5Ye6546w44CCXCIsXHJcbiAgICAgICAgICBcIuWcqOmBh+WIsOaipuS4reS6uuS5i+WJje+8jFwiLCBcIuS4iuWkqeS5n+iuuOS8muWuieaOkuaIkeS7rOWFiOmBh+WIsOWIq+S6uu+8m1wiLCBcIuWcqOaIkeS7rOe7iOS6jumBh+ingeW/g+S7queahOS6uuaXtu+8jFwiLCBcIuS+v+W6lOW9k+W/g+WtmOaEn+a/gOOAglwiLCBcIuS4jeimgeWboOS4uue7k+adn+iAjOWTreazo++8jFwiLCBcIuW+rueskeWQp++8jOS4uuS9oOeahOabvue7j+aLpeacieOAglwiLCBcIuKAnOeUn+WRveaYr+adn+e6r+WHgOeahOeBq+eEsO+8jFwiLFxyXG4gICAgICAgICAgXCLmiJHku6zkvp3pnaDoh6rlt7HlhoXlv4PnnIvkuI3op4HnmoTlpKrpmLPogIzlrZjlnKjjgILigJ1cIl0sXHJcbiAgXCJiZ21cIjogXCJSYWZhZWwgS3J1eC1Mb3ZlbHkgUGlhbm8gU29uZ1wiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cHM6Ly9mcmVlcGQuY29tXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWPs+efs+WFiOeUn1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5a2j5YCZ44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrpgrXmtLXnvo5cIixcclxuICBcImNvbnRlbnRcIjogW1wi5Yid6KeB5L2g5pe25L2g57uZ5oiR5L2g55qE5b+D77yMXCIsIFwi6YeM6Z2i5piv5LiA5Liq5pil5aSp55qE5pep5pmo44CCXCIsIFwi5YaN6KeB5L2g5pe25L2g57uZ5oiR5L2g55qE6K+d77yMXCIsIFwi6K+05LiN5Ye655qE5piv54K954OI55qE54Gr5aSP44CCXCIsIFwi5LiJ5qyh6KeB5L2g5L2g57uZ5oiR5L2g55qE5omL77yMXCIsIFwi6YeM6Z2i6JeP552A5Liq5Y+26JC955qE5rex56eL44CCXCIsXHJcbiAgICAgICAgICBcIuacgOWQjuingeS9oOaYr+aIkeWBmueahOefreaipu+8jFwiLCBcIuaipumHjOacieS9oOi/mOacieS4gOe+pOWGrOmjjuOAglwiXSxcclxuICBcImJnbVwiOiBcIkFsZXhhbmRlciBOYWthcmFkYS1XaW50ZXJcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vZnJlZXBkLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCJOauWuq+iirVwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK54Om5b+n44CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrmiLTmnJvoiJJcIixcclxuICBcImNvbnRlbnRcIjogW1wi6K+05piv5a+C5a+e55qE56eL55qE5riF5oSB77yMXCIsIFwi6K+05piv6L696L+c55qE5rW355qE55u45oCd44CCXCIsIFwi5YGH5aaC5pyJ5Lq66Zeu5oiR55qE54Om5b+n77yMXCIsIFwi5oiR5LiN5pWi6K+05Ye65L2g55qE5ZCN5a2X44CCXCIsIFwi5oiR5LiN5pWi6K+05Ye65L2g55qE5ZCN5a2X77yMXCIsIFwi5YGH5aaC5pyJ5Lq66Zeu5oiR55qE54Om5b+n77yaXCIsIFwi6K+05piv6L696L+c55qE5rW355qE55u45oCd77yMXCIsXHJcbiAgICAgICAgICBcIuivtOaYr+WvguWvnueahOeni+eahOa4heaEgeOAglwiXSxcclxuICBcImJnbVwiOiBcIkFsZXhhbmRlciBOYWthcmFkYS1XaW50ZXJcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vZnJlZXBkLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlm5vlpJVcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuWHpOaxguWHsOOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5Y+46ams55u45aaCXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuaciee+juS6uuWFru+8jOingeS5i+S4jeW/mO+8jOS4gOaXpeS4jeingeWFru+8jOaAneS5i+WmgueLguOAglwiLCBcIuWHpOmjnumBqOe/lOWFru+8jOWbm+a1t+axguWHsO+8jOaXoOWliOS9s+S6uuWFru+8jOS4jeWcqOS4nOWimeOAglwiLCBcIuWwhueQtOS7o+ivreWFru+8jOiBiuWGmeiht+iCoO+8jOaEv+iogOmFjeW+t+WFru+8jOaQuuaJi+ebuOWwhuOAglwiLFxyXG4gICAgICAgICAgXCLkvZXml7bop4Horrjlha7vvIzmhbDmiJHml4HlvqjvvIzkuI3lvpfkuo7po57lha7vvIzkvb/miJHmsqbkuqHvvIzkvb/miJHmsqbkuqHjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCLku4rmmJTjg47ntYZcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly93d3cucmVuZ29rdS10ZWllbi5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWbm+WklVwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5oqY5qGC5LukwrfmmKXmg4XjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muW+kOWGjeaAnVwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLlubPnlJ/kuI3kvJrnm7jmgJ3vvIxcIiwgXCLmiY3kvJrnm7jmgJ3vvIzkvr/lrrPnm7jmgJ3jgIJcIiwgXCLouqvkvLzmta7kupHvvIzlv4PlpoLpo57nta7vvIxcIiwgXCLmsJToi6XmuLjkuJ3vvIznqbrkuIDnvJXppoDpppnlnKjmraTvvIxcIiwgXCLnm7zljYPph5HmuLjlrZDkvZXkuYvjgIJcIiwgXCLor4HlgJnmnaXml7bvvIzmraPmmK/kvZXml7bvvJ9cIiwgXCLnga/ljYrmmI/ml7bvvIzmnIjljYrmmI7ml7bjgIJcIl0sXHJcbiAgXCJiZ21cIjogXCJuZXphbWVcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHA6Ly9tdXNpYy5nZW9jaXRpZXMuanAvaGFrdXVfYW1hYmluZS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5ZCD6KW/55Oc55qE5bCP5LqM6YOOXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrpo57puJ/pm4bjgIvoioLpgIlcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muazsOaIiOWwlFwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLmiJHnmoTlv4PmmK/ml7fph47lkozpuJ9cIiwgXCLlt7Lnu4/lnKjkvaDnmoTnnLznnZvph4zmib7liLDkuoblpKnnqbpcIiwgXCLkvaDnmoTnnLznnZvmmK/ml6nkuIrnmoTmkYfnr65cIiwgXCLkvaDnmoTnnLznnZvmmK/nuYHmmJ/nmoTnjovlm71cIiwgXCLmiJHnmoTmrYzlo7DmtojlpLHlnKjkvaDnnLznnZvnmoTmt7HlpIRcIiwgXCLlsLHorqnmiJHnv7Hnv5TlnKjpgqPkuIDniYflpKnnqbrph4zlkKdcIixcclxuICAgICAgICAgIFwi5bCx6K6p5oiR57+x57+U5Zyo6YKj5LiA54mH5a2k5a+C5peg5Z6g55qE5aSp56m66YeMXCIsIFwi5bCx6K6p5oiR5o6S5byA5a6D5py15py155qE5LqR5b2pXCIsIFwi5Zyo5a6D55qE6Ziz5YWJ6YeM5bGV57+F6aOe57+UXCJdLFxyXG4gIFwiYmdtXCI6IFwiUmFmYWVsIEtydXgtTG92ZWx5IFBpYW5vIFNvbmdcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vZnJlZXBkLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCJOauWuq+iirVwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5Y+M5Z+O6K6w44CL6IqC6YCJXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrni4Tmm7Tmlq9cIixcclxuICBcImNvbnRlbnRcIjogW1wi6L+Z5piv5LiA5Liq5pyA5aW955qE5pe25Luj77yMXCIsIFwi6L+Z5piv5LiA5Liq5pyA5Z2P55qE5pe25Luj77ybXCIsIFwi6L+Z5piv5LiA5Liq5pm65oWn55qE5bm05Luj77yMXCIsIFwi6L+Z5piv5LiA5Liq5oSa6KCi55qE5bm05Luj77ybXCIsIFwi6L+Z5piv5LiA5Liq5L+h5Luw55qE5pe25pyf77yMXCIsIFwi6L+Z5piv5LiA5Liq5oCA55aR55qE5pe25pyf77ybXCIsIFwi6L+Z5piv5LiA5Liq5YWJ5piO55qE5a2j6IqC77yMXCIsIFwi6L+Z5piv5LiA5Liq6buR5pqX55qE5a2j6IqC77ybXCIsXHJcbiAgICAgICAgICBcIui/meaYr+W4jOacm+S5i+aYpe+8jFwiLCBcIui/meaYr+Wkseacm+S5i+WGrO+8m1wiLCBcIuS6uuS7rOmdouWJjeW6lOacieWwveacie+8jFwiLCBcIuS6uuS7rOmdouWJjeS4gOaXoOaJgOacie+8m1wiLCBcIuS6uuS7rOato+i4j+S4iuWkqeWgguS5i+i3r++8jFwiLCBcIuS6uuS7rOato+i1sOWQkeWcsOeLseS5i+mXqOOAglwiXSxcclxuICBcImJnbVwiOiBcIkFsZXhhbmRlciBOYWthcmFkYS1XaW50ZXJcIixcclxuICBcImJnbVNvdXJjZVwiOiBcImh0dHBzOi8vZnJlZXBkLmNvbVwiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlm5vlpJVcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuS4tOaxn+S7mcK36YCB6ZKx56mG54i244CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJroi4/ovbxcIixcclxuICBcImNvbnRlbnRcIjogW1wi5LiA5Yir6YO96Zeo5LiJ5pS554Gr77yMXCIsIFwi5aSp5rav6LiP5bC957qi5bCY44CCXCIsIFwi5L6d54S25LiA56yR5L2c5pil5rip44CCXCIsIFwi5peg5rOi55yf5Y+k5LqV77yM5pyJ6IqC5piv56eL562g44CCXCIsIFwi5oOG5oCF5a2k5biG6L+e5aSc5Y+R77yMXCIsIFwi6YCB6KGM5reh5pyI5b6u5LqR44CCXCIsIFwi5bCK5YmN5LiN55So57+g55yJ6aKm44CCXCIsXHJcbiAgICAgICAgICBcIuS6uueUn+WmgumAhuaXhe+8jOaIkeS6puaYr+ihjOS6uuOAglwiXSxcclxuICBcImJnbVwiOiBcIuaBi+eNhOOBruW9qVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL3d3dy5yZW5nb2t1LXRlaWVuLmNvbS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwi5Zub5aSVXCJcclxufSwge1xyXG4gIFwidGl0bGVcIjogXCLjgIrmtaPmuqrmspnCt+e7humbqOaWnOmjjuS9nOaZk+WvkuOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya6IuP6L28XCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIue7humbqOaWnOmjjuS9nOaZk+Wvku+8jFwiLCBcIua3oeeDn+eWj+afs+WqmuaZtOa7qeOAglwiLCBcIuWFpea3rua4hea0m+a4kOa8q+a8q+OAglwiLCBcIumbquayq+S5s+iKsea1ruWNiOebj++8jFwiLCBcIuiTvOiMuOiSv+esi+ivleaYpeebmOOAglwiLCBcIuS6uumXtOacieWRs+aYr+a4heasouOAglwiXSxcclxuICBcImJnbVwiOiBcIuS7iuaYlOODjue1hlwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL3d3dy5yZW5nb2t1LXRlaWVuLmNvbS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwiTmrlrqvooq1cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiumimOm+memYs+WOv+mdkuiNiea5luOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5ZSQ54+ZXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuilv+mjjuWQueiAgea0nuW6reazou+8jFwiLCBcIuS4gOWknOa5mOWQm+eZveWPkeWkmuOAglwiLCBcIumGieWQjuS4jeefpeWkqeWcqOawtO+8jFwiLCBcIua7oeiIuea4heaipuWOi+aYn+ays+OAglwiXSxcclxuICBcImJnbVwiOiBcImh5b3V0b3VrYVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL211c2ljLmdlb2NpdGllcy5qcC9oYWt1dV9hbWFiaW5lLy9oYWt1dV9hbWFiaW5lL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlm5vlpJVcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiumVv+ebuOaAncK35Lmd5pyI6KW/6aOO5YW044CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrnmb3lsYXmmJNcIixcclxuICBcImNvbnRlbnRcIjogW1wi5Lmd5pyI6KW/6aOO5YW077yM5pyI5Ya36Zyy5Y2O5Yed44CCXCIsIFwi5oCd5ZCb56eL5aSc6ZW/77yM5LiA5aSc6a2C5Lmd5Y2H44CCXCIsIFwi5LqM5pyI5Lic6aOO5p2l77yM6I2J5ouG6Iqx5b+D5byA44CCXCIsIFwi5oCd5ZCb5pil5pel6L+f77yM5LiA5pel6IKg5Lmd5Zue44CCXCIsIFwi5aa+5L2P5rSb5qGl5YyX77yM5ZCb5L2P5rSb5qGl5Y2X44CCXCIsIFwi5Y2B5LqU5Y2z55u46K+G77yM5LuK5bm05LqM5Y2B5LiJ44CCXCIsXHJcbiAgICAgICAgICBcIuacieWmguWls+iQneiNie+8jOeUn+WcqOadvuS5i+S+p+OAglwiLCBcIuiUk+efreaeneiLpumrmO+8jOiQpuWbnuS4iuS4jeW+l+OAglwiLCBcIuS6uuiogOS6uuacieaEv++8jOaEv+iHs+WkqeW/heaIkOOAglwiLCBcIuaEv+S9nOi/nOaWueWFve+8jOatpeatpeavlOiCqeihjOOAglwiLCBcIuaEv+S9nOa3seWxseacqO+8jOaeneaenei/nueQhueUn+OAglwiXSxcclxuICBcImJnbVwiOiBcImh5b3V0b3VrYVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL211c2ljLmdlb2NpdGllcy5qcC9oYWt1dV9hbWFiaW5lL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLmsYfmlodcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiumiguWPpOS6lOWNgeS6lOmmluWFtuS4gOOAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5peg6Zeo5oWn5byA56aF5biIXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuaYpeacieeZvuiKseeni+acieaciO+8jFwiLCBcIuWkj+acieWHiemjjuWGrOaciembquOAglwiLCBcIuiLpeaXoOmXsuS6i+aMguW/g+WktO+8jFwiLCBcIuS+v+aYr+S4gOW5tOWlveaXtuiKguOAglwiXSxcclxuICBcImJnbVwiOiBcIuaHkOOBi+OBl+OBhOmiqOaDhVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL2FtYWNoYW11c2ljLmNoYWdhc2kuY29tL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlm5vlpJVcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiueugOWNoumZn+OAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya6Z+m5bqU54mpXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuWPr+aAnOeZvembquabsu+8jOacqumBh+efpemfs+S6uuOAglwiLCBcIuaBk+aDtuaIjuaXheS4i++8jOi5iei3jua3rua1t+a7qOOAglwiLCBcIua2p+agkeWQq+acnembqO+8jOWxsem4n+WToummgOaYpeOAglwiLCBcIuaIkeacieS4gOeToumFku+8jOWPr+S7peaFsOmjjuWwmOOAglwiXSxcclxuICBcImJnbVwiOiBcImh5b3V0b3VrYVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL211c2ljLmdlb2NpdGllcy5qcC9oYWt1dV9hbWFiaW5lL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlm5vlpJVcIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiuaxtOays+mYu+WGu+OAi1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwi5L2c6ICF77ya5p2c54mnXCIsXHJcbiAgXCJjb250ZW50XCI6IFtcIuWNg+mHjOmVv+ays+WIneWGu+aXtu+8jFwiLCBcIueOieePgueRtuS9qeWTjeWPguW3ruOAglwiLCBcIua1rueUn+aBsOS8vOWGsOW6leawtO+8jFwiLCBcIuaXpeWknOS4nOa1geS6uuS4jeefpeOAglwiXSxcclxuICBcImJnbVwiOiBcIuaBi+eNhOOBruW9qVwiLFxyXG4gIFwiYmdtU291cmNlXCI6IFwiaHR0cDovL3d3dy5yZW5nb2t1LXRlaWVuLmNvbS9cIixcclxuICBcInJlcG9ydGVyXCI6IFwiTmrlrqvooq1cIlxyXG59LCB7XHJcbiAgXCJ0aXRsZVwiOiBcIuOAiumVv+WRveWls8K35pil5pel5a6044CLXCIsXHJcbiAgXCJhdXRob3JcIjogXCLkvZzogIXvvJrlhq/lu7blt7FcIixcclxuICBcImNvbnRlbnRcIjogW1wi5pil5pel5a6077yMXCIsIFwi57u/6YWS5LiA5p2v5q2M5LiA6YGN44CCXCIsIFwi5YaN5ouc6ZmI5LiJ5oS/77yaXCIsIFwi5LiA5oS/6YOO5ZCb5Y2D5bKB77yMXCIsIFwi5LqM5oS/5aa+6Lqr5bi45YGl77yMXCIsIFwi5LiJ5oS/5aaC5ZCM5qKB5LiK54eV77yM5bKB5bKB6ZW/55u46KeB44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwi5oeQ44GL44GX44GE6aKo5oOFXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vYW1hY2hhbXVzaWMuY2hhZ2FzaS5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuWQg+ilv+eTnOeahOWwj+S6jOmDjlwiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK5YWI56emwrfljb/kupHmrYzjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8muS9muWQjVwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLljb/kupHng4Llha7vvIzns7rnvKbnvKblha7jgIJcIiwgXCLml6XmnIjlhYnljY7vvIzml6blpI3ml6blha7jgIJcIiwgXCLmmI7mmI7kuIrlpKnvvIzng4LnhLbmmJ/pmYjjgIJcIiwgXCLml6XmnIjlhYnljY7vvIzlvJjkuo7kuIDkurrjgIJcIiwgXCLml6XmnIjmnInluLjvvIzmmJ/ovrDmnInooYzjgIJcIiwgXCLlm5vml7bku47nu4/vvIzkuIflp5PlhYHor5rjgIJcIiwgXCLkuo7kuojorrrkuZDvvIzphY3lpKnkuYvngbXjgIJcIixcclxuICAgICAgICAgIFwi6L+B5LqO5Zyj6LSk77yM6I6r5LiN5ZK45ZCs44CCXCIsIFwi6bya5LmO6byT5LmL77yM6L2p5LmO6Iie5LmL44CCXCIsIFwi6I+B5Y2O5bey56ut77yM6KSw6KOz5Y675LmL44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwi5byl55Sf44Gu56m644GrXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vYW1hY2hhbXVzaWMuY2hhZ2FzaS5jb20vXCIsXHJcbiAgXCJyZXBvcnRlclwiOiBcIuaxh+aWh1wiXHJcbn0sIHtcclxuICBcInRpdGxlXCI6IFwi44CK6J225oGL6IqxwrfpmIXlsL3lpKnmtq/nprvliKvoi6bjgItcIixcclxuICBcImF1dGhvclwiOiBcIuS9nOiAhe+8mueOi+Wbvee7tFwiLFxyXG4gIFwiY29udGVudFwiOiBbXCLpmIXlsL3lpKnmtq/nprvliKvoi6bvvIxcIiwgXCLkuI3pgZPlvZLmnaXvvIzpm7bokL3oirHlpoLorrjjgIJcIiwgXCLkuI3pgZPlvZLmnaXvvIzpm7bokL3oirHlpoLorrjjgIJcIiwgXCLoirHlupXnm7jnnIvml6DkuIDor63vvIxcIiwgXCLnu7/nqpfmmKXkuI7lpKnkv7HojqvjgIJcIiwgXCLlvoXmiornm7jmgJ3nga/kuIvor4nvvIxcIiwgXCLkuIDnvJXmlrDmrKLvvIzml6fmgajljYPljYPnvJXjgIJcIixcclxuICAgICAgICAgIFwi5pyA5piv5Lq66Ze055WZ5LiN5L2P77yMXCIsIFwi5pyx6aKc6L6e6ZWc6Iqx6L6e5qCR44CCXCJdLFxyXG4gIFwiYmdtXCI6IFwi5oGL542E44Gu5b2pXCIsXHJcbiAgXCJiZ21Tb3VyY2VcIjogXCJodHRwOi8vd3d3LnJlbmdva3UtdGVpZW4uY29tL1wiLFxyXG4gIFwicmVwb3J0ZXJcIjogXCLlj7Pnn7PlhYjnlJ9cIlxyXG59XVxyXG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5pbXBvcnQgZGF0YXMgZnJvbSAnLi9kYXRhJ1xyXG5pbXBvcnQgYmdzIGZyb20gJy4vYmdzJ1xyXG5pbXBvcnQgYXVkaW9zIGZyb20gJy4vYXVkaW9zJ1xyXG5cclxudmFyIFBBVVNFX0NMQVNTID0gJ3BhdXNlJ1xyXG52YXIgY2hhbmdlQ29sb3JMaXN0ID0gW1wiNVwiLCBcIjlcIiwgXCIxNVwiLCBcIjE4XCIsIFwiMjdcIiwgXCIzNVwiLCBcIjM2XCIsIFwiNDNcIiwgXCI0NlwiLCBcIjUyXCIsIFwiNTNcIiwgXCI1NlwiLCBcIjY0XCIsIFwiNjlcIiwgXCI3MlwiLCBcIjgyXCIsIFwiODNcIiwgXCI5MFwiLCBcIjkyXCJdXHJcbnZhciBpZHggPSBsb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnP2lkPScsICcnKVxyXG52YXIgZGF0YSA9IGRhdGFzW3BhcnNlSW50KGlkeCkgLSAxXVxyXG52YXIgYmcgPSBiZ3NbaWR4XVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJy4vJHtiZ30nKWBcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclRpdGxlKHZhbCkge1xyXG4gIHZhciB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpdGxlJylcclxuICB0aXRsZVswXSAmJiAodGl0bGVbMF0uaW5uZXJUZXh0ID0gdmFsKVxyXG4gIGRvY3VtZW50LnRpdGxlID0gdmFsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckF1dGhvcih2YWwpIHtcclxuICB2YXIgYXV0aG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYXV0aG9yJylcclxuICBhdXRob3JbMF0gJiYgKGF1dGhvclswXS5pbm5lclRleHQgPSB2YWwpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNvbnRlbnQodmFscykge1xyXG4gIHZhciBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29udGVudC1wJylcclxuICBjb250ZW50ID0gY29udGVudCAmJiBjb250ZW50WzBdXHJcbiAgdmFscy5mb3JFYWNoKGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgdmFyIGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGxpbmUuaW5uZXJUZXh0ID0gdmFsXHJcbiAgICBpZiAoY29udGVudC5hcHBlbmQpIHtcclxuICAgICAgY29udGVudC5hcHBlbmQobGluZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGluZSlcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJCZ20odmFsKSB7XHJcbiAgdmFyIGJnbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JnbScpXHJcbiAgYmdtWzBdICYmIChiZ21bMF0uaW5uZXJUZXh0ID0gdmFsKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJCZ21Tb3VyY2UodmFsKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JnbVNvdXJjZUZpeCcpLmlubmVyVGV4dCA9ICdCR03mnaXmupDvvJonXHJcbiAgdmFyIGJnbVNvdXJjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JnbS1zb3VyY2UnKVxyXG4gIGJnbVNvdXJjZVswXSAmJiAoYmdtU291cmNlWzBdLmlubmVyVGV4dCA9IHZhbCkgJiYgKGJnbVNvdXJjZVswXS5ocmVmID0gdmFsKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJSZXBvcnRlcih2YWwpIHtcclxuICB2YXIgcmVwb3J0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZXBvcnRlcicpXHJcbiAgcmVwb3J0ZXJbMF0gJiYgKHJlcG9ydGVyWzBdLmlubmVyVGV4dCA9IHZhbClcclxufVxyXG5cclxucmVuZGVyVGl0bGUoZGF0YS50aXRsZSlcclxucmVuZGVyQXV0aG9yKGRhdGEuYXV0aG9yKVxyXG5yZW5kZXJDb250ZW50KGRhdGEuY29udGVudClcclxucmVuZGVyQmdtKGBCR03vvJoke2RhdGEuYmdtfWApXHJcbnJlbmRlckJnbVNvdXJjZShgJHtkYXRhLmJnbVNvdXJjZX1gKVxyXG5yZW5kZXJSZXBvcnRlcihg5pyX6K+16ICF77yaJHtkYXRhLnJlcG9ydGVyfWApXHJcbmZ1bmN0aW9uIGNyZWF0ZUF1ZGlvKCkge1xyXG4gIHZhciBhdWRpbyA9IG5ldyBBdWRpbygpXHJcbiAgLy8gdmFyIF9pZCA9IHBhcnNlSW50KGlkeCkgKyAxXHJcbiAgYXVkaW8uc3JjID0gYXVkaW9zW2lkeF1cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGF1ZGlvKVxyXG4gIHJldHVybiBhdWRpb1xyXG59XHJcbi8vIGF1ZGlvIGNvbnRyb2xzXHJcbnZhciBhdWRpb0RvbSA9IGNyZWF0ZUF1ZGlvKClcclxudmFyIHBsYXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheScpXHJcbnZhciBuZXh0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKVxyXG52YXIgYmVmb3JlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZScpXHJcbnZhciBwbGF5VGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5VGltZScpXHJcbnZhciBhbGxUaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbFRpbWUnKVxyXG52YXIgcHJvZ3Jlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3MnKVxyXG52YXIgdGltZUNvbnRyb2xzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVDb250cm9scycpXHJcbi8vIOa7muWKqOebuOWFs1xyXG52YXIgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxudmFyIGNsaWVudEhlaWdodCA9IGNvbnRlbnQuY2xpZW50SGVpZ2h0XHJcbnZhciBzY3JvbGxIZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodFxyXG5cclxuZnVuY3Rpb24gY2hhbmdlQ29sb3IoKSB7XHJcbiAgaWYgKGNoYW5nZUNvbG9yTGlzdC5pbmRleE9mKGlkeCkgPiAtMSkge1xyXG4gICAgcGxheUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwbGF5LWdyZXknKVxyXG4gICAgbmV4dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduZXh0LWdyZXknKVxyXG4gICAgYmVmb3JlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3ByZS1ncmV5JylcclxuICAgIHRpbWVDb250cm9scy5jbGFzc0xpc3QuYWRkKCdncmV5JylcclxuICAgIFBBVVNFX0NMQVNTID0gJ3BhdXNlLWdyZXknXHJcbiAgfVxyXG59XHJcbmNoYW5nZUNvbG9yKClcclxuZnVuY3Rpb24gYXVkaW9UcmFuc1RpbWUodGltZSkge1xyXG4gIGlmICghdGltZSA+IDApIHtcclxuICAgIHJldHVybiAnMDA6MDAnXHJcbiAgfVxyXG4gIGlmICh0aW1lID09PSBJbmZpbml0eSkge1xyXG4gICAgcmV0dXJuICctLTotLSdcclxuICB9XHJcbiAgdmFyIGR1cmF0aW9uID0gcGFyc2VJbnQodGltZSlcclxuICBsZXQgbWludXRlID0gcGFyc2VJbnQoZHVyYXRpb24gLyA2MClcclxuICBsZXQgc2VjID0gZHVyYXRpb24gJSA2MCArICcnXHJcbiAgdmFyIGlzTTAgPSAnOidcclxuICBpZiAobWludXRlID09PSAwKSB7XHJcbiAgICBtaW51dGUgPSAnMDAnXHJcbiAgfSBlbHNlIGlmIChtaW51dGUgPCAxMCkge1xyXG4gICAgbWludXRlID0gJzAnICsgbWludXRlXHJcbiAgfVxyXG4gIGlmIChzZWMubGVuZ3RoID09PSAxKSB7XHJcbiAgICBzZWMgPSAnMCcgKyBzZWNcclxuICB9XHJcbiAgcmV0dXJuIG1pbnV0ZSArIGlzTTAgKyBzZWNcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVGltZSh0aW1lLCBkdXJhdGlvbikge1xyXG4gIC8vIOabtOaWsOaXtumXtFxyXG4gIHBsYXlUaW1lICYmIChwbGF5VGltZS5pbm5lclRleHQgPSBhdWRpb1RyYW5zVGltZSh0aW1lKSlcclxuICBjb25zdCBkdXJhdGlvbkZvcm1hdCA9IGF1ZGlvVHJhbnNUaW1lKGR1cmF0aW9uKVxyXG4gIGFsbFRpbWUgJiYgKGFsbFRpbWUuaW5uZXJUZXh0ICE9PSBkdXJhdGlvbkZvcm1hdCkgJiYgKGFsbFRpbWUuaW5uZXJUZXh0ID0gZHVyYXRpb25Gb3JtYXQpXHJcbiAgLy8g5pu05pawcHJvZ3Jlc3NcclxuICBwcm9ncmVzcyAmJiAocHJvZ3Jlc3Muc3R5bGUud2lkdGggPSBwYXJzZUludCh0aW1lICogMTAwIC8gZHVyYXRpb24pICsgJyUnKVxyXG59XHJcblxyXG4vLyB2YXIgc2Nyb2xsUG9zID0gMFxyXG52YXIgaW50ZXJ2YWwgPSBudWxsXHJcbnZhciBpc1N0YXJ0ID0gZmFsc2VcclxuZnVuY3Rpb24gZ29TY3JvbGwoY29udGVudCwgdmFsKSB7XHJcbiAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBjb250ZW50LnNjcm9sbEJ5KDAsIDEpXHJcbiAgfSwgdmFsKTtcclxufVxyXG5mdW5jdGlvbiB1cGRhdGVTY3JvbGwodGltZSwgZHVyYXRpb24pIHtcclxuICBpZiAoIWlzU3RhcnQgJiYgZHVyYXRpb24gJiYgdGltZSA+IDE1ICYmIChzY3JvbGxIZWlnaHQgLSBjbGllbnRIZWlnaHQpID4gMCkge1xyXG4gICAgdmFyIHZhbCA9ICgoZHVyYXRpb24gLSB0aW1lKSAqIDEwMDApIC8gKHNjcm9sbEhlaWdodCAtIGNsaWVudEhlaWdodClcclxuICAgIGdvU2Nyb2xsKGNvbnRlbnQsIHZhbClcclxuICAgIGlzU3RhcnQgPSB0cnVlXHJcbiAgfVxyXG4gIGlmICh0aW1lID09PSBkdXJhdGlvbikge1xyXG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcclxuICAgIGNvbnRlbnQuc2Nyb2xsQnkoMCwgMClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF1ZGlvUmVzZXQoKSB7XHJcbiAgcGxheUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFBBVVNFX0NMQVNTKVxyXG4gIHVwZGF0ZVRpbWUoYXVkaW9Eb20uY3VycmVudFRpbWUsIGF1ZGlvRG9tLmR1cmF0aW9uKVxyXG4gIHVwZGF0ZVNjcm9sbChhdWRpb0RvbS5jdXJyZW50VGltZSwgYXVkaW9Eb20uZHVyYXRpb24pXHJcbiAgaXNTdGFydCA9IGZhbHNlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF1ZGlvSW5pdCgpIHtcclxuICBpZiAoYXVkaW9Eb20uZHVyYXRpb24pIHtcclxuICAgIGFsbFRpbWUgJiYgKGFsbFRpbWUuaW5uZXJUZXh0ID0gYXVkaW9UcmFuc1RpbWUoYXVkaW9Eb20uZHVyYXRpb24pKVxyXG4gIH1cclxuICAvLyDnm5HlkKzpn7PpopHmkq3mlL7ml7bpl7Tlubbmm7TmlrDov5vluqbmnaFcclxuICB2YXIgdXBkYXRlUHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmIChhdWRpb0RvbS5jdXJyZW50VGltZSA+IDAgJiYgYXVkaW9Eb20uZHVyYXRpb24gIT09IEluZmluaXR5KSB7XHJcbiAgICAgIC8vIHRoaXMubG9hZGluZ0NsYXNzID0gZmFsc2VcclxuICAgICAgdXBkYXRlVGltZShhdWRpb0RvbS5jdXJyZW50VGltZSwgYXVkaW9Eb20uZHVyYXRpb24pXHJcbiAgICAgIHVwZGF0ZVNjcm9sbChhdWRpb0RvbS5jdXJyZW50VGltZSwgYXVkaW9Eb20uZHVyYXRpb24pXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIOebkeWQrOaSreaUvuWujOaIkOS6i+S7tlxyXG4gIHZhciBhdWRpb0VuZGVkID0gZnVuY3Rpb24oKSB7XHJcbiAgICBhdWRpb0RvbS5jdXJyZW50VGltZSA9IDBcclxuICAgIGF1ZGlvUmVzZXQoKVxyXG4gIH1cclxuICAvLyDlpITnkIbmkq3mlL7plJnor69cclxuICB2YXIgaGFuZGxlRXJyb3IgPSBlID0+IHtcclxuICAgIHZhciBlcnJvckNvZGUgPSBlICYmIGUuY3VycmVudFRhcmdldCAmJiBlLmN1cnJlbnRUYXJnZXQuZXJyb3IuY29kZVxyXG4gICAgc3dpdGNoIChlcnJvckNvZGUpIHtcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNRURJQV9FUlJfTkVUV09SSycpXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNRURJQV9FUlJfREVDT0RFJylcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlIDQ6XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01FRElBX0VSUl9TUkNfTk9UX1NVUFBPUlRFRCcpXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBjb25zb2xlLmxvZygnTUVESUFfRVJSX1VOS05PV04nKVxyXG4gICAgfVxyXG4gICAgYXVkaW9FbmRlZCgpXHJcbiAgfVxyXG4gIC8vIOaSreaUvlxyXG4gIHZhciBoYW5kbGVQbGF5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoYXVkaW9Eb20ucGF1c2VkKSB7XHJcbiAgICAgIGF1ZGlvRG9tLnBsYXkgJiYgYXVkaW9Eb20ucGxheSgpXHJcbiAgICAgIHBsYXlCdXR0b24uY2xhc3NMaXN0LmFkZChQQVVTRV9DTEFTUylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF1ZGlvRG9tLnBhdXNlICYmIGF1ZGlvRG9tLnBhdXNlKClcclxuICAgICAgcGxheUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFBBVVNFX0NMQVNTKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5piv5ZCm5pSv5oyBIG9uZW5kZWQg55uR5ZCs5pKt5pS+5a6M5oiQ5LqL5Lu2XHJcbiAgX2FkZEV2ZW50TGlzdGVuZXIoYXVkaW9Eb20sICdlbmRlZCcsIGF1ZGlvRW5kZWQpXHJcbiAgLy8gZXJyb3JcclxuICBfYWRkRXZlbnRMaXN0ZW5lcihhdWRpb0RvbSwgJ2Vycm9yJywgaGFuZGxlRXJyb3IpXHJcbiAgLy8g5piv5ZCm5pSv5oyBIG9udGltZXVwZGF0ZSDnm5HlkKzmm7TmlrDkuovku7ZcclxuICBfYWRkRXZlbnRMaXN0ZW5lcihhdWRpb0RvbSwgJ3RpbWV1cGRhdGUnLCB1cGRhdGVQcm9ncmVzcylcclxuICAvLyDngrnlh7vmkq3mlL5cclxuICBfYWRkRXZlbnRMaXN0ZW5lcihwbGF5QnV0dG9uLCAnY2xpY2snLCBoYW5kbGVQbGF5KVxyXG59XHJcblxyXG5mdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCB0eXBlLCBmdW5jKSB7XHJcbiAgaWYgKGVsZW1bJ19pcycgKyB0eXBlXSkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGlmIChlbGVtWydvbicgKyB0eXBlXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZnVuYywgZmFsc2UpXHJcbiAgfSBlbHNlIHtcclxuICAgIGVsZW1bJ29uJyArIHR5cGVdID0gZnVuY1xyXG4gIH1cclxuICBlbGVtWydfaXMnICsgdHlwZV0gPSB0cnVlXHJcbn1cclxuXHJcbmF1ZGlvSW5pdCgpIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
>>>>>>> 60f5e529febe7d9ff0b15ec964fc6583860df29f
