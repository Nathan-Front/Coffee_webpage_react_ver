import About from "../aboutUs-html/about";
import Service from "../services-html/service";

function Burger() {
  return (
    <>
      <div className="about-us-mobile-container">
        <About />
        <Service />
      </div>
    </>
  );
}

export default Burger;
