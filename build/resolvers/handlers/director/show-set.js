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
const showSet = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        const club = yield db.clubs.findOne({ directorId: user._id });
        if (!club) {
            return context.reply(responses_1.director.clubNotCreated);
        }
        if (!club.set) {
            return context.reply(responses_1.director.setNotCreated);
        }
        return context.reply(responses_1.director.showSet(club.set));
    });
};
exports.default = showSet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy1zZXQuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsicmVzb2x2ZXJzL2hhbmRsZXJzL2RpcmVjdG9yL3Nob3ctc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSwrQ0FBd0Q7QUFFeEQsTUFBTSxPQUFPLEdBQVksVUFBZ0IsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRTs7UUFFNUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFVLENBQUMsQ0FBQztRQUV0RSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDaEQ7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNiLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQy9DO1FBRUQsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUNsQixvQkFBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQzVCLENBQUM7SUFDSixDQUFDO0NBQUEsQ0FBQTtBQUVELGtCQUFlLE9BQU8sQ0FBQyJ9