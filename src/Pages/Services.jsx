import {  useQuery } from "@tanstack/react-query";
import UseAxios from "../Hook/UseAxios";
import ServiceCard from "../Components/ServiceCard";
import Container from "../Components/UI/Container";
import Loader from "../Components/UI/Loader";

const Services = () => {
  const Axios = UseAxios();

  const getServices = async () => {
    const res= await Axios.get("/user/services");
    console.log(res);
    return res;
    
  };
    const {
      data: services,
      refetch,
      isLoading,
    } = useQuery({
      queryKey: ["services"],
      queryFn: getServices,
    });
    if(isLoading){
        return <Loader></Loader>
    }
    console.log(services)
    return (
      <Container className="mb-64 mt-10">
        <div className="grid grid-cols-3 gap-10">
          {services?.data?.result.map((service) => (
            <ServiceCard key={service?._id} service={service}></ServiceCard>
          ))}
        </div>
      </Container>
    );
};

export default Services;