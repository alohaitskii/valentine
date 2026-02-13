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

// Modal elements
const modalBackdrop = document.getElementById("modalBackdrop");
const modalBox = modalBackdrop?.querySelector(".modal");
const modalText = document.getElementById("modalText");
const closeBtn = document.getElementById("closeModal");
const okBtn = document.getElementById("okModal");

let lastActiveEl = null;

function openModal(chocoName) {
  if (!modalBackdrop || !modalText) return;

  lastActiveEl = document.activeElement;

  modalText.innerHTML = `Aku pilih <b>${chocoName}</b> buat kamu.`;

  // ✅ kunci state modal secara benar (jangan cuma class)
  modalBackdrop.hidden = false;
  modalBackdrop.classList.add("is-open");

  // fokus ke tombol tutup biar aksesibilitas oke
  closeBtn?.focus();
}

function closeModal() {
  if (!modalBackdrop) return;

  modalBackdrop.classList.remove("is-open");
  modalBackdrop.hidden = true;

  // balikin fokus ke elemen terakhir
  if (lastActiveEl && typeof lastActiveEl.focus === "function") {
    lastActiveEl.focus();
  }
  lastActiveEl = null;
}

// Render kartu coklat
if (grid) {
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
        <button type="button" class="btn primary" data-choco="${c.name}">
          Pilih Ini Untuk Kamu
        </button>
      </article>
    `
    )
    .join("");

  // Klik tombol pilih coklat (event delegation)
  grid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-choco]");
    if (!btn) return;
    openModal(btn.getAttribute("data-choco"));
  });
}

// ✅ Klik backdrop = tutup
modalBackdrop?.addEventListener("click", () => closeModal());

// ✅ Klik di dalam modal jangan menutup
modalBox?.addEventListener("click", (e) => e.stopPropagation());

// ✅ Tombol close & tutup
closeBtn?.addEventListener("click", () => closeModal());
okBtn?.addEventListener("click", () => closeModal());

// ✅ ESC untuk tutup (hanya kalau modal sedang terbuka)
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (!modalBackdrop) return;
  if (modalBackdrop.hidden) return;
  closeModal();
});
