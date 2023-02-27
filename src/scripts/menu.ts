export const hamburgerIcon = document.querySelector(
  ".hamburger"
) as HTMLDivElement;
const navLinks = document.querySelector(".nav-links") as HTMLDivElement;

hamburgerIcon.addEventListener("click", () => {
  navLinks.classList.toggle("expanded");
});
