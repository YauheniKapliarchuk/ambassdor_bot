import { Handler } from '../../../types';
import { directorResponse, memberClubResponse } from '../../../responses';

const notify: Handler = async ({ context, model, user }) => {

  const message = context.text;

  await model.resetUserState(user._id);

  const club = await model.clubInfo(user._id);

  if (!club) {
    return context.reply(memberClubResponse.clubNotCreated);
  }

  for (const member of club.members) {
    if (member.chatId) {
      context.sendMessage(member.chatId, message);
    }
  }

  await context.reply(directorResponse.notifySuccess);
  return context.reply(
    ...directorResponse.menuDirector(
      await model.menuDirectorOptions(user._id)
    )
  );
};

export default notify;
