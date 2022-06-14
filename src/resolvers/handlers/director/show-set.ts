import { Handler } from '../../types';
import { memberSetResponse, memberClubResponse } from '../../responses';

const showSet: Handler = async ({ context, model, user }) => {
  const club = await model.clubByDirector(user._id);

  if (!club) {
    return context.reply(memberClubResponse.clubNotCreated);
  }

  if (!club.set) {
    return context.reply(memberSetResponse.setNotCreated);
  }

  return context.reply(
    memberSetResponse.showSet(club.set)
  );
};

export default showSet;
