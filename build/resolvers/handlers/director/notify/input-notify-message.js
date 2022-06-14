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
const inputNotifyMessage = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        yield db.users.updateOne({ _id: user._id }, {
            $set: {
                state: types_1.State.inputNotifyMessage,
            },
        });
        return context.reply(responses_1.director.inputNotifyMessage);
    });
};
exports.default = inputNotifyMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbm90aWZ5LW1lc3NhZ2UuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsicmVzb2x2ZXJzL2hhbmRsZXJzL2RpcmVjdG9yL25vdGlmeS9pbnB1dC1ub3RpZnktbWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMENBQWdEO0FBRWhELGtEQUEyRDtBQUUzRCxNQUFNLGtCQUFrQixHQUFZLFVBQWdCLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7O1FBRXZFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBVSxFQUFFO1lBQ2xELElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsYUFBSyxDQUFDLGtCQUFrQjthQUN4QjtTQUNWLENBQUMsQ0FBQztRQUVILE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDckQsQ0FBQztDQUFBLENBQUE7QUFFRCxrQkFBZSxrQkFBa0IsQ0FBQyJ9