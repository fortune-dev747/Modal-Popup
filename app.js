// Get the modal element
const popup = document.getElementById('myModal');

// Function to open the Modal
function openPopup() {
    popup.style.display = "block";
}

// Function to close the Modal
function closePopup() {
    popup.style.display = "none";
}

// close Modal when you click outside
window.onclick = (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
}  

