import get from '@jace1995/config';

export default {
  MONGODB_URI: get('MONGODB_URI'),
  MONGODB_USERNAME: get('MONGODB_USERNAME'),
  MONGODB_PASSWORD: get('MONGODB_PASSWORD'),
  MONGODB_DATABASE: get('MONGODB_DATABASE'),
  TELEGRAM_BOT_TOKEN: get('TELEGRAM_BOT_TOKEN'),
};
