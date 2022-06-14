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
const responses_1 = require("../responses");
const menu_1 = require("./menu");
exports.authorize = function ({ context, db }) {
    return __awaiter(this, void 0, void 0, function* () {
        const phone = context.text;
        const result = yield db.users.findOneAndUpdate({
            phone,
            chatId: { $exists: false },
        }, {
            $set: {
                chatId: context.chatId,
                name: context.userName,
            },
        });
        const guest = result.value;
        if (!guest) {
            return context.reply(responses_1.guest.authorizationRetryInputPhone);
        }
        return menu_1.default({ context, db, user: guest });
    });
};
// TODO: remove logout
exports.logout = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        yield db.users.findOneAndUpdate({
            _id: user._id
        }, {
            $unset: {
                chatId: '',
            },
        });
        return context.reply(responses_1.guest.authorizationAskPhone);
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3Vlc3QuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsicmVzb2x2ZXJzL2hhbmRsZXJzL2d1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQSw0Q0FBa0Q7QUFDbEQsaUNBQTBCO0FBUWIsUUFBQSxTQUFTLEdBQXVCLFVBQWdCLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTs7UUFFMUUsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUMzQixNQUFNLE1BQU0sR0FBRyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7WUFDN0MsS0FBSztZQUNMLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7U0FDUixFQUFFO1lBQ2xCLElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07Z0JBQ3RCLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUTthQUNmO1NBQ1YsQ0FBQyxDQUFDO1FBRUwsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUUzQixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFTLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUM5RDtRQUVELE9BQU8sY0FBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQUEsQ0FBQTtBQUVELHNCQUFzQjtBQUNULFFBQUEsTUFBTSxHQUFZLFVBQWdCLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7O1FBQ2xFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztZQUM5QixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7U0FDSyxFQUFFO1lBQ2xCLE1BQU0sRUFBRTtnQkFDTixNQUFNLEVBQUUsRUFBRTthQUNRO1NBQ3JCLENBQUMsQ0FBQztRQUVMLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxpQkFBUyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDeEQsQ0FBQztDQUFBLENBQUEifQ==