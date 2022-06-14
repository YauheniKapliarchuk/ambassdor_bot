import { ChatId } from './context';
import { InArray, Condition, OneOf } from './database/mongodb';
import { Club, ClubSet, ClubSetMember, UserRole, Phone } from './database/models';
import { ObjectID } from 'mongodb';
import { State } from './resolvers/types/state';
import { DataBase } from './database';
import {
  User,
  Id,
  Conference,
} from './database/models';
import { UnsetFrom } from './database/mongodb';
import { MenuDirectorOptions } from './resolvers/responses/director';
import { MenuMemberOptions } from './resolvers/responses/member';

export interface ClubInfo extends Club {
  members: User[];
}

export interface ConferenceInfo extends Conference {
  ceo?: User;
}

export interface SetFriendsParams {
  userId: Id;
  friendId: Id;
}

export interface InsertUserParams {
  phone: User['phone'];
  role: User['role'];
}

export type InsertedUserId = Id;

export interface UserParams {
  _id?: User['_id'];
  phone?: User['phone'];
  chatId?: User['chatId'];
}

export interface DirectorInfo extends User {
  club: Club;
}

export interface AuthorizeParams {
  phone: Phone;
  chatId: ChatId;
  name: string;
}

export interface UpdateCeoParams {
  conferenceId: Id;
  ceoId: Id;
}

export type ClubSetMembersMap = Record<string, ClubSetMember>;

export interface InsertClubParams {
  name: Club['name'],
  city: Club['city'],
  directorId: Club['directorId'],
}

export interface UpdateClubInfo {
  name?: Club['name'],
  city?: Club['city'],
}

export interface UpdateDirectorParams {
  clubId: Id;
  directorId: Id;
}

export interface AddDirectorParams {
  ceoId: Id;
  directorId: Id;
}

export interface CreateDirectorParams {
  clubId: Id;
  ceoId: Id;
  directorId: Id;
}

export interface AddMemberParams {
  directorId: Id;
  memberId: Id;
}

export interface Model {
  // menu
  menuDirectorOptions(directorId: Id): Promise<MenuDirectorOptions>;
  menuMemberOptions(memberId: Id): Promise<MenuMemberOptions>;

  // User
  // crud
  createUser(user: InsertUserParams): Promise<InsertedUserId>;
  user(params: UserParams): Promise<User | null>;
  deleteUser(userId: Id): Promise<void>;
  // state
  setUserState(userId: Id, state: State, payload?: any): Promise<void>;
  saveUserPayload(userId: Id, payload: any): Promise<void>;
  resetUserState(userId: Id): Promise<void>;
  // roles
  directors(directorsIds: Id[]): Promise<DirectorInfo[]>;
  authorize(params: AuthorizeParams): Promise<User | null>;
  logout(userId: Id): Promise<void>; // NEXT: remove logout

  // Conference
  conferences(): Promise<Conference[]>;
  conferencesInfo(): Promise<ConferenceInfo[]>;
  conference(ceoId: Id): Promise<Conference>;
  changeCeo(params: UpdateCeoParams): Promise<void>;
  removeCeo(ceoId: Id): Promise<void>;
  addDirectorToConference(params: AddDirectorParams): Promise<void>;
  changeDirector(params: CreateDirectorParams): Promise<void>;

  // Club
  clubs(): Promise<Club[]>;
  clubByDirector(directorId: Id): Promise<Club | null>;
  clubByMember(memberId: Id): Promise<Club>;
  clubInfo(directorId: Id): Promise<ClubInfo | null>;
  createClub(club: InsertClubParams): Promise<void>;
  updateClubInfo(directorId: Id, club: UpdateClubInfo): Promise<void>;
  updateDirector(params: UpdateDirectorParams): Promise<void>;
  addMemberToClub(params: AddMemberParams): Promise<void>;
  removeMemberFromClub(memberId: Id): Promise<void>;

  // Set
  clubSetMembers(members: User[]): ClubSetMembersMap;
  startSet(directorId: Id, set: ClubSet): Promise<void>;
  finishSet(directorId: Id): Promise<void>;
  setGoal(userId: Id, goal: string): Promise<void>;
  setFriendship(params: SetFriendsParams): Promise<void>;
}

export class DataBaseModel implements Model {
  constructor(private db: DataBase) { }

  // menu

  async menuDirectorOptions(directorId: Id) {
    const club = await this.db.clubs.findOne({ directorId } as Club);

    const clubCreated = !!club;
    const setCreated = !!(club && club.set);

    const setMember = (
      club &&
      club.set &&
      club.set.members &&
      club.set.members[String(directorId)]
    );

    const isSetMember = !!setMember;
    const haveFriend = !!(setMember && setMember.friendId);

    return {
      clubCreated,
      setCreated,
      isSetMember,
      haveFriend,
    };
  }

  async menuMemberOptions(memberId: Id) {
    const club = await this.db.clubs.findOne({
      memberIds: memberId
    } as InArray<Club, 'memberIds'>);

    const setMember = (
      club &&
      club.set &&
      club.set.members &&
      club.set.members[String(memberId)]
    );

    const isSetMember = !!setMember;
    const haveFriend = !!(setMember && setMember.friendId);

    return {
      isSetMember,
      haveFriend,
    };
  }

  // User

  async createUser(user: InsertUserParams) {
    return (await this.db.users.insertOne(user as User)).insertedId;
  }

  user(params: UserParams) {
    return this.db.users.findOne(params);
  }

  async deleteUser(userId: Id): Promise<void> {
    await this.db.users.deleteOne({ _id: userId } as User);
  }

  async setUserState(userId: Id, state: State, payload?: any) {
    await this.db.users.updateOne({ _id: new ObjectID(userId) }, {
      $set: {
        state,
        payload,
      } as User,
    });
  }

  async saveUserPayload(userId: Id, payload: any) {
    await this.db.users.updateOne({ _id: userId } as User, {
      $set: { payload },
    });
  }

  async resetUserState(userId: Id) {
    await this.db.users.updateOne({ _id: new ObjectID(userId) }, {
      $unset: {
        state: '',
      } as UnsetFrom<User>,
    });
  }

  async directors(directorsIds: Id[]) {
    const directors = await this.db.users.find({
      _id: {
        $in: directorsIds,
      },
    } as OneOf<User, '_id'>).toArray();

    const clubs = await this.db.clubs.find({
      directorId: {
        $in: directorsIds,
      },
    } as OneOf<Club, 'directorId'>).toArray();

    return directors.map<DirectorInfo>(director => ({
      ...director,
      club: clubs.filter(
        club => String(club.directorId) === String(director._id)
      )[0],
    }));
  }

  async authorize(params: AuthorizeParams) {
    const result = await this.db.users.findOneAndUpdate({
      phone: params.phone,
      chatId: { $exists: false },
    } as Condition<User>, {
        $set: {
          chatId: params.chatId,
          name: params.name,
        } as User,
      });

    return result.value || null;
  }

  // NEXT: remove logout
  async logout(userId: Id) {
    await this.db.users.updateOne({
      _id: userId
    } as Condition<User>, {
        $unset: {
          chatId: '',
        } as UnsetFrom<User>,
      });
  }

  // Conference

  conferences() {
    return this.db.conferences.find().toArray();
  }

  async conferencesInfo() {
    const conferences = await this.db.conferences.find().toArray();

    const ceos = await this.db.users.find({
      role: UserRole.ceo,
    } as User).toArray();

    return conferences.map<ConferenceInfo>(conference => ({
      ...conference,
      ceo: ceos.filter(
        ceo => String(ceo._id) === String(conference.ceoId)
      )[0],
    }));
  }

  async conference(ceoId: Id) {
    const conference = await this.db.conferences.findOne({ ceoId });
    if (!conference) {
      throw new Error('conference not found');
    }
    return conference;
  }

  async changeCeo(params: UpdateCeoParams) {
    const result = await this.db.conferences.findOneAndUpdate({
      _id: params.conferenceId
    } as Conference, {
        $set: {
          ceoId: params.ceoId,
        } as Conference,
      });

    const lastCeoId = result.value!.ceoId;

    // delete last seo
    if (lastCeoId && params.ceoId !== lastCeoId) {
      await this.db.users.deleteOne({
        _id: lastCeoId,
      } as User);
    }
  }

  async removeCeo(ceoId: Id) {
    await this.db.conferences.updateOne({ ceoId, } as Conference, {
      $unset: {
        ceoId: '',
      } as UnsetFrom<Conference>,
    });
  }

  async addDirectorToConference(params: AddDirectorParams) {
    await this.db.conferences.updateOne({
      ceoId: params.ceoId,
    } as Conference, {
        $addToSet: {
          directorIds: params.directorId,
        } as InArray<Conference, 'directorIds'>,
      });
  }

  async changeDirector(params: CreateDirectorParams) {
    const club = await this.db.clubs.findOne({
      _id: params.clubId,
    } as Club);

    if (!club) {
      throw new Error('club not found');
    }

    if (club.directorId === params.directorId) {
      return;
    }

    if (club.directorId) {
      // remove old director from conference
      await this.db.conferences.updateOne({
        directorIds: club.directorId,
      } as InArray<Conference, 'directorIds'>, {
          $pull: {
            directorIds: club.directorId,
          } as InArray<Conference, 'directorIds'>,
        });

      // delete old director
      await this.db.users.deleteOne({
        _id: club.directorId,
      } as User);
    }

    const oldClub = await this.db.clubs.findOne({
      directorId: params.directorId,
    } as Club);

    if (oldClub) {
      // delete old club members
      await this.db.users.deleteMany({
        _id: {
          $in: oldClub.memberIds,
        },
      } as OneOf<User, '_id'>);

      // delete old club
      await this.db.clubs.deleteOne({
        _id: oldClub._id,
      } as Club);
    }

    // add new director to club
    await this.db.clubs.updateOne({
      _id: params.clubId,
    } as Club, {
        $set: {
          directorId: params.directorId,
        } as Club,
      });
  }

  // Club

  clubs() {
    return this.db.clubs.find().toArray();
  }

  clubByDirector(directorId: Id) {
    return this.db.clubs.findOne({
      directorId,
    } as Club);
  }

  async clubByMember(memberId: Id) {
    const club = await this.db.clubs.findOne({
      memberIds: memberId,
    } as InArray<Club, 'memberIds'>);

    if (!club) {
      throw new Error('club not found');
    }

    return club;
  }

  async clubInfo(directorId: Id) {
    const club = await this.db.clubs.findOne({
      directorId,
    } as Club);

    if (!club) {
      return null;
    }

    const members = await this.db.users.find({
      _id: {
        $in: club.memberIds,
      },
    } as OneOf<User, '_id'>).toArray();

    return {
      ...club,
      members,
    };
  }

  clubSetMembers(members: User[]) {
    return members
      .filter(member => member.chatId && member.name)
      .reduce((members, currentMember) => {
        const memberId = String(currentMember._id);
        members[memberId] = {
          id: memberId,
          name: currentMember.name!,
          chatId: currentMember.chatId!,
          isDirector: currentMember.role === UserRole.director,
        };
        return members;
      }, {} as ClubSetMembersMap);
  }

  async createClub(club: InsertClubParams) {
    await this.db.clubs.insertOne({
      name: club.name,
      city: club.city,
      directorId: club.directorId,
      memberIds: [] as ObjectID[],
    } as Club);
  }

  async updateClubInfo(directorId: Id, club: UpdateClubInfo) {
    await this.db.clubs.updateOne({
      directorId
    } as Club, {
        $set: club,
      });
  }

  async startSet(directorId: Id, set: ClubSet) {
    await this.db.clubs.updateOne({ directorId }, {
      $set: {
        set,
      } as Club,
    });
  }

  async finishSet(directorId: Id) {
    await this.db.clubs.updateOne({ directorId } as Club, {
      $unset: {
        set: '',
      } as UnsetFrom<Club>,
    });
  }

  async updateDirector(params: UpdateDirectorParams) {
    const result = await this.db.clubs.findOneAndUpdate({
      _id: params.clubId
    } as Club, {
        $set: {
          directorId: params.directorId,
        } as Club,
      });

    const lastDirectorId = result.value!.directorId!;

    // delete last director
    if (params.directorId !== lastDirectorId) {
      await this.db.users.deleteOne({
        _id: lastDirectorId,
      } as User);
    }
  }

  async addMemberToClub(params: AddMemberParams) {
    await this.db.clubs.updateOne({ directorId: params.directorId } as Club, {
      $push: {
        memberIds: params.memberId,
      },
    });
  }

  async removeMemberFromClub(memberId: Id) {
    await this.db.clubs.updateOne({
      memberIds: memberId
    } as InArray<Club, 'memberIds'>, {
        $pull: {
          memberIds: memberId,
        } as InArray<Club, 'memberIds'>,
      });
  }

  async setGoal(userId: Id, goal: string) {
    const setClubField: Extract<'set', keyof Club> = 'set';
    const membersSetField: Extract<'members', keyof ClubSet> = 'members';
    const goalClubSetMemberField: Extract<'goal', keyof ClubSetMember> = 'goal';

    const goalField = [
      setClubField,
      membersSetField,
      userId,
      goalClubSetMemberField,
    ].join('.');

    await this.db.clubs.updateOne({
      $or: [
        {
          memberIds: userId,
        } as InArray<Club, 'memberIds'>,
        {
          directorId: userId,
        } as Club,
      ],
    }, {
        $set: {
          [goalField]: goal,
        } as Record<string, ClubSetMember['goal']>,
      });
  }

  async setFriendship(params: SetFriendsParams) {
    const setClubField: Extract<'set', keyof Club> = 'set';
    const membersSetField: Extract<'members', keyof ClubSet> = 'members';
    const friendIdClubSetMemberField: Extract<'friendId', keyof ClubSetMember> = 'friendId';

    const getFriendIdField = (id: Id) => [
      setClubField,
      membersSetField,
      id,
      friendIdClubSetMemberField,
    ].join('.');

    const selfFriendIdField = getFriendIdField(params.userId);
    const hisFriendIdField = getFriendIdField(params.friendId);

    await this.db.clubs.updateOne({ memberIds: params.userId } as InArray<Club, 'memberIds'>, {
      $set: {
        [selfFriendIdField]: params.friendId,
        [hisFriendIdField]: params.userId,
      } as Record<string, ClubSetMember['friendId']>,
    });
  }
}
