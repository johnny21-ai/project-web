// إظهار زر العودة للأعلى

const upBtn = document.querySelector(".up");

upBtn.style.display = "none";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        upBtn.style.display = "flex";
    } else {
        upBtn.style.display = "none";
    }

});