document.getElementById('themeToggle').addEventListener('click', function mode() {

    const currentTheme = document.body.className;

    if (currentTheme === 'light-theme') {

        document.body.className = 'dark-theme';
    } else {

        document.body.className = 'light-theme';
    }
});






const button = document.querySelector(".tabsbut");
const content = document.querySelector(".contenttabs");
button.addEventListener("click", (event) => {
  event.preventDefault();
  const { hidetext, showtext } = event.currentTarget.dataset;
  if (event.currentTarget.textContent === showtext) {
    event.currentTarget.textContent = hidetext;
  } else {
    event.currentTarget.textContent = showtext;
  }
  content.classList.toggle("auto-width");
});