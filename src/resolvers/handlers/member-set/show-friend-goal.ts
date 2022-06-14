import { Handler } from '../../types';
import { UserRole } from '../../../database/models';
import { memberSetResponse, memberClubResponse } from '../../responses';

const showFriendGoal: Handler = async ({ context, model, user }) => {
  const club = user.role === UserRole.director ?
    await model.clubByDirector(user._id) :
    await model.clubByMember(user._id);

  if (!club) {
    return context.reply(memberClubResponse.clubNotCreated);
  }

  if (!club.set) {
    return context.reply(memberClubResponse.clubNotCreated);
  }

  const friendId = club.set.members[String(user._id)].friendId;

  if (!friendId) {
    return context.reply(memberSetResponse.friendNotFound);
  }

  const friend = club.set.members[String(friendId)];

  return context.reply(
    memberSetResponse.showFriendGoal(friend)
  );
};

export default showFriendGoal;
