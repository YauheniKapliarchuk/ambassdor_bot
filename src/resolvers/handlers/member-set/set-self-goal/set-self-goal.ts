import { UserRole } from '../../../../database/models';
import { Handler } from '../../../types';
import { memberSetResponse, memberClubResponse } from '../../../responses';
import menu from '../../menu';

const setSelfGoal: Handler = async ({ context, model, user }) => {
  const goal = context.text;

  await model.resetUserState(user._id);

  const club = user.role === UserRole.director ?
    await model.clubByDirector(user._id) :
    await model.clubByMember(user._id);

  if (!club) {
    return context.reply(memberClubResponse.clubNotCreated);
  }

  if (!club.set) {
    return context.reply(memberClubResponse.clubNotCreated);
  }

  await model.setGoal(user._id, goal);

  await context.reply(memberSetResponse.goalCreated);
  return menu({ context, model, user });
};

export default setSelfGoal;
