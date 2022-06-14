import { Handler, State } from '../../../types';
import { PayloadDirectorCreateClub } from '../../../../database/payload';
import { directorResponse } from '../../../responses';

const inputClubCity: Handler = async ({ context, model, user }) => {
  const payload: PayloadDirectorCreateClub = {
    clubName: context.text,
  };

  await model.setUserState(user._id, State.inputClubCity, payload);

  return context.reply(directorResponse.inputClubCity);
};

export default inputClubCity;
