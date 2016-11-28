import React, { Component, PropTypes } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import moment from 'moment';
import 'react-day-picker/lib/style.css'

class Calendar extends Component {
    static propTypes = {
        dateRange: PropTypes.shape({
            from: PropTypes.object,
            to: PropTypes.object
        }).isRequired,
        style: PropTypes.object
    }

    static defaultProps = {
        style: {
            display: 'inline-block'
        }
    }

    rangeDateText() {
        const { dateRange: {from, to} } = this.props;
        return <div>{ from && to ? 'From ' + moment(from).format('L') + ' to ' + moment(to).format('L') : 'Select a range of days' }</div>
    }

    render() {
        const { dateRange: {from, to}, style } = this.props
        return (
            <div style={style}>
                { this.rangeDateText() }
                <DayPicker
                    onDayClick = { this.handleDayClick }
                    selectedDays = { day => DateUtils.isDayInRange(day, { from, to }) }
                />
            </div>
        );
    }

    handleDayClick = (ev, day) => {
        const { dateRange, onDayClick } = this.props
        const range = DateUtils.addDayToRange(day, dateRange)
        onDayClick(range);
    }
}

export default Calendar