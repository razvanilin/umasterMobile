const user = (state = {}, action) => {
  switch (action.type) {
    case "GET_USER":
      return action.response;
      break;
    default:
      return state;
  }
}

export default user;
