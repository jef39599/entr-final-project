// Quote carousel on homepage
const quotes = [
  `"What’s the hardest major you’ve got? I’ll take that."`,
  `"You don’t start a business — the need finds you."`,
  `"If I told a client three months, it was done in three months."`,
  `"Ethics is everything when you have people working for you."`,
  `"I had to look like a corporation before I was one."`
];
let index = 0;
setInterval(() => {
  const box = document.getElementById('quoteBox');
  if (box) {
    index = (index + 1) % quotes.length;
    box.innerHTML = `<p>${quotes[index]}</p>`;
  }
}, 5000);

// Tabs on themes.html
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      tabs.forEach(b => b.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.getAttribute("data-tab")).classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      tabs.forEach(tab => tab.classList.remove("active"));
      contents.forEach(content => content.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });
});