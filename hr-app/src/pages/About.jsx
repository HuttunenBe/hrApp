import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./about.css";

function About() {
  return (
    <div>
      <Header appName="Hr App" />
      <h2>HR App</h2>
      <main>
        <div className="textField">
          <h3>About us</h3>

          <section className="sectionOne">
            <p>
              Welcome to the HR App! We strive to make managing employee data
              and department workflows simple and intuitive. Our goal is to
              empower HR professionals with the best tools to help their teams
              thrive.
            </p>
            <img
              src="https://images.pexels.com/photos/7658435/pexels-photo-7658435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="imageOne"
              alt="Employee helping others"
              loading="lazy"
            />
          </section>

          <section className="sectionTwo">
            <div>
              <h4>Our Mission</h4>
              <p>
                To provide a seamless experience for managing employees,
                tracking service milestones, and fostering recognition through
                user-friendly interfaces and reliable features.
              </p>
            </div>
            <img
              src="https://images.pexels.com/photos/6457579/pexels-photo-6457579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="imageTwo"
              alt="Group of powerful women walking"
              loading="lazy"
            />
          </section>

          <section className="sectionThree">
            <p>
              {" "}
              <h4>Why Choose Us?</h4>
              Our app integrates all essential HR functionalities into a single
              platform. From detailed employee profiles to department-specific
              resources, we keep everything organized and accessible. Plus,
              personalized reminders help you celebrate your team's achievements
              on time.
            </p>
            <img
              src="https://images.pexels.com/photos/7688174/pexels-photo-7688174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="imageThree"
              alt="Team members giving each other high fives"
              loading="lazy"
            />
          </section>

          <section className="sectionFour">
            <img
              src="https://images.pexels.com/photos/7654603/pexels-photo-7654603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="imageFour"
              alt="Meeting at office"
              loading="lazy"
            />
            <div>
              <h4>Join Our Community</h4>
              <p>
                We value collaboration and constant improvement. Join our
                growing user base and help us shape the future of HR management
                software. Your feedback matters!
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer className="REACT25" />
    </div>
  );
}

export default About;
