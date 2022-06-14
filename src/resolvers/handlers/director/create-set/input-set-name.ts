import { Handler, State } from '../../../types';
import { directorResponse } from '../../../responses';

const inputSetName: Handler = async ({ context, model, user }) => {
  await model.setUserState(user._id, State.inputSetName);
  return context.reply(...directorResponse.inputSetName);
};

export default inputSetName;
