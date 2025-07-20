
document.addEventListener("DOMContentLoaded", () => {
  fetch("notifications.json")
    .then(response => response.json())
    .then(data => {
      const list = document.getElementById("notification-list");
      list.innerHTML = "";

      if (data.length === 0) {
        list.innerHTML = "<li>لا توجد إشعارات حالياً.</li>";
        return;
      }

      data.forEach(notification => {
        const item = document.createElement("li");
        item.classList.add("notification-item");
        item.innerHTML = \`
          <h4>\${notification.title}</h4>
          <p>\${notification.message}</p>
          <small>\${notification.date}</small>
        \`;
        list.appendChild(item);
      });
    })
    .catch(error => {
      console.error("خطأ في تحميل الإشعارات:", error);
      document.getElementById("notification-list").innerHTML = "<li>تعذر تحميل الإشعارات.</li>";
    });
});
