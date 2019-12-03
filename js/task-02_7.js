'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = function(allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  } else {
    return true;
  }
};

let allLogins;
const addLogin = function(allLogins, login) {
  let result;
  if (isLoginValid(login) === false) {
    result = 'Ошибка! Логин должен быть от 4 до 16 символов';
  } else if (isLoginUnique(allLogins, login) === false) {
    result = 'Такой логин уже используется!';
  } else {
    allLogins = logins.push(login);
    result = 'Логин успешно добавлен!';
  }
  console.log(result);
};

// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
