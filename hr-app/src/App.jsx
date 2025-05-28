import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import About from "./pages/About/About";

import PersonList from "./pages/personLIst/PersonList";
import AddEmployee from "./pages/addEmployee/AddEmployee";
import useAxios from "../src/hooks/useAxios";

const App = () => {
  const [employeeData, setEmployeeData] = useState([]);

  const { get, patch } = useAxios();

  useEffect(() => {
    get("/employees")
      .then((response) => {
        setEmployeeData(response.data);
      })
      .catch((error) => {
        console.error("Error loading employees", error);
      });
  }, []);

  const addEmployeeHandler = (newEmployee) => {
    setEmployeeData((prev) => [...prev, newEmployee]);
  };

  const handleEditChange = (id, updatedFields) => {
    patch(`/employees/${id}`, updatedFields)
      .then((res) => {
        setEmployeeData((prev) =>
          prev.map((employee) => (employee.id === id ? res.data : employee))
        );
      })
      .catch((error) => {
        console.error("Failed to update price:", error);
      });
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
              onEdit={handleEditChange} //
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
