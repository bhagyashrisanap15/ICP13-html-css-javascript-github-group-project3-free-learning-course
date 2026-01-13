function showTab(id, el) {
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

  document.getElementById(id).classList.add('active');
  el.classList.add('active');
}

function toggle(header) {
  const body = header.nextElementSibling;
  body.style.display = body.style.display === "block" ? "none" : "block";
}
