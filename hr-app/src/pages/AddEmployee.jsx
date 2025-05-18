import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./addEmployee.css";

const AddEmployee = ({ onAddEmployee }) => {
  const [employeesData, setEmployeesData] = useState({
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

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeesData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      ...employeesData,
      id: Date.now(),
      salary: parseFloat(employeesData.salary),
      skills: employeesData.skills.split(","),
    };

    axios
      .post("http://localhost:3005/employees", newEmployee)
      .then((response) => {
        onAddEmployee(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Failed to add employee:", error);
      });

    setEmployeesData({
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
      <h2>Add a New Employee</h2>
      <main>
        <div>
          <form onSubmit={handleSubmit}>
            <h3>Enter employee details</h3>

            <input
              type="text"
              name="name"
              value={employeesData.name}
              onChange={handleChange}
              placeholder="Name"
            />

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
              type="date"
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
