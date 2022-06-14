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
const chooseMember = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        const club = yield db.aggregations.club(user._id);
        if (!club) {
            return context.reply(responses_1.director.clubNotCreated);
        }
        db.helpers.setState(user._id, types_1.State.chooseMemberForDelete);
        return context.reply(...responses_1.director.chooseMember(club));
    });
};
exports.default = chooseMember;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hvb3NlLW1lbWJlci5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJyZXNvbHZlcnMvaGFuZGxlcnMvZGlyZWN0b3IvZGVsZXRlLW1lbWJlci9jaG9vc2UtbWVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwwQ0FBZ0Q7QUFDaEQsa0RBQTJEO0FBRTNELE1BQU0sWUFBWSxHQUFZLFVBQWdCLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7O1FBRWpFLE1BQU0sSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNoRDtRQUVELEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsYUFBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFM0QsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUNsQixHQUFHLG9CQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUNoQyxDQUFDO0lBQ0osQ0FBQztDQUFBLENBQUE7QUFFRCxrQkFBZSxZQUFZLENBQUMifQ==