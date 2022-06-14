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
function default_1(db) {
    return __awaiter(this, void 0, void 0, function* () {
        const userCollection = 'users';
        const ceoIdConferenceField = 'ceoId';
        const idUserField = '_id';
        const ceoArrayTmpField = 'ceoArray';
        const nameConferenceAggregate = '$name';
        const ceoConferenceAggregate = { $arrayElemAt: [`$${ceoArrayTmpField}`, 0] };
        const projectConferenceInfo = {
            name: nameConferenceAggregate,
            ceo: ceoConferenceAggregate,
        };
        return db.conferences.aggregate([
            {
                $lookup: {
                    from: userCollection,
                    localField: ceoIdConferenceField,
                    foreignField: idUserField,
                    as: ceoArrayTmpField,
                },
            },
            {
                $project: projectConferenceInfo,
            },
        ]).toArray();
    });
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmVyZW5jZXMuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsiZGF0YWJhc2UvYWdncmVnYXRpb25zL2NvbmZlcmVuY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFVQSxtQkFBK0IsRUFBWTs7UUFFekMsTUFBTSxjQUFjLEdBQXdDLE9BQU8sQ0FBQztRQUNwRSxNQUFNLG9CQUFvQixHQUF1QyxPQUFPLENBQUM7UUFDekUsTUFBTSxXQUFXLEdBQStCLEtBQUssQ0FBQztRQUN0RCxNQUFNLGdCQUFnQixHQUFHLFVBQVUsQ0FBQztRQUVwQyxNQUFNLHVCQUF1QixHQUFzRCxPQUFPLENBQUM7UUFDM0YsTUFBTSxzQkFBc0IsR0FBRyxFQUFFLFlBQVksRUFBRSxDQUFDLElBQUksZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBSTdFLE1BQU0scUJBQXFCLEdBQThCO1lBQ3ZELElBQUksRUFBRSx1QkFBdUI7WUFDN0IsR0FBRyxFQUFFLHNCQUFzQjtTQUM1QixDQUFDO1FBRUYsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBaUI7WUFDOUM7Z0JBQ0UsT0FBTyxFQUFFO29CQUNQLElBQUksRUFBRSxjQUFjO29CQUNwQixVQUFVLEVBQUUsb0JBQW9CO29CQUNoQyxZQUFZLEVBQUUsV0FBVztvQkFDekIsRUFBRSxFQUFFLGdCQUFnQjtpQkFDckI7YUFDRjtZQUNEO2dCQUNFLFFBQVEsRUFBRSxxQkFBcUI7YUFDaEM7U0FDRixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0NBQUE7QUE5QkQsNEJBOEJDIn0=