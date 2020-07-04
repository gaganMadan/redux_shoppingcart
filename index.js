import React, { Component } from 'react';
import { render } from 'react-dom';
import cartItems from './cart-items';
import Navbar from './Navbar.js'
import CartContainer from './cart-container.js'
import {createStore} from 'redux'
import './style.css';

const App = () => {


 // creating the store
 // store sccepted three arguments
 const initialState = {
   count : 4,
   name : ''  
 }

 // reducer - arguments state and actions always return new state
const reducer = (state, actions) => {
    console.log(state);
    return {}
}


 const store = createStore(reducer , initialState);


 return (
      <main>
        <Navbar item={cartItems} />
        <CartContainer cart={cartItems} />
      </main>
    );
  }


render(<App />, document.getElementById('root'));
