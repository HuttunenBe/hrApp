import PersonCard from "./PersonCard";
import { employees } from "./EmployeesData";



const calculateYearsInService = (employee) => {
  const currentDate = new Date();
  const startDate = new Date(employee.startDate);
  const yearsInService = (currentDate - startDate) / (1000 * 60 * 60 * 24 * 365);
  return yearsInService; 
};


const schedulReminder = (yearsOfService) => {
  if (yearsOfService === 5) {
    return "🎉 Schedule recognition meeting for 5 years.";
  } else if (yearsOfService === 10) {
    return "🎉 Schedule recognition meeting for 10 years";
  } else if (yearsOfService === 15) {
    return "🎉 Schedule recognition meeting for 15 years";
  } else if (yearsOfService < 0.5) {
    return "🔔 Schedule probation review!";
  }
};

const animalEmoji = (animal) => {
  if (animal === "Dog") return "🐶";
  if (animal === "Cat") return "🐱";
  if (animal === "Horse") return "🐴";
  if (animal === "Bison") return "🦬";
  if (animal === "Crocodile") return "🐊";
  if (animal === "Snake") return "🐍";
  if (animal === "Owl") return "🦉";
  if (animal === "Fox") return "🦊";
  if (animal === "Penguin") return "🐧";
  if (animal === "Chicken") return "🐔";
  if (animal === "Hawk") return "🦅";
  if (animal === "Dolphin") return "🐬";
};

const PersonList = () => {
  return (
    <div>
      <div className="tickets">
        {employees[0].map((employee) => {
          const yearsInService = calculateYearsInService(employee);
          const reminderEmoji = schedulReminder(yearsInService);
          return (
            <div key={employee.id} className = 'message'>
              <PersonCard {...employee} />
              <p>
                {employee.name} has worked {yearsInService.toFixed(1)} years in the
                company.
              </p>
              <p>{reminderEmoji}</p>
              <p>{animalEmoji(employee.animal)}</p>
              </div>
          );
        })}
      </div>
    </div>
  );
};




export default PersonList;
