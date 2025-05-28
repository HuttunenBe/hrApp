import Header from "../../components/Header/Header";import Footer from "../../components/Footer/Footer";import PersonCard from "../../components/Personcard/PersonCard";import{calculateYearsInService,schedulReminder,animalToEmoji,}from "./PersonListFunctions";import GetDepartmentImage from "../../components/Employees/DepartmentImages";const PersonList=({employeeData,onEdit})=>{return(<div><Header appName="Hr App"/><h2>Employee list</h2><main><div className="employeeTickets">{employeeData.map((employee)=>{const yearsInService=calculateYearsInService(employee);const reminderEmoji=schedulReminder(yearsInService);const animalEmoji=animalToEmoji(employee.animal);const departmentImage=GetDepartmentImage(employee.department);return(<div key={employee.id}className="message"><PersonCard
{...employee}
reminderEmoji={reminderEmoji}
animalEmoji={animalEmoji}
yearsInService={yearsInService}
departmentImage={departmentImage}
onEdit={onEdit}/></div>)})}</div></main><Footer className="REACT25"/></div>)};export default PersonList