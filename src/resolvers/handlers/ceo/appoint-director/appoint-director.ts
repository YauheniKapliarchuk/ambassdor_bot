import { Handler } from '../../../types';
import { ObjectID } from 'mongodb';
import { UserRole } from '../../../../database/models';
import { PayloadCeoAppointDirector } from '../../../../database/payload';
import { ceoResponse } from '../../../responses';

// TEST: TODO: appoint director
const appointDirector: Handler = async ({ context, model, user }) => {
  const phone = context.text;
  const payload: PayloadCeoAppointDirector = user.payload;
  const clubId = payload.clubId ? new ObjectID(payload.clubId) : null;
  const director = await model.user({ phone });

  if (director) {
    if (!clubId) {
      return context.reply(ceoResponse.directorWasInvited);
    }

    if (director.role !== UserRole.director) {
      return context.reply(...ceoResponse.userIsNotDirector);
    }

    await model.addDirectorToConference({
      ceoId: user._id,
      directorId: director._id,
    });

    await model.changeDirector({
      clubId,
      ceoId: user._id,
      directorId: director._id,
    });

    await context.reply(ceoResponse.changeDirectorSuccess);
  } else {
    const directorId = await model.createUser({
      phone,
      role: UserRole.director,
    });

    await model.addDirectorToConference({
      ceoId: user._id,
      directorId,
    });

    if (clubId) {
      await model.changeDirector({
        clubId,
        ceoId: user._id,
        directorId,
      });
    }

    await context.reply(ceoResponse.inviteDirectorSuccess);
  }

  return context.reply(...ceoResponse.menuCeo);
};

export default appointDirector;
