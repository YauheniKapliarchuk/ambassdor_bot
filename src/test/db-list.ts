import { DataBase } from '../database';

(async () => {
  const db = await DataBase.connect();

  const users = await db.users.find().toArray();
  const conferences = await db.conferences.find().toArray();
  const clubs = await db.clubs.find().toArray();
  const setsMembers = clubs.map(club => club.set && club.set.members);

  console.log(users, conferences, clubs, setsMembers);

  db.mongoClient.close();
})();
