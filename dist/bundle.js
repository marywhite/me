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

    this._radius = radius;
    this._x = x;
    this._y = y;
    this._stroke = stroke;
    this._fill = fill;
    this._p = p;
  }

  _createClass(Rose, [{
    key: 'draw',
    value: function draw() {
      this._p.stroke(this._stroke);
      this._p.fill(this._fill);
      this._p.ellipse(this._x, this._y, this._radius);
      this.drawPetals();
      this.drawStem();
    }
  }, {
    key: 'drawPetals',
    value: function drawPetals() {
      var top = [this.getEllipsePoint(200), [-.16, -2], [0.5, -2.33], [0.6, -1.33], this.getEllipsePoint(320)];

      var topLeft = [this.getAnchorPoint(top, .4, 0, { repeatFirst: true }), [-0.83, -1.16], [-0.66, -2.16], this.getAnchorPoint(top, .2)];

      var topRight = [].concat(top, [this.getAnchorPoint(top, .5, 2, { repeatLast: true }), [1, -1.33], [1, -1.66], this.getAnchorPoint(top, .5, 1)]);

      var left = [[-1, -1.66], [-1.17, -1.33], [-1.33, 0], this.getEllipsePoint(100), [.33, 0], [-.5, -1], [-0.67, -1.67], [-1, -1.66]];

      var right = [this.getEllipsePoint(20), [1.33, -0.83], [1.33, -1.33], [1, -1.4], [0.5, -1], [0, -0.83], this.getEllipsePoint(130)];

      var rightTwo = [right[1], [1, .67], this.getEllipsePoint(100), [.1, .1], [1, -0.33], right[1]];

      this.drawCurve(topLeft);
      this.drawCurve(topRight);
      this.drawCurve(top);
      this.drawCurve(right);
      this.drawCurve(rightTwo);
      this.drawCurve(left);
    }
  }, {
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
  }, {
    key: 'getEllipsePoint',
    value: function getEllipsePoint(angle) {
      return [this._p.cos(this._p.radians(angle)), this._p.sin(this._p.radians(angle))];
    }

    // return coordinates from any point along a curve where amount is a number between 0 and 1
    // anchor points require 4 vertices tbd... specify starting index to target point in a curve.
    // adjust for control points on curves, where first and last indicies are repeated with repeatFirst/Last

  }, {
    key: 'getAnchorPoint',
    value: function getAnchorPoint(vertices, amount) {
      var _p4, _p5;

      var startingIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var _ref8 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
          _ref8$repeatFirst = _ref8.repeatFirst,
          repeatFirst = _ref8$repeatFirst === undefined ? false : _ref8$repeatFirst,
          _ref8$repeatLast = _ref8.repeatLast,
          repeatLast = _ref8$repeatLast === undefined ? false : _ref8$repeatLast;

      var v = [].concat(_toConsumableArray(vertices));
      var chunk = [startingIndex, startingIndex + 4];
      if (repeatFirst) {
        v.unshift(v[0]);
      }
      if (repeatLast) {
        v.push([].concat(_toConsumableArray(v)).pop());
      }
      var coords = v.slice.apply(v, chunk);
      return [(_p4 = this._p).curvePoint.apply(_p4, _toConsumableArray(coords.map(function (_ref9) {
        var _ref10 = _slicedToArray(_ref9, 1),
            x = _ref10[0];

        return x;
      })).concat([amount])), (_p5 = this._p).curvePoint.apply(_p5, _toConsumableArray(coords.map(function (_ref11) {
        var _ref12 = _slicedToArray(_ref11, 2),
            y = _ref12[1];

        return y;
      })).concat([amount]))];
    }
  }, {
    key: 'scale',
    value: function scale(vertices) {
      var _this2 = this;

      return vertices.map(function (_ref13) {
        var _ref14 = _slicedToArray(_ref13, 2),
            vx = _ref14[0],
            vy = _ref14[1];

        return [_this2._x + _this2._radius * vx, _this2._y + _this2._radius * vy];
      });
    }
  }, {
    key: 'drawCurve',
    value: function drawCurve(vertices) {
      var _this3 = this;

      // add control points to beginning and end of curve
      var anchored = this.scale([vertices[0]].concat(_toConsumableArray(vertices), [[].concat(_toConsumableArray(vertices)).pop()]));
      this._p.beginShape();
      anchored.map(function (v) {
        var _p6;

        return (_p6 = _this3._p).curveVertex.apply(_p6, _toConsumableArray(v));
      });
      this._p.endShape();
    }
  }]);

  return Rose;
}();

var Resume = function () {
  function Resume(p) {
    var _ref15 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        x = _ref15.x,
        y = _ref15.y,
        smallDisplay = _ref15.smallDisplay;

    _classCallCheck(this, Resume);

    this._p = p;
    this._x = x;
    this._y = y;
    this._smallDisplay = smallDisplay;
    this._button = this._p.select('.name');
    this.sections = [].concat(_toConsumableArray(this._p.selectAll('.content')), [void 0]);
  }

  _createClass(Resume, [{
    key: 'setup',
    value: function setup() {
      var _this4 = this;

      this._button.position(this._x * 1.25, this._y * 2.5);
      this._button.elt.style.visibility = 'visible';
      if (this._smallDisplay) {
        this._button.elt.style['font-size'] = '24px';
      }
      this._button.elt.onkeypress = function (e) {
        if (e.keyCode === 31 || e.keyCode === 13) {
          _this4.navigate();
        }
      };
      this._button.mousePressed(function () {
        return _this4.navigate();
      });
    }
  }, {
    key: 'navigate',
    value: function navigate() {
      this.hasRose = false;
      if (this._selected) {
        this._selected.elt.style.visibility = 'hidden';
      }
      this._selected = this.sections.shift();
      if (this._selected) {
        var _selected;

        var coords = this._smallDisplay ? [this._button.x, this._button.y + this._button.height * 2] : [this._x * 1.75, this._y];
        (_selected = this._selected).position.apply(_selected, coords);
        this._selected.elt.style.visibility = 'visible';
        this.hasRose = this._selected.class().split(' ').indexOf('decorate') !== -1;
      }
      if (this.hasRose) {
        this.decorate();
      } else {
        this._p.clear();
      }
      this.sections.push(this._selected);
    }
  }, {
    key: 'decorate',
    value: function decorate() {
      var _selected2 = this._selected,
          width = _selected2.width,
          height = _selected2.height,
          x = _selected2.x,
          y = _selected2.y;

      var opts = {
        x: x + (this._smallDisplay ? this._button.width : width) / 2,
        y: y + height * 2.75,
        radius: width / 15
      };
      this._rose = new Rose(this._p, opts);
      this._rose.draw();
    }
  }]);

  return Resume;
}();

var DIMENSION_THRESHOLD = 1024;

var Canvas = function () {
  function Canvas() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, Canvas);

    this._target = target;
  }

  _createClass(Canvas, [{
    key: 'sketch',
    value: function sketch(p) {
      this._p = p;
      this._p.setup = this.setup.bind(this);
      this._p.draw = this.draw.bind(this);
    }
  }, {
    key: 'setup',
    value: function setup() {
      this.canvas = this._p.createCanvas(this._p.displayWidth, this._p.displayHeight);
      var smallDisplay = this._p.displayWidth <= DIMENSION_THRESHOLD;
      var x = this._p.displayWidth / 3,
          y = this._p.displayHeight / 5;

      var opts = {
        x: x,
        y: y,
        radius: this._p.displayWidth / (smallDisplay ? 10 : 30),
        stroke: '#fda732',
        fill: '#ffffff'
      };
      this._rose = new Rose(this._p, opts);
      var resume = new Resume(this._p, { x: x, y: y, smallDisplay: smallDisplay });
      resume.setup();
    }
  }, {
    key: 'draw',
    value: function draw() {
      this._rose.draw();
    }
  }, {
    key: 'render',
    value: function render() {
      return new p5(this.sketch.bind(this), this._target);
    }
  }]);

  return Canvas;
}();

var canvas = new Canvas();
canvas.render();

/***/ })
/******/ ]);