export enum Action {
  cancel = 'cancel',

  // admin
  appointCeo = 'appoint_ceo',
  showConferences = 'show_conferences',

  // ceo
  appointDirector = 'appoint_director',
  changeDirector = 'change_director',
  showDirectors = 'show_directors',

  // director
  createClub = 'create_club',
  updateClub = 'update_club',
  updateClubName = 'update_club_name',
  updateClubCity = 'update_club_city',
  addMembers = 'add_members',
  confirmDeleteMember = 'confirm_delete_member',
  deleteMember = 'delete_member',
  showMembers = 'show_members',
  confirmCreateSet = 'confirm-create-set',
  createSet = 'create_set',
  showSet = 'show_set',
  confirmFinishSet = 'confirm_finish_set',
  finishSet = 'finish_set',
  notify = 'notify',

  // member
  confirmLeave = 'confirm_leave',
  leave = 'leave',
  sendOfferFriendship = 'send_offer_friendship',
  showFriendGoal = 'show_friend_goal',
  setSelfGoal = 'set_self_goal',
  // NEXT: implement friendship actions
  confirmFriendship = 'confirm_friendship',
  refuseFriendship = 'refuse_friendship',

  // NEXT: remove logout
  logout = 'logout',
}
