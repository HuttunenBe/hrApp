import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { employees } from "./components/Employees/EmployeesData";
import "./App.css";
import About from "./pages/About";
import PersonList from "./pages/PersonList";
import AddEmployee from "./pages/AddEmployee";

const App = () => {
  const [employeeData, setEmployeeData] = useState(employees);

  const addEmployeeHandler = (newEmployee) => {
    console.log("Adding new employee:", newEmployee);
    setEmployeeData((prev) => [...prev, { ...newEmployee, id: Date.now() }]);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PersonList employeeData={employeeData} />,
    },
    {
      path: "/PersonList",
      element: <PersonList employeeData={employeeData} />,
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
