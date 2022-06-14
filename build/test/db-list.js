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
const database_1 = require("../database");
(() => __awaiter(this, void 0, void 0, function* () {
    const db = yield database_1.DataBase.connect();
    const users = yield db.users.find().toArray();
    const conferences = yield db.conferences.find().toArray();
    const clubs = yield db.clubs.find().toArray();
    const setsMembers = clubs.map(club => club.set && club.set.members);
    console.log(users, conferences, clubs, setsMembers);
    db.mongoClient.close();
}))();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGItbGlzdC5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJ0ZXN0L2RiLWxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDBDQUF1QztBQUV2QyxDQUFDLEdBQVMsRUFBRTtJQUNWLE1BQU0sRUFBRSxHQUFHLE1BQU0sbUJBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUVwQyxNQUFNLEtBQUssR0FBRyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDOUMsTUFBTSxXQUFXLEdBQUcsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzFELE1BQU0sS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM5QyxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXBFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFFcEQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN6QixDQUFDLENBQUEsQ0FBQyxFQUFFLENBQUMifQ==