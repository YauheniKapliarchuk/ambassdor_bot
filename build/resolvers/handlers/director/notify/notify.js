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
const responses_1 = require("../../../responses");
const menu_1 = require("../../menu");
const notify = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        const message = context.text;
        yield db.helpers.resetState(user._id);
        const club = yield db.aggregations.club(user._id);
        if (!club) {
            return context.reply(responses_1.director.clubNotCreated);
        }
        // TODO:remove test output
        console.log(club);
        for (const member of club.members) {
            if (member.chatId) {
                context.sendMessageTo(member.chatId, message);
            }
        }
        yield context.reply(responses_1.director.notifySuccess);
        return menu_1.default({ context, db, user });
    });
};
exports.default = notify;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInJlc29sdmVycy9oYW5kbGVycy9kaXJlY3Rvci9ub3RpZnkvbm90aWZ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxrREFBMkQ7QUFDM0QscUNBQThCO0FBRTlCLE1BQU0sTUFBTSxHQUFZLFVBQWdCLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7O1FBRTNELE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFFN0IsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFdEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsMEJBQTBCO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEIsS0FBSyxNQUFNLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pDLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDakIsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQy9DO1NBQ0Y7UUFFRCxNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3QyxPQUFPLGNBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0NBQUEsQ0FBQTtBQUVELGtCQUFlLE1BQU0sQ0FBQyJ9