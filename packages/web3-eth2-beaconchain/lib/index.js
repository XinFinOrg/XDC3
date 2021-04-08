"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ETH2BeaconChain = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _xdc3Eth2Core = require("xdc3-eth2-core");

var _schema = require("./schema");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// @ts-ignore - ETH2BeaconChain incorrectly implements interface IETH2BeaconChain
// because methods are added during runtime
var ETH2BeaconChain = /*#__PURE__*/function (_ETH2Core) {
  (0, _inherits2["default"])(ETH2BeaconChain, _ETH2Core);

  var _super = _createSuper(ETH2BeaconChain);

  function ETH2BeaconChain(provider) {
    var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _schema.DefaultSchema;
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      protectProvider: true
    };
    (0, _classCallCheck2["default"])(this, ETH2BeaconChain);
    return _super.call(this, provider, schema, opts);
  }

  return ETH2BeaconChain;
}(_xdc3Eth2Core.ETH2Core);

exports.ETH2BeaconChain = ETH2BeaconChain;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJFVEgyQmVhY29uQ2hhaW4iLCJwcm92aWRlciIsInNjaGVtYSIsIkRlZmF1bHRTY2hlbWEiLCJvcHRzIiwicHJvdGVjdFByb3ZpZGVyIiwiRVRIMkNvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUlBO0FBQ0E7SUFDYUEsZTs7Ozs7QUFDVCwyQkFDSUMsUUFESixFQUdvRDtBQUFBLFFBRGhEQyxNQUNnRCx1RUFEeEJDLHFCQUN3QjtBQUFBLFFBQWhEQyxJQUFnRCx1RUFBM0I7QUFBRUMsTUFBQUEsZUFBZSxFQUFFO0FBQW5CLEtBQTJCO0FBQUE7QUFBQSw2QkFDMUNKLFFBRDBDLEVBQ2hDQyxNQURnQyxFQUN4QkUsSUFEd0I7QUFFbkQ7OztFQU5nQ0Usc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFVEgyQ29yZSwgQmFzZUFQSVNjaGVtYSwgRVRIMkJhc2VPcHRzIH0gZnJvbSAneGRjMy1ldGgyLWNvcmUnXG5pbXBvcnQgeyBEZWZhdWx0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnXG5cbmltcG9ydCB7IEVUSDJCZWFjb25DaGFpbiBhcyBJRVRIMkJlYWNvbkNoYWluIH0gZnJvbSAnLi4vdHlwZXMnXG5cbi8vIEB0cy1pZ25vcmUgLSBFVEgyQmVhY29uQ2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50cyBpbnRlcmZhY2UgSUVUSDJCZWFjb25DaGFpblxuLy8gYmVjYXVzZSBtZXRob2RzIGFyZSBhZGRlZCBkdXJpbmcgcnVudGltZVxuZXhwb3J0IGNsYXNzIEVUSDJCZWFjb25DaGFpbiBleHRlbmRzIEVUSDJDb3JlIGltcGxlbWVudHMgSUVUSDJCZWFjb25DaGFpbiB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3ZpZGVyOiBzdHJpbmcsXG4gICAgICAgIHNjaGVtYTogQmFzZUFQSVNjaGVtYSA9IERlZmF1bHRTY2hlbWEsXG4gICAgICAgIG9wdHM6IEVUSDJCYXNlT3B0cyA9IHsgcHJvdGVjdFByb3ZpZGVyOiB0cnVlIH0pIHtcbiAgICAgICAgc3VwZXIocHJvdmlkZXIsIHNjaGVtYSwgb3B0cylcbiAgICB9XG59XG4iXX0=