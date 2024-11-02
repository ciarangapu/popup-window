// Get references to the buttons and the popup container
const openPopupButton = document.getElementById('open-popup'); // Button to open the popup
const closePopupButtons = document.querySelectorAll('.content_button'); // Select both close buttons
const popupContainer = document.getElementById('popup-container'); // Popup container

// Function to open the popup
openPopupButton.addEventListener('click', () => {
    popupContainer.classList.add('show'); // Add 'show' class to make popup visible
});

// Function to close the popup
const closePopup = () => {
    popupContainer.classList.remove('show'); 
};

// Event listeners for both close buttons (x and close)
closePopupButtons.forEach(button => {
    button.addEventListener('click', closePopup);
});