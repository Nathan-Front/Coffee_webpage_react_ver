import { isSaturday } from "../../assets/js/reserve";
import { useState } from "react";
import { reserveSeat } from "../../assets/js/reserve";

function ReserveForm({ onClose, loggedUser }) {
  const personCount = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const timeOptions = [
    "15:00",
    "15:15",
    "15:30",
    "15:45",
    "16:00",
    "16:15",
    "16:30",
    "16:45",
    "17:00",
    "17:15",
    "17:30",
    "17:45",
    "18:00",
    "18:15",
    "18:30",
    "18:45",
    "19:00",
  ];
  const [dateSelected, SetDateSelected] = useState("");
  const today = new Date().toISOString().split("T")[0];

  const dateHandler = (selectDate) => {
    const date = isSaturday(selectDate);
    if (!date) {
      alert("Reservations are only available on Saturdays!");
      SetDateSelected("");
    } else {
      SetDateSelected(selectDate);
    }
  };

  const [isReserve, setIsReserve] = useState({
    name: loggedUser?.userName,
    personCnt: "1",
    reservedDate: dateSelected,
    reservedTime: "",
    contact: "",
    email: "",
  });
  const reserveHandler = (e) => {
    const { id, value } = e.target;

    setIsReserve((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const success = reserveSeat(isReserve);
    console.log(success);
    if (success) {
      setIsReserve({
        name: loggedUser?.userName || "Guest",
        personCnt: "1",
        reservedDate: "",
        reservedTime: "",
        contact: "",
        email: "",
      });
      SetDateSelected("");
    }
  };
  return (
    <>
      <div className="form-panel-container">
        <h3 className="user-name-logged">
          {loggedUser?.userName || "Guest user"}
        </h3>
        <form id="reserveForm" onSubmit={handleSubmit}>
          <label htmlFor="personCnt">Enter number of person</label>
          <select
            id="personCnt"
            name="selectNumber"
            value={isReserve.personCnt}
            onChange={reserveHandler}
          >
            {personCount.map((person) => (
              <option key={person}>{person}</option>
            ))}
          </select>
          <label htmlFor="inputReserveDate">Reserve Date</label>
          <input
            type="date"
            id="inputReserveDate"
            placeholder="enter date"
            required
            min={today}
            value={dateSelected}
            onChange={(e) => {
              dateHandler(e.target.value);
              setIsReserve((prev) => ({
                ...prev,
                reservedDate: e.target.value,
              }));
            }}
          />

          <label htmlFor="reservedTime">Reserve Time</label>
          <select
            id="reservedTime"
            value={isReserve.reservedTime}
            onChange={reserveHandler}
            required
          >
            <option value="">Select a time</option>
            {timeOptions.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </select>
          <label htmlFor="contact">Contact Number</label>
          <input
            type="text"
            id="contact"
            placeholder="Input contact number"
            required
            value={isReserve.contact || ""}
            onChange={reserveHandler}
          />
          <label htmlFor="email">Email Address (Optional)</label>
          <input
            type="text"
            id="email"
            placeholder="Input email address"
            value={isReserve.email || ""}
            onChange={reserveHandler}
          />
          <br />
          <div className="reserve-button-container">
            <button
              type="submit"
              value="submit"
              className="submit-reserve-button"
            >
              Reserve
            </button>
            <button
              type="button"
              value="Close"
              className="close-reserve-button"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ReserveForm;
