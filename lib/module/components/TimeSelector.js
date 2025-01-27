import React, { useCallback } from 'react';
import { Text, View, StyleSheet, I18nManager } from 'react-native';
import { useCalendarContext } from '../CalendarContext';
import Wheel from './TimePicker/Wheel';
import { CALENDAR_HEIGHT } from '../enums';
import { getParsedDate, getDate, getFormated } from '../utils';
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
  } = useCalendarContext();
  const {
    hour,
    minute
  } = getParsedDate(date);
  const handleChangeHour = useCallback(value => {
    const newDate = getDate(date).hour(value);
    onSelectDate(getFormated(newDate));
  }, [date, onSelectDate]);
  const handleChangeMinute = useCallback(value => {
    const newDate = getDate(date).minute(value);
    onSelectDate(getFormated(newDate));
  }, [date, onSelectDate]);
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container,
    testID: "time-selector"
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.timePickerContainer
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.wheelContainer
  }, /*#__PURE__*/React.createElement(Wheel, {
    value: hour,
    items: hours,
    setValue: handleChangeHour
  })), /*#__PURE__*/React.createElement(Text, {
    style: {
      marginHorizontal: 5,
      ...styles.timePickerText,
      ...(theme === null || theme === void 0 ? void 0 : theme.timePickerTextStyle)
    }
  }, ":"), /*#__PURE__*/React.createElement(View, {
    style: styles.wheelContainer
  }, /*#__PURE__*/React.createElement(Wheel, {
    value: minute,
    items: minutes,
    setValue: handleChangeMinute
  }))));
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wheelContainer: {
    flex: 1
  },
  timePickerContainer: {
    flexDirection: I18nManager.getConstants().isRTL ? 'row-reverse' : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: CALENDAR_HEIGHT / 2,
    height: CALENDAR_HEIGHT / 2
  },
  timePickerText: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
export default TimeSelector;
//# sourceMappingURL=TimeSelector.js.map