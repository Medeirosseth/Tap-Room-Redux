import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action 

  const currentState = {
    brewery: "TEST BREWERY 2",
    name: "TEST NAME 2",
    aC: "TEST ALCOHOL CONTENT 2",
    price: "TEST PRICE 2",
    numOfPints: 10,
    id: 1
  }

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

  test('Should successfully delete a keg', () => {
    action = {
        type: 'DELETE_KEG',
        id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
        2: {   brewery: "TEST BREWERY 2",
        name: "TEST NAME 2",
        aC: "TEST ALCOHOL CONTENT 2",
        price: "TEST PRICE 2",
        numOfPints: 10,
        id: 1
      }
    });
  });
  
});
