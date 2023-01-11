import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const defaultState = {
  cash: 1000
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_MONEY':
      return {...state, cash: state.cash + action.payload}

    case 'GET_MONEY':
      return {...state, cash: state.cash - action.payload}

    default: return state 
  }
}

const store = createStore(reducer)


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
)
