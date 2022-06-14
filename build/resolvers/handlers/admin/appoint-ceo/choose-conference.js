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
const chooseConference = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        const conferences = yield db.conferences.find().toArray();
        db.helpers.setState(user._id, types_1.State.chooseConference);
        return context.reply(...responses_1.admin.chooseConference(conferences));
    });
};
exports.default = chooseConference;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hvb3NlLWNvbmZlcmVuY2UuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsicmVzb2x2ZXJzL2hhbmRsZXJzL2FkbWluL2FwcG9pbnQtY2VvL2Nob29zZS1jb25mZXJlbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwwQ0FBZ0Q7QUFDaEQsa0RBQXdEO0FBRXhELE1BQU0sZ0JBQWdCLEdBQVksVUFBZ0IsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRTs7UUFFckUsTUFBTSxXQUFXLEdBQUcsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRTFELEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsYUFBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFdEQsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUNsQixHQUFHLGlCQUFTLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQzNDLENBQUM7SUFDSixDQUFDO0NBQUEsQ0FBQTtBQUVELGtCQUFlLGdCQUFnQixDQUFDIn0=