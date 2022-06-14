import { ObjectID } from 'mongodb';
import { State } from '../resolvers/types';

export enum UserRole {
  admin = 'admin',
  ceo = 'ceo',
  director = 'director',
  member = 'member',
}

export type Id = ObjectID;
export type Phone = string;
export type ChatId = number;

export interface User {
  _id: Id;
  name?: string;
  chatId?: ChatId;
  role: UserRole;
  phone: Phone;
  state?: State;
  payload?: any;
}

export interface Conference {
  _id: Id;
  name: string;
  directorIds: Id[];
  ceoId?: Id;
}

export interface ClubSetMember {
  id: string;
  name: string;
  chatId: ChatId;
  goal?: string;
  friendId?: Id;
  isDirector?: boolean;
}

export interface ClubSet {
  name: string;
  goal: string;
  finish: Date;
  members: Record<string, ClubSetMember>;
}

export interface Club {
  _id: Id;
  name: string;
  city: string;
  set?: ClubSet;
  memberIds: Id[];
  directorId?: Id;
}
