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
const responses_1 = require("../../../responses");
const menu_1 = require("../../menu");
const sendOfferFriendship = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        const friendId = new mongodb_1.ObjectID(context.text);
        const friend = yield db.users.findOne({ _id: friendId });
        if (!friend) {
            return context.reply(responses_1.member.userNotFound);
        }
        // TODO: uncomment
        // if (!friend.chatId) {
        //   return context.reply(
        //     responses.userNotRegistrated
        //   );
        // }
        const setClubField = 'set';
        const membersSetField = 'members';
        const friendIdClubSetMemberField = 'friendId';
        const getFriendIdField = (id) => `${setClubField}.${membersSetField}.${id}.${friendIdClubSetMemberField}`;
        const selfFriendIdField = getFriendIdField(user._id);
        const hisFriendIdField = getFriendIdField(friend._id);
        yield db.clubs.updateOne({ memberIds: user._id }, {
            $set: {
                [selfFriendIdField]: friend._id,
                [hisFriendIdField]: user._id,
            },
        });
        // TODO: uncomment
        // await context.sendMessageTo(
        //   friend.chatId,
        //   ...responses.offerFriendship(user.name)
        // );
        yield context.reply(responses_1.member.offerFriendshipDelivered);
        return menu_1.default({ context, db, user });
    });
};
exports.default = sendOfferFriendship;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZC1vZmZlci1mcmllbmRzaGlwLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInJlc29sdmVycy9oYW5kbGVycy9tZW1iZXIvb2ZmZXItZnJpZW5kc2hpcC9zZW5kLW9mZmVyLWZyaWVuZHNoaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFDQUFtQztBQUluQyxrREFBeUQ7QUFDekQscUNBQThCO0FBRTlCLE1BQU0sbUJBQW1CLEdBQVksVUFBZ0IsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRTs7UUFFeEUsTUFBTSxRQUFRLEdBQUcsSUFBSSxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1QyxNQUFNLE1BQU0sR0FBRyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFekQsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FDbEIsa0JBQVMsQ0FBQyxZQUFZLENBQ3ZCLENBQUM7U0FDSDtRQUVELGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsMEJBQTBCO1FBQzFCLG1DQUFtQztRQUNuQyxPQUFPO1FBQ1AsSUFBSTtRQUVKLE1BQU0sWUFBWSxHQUErQixLQUFLLENBQUM7UUFDdkQsTUFBTSxlQUFlLEdBQXNDLFNBQVMsQ0FBQztRQUNyRSxNQUFNLDBCQUEwQixHQUE2QyxVQUFVLENBQUM7UUFFeEYsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLEVBQU0sRUFBRSxFQUFFLENBQUMsR0FDbkMsWUFBWSxJQUNaLGVBQWUsSUFDZixFQUFFLElBQ0YsMEJBQTBCLEVBQUUsQ0FBQztRQUUvQixNQUFNLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRCxNQUFNLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV0RCxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQWdDLEVBQUU7WUFDOUUsSUFBSSxFQUFFO2dCQUNKLENBQUMsaUJBQWlCLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRztnQkFDL0IsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHO2FBQ2dCO1NBQy9DLENBQUMsQ0FBQztRQUVILGtCQUFrQjtRQUNsQiwrQkFBK0I7UUFDL0IsbUJBQW1CO1FBQ25CLDRDQUE0QztRQUM1QyxLQUFLO1FBQ0wsTUFBTSxPQUFPLENBQUMsS0FBSyxDQUNqQixrQkFBUyxDQUFDLHdCQUF3QixDQUNuQyxDQUFDO1FBQ0YsT0FBTyxjQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztDQUFBLENBQUE7QUFFRCxrQkFBZSxtQkFBbUIsQ0FBQyJ9