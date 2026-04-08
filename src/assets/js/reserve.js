const BASE = import.meta.env.BASE_URL;
export function getSelectedImg(seatType) {
    switch (seatType) {
    case "single":
      return `${BASE}images/services/reservation/singleseat2.png`;
    case "double":
      return `${BASE}images/services/reservation/doubleseat2.png`;
    case "four":
      return `${BASE}images/services/reservation/fourseat2.png`;
    case "six":
      return `${BASE}images/services/reservation/sixseat2.png`;
    default:
      return getDefaultImg(seatType);
  }
}
export function getDefaultImg(seatType) {
  const paths = {
    single: `${BASE}images/services/reservation/singleseat1.png`,
    double: `${BASE}images/services/reservation/doubleseat1.png`,
    four: `${BASE}images/services/reservation/fourseat1.png`,
    six: `${BASE}images/services/reservation/sixseat1.png`
  };
  return paths[seatType] || ""; 
}
export function isSaturday(dateStr) {
  const date = new Date(dateStr);
  return date.getDay() === 6;
}
export function reserveSeat(reserveData) {
  const loggedUser = JSON.parse(localStorage.getItem("userLogged"));
  if(!loggedUser) {
    alert("Must be logged in to reserve.");
    return;
  }
  
  const reserveDB = JSON.parse(localStorage.getItem("reservedSeats")) || [];
  const existReserve = reserveDB.find(reserve => reserve.name === loggedUser.userName && reserve.reservedDate === reserveData.reservedDate);
  console.log(existReserve)
  if(!existReserve){
    reserveDB.push(reserveData)
    localStorage.setItem("reservedSeats", JSON.stringify(reserveDB));
    alert("Seat reserved.")
    return true;
  } else {
    alert("Cannot do duplicate reservation on the same date.");
    return;
  }
}