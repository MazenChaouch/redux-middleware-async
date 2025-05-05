const initialState = {
  users: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchUsersLoading": {
      return { ...state, loading: true };
    }
    case "fetchUsersSuccess": {
      return { ...state, users: action.payload, loading: false };
    }
    case "fetchUsersError": {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
};
export default reducer;
