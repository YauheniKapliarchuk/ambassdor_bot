import { values } from 'lodash';
import { Model } from './../../model';
import { ChatId, Id } from './../../database/models';
import { Club, ClubSet } from '../../database/models';
import {
  directorResponse,
  memberResponse,
  memberSetResponse,
} from '../responses';
import { ObjectId } from 'bson';

interface ClubFinihSet extends Club {
  directorId: Id;
  set: ClubSet;
}

export default async (
  model: Model,
  sendMessage: (chatId: ChatId, text: string, extra?: any) => void
): Promise<void> => {
  // NEXT: remove test output
  console.log('timer');

  const clubs = await model.clubs();

  const clubsWithFinishedSet = clubs.filter(
    club => club.set && club.set.finish.getTime() < Date.now() // TODO: TEST: ">" (need "<")
  ) as ClubFinihSet[];

  for (const club of clubsWithFinishedSet) {
    await model.finishSet(club.directorId);

    const members = values(club.set.members);

    for (const member of members) {
      if (member.chatId) {
        // notify member
        await sendMessage(member.chatId, memberSetResponse.setFinished);

        // update members menu
        if (member.isDirector) {
          await sendMessage(
            member.chatId,
            ...directorResponse.menuDirector(
              await model.menuDirectorOptions(club.directorId)
            )
          );
        } else {
          await sendMessage(
            member.chatId,
            ...memberResponse.menuMember(
              await model.menuMemberOptions(new ObjectId(member.id))
            )
          );
        }
      }
    }

    // update directors menu
    if (members.every(member => !member.isDirector)) {
      const director = await model.user({
        _id: club.directorId,
      });

      if (director && director.chatId) {
        await sendMessage(director.chatId, memberSetResponse.setFinished);
        await sendMessage(
          director.chatId,
          ...directorResponse.menuDirector(
            await model.menuDirectorOptions(director._id)
          )
        );
      }
    }
  }

  // TEST: TODO: remove test output
  console.log(clubsWithFinishedSet.map(club => club.set!.members));
}
