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
const inputDirectorPhone = function ({ context, db, user, newClub }) {
    return __awaiter(this, void 0, void 0, function* () {
        const clubId = newClub ? undefined : new mongodb_1.ObjectID(context.text);
        const payload = { clubId };
        yield db.users.updateOne({ _id: user._id }, {
            $set: {
                payload,
                state: types_1.State.inputDirectorPhone,
            },
        });
        return context.reply(...responses_1.ceo.inputDirectorPhone);
    });
};
exports.default = inputDirectorPhone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZGlyZWN0b3ItcGhvbmUuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsicmVzb2x2ZXJzL2hhbmRsZXJzL2Nlby9hcHBvaW50LWRpcmVjdG9yL2lucHV0LWRpcmVjdG9yLXBob25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBbUM7QUFFbkMsMENBQWdFO0FBRWhFLGtEQUFzRDtBQU10RCxNQUFNLGtCQUFrQixHQUFrQyxVQUN4RCxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTs7UUFHOUIsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksa0JBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEUsTUFBTSxPQUFPLEdBQThCLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFFdEQsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFVLEVBQUU7WUFDbEQsSUFBSSxFQUFFO2dCQUNKLE9BQU87Z0JBQ1AsS0FBSyxFQUFFLGFBQUssQ0FBQyxrQkFBa0I7YUFDeEI7U0FDVixDQUFDLENBQUM7UUFFSCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxlQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0NBQUEsQ0FBQTtBQUVELGtCQUFlLGtCQUFrQixDQUFDIn0=