import { Handler } from '../../../types';
import { PayloadDirectorCreateClub } from '../../../../database/payload';
import { directorResponse } from '../../../responses';

const createClub: Handler = async ({ context, model, user }) => {
  const clubCity = context.text;
  const payload: PayloadDirectorCreateClub = user.payload;

  await model.resetUserState(user._id);

  await model.createClub({
    name: payload.clubName,
    city: clubCity,
    directorId: user._id,
  });

  await context.reply(directorResponse.clubCreated);

  return context.reply(
    ...directorResponse.menuDirector(
      await model.menuDirectorOptions(user._id)
    )
  );
};

export default createClub;
