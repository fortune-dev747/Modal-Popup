let popup = document.getElementById("myModal");

function openPopup() {
    popup.style.display = "block";
}

function closePopup() {
    popup.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

