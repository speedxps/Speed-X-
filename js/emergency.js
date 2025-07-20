
document.addEventListener("DOMContentLoaded", () => {
  fetch("emergency.json")
    .then(response => response.json())
    .then(data => {
      const list = document.getElementById("emergency-list");
      list.innerHTML = "";

      if (data.length === 0) {
        list.innerHTML = "<li>لا توجد بلاغات طارئة حالياً.</li>";
        return;
      }

      data.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("notification-item");
        li.innerHTML = \`
          <h4>\${item.title}</h4>
          <p>\${item.description}</p>
          <small>\${item.date} - الحالة: <strong>\${item.status}</strong></small>
        \`;
        list.appendChild(li);
      });
    })
    .catch(error => {
      console.error("خطأ في تحميل بيانات الطوارئ:", error);
      document.getElementById("emergency-list").innerHTML = "<li>تعذر تحميل البيانات.</li>";
    });
});
