const modal = document.querySelector(".modal");
const modalImg = document.getElementById("modal-img");
const galleryItems = document.querySelectorAll(".gallery-item");
function openModal() {
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}
galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
        const imgSrc = item.querySelector("img").src;
        modalImg.src = imgSrc;
        openModal();
    });
});
modal.querySelector(".close").addEventListener("click", closeModal);
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
        closeModal();
    }
});