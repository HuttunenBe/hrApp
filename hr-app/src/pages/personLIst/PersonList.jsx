
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PersonCard from "../../components/Personcard/PersonCard";
import {
  calculateYearsInService,
  schedulReminder,
  animalToEmoji,
} from "./PersonListFunctions";
import GetDepartmentImage from "../../components/Employees/DepartmentImages";
import "../../components/Employees/employees.css";

const PersonList = ({ employeeData, onEdit, isLoading, error }) => {
  return (
    <div>
      <Header appName="Hr App" />

      <h2>Employee list</h2>

      <main>
        {isLoading ? (
          <div className="employeeTickets">
            {[1, 2, 3].map((number) => (
              <div className="employeeSkeleton" key={number}>
                <div className="employeeSkeletonInner">
                  <span className="testLabel">TEST</span>

                  <div className="skeletonPicture" />

                  <div className="skeletonLine title" />
                  <div className="skeletonLine" />
                  <div className="skeletonLine short" />
                  <div className="skeletonLine" />
                  <div className="skeletonLine short" />
                  <div className="skeletonLine" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <p className="message" role="alert">
            {error}
          </p>
        ) : (
          <div className="employeeTickets">
            {employeeData.map((employee) => {
              const yearsInService =
                calculateYearsInService(employee);

              const reminderEmoji =
                schedulReminder(yearsInService);

              const animalEmoji =
                animalToEmoji(employee.animal);

              const departmentImage =
                GetDepartmentImage(employee.department);

              return (
                <div key={employee.id} className="message">
                  <PersonCard
                    {...employee}
                    reminderEmoji={reminderEmoji}
                    animalEmoji={animalEmoji}
                    yearsInService={yearsInService}
                    departmentImage={departmentImage}
                    onEdit={onEdit}
                  />
                </div>
              );
            })}
          </div>
        )}
      </main>

      <Footer className="REACT25" />
    </div>
  );
};

export default PersonList;
