document.addEventListener('scroll', () => {
    const navBar = document.querySelector('.nav-bar');
    const scrollPosition = window.scrollY;
    const maxScroll = 300; // Adjust this value to control the scroll range for the effect

    navBar.style.transition = 'none'; // Disable transitions for smooth parallax effect

    if (scrollPosition <= maxScroll) {
        const progress = scrollPosition / maxScroll; // Calculate scroll progress (0 to 1)
        navBar.style.top = `${50 - progress * 50}%`; // Move from 50% to 0%
        navBar.style.transform = `translate(-50%, -${progress * 50}%)`; // Adjust vertical translation
        navBar.style.fontSize = `${1.2 + progress * 0.8}rem`; // Grow font size from 1.2rem to 2rem
        navBar.style.padding = `${progress * 10}px 0`; // Add padding dynamically
        navBar.style.backgroundColor = 'transparent'; // Remove background while moving
        navBar.style.left = '50%'; // Center horizontally during scroll
        navBar.style.right = 'auto'; // Reset right property
        navBar.style.width = 'auto'; // Reset width
    } else {
        navBar.style.top = '0'; // Fix to the top of the photo
        navBar.style.transform = 'translateX(0)'; // Remove horizontal translation
        navBar.style.fontSize = '2rem'; // Set final font size
        navBar.style.padding = '10px 0'; // Set final padding
        navBar.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'; // Add semi-transparent white background
        navBar.style.left = '0'; // Align to the left edge
        navBar.style.right = '0'; // Stretch to the right edge
        navBar.style.width = '100vw'; // Stretch across the entire screen
    }
});
