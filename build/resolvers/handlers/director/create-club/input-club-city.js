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
const inputClubCity = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        const payload = {
            clubName: context.text,
        };
        yield db.users.updateOne({ _id: user._id }, {
            $set: {
                payload: payload,
                state: types_1.State.inputClubCity,
            },
        });
        return context.reply(responses_1.director.inputClubCity);
    });
};
exports.default = inputClubCity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2x1Yi1jaXR5LmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInJlc29sdmVycy9oYW5kbGVycy9kaXJlY3Rvci9jcmVhdGUtY2x1Yi9pbnB1dC1jbHViLWNpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDBDQUFnRDtBQUVoRCxrREFBMkQ7QUFFM0QsTUFBTSxhQUFhLEdBQVksVUFBZ0IsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRTs7UUFFbEUsTUFBTSxPQUFPLEdBQThCO1lBQ3pDLFFBQVEsRUFBRSxPQUFPLENBQUMsSUFBSTtTQUN2QixDQUFDO1FBRUYsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFVLEVBQUU7WUFDbEQsSUFBSSxFQUFFO2dCQUNKLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixLQUFLLEVBQUUsYUFBSyxDQUFDLGFBQWE7YUFDbkI7U0FDVixDQUFDLENBQUM7UUFFSCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQUEsQ0FBQTtBQUVELGtCQUFlLGFBQWEsQ0FBQyJ9