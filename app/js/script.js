const notifications = document.querySelectorAll('.notification__container');
const btnReadAll = document.querySelector('#readAll');
const notificationNumber = document.querySelector('#notificationNumber');

notifications.forEach(item => {
  item.addEventListener('mouseenter', e => {
    if (e.target.children[0].children[1].children[0].classList.contains('unread')){
      console.log('mensagem lida');
      e.target.children[0].children[1].children[0].classList.remove('unread');
      updateNotificationNumber();
    };
  })
})

function readAllNotifications() {
  let notifications = document.querySelectorAll('.notification__container');
  notifications.forEach(item => {
    item.children[0].children[1].children[0].classList.remove('unread');
  });
  updateNotificationNumber()
}

function updateNotificationNumber() {
  const count = document.querySelectorAll('.unread').length;
  notificationNumber.innerHTML = count;
}

btnReadAll.onclick = readAllNotifications;