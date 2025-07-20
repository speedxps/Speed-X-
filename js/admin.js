fetch('data/users.json')
  .then(response => response.json())
  .then(users => {
    const list = document.getElementById('users-list');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.name} - ${user.phone} - ${user.balance} شيكل`;
      list.appendChild(li);
    });
  });