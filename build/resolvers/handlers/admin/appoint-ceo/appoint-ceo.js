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
const mongodb_1 = require("mongodb");
const database_1 = require("../../../../database");
const menu_1 = require("../../menu");
const responses_1 = require("../../../responses");
// TODO: refactoring
const appointCeo = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        const phone = context.text;
        const payload = user.payload;
        const conferenceId = new mongodb_1.ObjectID(payload.conferenceId);
        const perform = () => __awaiter(this, void 0, void 0, function* () {
            const ceo = yield db.users.findOne({ phone });
            if (ceo) {
                if (ceo.role !== database_1.UserRole.ceo) {
                    return null;
                }
                return {
                    ceoId: ceo._id,
                    invitation: false,
                };
            }
            else {
                const ceoId = (yield db.users.insertOne({
                    phone,
                    role: database_1.UserRole.ceo,
                })).insertedId;
                return {
                    ceoId,
                    invitation: true,
                };
            }
        });
        const result = yield perform();
        if (!result) {
            return context.reply(...responses_1.admin.userIsNotCeo);
        }
        const conference = (yield db.conferences.findOneAndUpdate({
            _id: conferenceId
        }, {
            $set: {
                ceoId: result.ceoId,
            },
        })).value;
        const lastSeoId = conference.ceoId;
        if (result.ceoId !== lastSeoId) {
            db.users.deleteOne({ _id: lastSeoId });
        }
        if (result.invitation) {
            yield context.reply(responses_1.admin.inviteCeoSuccess);
        }
        else {
            yield context.reply(responses_1.admin.appointCeoSuccess);
        }
        return menu_1.default({ context, db, user });
    });
};
exports.default = appointCeo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwb2ludC1jZW8uanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsicmVzb2x2ZXJzL2hhbmRsZXJzL2FkbWluL2FwcG9pbnQtY2VvL2FwcG9pbnQtY2VvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBbUM7QUFHbkMsbURBTThCO0FBQzlCLHFDQUE4QjtBQUM5QixrREFBd0Q7QUFFeEQsb0JBQW9CO0FBQ3BCLE1BQU0sVUFBVSxHQUFZLFVBQWdCLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7O1FBRS9ELE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0IsTUFBTSxPQUFPLEdBQTJCLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDckQsTUFBTSxZQUFZLEdBQUcsSUFBSSxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQVN4RCxNQUFNLE9BQU8sR0FBRyxHQUFzRCxFQUFFO1lBQ3RFLE1BQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQVUsQ0FBQyxDQUFDO1lBRXRELElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxtQkFBUSxDQUFDLEdBQUcsRUFBRTtvQkFDN0IsT0FBTyxJQUFJLENBQUM7aUJBQ2I7Z0JBRUQsT0FBTztvQkFDTCxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUc7b0JBQ2QsVUFBVSxFQUFFLEtBQUs7aUJBQ2xCLENBQUM7YUFDSDtpQkFBTTtnQkFDTCxNQUFNLEtBQUssR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7b0JBQ3RDLEtBQUs7b0JBQ0wsSUFBSSxFQUFFLG1CQUFRLENBQUMsR0FBRztpQkFDWCxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7Z0JBRXZCLE9BQU87b0JBQ0wsS0FBSztvQkFDTCxVQUFVLEVBQUUsSUFBSTtpQkFDakIsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxDQUFBLENBQUE7UUFFRCxNQUFNLE1BQU0sR0FBRyxNQUFNLE9BQU8sRUFBRSxDQUFDO1FBRS9CLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxpQkFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2pEO1FBRUQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7WUFDeEQsR0FBRyxFQUFFLFlBQVk7U0FDSixFQUFFO1lBQ2IsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSzthQUNOO1NBQ2hCLENBQUMsQ0FBQyxDQUFDLEtBQU0sQ0FBQztRQUViLE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFFbkMsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM5QixFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQVUsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQ3JCLE1BQU0sT0FBTyxDQUFDLEtBQUssQ0FBQyxpQkFBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNMLE1BQU0sT0FBTyxDQUFDLEtBQUssQ0FBQyxpQkFBUyxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDbEQ7UUFFRCxPQUFPLGNBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0NBQUEsQ0FBQTtBQUVELGtCQUFlLFVBQVUsQ0FBQyJ9