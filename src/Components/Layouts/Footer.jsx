
import { GrFacebook, GrTwitter, GrLinkedin } from 'react-icons/gr';
import Container from '../UI/Container';
const Footer = () => {
  return (
    <Container>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 justify-between gap-10">
        <div>
          <h1 className="text-xl font-semibold mb-2">Digital Lab Assistant</h1>
          <p className="max-w-[35ch] font-medium">
            Search and findout your neccessary project equipment from our lab as
            well as you can also buy from us your needed lab equipment.
          </p>
          <div className="flex gap-5 text-3xl text-primary mt-10">
            <GrFacebook className="cursor-pointer" />
            <GrLinkedin className="cursor-pointer" />
            <GrTwitter className="cursor-pointer" />
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-xl font-bold mb-2">Navigations</h1>
          <div className="flex items-center gap-2">
            <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">FAQs</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">
              Privacy Policy
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">
              Terms & Conditions
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-xl font-bold mb-2">Project</h1>
          <div className="flex items-center gap-2">
            <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">About</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">Team</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">
              Contact
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-xl font-bold mb-2">Contact Information</h1>
          <p className="font-medium">NITER,Noyarhat,Kohinur,Dhaka </p>
          <p className="font-medium">+019 1892 6163</p>
          <p className="font-medium">info@niter.cse.lab.com</p>
        </div>
      </div>
      <div className="divider"></div>
      <p className="mt-6 mb-10">
        Copyright © 2024 niter.cse.lab | Powered by niter.cse.lab.
      </p>
    </Container>
  );
};

export default Footer;
