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