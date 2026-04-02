import { Coffee } from "../assets/data/home/coffee";
import { Process, Method } from "../assets/data/home/method";
import { MostWanted } from "../assets/data/home/mostWanted";
import { Customers } from "../assets/data/home/testimony";
import { Fragment, useEffect, useState, useRef } from "react";
function Home() {
  const [selectedCoffee, setSelectedCoffee] = useState(Coffee[0].id);
  const [coffeeIndex, setCoffeeIndex] = useState(0);
  //Coffee list and Dots click
  const goToCoffee = (index) => {
    setCoffeeIndex(index);
    setSelectedCoffee(Coffee[index].id);
  };
  //SWipe for second section
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      //swipe left
      setCoffeeIndex((prev) => (prev === Coffee.length - 1 ? 0 : prev + 1));
    }
    if (distance < -minSwipeDistance) {
      //swipe right
      setCoffeeIndex((prev) => (prev === 0 ? Coffee.length - 1 : prev - 1));
    }
  };

  const [testimonyIndex, setTestimonyIndex] = useState(0);
  const [slideView, setSlideView] = useState(3);
  useEffect(() => {
    const updateSlideView = () => {
      if (window.innerWidth <= 599) {
        setSlideView(1);
      } else if (window.innerWidth <= 768) {
        setSlideView(2);
      } else {
        setSlideView(3);
      }
    };
    updateSlideView();
    window.addEventListener("resize", updateSlideView);
    return () => window.removeEventListener("resize", updateSlideView);
  }, []);
  const maxTestimonyIndex = Customers.length - slideView;
  //Dots click
  const goToTestimony = (index) => {
    setTestimonyIndex(index);
  };

  //Swipe for testimony section
  const [touchStartTestimony, setTouchStartTestimony] = useState(null);
  const [touchEndTestimony, setTouchEndTestimony] = useState(null);
  const minSwipeDistanceTestimony = 50;

  const onTouchStartTestimony = (e) => {
    setTouchEndTestimony(null);
    setTouchStartTestimony(e.targetTouches[0].clientX);
  };
  const onTouchMoveTestimony = (e) => {
    setTouchEndTestimony(e.targetTouches[0].clientX);
  };

  const maxIndex = Customers.length - slideView;
  const onTouchEndTestimony = () => {
    if (!touchStartTestimony || !touchEndTestimony) return;
    const distance = touchStartTestimony - touchEndTestimony;

    if (distance > minSwipeDistanceTestimony) {
      //swipe left
      setTestimonyIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }
    if (distance < -minSwipeDistanceTestimony) {
      //swipe right
      setTestimonyIndex((prev) => {
        if (prev <= 0) {
          return maxIndex;
        }
        return prev - 1;
      });
    }
    setTouchStartTestimony(null);
    setTouchEndTestimony(null);
  };
  function nxtBtn() {
    setTestimonyIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }
  function prevBtn() {
    setTestimonyIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  }

  //Calculate width
  const trackRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  useEffect(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const slide = track.querySelector(".customer-testimony");
    const style = window.getComputedStyle(track);
    const gap = parseInt(style.columnGap || style.gap) || 0;
    const slideWidth = slide.offsetWidth + gap;
    setTranslateX(testimonyIndex * slideWidth);
  }, [testimonyIndex, slideView]);

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
        <section className="first-section-container">
          <div className="first-section-container-text">
            <h2>Welcome to the Coffee Lovers' Paradise!</h2>
            <p>
              Your morning coffee ahead. Roasted and served fresh every morning.
              Once you've tried our premium blends, you'll be coming back for
              more!
            </p>
            <p>Click button below to order now</p>
            <a href="coffeeBeans.html#sale-products">Order now</a>
          </div>
        </section>

        <section className="second-section-container">
          <div className="second-section-container-text">
            <h2>A coffee for everyone</h2>
            <p>Choose your coffee from our wide selection of premium blends.</p>
            <ul className="coffee-selection">
              {Coffee.map((coffee, index) => (
                <li key={coffee.id}>
                  <button
                    type="button"
                    data-target={coffee.name.toLowerCase().replace(/\s/g, "")}
                    className={`coffee-selections ${selectedCoffee === coffee.id ? "currentSelected" : ""}`}
                    onClick={() => {
                      setSelectedCoffee(coffee.id);
                      setCoffeeIndex(index);
                    }}
                  >
                    {coffee.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="coffee-slider"
            style={{
              transform: isMobile
                ? `translateX(-${coffeeIndex * 100}%)`
                : "none",
            }}
            onTouchStart={isMobile ? onTouchStart : undefined}
            onTouchMove={isMobile ? onTouchMove : undefined}
            onTouchEnd={isMobile ? onTouchEnd : undefined}
          >
            {Coffee.map((coffee, index) => (
              <div
                className={`coffee-selection-text ${coffeeIndex === index ? "selectedCoffee" : ""}`}
                id={coffee.name.toLowerCase().replace(/\s/g, "")}
                key={coffee.id}
              >
                <h3>{coffee.name}</h3>
                <p className="coffee-text">{coffee.description}</p>
                <div className="coffee-selection-text-images">
                  <img
                    className="coffee-images"
                    src={coffee.src[0].src}
                    alt={coffee.src[0].alt}
                    loading="lazy"
                  />
                  <img
                    className="coffee-images"
                    src={coffee.src[1].src}
                    alt={coffee.src[1].alt}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="mobile-slider-dots">
          {Coffee.map((_, index) => (
            <span
              key={index}
              className={`mobile-dot ${coffeeIndex === index ? "activeCoffee" : ""}`}
              onClick={() => goToCoffee(index)}
            />
          ))}
        </div>

        <section className="third-section-container">
          <h2>Brew Your Coffee</h2>
          <div className="third-sub-container">
            <div className="third-process-container">
              {Process.map((process) => (
                <Fragment key={process.id}>
                  <img src={process.src} alt={process.alt} loading="lazy" />
                  <p>{process.process}</p>
                </Fragment>
              ))}
            </div>
            <div className="third-section-center-image">
              <img
                src={`${import.meta.env.BASE_URL}images/index/thirdSection/urkofi.png`}
                alt="coffee cup"
                loading="lazy"
              />
            </div>
            <div className="third-method-container">
              <h3>How To Do Pour-over</h3>
              <ul>
                {Method.map((step) => (
                  <li key={step.id}>
                    <h4>
                      {step.id}. {step.step}
                    </h4>
                    <p>{step.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="fourth-section-container">
          <div className="fourth-coffee-selection-text">
            <h2>Most wanted coffee</h2>
            <p>From our customers' favorites.</p>
          </div>
          <div className="fourth-coffee-selection-text-images-container">
            {MostWanted.map((coffee) => (
              <img
                key={coffee.id}
                className="fourth-coffee-selection-text-images"
                src={coffee.src}
                alt={coffee.name}
              />
            ))}
          </div>
        </section>

        <section className="fifth-section-container">
          <h2>Here's what our customers say</h2>
          <button type="button" className="prev" onClick={prevBtn}>
            ‹
          </button>
          <div className="carousel-viewport">
            <ul
              ref={trackRef}
              className="customer-testimony-container"
              style={{
                transform: `translateX(-${translateX}px)`,
              }}
              onTouchStart={isMobile ? onTouchStartTestimony : undefined}
              onTouchMove={isMobile ? onTouchMoveTestimony : undefined}
              onTouchEnd={isMobile ? onTouchEndTestimony : undefined}
            >
              {Customers.map((customer) => (
                <li className="customer-testimony" key={customer.id}>
                  <img
                    src={customer.image}
                    alt="customer-profile"
                    loading="lazy"
                  />
                  <div>
                    <h3>{customer.name}</h3>
                    <div className="stars">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <i
                          key={index}
                          className={
                            index < customer.star
                              ? "fa fa-star"
                              : "fa fa-star-o"
                          }
                        ></i>
                      ))}
                    </div>
                  </div>
                  <blockquote>{customer.testimony}</blockquote>
                </li>
              ))}
            </ul>
            <div className="slider-dots">
              {Array.from({ length: maxTestimonyIndex + 1 }).map((_, index) => (
                <span
                  key={index}
                  className={testimonyIndex === index ? "active" : ""}
                  onClick={() => goToTestimony(index)}
                ></span>
              ))}
            </div>
          </div>
          <button type="button" className="next" onClick={nxtBtn}>
            ›
          </button>
        </section>
      </main>
    </>
  );
}

export default Home;
