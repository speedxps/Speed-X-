document.addEventListener("DOMContentLoaded", function () {
  const usernameSpan = document.getElementById("username");
  const speedSpan = document.getElementById("speed");
  const balanceSpan = document.getElementById("balance");

  const userPhone = localStorage.getItem("userPhone");

  if (!userPhone) {
    window.location.href = "index.html"; // لم يتم تسجيل الدخول
    return;
  }

  fetch("users.json")
    .then((res) => res.json())
    .then((users) => {
      const user = users.find((u) => u.phone === userPhone);
      if (!user) {
        alert("لم يتم العثور على بيانات المستخدم.");
        return;
      }

      usernameSpan.innerText = user.name || "مستخدم";
      speedSpan.innerText = user.speed || "غير معروف";
      balanceSpan.innerText = `${user.balance || 0} ₪`;
    })
    .catch((error) => {
      console.error("خطأ في تحميل بيانات المستخدم:", error);
      alert("حدث خطأ أثناء تحميل البيانات.");
    });
});