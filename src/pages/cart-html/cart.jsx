import {
  getCartStorage,
  saveToCartStorage,
  subTotalCalc,
  displayTax,
  itemShipping,
  displayGrandTotal,
} from "../../assets/js/coffeeBeans";

function Cart({ cartItems, setCartItems, loggedUser }) {
  function deleteItem(id) {
    const deleteArticle = getCartStorage().filter((item) => item.id !== id);
    saveToCartStorage(deleteArticle);
    setCartItems(deleteArticle);
    alert("Item deleted");
  }

  function updateQuantity(id, amt) {
    const updateCart = cartItems.map((item) => {
      if (item.id === id) {
        const newQty = Math.max(1, item.qty + amt);
        return {
          ...item,
          qty: newQty,
          totalPrice: newQty * item.price,
        };
      }
      return item;
    });
    setCartItems(updateCart);
    saveToCartStorage(updateCart);
  }
  const subTotal = subTotalCalc();
  const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const itemShip = itemShipping();
  const subTotalTax = displayTax();
  const grandTotal = displayGrandTotal();

  function toPayment() {
    if (!loggedUser) {
      alert("Must be logged in.");
      return;
    } else {
      alert("Total payment $" + grandTotal.toFixed(2));
    }
  }
  return (
    <>
      <main>
        <h2 className="cart-title" id="cart-page-counter">
          Your cart (<span id="cart-item-counter">{`${totalQty} `}</span>
          <span id="cart-item-label">item{totalQty > 1 ? "s" : ""}</span>)
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
                    <button
                      className="delete-item-button"
                      onClick={() => deleteItem(item.id)}
                    >
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
                    <button
                      className="minus-btn"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="item-qty">{item.qty}</span>
                    <button
                      className="add-btn"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
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
              Sub total: $<span id="sub-total">{subTotal.toFixed(2)}</span>
            </p>
            <p>
              Tax: $<span id="tax">{subTotalTax.toFixed(2)}</span>
            </p>
            <p>
              Shipping fee: $
              <span id="shipping-fee">{itemShip.toFixed(2)}</span>
            </p>
            <p>
              Grand Total: $
              <span id="grand-total">{grandTotal.toFixed(2)}</span>
            </p>
            <button type="button" id="checkout-button" onClick={toPayment}>
              Proceed to Payment
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Cart;
