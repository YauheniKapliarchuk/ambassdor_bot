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
const types_1 = require("../types");
const database_1 = require("../../database");
const handlers_1 = require("../handlers");
exports.default = (context, db) => __awaiter(this, void 0, void 0, function* () {
    const message = context.text;
    // TODO: remove test output
    console.log(message);
    const user = yield db.users.findOne({ chatId: context.chatId });
    if (message.startsWith('/start')) {
        return handlers_1.start({ context, db, user });
    }
    // GUEST
    if (!user) {
        return handlers_1.guest.authorize({ context, db });
    }
    const options = { context, db, user };
    if (!user.state) {
        return null;
    }
    // ADMIN
    if (user.role === database_1.UserRole.admin) {
        switch (user.state) {
            case types_1.State.inputCeoPhone:
                return handlers_1.admin.appointCeo(options);
        }
    }
    // CEO
    if (user.role === database_1.UserRole.ceo) {
        switch (user.state) {
            case types_1.State.inputDirectorPhone:
                return handlers_1.ceo.appointDirector(options);
        }
    }
    // DIRECTOR
    if (user.role === database_1.UserRole.director) {
        switch (user.state) {
            case types_1.State.inputClubName:
                return handlers_1.director.inputClubCity(options);
            case types_1.State.inputClubCity:
                return handlers_1.director.createClub(options);
            case types_1.State.inputNewClubName:
                return handlers_1.director.updateClubName(options);
            case types_1.State.inputNewClubCity:
                return handlers_1.director.updateClubCity(options);
            case types_1.State.inputMemberPhone:
                return handlers_1.director.addMember(options);
            case types_1.State.inputSetName:
                return handlers_1.director.inputSetGoal(options);
            case types_1.State.inputSetGoal:
                return handlers_1.director.inputSetFinish(options);
            case types_1.State.inputSetFinish:
                return handlers_1.director.createSet(options);
            case types_1.State.inputNotifyMessage:
                return handlers_1.director.notify(options);
            // member features
            case types_1.State.inputSelfGoal:
                return handlers_1.member.setSelfGoal(options);
        }
    }
    // MEMBER
    if (user.role === database_1.UserRole.member) {
        switch (user.state) {
            case types_1.State.chooseFriend:
                return handlers_1.member.sendOfferFriendship(options);
            case types_1.State.inputSelfGoal:
                return handlers_1.member.setSelfGoal(options);
        }
    }
    return null;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJyZXNvbHZlcnMvZXZlbnRzL3RleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG9DQUFpRDtBQUlqRCw2Q0FBMEQ7QUFDMUQsMENBQXlFO0FBRXpFLGtCQUFlLENBQ2IsT0FBZ0IsRUFDaEIsRUFBWSxFQUNhLEVBQUU7SUFFM0IsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztJQUU3QiwyQkFBMkI7SUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUdyQixNQUFNLElBQUksR0FBRyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQVUsQ0FBQyxDQUFDO0lBRXhFLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUNoQyxPQUFPLGdCQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7S0FDckM7SUFFRCxRQUFRO0lBQ1IsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNULE9BQU8sZ0JBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUN6QztJQUVELE1BQU0sT0FBTyxHQUFtQixFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFFdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDZixPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsUUFBUTtJQUNSLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxtQkFBUSxDQUFDLEtBQUssRUFBRTtRQUNoQyxRQUFRLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbEIsS0FBSyxhQUFLLENBQUMsYUFBYTtnQkFDdEIsT0FBTyxnQkFBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQztLQUNGO0lBRUQsTUFBTTtJQUNOLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxtQkFBUSxDQUFDLEdBQUcsRUFBRTtRQUM5QixRQUFRLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbEIsS0FBSyxhQUFLLENBQUMsa0JBQWtCO2dCQUMzQixPQUFPLGNBQUcsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdkM7S0FDRjtJQUVELFdBQVc7SUFDWCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssbUJBQVEsQ0FBQyxRQUFRLEVBQUU7UUFDbkMsUUFBUSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2xCLEtBQUssYUFBSyxDQUFDLGFBQWE7Z0JBQ3RCLE9BQU8sbUJBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFekMsS0FBSyxhQUFLLENBQUMsYUFBYTtnQkFDdEIsT0FBTyxtQkFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUV0QyxLQUFLLGFBQUssQ0FBQyxnQkFBZ0I7Z0JBQ3pCLE9BQU8sbUJBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFMUMsS0FBSyxhQUFLLENBQUMsZ0JBQWdCO2dCQUN6QixPQUFPLG1CQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTFDLEtBQUssYUFBSyxDQUFDLGdCQUFnQjtnQkFDekIsT0FBTyxtQkFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVyQyxLQUFLLGFBQUssQ0FBQyxZQUFZO2dCQUNyQixPQUFPLG1CQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRXhDLEtBQUssYUFBSyxDQUFDLFlBQVk7Z0JBQ3JCLE9BQU8sbUJBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFMUMsS0FBSyxhQUFLLENBQUMsY0FBYztnQkFDdkIsT0FBTyxtQkFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVyQyxLQUFLLGFBQUssQ0FBQyxrQkFBa0I7Z0JBQzNCLE9BQU8sbUJBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFbEMsa0JBQWtCO1lBQ2xCLEtBQUssYUFBSyxDQUFDLGFBQWE7Z0JBQ3RCLE9BQU8saUJBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdEM7S0FDRjtJQUVELFNBQVM7SUFDVCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssbUJBQVEsQ0FBQyxNQUFNLEVBQUU7UUFDakMsUUFBUSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2xCLEtBQUssYUFBSyxDQUFDLFlBQVk7Z0JBQ3JCLE9BQU8saUJBQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUU3QyxLQUFLLGFBQUssQ0FBQyxhQUFhO2dCQUN0QixPQUFPLGlCQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3RDO0tBQ0Y7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQSxDQUFDIn0=