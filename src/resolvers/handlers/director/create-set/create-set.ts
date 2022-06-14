import { values } from 'lodash';
import * as moment from 'moment';
import { Handler } from '../../../types';
import { PayloadDirectorCreateSet } from '../../../../database/payload';
import { directorResponse, memberClubResponse, memberResponse } from '../../../responses';
import { ObjectID } from 'bson';

const createSet: Handler = async ({ context, model, user }) => {
  // validate date
  if (!context.text.match(/\d{2}\.\d{2}\.\d{4}/)) {
    return context.reply(
      directorResponse.wrongDateFinishFormat
    );
  }

  const setFinish = moment(context.text, 'DD.MM.YYYY').toDate();

  // validate date
  if (setFinish.getTime() < Date.now()) {
    return context.reply(
      directorResponse.overdueDateFinishFormat
    );
  }

  const payload: Required<PayloadDirectorCreateSet> = {
    ...user.payload,
    finish: setFinish,
  };

  const club = await model.clubInfo(user._id);

  if (!club) {
    return context.reply(memberClubResponse.clubNotCreated);
  }

  // add director to member list on this set
  if (club.members.length % 2 === 1) {
    club.members.push(user);
  }

  const clubSetMembers = model.clubSetMembers(club.members);

  await model.startSet(user._id, {
    ...payload,
    members: clubSetMembers,
  });

  // TEST: TODO: notify members + show new menu
  for (const member of values(clubSetMembers)) {
    if (member.chatId) {
      await context.sendMessage(member.chatId, directorResponse.setCreatedNotification);

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

  await model.resetUserState(user._id);

  await context.reply(directorResponse.setCreated);
  return context.reply(
    ...directorResponse.menuDirector(
      await model.menuDirectorOptions(user._id)
    )
  );
};

export default createSet;
