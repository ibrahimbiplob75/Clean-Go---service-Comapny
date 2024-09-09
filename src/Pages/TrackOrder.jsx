import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import UseAxios from "../Hook/UseAxios";
import useAuth from "../Hook/useAuth";
import Container from "../Components/UI/Container";
import Loader from "../Components/UI/Loader";
import { toast } from "react-toastify";

const TrackOrder = () => {
  const Axios=UseAxios();
  const {user}=useAuth()
  const email=user?.email
  const getBooking = async () => {
    const response = await Axios.get(
      `/user/bookings?email=${email}`
    );

    return response;
  };

  const {data:booking,isLoading,refetch}=useQuery({
    queryKey:["myBooking"],
    queryFn:getBooking,
    
    
  })


   const { mutate } = useMutation({
     mutationKey: ["booking"],
     mutationFn: async (id) => {
       const res = await Axios.delete(`/user/cancel-booking/${id}`);
       return res;
     },
     onSuccess:()=>{
      toast("delete Done");
      refetch();
      QueryClient.invalidateQuries({ queryKey: ["myBooking"] });
      

     }
   });
  
  if (isLoading) {
    return <Loader></Loader>;
  }
  
  return (
    <div>
      <Container>
        <div className="overflow-x-auto  min-h-screen">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Booking ID</th>
                <th>Booked By</th>
                <th>Student ID</th>
                <th>date of Booking</th>
                <th>Cancel Booking</th>
              </tr>
            </thead>
            <tbody>
              {booking?.data?.map((booked, index) => (
                <tr className="bg-base-200">
                  <th>{index + 1}</th>
                  <td>{booked._id}</td>
                  <td>{booked.studentName}</td>
                  <td>{booked.student_id}</td>
                  <td>{booked.date}</td>
                  <td>
                    <button
                      onClick={() => mutate(booked._id)}
                      className="btn btn-secondary"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default TrackOrder;
