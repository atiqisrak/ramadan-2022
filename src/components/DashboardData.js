import React, { useState } from "react";
const DashboardData = ({
  timetable,
  sahriToday,
  iftarToday,
  current,
  currentD,
  setCurrentD,
}) => {
  // console.log(timetable);
  const handleClick = (id) => {
    setCurrentD(id);
    // setActive(id);
  };

  // const [active, setActive] = useState(1);

  const dateFunc = (dhur, id) => {
    let eDate = new Date(dhur);
    
    if (current.getDate() === eDate.getDate()) {
      console.log(current);
      // setActive(id);
      setCurrentD(id);
    }
  }

  return (
    <>
      <div className="mother">
        {timetable.map((timetable) => (

          <>
            <div
              className={ currentD === timetable.id ? "dayboom active" : "dayboom" }
              onClick={() => handleClick(timetable.id)}
            >
              <h3 className="weekday">{timetable.weekday}</h3>
              <h3 className="monthdate">{timetable.day}</h3>
              {dateFunc(timetable.edate, timetable.id)}
            </div>
          </>
        ))}
      </div>

      <div className="timeToday">
        <div className="sahriToday">
          <div>
            <h2>
              Sahri <span>Time</span>
            </h2>
            <h3>{sahriToday[0].sahri}</h3>
          </div>
        </div>
        <div className="iftarToday">
          <div>
            <h2>
              Iftar <span>Time</span>
            </h2>
            <h3>{iftarToday[0].iftar}</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardData;
