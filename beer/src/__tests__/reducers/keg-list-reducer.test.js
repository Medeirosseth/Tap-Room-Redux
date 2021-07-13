import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action 
  const kegData = {
    brewery: "TEST BREWERY",
    name: "TEST NAME",
    aC: "TEST ALCOHOL CONTENT",
    price: "TEST PRICE",
    numOfPints: 10,
    id: 1
  };

  test('should successfully add new keg data to masterKegList', () => {
    const {brewery, name, aC, price, numOfPints, id} = kegData;
    action = {
      type: "ADD_KEG",
      brewery: brewery,
      name: name,
      aC: aC,
      price: price,
      numOfPints: numOfPints,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        brewery: brewery,
        name: name,
        aC: aC,
        price: price,
        numOfPints: numOfPints,
        id: id
      }
    })
  })
  
});
