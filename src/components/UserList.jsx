import { UserCard } from "./userCard";

export const UserList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { name: "Mazen", email: "m.chaouch007@gmail.com", phone: "55 234 543" },
      ].map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
