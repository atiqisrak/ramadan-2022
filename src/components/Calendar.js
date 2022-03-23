import React, { useState } from "react";
import calendar from "../assets/data/sahri-iftar.json";
import CalendarData from "./CalendarData";
import './Calendar.css'

const Calendar = (props) => {
  const [timetable] = useState(calendar);

  return (
    <>
      <table className="calander">
        <thead>
          <th>Day</th>
          <th>Sahri</th>
          <th>Iftar</th>
        </thead>
        <tbody>
          <CalendarData timetable={timetable} />
        </tbody>
      </table>
    </>
  );
};

export default Calendar;
