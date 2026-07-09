const newReservation = document.querySelector(".save");

if (newReservation) {
  newReservation.onclick = function () {
    location.href = "add-reservation.html";
  };
}

document.querySelectorAll(".delete").forEach((btn) => {
  btn.onclick = function () {
    if (confirm("Delete Reservation?")) {
      btn.closest("tr").remove();
    }
  };
});

document.querySelectorAll(".edit").forEach((btn) => {
  btn.onclick = function () {
    alert("Edit Reservation");
  };
});
const tbody = document.querySelector("tbody");

showReservations();

function showReservations(){

    tbody.innerHTML = "";

    let reservations = JSON.parse(localStorage.getItem("reservations")) || [];

    reservations.forEach((item,index)=>{

        tbody.innerHTML += `

        <tr>

            <td>${index+1}</td>

            <td>${item.student}</td>

            <td>${item.room}</td>

            <td>${item.checkIn}</td>

            <td>${item.checkOut}</td>

            <td>${item.amount} EGP</td>

            <td>
                <span class="status ${item.status.toLowerCase()}">
                    ${item.status}
                </span>
            </td>

            <td>

                <button class="edit" onclick="editReservation(${index})">
                    Edit
                </button>

                <button class="delete" onclick="deleteReservation(${index})">
                    Delete
                </button>

            </td>

        </tr>

        `;

    });

}

function deleteReservation(index){

    let reservations = JSON.parse(localStorage.getItem("reservations")) || [];

    reservations.splice(index,1);

    localStorage.setItem("reservations",JSON.stringify(reservations));

    showReservations();

}

function editReservation(index){

    localStorage.setItem("editReservationIndex", index);

    window.location.href = "add-reservation.html";

}