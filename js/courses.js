const searchInput = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestions");
const resultMsg = document.getElementById("resultMsg");

const data = [
  "Learn Python",
  "Learn Digital Marketing",
  "Learn Artificial Intelligence",
  "Learn Cyber Security",
  "Learn Data Analytics",
  "Eng for carrer developement"
];

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  suggestionsBox.innerHTML = "";
  resultMsg.className = "";

  if (value === "") {
    suggestionsBox.style.display = "none";
    resultMsg.style.opacity = "0";
    return;
  }

  const filtered = data.filter(item =>
    item.toLowerCase().includes(value)
  );

  if (filtered.length > 0) {
    resultMsg.innerHTML = "✅ Course Found";
    resultMsg.classList.add("show-success");
  } else {
    resultMsg.innerHTML = "❌ Course Not Found";
    resultMsg.classList.add("show-error");
  }

  filtered.forEach(item => {
    const div = document.createElement("div");
    div.className = "suggestion-item";
    div.textContent = item;

    div.onclick = () => {
      searchInput.value = item;
      suggestionsBox.style.display = "none";
      resultMsg.innerHTML = "✅ Course Found";
      resultMsg.className = "show-success";
    };

    suggestionsBox.appendChild(div);
  });

  suggestionsBox.style.display = filtered.length ? "block" : "none";
});

// Hide suggestions when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-container")) {
    suggestionsBox.style.display = "none";
  }
});





