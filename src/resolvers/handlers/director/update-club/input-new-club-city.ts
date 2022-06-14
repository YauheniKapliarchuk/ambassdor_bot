import { Handler, State } from '../../../types';
import { directorResponse } from '../../../responses';

const inputNewClubName: Handler = async ({ context, model, user }) => {
  await model.setUserState(user._id, State.inputNewClubCity);
  return context.reply(directorResponse.inputClubCity);
};

export default inputNewClubName;
