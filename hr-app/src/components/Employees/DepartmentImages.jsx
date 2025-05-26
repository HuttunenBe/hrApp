const GetDepartmentImage = (department) => {
  if (department === "Human Resource Management")
    return "src/components/Employees/DepatmentImages/humanRecourses.jpg";

  if (department === "Finance")
    return "src/components/Employees/DepatmentImages/finance.jpg";

  if (department === "Supply Chain")
    return "src/components/Employees/DepatmentImages/supplyChain.jpg";

  if (department === "Marketing")
    return "src/components/Employees/DepatmentImages/marketing.jpg";

  if (department === "Sales")
    return "src/components/Employees/DepatmentImages/sales.jpg";

  if (department === "IT")
    return "src/components/Employees/DepatmentImages/it.jpg";

  if (department === "Project Management")
    return "src/components/Employees/DepatmentImages/projectManagement.jpg";

  if (department === "Product Development")
    return "src/components/Employees/DepatmentImages/productDevelopment.jpg";

  if (department === "Customer Service")
    return "src/components/Employees/DepatmentImages/customerService.jpg";

  if (department === "Legal")
    return "src/components/Employees/DepatmentImages/legal.jpg";

  if (department === "Business Analysis")
    return "src/components/Employees/DepatmentImages/businessAnalysis.jpg";

  if (department === "Quality Assurance")
    return "src/components/Employees/DepatmentImages/qualityAssurance.jpg";

  return "src/components/Employees/DepatmentImages/default.jpg";
};

export default GetDepartmentImage;
