//переменные
const planBlockButtons = document.querySelectorAll(".plans__item_button");
const feedbackSelectors = document.querySelectorAll(".feedback_selector");
const carouselElement = document.querySelector('.items');


//функции
const toggleButton = (button, oldText, newText, oldClass, newClass) => {
  if (button.classList.contains(oldClass)) {
    button.classList.remove(oldClass);
    button.classList.add(newClass);
    button.textContent = newText;
  } else {
    button.classList.remove(newClass);
    button.classList.add(oldClass);
    button.textContent = oldText;
  }
};
const toggleBSelector = (button, activeClass) => {
  if (button.classList.contains(activeClass)) {
    button.classList.remove(activeClass);
  } else {
    button.classList.add(activeClass);
  }
};

//обработчики событий
planBlockButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    toggleButton(button, "Выбрать Тариф", "Тариф выбран", "pink", "blue");
  });
});
feedbackSelectors.forEach((selector) => {
  selector.addEventListener("click", (e) => {
    toggleBSelector(selector, "active");
  });
});


// карусель
  const flkty = new Flickity(carouselElement, {
    draggable: true,
    prevNextButtons: false,
    cellAlign: 'left',
    pageDots: false,
    adaptiveHeight: true
  });