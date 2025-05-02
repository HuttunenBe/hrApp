import "./header.css";
import { NavLink } from "react-router";

function Header(props) {
  return (
    <header>
      <div className="logo">
        <div className="headingCircle">
          <div className="heading">
            <h1>{props.appName}</h1>
            <h2>Employees</h2>
          </div>
        </div>
      </div>

      <nav>
        <ul>
          <li><NavLink to="/">Personlist</NavLink></li>
          <li><NavLink to="/addEmployee">Add Employee</NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
