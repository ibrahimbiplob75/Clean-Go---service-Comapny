
import Container from '../Components/UI/Container';
import { useState } from 'react';
import useAuth from '../Hook/useAuth';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import UseAxios from '../Hook/UseAxios';
import Loader from '../Components/UI/Loader';

const Booking = () => {
  const { user } = useAuth();
  const [customerNane, setcustomerNane] = useState("");
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [address, setAddress] = useState('');
  const Axios=UseAxios();

  const {id}=useParams()
  console.log(id)

  const {data:service,isLoading}=useQuery({
    queryKey:["Booking"],
    queryFn:async()=>{
      const res = await Axios.get(`/user/service/${id}`);
      return res
    }
    
  })
  // console.log(service?.data)

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { customerNane, email, date, timeSlot, address };
    console.log(data);
  };
  const {mutate}=useMutation({
      mutationKey:["Booking"],
      mutationFn:async(bookingData)=>{
          const res = await Axios.post("/user/create-booking", bookingData);
          return res
      }
  })
  
  
  if(isLoading){
    return <Loader></Loader>
  }

  
   

  

  return (
    <Container className="my-40">
      <div className="flex">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold">{service?.data?.name}</h1>
            <p className="max-w-[60ch] text-xl mt-5">
              {service?.data?.description}
            </p>
            <div className="space-y-4 font-semibold mt-10">Features</div>
            {service?.data?.details?.services_included?.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div>
            <div className="divider max-w-2xl"></div>
            <p className="text-4xl font-semibold">
              {service.data?.details?.pricing}{" "}
              <span className="text-xs">vat included</span>{" "}
            </p>
          </div>
        </div>
        <div className="card w-full max-w-md shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
                onBlur={(e) => setcustomerNane(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                onBlur={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                className="input input-bordered"
                required
                onBlur={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Time Slot</span>
              </label>
              <select
                className="input input-bordered"
                required
                onChange={(e) => setTimeSlot(e.target.value)}
              >
                <option>8am. - 12pm.</option>
                <option>12pm. - 6pm.</option>
                <option>6pm. - 10pm.</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <textarea
                rows={12}
                required
                className="input input-bordered"
                onBlur={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>

            <div className="form-control mt-2">
              <button
                type="button"
                onClick={() =>
                  mutate({
                    customerNane,
                    email,
                    date,
                    timeSlot,
                    address,
                    status:"pendind"
                  })
                }
                className="btn btn-primary"
              >
                Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Booking;
