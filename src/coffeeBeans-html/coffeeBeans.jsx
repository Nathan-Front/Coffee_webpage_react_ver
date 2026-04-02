import {
  CoffeeOfMonth,
  CoffeeOfMonthBtn,
} from "../assets/data/coffeeBeans/coffeeOfMonth";
import { Beans } from "../assets/data/coffeeBeans/beans";
import { useState, useEffect, useRef } from "react";
function CoffeeBeans() {
  const [selectCoffeeBtn, setSelectCoffeeBtn] = useState(
    CoffeeOfMonthBtn[0].id,
  );
  const [coffeeIndex, setCoffeeIndex] = useState(0);
  const [sliderView, setSliderView] = useState(4);
  useEffect(() => {
    const updateSliderView = () => {
      if (window.innerWidth <= 599) {
        setSliderView(1);
      } else if (window.innerWidth <= 768) {
        setSliderView(3);
      } else {
        setSliderView(4);
      }
    };
    updateSliderView();
    window.addEventListener("resize", updateSliderView);
    return () => {
      window.removeEventListener("resize", updateSliderView);
    };
  }, []);

  const trackRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const slide = track.querySelector(".product-sale-item-container");
    const style = window.getComputedStyle(slide);
    const gap = parseInt(style.columnGap || style.gap) || 0;
    const slideWidth = slide.offsetWidth + gap;
    setTranslateX(coffeeIndex * (slideWidth + 20));
  }, [coffeeIndex, sliderView]);

  const maxIndex = Beans.length - sliderView;

  //prev/mext buttons
  function nextBtn() {
    setCoffeeIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  }
  function prevBtn() {
    setCoffeeIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  }

  //Dots button
  const goToBean = (index) => {
    setCoffeeIndex(index);
  };

  const [touchStartCoffee, setTouchStartCoffee] = useState(null);
  const [touchEndCoffee, setTouchEndCoffee] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStartCoffee = (e) => {
    setTouchEndCoffee(null);
    setTouchStartCoffee(e.targetTouches[0].clientX);
  };

  const onTouchMoveCoffee = (e) => {
    setTouchEndCoffee(e.targetTouches[0].clientX);
  };

  const onTouchEndCoffee = () => {
    if (!touchStartCoffee || !touchEndCoffee) return;
    const distance = touchStartCoffee - touchEndCoffee;
    if (distance > minSwipeDistance) {
      setCoffeeIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }
    if (distance < -minSwipeDistance) {
      setCoffeeIndex((prev) => {
        if (prev <= 0) {
          return maxIndex;
        }
        return prev - 1;
      });
    }
    setTouchStartCoffee(null);
    setTouchEndCoffee(null);
  };

  //For mobile state
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 599);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 599);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            <ul
              ref={trackRef}
              className="product-sale-list-item-container"
              style={{ transform: `translateX(-${translateX}px)` }}
              onTouchStart={isMobile ? onTouchStartCoffee : undefined}
              onTouchMove={isMobile ? onTouchMoveCoffee : undefined}
              onTouchEnd={isMobile ? onTouchEndCoffee : undefined}
            >
              {Beans.map((bean) => (
                <li className="product-sale-item-container" key={bean.id}>
                  <h4>{bean.name}</h4>
                  <img
                    className="product-sale-item"
                    src={bean.src}
                    alt={bean.alt}
                    loading="lazy"
                  />
                  <div className="product-sale-item-description">
                    <p>{bean.description}</p>
                    <h5>Free Shipping</h5>
                    <div>
                      <span className="item-price">${bean.price}</span>
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
              ))}
            </ul>
            <div className="coffee-dots">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <span
                  key={index}
                  className={`coffee-dot ${coffeeIndex === index ? "coffeeActive" : ""}`}
                  onClick={() => goToBean(index)}
                />
              ))}
            </div>
          </div>
          <button type="button" className="coffeePrev" onClick={prevBtn}>
            ‹
          </button>
          <button type="button" className="coffeeNext" onClick={nextBtn}>
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
