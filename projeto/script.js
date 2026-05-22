function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

function openImage(src) {
  document.getElementById("viewerImage").src = src;

  document.getElementById("imageViewer").style.display = "flex";
}

function closeImage() {
  document.getElementById("imageViewer").style.display = "none";
}

window.onclick = function (event) {
  const modals = document.querySelectorAll(".modal");

  modals.forEach((modal) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};
