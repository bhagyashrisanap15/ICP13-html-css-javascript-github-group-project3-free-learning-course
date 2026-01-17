
function changeText() {
  document.getElementById("title").innerText = "Hello Bhagyashri!";
  document.getElementById("text").innerText = "Text changed using JavaScript 🎉";
}

 function toggleMenu() {
        document.querySelector(".navbar").classList.toggle("show");
    }

  
    function toggleTheme() {
      const localstorageTheme = localStorage.getItem("theme");
      if (localstorageTheme === "dark") {
        ToggleLight();
        localStorage.setItem("theme", "light");
      } else {
        ToggleDark();
        localStorage.setItem("theme", "dark");
      }
    }
    function ToggleDark() {
       const icoLight = document.getElementById("ico-light");
    const icoDark = document.getElementById("ico-dark");
    const themeToggle = document.getElementById("theme-toggle");
      document.body.style.backgroundColor = "#000";
      icoLight.style.visibility = "hidden";
      icoDark.style.visibility = "visible";
      themeToggle.classList.add("theme-toggle-dark");
      themeToggle.classList.remove("theme-toggle-light");
      localStorage.setItem("theme","dark");

    }
    function ToggleLight() {
       const icoLight = document.getElementById("ico-light");
       const icoDark = document.getElementById("ico-dark");
       const themeToggle = document.getElementById("theme-toggle");
      document.body.style.backgroundColor = "#ffe4cc";
      icoLight.style.visibility = "visible";
      icoDark.style.visibility = "hidden";
      themeToggle.classList.add("theme-toggle-light");
      themeToggle.classList.remove("theme-toggle-dark");
      localStorage.setItem("theme","ligth");
    }
    function renderTheme() {
      
      const localstorageTheme = localStorage.getItem("theme");
      if (localstorageTheme === "dark") {
        ToggleDark();
      }else{
        ToggleLight();
      }
    }
    renderTheme();