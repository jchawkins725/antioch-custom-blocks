import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function drawaThread(e) {
	e.forEach((el) => {
		const pathLength = el.getTotalLength();
		el.style.strokeDasharray = pathLength + " " + pathLength;
		el.style.strokeDashoffset = pathLength;
		const scrollPercentage =
			(el.getBoundingClientRect().top - window.innerHeight + 200) /
			((window.innerHeight / 2) * -1);
		if (scrollPercentage >= 0 && scrollPercentage <= 1) {
			var drawLength = pathLength * scrollPercentage;
			el.style.strokeDashoffset = pathLength - drawLength;
		}
		scrollPercentage >= 0.99
			? (el.style.strokeDasharray = "none")
			: scrollPercentage <= 0
			? (el.style.strokeDashoffset = pathLength)
			: (el.style.strokeDasharray = pathLength + " " + pathLength);
	});
}

window.addEventListener("scroll", function (e) {
	var paths = [...document.querySelectorAll("[class^='drawn-thread'] path")];
	if (!paths) {
		return;
	} else {
		drawaThread(paths);
	}
});

function backgroundCurve(e) {
	e.forEach((el) => {
		const svgEl = el.closest("svg");
		const pathTo = el.dataset.pathTo;
		gsap
			.timeline({
				scrollTrigger: {
					trigger: svgEl,
					start: "top bottom",
					end: "bottom top",
					scrub: true,
				},
			})
			.to(el, {
				ease: "none",
				attr: { d: pathTo },
			});
	});
}

window.addEventListener("DOMContentLoaded", function (e) {
	const paths = [
		...document.querySelectorAll("[class^='background-curve'] path"),
	];
	if (!paths) {
		return;
	} else {
		backgroundCurve(paths);
	}
});
