"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_helpers_1 = require("@jace1995/telegraf-helpers");
class Context {
    // telegram user
    get chatId() {
        return this.context.from.id;
    }
    get userName() {
        const user = this.context.from;
        const firstName = user.first_name;
        const lastName = user.last_name;
        return `${firstName} ${lastName}`;
    }
    // telegram message
    // get messageId() {
    //   return this.context.message!.message_id;
    // }
    get text() {
        if (this.context.message) {
            return this.context.message.text || '';
        }
        if (this.context.callbackQuery) {
            return this.context.callbackQuery.data || '';
        }
        return '';
    }
    // constructor
    constructor(context) {
        this.context = context;
    }
    reply(message, buttons) {
        return this.context.reply(message, telegraf_helpers_1.inlineKeyboard(buttons));
    }
    sendMessageTo(user, message, buttons) {
        this.context.telegram.sendMessage(user, message, telegraf_helpers_1.inlineKeyboard(buttons));
    }
}
exports.Context = Context;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJjb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaUVBQTRFO0FBSTVFLE1BQWEsT0FBTztJQUdsQixnQkFBZ0I7SUFFaEIsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUssQ0FBQyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSyxDQUFDO1FBQ2hDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNoQyxPQUFPLEdBQUcsU0FBUyxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxtQkFBbUI7SUFFbkIsb0JBQW9CO0lBQ3BCLDZDQUE2QztJQUM3QyxJQUFJO0lBRUosSUFBSSxJQUFJO1FBQ04sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUN4QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7U0FDeEM7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUM5QztRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELGNBQWM7SUFFZCxZQUFZLE9BQTZCO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBZSxFQUFFLE9BQXdCO1FBQzdDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQ3ZCLE9BQU8sRUFDUCxpQ0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUN4QixDQUFDO0lBQ0osQ0FBQztJQUVELGFBQWEsQ0FBQyxJQUFZLEVBQUUsT0FBZSxFQUFFLE9BQXdCO1FBQ25FLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FDL0IsSUFBSSxFQUNKLE9BQU8sRUFDUCxpQ0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUN4QixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBcERELDBCQW9EQyJ9