import "./style.css";

// Smooth scroll
document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-scroll");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  });
});

// Data coklat
const chocolates = [
  { name: "SilverQueen Cashew", tag: "Best seller", note: "Manis, hangat, kayak kamu." },
  { name: "Cadbury Dairy Milk", tag: "Classic", note: "Lembut, sederhana, bikin kangen." },
  { name: "Toblerone Milk", tag: "Fancy", note: "Unik dan spesial, seperti kamu." },
  { name: "Delfi Top", tag: "Budget", note: "Ringan tapi nagih." },
  { name: "KitKat 4 Fingers", tag: "Fun", note: "Break time bareng kamu terbaik." },
];

const grid = document.getElementById("chocoGrid");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalText = document.getElementById("modalText");

function openModal(chocoName) {
  modalText.innerHTML = `Aku pilih <b>${chocoName}</b> buat kamu.`;
  modalBackdrop.classList.add("is-open");
}

function closeModal() {
  modalBackdrop.classList.remove("is-open");
}

// Render kartu coklat
grid.innerHTML = chocolates
  .map(
    (c) => `
    <article class="choco-card">
      <div class="choco-top">
        <div class="choco-badge">${c.tag}</div>
        <div class="choco-icon" aria-hidden="true">🍫</div>
      </div>
      <h3>${c.name}</h3>
      <p>${c.note}</p>
      <button class="btn primary" data-choco="${c.name}">Pilih Ini Untuk Kamu</button>
    </article>
  `
  )
  .join("");

// Klik tombol pilih coklat
grid.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-choco]");
  if (!btn) return;
  openModal(btn.getAttribute("data-choco"));
});

// ✅ Event delegation untuk tombol close & backdrop
document.addEventListener("click", (e) => {
  // klik X atau tombol Tutup
  if (e.target.closest("#closeModal") || e.target.closest("#okModal")) {
    closeModal();
    return;
  }

  // klik area gelap (backdrop)
  if (e.target === modalBackdrop) {
    closeModal();
  }
});

// ✅ ESC untuk tutup
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
