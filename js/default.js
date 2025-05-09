// Default JavaScript Functions and Initiations
var WOW = require('wowjs').WOW;

// Setup WOW.js
var wow = new WOW({
  boxClass: 'content-block',
  animateClass: 'active',
  offset: 200,
  mobile: true,
  live: false
});
// Initiate WOW.js
wow.init();

// Smooth scroll links for modern browsers
document.addEventListener('click', function(e) {
  var element = event.target;
  // Smooth scroll
  if (element.closest('[data-smooth-scroll-link]') !== null) {
    e.preventDefault();
    var id = element.href.split('#')[1];
    var target = document.getElementById(id);
    target.scrollIntoView({
      behavior: 'smooth'
    });
  }
  // Modal Links
  if (element.closest('[data-modal-link]') !== null) {
    e.preventDefault();
    var id = element.href.split('#')[1];
    var target = document.getElementById(id);
    document.querySelector('body').classList.add('modal-active');
    target.classList.add('active');
  }
  // Close Modal Buttons
  if (element.closest('[data-modal-close]') !== null) {
    e.preventDefault();
    closeModal();
  }
});

// Close Modal
var closeModal = function() {
  var activeModal = document.querySelector('.modal.active');
  if (activeModal !== null) {
    activeModal.classList.remove('active');
    document.querySelector('body').classList.remove('modal-active');
  }
}

// Close Modal when pressing Escape key
document.addEventListener('keydown', function(e) {
  if (e.keyCode === 27) {
    closeModal();
  }
});