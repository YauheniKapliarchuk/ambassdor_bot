import { Handler, State } from '../../../types';
import { directorResponse } from '../../../responses';
import { PayloadDirectorCreateSet } from '../../../../database/payload';

const inputSetGoal: Handler = async ({ context, model, user }) => {
  const setName = context.text;
  const payload: PayloadDirectorCreateSet = {
    name: setName,
  };

  await model.setUserState(user._id, State.inputSetGoal, payload);

  return context.reply(directorResponse.inputSetGoal);
};

export default inputSetGoal;
