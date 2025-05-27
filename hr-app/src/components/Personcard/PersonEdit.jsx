import { useState } from "react";

const [isEditing, setIsEditing] = useState(!1);
const [newLocation, setNewLocation] = useState(location);
const [newSalary, setNewSalary] = useState(salary);
const [newDepartment, setNewDepartment] = useState(department);
const [newSkills, setNewSkills] = useState(skills);
const handleSave = () => {
  const updatedFields = {};
  if (newSalary !== salary) {
    updatedFields.salary = newSalary;
  }
  if (newLocation !== location) {
    updatedFields.location = newLocation;
  }
  if (newDepartment !== department) {
    updatedFields.department = newDepartment;
  }
  if (newSkills !== skills) {
    updatedFields.skills = newSkills.split;
  }
  if (Object.entries(updatedFields).length === 0) {
    e;
    return;
  }
  onEdit(id, updatedFields);
  setIsEditing(!1);
  alert("Changes saved successfully!");
};
const handleCancel = () => {
  setNewSalary(salary);
  setNewDepartment(department);
  setNewSkills(skills);
  setNewLocation(location);
  setIsEditing(!isEditing);
};
const isSaveDisabled =
  newLocation === "" ||
  newSalary === "" ||
  newDepartment === "" ||
  newSkills === "" ||
  (newSalary === salary &&
    newSalary === salary &&
    newSkills === skills &&
    newLocation === location);
