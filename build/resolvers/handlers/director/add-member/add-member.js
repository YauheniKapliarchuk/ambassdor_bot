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
const database_1 = require("../../../../database");
const responses_1 = require("../../../responses");
const menu_1 = require("../../menu");
const addMember = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        const phone = context.text;
        const member = yield db.users.findOne({ phone });
        if (member) {
            return context.reply(responses_1.director.userExists);
        }
        const memberId = (yield db.users.insertOne({
            phone,
            role: database_1.UserRole.member,
        })).insertedId;
        yield db.clubs.updateOne({ directorId: user._id }, {
            $push: {
                memberIds: memberId,
            },
        });
        yield context.reply(responses_1.director.memberInvited);
        return menu_1.default({ context, db, user });
    });
};
exports.default = addMember;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLW1lbWJlci5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJyZXNvbHZlcnMvaGFuZGxlcnMvZGlyZWN0b3IvYWRkLW1lbWJlci9hZGQtbWVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxtREFJOEI7QUFDOUIsa0RBQTJEO0FBQzNELHFDQUE4QjtBQUc5QixNQUFNLFNBQVMsR0FBWSxVQUFnQixFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFOztRQUU5RCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBRTNCLE1BQU0sTUFBTSxHQUFHLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQVUsQ0FBQyxDQUFDO1FBRXpELElBQUksTUFBTSxFQUFFO1lBQ1YsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDNUM7UUFFRCxNQUFNLFFBQVEsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDekMsS0FBSztZQUNMLElBQUksRUFBRSxtQkFBUSxDQUFDLE1BQU07U0FDZCxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFFdkIsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFVLEVBQUU7WUFDekQsS0FBSyxFQUFFO2dCQUNMLFNBQVMsRUFBRSxRQUFRO2FBQ3BCO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFN0MsT0FBTyxjQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztDQUFBLENBQUE7QUFFRCxrQkFBZSxTQUFTLENBQUMifQ==