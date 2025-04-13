import Header from "./Header";
import Footer from "./Footer";
import Box from "./Box";
import "./App.css";

function App() {
  return (
    <div>
      <Header appName="Hr App" />
      <main>
        <Box
          name="John"
          title="Employee"
          salary="2300"
          phone="03920029"
          email="John@email.com"
          animal="Bison"
        />
        <Box
          name="Mary"
          title="Employee"
          salary="2500"
          phone="03290029"
          email="Mary@email.com"
          animal="Fox"
        />
        <Box
          name="Jack"
          title="Employee"
          salary="2300"
          phone="02120029"
          email="Jack@email.com"
          animal="Capybara"
        />
        <Box
          name="Joao"
          title="CEO"
          salary="7200"
          phone="0291010"
          email="Joao@email.com"
          animal="Dog"
        />
      </main>
      <Footer className="REACT25" />
    </div>
  );
}

export default App;
