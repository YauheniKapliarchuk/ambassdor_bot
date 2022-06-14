import { Handler, State } from '../../../types';
import { directorResponse } from '../../../responses';
import { PayloadDirectorCreateSet } from '../../../../database/payload';

const inputSetFinish: Handler = async ({ context, model, user }) => {

  const setGoal = context.text;
  const payload: PayloadDirectorCreateSet = {
    ...user.payload,
    goal: setGoal,
  };

  await model.setUserState(user._id, State.inputSetFinish, payload);

  return context.reply(directorResponse.inputSetFinish);
};

export default inputSetFinish;
