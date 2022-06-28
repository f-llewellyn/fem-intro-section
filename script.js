const nav = document.querySelector("nav");
const navMenu = document.querySelectorAll(".nav__menu");
const collapseButtons = document.querySelectorAll(".subnav__collapsable");
const collapseLinks = document.querySelectorAll(".subnav__links");

navMenu.forEach((el) => {
	el.addEventListener("click", (e) => {
		nav.classList.toggle("translate");
	});
});

collapseButtons.forEach((el) => {
	el.addEventListener("mouseover", (e) => {
		const links = e.target.nextElementSibling;
		links.classList.toggle("hidden");
	});
});

collapseLinks.forEach((el) => {
	el.addEventListener("mouseleave", (e) => {
		e.target.classList.toggle("hidden");
	});
});
