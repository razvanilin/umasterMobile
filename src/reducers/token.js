const token = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_TOKEN":
      return action.response;
      break;
    default:
      return state;
  }
}

export default token;
