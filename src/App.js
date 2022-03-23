import logo from "./logo.svg";
import "./App.css";
import Calendar from "./components/Calendar";
import Menubar from "./components/ui/Menubar";
import "bootstrap-icons/font/bootstrap-icons.css";
import "font-awesome/css/font-awesome.min.css";
import Dashboard from "./components/Dashboard";
// require('dotenv').config();

function App() {
  return (
    <>
      {/* <div className="calendar">
        <Calendar />
      </div> */}
      <div className="dashboard">
        <Dashboard/>
      </div>
      {/* <div className="menubar">
        <Menubar />
      </div> */}
    </>
  );
}

export default App;
