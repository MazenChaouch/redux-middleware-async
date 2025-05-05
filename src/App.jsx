import { UserList } from "./components/userList";

const App = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        User Directory
      </h1>
      <UserList />
    </div>
  );
};

export default App;
