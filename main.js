function toggleNav() {
  const navContainer = document.querySelector(".nav-container");
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((nav) => {
    nav.classList.toggle("open");
  });
  navContainer.classList.toggle("open");
}

function toggleTheme() {
  const htmlElement = document.documentElement;
  const currentTheme = htmlElement.getAttribute('data-theme');

  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  htmlElement.setAttribute('data-theme', newTheme);
}

function checkThemePreference() {
  // Check if the user prefers dark mode
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const htmlElement = document.documentElement;

  if (prefersDarkMode) {
  htmlElement.setAttribute('data-theme', "dark");
  } else {
  htmlElement.setAttribute('data-theme', "light");
  }
}

checkThemePreference()
