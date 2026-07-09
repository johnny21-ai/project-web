const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function () {

    // لو عندك بيانات دخول محفوظة امسحها
    // localStorage.removeItem("currentUser");
    // أو
    // sessionStorage.clear();

    window.location.href = "login.html";
});