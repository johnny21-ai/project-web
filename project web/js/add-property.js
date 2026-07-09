const form = document.querySelector(".add");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = form.querySelector('input[type="text"]').value.trim();
  const type = form.querySelector("select").value;
  const roomNumber = form.querySelectorAll('input[type="number"]')[0].value;
  const price = form.querySelectorAll('input[type="number"]')[1].value;
  const capacity = form.querySelectorAll('input[type="number"]')[2].value;
  const description = form.querySelector("textarea").value.trim();
  const image = form.querySelector('input[type="file"]').files[0];

  if (!title || !roomNumber || !price || !capacity || !description) {
    alert("Please fill all fields.");
    return;
  }

  function saveRoom(imageSrc) {
    let rooms = JSON.parse(localStorage.getItem("rooms")) || [];

    const newRoom = {
      id: Date.now(),
      name: title,
      price: Number(price),
      city: type,
      status: "Available",
      description: description,
      image: imageSrc,
      roomNumber: roomNumber,
      capacity: Number(capacity),
    };

    rooms.push(newRoom);

    localStorage.setItem("rooms", JSON.stringify(rooms));

    alert("Room added successfully.");

    form.reset();

    window.location.href = "room.html";
  }

  if (image) {
    const reader = new FileReader();

    reader.onload = function (e) {
      saveRoom(e.target.result);
    };

    reader.readAsDataURL(image);
  } else {
    saveRoom("../image/p2.jpg");
  }
});
