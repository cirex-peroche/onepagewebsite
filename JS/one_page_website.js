// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get all images with class "lightbox-img"
    var images = document.querySelectorAll(".lightbox-img");
    var modal = document.getElementById("lightboxModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    // Loop through all images and add click event
    images.forEach(function (img) {
        img.addEventListener("click", function (e) {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    // Close the modal when clicked outside the image
    window.closeModal = function () {
        modal.style.display = "none";
    };

    // Optional: Close modal with ESC key
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            modal.style.display = "none";
        }
    });
});
