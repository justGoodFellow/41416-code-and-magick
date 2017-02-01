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

var randomNumber = function (number) {
  return Math.floor(Math.random() * number.length);
};

wizardCoat.addEventListener('click', function () {
  var coatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  wizardCoat.style.fill = coatColors[randomNumber(coatColors)];
});

wizardEyes.addEventListener('click', function () {
  var eyesColors = [
    'black',
    'red',
    'yellow',
    'blue',
    'green'
  ];
  wizardEyes.style.fill = eyesColors[randomNumber(eyesColors)];
});

setupFireballWrap.addEventListener('click', function () {
  var fireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];
  setupFireballWrap.style.background = fireballColors[randomNumber(fireballColors)];
});
