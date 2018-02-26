/*Asynchrone operations are needed for this exercise. SetTimeout is not a good option due to "stacking effect".
We use animationEvents and transitionEvents to avoid this problem.*/

var delay;
var delayDuration;
var i;

// The code below allows logo and first paragraph animations

var logo = document.querySelector('.main__paragraphs-container__logo-container');
var firstParagraphContent = document.querySelectorAll('.main__paragraphs-container__first-paragraph-container__content');
var firstParagraphContainer = document.querySelector('.main__paragraphs-container__first-paragraph-container');
var firstParagraphLastChild = document.querySelector('.main__paragraphs-container__first-paragraph-container p:last-child');


window.addEventListener("load", function(event) { //trigger function when all resources have finished loading
    logo.classList.add('main__paragraphs-container__logo-container--move');
    paragraphContentAnimation(1, firstParagraphContent, 0.2, 'paragraph-content-move');
});

logo.addEventListener('animationstart', function() { //trigger function when animation starts
  firstParagraphContent.forEach(function(firstParagraphSentence){
    firstParagraphSentence.classList.add('element-hidden');
    firstParagraphSentence.addEventListener('transitionend', function() { //trigger function when transition terminates
      firstParagraphContainer.style.display = 'none';
    })
  })
})

// The code below allows fixed and second paragraphs animations

var secondParagraphContent = document.querySelectorAll('.main__paragraphs-container__second-paragraph-container__content');
var secondParagraphContainer = document.querySelector('.main__paragraphs-container__second-paragraph-container');
var secondParagraphLastChild = document.querySelector('.main__paragraphs-container__second-paragraph-container p:last-child');
var fixedParagraphContainer = document.querySelector('.main__paragraphs-container__fixed-paragraph-container');

firstParagraphLastChild.addEventListener('transitionend', function() {
  firstParagraphContainer.style.display = 'none';
  secondParagraphContainer.style.display = 'block';
  paragraphContentAnimation(0, secondParagraphContent, 0.15, 'paragraph-content-move');
  fixedParagraphContainer.classList.add('main__paragraphs-container__fixed-paragraph-container--visible');
})

hidden(secondParagraphLastChild, secondParagraphContent, '1.2s');

secondParagraphLastChild.addEventListener('transitionend', function() {
  secondParagraphContainer.style.display = 'none';
})

// The code below allows third and fixed paragraphs animations

var thirdParagraphContent = document.querySelectorAll('.main__paragraphs-container__third-paragraph-container__content');
var thirdParagraphContainer = document.querySelector('.main__paragraphs-container__third-paragraph-container');
var thirdParagraphLastChild = document.querySelector('.main__paragraphs-container__third-paragraph-container p:last-child');

secondParagraphLastChild.addEventListener('transitionend', function() {
  secondParagraphContainer.style.display = 'none';
  thirdParagraphContainer.style.display = 'block';
  paragraphContentAnimation(0, thirdParagraphContent, 0.15, 'paragraph-content-move');
})

hidden(thirdParagraphLastChild, thirdParagraphContent, '1.3s');

thirdParagraphLastChild.addEventListener('animationend', function() {
    fixedParagraphContainer.classList.remove('main__paragraphs-container__fixed-paragraph-container--visible');
    fixedParagraphContainer.style.transitionDelay = '1.25s';
});

// The code below allows last paragraph and map animations

var lastParagraphContent = document.querySelectorAll('.main__paragraphs-container__last-paragraph-container__content');
var lastParagraphContainer = document.querySelector('.main__paragraphs-container__last-paragraph-container');
var lastParagraphLastChild = document.querySelector('.main__paragraphs-container__last-paragraph-container p:last-child');
var lastParagraphButton = document.querySelector('.main__paragraphs-container__last-paragraph-container__button');
var map = document.querySelector('.main__media-container__map-container');

thirdParagraphLastChild.addEventListener('transitionend', function() {
  thirdParagraphContainer.style.display = 'none';
  lastParagraphContainer.style.display = 'block';
  lastParagraphButton.style.display = 'block';
  paragraphContentAnimation(0, lastParagraphContent, 0.2, 'main__paragraphs-container__last-paragraph-container__content--opacity');
})

lastParagraphLastChild.addEventListener('animationstart', function() {
  lastParagraphButton.style.animationDelay = '0.3s';
  lastParagraphButton.classList.add('main__paragraphs-container__last-paragraph-container__content--opacity');
  map.style.animationDelay = '0.1s';
  map.classList.add('main__media-container__map-container--move');
});

// functions definitions

function paragraphContentAnimation(iValue, paragraphMoved, delayValue, classToAdd) {
  i = iValue;
  paragraphMoved.forEach(function(paragraphSentence) { //loop to move elements one by one in cascade by changing animation-delay property value
    delay = delayValue;
    delayDuration = delay * i;
    paragraphSentence.style.animationDelay = delayDuration + 's';
    paragraphSentence.classList.add(classToAdd);
    i++;
  })
}

function hidden(paragraphLastChild, paragraphContent, delayValue) {
  paragraphLastChild.addEventListener('animationend', function() { //trigger function when animation terminates
    paragraphContent.forEach(function(ParagraphSentence){
      ParagraphSentence.style.transitionDelay = delayValue;
      ParagraphSentence.classList.add('element-hidden');
    })
  })
}

function initMap() { //insert google map API
  var mapLatLng = {lat: 48.7162227, lng: 2.244765};

  var map = new google.maps.Map(document.querySelector(".main__media-container__map-container"), {
  center: mapLatLng,
  zoom: 15,
  mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var marker = new google.maps.Marker({
      position: mapLatLng,
      title:"Krys"
  });
}
