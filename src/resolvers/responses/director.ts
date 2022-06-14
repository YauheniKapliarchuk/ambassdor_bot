import { ClubInfo } from './../../model';
import { CallbackButton } from '@jace1995/telegraf-helpers';

import { Action } from '../types/action';
import {
  responses,
  cancelButton,
  logoutButton,
  setSelfGoalButton,
  showFriendGoalButton,
} from './common';

interface MemberInfo {
  name?: string;
  phone: string;
}

const text = {
  // dialog
  okAnswer: 'да',
  newMember: 'новый участник',

  // menu
  menuDirector: '[МЕНЮ ДЛЯ ДИРЕКТОРА]',
  createClub: 'создать клуб',
  updateClub: 'изменить клуб',
  addMembers: 'добавить члена',
  deleteMember: 'убрать члена',
  membersList: 'список членов',
  createSet: 'создать сет',
  showSet: 'посмотреть сет',
  finishSet: 'завершить сет',
  notify: 'оповещение',

  // create/update club
  inputClubName: 'введите название клуба',
  inputClubCity: 'введите город',
  clubCreated: 'клуб создан',
  whatChange: 'что изменяем?',
  updateClubName: 'название',
  updateClubCity: 'город',
  clubUpdated: 'иформация клуба изменена',

  // add member
  inputMemberPhone: 'введите телефон нового пользователя',
  userExists: 'пользователь с таким телефоном уже есть в системе',
  memberInvited: 'приглашение отправлено',

  // delete member
  whatDelete: 'кого удаляем?',
  confirmDeleteMember: 'точно удалить?',
  memberDeleted: 'участник исключен',

  // show members
  clubIsEmpty: 'клуб пустой',
  membersNotFound: 'Участники не найдены',
  showMembersList: (membersInfo: MemberInfo[]) => (
    membersInfo.map(member => (
      `${
      member.name ? member.name : 'новый участник'
      } (${member.phone})`
    )).join('\n') || 'Участники не найдены'
  ),

  // create set
  confirmCreateSet: 'пересоздать сет? старый удалится!',
  inputSetName: 'введите название сета',
  inputSetGoal: 'введите цель на сет',
  inputSetFinish: 'введите дату окончания сета (дд.мм.гггг)',
  wrongDateFinishFormat: 'неправильная дата',
  overdueDateFinishFormat: 'просроченная дата, введите повторно',
  setCreated: 'сет создан',
  setCreatedNotification: 'внимание, создан новый сет!',

  // finish set
  confirmFinishSet: 'завершить сет? вся информация по предыдущему сету будет удалена!',

  // notify
  inputNotifyMessage: 'введите сообщение',
  notifySuccess: 'оповещение разослано',
};

export interface MenuDirectorOptions {
  clubCreated: boolean;
  setCreated: boolean;
  isSetMember: boolean;
  haveFriend: boolean;
}

// DIRECTOR
export default responses({
  //menu
  menuDirector(options: MenuDirectorOptions) {
    const buttons = [];

    if (!options.clubCreated) {
      buttons.push([
        {
          text: text.createClub,
          callback_data: Action.createClub,
        },
      ]);
    } else {
      const row1 = [
        {
          text: text.updateClub,
          callback_data: Action.updateClub,
        },
        {
          text: text.addMembers,
          callback_data: Action.addMembers,
        },
        {
          text: text.deleteMember,
          callback_data: Action.deleteMember,
        },
        {
          text: text.membersList,
          callback_data: Action.showMembers,
        },
      ];
      buttons.push(row1);

      const row2 = [];
      row2.push(
        {
          text: text.createSet,
          callback_data: options.setCreated ?
            Action.confirmCreateSet :
            Action.createSet,
        },
      );
      if (options.setCreated) {
        row2.push(
          {
            text: text.showSet,
            callback_data: Action.showSet,
          },
          {
            text: text.finishSet,
            callback_data: Action.confirmFinishSet,
          },
        );
      }
      row2.push(
        {
          text: text.notify,
          callback_data: Action.notify,
        },
      );
      buttons.push(row2);

      if (options.isSetMember) {
        const row3 = [];
        row3.push(setSelfGoalButton);
        if (options.haveFriend) {
          row3.push(showFriendGoalButton);
        }
        buttons.push(row3);
      }
    }

    buttons.push([logoutButton]);

    return [text.menuDirector, buttons];
  },

  // create/update club
  inputClubName: text.inputClubName,
  inputClubCity: text.inputClubCity,
  clubCreated: text.clubCreated,
  updateClub: [text.whatChange, [
    {
      text: text.updateClubName,
      callback_data: Action.updateClubName,
    },
    {
      text: text.updateClubCity,
      callback_data: Action.updateClubCity,
    },
    cancelButton,
  ]],
  clubUpdated: text.clubUpdated,

  // add member
  inputMemberPhone: [text.inputMemberPhone, cancelButton],
  userExists: text.userExists,
  memberInvited: text.memberInvited,

  // delete member
  chooseMember(club: ClubInfo) {
    return [
      text.whatDelete,
      [
        ...club.members.map<CallbackButton[]>(member => ([{
          text: (member.name || text.newMember) + ` (${member.phone})`,
          callback_data: String(member._id),
        }])),
        [cancelButton],
      ],
    ];
  },
  confirmDeleteMember: [
    text.confirmDeleteMember,
    [
      {
        text: text.okAnswer,
        callback_data: Action.confirmDeleteMember,
      },
      cancelButton,
    ],
  ],
  memberDeleted: text.memberDeleted,

  // show members
  showMembers(club: ClubInfo) {
    if (!club.members) {
      return text.clubIsEmpty;
    }

    return text.showMembersList(club.members);
  },

  // create set
  confirmCreateSet: [text.confirmCreateSet, [
    {
      text: text.okAnswer,
      callback_data: Action.createSet,
    },
    cancelButton,
  ]],
  inputSetName: [text.inputSetName, cancelButton],
  inputSetGoal: text.inputSetGoal,
  inputSetFinish: text.inputSetFinish,
  wrongDateFinishFormat: text.wrongDateFinishFormat,
  overdueDateFinishFormat: text.overdueDateFinishFormat,
  setCreated: text.setCreated,
  setCreatedNotification: text.setCreatedNotification,

  // finish set
  confirmFinishSet: [text.confirmFinishSet, [
    {
      text: text.okAnswer,
      callback_data: Action.finishSet,
    },
    cancelButton,
  ]],

  // notify
  inputNotifyMessage: text.inputNotifyMessage,
  notifySuccess: text.notifySuccess,
});
