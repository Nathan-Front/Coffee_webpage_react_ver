import React from "react";

function Cart({ cartItems, setCartItems }) {
  return (
    <>
      <main>
        <h2 className="cart-title" id="cart-page-counter">
          Your cart (
          <span id="cart-item-counter">
            {cartItems.reduce((total, item) => total + item.qty, 0)}
          </span>
          <span id="cart-item-label">
            item{cartItems.length > 0 ? "s" : ""}
          </span>
          )
        </h2>
        <section
          className="item-in-cart-container"
          id="cart-item-display-container"
        >
          <ul className="cart-item-list">
            {cartItems.map((item) => (
              <li className="cart-item-container" key={item.id}>
                <div className="item-info">
                  <img src={item.image} alt={item.imageAlt} />
                  <div className="item-cart-description">
                    <h3 className="item-title-cart">{item.item}</h3>
                    <p>{item.description}</p>
                    <span>Shipping fee</span>
                    <button className="delete-item-button" data-id="${item.id}">
                      Delete
                    </button>
                  </div>
                </div>
                <div className="price">
                  <div>
                    <h3>Price:</h3>
                    <span>${item.price.toFixed(2)}</span>
                  </div>
                </div>
                <div className="quantity">
                  <h3>Quantity:</h3>
                  <div>
                    <button className="minus-btn">-</button>
                    <span className="item-qty">{item.qty}</span>
                    <button className="add-btn">+</button>
                  </div>
                </div>
                <div className="total">
                  <div>
                    <h3>Total:</h3>
                    <span className="total-display">
                      ${item.totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="cart-checkout-container">
          <div id="cart-compute-fee">
            <p>
              Sub total: $<span id="sub-total"></span>
            </p>
            <p>
              Tax: $<span id="tax"></span>
            </p>
            <p>
              Shipping fee: $<span id="shipping-fee"></span>
            </p>
            <p>
              Grand Total: $<span id="grand-total"></span>
            </p>
            <button type="button" id="checkout-button">
              Proceed to Checkout
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Cart;
