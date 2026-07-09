const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const student = {
        name: document.getElementById("name").value,
        faculty: document.getElementById("faculty").value,
        year: document.getElementById("year").value,
        room: document.getElementById("room").value,
        phone: document.getElementById("phone").value
    };

    let students = JSON.parse(localStorage.getItem("students")) || [];

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    alert("Student Added Successfully");

    form.reset();
});