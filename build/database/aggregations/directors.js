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
const models_1 = require("../models");
function default_1(db, directorIds) {
    return __awaiter(this, void 0, void 0, function* () {
        const clubsCollection = 'clubs';
        const idUserField = '_id';
        const directorIdClubField = 'directorId';
        const clubField = 'club';
        const agregateMatch = {
            _id: { $in: directorIds },
            role: models_1.UserRole.director,
        };
        return db.users.aggregate([
            {
                $match: agregateMatch,
            },
            {
                $lookup: {
                    from: clubsCollection,
                    localField: idUserField,
                    foreignField: directorIdClubField,
                    as: clubField,
                },
            },
            {
                $unwind: {
                    path: `$${clubField}`,
                    preserveNullAndEmptyArrays: true,
                }
            },
        ]).toArray();
    });
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0b3JzLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbImRhdGFiYXNlL2FnZ3JlZ2F0aW9ucy9kaXJlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHNDQUFxRDtBQVFyRCxtQkFBK0IsRUFBWSxFQUFFLFdBQWlCOztRQUU1RCxNQUFNLGVBQWUsR0FBd0MsT0FBTyxDQUFDO1FBQ3JFLE1BQU0sV0FBVyxHQUErQixLQUFLLENBQUM7UUFDdEQsTUFBTSxtQkFBbUIsR0FBc0MsWUFBWSxDQUFDO1FBQzVFLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQztRQU96QixNQUFNLGFBQWEsR0FBb0I7WUFDckMsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRTtZQUN6QixJQUFJLEVBQUUsaUJBQVEsQ0FBQyxRQUFRO1NBQ3hCLENBQUM7UUFFRixPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFlO1lBQ3RDO2dCQUNFLE1BQU0sRUFBRSxhQUFhO2FBQ3RCO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFO29CQUNQLElBQUksRUFBRSxlQUFlO29CQUNyQixVQUFVLEVBQUUsV0FBVztvQkFDdkIsWUFBWSxFQUFFLG1CQUFtQjtvQkFDakMsRUFBRSxFQUFFLFNBQVM7aUJBQ2Q7YUFDRjtZQUNEO2dCQUNFLE9BQU8sRUFBRTtvQkFDUCxJQUFJLEVBQUUsSUFBSSxTQUFTLEVBQUU7b0JBQ3JCLDBCQUEwQixFQUFFLElBQUk7aUJBQ2pDO2FBQ0Y7U0FDRixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0NBQUE7QUFwQ0QsNEJBb0NDIn0=