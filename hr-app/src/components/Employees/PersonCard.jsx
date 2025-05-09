import "./employees.css";

const PersonCard = (props) => {
  return (
    <div className="box2">
      <div className="box">
        <img src={props.departmentImage} id="departmentPicture" />

        <p className="ID">ID: {props.id}</p>
        <p>Name: {props.name}</p>
        <p>Title: {props.title}</p>
        <p>Salary: {props.salary}€</p>
        <p>Phone: {props.phone}</p>
        <p>Email: {props.email}</p>
        <p>
          Favorite Animal: {props.animal} {props.animalEmoji}
        </p>
        <p>Start Date: {props.startDate}</p>
        <p>Location: {props.location}</p>
        <p>Department: {props.department}</p>
        <div className="Skills">
          <p> Skills: {props.skills}</p>
        </div>
        <p>Years in Service: {props.yearsInService.toFixed(1)} years</p>
        <p>{props.reminderEmoji}</p>
      </div>
    </div>
  );
};

export default PersonCard;
