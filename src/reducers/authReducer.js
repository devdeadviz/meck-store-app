const authReducer = (state, action) => {
  switch (action.type) {
    case "FOUND_USER":
      return { ...state, foundUser: action.payload };
    case "TOKEN":
      return { ...state, encodedToken: action.payload };
    default:
      return state;
  }
};

export { authReducer };
