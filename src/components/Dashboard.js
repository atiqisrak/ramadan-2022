import React, { useState } from "react";
import "./Dashboard.css";
import calendar from "../assets/data/sahri-iftar.json";
import DashboardData from "./DashboardData";
import Lottie from "react-lottie";
import animationData from "../assets/images/ramadan.json";
import Map from "./Map";
const Dashboard = () => {
  const [currentD, setCurrentD] = useState(1);
  // console.log(currentD);

  const currentN = new Date();

  const date = `${currentN.getDate()}/${
    currentN.getMonth() + 1
  }/${currentN.getFullYear()}`;

  const today = `${currentN.getDate()}`;

  const year = `${currentN.getFullYear()}`;

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[currentN.getMonth()];
  const formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    hours %= 12;
    hours = hours || 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    const strTime = `${hours}:${minutes} ${ampm}`;
    return strTime;
  };
  const currentTime = formatAMPM(currentN);
  const [timetable] = useState(calendar);
  // Lottie
  const ramadanAnim = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  //   const sahriToday = calendar.filter(x => x.id === 4);
  const sahriToday = calendar.filter((x) => {
    if (x.id == currentD) {
      return x;
    }
  });
  //   console.log(sahriToday[0].sahri);
  const iftarToday = calendar.filter((x) => {
    if (x.id == currentD) {
      return x;
    }
  });
  //   console.log(sahriToday[0].sahri);
  // console.log(sahriToday);
  const location = {
    address: "Navana Communication",
    lat: 23.7705486,
    lng: 90.4083977,
  };
  return (
    <>
      <div className="lottieHolder">
        <Lottie options={ramadanAnim} />
        <Lottie options={ramadanAnim} />
        <Lottie options={ramadanAnim} />
      </div>
      <div className="dailyquote">
        <p>
          "O you who have believed, decreed upon you is fasting as it was
          decreed upon those before you that you may become righteous" - Surat
          Al-Baqarah 2:183
        </p>
      </div>
      <div className="date">
        <h2 className="month">رَمَضَان</h2>
        <h2 className="year">{year}</h2>
        {/* <h2 className="month">Ramadan (رَمَضَان)</h2> */}
      </div>
      <div className="dateSelect">
        <DashboardData currentD={currentD} timetable={timetable} sahriToday={sahriToday} iftarToday={iftarToday} setCurrentD={setCurrentD} currentN={currentN} />
      </div>

      <div className="map">
        <h2>
          Traffic <span>Overview</span>
        </h2>
        <div>
          <Map location={location} zoomLevel={17} />
        </div>
      </div>
    </>
  );
};
export default Dashboard;