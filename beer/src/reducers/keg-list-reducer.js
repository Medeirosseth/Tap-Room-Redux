export default (state = {}, action) => {
  const { brewery, name, aC, price, numOfPints, id } = action;
  switch (action.type) {
  case 'ADD_KEG':
      return Object.assign({}, state, {
      [id]: {
          brewery: brewery,
          name: name,
          aC: aC,
          price: price, 
          numOfPints: numOfPints,
          id: id
      }
  });
  case 'DELETE_KEG':
      const newState = {...state};
      delete newState[id];
      return newState;
  default:
    return state;
}
};

