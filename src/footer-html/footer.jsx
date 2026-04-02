import React from "react";

function Footer() {
  return (
    <>
      <footer id="footer" className="mobile-footer-wraper">
        <div className="footer-first-container">
          <div className="footer-logo-container">
            <img
              className="footer-logo"
              src={`${import.meta.env.BASE_URL}images/index/logo/coffee-cup.png`}
              alt="webpage-logo"
              loading="lazy"
            />
            <div className="footer-logo-container-sub">
              <h3>Sip into the the hot world of Coffee</h3>
              <p className="footer-logo-text">
                Delivering the best coffee experience. Coffee Lovers' Paradise
              </p>
            </div>
          </div>
          <div className="footer-page-links mobile-links">
            <h3 className="footer-links-title">Page</h3>
            <ul className="footer-nav">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="coffeeBeans.html">Coffee Beans</a>
              </li>
              <li>
                <a href="service.html">Services</a>
              </li>
              <li>
                <a href="aboutus.html">About Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-page-links">
            <h3 className="footer-links-title">Media</h3>
            <ul className="mobile-media">
              <li>
                <a href="https://www.facebook.com">
                  <img
                    className="mobile-media-images"
                    src={`${import.meta.env.BASE_URL}images/mobileLogo/mobileFooter/facebook-svgrepo-com.png`}
                    alt="facebook-logo"
                  />
                  <span className="social-text">Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com">
                  <img
                    className="mobile-media-images"
                    src={`${import.meta.env.BASE_URL}images/mobileLogo/mobileFooter/instagram-rounded-border-svgrepo-com.png`}
                    alt="instagram-logo"
                  />
                  <span className="social-text">Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com">
                  <img
                    className="mobile-media-images"
                    src={`${import.meta.env.BASE_URL}images/mobileLogo/mobileFooter/twitter-rounded-border-svgrepo-com.png`}
                    alt="twitter-logo"
                  />
                  <span className="social-text">Twitter</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com">
                  <img
                    className="mobile-media-images"
                    src={`${import.meta.env.BASE_URL}images/mobileLogo/mobileFooter/linkedin-boerder-svgrepo-com.png`}
                    alt="linkedin-logo"
                  />
                  <span className="social-text">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-page-links">
            <h3 className="footer-links-title">Contact</h3>
            <ul className="mobile-footer-contacts">
              <li className="footer-contact-items">
                <img
                  className="footer-contact-images"
                  src={`${import.meta.env.BASE_URL}images/index/footer/address-svgrepo-com.svg`}
                  alt="address-logo"
                  loading="lazy"
                />
                <p>07H Street-2 Borrow-Bridge GL6, USA</p>
              </li>
              <li className="footer-contact-items">
                <img
                  className="footer-contact-images"
                  src={`${import.meta.env.BASE_URL}images/index/footer/contact-phone-talking-svgrepo-com.svg`}
                  alt="phone-logo"
                  loading="lazy"
                />
                <p>+81 999 8912</p>
              </li>
              <li className="footer-contact-items">
                <img
                  className="footer-contact-images"
                  src={`${import.meta.env.BASE_URL}images/index/footer/email-add-svgrepo-com.svg`}
                  alt="email-logo"
                  loading="lazy"
                />
                <p>YourCoffeeAtWork@gmail.com</p>
              </li>
              <li className="footer-contact-items">
                <img
                  className="footer-contact-images"
                  src={`${import.meta.env.BASE_URL}images/index/footer/website-click-svgrepo-com.svg`}
                  alt="website-logo"
                  loading="lazy"
                />
                <p>UrKofi.com</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-second-container">
          <p className="footer-reserved">
            April, 2026 UrKofi. All rights reserved.
          </p>
          <p className="payment-methods">Secured payment:</p>
          <div className="footer-second-container-images">
            <img
              className="payment-cards"
              src={`${import.meta.env.BASE_URL}images/index/footer/mastercard-svgrepo-com.svg`}
              alt="master-card-logo"
              loading="lazy"
            />
            <img
              className="payment-cards"
              src={`${import.meta.env.BASE_URL}images/index/footer/visa-4-logo-svgrepo-com.svg`}
              alt="visa-card-logo"
              loading="lazy"
            />
            <img
              className="payment-cards"
              src={`${import.meta.env.BASE_URL}images/index/footer/paypal-svgrepo-com.svg`}
              alt="paypal-logo"
              loading="lazy"
            />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
