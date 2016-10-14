import React from 'react';
import moment from 'moment';

import PaperField from './PaperField';

import CustomProps from '../utils/Props';

const cssMap = {
  align: {
    left: '',
    right: 'paper-datepicker__calendar--right',
  },
};

const PaperDatepicker = React.createClass({
  propTypes: {
    align: React.PropTypes.oneOf(['left', 'right']),
    date: CustomProps.momentObject,
    format: React.PropTypes.string,
    hideClear: React.PropTypes.bool,
    label: React.PropTypes.string,
    minDate: CustomProps.momentObject,
    name: React.PropTypes.string,
    onDateChange: React.PropTypes.func,
    placeholder: React.PropTypes.string,
  },

  getInitialState () {
    return {
      currentMonth: moment(),
      showCalendar: false,
      selectedDate: null,
    };
  },

  _handleFocus () {
    this.setState({
      showCalendar: true,
    });
  },

  _handleMonthToggle (direction) {
    const currentMonth = this.state.currentMonth.clone();
    const newMonth = direction === 'prev' ? currentMonth.subtract(1, 'months') : currentMonth.add(1, 'months');

    this.setState({
      currentMonth: newMonth,
    });
  },

  _handleDateSelected (day, e) {
    const selectedDate = this.state.currentMonth.clone().date(day.number);

    this.setState({
      selectedDate,
      currentMonth: selectedDate.clone(),
    });

    e.stopPropagation();
  },

  _handleCancelClick () {
    this.setState({
      selectedDate: null,
      showCalendar: false,
    });
  },

  _handleClearClick () {
    this._handleCancelClick();

    if (this.props.onDateChange) {
      this.props.onDateChange(null);
    }
  },

  _handleOkClick () {
    if (this.props.onDateChange) {
      this.props.onDateChange(this.state.selectedDate);
    }

    this._handleCancelClick();
  },

  _getDays () {
    const currentMonth = this.state.currentMonth.clone();
    const numDays = currentMonth.daysInMonth();
    const offset = currentMonth.startOf('month').isoWeekday();
    const date = this.state.selectedDate || this.props.date || moment();
    const days = [];

    for (let i = 1; i < offset; i++) {
      days.push({});
    }

    for (let i = 1; numDays >= i; i++) {
      days.push({
        number: i,
        isActive: currentMonth.month() === date.month() && date.date() === i,
      });
    }

    return days;
  },

  render () {
    const value = this.state.selectedDate || this.props.date;

    return (
      <div className='paper-datepicker' style={this.props.style}>
        {this.props.children ? (
          <div onClick={this._handleFocus}>
            {this.props.children}
          </div>
        ) : (
          <PaperField
            label={this.props.label}
            name={this.props.name}
            onFocus={this._handleFocus}
            placeholder={this.props.placeholder}
            readOnly={true}
            value={value ? value.format(this.props.format || 'MM/DD/YYYY') : ''}
          />
        )}

        {this.state.showCalendar ? (
          <div>
            <div className='paper-datepicker__scrim' onClick={this._handleCancelClick}></div>
            <div className={'paper-datepicker__calendar paper-card ' + cssMap.align[this.props.align]}>
              <div className='paper-datepicker__calendar-header layout horizontal'>
                <div className='one-seventh' onClick={this._handleMonthToggle.bind(null, 'prev')}>
                  <i className='paper-datepicker__calendar-nav material-icons'>chevron_left</i>
                </div>
                <div className='paper-datepicker__calendar-month five-sevenths'>
                  <strong>{this.state.currentMonth.format('MMMM YYYY')}</strong>
                </div>
                <div className='one-seventh' onClick={this._handleMonthToggle.bind(null, 'next')}>
                  <i className='paper-datepicker__calendar-nav material-icons'>chevron_right</i>
                </div>
              </div>

              <div className='layout horizontal justify'>
                <div className='paper-datepicker__weekday one-seventh text--center'>M</div>
                <div className='paper-datepicker__weekday one-seventh text--center'>T</div>
                <div className='paper-datepicker__weekday one-seventh text--center'>W</div>
                <div className='paper-datepicker__weekday one-seventh text--center'>T</div>
                <div className='paper-datepicker__weekday one-seventh text--center'>F</div>
                <div className='paper-datepicker__weekday one-seventh text--center'>S</div>
                <div className='paper-datepicker__weekday one-seventh text--center'>S</div>
              </div>

              <div className='layout horizontal justify wrap'>
                {this._getDays().map((day, i) => {
                  if (day.number) {
                    const date = this.state.currentMonth.clone().date(day.number);
                    const minDate = this.props.minDate;
                    const is_selectable = minDate ? date.isAfter(minDate, 'day') || date.isSame(minDate, 'day') : true;

                    if (is_selectable) {
                      return (
                        <div className={'paper-datepicker__calendar-day-item one-seventh' + (day.isActive ? ' isActive' : '')} key={i} onClick={this._handleDateSelected.bind(null, day)}>
                          <div className='paper-datepicker__calendar-day-item-content'>{day.number}</div>
                        </div>
                      );
                    } else {
                      return (
                        <div className='paper-datepicker__calendar-day-item one-seventh' key={i}>
                          <div className='paper-datepicker__calendar-day-item-content text--disabled'>{day.number}</div>
                        </div>
                      );
                    }
                  } else {
                    return (
                      <div className='one-seventh' key={i}></div>
                    );
                  }
                })}
              </div>

              <div className='paper-datepicker__calendar-footer text--right'>
                {(this.props.date || this.state.selectedDate) && !this.props.hideClear ? <div className='paper-btn paper-btn--flat paper-btn--default' onClick={this._handleClearClick}>Clear</div> : null}
                <div className='paper-btn paper-btn--flat paper-btn--default' onClick={this._handleCancelClick}>Cancel</div>
                <div className='paper-btn paper-btn--flat paper-btn--secondary' onClick={this._handleOkClick}>OK</div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  },
});

module.exports = PaperDatepicker;