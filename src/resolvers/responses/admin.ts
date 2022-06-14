import { ConferenceInfo } from './../../model';
import { CallbackButton } from '@jace1995/telegraf-helpers';

import { Conference } from '../../database/models';

import { Action } from '../types/action';
import { responses, cancelButton, logoutButton } from './common';

interface ConferenceInfoParams {
  conferenceName: string;
  ceo: string;
}

const text = {
  // menu
  menuAdmin: '[МЕНЮ ДЛЯ АДМИНА]',
  appointCeo: 'назначить руководителя',
  showConferences: 'список конференций',

  // chooseConference
  chooseConference: 'выберите конференцию',

  // appoint ceo
  inputCeoPhone: 'введите телефон нового руководителя',
  userIsNotCeo: 'пользователь с таким номером не является руководителем',
  ceoWasAppointed: 'этот руководитель уже был назначен',
  changeCeoSuccess: 'новый руководитель назначен',
  inviteCeoSuccess: 'приглашение выслано',

  // demote ceo
  demoteCeoSuccess: 'руководитель разжалован',

  // show conferences
  conferencesNotFound: 'конференции не найдены',
  ceoInvited: 'руководитель приглашен',
  ceoNotAppointed: 'руководитель не назначен',
  conferenceInfo: (params: ConferenceInfoParams) => (
    `${params.conferenceName}: ${params.ceo}`
  ),
  conferencesList: (conferences: string[]) => (
    'список конференций: \n' +
    conferences.join('\n')
  ),
};

// ADMIN
export default responses({
  // menu
  menuAdmin: [text.menuAdmin, [
    {
      text: text.appointCeo,
      callback_data: Action.appointCeo,
    },
    {
      text: text.showConferences,
      callback_data: Action.showConferences,
    },
    logoutButton,
  ]],

  // appoint ceo
  chooseConference(conferences: Conference[]) {
    return [
      text.chooseConference,
      [
        ...conferences.map<CallbackButton[]>(conference => ([{
          text: conference.name,
          callback_data: String(conference._id),
        }])),
        [cancelButton],
      ],
    ];
  },
  inputCeoPhone: [
    text.inputCeoPhone,
    cancelButton,
  ],
  userIsNotCeo: [
    text.userIsNotCeo,
    cancelButton,
  ],
  ceoWasAppointed: text.ceoWasAppointed,
  changeCeoSuccess: text.changeCeoSuccess,
  inviteCeoSuccess: text.inviteCeoSuccess,

  // demote ceo
  demoteCeoSuccess: text.demoteCeoSuccess,

  // show conferences
  showConferences(conferences: ConferenceInfo[]) {
    if (!conferences.length) {
      return text.conferencesNotFound;
    }

    const conferencesList = conferences.map<string>(conference => {
      const getCeo = () => {
        const ceo = conference.ceo;
        if (conference.ceoId) {
          if (ceo && ceo.name) {
            return ceo.name;
          } else {
            return text.ceoInvited;
          }
        }
        return text.ceoNotAppointed;
      };

      return text.conferenceInfo({
        conferenceName: conference.name,
        ceo: getCeo(),
      });
    });

    return text.conferencesList(conferencesList);
  },
});
