export const UserCard = ({ user }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
      <p className="text-gray-600 mt-2">Email: {user.email}</p>
      <p className="text-gray-600 mt-1">Phone: {user.phone}</p>
    </div>
  );
};
