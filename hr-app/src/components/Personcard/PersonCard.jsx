import "../Employees/employees.css";
import { useState } from "react";
const PersonCard = ({
  id,
  name,
  title,
  salary,
  phone,
  email,
  animal,
  animalEmoji,
  startDate,
  location,
  department,
  skills = [],
  yearsInService,
  reminder,
  departmentImage,
  onEdit,
  reminderEmoji,
  onSkillsChange,
  onSalaryChange,
  onLocationChange,
  onDepartmentChange,
  ...rest
}) => {
  const [isEditing, setIsEditing] = useState(!1);
  const [newLocation, setNewLocation] = useState(location);
  const [newSalary, setNewSalary] = useState(salary);
  const [newDepartment, setNewDepartment] = useState(department);
  const [newSkills, setNewSkills] = useState(skills. join(", "));
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
    if (newSkills !== skills.join(", ")) {
      updatedFields.skills = newSkills  .split(",")
  .map(skill => skill.trim());
    }
    if (Object.entries(updatedFields).length === 0) {
      return;
    }
    onEdit(id, updatedFields);
    setIsEditing(!1);
    alert("Changes saved successfully!");
  };
  const handleCancel = () => {
    setNewSalary(salary);
    setNewDepartment(department);
    setNewSkills(skills.join(", "));
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
      newSkills === skills.join(", ") &&
      newLocation === location);
  return (
    <div className="container">
      <div className="containerTwo">
        <img
          src={departmentImage}
          id="departmentPicture"
          alt="department images"
          loading="lazy"
        />
        <p className="id">Id:{id}</p>
        <p>Name:{name}</p>
        <p>Title:{title}</p>
        <div className="editSave">
          {isEditing ? (
            <div>
              Salary:{" "}
              <input
                type="text"
                value={newSalary}
                onChange={(e) => setNewSalary(e.target.value)}
              />
            </div>
          ) : (
            <div>
              <p className="salary">Salary:{salary}</p>
            </div>
          )}
        </div>
        <p>Phone:{phone}</p>
        <p>Email:{email}</p>
        <p>
          Favorite Animal:{animal}
          {animalEmoji}
        </p>
        <p>Start Date:{startDate}</p>
        <div className="editSave">
          {isEditing ? (
            <div>
              Location:{" "}
              <input
                type="text"
                value={newLocation}
                onChange={(e) => setNewLocation(e.target.value)}
              />
            </div>
          ) : (
            <div>
              <p className="location">Location:{location}</p>
            </div>
          )}
        </div>
        <div className="editSave">
          {isEditing ? (
            <div>
              Department:{" "}
              <input
                type="text"
                value={newDepartment}
                onChange={(e) => setNewDepartment(e.target.value)}
              />
            </div>
          ) : (
            <div>
              <p className="department">Department:{department}</p>
            </div>
          )}
        </div>
        <div className="Skills">
          <div className="editSave">
            {isEditing ? (
              <div>
                Skills:{" "}
                <input
                  type="text"
                  value={newSkills}
                  onChange={(e) => setNewSkills(e.target.value)}
                />
              </div>
            ) : (
              <div>
                <p className="skills">Skills:{skills && skills.join(", ")}</p>
              </div>
            )}
          </div>
        </div>
        <p>Years in Service:{yearsInService.toFixed(1)}years</p>
        <p>{reminderEmoji}</p>
        {isEditing ? (
          <>
            <button onClick={handleSave} disabled={isSaveDisabled}>
              Save
            </button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <button className="secondary" onClick={() => setIsEditing(!0)}>
            Edit
          </button>
        )}
      </div>
    </div>
  );
};
export default PersonCard;
