'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');

setupOpen.addEventListener('click', function () {
  setup.classList.remove('invisible');
});

setupClose.addEventListener('click', function () {
  setup.classList.add('invisible');
});

var wizardCoat = document.querySelector('#wizard-coat');
var wizardEyes = document.querySelector('#wizard-eyes');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

var randomNumber = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var eyesColors = [
  'black',
  'red',
  'yellow',
  'blue',
  'green'
];
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = randomNumber(coatColors);
});
wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = randomNumber(eyesColors);
});
setupFireballWrap.addEventListener('click', function () {
  setupFireballWrap.style.background = randomNumber(fireballColors);
});
