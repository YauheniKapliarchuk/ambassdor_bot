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
const inputNewClubName = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        yield db.users.updateOne({ _id: user._id }, {
            $set: {
                state: types_1.State.inputNewClubCity,
            },
        });
        return context.reply(responses_1.director.inputClubCity);
    });
};
exports.default = inputNewClubName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbmV3LWNsdWItY2l0eS5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJyZXNvbHZlcnMvaGFuZGxlcnMvZGlyZWN0b3IvdXBkYXRlLWNsdWIvaW5wdXQtbmV3LWNsdWItY2l0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMENBQWdEO0FBRWhELGtEQUEyRDtBQUUzRCxNQUFNLGdCQUFnQixHQUFZLFVBQWdCLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7O1FBRXJFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBVSxFQUFFO1lBQ2xELElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsYUFBSyxDQUFDLGdCQUFnQjthQUN0QjtTQUNWLENBQUMsQ0FBQztRQUVILE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FBQSxDQUFBO0FBRUQsa0JBQWUsZ0JBQWdCLENBQUMifQ==