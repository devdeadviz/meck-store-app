const authReducer = (state, action) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return {
        ...state,
        foundUser: action.payload.user,
        encodedToken: action.payload.encodedToken,
      };
    default:
      return state;
  }
};

export { authReducer };
