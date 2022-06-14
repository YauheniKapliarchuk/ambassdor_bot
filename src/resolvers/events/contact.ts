import { Message } from 'telegram-typings';
import { Context } from '../../context';
import { guest } from '../handlers';
import { Model } from '../../model';

export default async (
  context: Context,
  model: Model
): Promise<Message | null> => {
  const phone = context.contact.replace(/\+/, '');
  return guest.authorize({ context, model, phone });
}
