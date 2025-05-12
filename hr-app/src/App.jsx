import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { employees } from "./components/Employees/EmployeesData";
import "./App.css";
import About from "./pages/About";
import PersonList from "./pages/PersonList";
import AddEmployee from "./pages/AddEmployee";
import axios from "axios";


const App = () => {
  const [employeeData, setEmployeeData] = useState(employees);

  useEffect(() => {
    axios.get("http://localhost:3002/employees").then((res) => {
      setEmployeeData(res.data);
    });
  }, []);

  const addEmployeeHandler = (newEmployee) => {
    console.log("Adding new employee:", newEmployee);
    setEmployeeData((prev) => [...prev, { ...newEmployee, id: Date.now() }]);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PersonList employeeData={employeeData} setEmployeeData={setEmployeeData}/>,
    },
  
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/addEmployee",
      element: <AddEmployee onAddEmployee={addEmployeeHandler} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;