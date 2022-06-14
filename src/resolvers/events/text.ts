import { Model } from './../../model';
import { HandlerOptions, State } from '../types';
import { Message } from 'telegram-typings';

import { Context } from '../../context';
import { UserRole } from '../../database/models';
import { start, admin, ceo, director, member, memberSet } from '../handlers';

export default async (
  context: Context,
  model: Model
): Promise<Message | null> => {

  const message = context.text;

  // NEXT: remove test output
  console.log(message);

  const user = await model.user({ chatId: context.chatId });

  if (message.startsWith('/start')) {
    return start({ context, model, user });
  }

  if (!user) {
    return null;
  }

  const options: HandlerOptions = { context, model, user };

  if (!user.state) {
    return null;
  }

  // ADMIN
  if (user.role === UserRole.admin) {
    switch (user.state) {
      case State.inputCeoPhone:
        return admin.appointCeo(options);
    }
  }

  // CEO
  if (user.role === UserRole.ceo) {
    switch (user.state) {
      case State.inputDirectorPhone:
        return ceo.appointDirector(options);
    }
  }

  // DIRECTOR
  if (user.role === UserRole.director) {
    switch (user.state) {
      case State.inputClubName:
        return director.inputClubCity(options);

      case State.inputClubCity:
        return director.createClub(options);

      case State.inputNewClubName:
        return director.updateClubName(options);

      case State.inputNewClubCity:
        return director.updateClubCity(options);

      case State.inputMemberPhone:
        return director.addMember(options);

      case State.inputSetName:
        return director.inputSetGoal(options);

      case State.inputSetGoal:
        return director.inputSetFinish(options);

      case State.inputSetFinish:
        return director.createSet(options);

      case State.inputNotifyMessage:
        return director.notify(options);

      // member features
      case State.inputSelfGoal:
        return memberSet.setSelfGoal(options);
    }
  }

  // MEMBER
  if (user.role === UserRole.member) {
    switch (user.state) {
      case State.chooseFriend:
        return member.sendOfferFriendship(options);

      case State.inputSelfGoal:
        return memberSet.setSelfGoal(options);
    }
  }

  return null;
};
