


const defaultState = {
    cash: 5,
}

//action = {type: "", payload: ""} //добавить деньги на счет 

export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CASH":
            return {...state, cash: state.cash + action.payload} //изм состояние, мы должны вызвать новый объект
        case "GET_CASH":
          return {...state, cash: state.cash - action.payload}
      default: 
          return state
    }
}