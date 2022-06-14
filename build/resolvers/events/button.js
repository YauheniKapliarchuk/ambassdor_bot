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
const menu_1 = require("../handlers/menu");
const responses = require("../responses");
exports.default = (context, db) => __awaiter(this, void 0, void 0, function* () {
    const action = context.text;
    // TODO: remove test output
    console.log(action);
    const user = yield db.users.findOne({ chatId: context.chatId });
    if (!user) {
        return null;
    }
    const options = { context, db, user };
    db.helpers.resetState(user._id);
    switch (action) {
        case types_1.Action.cancel:
            return menu_1.default({ context, db, user });
        case types_1.Action.logout:
            return handlers_1.guest.logout(options);
    }
    // ADMIN
    if (user.role === database_1.UserRole.admin) {
        switch (action) {
            case types_1.Action.appointCeo:
                return handlers_1.admin.chooseConference(options);
            case types_1.Action.showConferences:
                return handlers_1.admin.showConferences(options);
        }
        // input
        if (user.state === types_1.State.chooseConference) {
            return handlers_1.admin.inputCeoPhone(options);
        }
    }
    // CEO
    if (user.role === database_1.UserRole.ceo) {
        switch (action) {
            case types_1.Action.appointDirector:
                return handlers_1.ceo.inputDirectorPhone(Object.assign({}, options, { newClub: true }));
            case types_1.Action.changeDirector:
                return handlers_1.ceo.chooseClub(options);
            case types_1.Action.showDirectors:
                return handlers_1.ceo.showDirectors(options);
        }
        // input
        if (user.state === types_1.State.chooseClub) {
            return handlers_1.ceo.inputDirectorPhone(Object.assign({}, options, { newClub: false }));
        }
    }
    // DIRECTOR
    if (user.role === database_1.UserRole.director) {
        switch (action) {
            case types_1.Action.createClub:
                return handlers_1.director.inputClubName(options);
            case types_1.Action.updateClub:
                return context.reply(...responses.director.updateClub);
            case types_1.Action.updateClubName:
                return handlers_1.director.inputNewClubName(options);
            case types_1.Action.updateClubCity:
                return handlers_1.director.inputNewClubCity(options);
            case types_1.Action.addMembers:
                return handlers_1.director.inputMemberPhone(options);
            case types_1.Action.deleteMember:
                return handlers_1.director.chooseMember(options);
            case types_1.Action.confirmDeleteMember:
                return handlers_1.director.deleteMember(options);
            case types_1.Action.showMembers:
                return handlers_1.director.showMembers(options);
            case types_1.Action.confirmCreateSet:
                return context.reply(...responses.director.confirmCreateSet);
            case types_1.Action.createSet:
                return handlers_1.director.inputSetName(options);
            case types_1.Action.showSet:
                return handlers_1.director.showSet(options);
            case types_1.Action.confirmFinishSet:
                return context.reply(...responses.director.confirmFinishSet);
            case types_1.Action.finishSet:
                return handlers_1.director.finishSet(options);
            case types_1.Action.notify:
                return handlers_1.director.inputNotifyMessage(options);
            // member features
            case types_1.Action.setSelfGoal:
                return handlers_1.member.inputSelfGoal(options);
            case types_1.Action.showFriendGoal:
                return handlers_1.member.showFriendGoal(options);
        }
        // input
        if (user.state === types_1.State.chooseMemberForDelete) {
            return handlers_1.director.confirmDeleteMember(options);
        }
    }
    // MEMBER
    if (user.role === database_1.UserRole.member) {
        switch (action) {
            case types_1.Action.setSelfGoal:
                return handlers_1.member.inputSelfGoal(options);
            case types_1.Action.sendOfferFriendship:
                return handlers_1.member.chooseFriend(options);
            // TODO: implement friendship actions
            case types_1.Action.confirmFriendship:
                return context.reply(responses.member.confirmFriendship);
            case types_1.Action.refuseFriendship:
                return context.reply(responses.member.refuseFriendship);
            case types_1.Action.showFriendGoal:
                return handlers_1.member.showFriendGoal(options);
            case types_1.Action.confirmLeave:
                return context.reply(...responses.member.confirmLeave);
            case types_1.Action.leave:
                return handlers_1.member.leave(options);
        }
        // input
        if (user.state === types_1.State.chooseFriend) {
            return handlers_1.member.sendOfferFriendship(options);
        }
    }
    return null;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInJlc29sdmVycy9ldmVudHMvYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSxvQ0FBeUQ7QUFFekQsNkNBQTBEO0FBRTFELDBDQUFrRTtBQUNsRSwyQ0FBb0M7QUFDcEMsMENBQTBDO0FBRTFDLGtCQUFlLENBQ2IsT0FBZ0IsRUFDaEIsRUFBWSxFQUNhLEVBQUU7SUFFM0IsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztJQUU1QiwyQkFBMkI7SUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVwQixNQUFNLElBQUksR0FBRyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQVUsQ0FBQyxDQUFDO0lBRXhFLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCxPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsTUFBTSxPQUFPLEdBQW1CLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUV0RCxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFaEMsUUFBUSxNQUFNLEVBQUU7UUFDZCxLQUFLLGNBQU0sQ0FBQyxNQUFNO1lBQ2hCLE9BQU8sY0FBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRXJDLEtBQUssY0FBTSxDQUFDLE1BQU07WUFDaEIsT0FBTyxnQkFBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNoQztJQUVELFFBQVE7SUFDUixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssbUJBQVEsQ0FBQyxLQUFLLEVBQUU7UUFDaEMsUUFBUSxNQUFNLEVBQUU7WUFDZCxLQUFLLGNBQU0sQ0FBQyxVQUFV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