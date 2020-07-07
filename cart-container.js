import React,{ useEffect } from "react";
import {connect} from  'react-redux'
import CartItem from './CartItem'
import {DECREASE, INCREASE, REMOVE, CLEAR_CART, GET_TOTALS } from './actions'


const CartContainer = ({ cartItem = [], total, dispatch}) => {
  useEffect(() => {
      dispatch({type: GET_TOTALS})
  }, [cartItem])
  if (cartItem.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cartItem.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${parseFloat(total).toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick = {() => dispatch({type: CLEAR_CART})}>clear cart</button>
      </footer>
    </section>
  );
};
const mapStateToProps = state => {
  return {cartItem : state.cart, 
          total : state.total}
}

export default connect(mapStateToProps)(CartContainer)