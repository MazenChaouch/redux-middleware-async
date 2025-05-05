const initialState = {
  users: [
    { name: "Mazen", email: "m.chaouch007@gmail.com", phone: "55 234 543" },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "": {
      return;
    }
    default:
      return state;
  }
};
export default reducer;
