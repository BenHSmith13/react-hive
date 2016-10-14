'use strict';

module.exports = {
  momentObject: function momentObject(props, propName, componentName) {
    var propValue = props[propName];

    if (propValue && !propValue._isAMomentObject) {
      return new Error('Invalid prop `' + propName + '` supplied to' + ' `' + componentName + '`, expected a Moment object.');
    }

    return null;
  }
};