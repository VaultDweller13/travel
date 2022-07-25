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

loginButton.addEventListener('click', () => {
   popupContainer.classList.add('popup-container-active');
   loginPopup.classList.add('login-form-active');
   body.classList.add('body-popup-open');
   html.classList.add('html-popup-open');
});

popupContainer.addEventListener('click', () => {
   popupContainer.classList.remove('popup-container-active');
   loginPopup.classList.remove('login-form-active');
   body.classList.remove('body-popup-open');
   html.classList.remove('html-popup-open');
});

console.log(`Ваша оценка - 85 баллов 
Отзыв по пунктам ТЗ:
Выполненные пункты:
1) Блок header 

2) Секция preview 

3) Секция steps 

4) Секция destinations 

5) Секция stories 

6) Блок footer 

7) нет полосы прокрутки при ширине страницы от 1440рх до 390px 

8) нет полосы прокрутки при ширине страницы от 390px до 320рх 

9) при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка 

10) при нажатии на бургер-иконку плавно появляется адаптивное меню 

11) адаптивное меню соответствует макету 

12) при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран 

13) ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям (все, кроме Account, она пока просто закрывает меню) 

14) при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна 

`)