import { Message } from 'telegram-typings';

import { Context } from '../../context';
import { User } from '../../database/models';
import { Model } from '../../model';

export interface HandlerOptions {
  context: Context;
  model: Model;
  user: User;
}

export type Handler<Options = HandlerOptions> = (options: Options) => Promise<Message>;
