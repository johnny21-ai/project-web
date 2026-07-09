const ctx = document.getElementById("incomeChart");

const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو"],
    datasets: [
      {
        label: "الأرباح",
        data: [18000, 22000, 20000, 24600, 27000, 30000],
        borderColor: "#5E35B1",
        backgroundColor: "rgba(94,53,177,.2)",
        borderWidth: 3,
        fill: true,
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#000",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#000",
        },
        grid: {
          color: "#ddd",
        },
      },
      y: {
        ticks: {
          color: "#000",
        },
        grid: {
          color: "#ddd",
        },
      },
    },
  },
});

const darkMode = document.getElementById("darkMode");

function updateChartTheme() {
  const dark = document.body.classList.contains("dark-mode");

  myChart.options.plugins.legend.labels.color = dark ? "#fff" : "#000";

  myChart.options.scales.x.ticks.color = dark ? "#fff" : "#000";
  myChart.options.scales.y.ticks.color = dark ? "#fff" : "#000";

  myChart.options.scales.x.grid.color = dark ? "#444" : "#ddd";
  myChart.options.scales.y.grid.color = dark ? "#444" : "#ddd";

  myChart.update();
}

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");

  darkMode.classList.remove("fa-moon");
  darkMode.classList.add("fa-sun");
}

updateChartTheme();

darkMode.onclick = function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");

    darkMode.classList.remove("fa-moon");
    darkMode.classList.add("fa-sun");
  } else {
    localStorage.setItem("theme", "light");

    darkMode.classList.remove("fa-sun");
    darkMode.classList.add("fa-moon");
  }

  updateChartTheme();
};

const bell = document.querySelector(".notification");
const count = document.querySelector(".count");

bell.addEventListener("click", () => {
  alert("You have 2 new notifications.");
  count.style.display = "none";
});

const cards = document.querySelectorAll(".earn, .student, .empty, .full");

window.addEventListener("load", () => {
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {
      card.style.transition = "0.5s";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 200);
  });
});