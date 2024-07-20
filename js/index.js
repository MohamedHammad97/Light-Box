let images = Array.from(document.querySelectorAll(".item img"))
let lightBoxContainer = document.querySelector("#lightBoxContainer")
let lightBox = document.querySelector("#lightBox")
let prevBtn = document.querySelector("#prevBtn")
let closeBtn = document.querySelector("#closeBtn")
let nextBtn = document.querySelector("#nextBtn")
let currentIndex;

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function (e) {
        let currentImageSrc = e.target.getAttribute("src")
        currentIndex = images.indexOf(e.target)
        lightBoxContainer.classList.replace("d-none", "d-flex");
        lightBox.style.backgroundImage = `url(${currentImageSrc})`
    })
}

closeBtn.addEventListener("click", closeImage)
prevBtn.addEventListener("click", prevImage)
nextBtn.addEventListener("click", nextImage)

function closeImage() {
    lightBoxContainer.classList.replace("d-flex", "d-none");
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) currentIndex = 0;
    lightBox.style.backgroundImage = `url(${images[currentIndex].getAttribute("src")})`

}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) currentIndex = images.length -1;
    lightBox.style.backgroundImage = `url(${images[currentIndex].getAttribute("src")})`
}

document.addEventListener("keyup", function (e) {
    if (lightBoxContainer.classList.contains("d-flex")) {
        switch (e.key) {
            case "ArrowLeft":
                prevImage()
                break;
            case "ArrowRight":
                nextImage()
                break;
            case "Escape":
                closeImage()
                break;
        } 
    }
})

// CLICK OUTSIDE THE LIGTHBOX
lightBoxContainer.addEventListener("click", function (e) {
    if (e.target != lightBox && e.target != prevBtn && e.target != nextBtn) {
        closeImage()
    }
})

// TOUCH IN RESPONSIVE
lightBox.addEventListener("touchend",function () {
    nextImage()
})