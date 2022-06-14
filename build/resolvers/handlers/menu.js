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
const responses = require("../responses");
const getResponse = (db, user) => __awaiter(this, void 0, void 0, function* () {
    const menuDirector = () => __awaiter(this, void 0, void 0, function* () {
        const club = yield db.clubs.findOne({ directorId: user._id });
        const clubCreated = !!club;
        const setCreated = !!(club && club.set);
        const setMember = (club &&
            club.set &&
            club.set.members &&
            club.set.members[String(user._id)]);
        const isSetMember = !!setMember;
        const haveFriend = !!(setMember && setMember.friendId);
        // TODO: refactoring
        return responses.director.menuDirector(clubCreated, setCreated, isSetMember, haveFriend);
    });
    const menuMember = () => __awaiter(this, void 0, void 0, function* () {
        const club = yield db.clubs.findOne({
            memberIds: user._id
        });
        const setMember = (club &&
            club.set &&
            club.set.members &&
            club.set.members[String(user._id)]);
        const isSetMember = !!setMember;
        const haveFriend = !!(setMember && setMember.friendId);
        // TODO: refactoring
        return responses.member.menuMember(isSetMember, haveFriend);
    });
    switch (user.role) {
        case database_1.UserRole.admin:
            return responses.admin.menuAdmin;
        case database_1.UserRole.ceo:
            return responses.ceo.menuCeo;
        case database_1.UserRole.director:
            return menuDirector();
        case database_1.UserRole.member:
            return menuMember();
    }
});
const menu = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        return context.reply(...yield getResponse(db, user));
    });
};
exports.default = menu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJyZXNvbHZlcnMvaGFuZGxlcnMvbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsNkNBQXlFO0FBQ3pFLDBDQUEwQztBQUcxQyxNQUFNLFdBQVcsR0FBRyxDQUFPLEVBQVksRUFBRSxJQUFVLEVBQW1DLEVBQUU7SUFFdEYsTUFBTSxZQUFZLEdBQUcsR0FBUyxFQUFFO1FBQzlCLE1BQU0sSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBVSxDQUFDLENBQUM7UUFFdEUsTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMzQixNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXhDLE1BQU0sU0FBUyxHQUFHLENBQ2hCLElBQUk7WUFDSixJQUFJLENBQUMsR0FBRztZQUNSLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTztZQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQ25DLENBQUM7UUFFRixNQUFNLFdBQVcsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2hDLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdkQsb0JBQW9CO1FBQ3BCLE9BQU8sU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDM0YsQ0FBQyxDQUFBLENBQUM7SUFFRixNQUFNLFVBQVUsR0FBRyxHQUFTLEVBQUU7UUFDNUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNsQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUc7U0FDVSxDQUFDLENBQUM7UUFFakMsTUFBTSxTQUFTLEdBQUcsQ0FDaEIsSUFBSTtZQUNKLElBQUksQ0FBQyxHQUFHO1lBQ1IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPO1lBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FDbkMsQ0FBQztRQUVGLE1BQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDaEMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV2RCxvQkFBb0I7UUFDcEIsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDOUQsQ0FBQyxDQUFBLENBQUM7SUFFRixRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDakIsS0FBSyxtQkFBUSxDQUFDLEtBQUs7WUFDakIsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUVuQyxLQUFLLG1CQUFRLENBQUMsR0FBRztZQUNmLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFFL0IsS0FBSyxtQkFBUSxDQUFDLFFBQVE7WUFDcEIsT0FBTyxZQUFZLEVBQUUsQ0FBQztRQUV4QixLQUFLLG1CQUFRLENBQUMsTUFBTTtZQUNsQixPQUFPLFVBQVUsRUFBRSxDQUFDO0tBQ3ZCO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFFRixNQUFNLElBQUksR0FBWSxVQUFnQixFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFOztRQUN6RCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQ2xCLEdBQUcsTUFBTSxXQUFXLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUMvQixDQUFDO0lBQ0osQ0FBQztDQUFBLENBQUE7QUFFRCxrQkFBZSxJQUFJLENBQUMifQ==