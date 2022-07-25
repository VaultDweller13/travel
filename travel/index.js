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

loginButton.addEventListener('click', () => loginPopup.classList.toggle('login-form-active'));
popupSwitch.forEach(element => element.addEventListener('click', () => {
   loginPopup.classList.toggle('hidden');
   signUpPopup.classList.toggle('hidden');
}));



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