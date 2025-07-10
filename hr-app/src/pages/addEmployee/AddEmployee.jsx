import { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./addEmployee.css";
import useAxios from "../../hooks/useAxios";
import EmployeeForm from "./EmployeeForm";

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
  const { post } = useAxios();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeesData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      ...employeesData,
      id: Date.now().toString(),
      salary: parseFloat(employeesData.salary),
      skills: employeesData.skills.split(","),
    };
    post("/employees", newEmployee)
      .then((response) => {
        onAddEmployee(response.data);
        alert("Employee added successfully!");
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
        <EmployeeForm
          employeesData={employeesData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </main>
      <Footer className="REACT25" />
    </div>
  );
};
export default AddEmployee;
