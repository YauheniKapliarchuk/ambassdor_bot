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
const showDirectors = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        const conference = yield db.conferences.findOne({ ceoId: user._id });
        if (!conference) {
            return context.reply('not found');
        }
        const clubs = yield db.aggregations.directors(conference.directorIds);
        return context.reply(responses_1.ceo.showDirectors(clubs.filter(director => director.name)));
    });
};
exports.default = showDirectors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy1kaXJlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsicmVzb2x2ZXJzL2hhbmRsZXJzL2Nlby9zaG93LWRpcmVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsK0NBQW1EO0FBRW5ELE1BQU0sYUFBYSxHQUFZLFVBQWdCLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7O1FBRWxFLE1BQU0sVUFBVSxHQUFHLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFFckUsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FDbEIsV0FBVyxDQUNaLENBQUM7U0FDSDtRQUVELE1BQU0sS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXRFLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FDbEIsZUFBUyxDQUFDLGFBQWEsQ0FDckIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FDeEMsQ0FDRixDQUFDO0lBQ0osQ0FBQztDQUFBLENBQUE7QUFFRCxrQkFBZSxhQUFhLENBQUMifQ==