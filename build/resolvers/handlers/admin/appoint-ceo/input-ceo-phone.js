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
const types_1 = require("../../../types");
const responses_1 = require("../../../responses");
const inputCeoPhone = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        const conferenceId = new mongodb_1.ObjectID(context.text);
        const payload = { conferenceId };
        yield db.users.updateOne({ _id: user._id }, {
            $set: {
                payload,
                state: types_1.State.inputCeoPhone,
            },
        });
        return context.reply(...responses_1.admin.inputCeoPhone);
    });
};
exports.default = inputCeoPhone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2VvLXBob25lLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInJlc29sdmVycy9oYW5kbGVycy9hZG1pbi9hcHBvaW50LWNlby9pbnB1dC1jZW8tcGhvbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFDQUFtQztBQUVuQywwQ0FBZ0Q7QUFFaEQsa0RBQXdEO0FBRXhELE1BQU0sYUFBYSxHQUFZLFVBQWdCLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7O1FBRWxFLE1BQU0sWUFBWSxHQUFHLElBQUksa0JBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsTUFBTSxPQUFPLEdBQTJCLEVBQUUsWUFBWSxFQUFFLENBQUM7UUFFekQsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFVLEVBQUU7WUFDbEQsSUFBSSxFQUFFO2dCQUNKLE9BQU87Z0JBQ1AsS0FBSyxFQUFFLGFBQUssQ0FBQyxhQUFhO2FBQ25CO1NBQ1YsQ0FBQyxDQUFDO1FBRUgsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsaUJBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQUEsQ0FBQTtBQUVELGtCQUFlLGFBQWEsQ0FBQyJ9