// ===== العناصر =====
const darkIcon = document.getElementById("darkMode");
const themeSelect = document.getElementById("themeSelect");
const saveBtn = document.querySelector(".settings-btn");

// ===== تحميل الإعدادات =====
function loadSettings() {

    const theme = localStorage.getItem("theme") || "light";

    if (theme === "dark") {
        document.body.classList.add("dark-mode");

        if (darkIcon) {
            darkIcon.classList.remove("fa-moon");
            darkIcon.classList.add("fa-sun");
        }

        if (themeSelect) {
            themeSelect.value = "dark";
        }

    } else {

        document.body.classList.remove("dark-mode");

        if (darkIcon) {
            darkIcon.classList.remove("fa-sun");
            darkIcon.classList.add("fa-moon");
        }

        if (themeSelect) {
            themeSelect.value = "light";
        }

    }

}

// ===== تغيير الثيم =====
function setTheme(mode) {

    if (mode === "dark") {

        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");

        if (darkIcon) {
            darkIcon.classList.remove("fa-moon");
            darkIcon.classList.add("fa-sun");
        }

    } else {

        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");

        if (darkIcon) {
            darkIcon.classList.remove("fa-sun");
            darkIcon.classList.add("fa-moon");
        }

    }

}

// ===== تغيير الثيم من القائمة =====
if (themeSelect) {

    themeSelect.addEventListener("change", function () {

        setTheme(this.value);

    });

}

// ===== حفظ الإعدادات =====
if (saveBtn) {

    saveBtn.addEventListener("click", function () {

        alert("Settings saved successfully.");

    });

}

// ===== تحميل الإعدادات عند فتح الصفحة =====
loadSettings();