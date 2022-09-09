import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: ${cartTotal}</span>

      {/* <li className="headings">
        <ul>Product</ul>
        <ul>Description</ul>
        <ul>Quantity</ul>
        <ul>Price</ul>
        <ul>Remove</ul>
      </li>
      <div className="item-container">
        <div className="item">
          <img src="" alt="" />
          <h2>Black Converse</h2> */}
      {/* Add svg arrows for span */}
      {/* <span>6</span>
          <h2 className="price">110</h2>
          <button>X</button>
        </div>
      </div> */}
    </div>
  );
};

export default Checkout;
