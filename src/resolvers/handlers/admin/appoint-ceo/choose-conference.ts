import { Handler, State } from '../../../types';
import { adminResponse } from '../../../responses';

const chooseConference: Handler = async ({ context, model, user }) => {
  const conferences = await model.conferences();

  await model.setUserState(user._id, State.chooseConference);

  return context.reply(
    ...adminResponse.chooseConference(conferences)
  );
};

export default chooseConference;
