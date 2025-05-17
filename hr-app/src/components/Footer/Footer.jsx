import "./footer.css";
import { NavLink } from "react-router";

function Footer(props) {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Personlist</NavLink>
          </li>
          <li>
            <NavLink to="/addEmployee">Add Employee</NavLink>
          </li>
        </ul>
      </nav>

      <h3>Copyright {props.className}</h3>
    </footer>
  );
}
export default Footer;
