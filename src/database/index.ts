import { Collection, MongoClient, Db } from 'mongodb';
import config from '../config';
import { User, Conference, Club } from './models';

export interface Collections {
  users: Collection<User>;
  clubs: Collection<Club>;
}

export class DataBase {
  // static constructor

  static async connect() {
    const mongodb = await MongoClient.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      auth: {
        user: config.MONGODB_USERNAME,
        password: config.MONGODB_PASSWORD,
      }
    });

    return new DataBase(mongodb);
  }

  // constructor

  mongoClient: MongoClient;
  mongoDB: Db;

  users: Collection<User>;
  clubs: Collection<Club>;
  conferences: Collection<Conference>;

  constructor(mongoClient: MongoClient) {
    this.mongoClient = mongoClient;
    this.mongoDB = mongoClient.db(config.MONGODB_DATABASE);

    this.users = this.mongoDB.collection('users');
    this.clubs = this.mongoDB.collection('clubs');
    this.conferences = this.mongoDB.collection('conferences');
  }
}
