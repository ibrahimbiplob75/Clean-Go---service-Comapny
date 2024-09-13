import { Link } from 'react-router-dom';
import IntroImage from '../../src/assets/Images/compLab.jpg';
import Container from '../Components/UI/Container';
import Services from './Services';

const Home = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 py-32 gap-12">
        <div className="flex-1 flex flex-col justify-between py-14 ">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-start">
            <span>Digital Lab Assistant</span> <br />
            <span className="text-primary">for NITER CSE</span>
          </h1>
          <p className="my-5 max-w-[65ch]">
            Search and findout your neccessary project equipment from our lab as
            well as you can also buy from us your needed lab equipment.
          </p>
          <div className="space-x-5">
            <Link to="/services" className="btn btn-sm md:btn-lg btn-primary">
              Book a Equipment
            </Link>
            <Link to="/about" className="btn btn-sm md:btn-lg">
              Read More
            </Link>
          </div>
          <div className="divider"></div>
          <div className="flex items-center gap-5">
            <div className="avatar-group -space-x-6">
              <div className="avatar">
                <div className="w-14">
                  <img src="https://scontent.fdac24-4.fna.fbcdn.net/v/t1.18169-9/23132080_2003143173346456_2041927176709466138_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=53a332&_nc_ohc=VxTteNCE5yAQ7kNvgH5oeC7&_nc_ht=scontent.fdac24-4.fna&oh=00_AYBdo7hGs4jVyVF18L_wYqIuEZNB3BTnKD0_dSlb5pbbEg&oe=670C1809" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-14">
                  <img src="https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/335005038_872190577210353_7537050454134709788_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=jE2HB7FhHAwQ7kNvgGE1dBZ&_nc_ht=scontent.fdac24-5.fna&_nc_gid=AKEGQYEwbU416N1sPf5QokZ&oh=00_AYBVIS8o7RvKDIIO_FjRkZmpoegtxlt4AC6Zm3HtbI6CDQ&oe=66EA6B6D" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-14">
                  <img src="https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/366745801_2496059657251419_1686484565883546907_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=b2wLWLsfsqEQ7kNvgENmhED&_nc_ht=scontent.fdac24-3.fna&_nc_gid=AP0W_cxYuQeavUF2kp-aI72&oh=00_AYDBxg6sv4SS5fdhRiuzTBGnNWwi5SUB3pooH0vGfZvboA&oe=66EA7D2B" />
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold">Rated 5 out of 5 by our students</p>
            </div>
          </div>
        </div>
        <div className="h-[600px] w-full bg-green-500 flex-1 rounded-3xl overflow-hidden ">
          <img
            src={IntroImage}
            alt="landing"
            className="w-full h-full object-cover "
          />
        </div>
      </div>
      <div>
        <h1 className="text-5xl font-bold text-center text-pink-700 mt-10">
          Our Project Equipment
        </h1>
        <Services></Services>
      </div>
    </Container>
  );
};

export default Home;
