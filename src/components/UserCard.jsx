export const UserCard = ({ user }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1">
      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xl font-medium mb-3">
        {user.name.charAt(0)}
      </div>
      <h3 className="text-lg font-medium text-gray-900">{user.name}</h3>
      <p className="text-gray-500 text-sm mt-1">{user.email}</p>
      <p className="text-gray-500 text-sm mt-1">{user.phone}</p>
    </div>
  );
};
