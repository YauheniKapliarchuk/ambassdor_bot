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
const responses_1 = require("../../../responses");
const menu_1 = require("../../menu");
const updateClub = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        const clubName = context.text;
        yield db.helpers.resetState(user._id);
        const club = yield db.clubs.findOne({ directorId: user._id });
        if (!club) {
            return context.reply(responses_1.director.clubNotCreated);
        }
        yield db.clubs.updateOne({
            _id: club._id
        }, {
            $set: {
                name: clubName
            },
        });
        yield context.reply(responses_1.director.clubUpdated);
        return menu_1.default({ context, db, user });
    });
};
exports.default = updateClub;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWNsdWItbmFtZS5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJyZXNvbHZlcnMvaGFuZGxlcnMvZGlyZWN0b3IvdXBkYXRlLWNsdWIvdXBkYXRlLWNsdWItbmFtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsa0RBQTJEO0FBQzNELHFDQUE4QjtBQUU5QixNQUFNLFVBQVUsR0FBWSxVQUFnQixFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFOztRQUUvRCxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBRTlCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXRDLE1BQU0sSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBVSxDQUFDLENBQUM7UUFFdEUsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUN2QixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7U0FDTixFQUFFO1lBQ1AsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxRQUFRO2FBQ1A7U0FDVixDQUFDLENBQUM7UUFFTCxNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzQyxPQUFPLGNBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0NBQUEsQ0FBQTtBQUVELGtCQUFlLFVBQVUsQ0FBQyJ9