import { values } from 'lodash';
import { ObjectID } from 'mongodb';
import { Handler } from '../../types';
import {
  memberResponse,
  directorResponse,
  memberSetResponse,
  memberClubResponse,
} from '../../responses';

const finishSet: Handler = async ({ context, model, user }) => {
  const club = await model.clubByDirector(user._id);

  if (!club) {
    return context.reply(memberClubResponse.clubNotCreated);
  }

  if (!club.set) {
    return context.reply(memberSetResponse.setNotCreated);
  }

  await model.finishSet(user._id);
  await context.reply(memberSetResponse.setFinished);

  // TEST: TODO: notify members + show new menu
  for (const member of values(club.set.members)) {
    if (member.chatId) {
      await context.sendMessage(member.chatId, memberSetResponse.setFinished);

      if (!member.isDirector) {
        await context.sendMessage(
          member.chatId,
          ...memberResponse.menuMember(
            await model.menuMemberOptions(
              new ObjectID(member.id)
            )
          )
        );
      }
    }
  }

  return context.reply(
    ...directorResponse.menuDirector(
      await model.menuDirectorOptions(user._id)
    )
  );
};

export default finishSet;
