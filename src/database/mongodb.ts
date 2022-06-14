import { Condition as MongoCondition } from 'mongodb';

export interface PatchedCondition<T> extends MongoCondition<T, keyof T> {
  $exists: boolean;
}

export type Index<T> = Record<keyof T, 1 | -1>;
export type Condition<T> = Partial<T> & Record<keyof Partial<T>, PatchedCondition<T>>;
export type UnsetFrom<T> = Record<keyof T, ''>;
export type InArray<T, P extends keyof T> = Record<P, T[P] extends Array<infer U> ? U : never>;
export type OneOf<T, P extends keyof T> = Record<keyof T, {
  $in: T[P][];
}>;
