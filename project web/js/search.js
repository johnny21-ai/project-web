// بيانات الجامعات حسب المحافظة
const universitiesData = {
    minya: ["جامعة المنيا", "الجامعة التكنولوجية بالمنيا"],
    assiut: ["جامعة أسيوط", "جامعة أسيوط الأهلية"],
    "beni-suef": ["جامعة بني سويف", "جامعة بني سويف الأهلية"],
    cairo: ["جامعة القاهرة", "جامعة عين شمس", "جامعة حلوان"],
    alexandria: ["جامعة الإسكندرية", "جامعة الإسكندرية الأهلية"]
};

// عناصر الصفحة
const governorateSelect = document.getElementById("governorate");
const universitySelect = document.getElementById("university");
const typeSelect = document.getElementById("type");
const budgetInput = document.getElementById("budget");
const budgetValueSpan = document.getElementById("budgetValue");
const searchForm = document.getElementById("searchForm");

// تغيير قائمة الجامعات حسب المحافظة
governorateSelect.addEventListener("change", function () {

    const selectedGov = governorateSelect.value;

    universitySelect.innerHTML = '<option value="">اختر الجامعة...</option>';

    if (selectedGov && universitiesData[selectedGov]) {

        universitiesData[selectedGov].forEach(function (uniName) {

            const option = document.createElement("option");
            option.value = uniName;
            option.textContent = uniName;

            universitySelect.appendChild(option);

        });

    }

});

// تحديث قيمة الميزانية
budgetInput.addEventListener("input", function () {

    budgetValueSpan.textContent = budgetInput.value;

});

// عند الضغط على "تطبيق الفلاتر"
searchForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const governorate = governorateSelect.value;
    const university = universitySelect.value;
    const type = typeSelect.value;
    const budget = budgetInput.value;

    console.log("المحافظة:", governorate);
    console.log("الجامعة:", university);
    console.log("النوع:", type);
    console.log("الميزانية:", budget);

    searchForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const governorate = governorateSelect.value;
    const university = universitySelect.value;
    const type = typeSelect.value;
    const budget = budgetInput.value;

    if (governorate === "") {
        alert("اختر المحافظة أولاً");
        return;
    }

    const params = new URLSearchParams();

    params.set("gov", governorate);
    params.set("uni", university);
    params.set("type", type);
    params.set("budget", budget);

    window.location.href = `housing.html?${params.toString()}`;

});

});