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
const inputSetName = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        yield db.users.updateOne({ _id: user._id }, {
            $set: {
                state: types_1.State.inputSetName,
            },
        });
        return context.reply(responses_1.director.inputSetName);
    });
};
exports.default = inputSetName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2V0LW5hbWUuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsicmVzb2x2ZXJzL2hhbmRsZXJzL2RpcmVjdG9yL2NyZWF0ZS1zZXQvaW5wdXQtc2V0LW5hbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDBDQUFnRDtBQUNoRCxrREFBMkQ7QUFHM0QsTUFBTSxZQUFZLEdBQVksVUFBZ0IsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRTs7UUFFakUsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFVLEVBQUU7WUFDbEQsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRSxhQUFLLENBQUMsWUFBWTthQUNsQjtTQUNWLENBQUMsQ0FBQztRQUVILE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FBQSxDQUFBO0FBRUQsa0JBQWUsWUFBWSxDQUFDIn0=