import { AboutImages } from "../../assets/data/aboutUs/aboutImg";
import { useMobile } from "../../hooks/useIsMobile";
function About() {
  useMobile();

  return (
    <>
      <main>
        <section className="about-us-first-section-container">
          <div className="about-us-content-image-container">
            <img
              src={`${import.meta.env.BASE_URL}images/aboutUs/firstSection/steaming-cup-coffee-butter-croissant.jpg`}
              alt="coffee and bread"
              loading="lazy"
            />
            <h2>About Us</h2>
          </div>
        </section>
        <section className="about-us-second-section-container">
          <div className="about-us-content-text-container">
            <h3>Why Us?</h3>
            <p>
              At UrKofi, coffee is more than a drink — it's a daily ritual, a
              moment of pause, and a craft perfected with care. We source our
              beans from trusted farmers around the world, selecting only
              high-quality harvests that respect both people and the planet.
              Every batch is thoughtfully roasted to bring out its natural
              character — from bright, fruity notes to rich, chocolatey depth.
              Our journey began with a simple goal: to serve honest coffee made
              with passion. From bean selection to brewing, we focus on balance,
              consistency, and flavor you can truly enjoy. Whether you're
              starting your morning or taking a well-deserved break, our coffee
              is made to elevate every sip. We believe great coffee connects
              people. That's why we value community, sustainability, and
              craftsmanship in everything we do. Brewed with purpose. Served
              with heart.
            </p>
            <p>Started: April 2026</p>
            <p>Adress: 07H Street-2 Borrow-Bridge GL6, Japan</p>
            <p>Email: info@urkofi.com</p>
            <p>Contact #: +1 (555) 123-4567</p>
            <iframe
              src="https://www.google.com/maps?q=Tokyo,Japan&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="why-us-images">
            {AboutImages.map((img) => (
              <img src={img.src} alt={img.alt} loading="lazy" key={img.id} />
            ))}
          </div>
        </section>
        <section className="about-us-third-section-container">
          <div className="about-us-third-section-image">
            <img
              src={`${import.meta.env.BASE_URL}images/aboutUs/thirdSection/team.png`}
              alt="group photo"
              loading="lazy"
            />
          </div>
          <div className="mission-vission-container">
            <div className="mission">
              <h3>Mission</h3>
              <p>
                To craft exceptional coffee that brings people together —
                responsibly sourced, thoughtfully roasted, and served with care.
                We are committed to honoring farmers, respecting the
                environment, and delivering rich, honest flavors in every cup.
              </p>
            </div>
            <div className="vission">
              <h3>Vision</h3>
              <p>
                To become a coffee brand that inspires daily rituals around the
                world — where quality, sustainability, and community meet. We
                envision a future where great coffee supports ethical farming,
                mindful living, and meaningful connections.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
