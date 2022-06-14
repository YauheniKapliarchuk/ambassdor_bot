import { ContextMessageUpdate } from 'telegraf';
import { inlineKeyboard, InlineKeyboard, CallbackButton } from '@jace1995/telegraf-helpers';

export type ChatId = string | number;

const contactKeyboard = (buttonText: string): any => {
  return {
    reply_markup: {
      one_time_keyboard: true,
      keyboard: [[{
        text: buttonText,
        request_contact: true
      }]]
    }
  }
};

export class Context {
  context: ContextMessageUpdate;

  // telegram user

  get chatId() {
    return this.context.from!.id;
  }

  get userName() {
    const user = this.context.from!;
    const firstName = user.first_name || '';
    const lastName = user.last_name || '';

    if (firstName) {
      if (lastName) {
        return `${firstName} ${lastName}`;
      } else {
        return firstName;
      }
    } else {
      return '';
    }
  }

  get contact() {
    return this.context.update.message!.contact!.phone_number;
  }

  // telegram message

  // get messageId() {
  //   return this.context.message!.message_id;
  // }

  get text(): string {
    if (this.context.message) {
      return this.context.message.text || '';
    }
    if (this.context.callbackQuery) {
      return this.context.callbackQuery.data || '';
    }
    return '';
  }

  // constructor

  constructor(context: ContextMessageUpdate) {
    this.context = context;
  }

  reply(message: string, buttons?: InlineKeyboard) {
    return this.context.reply(
      message,
      inlineKeyboard(buttons),
    );
  }

  sendContactButton(message: string, button: CallbackButton) {
    return this.context.reply(
      message,
      contactKeyboard(button.text),
    );
  }

  sendMessage(user: ChatId, message: string, buttons?: InlineKeyboard) {
    this.context.telegram.sendMessage(
      user,
      message,
      inlineKeyboard(buttons),
    );
  }
}
