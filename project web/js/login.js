// ==========================
// Tabs
// ==========================

const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

registerTab.addEventListener("click", () => {

    registerTab.classList.add("active");
    loginTab.classList.remove("active");

    registerForm.style.display = "block";
    loginForm.style.display = "none";

});

loginTab.addEventListener("click", () => {

    loginTab.classList.add("active");
    registerTab.classList.remove("active");

    loginForm.style.display = "block";
    registerForm.style.display = "none";

});


// ==========================
// Login
// ==========================

const loginBtn = document.querySelector("#loginForm .btn");

const emailInput = document.querySelector('#loginForm input[type="email"]');

const passwordInput = document.querySelector('#loginForm input[type="password"]');


loginBtn.addEventListener("click", (e) => {

    e.preventDefault();

    if (
        emailInput.value.trim() === "" ||
        passwordInput.value.trim() === ""
    ) {

        alert("برجاء إدخال البريد الإلكتروني وكلمة المرور!");

        return;

    }

    const role = document.querySelector(
        'input[name="loginRole"]:checked'
    ).value;

    if (role === "student") {

        window.location.href = "search.html";

    } else {

        window.location.href = "dashboard.html";

    }

});


// ==========================
// Register
// ==========================

const registerBtn = document.getElementById("registerBtn");

const regName = document.querySelector(
    '#registerForm input[placeholder="الاسم بالكامل"]'
);

const regEmail = document.querySelector(
    '#registerForm input[placeholder="البريد الإلكتروني"]'
);

const regPass = document.querySelector(
    '#registerForm input[placeholder="كلمة المرور"]'
);

const regConfirmPass = document.querySelector(
    '#registerForm input[placeholder="تأكيد كلمة المرور"]'
);


registerBtn.addEventListener("click", () => {

    if (
        regName.value.trim() === "" ||
        regEmail.value.trim() === "" ||
        regPass.value.trim() === "" ||
        regConfirmPass.value.trim() === ""
    ) {

        alert("برجاء ملء جميع الحقول!");

        return;

    }

    if (regPass.value !== regConfirmPass.value) {

        alert("كلمتا المرور غير متطابقتين!");

        return;

    }

    alert("تم إنشاء الحساب بنجاح!");

    const role = document.querySelector(
        'input[name="registerRole"]:checked'
    ).value;

    if (role === "student") {

        window.location.href = "search.html";

    } else {

        window.location.href = "dashboard.html";

    }

});


// ==========================
// Forgot Password
// ==========================

const forgotLink = document.querySelector(".forgot");

forgotLink.addEventListener("click", (e) => {

    e.preventDefault();

    alert("تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.");

});