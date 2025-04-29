import { useState } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const AddEmployee = ({ onAddEmployee }) => {
  const [employeesData, setEmployeesData] = useState({
    id: "",
    name: "",
    title: "",
    salary: "",
    phone: "",
    email: "",
    animal: "",
    startDate: "",
    location: "",
    department: "",
    skills: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeesData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: Date.now(),
      ...employeesData,
      salary: parseFloat(employeesData.salary),
      skills: employeesData.skills.split(","),
    };

    onAddEmployee(newEmployee);

    setEmployeesData({
      id: "",
      name: "",
      title: "",
      salary: "",
      phone: "",
      email: "",
      animal: "",
      startDate: "",
      location: "",
      department: "",
      skills: "",
    });
  };

  return (
    <div>
      <Header appName="Hr App" />
      <main>
        <div>
          <h1>Add a new employee</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={employeesData.title}
              onChange={handleChange}
              placeholder="Title"
            />
            <input
              name="salary"
              type="number"
              value={employeesData.salary}
              onChange={handleChange}
              placeholder="Salary"
            />
            <input
              name="phone"
              type="number"
              value={employeesData.phone}
              onChange={handleChange}
              placeholder="Phone"
            />
            <input
              name="email"
              type="text"
              value={employeesData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              name="animal"
              type="text"
              value={employeesData.animal}
              onChange={handleChange}
              placeholder="Animal"
            />
            <input
              name="startDate"
              type="number"
              value={employeesData.startDate}
              onChange={handleChange}
              placeholder="Start Date"
            />
            <input
              name="location"
              type="text"
              value={employeesData.location}
              onChange={handleChange}
              placeholder="Location"
            />
            <input
              name="department"
              type="text"
              value={employeesData.department}
              onChange={handleChange}
              placeholder="Department"
            />
            <input
              name="skills"
              type="text"
              value={employeesData.skills}
              onChange={handleChange}
              placeholder="Skills"
            />
            <button type="submit">Add Employee</button>
          </form>
        </div>
      </main>
      <Footer className="REACT25" />
    </div>
  );
};

export default AddEmployee;
