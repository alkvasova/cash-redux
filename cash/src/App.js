import './App.css';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './index.js';


function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)
  
  const addCash = (cash) => {
      dispatch({type: "ADD_CASH", payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  return (
    <div className={'app'}>
      <div style={{fontSize: "2rem"}}>{cash}</div>
      <div style={{display: "flex", gap: "20px"}}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять деньги</button>
      </div>
    </div>
  );
}

export default App;
