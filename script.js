document.addEventListener("DOMContentLoaded", function () {
    console.log("Space Manhwa site loaded!");
  
    // Dark Mode Toggle (if not using React state)
    const darkModeButton = document.getElementById("darkModeToggle");
    if (darkModeButton) {
      darkModeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
      });
    }
  
    // Menu Toggle
    const menuButton = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");
    if (menuButton && menu) {
      menuButton.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
    }
  
    // Login Modal
    const loginButton = document.getElementById("loginToggle");
    const loginModal = document.getElementById("loginModal");
    const closeLogin = document.getElementById("closeLogin");
  
    if (loginButton && loginModal && closeLogin) {
      loginButton.addEventListener("click", () => {
        loginModal.classList.remove("hidden");
      });
  
      closeLogin.addEventListener("click", () => {
        loginModal.classList.add("hidden");
      });
    }
  });
  