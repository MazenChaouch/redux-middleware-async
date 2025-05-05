import { useSelector } from "react-redux";
import { UserCard } from "./userCard";

export const UserList = () => {
  const users = useSelector((state) => state.users);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
