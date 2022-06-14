import { ObjectID } from 'mongodb';

import { Handler, State } from '../../../types';
import { PayloadAdminAppointCeo } from '../../../../database/payload';
import { adminResponse } from '../../../responses';

const inputCeoPhone: Handler = async ({ context, model, user }) => {
  const conferenceId = new ObjectID(context.text);
  const payload: PayloadAdminAppointCeo = { conferenceId };

  await model.setUserState(user._id, State.inputCeoPhone, payload);

  return context.reply(...adminResponse.inputCeoPhone);
};

export default inputCeoPhone;
