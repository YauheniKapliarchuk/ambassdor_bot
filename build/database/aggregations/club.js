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
function default_1(db, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const userCollection = 'users';
        const memberIdsClubField = 'memberIds';
        const idUserField = '_id';
        const membersField = 'members';
        const groupClubInfo = {
            _id: `$${idUserField}`,
            members: { $push: `$${membersField}` },
        };
        return (yield db.clubs.aggregate([
            {
                $match: {
                    $or: [
                        {
                            directorId: userId,
                        },
                        {
                            memberIds: userId,
                        },
                    ],
                },
            },
            {
                $unwind: {
                    path: `$${memberIdsClubField}`,
                    includeArrayIndex: membersField,
                    preserveNullAndEmptyArrays: true,
                },
            },
            {
                $lookup: {
                    from: userCollection,
                    localField: memberIdsClubField,
                    foreignField: idUserField,
                    as: membersField,
                },
            },
            {
                $unwind: {
                    path: `$${membersField}`,
                    preserveNullAndEmptyArrays: true,
                },
            },
            {
                $group: groupClubInfo,
            },
        ]).toArray())[0] || null;
    });
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2x1Yi5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJkYXRhYmFzZS9hZ2dyZWdhdGlvbnMvY2x1Yi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBU0EsbUJBQStCLEVBQVksRUFBRSxNQUFVOztRQUVyRCxNQUFNLGNBQWMsR0FBd0MsT0FBTyxDQUFDO1FBQ3BFLE1BQU0sa0JBQWtCLEdBQXFDLFdBQVcsQ0FBQztRQUN6RSxNQUFNLFdBQVcsR0FBK0IsS0FBSyxDQUFDO1FBQ3RELE1BQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQztRQUkvQixNQUFNLGFBQWEsR0FBd0I7WUFDekMsR0FBRyxFQUFFLElBQUksV0FBVyxFQUFFO1lBQ3RCLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLFlBQVksRUFBRSxFQUFFO1NBQ3ZDLENBQUM7UUFFRixPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBVztZQUN6QztnQkFDRSxNQUFNLEVBQUU7b0JBQ04sR0FBRyxFQUFFO3dCQUNIOzRCQUNFLFVBQVUsRUFBRSxNQUFNO3lCQUNYO3dCQUNUOzRCQUNFLFNBQVMsRUFBRSxNQUFNO3lCQUNZO3FCQUNoQztpQkFDRjthQUNGO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFO29CQUNQLElBQUksRUFBRSxJQUFJLGtCQUFrQixFQUFFO29CQUM5QixpQkFBaUIsRUFBRSxZQUFZO29CQUMvQiwwQkFBMEIsRUFBRSxJQUFJO2lCQUNqQzthQUNGO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFO29CQUNQLElBQUksRUFBRSxjQUFjO29CQUNwQixVQUFVLEVBQUUsa0JBQWtCO29CQUM5QixZQUFZLEVBQUUsV0FBVztvQkFDekIsRUFBRSxFQUFFLFlBQVk7aUJBQ2pCO2FBQ0Y7WUFDRDtnQkFDRSxPQUFPLEVBQUU7b0JBQ1AsSUFBSSxFQUFFLElBQUksWUFBWSxFQUFFO29CQUN4QiwwQkFBMEIsRUFBRSxJQUFJO2lCQUNqQzthQUNGO1lBQ0Q7Z0JBQ0UsTUFBTSxFQUFFLGFBQWE7YUFDdEI7U0FDRixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDM0IsQ0FBQztDQUFBO0FBcERELDRCQW9EQyJ9