  const anchorBoxes = [];
  function initAnchorBoxes(el) {
    if (!el) {
      return;
    }
    anchorBoxes.length = 0;
    el.forEach((node) => anchorBoxes.push(document.querySelector(node.hash).parentElement.getBoundingClientRect()));
  }
  function underlineAnchors(el, anchors) {
    anchors.forEach((node) => node.classList.remove("active"));
    anchorBoxes.forEach((node, pos) => {
      if (node.bottom - el >= 0 && node.top - el <= 0) {
        anchors[pos].classList.add("active");
      }
    });
  }
  function stickOnPageNav() {
	const aioAnchors = document.querySelectorAll(".wp-block-aioseo-table-of-contents a");
	const stickyAnchor = document.querySelector(".wp-block-antioch-custom-blocks-sticky-anchor-links");
    if (!stickyAnchor) {
      return;
    } else {
      const navPos = document.querySelector("#mega-menu-wrap-main_nav").getBoundingClientRect();
      const offsetDistance = navPos.bottom + stickyAnchor.clientHeight;
      initAnchorBoxes(aioAnchors);
      if (window.pageYOffset <= 0) {
        stickyAnchor.classList.remove("sticky");
        stickyAnchor.style.top = "auto";
      } else {
        stickyAnchor.classList.add("sticky");
        stickyAnchor.style.top = `${navPos.bottom}px`;
        underlineAnchors(offsetDistance, aioAnchors);
      }
    }
  }
  window.addEventListener("load", function() {setTimeout(stickOnPageNav, 1000)});
  document.addEventListener("scroll", stickOnPageNav);
  window.addEventListener("resize", stickOnPageNav);
