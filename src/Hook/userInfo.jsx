import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";
import useAuth from "./useAuth";


const UserInfo = () => {
  const { user, loading } = useAuth();
  const Axios = UseAxios();

  const { data: email = "", isLoading } = useQuery({
    queryKey: ["id", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await Axios(`/users/${user?.email}`);
      return data.email;
    },
  });

  //   Fetch user info using logged in user email

  return [email, isLoading];
};

export default UserInfo;
