import { ObjectID } from 'mongodb';

import { Handler } from '../../../types';
import { PayloadDirectorDeleteMember } from '../../../../database/payload';
import { directorResponse } from '../../../responses';

const deleteMember: Handler = async ({ context, model, user }) => {
  const payload: PayloadDirectorDeleteMember = user.payload;
  const memberId = new ObjectID(payload.memberId);

  await model.removeMemberFromClub(memberId);
  await model.deleteUser(memberId);

  await context.reply(directorResponse.memberDeleted);
  return context.reply(
    ...directorResponse.menuDirector(
      await model.menuDirectorOptions(user._id)
    )
  );
};

export default deleteMember;
