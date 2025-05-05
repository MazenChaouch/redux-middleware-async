import axios from "axios";

export const fetchUsersLoading = () => {
  return { type: "fetchUsersLoading" };
};

export const fetchUsersSuccess = (users) => {
  return { type: "fetchUsersSuccess", payload: users };
};

export const fetchUsersError = (error) => {
  return { type: "fetchUsersError", payload: error };
};

export const fetchAllUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersLoading);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        dispatch(fetchUsersSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchUsersError(err.message));
      });
  };
};
