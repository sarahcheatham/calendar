import React from 'react';
import dateFns from 'date-fns';

class Calendar extends React.Component {
    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
    };

    // renders the month and year header of the calendar
    renderHeader(){
        const dateFormat = "MMMM YYYY";
        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="icon" onClick={this.prevMonth}>chevron_left</div>
                </div>
                <div className="col col-center">
                    <span>
                        {dateFns.format(this.state.currentMonth, dateFormat)}
                    </span>
                </div>
                <div className="col col-end" onClick={this.nextMonth}>
                    <div className="icon">chevron_right</div>
                </div>
            </div>
        )
    }

    // renders the days of the week labels on the calendar
    renderDays(){
        const dateFormat = "dddd";
        const days = [];

        let startDate = dateFns.startOfWeek(this.state.currentMonth);

        for(let i =0; i < 7; i++){
            days.push(
                <div className="col col-center" key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </div>
            );
        }
        return <div className="days row">{days}</div>;
    }

    // renders the date boxes of the calendar
    renderCells(){
        const format = "ddd MMM DD YYYY";
        const { currentMonth, selectedDate } = this.state;
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);
        
        const dateFormat = "D";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";
        const calendarDays = dateFns.eachDay(
            new Date(startDate),
            new Date(endDate)
        )
        // const location = this.props.fakeData.map(obj => obj.location);
        // const description = this.props.fakeData.map(obj => obj.description);
        // const date = this.props.fakeData.map(obj => dateFns.format(obj.date, format))
        let activity = "";
        for(let i = 0; i< calendarDays.length; i++){
            const calendarDay = dateFns.format(calendarDays[i], format);
            // console.log("calendarDay:", calendarDay)
                this.props.fakeData.map(obj => {
                const date = dateFns.format(obj.date, format)
                const location = obj.location;
                const description = obj.description;
                if(date === calendarDay){
                    activity =  { location, description };
                    return activity
                }
            })
        }
        const location = activity.location;
        const description = activity.description;
        
    
        while(day <= endDate){
            for(let i = 0; i < 7; i++){
                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;
                // const formattedDay = day.toString().slice(0, format.length +1);
                // console.log(formattedDay,  date[i])
                days.push(
                    <div
                        className={`col cell ${
                            !dateFns.isSameMonth(day, monthStart)
                                ? "disabled"
                                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
                        }`}
                        key={day}
                        onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
                    >
                        <span className="number">{formattedDate}</span>
                        <span className="bg">{formattedDate}</span>
                        <span>{location}{description}</span>
                    </div>
                );
                day = dateFns.addDays(day, 1);
            }
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>;
    }

    onDateClick = day => {
        this.setState({
            selectedDate: day
        });
        this.props.onDateSelect({
            selectedDate: day
        })
    };

    nextMonth = () => {
        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        });
    };

    prevMonth = () => {
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });
    };

    render(){
        return (
            <div className="calendar">
                {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}
            </div>
        );
    }
}

export default Calendar;