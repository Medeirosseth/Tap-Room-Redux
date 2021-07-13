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
  default:
    return state;
}
};