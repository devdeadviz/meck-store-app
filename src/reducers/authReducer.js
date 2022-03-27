const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        foundUser: action.payload.foundUser,
        encodedToken: action.payload.encodedToken,
      };
    default:
      return state;
  }
};

export { authReducer };
