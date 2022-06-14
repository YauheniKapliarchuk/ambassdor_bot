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
const inputSetGoal = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        const setName = context.text;
        const payload = {};
        payload.name = setName;
        yield db.users.updateOne({ _id: user._id }, {
            $set: {
                payload,
                state: types_1.State.inputSetGoal,
            },
        });
        return context.reply(responses_1.director.inputSetGoal);
    });
};
exports.default = inputSetGoal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2V0LWdvYWwuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsicmVzb2x2ZXJzL2hhbmRsZXJzL2RpcmVjdG9yL2NyZWF0ZS1zZXQvaW5wdXQtc2V0LWdvYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDBDQUFnRDtBQUNoRCxrREFBMkQ7QUFHM0QsTUFBTSxZQUFZLEdBQVksVUFBZ0IsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRTs7UUFFakUsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUM3QixNQUFNLE9BQU8sR0FBNkIsRUFBRSxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBRXZCLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBVSxFQUFFO1lBQ2xELElBQUksRUFBRTtnQkFDSixPQUFPO2dCQUNQLEtBQUssRUFBRSxhQUFLLENBQUMsWUFBWTthQUNsQjtTQUNWLENBQUMsQ0FBQztRQUVILE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FBQSxDQUFBO0FBRUQsa0JBQWUsWUFBWSxDQUFDIn0=