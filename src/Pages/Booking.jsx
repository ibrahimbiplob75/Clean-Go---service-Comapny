
import Container from '../Components/UI/Container';
import { useEffect, useState } from 'react';
import useAuth from '../Hook/useAuth';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import UseAxios from '../Hook/UseAxios';
import Loader from '../Components/UI/Loader';
import { toast } from 'react-toastify';


const Booking = () => {
  const { user } = useAuth();
  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [student_id, setStudent_id] = useState("");
  const Axios=UseAxios();

  const {id}=useParams()

  useEffect(() => {
    if (user?.email) {
      setEmail(user.email);
    }
  }, [user?.email]);

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

    const data = { studentName, email, date, timeSlot, student_id };
    console.log(data);
  };
  const {mutate}=useMutation({
      mutationKey:["Booking"],
      mutationFn:async(bookingData)=>{
          const res = await Axios.post("/user/create-booking", bookingData);
          console.log(res)
          if (res.data.acknowledged){
            toast("Booking Done");
          } return res;
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
            <div className="space-y-4 font-semibold text-2xl mt-10">
              Availiable Equipment
            </div>
            {service?.data?.equipment_list?.map((item, index) => (
              <p className="text-xl" key={item}>
                {index + 1} -{item}
              </p>
            ))}
          </div>
          <div>
            <div className="divider max-w-2xl"></div>
            <p className="text-4xl font-semibold">
              {service.data?.duration}
              <span className="text-xs">
                Room no {service.data?.room_no}
              </span>{" "}
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
                placeholder="name or Group Name"
                className="input input-bordered"
                required
                onBlur={(e) => setStudentName(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Student ID</span>
              </label>
              <input
                required
                className="input input-bordered"
                onBlur={(e) => setStudent_id(e.target.value)}
              ></input>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                readOnly
                placeholder="email"
                className="input input-bordered"
                required
                
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
                <option>8am. - 11am.</option>
                <option>11am. - 2pm.</option>
                <option>2pm. - 5pm.</option>
              </select>
            </div>

            <div className="form-control mt-2">
              <button
                type="button"
                onClick={() =>
                  mutate({
                    studentName,
                    email,
                    date,
                    timeSlot,
                    student_id,
                    status: "pending",
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
