import { Baristas } from "../../assets/data/services/barista";
import { Breads } from "../../assets/data/services/breads";
import { Banners } from "../../assets/data/services/banners";
import { Link } from "react-router-dom";
import { useMobile } from "../../hooks/useIsMobile";
function Service() {
  useMobile();

  return (
    <>
      <main id="service">
        <section className="service-first-section-container">
          <div className="service-first-section-content">
            <h2>Want to sell your coffee related products in our website?</h2>
            <p>
              Contact us to get more information about our partnership program.
            </p>
            <address>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@urkofi.com"
                target="_blank"
                rel="noopener"
              >
                UrKofi@gmail.com
              </a>
            </address>
          </div>
          <img
            src={`${import.meta.env.BASE_URL}images/services/firstSection/still-life-coffee-tools.jpg`}
            alt="some picture"
            loading="lazy"
          />
        </section>
        <section className="service-second-section-container">
          <h2>Meet Our Baristas</h2>
          {Baristas.map((barista) => (
            <div className="barista-list-container" key={barista.id}>
              <div>
                <h3>{barista.name}</h3>
                <p>
                  Experience:{" "}
                  <span>
                    {barista.experience}
                    {barista.experience > 1 ? " years" : " year"}
                  </span>
                </p>
                <p>
                  Favorite Coffee: <span>{barista.favorite}</span>
                </p>
                <p>
                  Tech Skills: <span>{barista.skill}</span>
                </p>
                <p>
                  Speciality: <span>{barista.specialty}</span>
                </p>
                <p>
                  Message:
                  <span>"{barista.message}"</span>
                </p>
              </div>
              <img
                src={barista.src}
                alt={`${barista.name} image`}
                loading="lazy"
              />
            </div>
          ))}
          <div className="barista-list-container">
            <div>
              <h3>Barista 4</h3>
              <p>You!, yes you.</p>
              <p>
                Do you have the passion and hospitability to serve customers
                with the coffee you love?
              </p>
              <p>
                Join us to bring smile and happiness to every customers who also
                loves coffee.
              </p>
              <p>We are waiting for you</p>
              <address className="email-resume">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@urkofi.com"
                  target="_blank"
                  rel="noopener"
                >
                  Email us your resume
                </a>
              </address>
            </div>
            <img
              src={`${import.meta.env.BASE_URL}images/services/secondSection/23071.jpg`}
              alt="barista on hire"
              loading="lazy"
            />
          </div>
        </section>

        <section className="service-third-section-container">
          <h2>Not All Are Coffee</h2>
          <div className="bread-container-text">
            <p>We also serve a hot and freshly baked breads.</p>
            <ul>
              {Breads.map((bread) => (
                <li key={bread.id}>{bread.bread}</li>
              ))}
            </ul>
          </div>
          <div className="relaxing-container">
            <div>
              <div className="relaxing-container-text">
                <p>For those who wants to relax and have some hot coffee.</p>
                <p>We reserved the 2nd floor just for you.</p>
                <p>Reservation is only for Saturdays (15:00 - 19:00)</p>
                <Link to="/reservation">Reserve your favorite seat now.</Link>
              </div>
              {Banners.map((banner) => (
                <img
                  src={banner.src}
                  alt={banner.alt}
                  loading="lazy"
                  key={banner.id}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="service-fourth-section-container">
          <p>
            We are open at 6:00 am to 10:00 pm from Monday to Friday. And from
            7:00 am to 8:00 pm on weekends.
          </p>
          <p>We are close during public holidays.</p>
          <p>
            Please be reminded that ordering online during holidays may delay
            your order delivery.
          </p>
        </section>
      </main>
    </>
  );
}

export default Service;
