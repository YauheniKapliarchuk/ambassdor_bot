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
const lodash_1 = require("lodash");
const config_1 = require("../config");
const aggregations = require("./aggregations");
function bindHandlersArguments(map, ...args) {
    return lodash_1.keys(map).map(key => [key, function () {
            return map[key].apply(this, [...args, ...arguments]);
        }]).reduce((object, [key, value]) => {
        object[key] = value;
        return object;
    }, {});
}
class DataBase {
    // static constructor
    static connect() {
        return __awaiter(this, void 0, void 0, function* () {
            const mongodb = yield mongodb_1.MongoClient.connect(config_1.default.MONGODB_URI, {
                useNewUrlParser: true,
                auth: {
                    user: config_1.default.MONGODB_USERNAME,
                    password: config_1.default.MONGODB_PASSWORD,
                }
            });
            return new DataBase(mongodb);
        });
    }
    constructor(mongoClient) {
        this.mongoClient = mongoClient;
        this.mongoDB = mongoClient.db(config_1.default.MONGODB_DATABASE);
        this.users = this.mongoDB.collection('users');
        this.clubs = this.mongoDB.collection('clubs');
        this.conferences = this.mongoDB.collection('conferences');
        this.helpers = {
            setState: (id, state) => {
                return this.users.updateOne({ _id: new mongodb_1.ObjectID(id) }, {
                    $set: {
                        state: state,
                    },
                });
            },
            resetState: (id) => {
                return this.users.updateOne({ _id: new mongodb_1.ObjectID(id) }, {
                    $unset: {
                        state: '',
                    },
                });
            },
        };
        this.aggregations = bindHandlersArguments(aggregations, this);
    }
}
exports.DataBase = DataBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsiZGF0YWJhc2UvZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFDQUFxRjtBQUNyRixtQ0FBOEI7QUFHOUIsc0NBQStCO0FBSS9CLCtDQUErQztBQW1CL0MsU0FBUyxxQkFBcUIsQ0FDNUIsR0FBNkIsRUFDN0IsR0FBRyxJQUFVO0lBRWIsT0FBTyxhQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFxQixHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFO1lBQ3BELE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRTtRQUNsQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUMsRUFBRSxFQUFFLENBQVEsQ0FBQztBQUNoQixDQUFDO0FBRUQsTUFBYSxRQUFRO0lBQ25CLHFCQUFxQjtJQUVyQixNQUFNLENBQU8sT0FBTzs7WUFDbEIsTUFBTSxPQUFPLEdBQUcsTUFBTSxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxnQkFBTSxDQUFDLFdBQVcsRUFBRTtnQkFDNUQsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsZ0JBQU0sQ0FBQyxnQkFBZ0I7b0JBQzdCLFFBQVEsRUFBRSxnQkFBTSxDQUFDLGdCQUFnQjtpQkFDbEM7YUFDRixDQUFDLENBQUM7WUFFSCxPQUFPLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9CLENBQUM7S0FBQTtJQWNELFlBQVksV0FBd0I7UUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFDLGdCQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUV2RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUUxRCxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsUUFBUSxFQUFFLENBQUMsRUFBTSxFQUFFLEtBQVksRUFBRSxFQUFFO2dCQUNqQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksa0JBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNyRCxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLEtBQUs7cUJBQ0w7aUJBQ1YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUNELFVBQVUsRUFBRSxDQUFDLEVBQU0sRUFBRSxFQUFFO2dCQUNyQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksa0JBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNyRCxNQUFNLEVBQUU7d0JBQ04sS0FBSyxFQUFFLEVBQUU7cUJBQ1M7aUJBQ3JCLENBQUMsQ0FBQztZQUNMLENBQUM7U0FDRixDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksR0FBRyxxQkFBcUIsQ0FBYSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUUsQ0FBQztDQUNGO0FBdERELDRCQXNEQyJ9