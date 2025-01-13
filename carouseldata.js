(async function () {
    const wrapper = document.querySelector('.carousel-wrapper');
    const dotsContainer = document.querySelector('.dots-container');
    const leftArrow = document.querySelector('.carousel-arrow.left');
    const rightArrow = document.querySelector('.carousel-arrow.right');
    let currentIndex = 0;
  
    // Fetch the JSON data
    const data = await fetch('./carouseldata.json').then(res => res.json());
  
    // Populate slides dynamically
    data.forEach((item, index) => {
      // Create the slide
      const slide = document.createElement('div');
      slide.classList.add('card');
      slide.innerHTML = `
       <a href="${item.previewlink}" target="_blank"> <img src="${item.image}" alt="${item.title}" title='Preview'> </a>
      <div class="project-references"> <div class="platform-container"> 
                    <img class="platform"  src="${item.platform}" alt="${item.platformalt}" title="${item.platformalt}">
                    <img class="platform"  src="${item.platform2}" alt="${item.platform2alt}" title="${item.platform2alt}"> 
                    <img class="platform"  src="${item.platform3}" alt="${item.platform3alt}" title="${item.platform3alt}">  
        </div>
        <div class="refbuttons2">
                <a class="btnproj" href="${item.previewlink}" target="_blank">
                    Preview
                </a>
                <a class="btnproj" href="${item.sourcelink}" target="_blank">
                    Source Code
                </a></div> </div> 
                <h1 class="project-name">${item.name}</h1>
      `;
      wrapper.appendChild(slide);
  
      // Create the dot
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dot.setAttribute('data-index', index);
      if (index === 0) dot.classList.add('active'); // Mark the first dot as active
      dotsContainer.appendChild(dot);
    });
  
    const totalSlides = data.length;
    const dots = document.querySelectorAll('.dot');
  
    // Function to update the slide position
    function goToSlide(index) {
      wrapper.style.transition = 'transform 0.3s ease-in-out';
      wrapper.style.transform = `translateX(-${index * 100}%)`;
      currentIndex = index;
      updateDots();
    }
  
    // Function to update active dot
    function updateDots() {
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
      });
    }
  
    // Function to go to the next slide
    function nextSlide() {
      const nextIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
      goToSlide(nextIndex);
    }
  
    // Function to go to the previous slide
    function prevSlide() {
      const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop back to the last slide
      goToSlide(prevIndex);
    }
  
    // Add event listeners to dots for manual control
    dotsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('dot')) {
        const index = parseInt(e.target.getAttribute('data-index'));
        goToSlide(index);
      }
    });
  
    // Add event listeners to arrows
    leftArrow.addEventListener('click', prevSlide);
    rightArrow.addEventListener('click', nextSlide);
  
    // Set up automatic sliding
    const slideInterval = 34500; // Interval for automatic sliding (in ms)
    let autoSlide = setInterval(nextSlide, slideInterval);
  
    // Reset auto-slide on interaction
    function resetAutoSlide() {
      clearInterval(autoSlide);
      autoSlide = setInterval(nextSlide, slideInterval);
    }
  
    // Pause on hover
    wrapper.addEventListener('mouseenter', () => clearInterval(autoSlide));
    wrapper.addEventListener('mouseleave', resetAutoSlide);
  })();
  

  // Get the current year
  const currentYear = new Date().getFullYear();

  // Update the span with the id "dynamic-year"
  document.getElementById('dynamic-year').textContent = currentYear;