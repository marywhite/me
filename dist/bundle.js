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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rose = function () {
  function Rose(p) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        radius = _ref.radius,
        x = _ref.x,
        y = _ref.y,
        _ref$stroke = _ref.stroke,
        stroke = _ref$stroke === undefined ? 0 : _ref$stroke,
        _ref$fill = _ref.fill,
        fill = _ref$fill === undefined ? 255 : _ref$fill;

    _classCallCheck(this, Rose);

    _initialiseProps.call(this);

    this._radius = radius;
    this._x = x;
    this._y = y;
    this._stroke = stroke;
    this._fill = fill;
    this._p = p;
  }

  _createClass(Rose, [{
    key: 'drawStem',
    value: function drawStem() {
      var _this = this;

      var leafAnchor = [-.14, 3];
      var line = this.scale([this.getEllipsePoint(95), [-.21, 2], leafAnchor, [-.19, 4], [-.02, 7.14], [-.02, 9.33]]);

      var left = [].concat(_toConsumableArray(line)).map(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            vx = _ref3[0],
            vy = _ref3[1];

        return [vx - _this._radius / 10, vy];
      });
      var right = [].concat(_toConsumableArray(line)).map(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
            vx = _ref5[0],
            vy = _ref5[1];

        return [vx + _this._radius / 10, vy];
      }).reverse();

      // bend some lines
      left[left.length - 1][0] += this._radius / 20;
      right[0][1] += this._radius / 20;
      var stem = [].concat(_toConsumableArray(left), _toConsumableArray(right));

      var leaf = [[0.57, 2.43], [1.14, 1.71], [2.29, 1.43], [3, 1.71], [1.86, 2.5], [1.28, 2.93], [0.57, 2.6], [0, 3.1]];

      // draw leaf
      this.drawCurve([leafAnchor].concat(leaf, [leafAnchor]));

      // draw stem
      this._p.beginShape();
      stem.map(function (v) {
        var _p;

        return (_p = _this._p).vertex.apply(_p, _toConsumableArray(v));
      });
      this._p.endShape();

      var decoration = [[.62, 2.5], [1.14, 2.14], [2.29, 1.79], [2.85, 1.76]];
      // draw center vein of rose
      this.drawCurve(decoration);

      var calcPoints = function calcPoints(arr, vertices) {
        return _this.scale(arr.map(function (_ref6) {
          var _ref7 = _slicedToArray(_ref6, 3),
              a = _ref7[0],
              index = _ref7[1],
              opts = _ref7[2];

          return _this.getAnchorPoint(vertices, a, index, opts);
        }));
      };

      // grab points along the center vein of the rose
      var centerLeaf = [[.75, 0, { repeatFirst: true }], [.25], [.66], [.25, 1, { repeatLast: true }]];
      var centerPoints = calcPoints(centerLeaf, decoration);

      // grab points along the top edge of the rose
      var topLeaf = [[.75, 0, { repeatFirst: true }], [.25], [.66], [.25, 1]];
      var topPoints = calcPoints(topLeaf, leaf);

      // grab points along the bottom edge of the rose
      var bottomLeaf = [[.25, 1], [.9, 1], [.33, 2], [.6, 2]];
      var bottomPoints = calcPoints(bottomLeaf, [].concat(leaf).reverse());

      // draw inner veins
      centerPoints.forEach(function (centerPt, i) {
        var _p2, _p3;

        (_p2 = _this._p).curve.apply(_p2, _toConsumableArray(centerPt).concat(_toConsumableArray(centerPt), _toConsumableArray(topPoints[i]), _toConsumableArray(topPoints[i])));
        (_p3 = _this._p).curve.apply(_p3, _toConsumableArray(centerPt).concat(_toConsumableArray(centerPt), _toConsumableArray(bottomPoints[i]), _toConsumableArray(bottomPoints[i])));
      });
    }

    // return coordinates from any point along a curve where amount is a number between 0 and 1
    // anchor points require 4 vertices tbd... specify starting index to target point in a curve.
    // adjust for control points on curves, where first and last indicies are repeated with repeatFirst/Last

  }]);

  return Rose;
}();

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.draw = function () {
    _this3._p.stroke(_this3._stroke);
    _this3._p.fill(_this3._fill);
    _this3._p.ellipse(_this3._x, _this3._y, _this3._radius);
    _this3.drawPetals();
    _this3.drawStem();
  };

  this.drawPetals = function () {
    var top = [_this3.getEllipsePoint(200), [-.16, -2], [0.5, -2.33], [0.6, -1.33], _this3.getEllipsePoint(320)];

    var topLeft = [_this3.getAnchorPoint(top, .4, 0, { repeatFirst: true }), [-0.83, -1.16], [-0.66, -2.16], _this3.getAnchorPoint(top, .2)];

    var topRight = [].concat(top, [_this3.getAnchorPoint(top, .5, 2, { repeatLast: true }), [1, -1.33], [1, -1.66], _this3.getAnchorPoint(top, .5, 1)]);

    var left = [[-1, -1.66], [-1.17, -1.33], [-1.33, 0], _this3.getEllipsePoint(100), [.33, 0], [-.5, -1], [-0.67, -1.67], [-1, -1.66]];

    var right = [_this3.getEllipsePoint(20), [1.33, -0.83], [1.33, -1.33], [1, -1.4], [0.5, -1], [0, -0.83], _this3.getEllipsePoint(130)];

    var rightTwo = [right[1], [1, .67], _this3.getEllipsePoint(100), [.1, .1], [1, -0.33], right[1]];

    _this3.drawCurve(topLeft);
    _this3.drawCurve(topRight);
    _this3.drawCurve(top);
    _this3.drawCurve(right);
    _this3.drawCurve(rightTwo);
    _this3.drawCurve(left);
  };

  this.getEllipsePoint = function (angle) {
    return [_this3._p.cos(_this3._p.radians(angle)), _this3._p.sin(_this3._p.radians(angle))];
  };

  this.getAnchorPoint = function (vertices, amount) {
    var _p4, _p5;

    var startingIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var _ref9 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref9$repeatFirst = _ref9.repeatFirst,
        repeatFirst = _ref9$repeatFirst === undefined ? false : _ref9$repeatFirst,
        _ref9$repeatLast = _ref9.repeatLast,
        repeatLast = _ref9$repeatLast === undefined ? false : _ref9$repeatLast;

    var v = [].concat(_toConsumableArray(vertices));
    var chunk = [startingIndex, startingIndex + 4];
    if (repeatFirst) {
      v.unshift(v[0]);
    }
    if (repeatLast) {
      v.push([].concat(_toConsumableArray(v)).pop());
    }
    var coords = v.slice.apply(v, chunk);
    return [(_p4 = _this3._p).curvePoint.apply(_p4, _toConsumableArray(coords.map(function (_ref10) {
      var _ref11 = _slicedToArray(_ref10, 1),
          x = _ref11[0];

      return x;
    })).concat([amount])), (_p5 = _this3._p).curvePoint.apply(_p5, _toConsumableArray(coords.map(function (_ref12) {
      var _ref13 = _slicedToArray(_ref12, 2),
          y = _ref13[1];

      return y;
    })).concat([amount]))];
  };

  this.scale = function (vertices) {
    return vertices.map(function (_ref14) {
      var _ref15 = _slicedToArray(_ref14, 2),
          vx = _ref15[0],
          vy = _ref15[1];

      return [_this3._x + _this3._radius * vx, _this3._y + _this3._radius * vy];
    });
  };

  this.drawCurve = function (vertices) {
    // add control points to beginning and end of curve
    var anchored = _this3.scale([vertices[0]].concat(_toConsumableArray(vertices), [[].concat(_toConsumableArray(vertices)).pop()]));
    _this3._p.beginShape();
    anchored.map(function (v) {
      var _p6;

      return (_p6 = _this3._p).curveVertex.apply(_p6, _toConsumableArray(v));
    });
    _this3._p.endShape();
  };
};

var Resume = function Resume(p) {
  var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      x = _ref8.x,
      y = _ref8.y,
      smallDisplay = _ref8.smallDisplay;

  _classCallCheck(this, Resume);

  _initialiseProps2.call(this);

  this._p = p;
  this._x = x;
  this._y = y;
  this._smallDisplay = smallDisplay;
  this._button = this._p.select('.name');
  this.sections = [].concat(_toConsumableArray(this._p.selectAll('.content')), [void 0]);
};

var _initialiseProps2 = function _initialiseProps2() {
  var _this4 = this;

  this.setup = function () {
    _this4._button.position(_this4._x * 1.25, _this4._y * 2.5);
    _this4._button.elt.style.visibility = 'visible';
    if (_this4._smallDisplay) {
      _this4._button.elt.style['font-size'] = '24px';
    }
    _this4._button.elt.onkeypress = function (e) {
      if (e.keyCode === 31 || e.keyCode === 13) {
        _this4.navigate();
      }
    };
    _this4._button.mousePressed(function () {
      return _this4.navigate();
    });
  };

  this.navigate = function () {
    if (_this4.hasRose) {
      _this4._p.drawFns.delete(_this4.decorate);
    }
    _this4.hasRose = false;
    if (_this4._selected) {
      _this4._selected.elt.style.visibility = 'hidden';
    }
    _this4._selected = _this4.sections.shift();
    if (_this4._selected) {
      var _selected;

      var coords = _this4._smallDisplay ? [_this4._button.x, _this4._button.y + _this4._button.height * 2] : [_this4._x * 1.75, _this4._y];
      (_selected = _this4._selected).position.apply(_selected, coords);
      _this4._selected.elt.style.visibility = 'visible';
      _this4.hasRose = _this4._selected.class().split(' ').indexOf('decorate') !== -1;
    }
    if (_this4.hasRose) {
      _this4._p.drawFns.add(_this4.decorate);
    }
    _this4.sections.push(_this4._selected);
  };

  this.decorate = function () {
    var _selected2 = _this4._selected,
        width = _selected2.width,
        height = _selected2.height,
        x = _selected2.x,
        y = _selected2.y;

    var opts = {
      x: x + (_this4._smallDisplay ? _this4._button.width : width) / 2,
      y: y + height * 2.75,
      radius: width / 15
    };
    _this4._rose = new Rose(_this4._p, opts);
    _this4._rose.draw();
  };
};

var DIMENSION_THRESHOLD = 1024;

var Canvas = function Canvas() {
  var _this2 = this;

  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  _classCallCheck(this, Canvas);

  this.sketch = function (p) {
    _this2._p = p;
    _this2._p.setup = _this2.setup;
    _this2._p.draw = _this2.draw;
    _this2._p.drawFns = new Set();
  };

  this.setup = function () {
    _this2.canvas = _this2._p.createCanvas(_this2._p.displayWidth, _this2._p.displayHeight);
    var smallDisplay = _this2._p.displayWidth <= DIMENSION_THRESHOLD;
    var x = _this2._p.displayWidth / 3,
        y = _this2._p.displayHeight / 5;

    var opts = {
      x: x,
      y: y,
      radius: _this2._p.displayWidth / (smallDisplay ? 10 : 30),
      stroke: '#fda732',
      fill: '#ffffff'
    };
    _this2._rose = new Rose(_this2._p, opts);
    _this2._p.drawFns.add(_this2._rose.draw);
    var resume = new Resume(_this2._p, { x: x, y: y, smallDisplay: smallDisplay });
    resume.setup();
  };

  this.draw = function () {
    _this2._p.clear();
    _this2._p.drawFns.forEach(function (fn) {
      return fn();
    });
  };

  this.render = function () {
    return new p5(_this2.sketch, _this2._target);
  };

  this._target = target;
};

var canvas = new Canvas();
canvas.render();

/***/ })
/******/ ]);