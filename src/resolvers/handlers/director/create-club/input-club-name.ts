import { Handler, State } from '../../../types';
import { directorResponse } from '../../../responses';

const inputClubName: Handler = async ({ context, model, user }) => {
  await model.setUserState(user._id, State.inputClubName);
  return context.reply(directorResponse.inputClubName);
};

export default inputClubName;
