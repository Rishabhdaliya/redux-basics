export function increment(val) {
  debugger;

  return {
    type: "INCREMENT",
    payload: val,
  };
}

export function decrement(val) {
  debugger;

  return {
    type: "DECREMENT",
    payload: val,
  };
}

export function clearCart() {
  debugger;
  return {
    type: "CLEAR_CART",
    payload: 0,
  };
}
