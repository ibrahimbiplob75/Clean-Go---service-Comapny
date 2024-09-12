import React, { useEffect, useState } from "react";
import UseAxios from "../Hook/UseAxios";
import { useParams } from "react-router-dom"; // To get equipment id from URL
import { toast } from "react-toastify";
import UserRole from "../Hook/UserRole";

const UpdateEquipment = () => {
  const [role] = UserRole();
  const Axios = UseAxios();
  const { id } = useParams(); // Assuming the equipment ID is passed via the URL
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    equipment_list: [""],
    room_no: "",
    duration: "",
    image: "",
  });

  // Fetch equipment data by ID when component loads
  useEffect(() => {
    const fetchEquipmentData = async () => {
      try {
        const res = await Axios.get(`/user/service/${id}`);
        setFormData(res.data);
      } catch (error) {
        console.error("Failed to fetch equipment data", error);
      }
    };

    fetchEquipmentData();
  }, [id, Axios]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle equipment list input change
  const handleEquipmentChange = (index, value) => {
    const newEquipmentList = [...formData.equipment_list];
    newEquipmentList[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      equipment_list: newEquipmentList,
    }));
  };

  // Add new equipment field
  const addEquipmentField = () => {
    setFormData((prevData) => ({
      ...prevData,
      equipment_list: [...prevData.equipment_list, ""],
    }));
  };

  // Handle form submission to update the data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.put(`/admin/update-equipment/${id}`, formData);
      if (res.data) {
        toast.success("Equipment updated successfully");
      }
    } catch (error) {
      console.error("Failed to update equipment", error);
      toast.error("Failed to update equipment");
    }
  };
  console.log(formData)
  return (
    <div className="w-4/5 mx-auto p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Update Equipment</h2>
      <form onSubmit={handleSubmit}>
        {/* Project Name */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="name"
          >
            Project Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="input input-bordered w-full p-3"
            placeholder="Enter project name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            className="input input-bordered w-full p-3"
            placeholder="Enter category"
            value={formData.category}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="input input-bordered w-full p-3 h-24"
            placeholder="Enter description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Equipment List */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Equipment List
          </label>
          {formData.equipment_list.map((equipment, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                name={`equipment-${index}`}
                className="input input-bordered w-full p-3"
                placeholder="Enter equipment"
                value={equipment}
                onChange={(e) => handleEquipmentChange(index, e.target.value)}
                required
              />
            </div>
          ))}
          <button
            type="button"
            className="mt-2 bg-blue-500 text-white p-2 rounded-md"
            onClick={addEquipmentField}
          >
            Add More Equipment
          </button>
        </div>

        {/* Room No */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="room_no"
          >
            Room No
          </label>
          <input
            type="number"
            id="room_no"
            name="room_no"
            className="input input-bordered w-full p-3"
            placeholder="Enter room number"
            value={formData.room_no}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Duration */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="duration"
          >
            Duration
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            className="input input-bordered w-full p-3"
            placeholder="Enter duration"
            value={formData.duration}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="image"
          >
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            className="input input-bordered w-full p-3"
            placeholder="Enter image URL"
            value={formData.image}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div
          onMouseEnter={() =>
            role === "student" && toast.error("Only moderators can submit.")
          }
          className="text-center"
        >
          <button
            type="submit"
            className={`p-3 rounded-lg w-full ${
              role === "student"
                ? "bg-gray-400"
                : "bg-green-500 hover:bg-green-600"
            } text-white`}
            disabled={role === "student"}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEquipment;
