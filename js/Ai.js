function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('active');
  });

  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
  event.target.classList.add('active');
}

function toggleAccordion(header) {
  const body = header.nextElementSibling;
  body.style.display = body.style.display === "block" ? "none" : "block";
}
<<<<<<< HEAD
function toggleMenu() {
        document.querySelector(".navbar").classList.toggle("show");
    }
=======





>>>>>>> 226808ee55c5c65da23835226ea8bb03b1146aa1

