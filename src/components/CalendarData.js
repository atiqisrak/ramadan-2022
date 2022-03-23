import React, { useState } from "react";

const CalendarData = ({ timetable }) => {
  return (
    <>
      {timetable.map((timetable) => (
        <tr key={timetable.id}>
          <td>
            <p>{timetable.day}</p>
          </td>
          <td>
            <p>{timetable.sahri}</p>
          </td>
          <td>
            <p>{timetable.iftar}</p>
          </td>
        </tr>
      ))}
    </>
  );
};

export default CalendarData;
