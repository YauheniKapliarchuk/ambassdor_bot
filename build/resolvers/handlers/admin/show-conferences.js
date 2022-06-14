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
const showConferences = function ({ context, db }) {
    return __awaiter(this, void 0, void 0, function* () {
        const conferences = yield db.aggregations.conferences();
        return context.reply(responses_1.admin.showConferences(conferences));
    });
};
exports.default = showConferences;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy1jb25mZXJlbmNlcy5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJyZXNvbHZlcnMvaGFuZGxlcnMvYWRtaW4vc2hvdy1jb25mZXJlbmNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsK0NBQXFEO0FBRXJELE1BQU0sZUFBZSxHQUFZLFVBQWdCLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTs7UUFFOUQsTUFBTSxXQUFXLEdBQUcsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXhELE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FDbEIsaUJBQVMsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQ3ZDLENBQUM7SUFDSixDQUFDO0NBQUEsQ0FBQTtBQUVELGtCQUFlLGVBQWUsQ0FBQyJ9