import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  return (
    <div className="border-2 border-primary h-[650px] flex flex-col rounded-[15px] overflow-hidden transition-all hover:scale-105 hover:shadow-2xl group">
      {/* Image Section */}
      <div className="relative w-full h-[200px] bg-gray-100">
        <img
          src={service?.image}
          alt={service?.name}
          className="w-full h-full object-cover rounded-t-[15px] group-hover:brightness-90 transition-all"
        />
        <div className="absolute top-2 left-2 bg-primary text-white text-sm px-2 py-1 rounded-md">
          {service?.category}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-between p-4 bg-white rounded-b-[15px] transition-all">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-primary mb-2 text-center">
          {service?.name}
        </h1>

        {/* Description */}
        <div className="text-base text-gray-700 flex-1 text-center mb-2">
          <p className="truncate-3-lines">{service?.description}</p>
        </div>

        {/* Equipment List */}
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-gray-800">
            Equipment List:
          </h3>
          <ul className="list-disc pl-5 text-sm text-gray-600">
            {service?.equipment_list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Room Number and Duration */}
        <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
          <p>Room No: {service?.room_no}</p>
          <p>Duration: {service?.duration}</p>
        </div>

        {/* Book Button */}
        <Link
          to={`/booking/${service?._id}`}
          className="btn btn-primary w-full"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
