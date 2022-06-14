import { Handler } from '../../../types';
import { ObjectID } from 'mongodb';
import { PayloadAdminAppointCeo } from '../../../../database/payload';
import { UserRole } from '../../../../database/models';
import { adminResponse } from '../../../responses';

// TEST: TODO: appoint ceo
const appointCeo: Handler = async ({ context, model, user }) => {
  const phone = context.text;
  const payload: PayloadAdminAppointCeo = user.payload;
  const conferenceId = new ObjectID(payload.conferenceId);
  const ceo = await model.user({ phone });

  // ceo exists
  if (ceo) {
    // change ceo

    if (ceo.role !== UserRole.ceo) {
      return context.reply(...adminResponse.userIsNotCeo);
    }

    await model.removeCeo(ceo._id);

    await model.changeCeo({
      conferenceId,
      ceoId: ceo._id,
    });

    await context.reply(adminResponse.changeCeoSuccess);
  } else {
    // invite ceo

    const ceoId = await model.createUser({
      phone,
      role: UserRole.ceo,
    });

    await model.changeCeo({
      conferenceId,
      ceoId,
    });

    await context.reply(adminResponse.inviteCeoSuccess);
  }

  return context.reply(...adminResponse.menuAdmin);
};

export default appointCeo;
