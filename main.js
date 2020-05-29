// Store the slides
// Store the number of slides
const carouselItems = document.querySelectorAll(".carousel-item"),
  CarouselItemsCount = carouselItems.length,
  // Store the prev and next controls
  carouselControlPrev = document.querySelector(".carousel-control-prev"),
  carouselControlNext = document.querySelector(".carousel-control-next"),
  // Store the names of the html classes of prev, active and next
  classActive = "carousel-item-active",
  classPrev = "carousel-item-prev",
  classNext = "carousel-item-next";

// Store 0 as the index of the initial active slide
// declared the variables that will store the indexes of prev and next slides, without assigning any value
let activeCarouselItem = 0,
  prevCarouselItem,
  nextCarouselItem,
  // Will be used to prevent navigation during the transitions of the slides
  moving = false;

// Set the click event on the prev and next controls
carouselControlPrev.addEventListener("click", goToPrev);
carouselControlNext.addEventListener("click", goToNext);

// Handle the click on the arrow "Prev"
function goToPrev() {
  if (moving === false) {
    // If we were on the firt slide, set the last slide as the new active slide
    // If we are not on the first slide, set the previous slide as the new active slide
    if (activeCarouselItem === 0) {
      activeCarouselItem = CarouselItemsCount - 1;
    } else {
      activeCarouselItem -= 1;
    }
    // call moveCarouselItems() that will handle the html class attribute
    moveCarouselItems();
  }
}

// Handle the click on the arrow "Next"
function goToNext() {
  if (moving === false) {
    // If we were on the last slide, set the first slide as the new active slide
    // If we are not on the last slide, set the next slide as the new active slide
    if (activeCarouselItem === CarouselItemsCount - 1) {
      activeCarouselItem = 0;
    } else {
      activeCarouselItem += 1;
    }

    // call moveCarouselItems() will handle the html class attribute
    moveCarouselItems();
  }
}

// Handle the html class attribute
function moveCarouselItems() {
  // If we are on the first slide, set the last slide as the previous slide
  // and set the next slide
  if (activeCarouselItem === 0) {
    prevCarouselItem = CarouselItemsCount - 1;
    nextCarouselItem = activeCarouselItem + 1;

    // Else If we are on the last slide, set the first slide as the next slide
    // and set the previous slide
  } else if (activeCarouselItem === CarouselItemsCount - 1) {
    prevCarouselItem = activeCarouselItem - 1;
    nextCarouselItem = 0;

    // Else set the previous and next slide
  } else {
    prevCarouselItem = activeCarouselItem - 1;
    nextCarouselItem = activeCarouselItem + 1;
  }

  // Remove the html classes of prev, active and next on all slides
  carouselItems.forEach(function(item) {
    item.classList.remove(classActive, classPrev, classNext);
  });

  // Set the html class attributes to the according slides
  carouselItems[activeCarouselItem].classList.add(classActive);
  carouselItems[prevCarouselItem].classList.add(classPrev);
  carouselItems[nextCarouselItem].classList.add(classNext);

  controlsDisable();
}

// Prevent navigation during the transitions of the slides
function controlsDisable() {
  moving = true;
  carouselControlPrev.classList.add("carousel-control-disabled");
  carouselControlNext.classList.add("carousel-control-disabled");

  setTimeout(function() {
    moving = false;
    carouselControlPrev.classList.remove("carousel-control-disabled");
    carouselControlNext.classList.remove("carousel-control-disabled");
  }, 600);
}
