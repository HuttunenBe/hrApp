const EmployeeForm = ({ handleChange, handleSubmit, employeesData }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h3>Enter Employee Details</h3>
      <label htmlFor="name">name:</label>
      <input
        type="text"
        name="name"
        value={employeesData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <label htmlFor="title">title</label>
      <input
        type="text"
        name="title"
        value={employeesData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <label htmlFor="salary">salary:</label>
      <input
        name="salary"
        type="number"
        value={employeesData.salary}
        onChange={handleChange}
        placeholder="Salary"
      />
      <label htmlFor="phone">phone</label>
      <input
        name="phone"
        type="number"
        value={employeesData.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <label htmlFor="email">email</label>
      <input
        name="email"
        type="text"
        value={employeesData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <label htmlFor="animal">animal</label>
      <input
        name="animal"
        type="text"
        value={employeesData.animal}
        onChange={handleChange}
        placeholder="Animal"
      />
      <label htmlFor="startDate">start date</label>
      <input
        name="startDate"
        type="date"
        value={employeesData.startDate}
        onChange={handleChange}
        placeholder="Start Date"
      />
      <label htmlFor="location">location</label>
      <input
        name="location"
        type="text"
        value={employeesData.location}
        onChange={handleChange}
        placeholder="Location"
      />
      <label htmlFor="department">depatment</label>
      <input
        name="department"
        type="text"
        value={employeesData.department}
        onChange={handleChange}
        placeholder="Department"
      />
      <label htmlFor="skills">skills</label>
      <input
        name="skills"
        type="text"
        value={employeesData.skills}
        onChange={handleChange}
        placeholder="Skills"
      />
      <button type="submit">Add Employee</button>
    </form>
  );
};
export default EmployeeForm;
