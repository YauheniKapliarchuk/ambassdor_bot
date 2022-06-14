import { Model } from './../../model';
import { Message } from 'telegram-typings';

import { HandlerOptions, State, Action } from '../types';
import { Context } from '../../context';
import { UserRole } from '../../database/models';

import { guest, admin, ceo, director, member, memberSet } from '../handlers';
import menu from '../handlers/menu';
import * as responses from '../responses';

export default async (
  context: Context,
  model: Model
): Promise<Message | null> => {

  const action = context.text;

  // NEXT: remove test output
  console.log(action);

  const user = await model.user({ chatId: context.chatId });

  if (!user) {
    return null;
  }

  const options: HandlerOptions = { context, model, user };

  model.resetUserState(user._id);

  switch (action) {
    case Action.cancel:
      return menu({ context, model, user });

    case Action.logout:
      return guest.logout(options);
  }

  // ADMIN
  if (user.role === UserRole.admin) {
    switch (action) {
      case Action.appointCeo:
        return admin.chooseConference(options);

      case Action.showConferences:
        return admin.showConferences(options);
    }

    // input
    if (user.state === State.chooseConference) {
      return admin.inputCeoPhone(options);
    }
  }

  // CEO
  if (user.role === UserRole.ceo) {
    switch (action) {
      case Action.appointDirector:
        return ceo.inputDirectorPhone({ ...options, newClub: true });

      case Action.changeDirector:
        return ceo.chooseClub(options);

      case Action.showDirectors:
        return ceo.showDirectors(options);
    }

    // input
    if (user.state === State.chooseClub) {
      return ceo.inputDirectorPhone({ ...options, newClub: false });
    }
  }

  // DIRECTOR
  if (user.role === UserRole.director) {
    switch (action) {
      case Action.createClub:
        return director.inputClubName(options);

      case Action.updateClub:
        return context.reply(
          ...responses.directorResponse.updateClub
        );

      case Action.updateClubName:
        return director.inputNewClubName(options);

      case Action.updateClubCity:
        return director.inputNewClubCity(options);

      case Action.addMembers:
        return director.inputMemberPhone(options);

      case Action.deleteMember:
        return director.chooseMember(options);

      case Action.confirmDeleteMember:
        return director.deleteMember(options);

      case Action.showMembers:
        return director.showMembers(options);

      case Action.confirmCreateSet:
        return context.reply(
          ...responses.directorResponse.confirmCreateSet
        );

      case Action.createSet:
        return director.inputSetName(options);

      case Action.showSet:
        return director.showSet(options);

      case Action.confirmFinishSet:
        return context.reply(
          ...responses.directorResponse.confirmFinishSet
        );

      case Action.finishSet:
        return director.finishSet(options);

      case Action.notify:
        return director.inputNotifyMessage(options);

      // member features
      case Action.setSelfGoal:
        return memberSet.inputSelfGoal(options);

      case Action.showFriendGoal:
        return memberSet.showFriendGoal(options);

      // NEXT: implement friendship actions
      case Action.confirmFriendship:
        return context.reply(responses.memberResponse.confirmFriendship);
      case Action.refuseFriendship:
        return context.reply(responses.memberResponse.refuseFriendship);
    }

    // input
    if (user.state === State.chooseMemberForDelete) {
      return director.confirmDeleteMember(options);
    }
  }

  // MEMBER
  if (user.role === UserRole.member) {
    switch (action) {
      case Action.setSelfGoal:
        return memberSet.inputSelfGoal(options);

      case Action.sendOfferFriendship:
        return member.chooseFriend(options);

      // NEXT: implement friendship actions
      case Action.confirmFriendship:
        return context.reply(responses.memberResponse.confirmFriendship);
      case Action.refuseFriendship:
        return context.reply(responses.memberResponse.refuseFriendship);

      case Action.showFriendGoal:
        return memberSet.showFriendGoal(options);

      case Action.confirmLeave:
        return context.reply(
          ...responses.memberResponse.confirmLeave
        );

      case Action.leave:
        return member.leave(options);
    }

    // input
    if (user.state === State.chooseFriend) {
      return member.sendOfferFriendship(options);
    }
  }

  return null;
};
