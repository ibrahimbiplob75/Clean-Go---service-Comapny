import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import UserInfo from "../Hook/userInfo";
import UseAxios from "../Hook/UseAxios";

const ServiceCard = ({ service }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email]=UserInfo();
  const Axios=UseAxios()

  const handleAddToCart = async () => {
    const cartData = {
      userId:email, 
      productId: service?._id,
      productName: service?.name,
      productPrice: service?.price,
      productImage: service?.image,
    };

    try {
      await Axios.post('/user/create-cart',cartData);
      alert('Product added to cart successfully');
      setIsModalOpen(false); 
    } catch (error) {
      console.error('Error adding product to cart:', error);
      alert('Failed to add product to cart');
    }
  };

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

        {/* Book and Add to Cart Buttons */}
        <div className="flex gap-3">
          <Link
            to={`/booking/${service?._id}`}
            className="btn btn-primary w-1/2"
          >
            Book Now
          </Link>
          <button
            className="btn btn-secondary w-1/2"
            onClick={() => setIsModalOpen(true)}
          >
            Add to Cart({service?.price})
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
            <h3 className="text-xl font-semibold mb-4">
              Confirm Add to Cart
            </h3>
            <p className="text-gray-600 mb-6">
              Do you want to add <strong>{service?.name}</strong> to your cart?
            </p>
            <div className="flex gap-4 justify-end">
              <button
                className="btn btn-outline"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary"
                onClick={handleAddToCart}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
