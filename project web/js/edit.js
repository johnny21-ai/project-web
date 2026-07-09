const rooms = JSON.parse(localStorage.getItem("rooms"));

const index = localStorage.getItem("roomIndex");

document.getElementById("roomName").value = rooms[index].name;

document.getElementById("price").value = rooms[index].price;

document.getElementById("city").value = rooms[index].city;

document.getElementById("status").value = rooms[index].status;

document.getElementById("description").value = rooms[index].description;

document.getElementById("preview").src = rooms[index].image;

document.getElementById("image").addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      document.getElementById("preview").src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
});

function saveRoom() {
  rooms[index].name = document.getElementById("roomName").value;

  rooms[index].price = document.getElementById("price").value;

  rooms[index].city = document.getElementById("city").value;

  rooms[index].status = document.getElementById("status").value;

  rooms[index].description = document.getElementById("description").value;

  rooms[index].image = document.getElementById("preview").src;

  localStorage.setItem("rooms", JSON.stringify(rooms));

  alert("Room Updated Successfully");

  location.href = "room.html";
}