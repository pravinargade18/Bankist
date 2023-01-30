'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');  //nodeList like array
const btnScrollTo=document.querySelector('.btn--scroll-to');
const section1=document.querySelector('#section--1');


const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


btnsOpenModal.forEach(btn => {
    btn.addEventListener('click', openModal);
});


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


btnScrollTo.addEventListener('click', () => {
  section1.scrollIntoView({ behavior: 'smooth' }); //till what we want to scroll here section1
});


// Tabbed Component 

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// watch video for better understanding sec-13 -->vno 13 tabbed components
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); //it will give the closest parent having class operations__tab
  console.log(clicked);

  //Guard Clause
  if (!clicked) return; //if we click on parts other than button on tabsContainer it gives null if we get null then return don't execute the other code

  // first remove the active class on every tab and the add for clicked tab only
  tabs.forEach(tab => {
    tab.classList.remove('operations__tab--active');
  });
  tabsContent.forEach(content => {
    content.classList.remove('operations__content--active');
  });

  clicked.classList.add('operations__tab--active');

  // activate the content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
  console.log(clicked.dataset.tab);
});


