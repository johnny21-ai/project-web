const defaultRooms = [
  {
    name: "Single Room",
    price: 2500,
    city: "Cairo",
    status: "Available",
    description: "Comfortable single room.",
    image: "../image/p2.jpg",
  },
  {
    name: "Double Room",
    price: 3500,
    city: "Giza",
    status: "Reserved",
    description: "Room for two students.",
    image: "../image/p1.jpg",
  },
  {
    name: "Triple Room",
    price: 4500,
    city: "Minia",
    status: "Occupied",
    description: "Room for three students.",
    image: "../image/p3.jpg",
  },
];

// الغرف الأساسية + الغرف المضافة
let rooms = [...defaultRooms];

const savedRooms = JSON.parse(localStorage.getItem("rooms")) || [];

rooms = [...rooms, ...savedRooms];

// عرض الغرف
function loadRooms() {
  const container = document.getElementById("roomsContainer");

  if (!container) return;

  container.innerHTML = "";

  rooms.forEach((room, index) => {

    let badgeClass = "available";

    if (room.status === "Reserved") {
      badgeClass = "reserved";
    } else if (room.status === "Occupied") {
      badgeClass = "occupied";
    }

    container.innerHTML += `
    
      <div class="card">

        <img src="${room.image}" alt="${room.name}">

        <div class="card-body">

          <h3>
            <i class="fa-solid fa-bed"></i>
            ${room.name}
          </h3>

          <p>${room.description}</p>

          <p>
            <i class="fa-solid fa-location-dot"></i>
            ${room.city}
          </p>

          <p>
            <i class="fa-solid fa-money-bill"></i>
            ${room.price} EGP / Month
          </p>

          <span class="badge ${badgeClass}">
            ${room.status}
          </span>

        </div>

        <div class="card-footer">

          <button onclick="editRoom(${index})">
            Edit
          </button>

          <button class="delete" onclick="deleteRoom(${index})">
            Delete
          </button>

        </div>

      </div>

    `;
  });
}

// تعديل غرفة
function editRoom(index) {
  localStorage.setItem("roomIndex", index);
  window.location.href = "edit.html";
}

// حذف غرفة
function deleteRoom(index) {

  if (!confirm("هل تريد حذف هذه الغرفة؟")) return;

  // منع حذف الغرف الأساسية
  if (index < defaultRooms.length) {

    alert("لا يمكن حذف الغرف الأساسية.");

    return;
  }

  rooms.splice(index, 1);

  // نحفظ الغرف المضافة فقط
  const addedRooms = rooms.slice(defaultRooms.length);

  localStorage.setItem("rooms", JSON.stringify(addedRooms));

  loadRooms();
}

// تشغيل الصفحة
window.onload = function () {
  loadRooms();
};