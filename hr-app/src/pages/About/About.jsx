import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./about.css";
import {
    aboutImage1,
    aboutImage1Small,
    aboutImage1Medium,
    aboutImage1Large,
    aboutImage2,
    aboutImage2Small,
    aboutImage2Medium,
    aboutImage2Large,
    aboutImage3,
    aboutImage3Small,
    aboutImage3Medium,
    aboutImage3Large,
    aboutImage4,
    aboutImage4Small,
    aboutImage4Medium,
    aboutImage4Large,
    aboutBackup1,
    aboutBackup2,
    aboutBackup3,
    aboutBackup4,
} from "./aboutImageImport";
function About() {
    return (
        <div>
            <Header appName="Hr App" />
            <h2>HR App</h2>
            <main>
                <div className="textField">
                    <h3>About us</h3>
                    <section className="sectionOne">
                        <p>Welcome to the HR App!We strive to make managing employee data and department workflows simple and intuitive.Our goal is to empower HR professionals with the best tools to help their teams thrive.</p>
                        <img
                            src={aboutImage1}
                            className="imageOne"
                            srcSet={`
    ${aboutImage1Small} 640w,
    ${aboutImage1Medium} 1280w,
    ${aboutImage1Large} 1920w
  `}
                            sizes="(max-width: 640px) 640px, (max-width: 1280px) 1280px, max-width 1920 (1920px)"
                            alt="Smiling employees"
                            loading="lazy"
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = aboutBackup1;
                            }}
                        />
                    </section>
                    <section className="sectionTwo">
                        <div>
                            <h4>Our Mission</h4>
                            <p>To provide a seamless experience for managing employees,tracking service milestones,and fostering recognition through user-friendly interfaces and reliable features.</p>
                        </div>
                        <img
                            src={aboutImage2}
                            className="imageTwo"
                            srcSet={`
    ${aboutImage2Small} 640w,
    ${aboutImage2Medium} 1280w,
    ${aboutImage2Large} 1920w
  `}
                            sizes="(max-width: 640px) 640px, (max-width: 1280px) 1280px, max-width 1920 (1920px)"
                            alt="Laughing employee at office"
                            loading="lazy"
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = aboutBackup2;
                            }}
                        />
                    </section>
                    <section className="sectionThree">
                        <h4>Why Choose Us?</h4>
                        <p>
                            Our app integrates all essential HR functionalities into a single platform.From detailed employee profiles to department-specific resources,we keep everything organized and accessible.Plus,personalized reminders
                            help you celebrate your team's achievements on time.
                        </p>
                        <img
                            src={aboutImage3}
                            className="imageThree"
                            srcSet={`
    ${aboutImage3Small} 640w,
    ${aboutImage3Medium} 1280w,
    ${aboutImage3Large} 1920w
  `}
                            sizes="(max-width: 640px) 640px, (max-width: 1280px) 1280px, max-width 1920 (1920px)"
                            alt="Team members raisin their hand and smiling"
                            loading="lazy"
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = aboutBackup3;
                            }}
                        />
                    </section>
                    <section className="sectionFour">
                        <img
                            src={aboutImage4}
                            className="imageFour"
                            srcSet={`
    ${aboutImage4Small} 640w,
    ${aboutImage4Medium} 1280w,
    ${aboutImage4Large} 1920w
  `}
                            sizes="(max-width: 640px) 640px, (max-width: 1280px) 1280px, max-width 1920 (1920px)"
                            alt="Meeting at office"
                            loading="lazy"
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = aboutBackup4;
                            }}
                        />
                        <div>
                            <h4>Join Our Community</h4>
                            <p>We value collaboration and constant improvement.Join our growing user base and help us shape the future of HR management software.Your feedback matters!</p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer className="REACT25" />
        </div>
    );
}
export default About;
