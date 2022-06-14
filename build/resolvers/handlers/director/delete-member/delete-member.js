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
const deleteMember = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        const payload = user.payload;
        const memberId = new mongodb_1.ObjectID(payload.memberId);
        yield db.users.deleteOne({ _id: memberId });
        yield db.clubs.updateOne({ directorId: user._id }, {
            $pull: {
                memberIds: memberId,
            },
        });
        yield context.reply(responses_1.director.memberDeleted);
        return menu_1.default({ context, db, user });
    });
};
exports.default = deleteMember;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLW1lbWJlci5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJyZXNvbHZlcnMvaGFuZGxlcnMvZGlyZWN0b3IvZGVsZXRlLW1lbWJlci9kZWxldGUtbWVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBbUM7QUFJbkMsa0RBQTJEO0FBQzNELHFDQUE4QjtBQUU5QixNQUFNLFlBQVksR0FBWSxVQUFnQixFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFOztRQUVqRSxNQUFNLE9BQU8sR0FBZ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMxRCxNQUFNLFFBQVEsR0FBRyxJQUFJLGtCQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWhELE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM1QyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQVUsRUFBRTtZQUN6RCxLQUFLLEVBQUU7Z0JBQ0wsU0FBUyxFQUFFLFFBQVE7YUFDVTtTQUNoQyxDQUFDLENBQUM7UUFFSCxNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3QyxPQUFPLGNBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0NBQUEsQ0FBQTtBQUVELGtCQUFlLFlBQVksQ0FBQyJ9