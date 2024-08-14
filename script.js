// script.js

document.addEventListener('mousemove', (e) => {
    const image = document.querySelector('.profile-image');
    if (!image) return; // Exit if image is not found

    const rect = image.getBoundingClientRect();
    const imageCenterX = rect.left + rect.width / 2;
    const imageCenterY = rect.top + rect.height / 2;

    // Calculate mouse position relative to image
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    if (mouseX >= rect.left && mouseX <= rect.right &&
        mouseY >= rect.top && mouseY <= rect.bottom) {

        const angleX = ((mouseY - imageCenterY) / rect.height) * 50; 
        const angleY = ((mouseX - imageCenterX) / rect.width) * -50; 

        image.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    } else {
        // Reset transform when the cursor is outside the image
        image.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
});
