import {
  CoffeeOfMonth,
  CoffeeOfMonthBtn,
} from "../assets/data/coffeeBeans/coffeeOfMonth";
import { useState } from "react";
function CoffeeBeans() {
  const [selectCoffeeBtn, setSelectCoffeeBtn] = useState(
    CoffeeOfMonthBtn[0].id,
  );

  return (
    <>
      <main>
        <section className="coffee-beans-first-section">
          <div className="coffee-beans-first-section-text">
            <h2>20% off for our beloved customers</h2>
            <p>
              If you buy directly in our store, you'll get a 20% discount! So
              hurry up come and buy now.
            </p>
          </div>
        </section>

        <article className="coffee-of-the-week">
          <div className="article-left-panel-container">
            <div className="article-left-panel-container-image-container">
              <img
                id="image-changer"
                src={CoffeeOfMonthBtn[selectCoffeeBtn - 1].src}
                alt={CoffeeOfMonth[0].alt}
                loading="lazy"
              />
            </div>
            <div className="article-left-panel-button-container">
              <ul className="article-left-panel-button-list">
                {CoffeeOfMonthBtn.map((btn) => (
                  <li key={btn.id}>
                    <button
                      type="button"
                      data-img={btn.src}
                      className="article-left-panel-button"
                      onClick={() => setSelectCoffeeBtn(btn.id)}
                    >
                      <img
                        className={`cappuccino-button-carousel ${selectCoffeeBtn === btn.id ? "activeButton" : ""}`}
                        src={btn.src}
                        alt={btn.alt}
                        loading="lazy"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="article-right-panel-container">
            <div className="article-right-panel-container-text">
              <h3>Coffee of the month</h3>
              <div className="coffee-bean-stars">
                <p id="coffee-month-item">{CoffeeOfMonth[0].name}</p>
                {Array.from({ length: 5 }, (_, index) => (
                  <i
                    key={index}
                    className={
                      index < CoffeeOfMonth[0].star
                        ? "fa fa-star"
                        : "fa fa-star-o"
                    }
                  ></i>
                ))}
              </div>

              <p>{CoffeeOfMonth[0].description}</p>
              <p id="coffee-month-price">${CoffeeOfMonth[0].price}</p>
            </div>
            <div className="article-right-panel-button-list">
              <button type="button" id="coffee-month-add-to-cart-btn">
                <img
                  src="./images/coffeeBeans/cart/icon-cart-white.svg"
                  alt="add to cart"
                  loading="lazy"
                />
                Add to Cart
              </button>
            </div>
          </div>
        </article>
        <article className="product-sale-list-container" id="sale-products">
          <h3>Our Best Beans</h3>
          <p>Try our best coffee beans that suits your taste.</p>
          <div className="beans-carousel-viewport">
            <ul className="product-sale-list-item-container">
              <li className="product-sale-item-container">
                <h4>Espresso</h4>
                <img
                  className="product-sale-item"
                  src="./images/index/fourthSection/espresso.png"
                  alt="espresso image"
                  loading="lazy"
                />
                <div className="product-sale-item-description">
                  <p>Another Great Complex Espresso Bean</p>
                  <h5>Free Shipping</h5>
                  <div>
                    <span className="item-price">$6.50</span>
                    <button type="button" className="add-to-cart-button">
                      <img
                        src="./images/coffeeBeans/cart/icon-cart-white.svg"
                        alt="add to cart"
                        loading="lazy"
                      />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </li>
              <li className="product-sale-item-container">
                <h4>Ristretto</h4>
                <img
                  className="product-sale-item"
                  src="./images/coffeeBeans/thirdSection/ristretto.png"
                  alt="espresso image"
                  loading="lazy"
                />
                <div className="product-sale-item-description">
                  <p>Taste Profile – Sweeter, Richer, Less Bitter</p>
                  <h5>Free Shipping</h5>
                  <div>
                    <span className="item-price">$5.50</span>
                    <button type="button" className="add-to-cart-button">
                      <img
                        src="./images/coffeeBeans/cart/icon-cart-white.svg"
                        alt="add to cart"
                        loading="lazy"
                      />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </li>
              <li className="product-sale-item-container">
                <h4>Lungo</h4>
                <img
                  className="product-sale-item"
                  src="./images//coffeeBeans/thirdSection/lungo.png"
                  alt="espresso image"
                  loading="lazy"
                />
                <div className="product-sale-item-description">
                  <p>Feels like an Italian? Make an Italian-style coffee</p>
                  <h5>Free Shipping</h5>
                  <div>
                    <span>$6.00</span>
                    <button type="button" className="add-to-cart-button">
                      <img
                        src="./images/coffeeBeans/cart/icon-cart-white.svg"
                        alt="add to cart"
                        loading="lazy"
                      />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </li>
              <li className="product-sale-item-container">
                <h4>Doppio</h4>
                <img
                  className="product-sale-item"
                  src="./images/coffeeBeans/thirdSection/doppio.png"
                  alt="espresso image"
                  loading="lazy"
                />
                <div className="product-sale-item-description">
                  <p>
                    Double the amount, double the beans. The double Espresso
                  </p>
                  <h5>Free Shipping</h5>
                  <div>
                    <span>$6.00</span>
                    <button type="button" className="add-to-cart-button">
                      <img
                        src="./images/coffeeBeans/cart/icon-cart-white.svg"
                        alt="add to cart"
                        loading="lazy"
                      />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </li>
              <li className="product-sale-item-container">
                <h4>Red Eye</h4>
                <img
                  className="product-sale-item"
                  src="./images/coffeeBeans/thirdSection/redeye.png"
                  alt="espresso image"
                  loading="lazy"
                />
                <div className="product-sale-item-description">
                  <p>Another Great Complex Espresso Bean</p>
                  <h5>Shipping Fee: $0.50</h5>
                  <div>
                    <span>$5.00</span>
                    <button type="button" className="add-to-cart-button">
                      <img
                        src="./images/coffeeBeans/cart/icon-cart-white.svg"
                        alt="add to cart"
                        loading="lazy"
                      />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </li>
              <li className="product-sale-item-container">
                <h4>Americano</h4>
                <img
                  className="product-sale-item"
                  src="./images/index/fourthSection/americano.png"
                  alt="espresso image"
                  loading="lazy"
                />
                <div className="product-sale-item-description">
                  <p>Taste Profile – Sweeter, Richer, Less Bitter</p>
                  <h5>Free Shipping</h5>
                  <div>
                    <span>$5.00</span>
                    <button type="button" className="add-to-cart-button">
                      <img
                        src="./images/coffeeBeans/cart/icon-cart-white.svg"
                        alt="add to cart"
                        loading="lazy"
                      />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </li>
              <li className="product-sale-item-container">
                <h4>Latte</h4>
                <img
                  className="product-sale-item"
                  src="./images/index/fourthSection/latte.png"
                  alt="espresso image"
                  loading="lazy"
                />
                <div className="product-sale-item-description">
                  <p>Feels like an Italian? Make an Italian-style coffee</p>
                  <h5>Free Shipping</h5>
                  <div>
                    <span>$5.50</span>
                    <button type="button" className="add-to-cart-button">
                      <img
                        src="./images/coffeeBeans/cart/icon-cart-white.svg"
                        alt="add to cart"
                        loading="lazy"
                      />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </li>
              <li className="product-sale-item-container">
                <h4>Cappuccino</h4>
                <img
                  id="cappuccino-image"
                  className="product-sale-item"
                  src="./images/coffeeBeans/thirdSection/cappuccino.png"
                  alt="espresso image"
                  loading="lazy"
                />
                <div className="product-sale-item-description">
                  <p id="cappuccino-descript">
                    Double the amount, double the beans. The double Espresso
                  </p>
                  <h5 id="cappuccino-shipping">Free Shipping</h5>
                  <div>
                    <span id="cappuccino-price">$4.50</span>
                    <button type="button" className="add-to-cart-button">
                      <img
                        src="./images/coffeeBeans/cart/icon-cart-white.svg"
                        alt="add to cart"
                        loading="lazy"
                      />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </li>
              <li className="product-sale-item-container">
                <h4>Flat White</h4>
                <img
                  className="product-sale-item"
                  src="./images/coffeeBeans/thirdSection/flatwhite.png"
                  alt="espresso image"
                  loading="lazy"
                />
                <div className="product-sale-item-description">
                  <p>Another Great Complex Espresso Bean</p>
                  <h5>Shipping Fee: $0.50</h5>
                  <div>
                    <span>$6.50</span>
                    <button type="button" className="add-to-cart-button">
                      <img
                        src="./images/coffeeBeans/cart/icon-cart-white.svg"
                        alt="add to cart"
                        loading="lazy"
                      />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </li>
              <li className="product-sale-item-container">
                <h4>Cafe Au Lait</h4>
                <img
                  className="product-sale-item"
                  src="./images/coffeeBeans/thirdSection/cafeaulait.png"
                  alt="espresso image"
                  loading="lazy"
                />
                <div className="product-sale-item-description">
                  <p>Taste Profile – Sweeter, Richer, Less Bitter</p>
                  <h5>Free Shipping</h5>
                  <div>
                    <span>$5.00</span>
                    <button type="button" className="add-to-cart-button">
                      <img
                        src="./images/coffeeBeans/cart/icon-cart-white.svg"
                        alt="add to cart"
                        loading="lazy"
                      />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </li>
              <li className="product-sale-item-container">
                <h4>Cortado</h4>
                <img
                  className="product-sale-item"
                  src="./images/coffeeBeans/thirdSection/cortado.png"
                  alt="espresso image"
                  loading="lazy"
                />
                <div className="product-sale-item-description">
                  <p>Feels like an Italian? Make an Italian-style coffee</p>
                  <h5>Shipping Fee: $0.50</h5>
                  <div>
                    <span>$7.00</span>
                    <button type="button" className="add-to-cart-button">
                      <img
                        src="./images/coffeeBeans/cart/icon-cart-white.svg"
                        alt="add to cart"
                        loading="lazy"
                      />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </li>
              <li className="product-sale-item-container">
                <h4>Macchiato</h4>
                <img
                  className="product-sale-item"
                  src="./images/coffeeBeans/thirdSection/macchiato.png"
                  alt="espresso image"
                  loading="lazy"
                />
                <div className="product-sale-item-description">
                  <p>
                    Double the amount, double the beans. The double Espresso
                  </p>
                  <h5>Shipping Fee: $0.50</h5>
                  <div>
                    <span>$6.50</span>
                    <button type="button" className="add-to-cart-button">
                      <img
                        src="./images/coffeeBeans/cart/icon-cart-white.svg"
                        alt="add to cart"
                        loading="lazy"
                      />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </li>
              <li className="product-sale-item-container">
                <h4>Mocha</h4>
                <img
                  className="product-sale-item"
                  src="./images/index/fourthSection/mocha.png"
                  alt="espresso image"
                  loading="lazy"
                />
                <div className="product-sale-item-description">
                  <p>
                    Double the amount, double the beans. The double Espresso
                  </p>
                  <h5>Free Shipping</h5>
                  <div>
                    <span>$5.50</span>
                    <button type="button" className="add-to-cart-button">
                      <img
                        src="./images/coffeeBeans/cart/icon-cart-white.svg"
                        alt="add to cart"
                        loading="lazy"
                      />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </li>
            </ul>
            <div className="coffee-dots"></div>
          </div>
          <button type="button" className="coffeePrev">
            ‹
          </button>
          <button type="button" className="coffeeNext">
            ›
          </button>
        </article>

        <article className="other-sale-list-container">
          <h3>We Also Sell</h3>
          <div className="other-items-container">
            <ul className="other-items-list-container">
              <li className="other-items">
                <h4>Mug</h4>
                <img
                  className="other-sale-item"
                  src="./images/coffeeBeans/fourthSection/mug.png"
                  alt="coffee mug"
                  loading="lazy"
                />
                <div className="other-sale-item-description">
                  <p>White ceramic mug. 200ml capacity. weight 250 grams.</p>
                  <h5>Shipping Fee: $0.75</h5>
                  <div>
                    <span>$3.50</span>
                    <button type="button" className="add-to-cart-other-button">
                      <img
                        src="./images/coffeeBeans/cart/icon-cart-white.svg"
                        alt="add to cart"
                        loading="lazy"
                      />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </li>
              <li className="other-items">
                <h4>Paper Cup</h4>
                <img
                  className="other-sale-item"
                  src="./images/coffeeBeans/fourthSection/papercup.png"
                  alt="coffee mug"
                  loading="lazy"
                />
                <div className="other-sale-item-description">
                  <p>An environment coffee cup. 350ml capacity.</p>
                  <h5>Shipping Fee: $0.25</h5>
                  <div>
                    <span>$1.50</span>
                    <button type="button" className="add-to-cart-other-button">
                      <img
                        src="./images/coffeeBeans/cart/icon-cart-white.svg"
                        alt="add to cart"
                        loading="lazy"
                      />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </li>
              <li className="other-items">
                <h4>V60 Coffee Filter</h4>
                <img
                  className="other-sale-item"
                  src="./images/coffeeBeans/fourthSection/filter.png"
                  alt="coffee mug"
                  loading="lazy"
                />
                <div className="other-sale-item-description">
                  <p>50 sheets od disposable coffee filter. Color brown</p>
                  <h5>Shipping Fee: $0.50</h5>
                  <div>
                    <span>$1.25</span>
                    <button type="button" className="add-to-cart-other-button">
                      <img
                        src="./images/coffeeBeans/cart/icon-cart-white.svg"
                        alt="add to cart"
                        loading="lazy"
                      />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </li>
              <li className="other-items">
                <h4>Transparent Dripper</h4>
                <img
                  className="other-sale-item"
                  src="./images/coffeeBeans/fourthSection/dripper.png"
                  alt="coffee mug"
                  loading="lazy"
                />
                <div className="other-sale-item-description">
                  <p>Plastic transparent dripper. Clean</p>
                  <h5>Shipping Fee: $0.50</h5>
                  <div>
                    <span>$2.00</span>
                    <button type="button" className="add-to-cart-other-button">
                      <img
                        src="./images/coffeeBeans/cart/icon-cart-white.svg"
                        alt="add to cart"
                        loading="lazy"
                      />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </article>
        <section className="cart-float-container">
          <a href="cart.html">
            <img
              src="./images/coffeeBeans/cart/icon-cart-white.svg"
              alt="cart button"
              loading="lazy"
            />
          </a>
          <span id="cart-item-counter-display">0</span>
        </section>
      </main>
    </>
  );
}

export default CoffeeBeans;
