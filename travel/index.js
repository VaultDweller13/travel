'use strict'

const html = document.querySelector('html');
const body = document.querySelector('body');
const menu = document.querySelector('.header__nav');
const menuButton = document.querySelector('.header-menu');
const menuIcon = document.querySelector('.menu-icon');
const headerNav = document.querySelector('.header__nav');
const list = document.querySelector('.header__list');
const loginButton = document.querySelector('.header__login-button');
const popupContainer = document.querySelector('.popup-container');
const loginPopup = document.querySelector('.login-form');
const signUpPopup = document.querySelector('.sign-up-form');
const signInButton = document.querySelector('.button-sign-in');
const accountButton = document.querySelector('.anchor-account');

const popupSwitch = document.querySelectorAll('.popup-switch')

// Burger menu

menuButton.addEventListener('click', function(){menu.classList.add('header__nav-open')});
document.addEventListener('click', (e) => {
   if (e.target !== menuButton && 
       e.target !== menuIcon && 
       e.target !== headerNav && 
       e.target !== list &&
       !e.target.classList.contains('header__item')) {
    menu.classList.remove('header__nav-open');
   }
});

// Pop-ups

loginButton.addEventListener('click', () => {
   popupContainer.classList.add('popup-container-active');
   loginPopup.classList.add('login-form-active');
   signUpPopup.classList.add('login-form-active');
   body.classList.add('body-popup-open');
   html.classList.add('html-popup-open');
});

accountButton.addEventListener('click', () => {
   popupContainer.classList.add('popup-container-active');
   loginPopup.classList.add('login-form-active');
   signUpPopup.classList.add('login-form-active');
   body.classList.add('body-popup-open');
   html.classList.add('html-popup-open');
});

popupContainer.addEventListener('click', (e) => {
   if (e.target === popupContainer) {
      popupContainer.classList.remove('popup-container-active');
      loginPopup.classList.remove('login-form-active');
      signUpPopup.classList.remove('login-form-active');
      signUpPopup.classList.add('hidden');
      loginPopup.classList.remove('hidden');
      body.classList.remove('body-popup-open');
      html.classList.remove('html-popup-open');
   }
});

popupSwitch.forEach(element => {
   element.addEventListener('click', () => {
      loginPopup.classList.toggle('hidden');
      signUpPopup.classList.toggle('hidden');
   });
});

signInButton.addEventListener('click', (e) => {
   let email = loginPopup.querySelector('#email').value;
   let password = loginPopup.querySelector('#password').value;

   alert(`Email: ${email}\nPassword: ${password}`);
});

// Desktop

const mediaQuery = window.matchMedia('(min-width: 391px)')

function handleDeviceMode(e) {
   e.matches ? initialiseDesktopSlider() : initialiseMobileSlider();
}

mediaQuery.addEventListener('change', handleDeviceMode);
handleDeviceMode(mediaQuery);

function initialiseDesktopSlider() {
   const slider = document.querySelector('.section-destinations__slider');
   const dotNav = document.querySelector('.slider-dots');
   const dots = Array.from(dotNav.children);
   let slides = Array.from(slider.children);
   let currentSlide = slider.querySelector('.current-slide');
   let leftSlide = currentSlide.previousElementSibling;
   let rightSlide = currentSlide.nextElementSibling;
   let currentPosition = 0;

   const slideWidth = 860;

   slider.insertBefore(slides[slides.length - 1].cloneNode(true), slides[0]);
   slider.append(slides[0].cloneNode(true));

   slider.addEventListener('click', (e) => {
      if (e.composedPath().includes(leftSlide) && leftSlide.previousElementSibling) {
         moveSlide(slideWidth, leftSlide);
         const currentDot = dotNav.querySelector('.slider-dots__dot-active');
         const targetDot = currentDot.previousElementSibling;
         updateDots(currentDot, targetDot);
         updateSlides(slider);
      } else if (e.composedPath().includes(rightSlide) && rightSlide.nextElementSibling) {
         moveSlide(-slideWidth, rightSlide);
         const currentDot = dotNav.querySelector('.slider-dots__dot-active');
         const targetDot = currentDot.nextElementSibling;
         updateDots(currentDot, targetDot);
         updateSlides(slider);
      }
   });

   dotNav.addEventListener('click', e => {
      const targetDot = e.target.closest('.slider-dots__dot');

      if (!targetDot) return;

      slides = Array.from(slider.children);
      const currentDot = dotNav.querySelector('.slider-dots__dot-active');
      const currentIndex = dots.findIndex(dot => dot === currentDot);
      const targetIndex = dots.findIndex(dot => dot === targetDot);
      const targetSlide = slides.slice(1, slides.length - 1)[targetIndex];
      const amountToMove = (currentIndex - targetIndex) * slideWidth;
      moveSlide(amountToMove, targetSlide);
      updateDots(currentDot, targetDot);
      updateSlides(slider);
   });

   function updateSlides(slider) {
      slides = Array.from(slider.children);
      currentSlide = slider.querySelector('.current-slide');
      leftSlide = currentSlide.previousElementSibling;
      rightSlide = currentSlide.nextElementSibling;

      if (!leftSlide.previousElementSibling) {
         leftSlide.classList.add('slide-non-active');
      }

      if (!rightSlide.nextElementSibling) {
         rightSlide.classList.add('slide-non-active');
      }
   }

   function moveSlide(amount, targetSlide) {
      currentPosition += amount;
      slider.style.transform = `translateX(${currentPosition}px)`;
      currentSlide.classList.remove('current-slide');
      targetSlide.classList.add('current-slide');
   }
   
   function updateDots(currentDot, targetDot) {
      currentDot.classList.remove('slider-dots__dot-active');
      targetDot.classList.add('slider-dots__dot-active');
   }
}

// Mobile

function initialiseMobileSlider() {
   const slider = document.querySelector('.section-destinations__slider');
   const slides = Array.from(slider.children);
   const dotNav = document.querySelector('.slider-dots');
   const dots = Array.from(dotNav.children);
   const buttonLeft = document.querySelector('.button-left');
   const buttonRight = document.querySelector('.button-right');

   let currentSlide = document.querySelector('.current-slide');
   setCurrentSlide(slides[0]);
   let currentDot = dotNav.querySelector('.slider-dots__dot-active');
   setCurrentDot(dots[0]);
   setButtonsIcons();

   let currentPosition = 0;
   const slideWidth = 375;

   buttonLeft.addEventListener('click', e => {
      if (!currentSlide.previousElementSibling) return;
      moveSlide(slideWidth, currentSlide.previousElementSibling);
      setCurrentDot(currentDot.previousElementSibling);
   });

   buttonRight.addEventListener('click', e => {
      if (!currentSlide.nextElementSibling) return;
      moveSlide(-slideWidth, currentSlide.nextElementSibling);
      setCurrentDot(currentDot.nextElementSibling);
   });

   dotNav.addEventListener('click', e => {
      const targetDot = e.target.closest('.slider-dots__dot');

      if (!targetDot) return;

      const currentIndex = dots.findIndex(dot => dot === currentDot);
      const targetIndex = dots.findIndex(dot => dot === targetDot);
      const targetSlide = slides[targetIndex];
      const amountToMove = (currentIndex - targetIndex) * slideWidth;
      moveSlide(amountToMove, targetSlide);
      setCurrentDot(targetDot);
   });

   function moveSlide(amount, targetSlide) {
      currentPosition += amount;
      slider.style.transform = `translateX(${currentPosition}px)`;
      setCurrentSlide(targetSlide);
      setButtonsIcons();
   }
   
   function setCurrentDot(targetDot) {
      currentDot.classList.remove('slider-dots__dot-active');
      targetDot.classList.add('slider-dots__dot-active');
      currentDot = dotNav.querySelector('.slider-dots__dot-active');
   }

   function setCurrentSlide(targetSlide) {
      currentSlide.classList.remove('current-slide');
      targetSlide.classList.add('current-slide');
      currentSlide = document.querySelector('.current-slide');
   }

   function setButtonsIcons() {
      if (!currentSlide.previousElementSibling) {
         buttonLeft.style.background = 'url(./assets/images/svg/arrow-left.svg)'
      } else {
         buttonLeft.style.background = 'url(./assets/images/svg/arrow-left-bold.svg)'
      }

      if (!currentSlide.nextElementSibling) {
         buttonRight.style.background = 'url(./assets/images/svg/arrow-right.svg)'
      } else {
         buttonRight.style.background = 'url(./assets/images/svg/arrow-right-bold.svg)'
      }
   }
}


