const cards = document.querySelectorAll(".report-card");

cards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.03)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});