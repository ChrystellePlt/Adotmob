// -------------- logo animation ----------------- //

var logo = document.querySelector('.main__logo-container');
var firstParagraphContent = document.querySelectorAll('.main__first-paragraph-container__content');
var textContainer = document.querySelector('.main__first-paragraph-container');
var delay;
var i = 0.3;

window.addEventListener("load", function(event) {
    logo.classList.add('main__logo-container__move');
    firstParagraphContent.forEach(function(firstParagraphSentence) {
      delay = i/6;
      firstParagraphSentence.style.animationDelay = delay + 's';
      firstParagraphSentence.classList.add('main__first-paragraph-container__content-move');
      i++;
    })
});

// -------------- text 01 ----------------- //
// set variables


logo.addEventListener('animationstart', function() {
  firstParagraphContent.forEach(function(firstParagraphSentence){
    firstParagraphSentence.classList.add('hidden');
  })
})

// sentences scrolling horizontally one by one



// fade out animation



// set diplay='none' on the text container to avoid blank

/*setTimeout(function() {
  textContainer.style.display = 'none';
}, 2250);*/
