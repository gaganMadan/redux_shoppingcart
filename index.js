import React, { Component } from 'react';
import { render } from 'react-dom';
import cartItems from './cart-items';
import Navbar from './Navbar.js'
import CartContainer from './cart-container.js'
import {createStore} from 'redux'
import './style.css';
import Reducer from './reducer'
import {Provider} from 'react-redux'


const App = () => {


 const initialState = {
   cart : cartItems,
   total : 200 ,
   amount : 0
}

const store = createStore(Reducer , initialState);


 return (
      <Provider store={store}>
        <Navbar />
        <CartContainer />
      </Provider>
    );
  }


render(<App />, document.getElementById('root'));
