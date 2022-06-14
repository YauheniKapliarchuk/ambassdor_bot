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
const menu_1 = require("../menu");
const finishSet = function ({ context, db, user }) {
    return __awaiter(this, void 0, void 0, function* () {
        yield db.clubs.updateOne({ directorId: user._id }, {
            $unset: {
                set: '',
            },
        });
        yield context.reply(responses_1.director.setFinished);
        return menu_1.default({ context, db, user });
    });
};
exports.default = finishSet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluaXNoLXNldC5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJyZXNvbHZlcnMvaGFuZGxlcnMvZGlyZWN0b3IvZmluaXNoLXNldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsK0NBQXdEO0FBQ3hELGtDQUEyQjtBQUUzQixNQUFNLFNBQVMsR0FBWSxVQUFnQixFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFOztRQUU5RCxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQVUsRUFBRTtZQUN6RCxNQUFNLEVBQUU7Z0JBQ04sR0FBRyxFQUFFLEVBQUU7YUFDVztTQUNyQixDQUFDLENBQUM7UUFFSCxNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzQyxPQUFPLGNBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0NBQUEsQ0FBQTtBQUVELGtCQUFlLFNBQVMsQ0FBQyJ9