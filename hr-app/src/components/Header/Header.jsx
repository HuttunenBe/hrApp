import "./header.css";
import { Link } from "react-router";

function Header(props) {
  return (
    <header>
      <div className="headingCircle">
        <div className="heading">
          <h1>{props.appName}</h1>
          <h2>Employees</h2>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Personlist</Link>
            <Link to="/addEmployee">Add Employee</Link>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
