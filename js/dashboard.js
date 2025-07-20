document.addEventListener("DOMContentLoaded", function () {
  const welcomeNameSpan = document.getElementById("welcome-name");

  // خزن اسم المستخدم في localStorage تحت هذا المفتاح:
  const loggedInUser = localStorage.getItem("loggedInUser");

  if (!loggedInUser) {
    // لم يتم تسجيل الدخول: اعادة توجيه للصفحة الرئيسية (تسجيل الدخول)
    window.location.href = "index.html";
    return;
  }

  fetch("data/users.json")
    .then((response) => response.json())
    .then((users) => {
      // البحث عن المستخدم بالاسم
      const user = users.find((u) => u.username === loggedInUser);
      if (!user) {
        alert("لم يتم العثور على بيانات المستخدم.");
        localStorage.removeItem("loggedInUser");
        window.location.href = "index.html";
        return;
      }

      // عرض اسم المستخدم في الترحيب
      welcomeNameSpan.textContent = user.username || "مستخدم";

      // يمكنك إضافة هنا تحديث عناصر أخرى في الصفحة حسب الحاجة
    })
    .catch((error) => {
      console.error("خطأ في تحميل بيانات المستخدم:", error);
      alert("حدث خطأ أثناء تحميل البيانات.");
    });
});

// التنقل بين الصفحات
function goTo(page) {
  window.location.href = page;
}

// تسجيل الخروج
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}
