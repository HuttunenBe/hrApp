import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import axios from "axios";
import About from "./pages/About";
import PersonList from "./pages/PersonList";
import AddEmployee from "./pages/AddEmployee";
import "./App.css";

const App = () => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3005/employees")
      .then((response) => {
        setEmployeeData(response.data);
      })
      .catch((error) => {
        console.error("Error loading employees", error);
      });
  }, []);


  
  const addEmployeeHandler = (newEmployee) => {
  
    setEmployeeData((prev) => [...prev, { ...newEmployee }]);
  };

  return (
   
    <BrowserRouter>

      <Routes>
        <Route
          path="/"
          element={
            <PersonList
              employeeData={employeeData}
              setEmployeeData={setEmployeeData}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/addEmployee"
          element={<AddEmployee onAddEmployee={addEmployeeHandler} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
