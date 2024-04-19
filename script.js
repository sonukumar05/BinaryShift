
  // Initialize Bootstrap carousel
  var myCarousel = document.getElementById('carouselExampleIndicators');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 5000, // Change slide interval to 5 seconds
    wrap: true // Enable wrap around
  });

  // JavaScript for Smooth Scroll to Sections
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

//   JavaScript for Read More Buttons 

document.querySelectorAll('.blog-post .btn').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();

      const postContent = this.closest('.blog-post').querySelector('.post-content');
      postContent.classList.toggle('d-none');
      if (postContent.classList.contains('d-none')) {
        this.textContent = 'Read More';
      } else {
        this.textContent = 'Read Less';
      }
    });
  });