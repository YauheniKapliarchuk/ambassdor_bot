import { ObjectID } from 'mongodb';
// import { values } from 'lodash';
import { DataBase } from '../database';
import { User, UserRole, Conference, Club } from '../database/models';
import { Index } from '../database/mongodb';

(async () => {
  const db = await DataBase.connect();
  db.mongoDB.dropDatabase();

  db.users.createIndex({ chatId: 1 } as Index<User>);
  db.clubs.createIndex({ directorId: 1 } as Index<Club>);
  db.conferences.createIndex({ ceoId: 1 } as Index<Conference>);

  // users

  await db.users.insertOne({
    name: 'Администратор',
    phone: '375447440584',
    role: UserRole.admin,
  } as User);

  // const ceoIds = (await db.users.insertMany([
  //   {
  //     name: 'Путин',
  //     phone: '375447440584',
  //     role: UserRole.ceo,
  //   } as User
  // ])).insertedIds;

  // (await db.users.insertMany([
  //   {
  //     name: 'Нащальника',
  //     phone: '375447440584',
  //     role: UserRole.director,
  //   } as User
  // ])).insertedIds;

  // const memberIds = (await db.users.insertMany([
  //   {
  //     name: 'Равшан',
  //     phone: '375292109876',
  //     role: UserRole.member,
  //   } as User,
  //   {
  //     name: 'Джамшут',
  //     phone: '375293210987',
  //     role: UserRole.member,
  //   } as User,
  // ])).insertedIds;

  // conferences

  // db.conferences.insertOne({
  //   name: 'Москва',
  //   // directorIds: values(directorIds),
  //   directorIds: [] as ObjectID[],
  //   ceoId: ceoIds[0],
  // } as Conference);

  db.conferences.insertOne({
    name: 'Харьков',
    directorIds: [] as ObjectID[],
  } as Conference);

  // clubs

  // db.clubs.insertOne({
  //   name: 'Наша Раша',
  //   city: 'Москва',
  //   memberIds: values(memberIds),
  //   directorId: directorIds[0],
  // } as Club);

  // db.clubs.insertOne({
  //   name: 'Уральские пельмени',
  //   city: 'Харьков',
  //   memberIds: [] as ObjectID[],
  //   directorId: directorIds[1],
  // } as Club);

  // // output result
  // const users = await db.users.find().toArray();
  // const conferences = await db.conferences.find().toArray();
  // const clubs = await db.clubs.find().toArray();
  // console.log(users, conferences, clubs);

  db.mongoClient.close();
})();
