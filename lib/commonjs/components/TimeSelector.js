"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _CalendarContext = require("../CalendarContext");
var _Wheel = _interopRequireDefault(require("./TimePicker/Wheel"));
var _enums = require("../enums");
var _utils = require("../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function createNumberList(num) {
  return new Array(num).fill(0).map((_, index) => index < 10 ? `0${index.toString()}` : index.toString());
}
const hours = createNumberList(24);
const minutes = createNumberList(60);
const TimeSelector = () => {
  const {
    date,
    onSelectDate,
    theme
  } = (0, _CalendarContext.useCalendarContext)();
  const {
    hour,
    minute
  } = (0, _utils.getParsedDate)(date);
  const handleChangeHour = (0, _react.useCallback)(value => {
    const newDate = (0, _utils.getDate)(date).hour(value);
    onSelectDate((0, _utils.getFormated)(newDate));
  }, [date, onSelectDate]);
  const handleChangeMinute = (0, _react.useCallback)(value => {
    const newDate = (0, _utils.getDate)(date).minute(value);
    onSelectDate((0, _utils.getFormated)(newDate));
  }, [date, onSelectDate]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container,
    testID: "time-selector"
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.timePickerContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.wheelContainer
  }, /*#__PURE__*/_react.default.createElement(_Wheel.default, {
    value: hour,
    items: hours,
    setValue: handleChangeHour
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: {
      marginHorizontal: 5,
      ...styles.timePickerText,
      ...(theme === null || theme === void 0 ? void 0 : theme.timePickerTextStyle)
    }
  }, ":"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.wheelContainer
  }, /*#__PURE__*/_react.default.createElement(_Wheel.default, {
    value: minute,
    items: minutes,
    setValue: handleChangeMinute
  }))));
};
const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wheelContainer: {
    flex: 1
  },
  timePickerContainer: {
    flexDirection: _reactNative.I18nManager.getConstants().isRTL ? 'row-reverse' : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: _enums.CALENDAR_HEIGHT / 2,
    height: _enums.CALENDAR_HEIGHT / 2
  },
  timePickerText: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
var _default = exports.default = TimeSelector;
//# sourceMappingURL=TimeSelector.js.map