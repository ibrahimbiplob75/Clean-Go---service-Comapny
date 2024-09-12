import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";
import useAuth from "./useAuth";


const UserRole = () => {
  const { user, loading } = useAuth();
  const Axios = UseAxios();

  const { data: role = "", isLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await Axios(`/users/${user?.email}`);
      return data.role;
    },
  });

  //   Fetch user info using logged in user email

  return [role, isLoading];
};

export default UserRole;
