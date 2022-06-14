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
const moment = require("moment");
const responses_1 = require("../../../responses");
const menu_1 = require("../../menu");
const createSet = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!context.text.match(/\d{2}\.\d{2}\.\d{4}/)) {
            return context.reply(responses_1.director.wrongDateFinishFormat);
        }
        const setFinish = moment(context.text, 'DD.MM.YYYY').toDate();
        if (setFinish.getTime() < Date.now()) {
            return context.reply(responses_1.director.overdueDateFinishFormat);
        }
        const payload = user.payload;
        payload.finish = setFinish;
        const club = yield db.aggregations.club(user._id);
        if (!club) {
            return context.reply(responses_1.director.clubNotCreated);
        }
        if (club.members.length % 2 === 1) {
            club.members.push(user);
        }
        const clubSetMembers = club.members
            .filter(member => member.name)
            .reduce((members, currentMember) => {
            const memberId = String(currentMember._id);
            members[memberId] = {
                name: currentMember.name,
            };
            return members;
        }, {});
        yield db.clubs.updateOne({ directorId: user._id }, {
            $set: {
                set: Object.assign({}, payload, { members: clubSetMembers }),
            },
        });
        yield db.users.updateOne({ directorId: user._id }, {
            $unset: {
                state: '',
                payload: '',
            },
        });
        db.helpers.resetState(user._id);
        yield context.reply(responses_1.director.setCreated);
        return menu_1.default({ context, db, user });
    });
};
exports.default = createSet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXNldC5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJyZXNvbHZlcnMvaGFuZGxlcnMvZGlyZWN0b3IvY3JlYXRlLXNldC9jcmVhdGUtc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpQ0FBaUM7QUFTakMsa0RBQTJEO0FBQzNELHFDQUE4QjtBQUU5QixNQUFNLFNBQVMsR0FBWSxVQUFnQixFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFOztRQUU5RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsRUFBRTtZQUM5QyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQ2xCLG9CQUFTLENBQUMscUJBQXFCLENBQ2hDLENBQUM7U0FDSDtRQUVELE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRTlELElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNwQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQ2xCLG9CQUFTLENBQUMsdUJBQXVCLENBQ2xDLENBQUM7U0FDSDtRQUVELE1BQU0sT0FBTyxHQUE2QixJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3ZELE9BQU8sQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBRTNCLE1BQU0sSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNoRDtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QjtRQUVELE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPO2FBQ2hDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDN0IsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxFQUFFO1lBQ2pDLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHO2dCQUNsQixJQUFJLEVBQUUsYUFBYSxDQUFDLElBQUk7YUFDekIsQ0FBQztZQUNGLE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUMsRUFBRSxFQUFtQyxDQUFDLENBQUM7UUFFMUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDakQsSUFBSSxFQUFFO2dCQUNKLEdBQUcsb0JBQ0UsT0FBTyxJQUNWLE9BQU8sRUFBRSxjQUFjLEdBQ3hCO2FBQ007U0FDVixDQUFDLENBQUM7UUFDSCxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNqRCxNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLEVBQUU7YUFDTztTQUNyQixDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFaEMsTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUMsT0FBTyxjQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztDQUFBLENBQUE7QUFFRCxrQkFBZSxTQUFTLENBQUMifQ==