import { CallbackButton } from '@jace1995/telegraf-helpers';
import { ClubSetMember } from './../../database/models';
import {
  responses,
  logoutButton,
  cancelButton,
  setSelfGoalButton,
  showFriendGoalButton,
} from './common';
import { Action } from '../types/action';
import { loginButton } from './common';

const text = {
  // dialod
  okAnswer: 'да',
  confirmAnswer: 'принять',
  refuseAnswer: 'отказаться',

  // menu
  menuMember: '[МЕНЮ ДЛЯ ЧЛЕНА]',
  sendOfferFriendship: 'предложить дружбу',
  leaveClub: 'покинуть клуб',

  // offer friendship
  chooseMember: 'кому отправляем?',
  newMember: 'новый участник',
  userNotFound: 'пользователь не найден, попробуйте выполнить команду /start',
  userNotRegistrated: 'этот пользователь еще не зарегистрирован',
  offerFriendshipDelivered: 'предложение доставлено',
  offerFriendship: (userName: string) => (
    `предложение дружбы от пользователя '${userName}'`
  ),
  // NEXT: implement friendship actions
  confirmFriendship: 'Предложение уже было принято автоматически 💪',
  refuseFriendship: 'От такого предложения невозможно отказаться 😎',

  // leave
  confirmLeave: 'самоуничтожиться?',
  leaved: 'выход выполнен, для повторной регистрации введите номер телефона',
};

export interface MenuMemberOptions {
  isSetMember: boolean;
  haveFriend: boolean;
}

// MEMBER
export default responses({
  // menu
  menuMember(options: MenuMemberOptions) {
    const buttons = [];

    if (options.isSetMember) {
      const row1 = [];
      row1.push(setSelfGoalButton);

      if (options.haveFriend) {
        row1.push(showFriendGoalButton);
      } else {
        row1.push({
          text: text.sendOfferFriendship,
          callback_data: Action.sendOfferFriendship,
        });
      }

      buttons.push(row1);
    }

    buttons.push([
      {
        text: text.leaveClub,
        callback_data: Action.confirmLeave,
      },
      logoutButton,
    ]);

    return [text.menuMember, buttons];
  },

  // offer friendship
  chooseMember(members: ClubSetMember[]) {
    return [
      text.chooseMember,
      [
        ...members.filter(member => member.id).map<CallbackButton[]>(member => ([{
          text: (member.name || text.newMember),
          callback_data: String(member.id),
        }])),
        [cancelButton],
      ],
    ];
  },
  userNotFound: text.userNotFound,
  userNotRegistrated: text.userNotRegistrated,
  offerFriendshipDelivered: text.offerFriendshipDelivered,
  offerFriendship(name: string) {
    return [text.offerFriendship(name), [
      {
        text: text.confirmAnswer,
        callback_data: Action.confirmFriendship,
      },
      {
        text: text.refuseAnswer,
        callback_data: Action.refuseFriendship,
      },
    ]];
  },
  // NEXT: implement friendship actions
  confirmFriendship: text.confirmFriendship,
  refuseFriendship: text.refuseFriendship,

  // leave
  confirmLeave: [text.confirmLeave, [
    {
      text: text.confirmAnswer,
      callback_data: Action.leave,
    },
    cancelButton,
  ]],
  leaved: [text.leaved, loginButton],
});
