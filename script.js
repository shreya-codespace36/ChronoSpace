const now = new Date();
const month = now.getMonth();
const root = document.documentElement;

if (month <= 1 || month === 11) {
  root.style.setProperty("--accent", "#9ddcff"); // winter
} else if (month <= 4) {
  root.style.setProperty("--accent", "#8cffc1"); // spring
} else if (month <= 7) {
  root.style.setProperty("--accent", "#ffd36e"); // summer
} else {
  root.style.setProperty("--accent", "#ff9f9f"); // autumn
}

const dotsContainer = document.getElementById("dots-container");
const percentText = document.getElementById("percent");

const startOfYear = new Date(now.getFullYear(), 0, 1);
const endOfYear = new Date(now.getFullYear(), 11, 31);

const totalDays =
  Math.floor((endOfYear - startOfYear) / (1000 * 60 * 60 * 24)) + 1;

const todayIndex =
  Math.floor((now - startOfYear) / (1000 * 60 * 60 * 24));

for (let i = 0; i < totalDays; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");

  if (i < todayIndex) dot.classList.add("past");
  if (i === todayIndex) {
    dot.classList.add("today");
    dot.title = "Today";
  }

  dotsContainer.appendChild(dot);
}

// percentage animation
let percent = Math.floor((todayIndex / totalDays) * 100);
let count = 0;

const counter = setInterval(() => {
  percentText.textContent = count + "%";
  if (count >= percent) clearInterval(counter);
  count++;
}, 20);

// clock
const clock = document.getElementById("clock");

function updateClock() {
  clock.textContent = new Date().toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);
const dotMonth = new Date(
  startOfYear.getTime() + i * 24 * 60 * 60 * 1000
).getMonth();

dot.style.backgroundColor = `var(--m${dotMonth})`;
const input = document.getElementById("userText");
const title = document.getElementById("title");

title.textContent = localStorage.getItem("yearText") || "My Year";

input.addEventListener("input", () => {
  title.textContent = input.value;
  localStorage.setItem("yearText", input.value);
});
const titleInput = document.getElementById("titleInput");

titleInput.value = localStorage.getItem("chronospaceTitle") || "Chronospace";

titleInput.addEventListener("input", () => {
  localStorage.setItem("chronospaceTitle", titleInput.value);
});

