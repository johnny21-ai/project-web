function initCalculatorPage() {
  const calcBtn = document.querySelector(".calc-btn");
  if (!calcBtn) return; 
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id")) || 1;
  const listing = LISTINGS.find((l) => l.id === id) || LISTINGS[0];
  const housingImg = document.querySelector(".housing-img");
  if (housingImg) {
    housingImg.src = listing.images[0];
    housingImg.alt = listing.title;
  }
  const housingValues = document.querySelectorAll(".housing-value");
  if (housingValues[0]) housingValues[0].textContent = listing.title;
  if (housingValues[1])
    housingValues[1].innerHTML = `${money(listing.price)} جنيه`;
  if (housingValues[2])
    housingValues[2].textContent = `${listing.city} - ${listing.district}`;

  const inputs = document.querySelectorAll(".field-input input[type=number]");
  const monthsInput = inputs[0];
  const electricityInput = inputs[1];
  const waterInput = inputs[2];
  const internetInput = inputs[3];
  const extraInput = inputs[4];
  const summaryValues = document.querySelectorAll(".summary-item .value");
  const rentValueEl = summaryValues[0];
  const electricityValueEl = summaryValues[1];
  const waterValueEl = summaryValues[2];
  const internetValueEl = summaryValues[3];
  const extraValueEl = summaryValues[4];
  const totalRowValue = document.querySelector(".total-row .value");
  const durationPill = document.querySelector(".duration-pill");
  const totalAmount = document.querySelector(".total-amount");
  const footerRows = document.querySelectorAll(".total-box-footer .row .value");
  const monthlyFooter = footerRows[0];
  const monthsFooter = footerRows[1];
  const totalFooter = footerRows[2];
  function calculate() {
    const months = Number(monthsInput.value) || 0;
    const electricity = Number(electricityInput.value) || 0;
    const water = Number(waterInput.value) || 0;
    const internet = Number(internetInput.value) || 0;
    const extra = Number(extraInput.value) || 0;
    const rent = listing.price;
    const monthlyTotal = rent + electricity + water + internet + extra;
    const grandTotal = monthlyTotal * months;
    if (rentValueEl) rentValueEl.textContent = `${money(rent)} جنيه`;
    if (electricityValueEl)
      electricityValueEl.textContent = `${money(electricity)} جنيه`;
    if (waterValueEl) waterValueEl.textContent = `${money(water)} جنيه`;
    if (internetValueEl)
      internetValueEl.textContent = `${money(internet)} جنيه`;
    if (extraValueEl) extraValueEl.textContent = `${money(extra)} جنيه`;

    if (totalRowValue)
      totalRowValue.textContent = `${money(monthlyTotal)} جنيه`;
    if (durationPill)
      durationPill.innerHTML = `${months} ${months === 1 ? "شهر" : "أشهر"} <span style="opacity:.8">عن مدة</span>`;
    if (totalAmount) totalAmount.textContent = money(grandTotal);

    if (monthlyFooter) monthlyFooter.textContent = `${money(monthlyTotal)} جنيه`;
    if (monthsFooter) monthsFooter.textContent = months;
    if (totalFooter) totalFooter.textContent = `${money(grandTotal)} جنيه`;
  }

  calcBtn.addEventListener("click", (e) => {
    e.preventDefault();
    calculate();
  });
  
  calculate();
}
document.addEventListener("DOMContentLoaded", () => {
  initHousingPage();
  initDetailsPage();
  initCalculatorPage();
});