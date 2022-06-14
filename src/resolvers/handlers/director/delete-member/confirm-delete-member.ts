import { ObjectID } from 'mongodb';

import { Handler } from '../../../types';
import { PayloadDirectorDeleteMember } from '../../../../database/payload';
import { directorResponse } from '../../../responses';

const confirmDeleteMember: Handler = async ({ context, model, user }) => {
  const memberId = new ObjectID(context.text);
  const payload: PayloadDirectorDeleteMember = { memberId };

  await model.saveUserPayload(user._id, payload);

  return context.reply(
    ...directorResponse.confirmDeleteMember
  );
};

export default confirmDeleteMember;
