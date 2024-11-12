function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  
  // Update theme icon
  const themeIcon = document.getElementById("theme-icon");
  if (themeIcon) {
    themeIcon.src = `/images/${theme === "light" ? "dark" : "light"}.svg`;
  }
  
  // Update favicons based on theme
  const faviconApple = document.querySelector('link[rel="apple-touch-icon"]');
  const favicon32 = document.querySelector('link[rel="icon"][sizes="32x32"]');
  const favicon16 = document.querySelector('link[rel="icon"][sizes="16x16"]');
  
  const prefix = theme === "dark" ? "" : "light-";
  
  if (faviconApple) faviconApple.href = `/favicon_io/${prefix}apple-touch-icon.png`;
  if (favicon32) favicon32.href = `/favicon_io/${prefix}favicon-32x32.png`;
  if (favicon16) favicon16.href = `/favicon_io/${prefix}favicon-16x16.png`;
}

// Apply theme immediately before DOM content loads to prevent flash
const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";
      setTheme(newTheme);
    });
  }

  // Back to top button functionality
  const backToTopButton = document.getElementById("back-to-top");

  // Show button when scrolling down
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  // Scroll to top when clicked
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
