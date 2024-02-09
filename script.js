'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    openModal();
    if (this.textContent === 'NXP Semiconductor') {
      document.querySelector('.modal h1').textContent =
        'In 09/2021-09/2022 I was a Test engineer 🧰 ';
      document.querySelector('.modal p').textContent =
        'My responsibility was analyzing process tests in manufacturing. A maintenance machine tester is my routine every day sometimes I find low yields from the process test, then I come to analyze and find the root cause. I handle the project of developing a machine tester for increased performance.';
      document.querySelector('.modal-image').src = 'NXP.jpg';
    } else if (this.textContent === 'Daifuku(thailand)') {
      document.querySelector('.modal h1').textContent =
        'In 10/2022-11/2023 I was a Senior service engineer 🛠️';
      document.querySelector('.modal p').textContent =
        'My responsibility was to maintain the automated machine and inspection machine. A maintenance machine and fixing any issues is my routine every day. ';
      document.querySelector('.modal-image').src = 'Daifuku.jpg';
    } else if (this.textContent === 'Asian Stanley International') {
      document.querySelector('.modal h1').textContent =
        'In 12/2020-08/2021 I was a process engineer ⚙️';
      document.querySelector('.modal p').textContent =
        'My responsibility was to control the process of the new model. A plan and following a new model is my routine every day. Mostly new models do not follow the plan and I go to help or fix any issues. I have to prepare the machine and components before starting the process.';
      document.querySelector('.modal-image').src = 'ASI.jpg';
    }
  });
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
