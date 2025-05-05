import { useDispatch } from "react-redux";
import { UserList } from "./components/userList";
import { addUser } from "./redux/action";

const App = () => {
  const dispatch = useDispatch();
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        User Directory
      </h1>
      <UserList />
      <button onClick={() => dispatch(addUser())}>add User</button>
    </div>
  );
};

export default App;
