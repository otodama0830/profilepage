
document.getElementById("year").textContent = new Date().getFullYear();

const grid = document.getElementById("photoGrid");
const descText = document.getElementById("descText");
const descBox = document.getElementById("descBox");

grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".photo");
  if (!btn) return;

  const desc = btn.dataset.desc || "説明がありません。";

  descText.textContent = desc;

  descBox.classList.remove("pop");
  void descBox.offsetWidth;
  descBox.classList.add("pop");

  document.querySelectorAll(".photo").forEach(p => p.classList.remove("active"));
  btn.classList.add("active");
});

grid.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const btn = e.target.closest(".photo");
  if (!btn) return;
  btn.click();
});