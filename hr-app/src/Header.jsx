function Header(props) {
  return (
    <header>
      <div className="heading">
        <h1>{props.appName}</h1>
        <h2>Employees</h2>
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
