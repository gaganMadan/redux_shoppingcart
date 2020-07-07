import { DECREASE, INCREASE, REMOVE, CLEAR_CART, GET_TOTALS } from "./actions";
import React, { useEffect } from "react";

const Reducer = (state, actions) => {
  if (actions.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (actions.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter(item => item.id !== actions.payload.id)
    };
    //console.log(actions.payload.id)
  }
  if (actions.type === INCREASE) {
    const tempCard = [];
    tempCard = state.cart.map(item => {
      if (item.id === actions.payload.id) {
        item.amount++;
      }
      return item;
    });
    return { ...state, cart: tempCard };
  }
  if (actions.type === DECREASE) {
    const tempCard = [];
    tempCard = state.cart.map(item => {
      if (item.id === actions.payload.id) {
        item.amount--;
      }
      return item;
    });
    return { ...state, cart: tempCard };
  }
  if (actions.type === GET_TOTALS) {
    //const tempTotal = [];
    const {total, amount} = state.cart.reduce(({amount = 0 , total = 0},item) => { 
      total = total + item.amount * item.price
      amount = amount + item.amount
      return {total, amount};
    },{});
    return  {...state, total, amount}
  }

  return state;
};

export default Reducer;
