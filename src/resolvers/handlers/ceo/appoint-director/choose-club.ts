import { Handler, State } from '../../../types';
import { ceoResponse } from '../../../responses';

const chooseClub: Handler = async ({ context, model, user }) => {
  const clubs = await model.clubs();

  await model.setUserState(user._id, State.chooseClub);

  return context.reply(
    ...ceoResponse.chooseClub(clubs)
  );
};

export default chooseClub;
