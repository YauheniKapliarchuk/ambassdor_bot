import { Model } from './../../model';
import { Handler } from './../types';
import { User, UserRole } from '../../database/models';
import * as responses from '../responses';
import { ContextReplyParametres } from '../responses/common';

const getResponse = async (model: Model, user: User): Promise<ContextReplyParametres> => {
  switch (user.role) {
    case UserRole.admin:
      return responses.adminResponse.menuAdmin;

    case UserRole.ceo:
      return responses.ceoResponse.menuCeo;

    case UserRole.director:
      return responses.directorResponse.menuDirector(
        await model.menuDirectorOptions(user._id)
      );

    case UserRole.member:
      return responses.memberResponse.menuMember(
        await model.menuMemberOptions(user._id)
      );
  }
};

const menu: Handler = async ({ context, model, user }) => {
  return context.reply(
    ...await getResponse(model, user)
  );
};

export default menu;
