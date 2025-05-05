import { UserList } from "./components/userList";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-50 to-purple-100">
      <div className="container mx-auto p-6 md:p-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-8 text-center animate-fade-in">
          User Directory
        </h1>
        <UserList />
      </div>
    </div>
  );
};

export default App;
