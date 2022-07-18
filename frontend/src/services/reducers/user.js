const initialState = {
  id: "",
  email: "",
};

// eslint-disable-next-line default-param-last
export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, ...action.payload };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};
