const addBtn = document.querySelector(".add-btn");

if (addBtn) {
  addBtn.onclick = function () {
    window.location.href = "add-student.html";
  };
}

document.querySelectorAll(".delete").forEach((btn) => {
  btn.onclick = function () {
    if (confirm("Delete this student?")) {
      this.closest("tr").remove();
    }
  };
});

document.querySelectorAll(".edit").forEach((btn) => {
  btn.onclick = function () {
    alert("Edit Student");
  };
});
const tbody = document.querySelector("tbody");

let students = JSON.parse(localStorage.getItem("students")) || [];

students.forEach((student, index) => {
  tbody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.faculty}</td>
            <td>${student.year}</td>
            <td>${student.room}</td>
            <td>${student.phone}</td>
            <td><span class="status active">Active</span></td>
            <td>
                <button class="delete" onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>
    `;
});

function deleteStudent(index) {
  let students = JSON.parse(localStorage.getItem("students")) || [];

  students.splice(index, 1);

  localStorage.setItem("students", JSON.stringify(students));

  location.reload();
}