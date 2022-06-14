import { Handler, State } from '../../../types';
import { directorResponse } from '../../../responses';

const inputMemberPhone: Handler = async ({ context, model, user }) => {
  await model.setUserState(user._id, State.inputMemberPhone);
  return context.reply(...directorResponse.inputMemberPhone);
};

export default inputMemberPhone;
