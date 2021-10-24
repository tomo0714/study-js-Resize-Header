// DOM
const header = document.querySelector('header');

// Function
const resizeHeader =  () => {
    if(window.scrollY > 300) {
        header.classList.add('small');
    } else {
        header.classList.remove('small');
    }
};

// Event
window.addEventListener('scroll', resizeHeader);