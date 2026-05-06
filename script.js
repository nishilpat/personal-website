const chatButton = document.getElementById("chatButton");
const chatMenu = document.getElementById("chatMenu");

chatButton.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = chatMenu.classList.toggle("open");
  chatButton.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", (event) => {
  const clickedInside =
    chatButton.contains(event.target) || chatMenu.contains(event.target);
  if (!clickedInside) {
    chatMenu.classList.remove("open");
    chatButton.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && chatMenu.classList.contains("open")) {
    chatMenu.classList.remove("open");
    chatButton.setAttribute("aria-expanded", "false");
    chatButton.focus();
  }
});
