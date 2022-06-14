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
const responses_1 = require("../../../responses");
const confirmDeleteMember = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        const memberId = new mongodb_1.ObjectID(context.text);
        const payload = { memberId };
        yield db.users.updateOne({ _id: user._id }, {
            $set: { payload },
        });
        return context.reply(...responses_1.director.confirmDeleteMember);
    });
};
exports.default = confirmDeleteMember;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kZWxldGUtbWVtYmVyLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInJlc29sdmVycy9oYW5kbGVycy9kaXJlY3Rvci9kZWxldGUtbWVtYmVyL2NvbmZpcm0tZGVsZXRlLW1lbWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUNBQW1DO0FBSW5DLGtEQUEyRDtBQUUzRCxNQUFNLG1CQUFtQixHQUFZLFVBQWdCLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7O1FBRXhFLE1BQU0sUUFBUSxHQUFHLElBQUksa0JBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsTUFBTSxPQUFPLEdBQWdDLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFFMUQsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFVLEVBQUU7WUFDbEQsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFO1NBQ2xCLENBQUMsQ0FBQztRQUVILE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FDbEIsR0FBRyxvQkFBUyxDQUFDLG1CQUFtQixDQUNqQyxDQUFDO0lBQ0osQ0FBQztDQUFBLENBQUE7QUFFRCxrQkFBZSxtQkFBbUIsQ0FBQyJ9