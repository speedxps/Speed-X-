
document.addEventListener("DOMContentLoaded", () => {
  // تحميل المستخدمين من localStorage أو قائمة افتراضية
  const defaultUsers = [
    { username: "noor", password: "noor123" },
    { username: "salim", password: "salim123" },
    { username: "mona", password: "mona123" }
  ];
  const savedUsers = JSON.parse(localStorage.getItem("userList")) || defaultUsers;

  const userTableBody = document.getElementById("user-table-body");

  function renderUsers() {
    userTableBody.innerHTML = "";
    savedUsers.forEach((user, index) => {
      const row = document.createElement("tr");
      row.innerHTML = \`
        <td>\${user.username}</td>
        <td>\${user.password}</td>
        <td><button class="delete-btn" data-index="\${index}">حذف</button></td>
      \`;
      userTableBody.appendChild(row);
    });

    // حذف مستخدم
    document.querySelectorAll(".delete-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const index = btn.getAttribute("data-index");
        savedUsers.splice(index, 1);
        localStorage.setItem("userList", JSON.stringify(savedUsers));
        renderUsers();
      });
    });
  }

  renderUsers();

  // إضافة مستخدم
  document.getElementById("add-user-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("new-username").value.trim();
    const password = document.getElementById("new-password").value.trim();

    if (!username || !password) return;

    savedUsers.push({ username, password });
    localStorage.setItem("userList", JSON.stringify(savedUsers));

    document.getElementById("new-username").value = "";
    document.getElementById("new-password").value = "";
    renderUsers();
  });
});
