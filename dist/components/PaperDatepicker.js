'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _PaperField = require('./PaperField');

var _PaperField2 = _interopRequireDefault(_PaperField);

var _Props = require('../utils/Props');

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cssMap = {
  align: {
    left: '',
    right: 'paper-datepicker__calendar--right'
  }
};

var PaperDatepicker = _react2.default.createClass({
  displayName: 'PaperDatepicker',

  propTypes: {
    align: _react2.default.PropTypes.oneOf(['left', 'right']),
    date: _Props2.default.momentObject,
    format: _react2.default.PropTypes.string,
    hideClear: _react2.default.PropTypes.bool,
    label: _react2.default.PropTypes.string,
    minDate: _Props2.default.momentObject,
    name: _react2.default.PropTypes.string,
    onDateChange: _react2.default.PropTypes.func,
    placeholder: _react2.default.PropTypes.string
  },

  getInitialState: function getInitialState() {
    return {
      currentMonth: (0, _moment2.default)(),
      showCalendar: false,
      selectedDate: null
    };
  },
  _handleFocus: function _handleFocus() {
    this.setState({
      showCalendar: true
    });
  },
  _handleMonthToggle: function _handleMonthToggle(direction) {
    var currentMonth = this.state.currentMonth.clone();
    var newMonth = direction === 'prev' ? currentMonth.subtract(1, 'months') : currentMonth.add(1, 'months');

    this.setState({
      currentMonth: newMonth
    });
  },
  _handleDateSelected: function _handleDateSelected(day, e) {
    var selectedDate = this.state.currentMonth.clone().date(day.number);

    this.setState({
      selectedDate: selectedDate,
      currentMonth: selectedDate.clone()
    });

    e.stopPropagation();
  },
  _handleCancelClick: function _handleCancelClick() {
    this.setState({
      selectedDate: null,
      showCalendar: false
    });
  },
  _handleClearClick: function _handleClearClick() {
    this._handleCancelClick();

    if (this.props.onDateChange) {
      this.props.onDateChange(null);
    }
  },
  _handleOkClick: function _handleOkClick() {
    if (this.props.onDateChange) {
      this.props.onDateChange(this.state.selectedDate);
    }

    this._handleCancelClick();
  },
  _getDays: function _getDays() {
    var currentMonth = this.state.currentMonth.clone();
    var numDays = currentMonth.daysInMonth();
    var offset = currentMonth.startOf('month').isoWeekday();
    var date = this.state.selectedDate || this.props.date || (0, _moment2.default)();
    var days = [];

    for (var i = 1; i < offset; i++) {
      days.push({});
    }

    for (var _i = 1; numDays >= _i; _i++) {
      days.push({
        number: _i,
        isActive: currentMonth.month() === date.month() && date.date() === _i
      });
    }

    return days;
  },
  render: function render() {
    var _this = this;

    var value = this.state.selectedDate || this.props.date;

    return _react2.default.createElement(
      'div',
      { className: 'paper-datepicker', style: this.props.style },
      this.props.children ? _react2.default.createElement(
        'div',
        { onClick: this._handleFocus },
        this.props.children
      ) : _react2.default.createElement(_PaperField2.default, {
        label: this.props.label,
        name: this.props.name,
        onFocus: this._handleFocus,
        placeholder: this.props.placeholder,
        readOnly: true,
        value: value ? value.format(this.props.format || 'MM/DD/YYYY') : ''
      }),
      this.state.showCalendar ? _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { className: 'paper-datepicker__scrim', onClick: this._handleCancelClick }),
        _react2.default.createElement(
          'div',
          { className: 'paper-datepicker__calendar paper-card ' + cssMap.align[this.props.align] },
          _react2.default.createElement(
            'div',
            { className: 'paper-datepicker__calendar-header layout horizontal' },
            _react2.default.createElement(
              'div',
              { className: 'one-seventh', onClick: this._handleMonthToggle.bind(null, 'prev') },
              _react2.default.createElement(
                'i',
                { className: 'paper-datepicker__calendar-nav material-icons' },
                'chevron_left'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'paper-datepicker__calendar-month five-sevenths' },
              _react2.default.createElement(
                'strong',
                null,
                this.state.currentMonth.format('MMMM YYYY')
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'one-seventh', onClick: this._handleMonthToggle.bind(null, 'next') },
              _react2.default.createElement(
                'i',
                { className: 'paper-datepicker__calendar-nav material-icons' },
                'chevron_right'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'layout horizontal justify' },
            _react2.default.createElement(
              'div',
              { className: 'paper-datepicker__weekday one-seventh text--center' },
              'M'
            ),
            _react2.default.createElement(
              'div',
              { className: 'paper-datepicker__weekday one-seventh text--center' },
              'T'
            ),
            _react2.default.createElement(
              'div',
              { className: 'paper-datepicker__weekday one-seventh text--center' },
              'W'
            ),
            _react2.default.createElement(
              'div',
              { className: 'paper-datepicker__weekday one-seventh text--center' },
              'T'
            ),
            _react2.default.createElement(
              'div',
              { className: 'paper-datepicker__weekday one-seventh text--center' },
              'F'
            ),
            _react2.default.createElement(
              'div',
              { className: 'paper-datepicker__weekday one-seventh text--center' },
              'S'
            ),
            _react2.default.createElement(
              'div',
              { className: 'paper-datepicker__weekday one-seventh text--center' },
              'S'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'layout horizontal justify wrap' },
            this._getDays().map(function (day, i) {
              if (day.number) {
                var date = _this.state.currentMonth.clone().date(day.number);
                var minDate = _this.props.minDate;
                var is_selectable = minDate ? date.isAfter(minDate, 'day') || date.isSame(minDate, 'day') : true;

                if (is_selectable) {
                  return _react2.default.createElement(
                    'div',
                    { className: 'paper-datepicker__calendar-day-item one-seventh' + (day.isActive ? ' isActive' : ''), key: i, onClick: _this._handleDateSelected.bind(null, day) },
                    _react2.default.createElement(
                      'div',
                      { className: 'paper-datepicker__calendar-day-item-content' },
                      day.number
                    )
                  );
                } else {
                  return _react2.default.createElement(
                    'div',
                    { className: 'paper-datepicker__calendar-day-item one-seventh', key: i },
                    _react2.default.createElement(
                      'div',
                      { className: 'paper-datepicker__calendar-day-item-content text--disabled' },
                      day.number
                    )
                  );
                }
              } else {
                return _react2.default.createElement('div', { className: 'one-seventh', key: i });
              }
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'paper-datepicker__calendar-footer text--right' },
            (this.props.date || this.state.selectedDate) && !this.props.hideClear ? _react2.default.createElement(
              'div',
              { className: 'paper-btn paper-btn--flat paper-btn--default', onClick: this._handleClearClick },
              'Clear'
            ) : null,
            _react2.default.createElement(
              'div',
              { className: 'paper-btn paper-btn--flat paper-btn--default', onClick: this._handleCancelClick },
              'Cancel'
            ),
            _react2.default.createElement(
              'div',
              { className: 'paper-btn paper-btn--flat paper-btn--secondary', onClick: this._handleOkClick },
              'OK'
            )
          )
        )
      ) : null
    );
  }
});

module.exports = PaperDatepicker;