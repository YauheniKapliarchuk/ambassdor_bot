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
const showMembers = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        const club = yield db.aggregations.club(user._id);
        if (!club) {
            return context.reply(responses_1.director.clubNotCreated);
        }
        return context.reply(responses_1.director.showMembers(club));
    });
};
exports.default = showMembers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy1tZW1iZXJzLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInJlc29sdmVycy9oYW5kbGVycy9kaXJlY3Rvci9zaG93LW1lbWJlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLCtDQUF3RDtBQUV4RCxNQUFNLFdBQVcsR0FBWSxVQUFnQixFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFOztRQUVoRSxNQUFNLElBQUksR0FBRyxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDaEQ7UUFFRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQ2xCLG9CQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUM1QixDQUFDO0lBQ0osQ0FBQztDQUFBLENBQUE7QUFFRCxrQkFBZSxXQUFXLENBQUMifQ==