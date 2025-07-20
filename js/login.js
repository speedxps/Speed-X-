function login() {
  const usernameOrPhone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();

  // ✅ حالة الإدمن
  if ((usernameOrPhone === "admin" || usernameOrPhone === "0500000000") && password === "123") {
    localStorage.setItem("loggedInUser", "admin");
    alert("👑 مرحبًا Admin! تسجيل الدخول ناجح");
    window.location.href = "admin.html";
    return;
  }

  // ✅ تحقق من المستخدمين العاديين (اسم مستخدم أو رقم جوال)
  fetch("data/users.json")
    .then(response => response.json())
    .then(users => {
      const user = users.find(u =>
        (u.username === usernameOrPhone || u.phone === usernameOrPhone) &&
        u.password === password
      );

      if (user) {
        // حفظ اسم المستخدم في LocalStorage
        localStorage.setItem("loggedInUser", user.username);
        alert("🎉 مرحبًا " + user.username + "! تسجيل الدخول ناجح");
        // الانتقال إلى صفحة الفواتير
        window.location.href = "bills.html";
      } else {
        alert("❌ اسم المستخدم أو كلمة المرور غير صحيحة.");
      }
    })
    .catch(error => {
      console.error("⚠️ فشل تحميل المستخدمين:", error);
      alert("🚨 حدث خطأ أثناء تسجيل الدخول.");
    });
}
