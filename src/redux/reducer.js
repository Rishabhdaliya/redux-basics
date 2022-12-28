const initialState = {
  count: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      debugger;
      return {
        count: state.count + action.payload,
      };
    case "DECREMENT":
      debugger;
      return {
        count: state.count - action.payload,
      };
    case "CLEAR_CART":
      debugger;
      return {
        count: action.payload,
      };
    default:
      return state;
  }
};
