const calculateYearsInService = (employee) => {
  const currentDate = new Date();
  const startDate = new Date(employee.startDate);
  const yearsInService =
    (currentDate - startDate) / (1000 * 60 * 60 * 24 * 365);
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
const animalToEmoji = (animal) => {
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
  if (animal === "Eagle") return "🦅";
  if (animal === "Dolphin") return "🐬";
  return "🌱";
};
export { calculateYearsInService, schedulReminder, animalToEmoji };
