import { useDispatch, useSelector } from "react-redux";
import { UserCard } from "./userCard";
import { fetchAllUsers } from "../redux/action";
import { useEffect } from "react";

export const UserList = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
