import { values } from 'lodash';
import { Handler, State } from '../../../types';
import { memberResponse, memberSetResponse } from '../../../responses';

const chooseFriend: Handler = async ({ context, model, user }) => {
  const club = await model.clubByMember(user._id);

  if (!club.set) {
    return context.reply(memberSetResponse.setNotCreated);
  }

  model.setUserState(user._id, State.chooseFriend);

  const members = values(club.set.members).filter(member =>
    member.id !== String(user._id) &&
    !member.friendId
  );

  return context.reply(
    ...memberResponse.chooseMember(members)
  );
};

export default chooseFriend;
