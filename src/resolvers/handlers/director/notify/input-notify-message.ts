import { Handler, State } from '../../../types';
import { directorResponse } from '../../../responses';

const inputNotifyMessage: Handler = async ({ context, model, user }) => {
  await model.setUserState(user._id, State.inputNotifyMessage);
  return context.reply(directorResponse.inputNotifyMessage);
};

export default inputNotifyMessage;
