import Telegraf, { ContextMessageUpdate } from 'telegraf';
import { inlineKeyboard } from '@jace1995/telegraf-helpers';

import config from './config';
import { DataBase } from './database';
import { Context } from './context';
import * as on from './resolvers';
import { DataBaseModel } from './model';

export interface TelegrafWrap extends Telegraf<ContextMessageUpdate> {
  launch(options?: any): Promise<void>;
}

const Bot = {
  async start() {
    const db = await DataBase.connect();
    const model = new DataBaseModel(db);
    const bot = new Telegraf(config.TELEGRAM_BOT_TOKEN) as TelegrafWrap;

    // bot events
    bot.on(
      'text',
      context => on.text(new Context(context), model)
    );
    bot.on(
      'callback_query',
      context => on.action(new Context(context), model)
    );
    bot.on(
      'contact',
      context => on.contact(new Context(context), model)
    );

    const setTimer = () => {
      const now = new Date();
      const tommorow = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        8,
      );
      const delta = tommorow.getTime() - now.getTime();
      // const delta = 5000; // TEST: uncomment

      setTimeout(async () => {
        await on.timer(
          model,
          (id, message, buttons) => bot.telegram.sendMessage(
            id, message, inlineKeyboard(buttons)
          )
        );
        setTimer();
      }, delta);
    };
    setTimer();

    // start
    await bot.launch();

    return bot;
  }
}

export default Bot;
