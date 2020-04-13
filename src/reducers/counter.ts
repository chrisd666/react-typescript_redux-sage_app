const counter: any = (state: any = 0, action: any) => {
  switch (action.type) {
    case 'COUNTER_UP_ASYNC':
      return state + action.payload;

    case 'COUNTER_DOWN_ASYNC':
      return state - action.payload;

    default:
      return state;
  }
};

export default counter;
