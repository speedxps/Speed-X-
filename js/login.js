function login() {
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();

  // حالة الإدمن
  if (phone === "admin" && password === "123") {
    localStorage.setItem("loggedInUser", "admin");
    window.location.href = "admin.html";
    return;
  }

  // تحقق من المستخدمين العاديين
  fetch("data/users.json")
    .then(response => response.json())
    .then(users => {
      const user = users.find(u => u.phone === phone && u.password === password);
      if (user) {
        localStorage.setItem("loggedInUser", user.username);
        localStorage.setItem("userData", JSON.stringify(user)); // 👈 نحفظ بياناته كاملة
        window.location.href = "dashboard.html";
      } else {
        alert("رقم الجوال أو كلمة المرور غير صحيحة.");
      }
    })
    .catch(error => {
      console.error("فشل تحميل المستخدمين:", error);
      alert("حدث خطأ أثناء تسجيل الدخول.");
    });
}
