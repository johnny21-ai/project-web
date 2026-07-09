const grid = document.getElementById("housingGrid");

// قراءة البيانات القادمة من search
const params = new URLSearchParams(window.location.search);

const gov = params.get("gov");
const uni = params.get("uni");
const type = params.get("type");
const budget = Number(params.get("budget"));

// فلترة البيانات
let filtered = houses.filter(function (house) {

    let ok = true;

    if (gov && house.governorate !== gov)
        ok = false;

    if (uni && uni !== "" && house.university !== uni)
        ok = false;

    if (type && type !== "" && house.type !== type)
        ok = false;

    if (budget && house.price > budget)
        ok = false;

    return ok;

});

// لو مفيش نتائج
if (filtered.length === 0) {

    grid.innerHTML = `
        <h2 style="
        text-align:center;
        width:100%;
        color:red;
        margin-top:50px;">
        لا توجد مساكن مطابقة للفلاتر
        </h2>
    `;

}
else {

    displayHouses(filtered);

}

// عرض الكروت
function displayHouses(arr) {

    let cartona = "";

    arr.forEach(function (house) {

        cartona += `

<div class="housing-card">

    <div class="image-container">

        <img src="${house.image}" class="housing-image">

        <span class="price-badge">
            ${house.price} /EGP شهرياً
        </span>

        <span class="status-badge ${house.status == "available" ? "status-available" : "status-warning"}">

            ${house.status == "available"
                ? "✔ متاح الآن"
                : "⚠ مقاعد محدودة"}

        </span>

    </div>

    <div class="card-content">

        <h3 class="housing-name">
            ${house.name}
        </h3>

        <p class="housing-details">
            ${house.description}
        </p>

        <a href="../pages/details.html?id=${house.id}"
        class="btn-primary">
        عرض التفاصيل
        </a>

    </div>

</div>

`;

    });

    grid.innerHTML = cartona;

}



// Scroll To Top

const upBtn = document.querySelector(".up");

upBtn.style.display = "none";

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        upBtn.style.display = "flex";

    }

    else {

        upBtn.style.display = "none";

    }

});



// Alert للحالة

document.addEventListener("click", function (e) {

    if (e.target.classList.contains("status-badge")) {

        if (e.target.classList.contains("status-warning")) {

            alert("⚠ يوجد عدد محدود من الأماكن.");

        }

        else {

            alert("✅ هذه الوحدة متاحة للحجز.");

        }

    }

});