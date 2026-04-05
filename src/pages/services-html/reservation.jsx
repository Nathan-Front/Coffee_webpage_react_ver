import {
  DoubleSeat,
  SingleSeat,
  FourSeat,
  SixSeat,
} from "../../assets/data/services/seats";
import { useState, useEffect } from "react";
import { getDefaultImg, getSelectedImg } from "../../assets/js/reserve";
function Reservation() {
  const singleLabel = ["A1", "A2", "A3", "A4", "A5", "A6", "A7"];
  const singleImg = SingleSeat[0];
  const doubleLabel = ["A11", "A12", "A13", "A14", "A15"];
  const doubleImg = DoubleSeat[0];
  const fourLabel = ["B1", "B2"];
  const fourImg = FourSeat[0];
  const sixLabel = ["C1", "C2"];
  const sixImg = SixSeat[0];

  const [isClicked, setIsClicked] = useState("");

  const getImgPath = (seat, seatType) => {
    if (isClicked === seat) {
      return getSelectedImg(seatType);
    }
    return getDefaultImg(seatType);
  };

  return (
    <>
      <main id="reservation-main">
        <div className="single-seat-window">
          <h3>window side</h3>
        </div>
        <ul className="single-window-table">
          {singleLabel.map((seat) => (
            <li className="seat-selection" key={seat}>
              <label>
                <input
                  name="seat"
                  id={`${seat}-seat`}
                  type="radio"
                  checked={isClicked === seat}
                  onChange={() => setIsClicked(seat)}
                />
                <img
                  className="single-seat"
                  src={getImgPath(seat, "single")}
                  alt={singleImg.alt}
                />
                <span>{seat}</span>
              </label>
            </li>
          ))}
        </ul>
        <div className="multi-seat-container">
          <div className="double-seat-window">
            <h3>window side</h3>
          </div>

          <ul className="double-seat-window-table">
            {doubleLabel.map((seat) => (
              <li className="seat-selection" key={seat}>
                <label>
                  <input
                    name="seat"
                    id={`${seat}-seat`}
                    type="radio"
                    checked={isClicked === seat}
                    onChange={() => setIsClicked(seat)}
                  />
                  <img
                    className="double-seat"
                    src={getImgPath(seat, "double")}
                    alt={doubleImg.alt}
                  />
                  <span>{seat}</span>
                </label>
              </li>
            ))}
          </ul>
          <div className="share-seat-table">
            <h3 className="share-table">Share table</h3>
            <ul className="group-center-table">
              {sixLabel.map((seat) => (
                <li className="six-seats" key={seat}>
                  <label>
                    <input
                      name="seat"
                      id={`${seat}-seat`}
                      type="radio"
                      checked={isClicked === seat}
                      onChange={() => setIsClicked(seat)}
                    />
                    <img src={getImgPath(seat, "six")} alt={sixImg.alt} />
                    <span>{seat}</span>
                  </label>
                </li>
              ))}
              {fourLabel.map((seat) => (
                <li className="six-seats" key={seat}>
                  <label>
                    <input
                      name="seat"
                      id={`${seat}-seat`}
                      type="radio"
                      checked={isClicked === seat}
                      onChange={() => setIsClicked(seat)}
                    />
                    <img src={getImgPath(seat, "four")} alt={fourImg.alt} />
                    <span>{seat}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="entrance-exit">
          <button type="button" id="reserve-button">
            Reserve now
          </button>
          <h3>Entrance/Exit</h3>
        </div>
        <section className="notice-section">
          <h3>Notice</h3>
          <p>
            Reservation is only htmlFor Saturdays. We do not accept reservation
            on other days.
          </p>
          <p>
            Share table: Can be used freely by customers if no reservation
            htmlFor that table during that day
          </p>
          <p>
            You may also reserve htmlFor the double seat table if single seats
            are fully occupied. You can not reserve htmlFor these seats if a
            single seat table is available.
          </p>
          <p>
            You may also reserve htmlFor the share table if single or double
            seats are fully occupied. We will reserve a seat on the share table
            you selected.
          </p>
          <p>If you have any questions, please contact us.</p>
          <p>
            +81 999 8912 or email us at
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@urkofi.com"
              target="_blank"
              rel="noopener"
            >
              {" "}
              UrKofi@gmail.com
            </a>
          </p>
        </section>
      </main>
    </>
  );
}

export default Reservation;
