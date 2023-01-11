import React from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';


function Base2() {
  const cash = useSelector((state) => state.cash)
  const dispatch = useDispatch();


  function addMoney() {
    dispatch({type: 'ADD_CASH', payload: 200})
  }

  function addMoney() {
    dispatch({type: 'ADD_CASH', payload: 200})
  }


  return (
    <div>
      <h1>BASE 2</h1>
      <div>
        <button onClick={()=> {addMoney()}}>Пополнить Счёт</button>
        <button onClick={()=> {getMoney()}}>Снять со счёта</button>
      </div>
      <hr />
    </div>
  );
}

export default Base2;