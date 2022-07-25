'use strict'

const menu = document.querySelector('.header__nav');
const menuButton = document.querySelector('.header-menu');
const menuIcon = document.querySelector('.menu-icon');
const headerNav = document.querySelector('.header__nav');
const list = document.querySelector('.header__list');
const loginButton = document.querySelector('.header__login-button');
const loginPopup = document.querySelector('.login-form');
const signUpPopup = document.querySelector('.sign-up-form');

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

loginButton.addEventListener('click', () => loginPopup.classList.toggle('login-form-active'));
popupSwitch.forEach(element => {
   element.addEventListener('click', () => {
      loginPopup.classList.toggle('hidden');
      signUpPopup.classList.toggle('hidden');
   });
});

// Carousel/Slider

const slider = document.querySelector('.section-destinations__slider');
const slides = Array.from(slider.children);

const slideWidth = 800;

let leftSlideButton = slides[0];
let rightSlideButton = slides[2];

leftSlideButton.addEventListener('click', e => {
   console.log(leftSlideButton)
   slider.style.transform = `translateX(${slideWidth}px)`;
   leftSlideButton.nextElementSibling.classList.remove('current-slide');
   leftSlideButton.classList.add('current-slide');
});

rightSlideButton.addEventListener('click', e => {
   slider.style.transform = `translateX(${-slideWidth}px)`;
});



