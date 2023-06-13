//--Show Menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

//--Remove Menu Mobile 
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//--Scroll Section Active Link
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')

      }else{
            sectionsClass.classList.remove('active-link')

      }
    })
}
window.addEventListener('scroll', scrollActive)

//--Swiper Feet
const swiperFleet = new Swiper(".fleet-content", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//--Accordion
const accordionItems = document.querySelectorAll('.accordion')

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector('.accordion-btn')

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open')

    toggleItem(item)

    if(openItem && openItem!== item) {
      toggleItem(openItem)
    }
  })
})

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.accordion-content')

  if(item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  }else{
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
  }
}

//--Scroll Up
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  
  if(scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

//--Scroll Reveal 
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 250,
  reset: true //--animation repeat
})

sr.reveal(`.home-content, .contact-image, .accordion-box`)
sr.reveal(`.home-image, .fleet-box, .pricing-content, .work-buttons`, {origin: 'bottom'})
sr.reveal(`.fleet-text, .cars-card, .vans-content, .inside-image, .prising-title, .work-text, .questions-title, .footer-content`, {origin: 'left'})
sr.reveal(`.about-container, .vans-image, .inside-title, .contact-data`, {origin: 'right'})
sr.reveal('.work-image', { scale: 0.85 });
