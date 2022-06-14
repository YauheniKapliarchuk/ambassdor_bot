import { Handler } from '../../../types';
import { UserRole } from '../../../../database/models';
import { directorResponse } from '../../../responses';

const addMember: Handler = async ({ context, model, user }) => {
  const phone = context.text;
  const member = await model.user({ phone });

  // member exists
  if (member) {
    return context.reply(directorResponse.userExists);
  }

  const memberId = await model.createUser({
    phone,
    role: UserRole.member,
  });

  await model.addMemberToClub({
    directorId: user._id,
    memberId,
  });

  await context.reply(directorResponse.memberInvited);

  return context.reply(
    ...directorResponse.menuDirector(
      await model.menuDirectorOptions(user._id)
    )
  );
};

export default addMember;
