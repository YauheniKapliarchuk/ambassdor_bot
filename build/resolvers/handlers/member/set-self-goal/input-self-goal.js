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
const inputSelfGoal = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
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
        // end
        if (!!club.set.members[String(user._id)].goal) {
            return context.reply(responses_1.member.goalIsReadonly);
        }
        yield db.users.updateOne({ _id: user._id }, {
            $set: {
                state: types_1.State.inputSelfGoal,
            },
        });
        return context.reply(responses_1.member.inputSelfGoal);
    });
};
exports.default = inputSelfGoal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VsZi1nb2FsLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInJlc29sdmVycy9oYW5kbGVycy9tZW1iZXIvc2V0LXNlbGYtZ29hbC9pbnB1dC1zZWxmLWdvYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDBDQUFnRDtBQUVoRCxrREFBNkU7QUFFN0UsTUFBTSxhQUFhLEdBQVksVUFBZ0IsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRTs7UUFFbEUsb0JBQW9CO1FBQ3BCLE1BQU0sSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDbEMsR0FBRyxFQUFFO2dCQUNIO29CQUNFLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRztpQkFDVTtnQkFDL0I7b0JBQ0UsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHO2lCQUNiO2FBQ1Y7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDN0M7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNiLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsTUFBTTtRQUVOLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDN0MsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDaEQ7UUFFRCxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQVUsRUFBRTtZQUNsRCxJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLGFBQUssQ0FBQyxhQUFhO2FBQ25CO1NBQ1YsQ0FBQyxDQUFDO1FBRUgsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUFBLENBQUE7QUFFRCxrQkFBZSxhQUFhLENBQUMifQ==