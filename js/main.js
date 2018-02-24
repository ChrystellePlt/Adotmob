// -------------- logo animation ----------------- //

var logo = document.querySelector('.main__logo-container');

setTimeout(function() {
  logo.classList.add('after');
}, 1500);

// -------------- text 01 ----------------- //
// set variables

var text = document.querySelectorAll('.main__text-container__text');
var textContainer = document.querySelector('.main__text-container');
var delay;
var i = 0;

// sentences scrolling horizontally one by one

text.forEach(function(paragraph){
  delay = i/6;
  paragraph.style.animationDelay = delay + 's';
  paragraph.classList.add('text-after');
  i++;
})

// fade out animation

setTimeout(function() {
  text.forEach(function(paragraph){
    paragraph.classList.add('hidden');
  });
}, 1500);

// set diplay='none' on the text container to avoid blank

setTimeout(function() {
  textContainer.style.display = 'none';
}, 2250);

// -------------- TEXT 02 ----------------- //
// set variables

var text02 = document.querySelectorAll('.main__text-container__text02');
var textContainer02 = document.querySelector('.main__text-container02');

// show container and set text position & text style

setTimeout(function() {
  textContainer02.style.display = 'block';
  text02.forEach(function(paragraph){
    paragraph.classList.add('main__text-container__text');
  });
}, 2300);

// sentences scrolling horizontally one by one

setTimeout(function() {
  text02.forEach(function(paragraph){
    delay = i/6;
    paragraph.style.animationDelay = delay + 's';
    paragraph.classList.add('text-after');
    i++;
  })
}, 2550);

// fade out animation

setTimeout(function() {
  text02.forEach(function(paragraph){
    paragraph.classList.add('hidden');
  });
}, 4500);

// set diplay='none' on the text container to avoid blank

setTimeout(function() {
  textContainer02.style.display = 'none';
}, 5000);

// -------------- TEXT FIXED ----------------- //

var fixedText = document.querySelector('.main__text-container__text-fixed');

setTimeout(function() {
  fixedText.classList.add('.main__text-container__text-fixed__active');
}, 2550);
