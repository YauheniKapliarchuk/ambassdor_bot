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
const database_1 = require("../../database");
const responses_1 = require("../responses");
const menu_1 = require("./menu");
const config_1 = require("../../config");
exports.start = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: remove test output
        console.log('start', user);
        const authorizeAdmin = () => __awaiter(this, void 0, void 0, function* () {
            yield db.users.updateOne({ role: database_1.UserRole.admin }, {
                $set: {
                    chatId: context.chatId,
                    name: responses_1.adminUserName,
                },
            });
            return context.reply(...responses_1.admin.menuAdmin);
        });
        // authorization
        if (!user) {
            const password = context.text.match(/\/start *(.*)/)[1];
            if (password === config_1.default.ADMIN_PASSWORD) {
                return authorizeAdmin();
            }
            else {
                return context.reply(responses_1.guest.authorizationAskPhone);
            }
        }
        // show menu
        return menu_1.default({ context, db, user });
    });
};
exports.default = exports.start;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsicmVzb2x2ZXJzL2hhbmRsZXJzL3N0YXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSw2Q0FBMEQ7QUFDMUQsNENBQTJEO0FBQzNELGlDQUEwQjtBQUMxQix5Q0FBa0M7QUFRckIsUUFBQSxLQUFLLEdBQTBCLFVBQWdCLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7O1FBQy9FLDJCQUEyQjtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUzQixNQUFNLGNBQWMsR0FBRyxHQUFTLEVBQUU7WUFDaEMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxtQkFBUSxDQUFDLEtBQUssRUFBVSxFQUFFO2dCQUN6RCxJQUFJLEVBQUU7b0JBQ0osTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO29CQUN0QixJQUFJLEVBQUUseUJBQWE7aUJBQ1o7YUFDVixDQUFDLENBQUM7WUFDSCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQ2xCLEdBQUcsaUJBQUssQ0FBQyxTQUFTLENBQ25CLENBQUM7UUFDSixDQUFDLENBQUEsQ0FBQztRQUVGLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFekQsSUFBSSxRQUFRLEtBQUssZ0JBQU0sQ0FBQyxjQUFjLEVBQUU7Z0JBQ3RDLE9BQU8sY0FBYyxFQUFFLENBQUM7YUFDekI7aUJBQU07Z0JBQ0wsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQzthQUNuRDtTQUNGO1FBRUQsWUFBWTtRQUNaLE9BQU8sY0FBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Q0FBQSxDQUFBO0FBRUQsa0JBQWUsYUFBSyxDQUFDIn0=