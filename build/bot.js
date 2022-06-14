"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const config_1 = require("./config");
const database_1 = require("./database");
const context_1 = require("./context");
const on = require("./resolvers");
class Bot {
    static start() {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.DataBase.connect();
            const bot = new telegraf_1.default(config_1.default.TELEGRAM_BOT_TOKEN);
            // bot events
            bot.on('text', context => on.text(new context_1.Context(context), db));
            bot.on('callback_query', context => on.action(new context_1.Context(context), db));
            // start
            yield bot.launch();
            return bot;
        });
    }
}
exports.default = Bot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbImJvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQTBEO0FBRTFELHFDQUE4QjtBQUM5Qix5Q0FBc0M7QUFDdEMsdUNBQW9DO0FBQ3BDLGtDQUFrQztBQU1sQyxNQUFxQixHQUFHO0lBQ3RCLE1BQU0sQ0FBTyxLQUFLOztZQUNoQixNQUFNLEVBQUUsR0FBRyxNQUFNLG1CQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEMsTUFBTSxHQUFHLEdBQUcsSUFBSSxrQkFBUSxDQUFDLGdCQUFNLENBQUMsa0JBQWtCLENBQWlCLENBQUM7WUFFcEUsYUFBYTtZQUNiLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3RCxHQUFHLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUV6RSxRQUFRO1lBQ1IsTUFBTSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFbkIsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDO0tBQUE7Q0FDRjtBQWRELHNCQWNDIn0=