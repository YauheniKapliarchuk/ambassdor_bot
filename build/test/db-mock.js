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
const lodash_1 = require("lodash");
const database_1 = require("../database");
(() => __awaiter(this, void 0, void 0, function* () {
    const db = yield database_1.DataBase.connect();
    db.mongoDB.dropDatabase();
    db.users.createIndex({ chatId: 1 });
    db.clubs.createIndex({ directorId: 1 });
    db.conferences.createIndex({ ceoId: 1 });
    // users
    yield db.users.insertOne({
        name: 'Администратор',
        phone: '375297654321',
        role: database_1.UserRole.admin,
    });
    const ceoIds = (yield db.users.insertMany([
        {
            name: 'Путин',
            phone: '375298765432',
            role: database_1.UserRole.ceo,
        },
        {
            name: 'Миша',
            phone: '375299876543',
            role: database_1.UserRole.ceo,
            chatId: 1,
        },
    ])).insertedIds;
    const directorIds = (yield db.users.insertMany([
        {
            name: 'Нащальника',
            phone: '375290987654',
            role: database_1.UserRole.director,
        },
        {
            name: 'Главный пельмень',
            phone: '375291098765',
            role: database_1.UserRole.director,
        },
    ])).insertedIds;
    const memberIds = (yield db.users.insertMany([
        {
            name: 'Равшан',
            phone: '375292109876',
            role: database_1.UserRole.member,
        },
        {
            name: 'Джамшут',
            phone: '375293210987',
            role: database_1.UserRole.member,
        },
    ])).insertedIds;
    // conferences
    db.conferences.insertOne({
        name: 'Москва',
        directorIds: lodash_1.values(directorIds),
        ceoId: ceoIds[0],
    });
    db.conferences.insertOne({
        name: 'Харьков',
        directorIds: [],
    });
    // clubs
    db.clubs.insertOne({
        name: 'Наша Раша',
        city: 'Москва',
        memberIds: lodash_1.values(memberIds),
        directorId: directorIds[0],
    });
    db.clubs.insertOne({
        name: 'Уральские пельмени',
        city: 'Харьков',
        memberIds: [],
        directorId: directorIds[1],
    });
    // output result
    const users = yield db.users.find().toArray();
    const conferences = yield db.conferences.find().toArray();
    const clubs = yield db.clubs.find().toArray();
    console.log(users, conferences, clubs);
    db.mongoClient.close();
}))();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGItbW9jay5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJ0ZXN0L2RiLW1vY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLG1DQUFnQztBQUNoQywwQ0FBZ0Y7QUFFaEYsQ0FBQyxHQUFTLEVBQUU7SUFDVixNQUFNLEVBQUUsR0FBRyxNQUFNLG1CQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUUxQixFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQWlCLENBQUMsQ0FBQztJQUNuRCxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQWlCLENBQUMsQ0FBQztJQUN2RCxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQXVCLENBQUMsQ0FBQztJQUU5RCxRQUFRO0lBRVIsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUN2QixJQUFJLEVBQUUsZUFBZTtRQUNyQixLQUFLLEVBQUUsY0FBYztRQUNyQixJQUFJLEVBQUUsbUJBQVEsQ0FBQyxLQUFLO0tBQ2IsQ0FBQyxDQUFDO0lBRVgsTUFBTSxNQUFNLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQ3hDO1lBQ0UsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsY0FBYztZQUNyQixJQUFJLEVBQUUsbUJBQVEsQ0FBQyxHQUFHO1NBQ1g7UUFDVDtZQUNFLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLGNBQWM7WUFDckIsSUFBSSxFQUFFLG1CQUFRLENBQUMsR0FBRztZQUNsQixNQUFNLEVBQUUsQ0FBQztTQUNGO0tBQ1YsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO0lBRWhCLE1BQU0sV0FBVyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUM3QztZQUNFLElBQUksRUFBRSxZQUFZO1lBQ2xCLEtBQUssRUFBRSxjQUFjO1lBQ3JCLElBQUksRUFBRSxtQkFBUSxDQUFDLFFBQVE7U0FDaEI7UUFDVDtZQUNFLElBQUksRUFBRSxrQkFBa0I7WUFDeEIsS0FBSyxFQUFFLGNBQWM7WUFDckIsSUFBSSxFQUFFLG1CQUFRLENBQUMsUUFBUTtTQUNoQjtLQUNWLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUVoQixNQUFNLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDM0M7WUFDRSxJQUFJLEVBQUUsUUFBUTtZQUNkLEtBQUssRUFBRSxjQUFjO1lBQ3JCLElBQUksRUFBRSxtQkFBUSxDQUFDLE1BQU07U0FDZDtRQUNUO1lBQ0UsSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsY0FBYztZQUNyQixJQUFJLEVBQUUsbUJBQVEsQ0FBQyxNQUFNO1NBQ2Q7S0FDVixDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7SUFFaEIsY0FBYztJQUVkLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO1FBQ3ZCLElBQUksRUFBRSxRQUFRO1FBQ2QsV0FBVyxFQUFFLGVBQU0sQ0FBQyxXQUFXLENBQUM7UUFDaEMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDSCxDQUFDLENBQUM7SUFFakIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7UUFDdkIsSUFBSSxFQUFFLFNBQVM7UUFDZixXQUFXLEVBQUUsRUFBZ0I7S0FDaEIsQ0FBQyxDQUFDO0lBRWpCLFFBQVE7SUFFUixFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNqQixJQUFJLEVBQUUsV0FBVztRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLFNBQVMsRUFBRSxlQUFNLENBQUMsU0FBUyxDQUFDO1FBQzVCLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO0tBQ25CLENBQUMsQ0FBQztJQUVYLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2pCLElBQUksRUFBRSxvQkFBb0I7UUFDMUIsSUFBSSxFQUFFLFNBQVM7UUFDZixTQUFTLEVBQUUsRUFBZ0I7UUFDM0IsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7S0FDbkIsQ0FBQyxDQUFDO0lBRVgsZ0JBQWdCO0lBQ2hCLE1BQU0sS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM5QyxNQUFNLFdBQVcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUQsTUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUV2QyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3pCLENBQUMsQ0FBQSxDQUFDLEVBQUUsQ0FBQyJ9