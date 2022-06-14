import { Handler } from '../../../types';
import { directorResponse } from '../../../responses';

const updateClub: Handler = async ({ context, model, user }) => {
  const clubCity = context.text;

  await model.resetUserState(user._id);
  await model.updateClubInfo(user._id, {
    city: clubCity,
  });

  await context.reply(directorResponse.clubUpdated);
  return context.reply(
    ...directorResponse.menuDirector(
      await model.menuDirectorOptions(user._id)
    )
  );
};

export default updateClub;
