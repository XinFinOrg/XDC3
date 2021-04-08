"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ETH2Core = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_axios["default"].defaults.adapter = require('axios/lib/adapters/http');

var ETH2Core = /*#__PURE__*/function () {
  // Protects from global overwrite when using .use functionality
  function ETH2Core(provider, schema) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, ETH2Core);

    _defineProperty(this, "_httpClient", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "provider", void 0);

    _defineProperty(this, "protectProvider", void 0);

    this.name = schema.packageName;
    this.setProvider("".concat(provider).concat(schema.routePrefix));
    this.protectProvider = opts.protectProvider || false;
    this.buildAPIWrappersFromSchema(schema);
  }

  _createClass(ETH2Core, [{
    key: "setProvider",
    value: function setProvider(provider) {
      try {
        if (!provider || typeof provider !== 'string' || !/^http(s)?:\/\//i.test(provider)) {
          throw new Error("Invalid HTTP(S) provider: ".concat(provider));
        }

        this._httpClient = ETH2Core.createHttpClient(provider);
        this.provider = provider;
      } catch (error) {
        throw new Error("Failed to set provider: ".concat(error.message));
      }
    }
  }, {
    key: "routeBuilder",
    value: function routeBuilder(rawUrl, parameters) {
      try {
        var computedRoute = rawUrl; // Find all: ${valuesWeWant} in rawUrl, returns array with only valuesWeWant

        var foundIdentifiers = rawUrl.match(/(?<=\$\{).*?(?=\})/gm); // Matches ${valueWeWant}, but doesn't include ${}

        if (foundIdentifiers !== null) {
          var _iterator = _createForOfIteratorHelper(foundIdentifiers),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var foundIdentifier = _step.value;
              if (parameters[foundIdentifier] === undefined) throw new Error("The parameter ".concat(foundIdentifier, " was not provided"));
              computedRoute = computedRoute.replace("${".concat(foundIdentifier, "}"), parameters[foundIdentifier]);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        return computedRoute;
      } catch (error) {
        throw new Error("Failed to build route: ".concat(error.message));
      }
    }
  }, {
    key: "buildAPIWrappersFromSchema",
    value: function buildAPIWrappersFromSchema(schema) {
      var _this = this;

      var _iterator2 = _createForOfIteratorHelper(schema.methods),
          _step2;

      try {
        var _loop = function _loop() {
          var method = _step2.value;

          _this[method.name] = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(routeParameters) {
              var queryParameters,
                  computedRoute,
                  _yield$_this$_httpCli,
                  data,
                  _args = arguments;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      queryParameters = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                      _context.prev = 1;
                      if (method.inputFormatter) queryParameters = method.inputFormatter(queryParameters);
                      computedRoute = _this.routeBuilder(method.route, routeParameters); // @ts-ignore

                      _context.next = 6;
                      return _this._httpClient[method.restMethod](computedRoute, {
                        params: queryParameters
                      });

                    case 6:
                      _yield$_this$_httpCli = _context.sent;
                      data = _yield$_this$_httpCli.data;
                      if (data.data) data = data.data;
                      if (method.outputFormatter) data = method.outputFormatter(data);
                      return _context.abrupt("return", data);

                    case 13:
                      _context.prev = 13;
                      _context.t0 = _context["catch"](1);
                      throw new Error("".concat(method.errorPrefix, " ").concat(_context.t0.message));

                    case 16:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, null, [[1, 13]]);
            }));

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }();
        };

        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }], [{
    key: "createHttpClient",
    value: function createHttpClient(baseUrl) {
      try {
        return _axios["default"].create({
          baseURL: baseUrl
        });
      } catch (error) {
        throw new Error("Failed to create HTTP client: ".concat(error.message));
      }
    }
  }]);

  return ETH2Core;
}();

exports.ETH2Core = ETH2Core;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJBeGlvcyIsImRlZmF1bHRzIiwiYWRhcHRlciIsInJlcXVpcmUiLCJFVEgyQ29yZSIsInByb3ZpZGVyIiwic2NoZW1hIiwib3B0cyIsIm5hbWUiLCJwYWNrYWdlTmFtZSIsInNldFByb3ZpZGVyIiwicm91dGVQcmVmaXgiLCJwcm90ZWN0UHJvdmlkZXIiLCJidWlsZEFQSVdyYXBwZXJzRnJvbVNjaGVtYSIsInRlc3QiLCJFcnJvciIsIl9odHRwQ2xpZW50IiwiY3JlYXRlSHR0cENsaWVudCIsImVycm9yIiwibWVzc2FnZSIsInJhd1VybCIsInBhcmFtZXRlcnMiLCJjb21wdXRlZFJvdXRlIiwiZm91bmRJZGVudGlmaWVycyIsIm1hdGNoIiwiZm91bmRJZGVudGlmaWVyIiwidW5kZWZpbmVkIiwicmVwbGFjZSIsIm1ldGhvZHMiLCJtZXRob2QiLCJyb3V0ZVBhcmFtZXRlcnMiLCJxdWVyeVBhcmFtZXRlcnMiLCJpbnB1dEZvcm1hdHRlciIsInJvdXRlQnVpbGRlciIsInJvdXRlIiwicmVzdE1ldGhvZCIsInBhcmFtcyIsImRhdGEiLCJvdXRwdXRGb3JtYXR0ZXIiLCJlcnJvclByZWZpeCIsImJhc2VVcmwiLCJjcmVhdGUiLCJiYXNlVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQUEsa0JBQU1DLFFBQU4sQ0FBZUMsT0FBZixHQUF5QkMsT0FBTyxDQUFDLHlCQUFELENBQWhDOztJQUlhQyxRO0FBT2dCO0FBRXpCLG9CQUFZQyxRQUFaLEVBQThCQyxNQUE5QixFQUE4RTtBQUFBLFFBQXpCQyxJQUF5Qix1RUFBSixFQUFJOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUMxRSxTQUFLQyxJQUFMLEdBQVlGLE1BQU0sQ0FBQ0csV0FBbkI7QUFDQSxTQUFLQyxXQUFMLFdBQW9CTCxRQUFwQixTQUErQkMsTUFBTSxDQUFDSyxXQUF0QztBQUNBLFNBQUtD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LE9BQXpDLEVBWk07O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBcEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGa0Q7O0FBQ3RELCtEQUFxQztBQUFBO0FBZ0JwQztBQWpCcUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtCekQ7OztxQ0E1RHVCcUIsTyxFQUFnQztBQUNwRCxVQUFJO0FBQ0EsZUFBT3hDLGtCQUFNeUMsTUFBTixDQUFhO0FBQ2hCQyxVQUFBQSxPQUFPLEVBQUVGO0FBRE8sU0FBYixDQUFQO0FBR0gsT0FKRCxDQUlFLE9BQU90QixLQUFQLEVBQWM7QUFDWixjQUFNLElBQUlILEtBQUoseUNBQTJDRyxLQUFLLENBQUNDLE9BQWpELEVBQU47QUFDSDtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF4aW9zLCB7QXhpb3NJbnN0YW5jZX0gZnJvbSAnYXhpb3MnXG5cbkF4aW9zLmRlZmF1bHRzLmFkYXB0ZXIgPSByZXF1aXJlKCdheGlvcy9saWIvYWRhcHRlcnMvaHR0cCcpO1xuXG5pbXBvcnQgeyBFVEgyQmFzZU9wdHMsIEVUSDJGdW5jdGlvbiwgQmFzZUFQSVNjaGVtYSB9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgY2xhc3MgRVRIMkNvcmUge1xuICAgIHByaXZhdGUgX2h0dHBDbGllbnQ6IEF4aW9zSW5zdGFuY2UgfCB1bmRlZmluZWRcblxuICAgIFsga2V5OiBzdHJpbmcgXTogRVRIMkZ1bmN0aW9uIHwgYW55O1xuICAgIFxuICAgIG5hbWU6IHN0cmluZ1xuICAgIHByb3ZpZGVyOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICBwcm90ZWN0UHJvdmlkZXI6IGJvb2xlYW4gLy8gUHJvdGVjdHMgZnJvbSBnbG9iYWwgb3ZlcndyaXRlIHdoZW4gdXNpbmcgLnVzZSBmdW5jdGlvbmFsaXR5XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm92aWRlcjogc3RyaW5nLCBzY2hlbWE6IEJhc2VBUElTY2hlbWEsIG9wdHM6IEVUSDJCYXNlT3B0cyA9IHt9KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IHNjaGVtYS5wYWNrYWdlTmFtZVxuICAgICAgICB0aGlzLnNldFByb3ZpZGVyKGAke3Byb3ZpZGVyfSR7c2NoZW1hLnJvdXRlUHJlZml4fWApXG4gICAgICAgIHRoaXMucHJvdGVjdFByb3ZpZGVyID0gb3B0cy5wcm90ZWN0UHJvdmlkZXIgfHwgZmFsc2VcbiAgICAgICAgdGhpcy5idWlsZEFQSVdyYXBwZXJzRnJvbVNjaGVtYShzY2hlbWEpXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUh0dHBDbGllbnQoYmFzZVVybDogc3RyaW5nKTogQXhpb3NJbnN0YW5jZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gQXhpb3MuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBiYXNlVVJMOiBiYXNlVXJsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gY3JlYXRlIEhUVFAgY2xpZW50OiAke2Vycm9yLm1lc3NhZ2V9YClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFByb3ZpZGVyKHByb3ZpZGVyOiBzdHJpbmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghcHJvdmlkZXIgfHwgdHlwZW9mIHByb3ZpZGVyICE9PSAnc3RyaW5nJyB8fCAhL15odHRwKHMpPzpcXC9cXC8vaS50ZXN0KHByb3ZpZGVyKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBIVFRQKFMpIHByb3ZpZGVyOiAke3Byb3ZpZGVyfWApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2h0dHBDbGllbnQgPSBFVEgyQ29yZS5jcmVhdGVIdHRwQ2xpZW50KHByb3ZpZGVyKVxuICAgICAgICAgICAgdGhpcy5wcm92aWRlciA9IHByb3ZpZGVyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBzZXQgcHJvdmlkZXI6ICR7ZXJyb3IubWVzc2FnZX1gKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByb3V0ZUJ1aWxkZXIocmF3VXJsOiBzdHJpbmcsIHBhcmFtZXRlcnM6IHsgWyBrZXk6IHN0cmluZ106IHN0cmluZyB9KTogc3RyaW5nIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBjb21wdXRlZFJvdXRlID0gcmF3VXJsXG5cbiAgICAgICAgICAgIC8vIEZpbmQgYWxsOiAke3ZhbHVlc1dlV2FudH0gaW4gcmF3VXJsLCByZXR1cm5zIGFycmF5IHdpdGggb25seSB2YWx1ZXNXZVdhbnRcbiAgICAgICAgICAgIGNvbnN0IGZvdW5kSWRlbnRpZmllcnMgPSByYXdVcmwubWF0Y2goLyg/PD1cXCRcXHspLio/KD89XFx9KS9nbSkgLy8gTWF0Y2hlcyAke3ZhbHVlV2VXYW50fSwgYnV0IGRvZXNuJ3QgaW5jbHVkZSAke31cbiAgICAgICAgICAgIGlmIChmb3VuZElkZW50aWZpZXJzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBmb3VuZElkZW50aWZpZXIgb2YgZm91bmRJZGVudGlmaWVycykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1ldGVyc1tmb3VuZElkZW50aWZpZXJdID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcmFtZXRlciAke2ZvdW5kSWRlbnRpZmllcn0gd2FzIG5vdCBwcm92aWRlZGApXG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVkUm91dGUgPSBjb21wdXRlZFJvdXRlLnJlcGxhY2UoYFxcJHske2ZvdW5kSWRlbnRpZmllcn19YCwgcGFyYW1ldGVyc1tmb3VuZElkZW50aWZpZXJdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGNvbXB1dGVkUm91dGVcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGJ1aWxkIHJvdXRlOiAke2Vycm9yLm1lc3NhZ2V9YClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRBUElXcmFwcGVyc0Zyb21TY2hlbWEoc2NoZW1hOiBCYXNlQVBJU2NoZW1hKSB7XG4gICAgICAgIGZvciAoY29uc3QgbWV0aG9kIG9mIHNjaGVtYS5tZXRob2RzKSB7XG4gICAgICAgICAgICB0aGlzW21ldGhvZC5uYW1lXSA9IGFzeW5jIChyb3V0ZVBhcmFtZXRlcnM6IGFueSwgcXVlcnlQYXJhbWV0ZXJzOiBhbnkgPSB7fSk6IFByb21pc2U8YW55PiA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1ldGhvZC5pbnB1dEZvcm1hdHRlcikgcXVlcnlQYXJhbWV0ZXJzID0gbWV0aG9kLmlucHV0Rm9ybWF0dGVyKHF1ZXJ5UGFyYW1ldGVycylcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlZFJvdXRlID0gdGhpcy5yb3V0ZUJ1aWxkZXIobWV0aG9kLnJvdXRlLCByb3V0ZVBhcmFtZXRlcnMpXG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgbGV0IHtkYXRhfSA9IGF3YWl0IHRoaXMuX2h0dHBDbGllbnRbbWV0aG9kLnJlc3RNZXRob2RdKGNvbXB1dGVkUm91dGUsIHsgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMgfSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuZGF0YSkgZGF0YSA9IGRhdGEuZGF0YVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXRob2Qub3V0cHV0Rm9ybWF0dGVyKSBkYXRhID0gbWV0aG9kLm91dHB1dEZvcm1hdHRlcihkYXRhKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHttZXRob2QuZXJyb3JQcmVmaXh9ICR7ZXJyb3IubWVzc2FnZX1gKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==