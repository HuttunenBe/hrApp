import './header.css';

function Header(props) {
  return (
    <header>
      <div className="headingCircle">
      <div className="heading">
        <h1>{props.appName}</h1>
        <h2>Employees</h2>
      </div>
      </div>
      {/* <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
        </ul>
      </nav>*/}
    </header>
 
  );
}

export default Header;
