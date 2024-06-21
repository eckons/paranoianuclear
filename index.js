const nav = document.querySelector('header');  // Subtle Header go bye bye effect
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.add('nav--hidden');
    } else {
        nav.classList.remove('nav--hidden');
    }
    lastScrollY = window.scrollY;
});

// Smooth scroll to top button
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

// Function to scroll to the top
function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

// Smooth scroll to live dates section
document.addEventListener("DOMContentLoaded", function() {
    var seeLiveButton = document.querySelector('.video-overlay a');
    var liveDatesSection = document.getElementById('live-dates');

    seeLiveButton.addEventListener('click', function(event) {
        event.preventDefault();
        liveDatesSection.scrollIntoView({ behavior: 'smooth' });
    });

    // JavaScript for horizontal scrolling buttons
    const prevCDBtn = document.getElementById("prevCDBtn");
    const nextCDBtn = document.getElementById("nextCDBtn");
    const cdsContainer = document.querySelector(".cds-container");

    prevCDBtn.addEventListener("click", () => {
      cdsContainer.scrollLeft -= 300; // Adjust the scroll amount as needed
    });


    
})


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

        
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));