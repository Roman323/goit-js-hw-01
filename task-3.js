const ADMIN_PASSWORD = "jqueryismyjam";
let answ = prompt("Password", "");
let message =
  answ === null
    ? "Отменено пользователем!"
    : answ === ADMIN_PASSWORD
    ? "Добро пожаловать!"
    : "Доступ запрещен, неверный пароль!";
alert(message);
