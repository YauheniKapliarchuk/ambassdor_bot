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
const responses_1 = require("../../responses");
const leave = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        yield db.clubs.updateOne({ memberIds: user._id }, {
            $pull: { memberIds: user._id },
        });
        yield db.users.deleteOne({ _id: user._id });
        return context.reply(responses_1.member.leaved);
    });
};
exports.default = leave;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhdmUuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsicmVzb2x2ZXJzL2hhbmRsZXJzL21lbWJlci9sZWF2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsK0NBQXNEO0FBRXRELE1BQU0sS0FBSyxHQUFZLFVBQWdCLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7O1FBRTFELE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBNkIsRUFBRTtZQUMzRSxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBNkI7U0FDMUQsQ0FBQyxDQUFDO1FBRUgsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFVLENBQUMsQ0FBQztRQUVwRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0JBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQUEsQ0FBQTtBQUVELGtCQUFlLEtBQUssQ0FBQyJ9