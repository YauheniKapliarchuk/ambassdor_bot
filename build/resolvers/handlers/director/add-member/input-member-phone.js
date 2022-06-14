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
const inputMemberPhone = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        yield db.users.updateOne({ _id: user._id }, {
            $set: {
                state: types_1.State.inputMemberPhone,
            },
        });
        return context.reply(responses_1.director.inputMemberPhone);
    });
};
exports.default = inputMemberPhone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbWVtYmVyLXBob25lLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInJlc29sdmVycy9oYW5kbGVycy9kaXJlY3Rvci9hZGQtbWVtYmVyL2lucHV0LW1lbWJlci1waG9uZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMENBQWdEO0FBRWhELGtEQUEyRDtBQUczRCxNQUFNLGdCQUFnQixHQUFZLFVBQWdCLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7O1FBRXJFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBVSxFQUFFO1lBQ2xELElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsYUFBSyxDQUFDLGdCQUFnQjthQUN0QjtTQUNWLENBQUMsQ0FBQztRQUVILE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUFBLENBQUE7QUFFRCxrQkFBZSxnQkFBZ0IsQ0FBQyJ9