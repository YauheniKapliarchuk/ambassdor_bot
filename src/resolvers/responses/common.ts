import { CallbackButton } from '@jace1995/telegraf-helpers';
import { Action } from '../types/action';
import { Context } from '../../context';

const text = {
  cancel: 'отмена',
  setSelfGoal: 'поставить цели на сет',
  showFriendGoal: 'посмотреть цели друга',
  login: 'войти',
  logout: 'logout',
};

export type ContextReplyParametres = Parameters<Context['reply']>;
export type Response =
  string |
  ContextReplyParametres |
  ((...args: any[]) => string) |
  ((...args: any[]) => ContextReplyParametres);
export type Responses = Record<string, Response>;

export const responses = <T extends Responses>(responses: T): T => responses;

export const loginButton = {
  text: text.login,
};

export const cancelButton: CallbackButton = {
  text: text.cancel,
  callback_data: Action.cancel,
};

export const setSelfGoalButton: CallbackButton = {
  text: text.setSelfGoal,
  callback_data: Action.setSelfGoal,
};

export const showFriendGoalButton: CallbackButton = {
  text: text.showFriendGoal,
  callback_data: Action.showFriendGoal,
};

// NEXT: remove test logout button
export const logoutButton: CallbackButton = {
  text: text.logout,
  callback_data: Action.logout,
};
