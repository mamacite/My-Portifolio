// Scroll Progress Indicator
window.onscroll = function() {
    const scrollTop = document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('progressBar').style.width = scrollPercent + '%';
};

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Modal Functionality
const modal = document.getElementById("myModal");
const btns = document.querySelectorAll(".modal-btn");
const span = document.getElementsByClassName("close")[0];

btns.forEach(btn => {
    btn.onclick = function() {
        modal.style.display = "block";
    };
});

span.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Testimonial Submission
document.getElementById('testimonial-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = this[0].value;
    const testimonial = this[1].value;
    const testimonialList = document.getElementById('testimonial-list');
    const newTestimonial = document.createElement('blockquote');
    newTestimonial.textContent = `"${testimonial}" - ${name}`;
    testimonialList.appendChild(newTestimonial);
    this.reset();
});

// Contact Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name').value;
    const responseMessage = document.getElementById('response-message');
    responseMessage.style.display = 'block';
    responseMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
    responseMessage.style.color = 'green';
    this.reset();
});

// Comment Form Submission Handling
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('comment-name').value;
    const responseComment = document.getElementById('response-comment');
    responseComment.style.display = 'block';
    responseComment.textContent = `Thank you, ${name}! Your comment has been sent.`;
    responseComment.style.color = 'blue';
    this.reset();
});

// Animation on Scroll
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const options = {
        root: null,
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Add the class to trigger the animation
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});