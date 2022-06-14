import { Model } from './../../model';
import { Handler } from './../types';
import { Context } from '../../context';
import { User } from '../../database/models';
import menu from './menu';
import * as responses from '../responses';

export interface StartOptions {
  context: Context;
  model: Model;
  user: User | null;
}

export const start: Handler<StartOptions> = async ({ context, model, user }) => {
  if (user) {
    return menu({ context, model, user });
  } else {
    return context.sendContactButton(...responses.guestResponse.authorizationAskPhone);
  }
};

export default start;
