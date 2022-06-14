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
const database_1 = require("../../../../database");
const menu_1 = require("../../menu");
const responses_1 = require("../../../responses");
// TODO: refactoring
const appointDirector = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        const phone = context.text;
        const payload = user.payload;
        const clubId = payload.clubId ? new mongodb_1.ObjectID(payload.clubId) : null;
        const perform = () => __awaiter(this, void 0, void 0, function* () {
            const director = yield db.users.findOne({ phone });
            if (director) {
                if (director.role !== database_1.UserRole.director) {
                    return null;
                }
                return {
                    directorId: director._id,
                    invitation: false,
                };
            }
            else {
                const directorId = (yield db.users.insertOne({
                    phone,
                    role: database_1.UserRole.director,
                })).insertedId;
                yield db.conferences.updateOne({
                    ceoId: user._id,
                }, {
                    $push: {
                        directorIds: directorId,
                    },
                });
                return {
                    directorId,
                    invitation: true,
                };
            }
        });
        const result = yield perform();
        if (!result) {
            return context.reply(...responses_1.ceo.userIsNotDirector);
        }
        if (clubId) {
            const club = (yield db.clubs.findOneAndUpdate({ _id: clubId }, {
                $set: {
                    directorId: result.directorId,
                },
            })).value;
            const lastDirectorId = club.directorId;
            if (result.directorId !== lastDirectorId) {
                yield db.conferences.updateOne({
                    ceoId: user._id,
                }, {
                    $pull: {
                        directorIds: lastDirectorId,
                    },
                });
                db.users.deleteOne({ _id: lastDirectorId });
            }
        }
        if (result.invitation) {
            yield context.reply(responses_1.ceo.inviteDirectorSuccess);
        }
        else {
            yield context.reply(responses_1.ceo.appointDirectorSuccess);
        }
        return menu_1.default({ context, db, user });
    });
};
exports.default = appointDirector;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwb2ludC1kaXJlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJyZXNvbHZlcnMvaGFuZGxlcnMvY2VvL2FwcG9pbnQtZGlyZWN0b3IvYXBwb2ludC1kaXJlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUNBQW1DO0FBRW5DLG1EQVE4QjtBQUM5QixxQ0FBOEI7QUFDOUIsa0RBQXNEO0FBRXRELG9CQUFvQjtBQUNwQixNQUFNLGVBQWUsR0FBWSxVQUFnQixFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFOztRQUVwRSxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNCLE1BQU0sT0FBTyxHQUE4QixJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksa0JBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQVNwRSxNQUFNLE9BQU8sR0FBRyxHQUFnRSxFQUFFO1lBQ2hGLE1BQU0sUUFBUSxHQUFHLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQVUsQ0FBQyxDQUFDO1lBRTNELElBQUksUUFBUSxFQUFFO2dCQUNaLElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxtQkFBUSxDQUFDLFFBQVEsRUFBRTtvQkFDdkMsT0FBTyxJQUFJLENBQUM7aUJBQ2I7Z0JBRUQsT0FBTztvQkFDTCxVQUFVLEVBQUUsUUFBUSxDQUFDLEdBQUc7b0JBQ3hCLFVBQVUsRUFBRSxLQUFLO2lCQUNsQixDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsTUFBTSxVQUFVLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO29CQUMzQyxLQUFLO29CQUNMLElBQUksRUFBRSxtQkFBUSxDQUFDLFFBQVE7aUJBQ2hCLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztnQkFFdkIsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztvQkFDN0IsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHO2lCQUNGLEVBQUU7b0JBQ2IsS0FBSyxFQUFFO3dCQUNMLFdBQVcsRUFBRSxVQUFVO3FCQUNjO2lCQUN4QyxDQUFDLENBQUM7Z0JBRUwsT0FBTztvQkFDTCxVQUFVO29CQUNWLFVBQVUsRUFBRSxJQUFJO2lCQUNqQixDQUFDO2FBQ0g7UUFDSCxDQUFDLENBQUEsQ0FBQTtRQUVELE1BQU0sTUFBTSxHQUFHLE1BQU0sT0FBTyxFQUFFLENBQUM7UUFFL0IsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLGVBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQVUsRUFBRTtnQkFDckUsSUFBSSxFQUFFO29CQUNKLFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVTtpQkFDdEI7YUFDVixDQUFDLENBQUMsQ0FBQyxLQUFNLENBQUM7WUFFWCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBRXZDLElBQUksTUFBTSxDQUFDLFVBQVUsS0FBSyxjQUFjLEVBQUU7Z0JBQ3hDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7b0JBQzdCLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRztpQkFDRixFQUFFO29CQUNiLEtBQUssRUFBRTt3QkFDTCxXQUFXLEVBQUUsY0FBYztxQkFDVTtpQkFDeEMsQ0FBQyxDQUFDO2dCQUVMLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBVSxDQUFDLENBQUM7YUFDckQ7U0FDRjtRQUVELElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUNyQixNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBUyxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDdEQ7YUFBTTtZQUNMLE1BQU0sT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUN2RDtRQUVELE9BQU8sY0FBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Q0FBQSxDQUFBO0FBRUQsa0JBQWUsZUFBZSxDQUFDIn0=