import { Handler } from '../../types';
import { directorResponse, memberClubResponse } from '../../responses';

const showMembers: Handler = async ({ context, model, user }) => {

  const club = await model.clubInfo(user._id);

  if (!club) {
    return context.reply(memberClubResponse.clubNotCreated);
  }

  return context.reply(
    directorResponse.showMembers(club)
  );
};

export default showMembers;
