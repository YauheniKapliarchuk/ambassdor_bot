import { Handler, State } from '../../../types';
import { directorResponse, memberClubResponse } from '../../../responses';

const chooseMember: Handler = async ({ context, model, user }) => {

  const club = await model.clubInfo(user._id);

  if (!club) {
    return context.reply(memberClubResponse.clubNotCreated);
  }

  await model.setUserState(user._id, State.chooseMemberForDelete);

  return context.reply(
    ...directorResponse.chooseMember(club)
  );
};

export default chooseMember;
