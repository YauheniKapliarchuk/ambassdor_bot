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
const chooseClub = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        const clubs = yield db.clubs.find().toArray();
        db.helpers.setState(user._id, types_1.State.chooseClub);
        return context.reply(...responses_1.ceo.chooseClub(clubs));
    });
};
exports.default = chooseClub;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hvb3NlLWNsdWIuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsicmVzb2x2ZXJzL2hhbmRsZXJzL2Nlby9hcHBvaW50LWRpcmVjdG9yL2Nob29zZS1jbHViLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwwQ0FBZ0Q7QUFDaEQsa0RBQXNEO0FBRXRELE1BQU0sVUFBVSxHQUFZLFVBQWdCLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7O1FBRS9ELE1BQU0sS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUU5QyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGFBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVoRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQ2xCLEdBQUcsZUFBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FDL0IsQ0FBQztJQUNKLENBQUM7Q0FBQSxDQUFBO0FBRUQsa0JBQWUsVUFBVSxDQUFDIn0=