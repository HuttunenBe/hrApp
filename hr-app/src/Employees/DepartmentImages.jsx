const GetDepartmentImage = (department) => {
  if (department === "Human Resources")
    return "https://images.pexels.com/photos/3862138/pexels-photo-3862138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  if (department === "Finance")
    return "https://images.pexels.com/photos/1181743/pexels-photo-1181743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  if (department === "Marketing")
    return "https://images.pexels.com/photos/3862146/pexels-photo-3862146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  if (department === "Sales")
    return "https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  if (department === "IT")
    return "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  if (department === "Project Management")
    return "https://images.pexels.com/photos/914931/pexels-photo-914931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  if (department === "Product Development")
    return "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1200";

  if (department === "Customer Service")
    return "https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  if (department === "Legal")
    return "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  if (department === "Operations")
    return "https://images.pexels.com/photos/140945/pexels-photo-140945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  if (department === "Business Analysis")
    return "https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  if (department === "Supply Chain")
    return "https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  if (department === "Quality Assurance")
    return "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
};

export default GetDepartmentImage;
