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
const responses_1 = require("../../responses");
const showFriendGoal = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        const club = yield db.clubs.findOne({
            $or: [
                {
                    memberIds: user._id,
                },
                {
                    directorId: user._id,
                },
            ],
        });
        if (!club) {
            return context.reply(responses_1.director.clubNotCreated);
        }
        if (!club.set) {
            return context.reply(responses_1.director.clubNotCreated);
        }
        const friendId = club.set.members[String(user._id)].friendId;
        if (!friendId) {
            return context.reply(responses_1.member.friendNotFound);
        }
        const friend = club.set.members[String(friendId)];
        if (!friend.goal) {
            return context.reply(responses_1.member.friendWithoutGoal);
        }
        return context.reply(responses_1.member.showFriendGoal(friend));
    });
};
exports.default = showFriendGoal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy1mcmllbmQtZ29hbC5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJyZXNvbHZlcnMvaGFuZGxlcnMvbWVtYmVyL3Nob3ctZnJpZW5kLWdvYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLCtDQUEwRTtBQUUxRSxNQUFNLGNBQWMsR0FBWSxVQUFnQixFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFOztRQUVuRSxNQUFNLElBQUksR0FBRyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ2xDLEdBQUcsRUFBRTtnQkFDSDtvQkFDRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUc7aUJBQ1U7Z0JBQy9CO29CQUNFLFVBQVUsRUFBRSxJQUFJLENBQUMsR0FBRztpQkFDYjthQUNWO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzdDO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDYixPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUM3QztRQUVELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFFN0QsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDaEIsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNuRDtRQUVELE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FDbEIsa0JBQVMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQ2pDLENBQUM7SUFDSixDQUFDO0NBQUEsQ0FBQTtBQUVELGtCQUFlLGNBQWMsQ0FBQyJ9