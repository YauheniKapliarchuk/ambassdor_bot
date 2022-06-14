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
const inputSetFinish = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        const setGoal = context.text;
        const payload = user.payload;
        payload.goal = setGoal;
        yield db.users.updateOne({ _id: user._id }, {
            $set: {
                payload,
                state: types_1.State.inputSetFinish,
            },
        });
        return context.reply(responses_1.director.inputSetFinish);
    });
};
exports.default = inputSetFinish;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2V0LWZpbmlzaC5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJyZXNvbHZlcnMvaGFuZGxlcnMvZGlyZWN0b3IvY3JlYXRlLXNldC9pbnB1dC1zZXQtZmluaXNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwwQ0FBZ0Q7QUFDaEQsa0RBQTJEO0FBRzNELE1BQU0sY0FBYyxHQUFZLFVBQWdCLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7O1FBRW5FLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDN0IsTUFBTSxPQUFPLEdBQTZCLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdkQsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7UUFFdkIsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFVLEVBQUU7WUFDbEQsSUFBSSxFQUFFO2dCQUNKLE9BQU87Z0JBQ1AsS0FBSyxFQUFFLGFBQUssQ0FBQyxjQUFjO2FBQ3BCO1NBQ1YsQ0FBQyxDQUFDO1FBRUgsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQztDQUFBLENBQUE7QUFFRCxrQkFBZSxjQUFjLENBQUMifQ==