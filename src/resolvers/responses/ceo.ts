import { DirectorInfo } from './../../model';
import { CallbackButton } from '@jace1995/telegraf-helpers';
import { Action } from '../types/action';
import { responses, cancelButton, logoutButton } from './common';

import { Club } from '../../database/models';

interface ClubInfoParams {
  clubName: string;
  clubCity: string;
  membersCount: number;
  directorName?: string;
  directorPhone: string;
}

interface ClubNotCreatedParams {
  directorPhone: string;
}

const text = {
  // menu
  menuCeo: '[МЕНЮ ДЛЯ ГЕН.ДИРЕКТОРА]',
  appointDirector: 'назначить директора',
  changeDirector: 'сменить директора',
  showDirectors: 'список клубов',

  // appoint director
  chooseClub: 'выберите клуб',
  inputDirectorPhone: 'введите телефон нового дирктора',
  directorWasInvited: 'этот директор уже был приглашён',
  userIsNotDirector: 'пользователь с таким номером не является директором',
  changeDirectorSuccess: 'новый директор назначен',
  inviteDirectorSuccess: 'приглашение выслано',

  // show clubs
  clubsNotFound: 'клубы не найдены',
  clubsList: 'список клубов:',
  clubInfo: (params: ClubInfoParams) => (
    `Клуб "${params.clubName}", ` +
    `город ${params.clubCity}, ` +
    `${params.membersCount} участников, ` +
    'директор - ' + (params.directorName || `приглашён (${params.directorPhone})`)
  ),
  newDirector: (params: ClubNotCreatedParams) => (
    `Новый директор: ${params.directorPhone}`
  ),
};

// CEO
export default responses({
  // menu
  menuCeo: [text.menuCeo, [
    {
      text: text.appointDirector,
      callback_data: Action.appointDirector,
    },
    {
      text: text.changeDirector,
      callback_data: Action.changeDirector,
    },
    {
      text: text.showDirectors,
      callback_data: Action.showDirectors,
    },
    logoutButton,
  ]],

  // appoint director
  chooseClub(clubs: Club[]) {
    return [
      text.chooseClub,
      [
        ...clubs.filter(club => club.name).map<CallbackButton[]>(club => ([{
          text: club.name,
          callback_data: String(club._id),
        }])),
        [cancelButton],
      ],
    ];
  },
  inputDirectorPhone: [text.inputDirectorPhone, cancelButton],
  directorWasInvited: text.directorWasInvited,
  userIsNotDirector: [text.userIsNotDirector, cancelButton],
  changeDirectorSuccess: text.changeDirectorSuccess,
  inviteDirectorSuccess: text.inviteDirectorSuccess,

  // show clubs
  showDirectors(directors: DirectorInfo[]) {
    if (!directors.length) {
      return text.clubsNotFound;
    }

    // TODO: refactoring, move to text
    return text.clubsList + '\n' + directors.map<string>(director => {
      if (director.club) {
        const club = director.club;
        return text.clubInfo({
          clubName: club.name,
          clubCity: club.city,
          membersCount: club.memberIds.length,
          directorName: director.name,
          directorPhone: director.phone,
        });
      } else {
        return text.newDirector({
          directorPhone: director.phone,
        });
      }
    }).join('\n');
  },
});
