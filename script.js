const hearts = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.25 ? "♥" : "♡";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${10 + Math.random() * 18}px`;
  heart.style.animationDuration = `${7 + Math.random() * 8}s`;
  heart.style.animationDelay = `${Math.random() * 2}s`;
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 16000);
}

setInterval(createHeart, 950);
for (let i = 0; i < 7; i++) setTimeout(createHeart, i * 350);

// Photo lightbox
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll(".photo").forEach(photo => {
  photo.addEventListener("click", () => {
    modalImage.src = photo.dataset.full;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
