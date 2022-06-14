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
const responses_1 = require("../../../responses");
const menu_1 = require("../../menu");
const setSelfGoal = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        const goal = context.text;
        yield db.helpers.resetState(user._id);
        // TODO: refactoring
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
        const setClubField = 'set';
        const membersSetField = 'members';
        const goalClubSetMemberField = 'goal';
        const goalField = `${setClubField}.${membersSetField}.${user._id}.${goalClubSetMemberField}`;
        // { memberIds: user._id } as InArray<Club, 'memberIds'>
        yield db.clubs.updateOne({
            $or: [
                {
                    memberIds: user._id,
                },
                {
                    directorId: user._id,
                },
            ],
        }, {
            $set: {
                [goalField]: goal,
            },
        });
        yield context.reply(responses_1.member.goalCreated);
        return menu_1.default({ context, db, user });
    });
};
exports.default = setSelfGoal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNlbGYtZ29hbC5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJyZXNvbHZlcnMvaGFuZGxlcnMvbWVtYmVyL3NldC1zZWxmLWdvYWwvc2V0LXNlbGYtZ29hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsa0RBQTZFO0FBQzdFLHFDQUE4QjtBQUU5QixNQUFNLFdBQVcsR0FBWSxVQUFnQixFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFOztRQUVoRSxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBRTFCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXRDLG9CQUFvQjtRQUNwQixNQUFNLElBQUksR0FBRyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ2xDLEdBQUcsRUFBRTtnQkFDSDtvQkFDRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUc7aUJBQ1U7Z0JBQy9CO29CQUNFLFVBQVUsRUFBRSxJQUFJLENBQUMsR0FBRztpQkFDYjthQUNWO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzdDO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDYixPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUM3QztRQUVELE1BQU0sWUFBWSxHQUErQixLQUFLLENBQUM7UUFDdkQsTUFBTSxlQUFlLEdBQXNDLFNBQVMsQ0FBQztRQUNyRSxNQUFNLHNCQUFzQixHQUF5QyxNQUFNLENBQUM7UUFFNUUsTUFBTSxTQUFTLEdBQUcsR0FDaEIsWUFBWSxJQUNaLGVBQWUsSUFDZixJQUFJLENBQUMsR0FBRyxJQUNSLHNCQUFzQixFQUFFLENBQUM7UUFFM0Isd0RBQXdEO1FBQ3hELE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDdkIsR0FBRyxFQUFFO2dCQUNIO29CQUNFLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRztpQkFDVTtnQkFDL0I7b0JBQ0UsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHO2lCQUNiO2FBQ1Y7U0FDRixFQUFFO1lBQ0MsSUFBSSxFQUFFO2dCQUNKLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSTthQUN1QjtTQUMzQyxDQUFDLENBQUM7UUFFTCxNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0JBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzQyxPQUFPLGNBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0NBQUEsQ0FBQTtBQUVELGtCQUFlLFdBQVcsQ0FBQyJ9