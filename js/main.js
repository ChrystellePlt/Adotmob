// -------------- logo animation ----------------- //

var logo = document.querySelector('.main__logo-container');
var firstParagraphContent = document.querySelectorAll('.main__first-paragraph-container__content');
var firstParagraphContainer = document.querySelector('.main__first-paragraph-container');
var firstParagraphLastChild = document.querySelector('.main__first-paragraph-container p:last-child');
var delay;
var delayDuration;
var i = 0;

window.addEventListener("load", function(event) {
    logo.classList.add('main__logo-container__move');
    firstParagraphContent.forEach(function(firstParagraphSentence) {
      delay = 0.3;
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

logo.addEventListener('animationstart', function() {
  firstParagraphContent.forEach(function(firstParagraphSentence){
    firstParagraphSentence.classList.add('hidden');
  })
})

var secondParagraphContent = document.querySelectorAll('.main__second-paragraph-container__content');
var secondParagraphContainer = document.querySelector('.main__second-paragraph-container');
var secondParagraphLastChild = document.querySelector('.main__second-paragraph-container p:last-child');

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
})

secondParagraphLastChild.addEventListener('animationend', function() {
  secondParagraphContent.forEach(function(secondParagraphSentence){
    secondParagraphSentence.classList.add('hidden');
  })
})

secondParagraphLastChild.addEventListener('transitionend', function() {
  secondParagraphContainer.style.display = 'none';
})
