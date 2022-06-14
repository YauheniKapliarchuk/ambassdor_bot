import { ClubSetMember, ClubSet } from './../../database/models';
import { responses, cancelButton } from './common';
import moment = require('moment');

interface ShowSetParams {
  set: string;
  goal: string;
  finishDate: string;
}

interface ShowFriendGoalParams {
  friendName: string;
  friendGoal: string;
}

const text = {
  // errors
  setNotCreated: 'сет не создан',
  setFinished: 'сет завершен',

  // show set
  showSet: (params: ShowSetParams) => (
    params.set + '\n' +
    'Цель на сет: ' + params.goal + '\n' +
    'Дата завершения: ' + params.finishDate
  ),

  // set self goal
  goalIsReadonly: 'вы уже поставили цель, изменить нельзя',
  inputSelfGoal: 'введите цель на сет',
  goalCreated: 'цель поставлена',

  // show friend goal
  friendNotFound: 'у вас нет друзей, такие дела',
  friendWithoutGoal: 'ваш друг еще не поставил цель на сет, пните его чтоб поторопился :)',
  showFriendGoal: (params: ShowFriendGoalParams) => (
    params.friendName + '\n' +
    'Цель на сет: ' + params.friendGoal
  ),
};

// DIRECTOR & MEMBER
export default responses({
  // errors
  setNotCreated: text.setNotCreated,
  setFinished: text.setFinished,

  // show set
  showSet(set: ClubSet) {
    return text.showSet({
      set: set.name,
      goal: set.goal,
      finishDate: moment(set.finish).format('DD.MM.YYYY'),
    });
  },

  // set self goal
  goalIsReadonly: text.goalIsReadonly,
  inputSelfGoal: [text.inputSelfGoal, cancelButton],
  goalCreated: text.goalCreated,

  // show friend goal
  friendNotFound: text.friendNotFound,
  friendWithoutGoal: text.friendWithoutGoal,
  showFriendGoal(friend: ClubSetMember) {
    if (!friend.goal) {
      return text.friendWithoutGoal;
    }

    return text.showFriendGoal({
      friendName: friend.name,
      friendGoal: friend.goal,
    });
  },
});
