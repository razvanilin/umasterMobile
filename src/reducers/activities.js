const activities = (state = [], action) => {
  switch (action.type) {
    case "GET_ACTIVITIES":
      return action.response;
      break;
    default:
      return state;
  }
}

export default activities;
