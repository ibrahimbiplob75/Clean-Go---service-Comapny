import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";

import { toast } from "react-toastify";
import UseAxios from "../Hook/UseAxios";
import useAuth from "../Hook/useAuth";
import Loader from "../Components/UI/Loader";
import Container from "../Components/UI/Container";
import UserRole from "../Hook/UserRole";
import { deleteUser } from "firebase/auth";

const ManageUser = () => {
  const Axios = UseAxios();
  const { user } = useAuth();
  const [role]=UserRole();

  const handleSubmitClick = () => {
    if (role === "student") {
      toast.error("Only moderators can Change.");
    }
  };

  const getUsers = async () => {
    const response = await Axios.get(`/users`);
    return response;
  };

  



  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const { mutate } = useMutation({
    mutationKey: ["users"],
    mutationFn: async (id) => {
      const res = await Axios.delete(`/user/cancel-users/${id}`);
      deleteUser(user)
        .then(() => {console.log("firebased data deleted")})
        .catch((error) => {console.log(error)});
      return res;
    },
    onSuccess: () => {
      toast("delete Done");
      refetch();
      QueryClient.invalidateQuries({ queryKey: ["myBooking"] });
    },
  });

  const RoledUser = async (id, role="moderator") => {
    const response = await Axios.patch(`/user/status/${id}`, {
      role,
    });
    return response;
  };

  
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
                <th>User Name</th>
                <th>User email</th>
                <th>User Role</th>
                <th>Remove User</th>
              </tr>
            </thead>
            <tbody>
              {users?.data?.map((user, index) => (
                <tr key={user._id} className="bg-base-200">
                  <th>{index + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td onMouseEnter={() => handleSubmitClick()}>
                    {role == "student" ? (
                      <button
                        disabled={role === "student"}
                        onClick={() => RoledUser(user?._id)}
                        className="btn btn-primary"
                      >
                        {"Update role"}
                      </button>
                    ) : (
                      <button
                        disabled={role === "student"}
                        onClick={() => RoledUser(user?._id)}
                        className="btn btn-success"
                      >
                        {user?.role}
                      </button>
                    )}
                  </td>
                  <td onMouseEnter={() => handleSubmitClick()}>
                    <button
                      disabled={role === "student"}
                      onClick={() => mutate(user?._id)}
                      className="btn btn-secondary"
                    >
                      Delete
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

export default ManageUser;
