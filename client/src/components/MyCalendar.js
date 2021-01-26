import React, {useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {

    const [date, setDate] = useState(new Date())
    const onChange = date => {
        setDate(date)
    }
    
    return (
        <div className="componentHolder ml-2">
      <div style={{ width: "100%" }}>
        <Calendar onChange={onChange}
        value={date}
        />
        <p>{date.toDateString()}</p>

      </div>
    </div>
  );
}

export default MyCalendar;
