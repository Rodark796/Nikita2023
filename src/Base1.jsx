import React from 'react';
import { useDispatch } from "react-redux";


function Base1() {
  const dispatch = useDispatch();


  function addMoney() {
    dispatch({type: 'ADD_CASH', payload: 100})
  }

  function getMoney() {
    dispatch({type: 'GET_CASH', payload: 100})
  }

  return (
    <div>
      <h1>BASE 1</h1>
      <div>
        <button onClick={()=> {addMoney()}}>Пополнить Счёт</button>
        <button onClick={()=> {getMoney()}}>Снять со счёта</button>
      </div>
      <hr />
    </div>
  );
}

export default Base1;