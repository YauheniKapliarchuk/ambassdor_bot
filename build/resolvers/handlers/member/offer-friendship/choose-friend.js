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
const types_1 = require("../../../types");
const responses_1 = require("../../../responses");
const chooseFriend = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        const club = yield db.clubs.findOne({ memberIds: user._id });
        if (!club) {
            return context.reply(responses_1.director.clubNotCreated);
        }
        if (!club.set) {
            return context.reply(responses_1.director.setNotCreated);
        }
        const set = club.set;
        db.helpers.setState(user._id, types_1.State.chooseFriend);
        const members = Object.keys(set.members).map(id => (Object.assign({ id: id }, set.members[id]))).filter(member => member.id !== String(user._id) &&
            !member.friendId);
        return context.reply(...responses_1.member.chooseMember(members));
    });
};
exports.default = chooseFriend;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hvb3NlLWZyaWVuZC5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJyZXNvbHZlcnMvaGFuZGxlcnMvbWVtYmVyL29mZmVyLWZyaWVuZHNoaXAvY2hvb3NlLWZyaWVuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMENBQWdEO0FBQ2hELGtEQUE2RTtBQUc3RSxNQUFNLFlBQVksR0FBWSxVQUFnQixFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFOztRQUVqRSxNQUFNLElBQUksR0FBRyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQWdDLENBQUMsQ0FBQztRQUUzRixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDN0M7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNiLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzVDO1FBRUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUVyQixFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGFBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVsRCxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQXNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsaUJBQ3RFLEVBQUUsRUFBRSxFQUFFLElBQ0gsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFDbEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUNsQixNQUFNLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQzlCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDakIsQ0FBQztRQUVGLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FDbEIsR0FBRyxrQkFBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FDbkMsQ0FBQztJQUNKLENBQUM7Q0FBQSxDQUFBO0FBRUQsa0JBQWUsWUFBWSxDQUFDIn0=