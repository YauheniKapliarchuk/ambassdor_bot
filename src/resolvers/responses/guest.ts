import { responses, loginButton } from './common';

const text = {
  authorizationAskPhone: '[ПРИВЕТСТВИЕ ДЛЯ АНОНИМА]: введите телефон',
  authorizationRetryInputPhone: 'пользователь с таким телефоном не найден, попробуйте снова или обратитесь в клуб',
};

// GUEST
export default responses({
  // authorization
  authorizationAskPhone: [
    text.authorizationAskPhone,
    loginButton,
  ],
  authorizationRetryInputPhone: [
    text.authorizationRetryInputPhone,
    loginButton,
  ],
});
