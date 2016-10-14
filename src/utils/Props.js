module.exports = {
  momentObject (props, propName, componentName) {
    const propValue = props[propName];

    if (propValue && !propValue._isAMomentObject) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`, expected a Moment object.'
      );
    }

    return null;
  },
};