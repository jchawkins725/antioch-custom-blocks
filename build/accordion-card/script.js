/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/accordion-card/script.js ***!
  \**************************************/
function openAccordion() {
  const accordionCard = this.parentElement.nextElementSibling;

  if (this.classList.contains("open")) {
    closeAccordion(this, accordionCard);
  } else {
    this.classList.add("open");
    removeClassHeightFromSiblings(this);
    this.setAttribute("aria-expanded", "true");
    accordionCard.classList.remove("collapse");
    accordionCard.classList.add("collapsing");
    accordionCard.style.height = accordionCard.scrollHeight + "px";
    setTimeout(function () {
      accordionCard.classList.remove("collapsing");
      accordionCard.classList.add('show', 'collapse');
    }, 350);
  }
}

function closeAccordion(el, sibling) {
  el.classList.remove("open");
  el.setAttribute("aria-expanded", "false");
  sibling.classList.add("collapsing");
  sibling.classList.remove("collapse", "show");
  sibling.style.height = null;
  setTimeout(function () {
    sibling.classList.remove("collapsing");
    sibling.classList.add('collapse');
  }, 350);
}

function removeClassHeightFromSiblings(elem) {
  var sibling = elem.closest('.accordion').firstElementChild;

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem.parentElement.parentElement) {
      closeAccordion(sibling.querySelector('button'), sibling.querySelector('.accordion-collapse'));
    }

    sibling = sibling.nextSibling;
  }
}

;
document.querySelectorAll(".accordion .card-header button").forEach(el => {
  el.addEventListener("click", openAccordion);
});
/******/ })()
;
//# sourceMappingURL=script.js.map