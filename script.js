const openPopupButton = document.getElementById('open-popup');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('close-popup');

openPopupButton.addEventListener('click', () => {
  popup.classList.add('open'); // Add open class to display the popup
});

closePopupButton.addEventListener('click', () => {
  popup.classList.remove('open'); // Remove open class to hide the popup
});
