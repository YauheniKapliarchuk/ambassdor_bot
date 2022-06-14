import { ObjectID } from 'mongodb';

import { Handler, HandlerOptions, State } from '../../../types';
import { PayloadCeoAppointDirector } from '../../../../database/payload';
import { ceoResponse } from '../../../responses';

export interface ShowDirectorsOptions extends HandlerOptions {
  newClub: boolean;
}

const inputDirectorPhone: Handler<ShowDirectorsOptions> = async (
  { context, model, user, newClub }
) => {
  const clubId = newClub ? undefined : new ObjectID(context.text);
  const payload: PayloadCeoAppointDirector = { clubId };

  await model.setUserState(user._id, State.inputDirectorPhone, payload);

  return context.reply(...ceoResponse.inputDirectorPhone);
};

export default inputDirectorPhone;
