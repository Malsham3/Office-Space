import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useStoreContext } from "../utils/GlobalState";

function MiniCalendar() {
  const [globalState, dispatch] = useStoreContext();

  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date)
  };

  useEffect(() => {
    dispatch({
      type: "SELECTED_DATE",
      payload: date.toDateString(),
    });
  }, [date]);

  

  return (
    <div className="componentHolder ml-2">
      <div style={{ width: "100%" }}>
        <Calendar onChange={onChange} value={date} />
      </div>
    </div>
  );
}

export default MiniCalendar;
