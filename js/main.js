var logo = document.querySelector('.main__logo-container');
var firstParagraphContent = document.querySelectorAll('.main__first-paragraph-container__content');
var firstParagraphContainer = document.querySelector('.main__first-paragraph-container');
var firstParagraphLastChild = document.querySelector('.main__first-paragraph-container p:last-child');
var delay;
var delayDuration;
var i = 0;
var html = document.querySelector('html');

window.addEventListener("load", function(event) {
    logo.classList.add('main__logo-container__move');
    firstParagraphContent.forEach(function(firstParagraphSentence) {
      delay = 0.2;
      delayDuration = delay * i;
      firstParagraphSentence.style.animationDelay = delayDuration + 's';
      firstParagraphSentence.classList.add('main__first-paragraph-container__content-move');
      i++;
    })
});

logo.addEventListener('animationstart', function() {
  firstParagraphContent.forEach(function(firstParagraphSentence){
    firstParagraphSentence.classList.add('hidden');
    firstParagraphSentence.addEventListener('transitionend', function() {
      firstParagraphContainer.style.display = 'none';
    })
  })
})

var secondParagraphContent = document.querySelectorAll('.main__second-paragraph-container__content');
var secondParagraphContainer = document.querySelector('.main__second-paragraph-container');
var secondParagraphLastChild = document.querySelector('.main__second-paragraph-container p:last-child');
var fixedParagraphContainer = document.querySelector('.main__fixed-paragraph-container');

firstParagraphLastChild.addEventListener('transitionend', function() {
  firstParagraphContainer.style.display = 'none';
  secondParagraphContainer.style.display = 'block';
  i = 0;
  secondParagraphContent.forEach(function(secondParagraphSentence) {
    delay = 0.3;
    delayDuration = delay * i;
    secondParagraphSentence.style.animationDelay = delayDuration + 's';
    secondParagraphSentence.classList.add('main__second-paragraph-container__content-move');
    i++;
  })
  fixedParagraphContainer.classList.add('main__fixed-paragraph-container-visible');
})

secondParagraphLastChild.addEventListener('animationend', function() {
  secondParagraphContent.forEach(function(secondParagraphSentence){
    secondParagraphSentence.classList.add('hidden');
  })
})

secondParagraphLastChild.addEventListener('transitionend', function() {
  secondParagraphContainer.style.display = 'none';
})

var thirdParagraphContent = document.querySelectorAll('.main__third-paragraph-container__content');
var thirdParagraphContainer = document.querySelector('.main__third-paragraph-container');
var thirdParagraphLastChild = document.querySelector('.main__third-paragraph-container p:last-child');

secondParagraphLastChild.addEventListener('transitionend', function() {
  secondParagraphContainer.style.display = 'none';
  thirdParagraphContainer.style.display = 'block';
  i = 0;
  thirdParagraphContent.forEach(function(thirdParagraphSentence) {
    delay = 0.3;
    delayDuration = delay * i;
    thirdParagraphSentence.style.animationDelay = delayDuration + 's';
    thirdParagraphSentence.classList.add('main__third-paragraph-container__content-move');
    i++;
  })
})

/*thirdParagraphLastChild.addEventListener('animationend', function() {
  thirdParagraphContent.forEach(function(thirdParagraphSentence){
    thirdParagraphSentence.classList.add('hidden');
    fixedParagraphContainer.classList.remove('main__fixed-paragraph-container-visible');
    fixedParagraphContainer.style.transitionDelay = '1s';
  })
})

var lastParagraphContent = document.querySelectorAll('.main__last-paragraph-container__content');
var lastParagraphContainer = document.querySelector('.main__last-paragraph-container');
var lastParagraphLastChild = document.querySelector('.main__last-paragraph-container p:last-child');
var lastParagraphButton = document.querySelector('.main__last-paragraph-container__button');
var map = document.querySelector('.main__media-container__map-container');

thirdParagraphLastChild.addEventListener('transitionend', function() {
  thirdParagraphContainer.style.display = 'none';
  lastParagraphContainer.style.display = 'block';
  lastParagraphButton.style.display = 'block';
  i = 0;
  lastParagraphContent.forEach(function(lastParagraphSentence){
    delay = 0.3;
    delayDuration = delay * i;
    lastParagraphSentence.style.animationDelay = delayDuration + 's';
    lastParagraphSentence.classList.add('main__last-paragraph-container__content-opacity');
    i++;
  })
})

lastParagraphLastChild.addEventListener('animationstart', function() {
  lastParagraphButton.style.animationDelay = '0.3s';
  lastParagraphButton.classList.add('main__last-paragraph-container__content-opacity');
});

lastParagraphButton.addEventListener('animationstart', function() {
  map.classList.add('main__media-container__map-container__move');
})*/
