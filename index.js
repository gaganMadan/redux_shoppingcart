import React, { Component } from 'react';
import { render } from 'react-dom';
import cartItems from './cart-items';
import Navbar from './Navbar.js'
import CartContainer from './cart-container.js'
import {createStore, applyMiddleware } from 'redux'
import './style.css';
import Reducer from './reducer'
import {Provider} from 'react-redux'
//import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


const App = () => {


 const initialState = {
   cart : cartItems,
   total : 200 ,
   amount : 0
}

const middleware = []

const store = createStore(Reducer , initialState, composeWithDevTools(
  applyMiddleware(...middleware)));


 return (
      <Provider store={store}>
        <Navbar />
        <CartContainer />
      </Provider>
    );
  }


render(<App />, document.getElementById('root'));
