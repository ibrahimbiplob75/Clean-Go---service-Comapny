import {  useQuery } from "@tanstack/react-query";
import UseAxios from "../Hook/UseAxios";
import ServiceCard from "../Components/ServiceCard";
import Container from "../Components/UI/Container";
import Loader from "../Components/UI/Loader";
import { useEffect, useState } from "react";

const Services = () => {
  const Axios = UseAxios();
  const [price,setPrice]=useState("")
  const [page, setPage] = useState(1);
  const [category,setCategory]=useState("")
  const [Category, SetCategory] = useState([]);

  // const Category = ["Specialty", "Home", "Business"];

  
  const limit = 6;

  useEffect(()=>{
    Axios.get("/categories").then(res=>res.data).then(data=>SetCategory(data));
  },[])
  
  
  
  const getServices = async () => {
    const response = await Axios.get(
      `/user/services/?sortField=details.pricing&sortOrder=${price}&category=${category}&page=${page}&limit=${limit}`
    );
    
    return response;
    
  };
    const {
      data: services,
      refetch,
      isLoading,
    } = useQuery({
      queryKey: ["services",price,category,page],
      queryFn: getServices,
    });
    if(isLoading){
        return <Loader></Loader>
    }
    console.log(services);

    
    const noOfpage = Math.ceil(services.data?.total / limit);
    console.log(noOfpage);

    const handlePrev = () => {
      if (page > 1) {
        setPage(page - 1);
      }
      // console.log("prev", page);
    };
    const handleNext = () => {
      if (page < noOfpage) {
        setPage(page + 1)
      }
      // console.log("next",page)
    };
    console.log("page value", page);
    return (
      <>
        <Container>
          <div className="my-12 flex justify-end items-center border-2 border-primary rounded-2xl p-5 gap-5">
            <h1 className="flex-1 font-semibold">Over 20 services to chose</h1>
            <div className="form-control">
              <select
                onChange={(e) => setCategory(e.target.value)}
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  Chose category
                </option>
                {Category.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <select
                onChange={(e) => setPrice(e.target.value)}
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  Price Range
                </option>
                <option value={"desc"}>High to low</option>
                <option value={"asc"}>Low to high</option>
              </select>
            </div>
          </div>
        </Container>
        <Container className="mb-64 mt-10">
          <div className="grid grid-cols-3 gap-10">
            {services?.data?.result.map((service) => (
              <ServiceCard key={service?._id} service={service}></ServiceCard>
            ))}
          </div>
          <div className="mt-10  text-center">
            <div className="join">
              <button
                onClick={handlePrev}
                className="join-item btn btn-outline"
              >
                Previous page
              </button>
              {isLoading ? (
                <Loader></Loader>
              ) : (
                [...Array(noOfpage)?.fill(0)].map((item, key) => (
                  <input
                    className="join-item btn btn-square"
                    type="radio"
                    name="options"
                    onClick={() => setPage(key + 1)}
                    aria-label={key + 1}
                  />
                ))
              )}

              <button
                onClick={handleNext}
                className="join-item btn btn-outline"
              >
                Next
              </button>
            </div>
          </div>
        </Container>
      </>
    );
};

export default Services;