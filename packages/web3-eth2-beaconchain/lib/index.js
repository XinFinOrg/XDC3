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

var _xdc3Eth2Core = require("xdc3-eth2-core2");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJFVEgyQmVhY29uQ2hhaW4iLCJwcm92aWRlciIsInNjaGVtYSIsIkRlZmF1bHRTY2hlbWEiLCJvcHRzIiwicHJvdGVjdFByb3ZpZGVyIiwiRVRIMkNvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUlBO0FBQ0E7SUFDYUEsZTs7Ozs7QUFDVCwyQkFDSUMsUUFESixFQUdvRDtBQUFBLFFBRGhEQyxNQUNnRCx1RUFEeEJDLHFCQUN3QjtBQUFBLFFBQWhEQyxJQUFnRCx1RUFBM0I7QUFBRUMsTUFBQUEsZUFBZSxFQUFFO0FBQW5CLEtBQTJCO0FBQUE7QUFBQSw2QkFDMUNKLFFBRDBDLEVBQ2hDQyxNQURnQyxFQUN4QkUsSUFEd0I7QUFFbkQ7OztFQU5nQ0Usc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFVEgyQ29yZSwgQmFzZUFQSVNjaGVtYSwgRVRIMkJhc2VPcHRzIH0gZnJvbSAneGRjMy1ldGgyLWNvcmUyJ1xuaW1wb3J0IHsgRGVmYXVsdFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJ1xuXG5pbXBvcnQgeyBFVEgyQmVhY29uQ2hhaW4gYXMgSUVUSDJCZWFjb25DaGFpbiB9IGZyb20gJy4uL3R5cGVzJ1xuXG4vLyBAdHMtaWdub3JlIC0gRVRIMkJlYWNvbkNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudHMgaW50ZXJmYWNlIElFVEgyQmVhY29uQ2hhaW5cbi8vIGJlY2F1c2UgbWV0aG9kcyBhcmUgYWRkZWQgZHVyaW5nIHJ1bnRpbWVcbmV4cG9ydCBjbGFzcyBFVEgyQmVhY29uQ2hhaW4gZXh0ZW5kcyBFVEgyQ29yZSBpbXBsZW1lbnRzIElFVEgyQmVhY29uQ2hhaW4ge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm92aWRlcjogc3RyaW5nLFxuICAgICAgICBzY2hlbWE6IEJhc2VBUElTY2hlbWEgPSBEZWZhdWx0U2NoZW1hLFxuICAgICAgICBvcHRzOiBFVEgyQmFzZU9wdHMgPSB7IHByb3RlY3RQcm92aWRlcjogdHJ1ZSB9KSB7XG4gICAgICAgIHN1cGVyKHByb3ZpZGVyLCBzY2hlbWEsIG9wdHMpXG4gICAgfVxufVxuIl19