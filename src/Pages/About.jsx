
import { Link } from "react-router-dom";
import ibrahim from "../../src/assets/Images/Myproject.png"
const About = () => {
    return (
      <div>
        <div className="hero  min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={ibrahim}
              className="max-w-sm  md:max-w-xl rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Md Ibrahim Biplob</h1>
              <p className="py-6">
                Hello! I'm MD Ibrahim Biplob, a dedicated student of Computer
                Science and Engineering (CSE) with a passion for web
                development. Specializing in back-end web development, I've
                completed numerous projects and am enthusiastic about working as
                a Junior Web Developer to contribute my skills to innovative
                projects.
              </p>
              <Link
                to={"https://ibrahimbiplob.me/"}
                className="btn btn-primary"
              >
                Hire me!
              </Link>

              <Link
                to={"https://www.linkedin.com/in/ibrahimbiplob75/"}
                className="btn btn-success ml-5"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;