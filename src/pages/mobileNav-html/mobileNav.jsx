import { useNavigate } from "react-router-dom";

function MobileNav({ loggedUser }) {
  const navigate = useNavigate();

  const openForm = () => {
    const targetPath = !loggedUser ? "/login" : "/toUser";
    navigate(targetPath);
    console.log(targetPath);
  };
  return (
    <>
      <nav id="mobile-nav">
        <div className="mobile-icons">
          <button
            type="button"
            id="mobile-home-button"
            onClick={() => navigate("/")}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/mobileLogo/home/home.svg`}
              alt="mobile home button"
            />
          </button>
          <p>Home</p>
        </div>
        <div className="mobile-icons">
          <button
            type="button"
            id="mobile-beans-button"
            onClick={() => navigate("/coffeeBeans")}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/mobileLogo/order/cart-check-svgrepo-com.svg`}
              alt="beans store"
            />
          </button>
          <p>Store</p>
        </div>
        <div className="mobile-icons">
          <button
            type="button"
            id="mobile-reserve-button"
            onClick={() => navigate("/reservation")}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/mobileLogo/seat/seat-kitchen-svgrepo-com.svg`}
              alt="reservation"
            />
          </button>
          <p>Reservation</p>
        </div>
        <div className="mobile-icons">
          <button type="button" id="mobile-user-button" onClick={openForm}>
            <img
              src={`${import.meta.env.BASE_URL}images/mobileLogo/user/user-icon-svgrepo-com.svg`}
              alt="user"
            />
          </button>
          <p>User</p>
        </div>
        <div>
          <div id="burger" className="mobile-icons">
            <img
              src={`${import.meta.env.BASE_URL}images/mobileLogo/burger/icon-hamburger.svg`}
              alt="burger button"
              className="burger-button"
            />
          </div>
          <div id="burger-close">
            <img
              src={`${import.meta.env.BASE_URL}images/mobileLogo/burger/icon-close.svg`}
              alt=""
              className="burger-button"
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default MobileNav;
