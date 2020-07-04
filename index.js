import React, { Component } from 'react';
import { render } from 'react-dom';
import cartItems from './cart-items';
import Navbar from './Navbar.js'
import CartContainer from './cart-container.js'
import {createStore} from 'redux'
import './style.css';
import Reducer from './reducer'
import {INCREASE} from './actions'

const App = () => {


 // creating the store
 // store sccepted three arguments
 const initialState = {
   count : 4,
   name : ''  
 }

const store = createStore(Reducer , initialState);
store.dispatch({ type: INCREASE})
console.log(store.getState())

 return (
      <main>
        <Navbar item={cartItems} />
        <CartContainer cart={cartItems} />
      </main>
    );
  }


render(<App />, document.getElementById('root'));
