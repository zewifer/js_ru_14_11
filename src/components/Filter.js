import React, { Component, PropTypes } from 'react'
import Calendar from './Calendar.js'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class Filter extends Component {
    static propTypes = {
        options: PropTypes.array.isRequired,
        filters: PropTypes.shape({
            selected: PropTypes.array,
            dateRange: PropTypes.object
        }).isRequired,
        filterChange: PropTypes.func.isRequired
    }

    render() {
        const {options, filters: {selected, dateRange}} = this.props
        return (
            <div>
                <Select options = {options} value = {selected} onChange = {this.handleChange} multi = {true}/>
                <Calendar dateRange = {dateRange} onDayClick = {this.handleDayClick} />
            </div>
        )
    }

    handleChange = selected => this.props.filterChange({ selected })

    handleDayClick = (dateRange) => this.props.filterChange({ dateRange })

}

export default Filter