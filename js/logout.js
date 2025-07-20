document.getElementById("logout-btn").addEventListener("click", function() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
});