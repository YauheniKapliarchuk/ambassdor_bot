import { Handler, State } from '../../../types';
import { UserRole } from '../../../../database/models';
import { memberSetResponse, memberClubResponse } from '../../../responses';

const inputSelfGoal: Handler = async ({ context, model, user }) => {
  const club = user.role === UserRole.director ?
    await model.clubByDirector(user._id) :
    await model.clubByMember(user._id);

  if (!club) {
    return context.reply(memberClubResponse.clubNotCreated);
  }

  if (!club.set) {
    return context.reply(memberClubResponse.clubNotCreated);
  }

  const goal = club.set.members[String(user._id)].goal;

  // goal was setted
  if (goal) {
    return context.reply(memberSetResponse.goalIsReadonly);
  }

  await model.setUserState(user._id, State.inputSelfGoal);

  return context.reply(...memberSetResponse.inputSelfGoal);
};

export default inputSelfGoal;
