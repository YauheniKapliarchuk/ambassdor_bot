import { Model } from './../../model';
import { Handler } from '../types';
import { Context } from './../../context';
import { guestResponse } from '../responses';
import menu from './menu';

export interface Authorize {
  context: Context;
  model: Model;
  phone: string;
}

export const authorize: Handler<Authorize> = async ({ context, model, phone }) => {
  const guest = await model.authorize({
    phone,
    chatId: context.chatId,
    name: context.userName,
  });

  if (!guest) {
    return context.sendContactButton(...guestResponse.authorizationRetryInputPhone);
  }

  return menu({ context, model, user: guest });
};

// NEXT: remove logout
export const logout: Handler = async ({ context, model, user }) => {
  await model.logout(user._id);
  return context.sendContactButton(...guestResponse.authorizationAskPhone);
};
