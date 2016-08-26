const chapter = (state = {}, action) => {
  switch (action.type) {
    case "GET_CHAPTER":
      return action.response;
      break;
    default:
      return state;
  }
}

export default chapter;
