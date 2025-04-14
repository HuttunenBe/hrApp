import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import PersonList from "./Employees/PersonList";

function App() {
  return (
    <div>
      <Header appName="Hr App" />
      <main>
        <PersonList />
      </main>
      <Footer className="REACT25" />
    </div>
  );
}

export default App;
