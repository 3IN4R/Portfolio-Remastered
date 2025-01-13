//To make navbar more responsive //  

//Added animation to make my skill icons more eye catching//

/* function movingSkills(){
const refreshRate = 1000 / 60;
const maxXPosition = 700;
let rect = document.getElementById('moving');
let speedX = 2.5;
let positionX = 0;

function step() {
    positionX = positionX + speedX;
    if (positionX > maxXPosition || positionX < 0) {
        speedX = speedX * (-1);
    }
    rect.style.left = positionX + 'px';
    window.requestAnimationFrame(step);
} 

window.requestAnimationFrame(step);
}*/

 

function navbarMenuStyleChange() {
    hamburger = document.querySelector('.hamburger');
    hamburger.onclick = function() {
        navBar = document.querySelector('.nav-bar');
        navBar.classList.toggle('active');
        
    }
    }




/**function langChange(){
    let langButton = document.getElementById('dklang');
    if (langButton.innerHTML === 'DK') {
      langButton.innerHTML = 'EN';
    } else {
      langButton.innerHTML = 'DK';
    }
    let naviBut1 = document.getElementById('about1');
    if (naviBut1.innerHTML === 'About') {
        naviBut1.innerHTML = 'Om mig';
    } else {
        naviBut1.innerHTML = 'About';
    }
    let naviBut2 = document.getElementById('contact');
    if (naviBut2.innerHTML === 'Contact') {
        naviBut2.innerHTML = 'Kontakt';
    } else {
        naviBut2.innerHTML = 'Contact';
    }
    let naviBut3 = document.getElementById('skills1');
    if (naviBut3.innerHTML === 'Skills') {
        naviBut3.innerHTML = 'Færdigheder';
    } else {
        naviBut3.innerHTML = 'Skills';
    }

    let naviBut4 = document.getElementById('about2');
    if (naviBut4.innerHTML === 'About me') {
        naviBut4.innerHTML = 'Om mig';
    } else {
        naviBut4.innerHTML = 'About me';
    }


    let naviBut6 = document.getElementById('skills2');
    if (naviBut6.innerHTML === 'My skills') {
        naviBut6.innerHTML = 'Færdigheder';
    } else {
        naviBut6.innerHTML = 'My skills';
    }

    let myName = document.getElementById('demo');
    if (myName.innerHTML === 'My name is Einaras') {
        myName.innerHTML = 'Mit navn er Einaras';
    } else {
        myName.innerHTML = 'My name is Einaras';
    }
    let headingFirst = document.getElementById('heading1');
    if (headingFirst.innerHTML === 'Who am I?') {
        headingFirst.innerHTML = 'Hvem er jeg?';
    } else {
        headingFirst.innerHTML = 'Who am I?';
    }
    let headingSecond = document.getElementById('heading2');
    if (headingSecond.innerHTML === 'My Skills') {
        headingSecond.innerHTML = 'Mine Færdigheder';
    } else {
        headingSecond.innerHTML = 'My Skills';
    }
    let headingFourth = document.getElementById('heading4');
    if (headingFourth.innerHTML === 'Contact me') {
        headingFourth.innerHTML = 'Kontakt';
    } else {
        headingFourth.innerHTML = 'Contact me';
    }
    let cvChange = document.getElementById('CV');
    if (cvChange.innerHTML === 'Take a look at my CV') {
        cvChange.innerHTML = 'Mit CV';
    } else {
        cvChange.innerHTML = 'Take a look at my CV';
    }
    let changeMesg = document.getElementById('besked');
    if (changeMesg.innerHTML === 'Send me a message') {
        changeMesg.innerHTML = 'Send mig en besked';
    } else {
        changeMesg.innerHTML = 'Send me a message';
    }
    let changeMesg2 = document.getElementById('beskednu');
    if (changeMesg2.innerHTML === 'Message Now') {
        changeMesg2.innerHTML = 'Send Nu';
    } else {
        changeMesg2.innerHTML = 'Message Now';
    }
    let changeMesg3 = document.getElementById('ringnu');
    if (changeMesg3.innerHTML === 'Call Now') {
        changeMesg3.innerHTML = 'Ring Nu';
    } else {
        changeMesg3.innerHTML = 'Call Now';
    }
    let changeMesg4 = document.getElementById('ringmig');
    if (changeMesg4.innerHTML === 'Call Me') {
        changeMesg4.innerHTML = 'Ring';
    } else {
        changeMesg4.innerHTML = 'Call Me';
    }
}
**/





const skillsSection = document.getElementById('skills-section');

const progressBars = document.querySelectorAll('.progress-bar');

window.addEventListener('scroll',() =>{
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if(sectionPos < screenPos){
        showProgress()
      //  console.log('show-progress');
    }else{
        hideProgress()
       /// console.log('hideProgress');
    
    }
});

function hideProgress(){
    progressBars.forEach(progressBar => {
        progressBar.style.opacity = 0;
        progressBar.style.width = 0;
    }); 
}
function showProgress(){
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.progress;
      //  console.log(value)
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
    });
}



//Function that changes the color of the index navbar depending on scroll direction
/*function headerBackgroundChangerUpdated(){
    var scrollBefore = 0;
    
    window.addEventListener('scroll',function(e){
        const scrolled = window.scrollY;
    
        if(scrollBefore > scrolled){
            console.log("ScrollUP");
            scrollBefore = scrolled;
            var change2 = document.getElementById("top").style.backgroundColor = '#000000';
            //Desired action
        }else{
            scrollBefore = scrolled;
            console.log("ScrollDOWN");
            var change = document.getElementById("top").style.backgroundColor = '#00000000';
            //Desired action
        }
    
    })
    } 
    headerBackgroundChangerUpdated();
    */
    
    if (window.matchMedia('(max-width: 900px)').matches) {
      function nameFunction() {
          return false;
      }
    } else {
      
    }

 
  navbarMenuStyleChange();

   //Slider in the mindset page
   
   
   (function() {
    // Function to handle the scroll and styling logic
    function setupScrollDetection() {
      const myElement = document.getElementById('top');
      const defaultColor = '#000000'; // Default color
      const scrolledColor = '#00000000'; // Color when scrolled
  
      // Scroll event listener
      window.addEventListener('scroll', () => {
        // Check if the screen width is above 900px
        if (window.innerWidth < 900) {
          // Reset the background color when the screen width is less than 900px
          myElement.style.backgroundColor = '';
          return;
        }
  
        if (window.scrollY === 0) {
          // Revert to the default color when at the top
          myElement.style.backgroundColor = defaultColor;
        } else {
          // Change to a new color when scrolled
          myElement.style.backgroundColor = scrolledColor;
        }
      });
    }
  
    // Initialize the scroll detection functionality
    setupScrollDetection();
  })();
  


  (async function () {
    const wrapper = document.querySelector('.carousel-wrapper');
    const dotsContainer = document.querySelector('.dots-container');
    const leftArrow = document.querySelector('.carousel-arrow.left');
    const rightArrow = document.querySelector('.carousel-arrow.right');
    let currentIndex = 0;
  
    // Fetch the JSON data
    const data = await fetch('./projects.json').then(res => res.json());
  
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
    const slideInterval = 3500; // Interval for automatic sliding (in ms)
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