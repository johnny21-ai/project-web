const form = document.querySelector("form");
let editIndex = localStorage.getItem("editReservationIndex");

if (editIndex !== null) {

    let reservations = JSON.parse(localStorage.getItem("reservations")) || [];

    let reservation = reservations[editIndex];

    document.getElementById("student").value = reservation.student;
    document.getElementById("room").value = reservation.room;
    document.getElementById("checkIn").value = reservation.checkin;
    document.getElementById("checkOut").value = reservation.checkout;
    document.getElementById("amount").value = reservation.amount;
    document.getElementById("status").value = reservation.status;

}

form.addEventListener("submit", function (e) {
  e.preventDefault();

const reservation = {
    student: document.getElementById("student").value,
    room: document.getElementById("room").value,
    checkIn: document.getElementById("checkIn").value,
    checkOut: document.getElementById("checkOut").value,
    amount: document.getElementById("amount").value,
    status: document.getElementById("status").value,
};

let reservations = JSON.parse(localStorage.getItem("reservations")) || [];

if (editIndex !== null) {

    reservations[editIndex] = reservation;

    localStorage.removeItem("editReservationIndex");

    alert("Reservation Updated Successfully");

} else {

    reservations.push(reservation);

    alert("Reservation Added Successfully");

}

localStorage.setItem("reservations", JSON.stringify(reservations));

window.location.href = "reservations.html";
});