/** *** */ (() => { // webpackBootstrap
/** *** */ 	const __webpack_modules__ = ({

    /***/ './src/team.js':
    /*! *********************!*\
  !*** ./src/team.js ***!
  \******************** */
    /***/ ((module) => {
      function _typeof(o) {
        '@babel/helpers - typeof';

        return _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (o) { return typeof o; } : function (o) { return o && typeof Symbol === 'function' && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o; }, _typeof(o);
      }
      function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError('Cannot call a class as a function'); }
      function _defineProperties(e, r) { for (let t = 0; t < r.length; t++) { const o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
      function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e; }
      function _toPropertyKey(t) { const i = _toPrimitive(t, 'string'); return _typeof(i) == 'symbol' ? i : `${i}`; }
      function _toPrimitive(t, r) { if (_typeof(t) != 'object' || !t) return t; const e = t[Symbol.toPrimitive]; if (void 0 !== e) { const i = e.call(t, r || 'default'); if (_typeof(i) != 'object') return i; throw new TypeError('@@toPrimitive must return a primitive value.'); } return (r === 'string' ? String : Number)(t); }
      const Team = /* #__PURE__ */(function () {
        function Team() {
          _classCallCheck(this, Team);
          this.members = new Set();
        }
        return _createClass(Team, [{
          key: 'add',
          value: function add(character) {
            if (this.members.has(character)) {
              throw new Error('Character already in the team');
            }
            this.members.add(character);
          },
        }, {
          key: 'addAll',
          value: function addAll() {
            const _this = this;
            for (var _len = arguments.length, characters = new Array(_len), _key = 0; _key < _len; _key++) {
              characters[_key] = arguments[_key];
            }
            characters.forEach((character) => {
              _this.members.add(character);
            });
          },
        }, {
          key: 'toArray',
          value: function toArray() {
            return Array.from(this.members);
          },
        }]);
      }());
      module.exports = Team;
      /***/ }),

    /** *** */ 	});
  /** ********************************************************************* */
  /** *** */ 	// The module cache
  /** *** */ 	const __webpack_module_cache__ = {};
  /** *** */
  /** *** */ 	// The require function
  /** *** */ 	function __webpack_require__(moduleId) {
    /** *** */ 		// Check if module is in cache
    /** *** */ 		const cachedModule = __webpack_module_cache__[moduleId];
    /** *** */ 		if (cachedModule !== undefined) {
      /** *** */ 			return cachedModule.exports;
      /** *** */ 		}
    /** *** */ 		// Create a new module (and put it into the cache)
    /** *** */ 		const module = __webpack_module_cache__[moduleId] = {
      /** *** */ 			// no module.id needed
      /** *** */ 			// no module.loaded needed
      /** *** */ 			exports: {},
      /** *** */ 		};
    /** *** */
    /** *** */ 		// Execute the module function
    /** *** */ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /** *** */
    /** *** */ 		// Return the exports of the module
    /** *** */ 		return module.exports;
    /** *** */ 	}
  /** *** */
  /** ********************************************************************* */
  /** *** */
  /** *** */ 	// startup
  /** *** */ 	// Load entry module and return exports
  /** *** */ 	// This entry module is referenced by other modules so it can't be inlined
  /** *** */ 	const __webpack_exports__ = __webpack_require__('./src/team.js');
/** *** */
/** *** */ })();

// # sourceMappingURL=bundle.js.map
