// Get all gallery items
const galleryItems = document.querySelectorAll('.gallery-item');

// Get the preview container and image
const previewContainer = document.querySelector('.preview-container');
const previewImage = document.querySelector('.preview-image');

// Loop through each gallery item and attach an event listener
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    // Get the source of the clicked image
    const src = item.querySelector('img').getAttribute('src');

    // Set the source of the preview image
    previewImage.setAttribute('src', src);

    // Show the preview container
    previewContainer.style.display = 'flex';
    previewImage.style.display ='block';
   
  });
});

// Add event listener to close the preview on click
previewContainer.addEventListener('click', () => {
  previewContainer.style.display = 'none';
});

  
