import './App.css';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './index.js';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { fetchCustomers } from './asyncActions/customers';


function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  
  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer)) //В диспатче прокидываем экшен кр
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className={'app'}>
      <div style={{fontSize: "3rem", marginBottom: 10}}>Баланс: {cash}</div>
      <div style={{display: "flex", gap: "20px"}}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять деньги</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>
        
      </div>
      {customers.length > 0 ?
        <div>
          {customers.map(customer =>
              <div onClick={() => removeCustomer(customer)} style={{fontSize: "2rem", border: '1px solid black', padding: "10px",marginTop: 5}}>
                {customer.name}
              </div>
            )}
        </div>
        :
        <div style={{fontSize: "2rem", marginTop: 20}}>
          Клиенты отсутствуют!
        </div>
      }
    </div>
  );
}

export default App;
