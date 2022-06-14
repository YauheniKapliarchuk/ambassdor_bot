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
const createClub = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        const clubCity = context.text;
        const payload = user.payload;
        yield db.helpers.resetState(user._id);
        yield db.clubs.insertOne({
            name: payload.clubName,
            city: clubCity,
            memberIds: [],
            directorId: user._id,
        });
        yield context.reply(responses_1.director.clubCreated);
        return menu_1.default({ context, db, user });
    });
};
exports.default = createClub;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNsdWIuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsicmVzb2x2ZXJzL2hhbmRsZXJzL2RpcmVjdG9yL2NyZWF0ZS1jbHViL2NyZWF0ZS1jbHViLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQSxrREFBMkQ7QUFDM0QscUNBQThCO0FBRTlCLE1BQU0sVUFBVSxHQUFZLFVBQWdCLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7O1FBRS9ELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDOUIsTUFBTSxPQUFPLEdBQThCLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFeEQsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFdEMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUN2QixJQUFJLEVBQUUsT0FBTyxDQUFDLFFBQVE7WUFDdEIsSUFBSSxFQUFFLFFBQVE7WUFDZCxTQUFTLEVBQUUsRUFBZ0I7WUFDM0IsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHO1NBQ2IsQ0FBQyxDQUFDO1FBRVgsTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0MsT0FBTyxjQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztDQUFBLENBQUE7QUFFRCxrQkFBZSxVQUFVLENBQUMifQ==