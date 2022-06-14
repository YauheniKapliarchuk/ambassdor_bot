import { Handler } from '../../../types';
import { directorResponse } from '../../../responses';

const updateClub: Handler = async ({ context, model, user }) => {

  const clubName = context.text;

  await model.resetUserState(user._id);
  await model.updateClubInfo(user._id, {
    name: clubName,
  });

  await context.reply(directorResponse.clubUpdated);
  return context.reply(
    ...directorResponse.menuDirector(
      await model.menuDirectorOptions(user._id)
    )
  );
};

export default updateClub;
