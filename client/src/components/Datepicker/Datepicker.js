import React from "react";
import PropTypes from "prop-types";
import Calendar from "../Calendar/Calendar";
import * as Styled from "./DatepickerStyles";
import { isDate, getDateISO } from "../../components/Calendar/CalendarHelper";

class Datepicker extends React.Component {

  state = { date: null, calendarOpen: false }

  toggleCalendar = () => this.setState({ calendarOpen: !this.state.calendarOpen })

  handleChange = evt => evt.preventDefault()

  handleDateChange = date => {
    const { onDateChanged } = this.props;
    const { date: currentDate } = this.state;
    const newDate = date ? getDateISO(date) : null;
    //
    console.log("this is currentDate on Datepicker " + newDate);
    //
    currentDate !== newDate &&
      this.setState({ date: newDate, calendarOpen: false }, () => {
        typeof onDateChanged === "function" && onDateChanged(this.state.date);
      });
  }

  componentDidMount() {
    const { value: date } = this.props;
    const newDate = date && new Date(date);

    isDate(newDate) && this.setState({ date: getDateISO(newDate) });
  }

  componentDidUpdate(prevProps) {
    const { value: date } = this.props;
    const { value: prevDate } = prevProps;
    const dateISO = getDateISO(new Date(date));
    const prevDateISO = getDateISO(new Date(prevDate));

    dateISO !== prevDateISO && this.setState({ date: dateISO });
  }
  render() {
    const { label } = this.props;
    const { date, calendarOpen } = this.state;

    return (
      <Styled.DatePickerContainer>

        <Styled.DatePickerFormGroup>

          <Styled.DatePickerLabel>{label || 'Enter Date'}</Styled.DatePickerLabel>

          <Styled.DatePickerInput
            type="text"
            value={date ? date.split("-").join(" / ") : ""}
            onChange={this.handleChange}
            readOnly="readonly"
            placeholder="YYYY / MM / DD"
          />

        </Styled.DatePickerFormGroup>

        <Styled.DatePickerDropdown isOpen={calendarOpen} toggle={this.toggleCalendar}>

          <Styled.DatePickerDropdownToggle color="transparent" />

          <Styled.DatePickerDropdownMenu>
            {calendarOpen && (
              <Calendar date={date && new Date(date)} onDateChanged={this.handleDateChange} />
            )}
          </Styled.DatePickerDropdownMenu>

        </Styled.DatePickerDropdown>

      </Styled.DatePickerContainer>
    );
  }
}

Datepicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onDateChanged: PropTypes.func
}

export default Datepicker;