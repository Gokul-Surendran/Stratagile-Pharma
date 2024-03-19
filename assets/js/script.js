// Function to check if an element is in the viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    var targetDiv = document.getElementsByClassName('sp-connect__leftcircle');
    var body = document.body;

    // Check if targetDiv is in the viewport
    if (isElementInViewport(targetDiv)) {
        // Add the desired class to the body
        body.classList.add('move');
    } else {
        // Remove the class from the body if targetDiv is not in the viewport
        body.classList.remove('move');
    }
}

// Add event listener for scroll event
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();
