import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import * as Styled from "./CalendarStyles";
import calendar, {
  isDate,
  isSameDay,
  isSameMonth,
  getDateISO,
  getNextMonth,
  getPreviousMonth,
  WEEK_DAYS,
  CALENDAR_MONTHS
} from "./CalendarHelper";

class Calendar extends Component {
  
  state = { ...this.resolveStateFromProp(), today: new Date() };

  componentDidMount() {
    const now = new Date();
    const tomorrow = new Date().setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000;
    const ms = tomorrow - now;

    this.dayTimeout = setTimeout(() => {
      this.setState({ today: new Date() }, this.clearDayTimeout);
    }, ms);
  }

  componentDidUpdate(prevProps) {
    const { date, onDateChanged } = this.props;
    const { date: prevDate } = prevProps;
    const dateMatch = date === prevDate || isSameDay(date, prevDate);

    !dateMatch &&
      this.setState(this.resolveStateFromDate(date), () => {
        typeof onDateChanged === "function" && onDateChanged(date);
      });
  }

  clearDayTimeout = () => {
    this.dayTimeout && clearTimeout(this.dayTimeout);
  }

  componentWillUnmount() {
    this.clearPressureTimer();
    this.clearDayTimeout();
  }

  // Render the month and year header with arrow controls
  // for navigating through months and years
  gotoDate = date => evt => {
    evt && evt.preventDefault();
    const { current } = this.state;
    const { onDateChanged } = this.props;

    !(current && isSameDay(date, current)) &&
      this.setState(this.resolveStateFromDate(date), () => {
        typeof onDateChanged === "function" && onDateChanged(date);
      });
  }

  gotoPreviousMonth = () => {
    const { month, year } = this.state;
    this.setState(getPreviousMonth(month, year));
  }

  gotoNextMonth = () => {
    const { month, year } = this.state;
    this.setState(getNextMonth(month, year));
  }

  gotoPreviousYear = () => {
    const { year } = this.state;
    this.setState({ year: year - 1 });
  }

  gotoNextYear = () => {
    const { year } = this.state;
    this.setState({ year: year + 1 });
  }

  handlePressure = fn => {
    if (typeof fn === "function") {
      fn();
      this.pressureTimeout = setTimeout(() => {
        this.pressureTimer = setInterval(fn, 100);
      }, 500);
    }
  }

  clearPressureTimer = () => {
    this.pressureTimer && clearInterval(this.pressureTimer);
    this.pressureTimeout && clearTimeout(this.pressureTimeout);
  }

  handlePrevious = evt => {
    evt && evt.preventDefault();
    const fn = evt.shiftKey ? this.gotoPreviousYear : this.gotoPreviousMonth;
    this.handlePressure(fn);
  }

  handleNext = evt => {
    evt && evt.preventDefault();
    const fn = evt.shiftKey ? this.gotoNextYear : this.gotoNextMonth;
    this.handlePressure(fn);
  }
  
  renderMonthAndYear = () => {
    const { month, year } = this.state;
    
    // Resolve the month name from the CALENDAR_MONTHS object map
    const monthname = Object.keys(CALENDAR_MONTHS)[
      Math.max(0, Math.min(month - 1, 11))
    ];

    return (
      <Styled.CalendarHeader>
        
        <Styled.ArrowLeft
          onMouseDown={this.handlePrevious}
          onMouseUp={this.clearPressureTimer}
          title="Previous Month"
        />
        
        <Styled.CalendarMonth>
          {monthname} {year}
        </Styled.CalendarMonth>
        
        <Styled.ArrowRight
          onMouseDown={this.handleNext}
          onMouseUp={this.clearPressureTimer}
          title="Next Month"
        />
        
      </Styled.CalendarHeader>
    );
  }

  // Render the label for day of the week
  // This method is used as a map callback as seen in render()
  renderDayLabel = (day, index) => {
    // Resolve the day of the week label from the WEEK_DAYS object map
    const daylabel = WEEK_DAYS[day].toUpperCase();
    
    return (
      <Styled.CalendarDay key={daylabel} index={index}>
        {daylabel}
      </Styled.CalendarDay>
    );
  }

  // Render a calendar date as returned from the calendar builder function
  // This method is used as a map callback as seen in render()
  renderCalendarDate = (date, index) => {
    const { current, month, year, today } = this.state;
    const _date = new Date(date.join("-"));

    // Check if calendar date is same day as today
    const isToday = isSameDay(_date, today);
    
    // Check if calendar date is same day as currently selected date
    const isCurrent = current && isSameDay(_date, current);
    
    // Check if calendar date is in the same month as the state month and year
    const inMonth = month && year && isSameMonth(_date, new Date([year, month, 1].join("-")));

    // The click handler
    const onClick = this.gotoDate(_date);

    const props = { index, inMonth, onClick, title: _date.toDateString() };

    // Conditionally render a styled date component
    const DateComponent = isCurrent
      ? Styled.HighlightedCalendarDate
      : isToday
        ? Styled.TodayCalendarDate
        : Styled.CalendarDate;

    return (
      <DateComponent key={getDateISO(_date)} {...props}>
        {_date.getDate()}
      </DateComponent>
    );
  }
  
  resolveStateFromDate(date) {
    const isDateObject = isDate(date);
    const _date = isDateObject ? date : new Date();

    return {
      current: isDateObject ? date : null,
      month: +_date.getMonth() + 1,
      year: _date.getFullYear()
    };
  }

  resolveStateFromProp() {
    return this.resolveStateFromDate(this.props.date);
  }

  getCalendarDates = () => {
    const { current, month, year } = this.state;
    const calendarMonth = month || +current.getMonth() + 1;
    const calendarYear = year || current.getFullYear();

    return calendar(calendarMonth, calendarYear);
  };

  render() {
    return (
      <Styled.CalendarContainer>
        
        { this.renderMonthAndYear() }

        <Styled.CalendarGrid>
          <Fragment>
            { Object.keys(WEEK_DAYS).map(this.renderDayLabel) }
          </Fragment>

          <Fragment>
            { this.getCalendarDates().map(this.renderCalendarDate) }
          </Fragment>
        </Styled.CalendarGrid>
        
      </Styled.CalendarContainer>
    );
  }
}

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date),
  onDateChanged: PropTypes.func
}

export default Calendar;