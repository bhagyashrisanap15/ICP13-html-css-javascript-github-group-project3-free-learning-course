
function changeText() {
  document.getElementById("title").innerText = "Hello Bhagyashri!";
  document.getElementById("text").innerText = "Text changed using JavaScript 🎉";
}


    function toggleMenu() {
        document.querySelector(".navbar").classList.toggle("show");
    }

    function toggleTheme(){
         const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        toggleLight();
    } else {
        toggleDark();
    }
}
   
    function toggleDark() {
       const themeToggle = document.getElementById("theme-toggle");
    const icoLight = document.getElementById("ico-light");
    const icoDark = document.getElementById("ico-dark");
        document.body.style.backgroundColor = "black";
        icoLight.style.visibility = "hidden";
        icoDark.style.visibility = "visible";
        themeToggle.classList.remove("theme-toggle-light");
        themeToggle.classList.add("theme-toggle-dark");
        localStorage.setItem("theme", "dark");
    }
    function toggleLight(){
       const themeToggle = document.getElementById("theme-toggle");
    const icoLight = document.getElementById("ico-light");
    const icoDark = document.getElementById("ico-dark");
        document.body.style.backgroundColor = "white";
        icoLight.style.visibility = "visible";
        icoDark.style.visibility = "hidden";
        themeToggle.classList.remove("theme-toggle-dark");
        themeToggle.classList.add("theme-toggle-light");
        localStorage.setItem("theme", "light");
    }
   function renderTheme(){
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        toggleDark();
    } else {
        toggleLight();
    }
}

renderTheme();