"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input_club_name_1 = require("./create-club/input-club-name");
const input_club_city_1 = require("./create-club/input-club-city");
const create_club_1 = require("./create-club/create-club");
const input_new_club_name_1 = require("./update-club/input-new-club-name");
const input_new_club_city_1 = require("./update-club/input-new-club-city");
const update_club_name_1 = require("./update-club/update-club-name");
const update_club_city_1 = require("./update-club/update-club-city");
const input_member_phone_1 = require("./add-member/input-member-phone");
const add_member_1 = require("./add-member/add-member");
const choose_member_1 = require("./delete-member/choose-member");
const confirm_delete_member_1 = require("./delete-member/confirm-delete-member");
const delete_member_1 = require("./delete-member/delete-member");
const show_members_1 = require("./show-members");
const input_set_name_1 = require("./create-set/input-set-name");
const input_set_goal_1 = require("./create-set/input-set-goal");
const input_set_finish_1 = require("./create-set/input-set-finish");
const create_set_1 = require("./create-set/create-set");
const show_set_1 = require("./show-set");
const finish_set_1 = require("./finish-set");
const input_notify_message_1 = require("./notify/input-notify-message");
const notify_1 = require("./notify/notify");
exports.default = {
    inputClubName: input_club_name_1.default,
    inputClubCity: input_club_city_1.default,
    createClub: create_club_1.default,
    inputNewClubName: input_new_club_name_1.default,
    updateClubName: update_club_name_1.default,
    inputNewClubCity: input_new_club_city_1.default,
    updateClubCity: update_club_city_1.default,
    addMember: add_member_1.default,
    inputMemberPhone: input_member_phone_1.default,
    chooseMember: choose_member_1.default,
    confirmDeleteMember: confirm_delete_member_1.default,
    deleteMember: delete_member_1.default,
    showMembers: show_members_1.default,
    inputSetName: input_set_name_1.default,
    inputSetGoal: input_set_goal_1.default,
    inputSetFinish: input_set_finish_1.default,
    createSet: create_set_1.default,
    showSet: show_set_1.default,
    finishSet: finish_set_1.default,
    inputNotifyMessage: input_notify_message_1.default,
    notify: notify_1.default,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsicmVzb2x2ZXJzL2hhbmRsZXJzL2RpcmVjdG9yL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUVBQTBEO0FBQzFELG1FQUEwRDtBQUMxRCwyREFBbUQ7QUFDbkQsMkVBQWlFO0FBQ2pFLDJFQUFpRTtBQUNqRSxxRUFBNEQ7QUFDNUQscUVBQTREO0FBQzVELHdFQUErRDtBQUMvRCx3REFBZ0Q7QUFDaEQsaUVBQXlEO0FBQ3pELGlGQUF3RTtBQUN4RSxpRUFBeUQ7QUFDekQsaURBQXlDO0FBQ3pDLGdFQUF1RDtBQUN2RCxnRUFBdUQ7QUFDdkQsb0VBQTJEO0FBQzNELHdEQUFnRDtBQUNoRCx5Q0FBaUM7QUFDakMsNkNBQXFDO0FBQ3JDLHdFQUErRDtBQUMvRCw0Q0FBcUM7QUFFckMsa0JBQWU7SUFDYixhQUFhLEVBQWIseUJBQWE7SUFDYixhQUFhLEVBQWIseUJBQWE7SUFDYixVQUFVLEVBQVYscUJBQVU7SUFDVixnQkFBZ0IsRUFBaEIsNkJBQWdCO0lBQ2hCLGNBQWMsRUFBZCwwQkFBYztJQUNkLGdCQUFnQixFQUFoQiw2QkFBZ0I7SUFDaEIsY0FBYyxFQUFkLDBCQUFjO0lBQ2QsU0FBUyxFQUFULG9CQUFTO0lBQ1QsZ0JBQWdCLEVBQWhCLDRCQUFnQjtJQUNoQixZQUFZLEVBQVosdUJBQVk7SUFDWixtQkFBbUIsRUFBbkIsK0JBQW1CO0lBQ25CLFlBQVksRUFBWix1QkFBWTtJQUNaLFdBQVcsRUFBWCxzQkFBVztJQUNYLFlBQVksRUFBWix3QkFBWTtJQUNaLFlBQVksRUFBWix3QkFBWTtJQUNaLGNBQWMsRUFBZCwwQkFBYztJQUNkLFNBQVMsRUFBVCxvQkFBUztJQUNULE9BQU8sRUFBUCxrQkFBTztJQUNQLFNBQVMsRUFBVCxvQkFBUztJQUNULGtCQUFrQixFQUFsQiw4QkFBa0I7SUFDbEIsTUFBTSxFQUFOLGdCQUFNO0NBQ1AsQ0FBQyJ9