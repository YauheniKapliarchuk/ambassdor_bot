"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action_1 = require("../types/action");
exports.responses = (responses) => responses;
exports.cancelButton = {
    text: 'отмена',
    callback_data: action_1.Action.cancel,
};
exports.setSelfGoalButton = {
    text: 'поставить цели на сет',
    callback_data: action_1.Action.setSelfGoal,
};
exports.showFriendGoalButton = {
    text: 'посмотреть цели друга',
    callback_data: action_1.Action.showFriendGoal,
};
// TODO: remove test logout button
exports.logoutButton = {
    text: 'logout',
    callback_data: action_1.Action.logout,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInJlc29sdmVycy9yZXNwb25zZXMvY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNENBQXlDO0FBVzVCLFFBQUEsU0FBUyxHQUFHLENBQXNCLFNBQVksRUFBSyxFQUFFLENBQUMsU0FBUyxDQUFDO0FBRWhFLFFBQUEsWUFBWSxHQUFtQjtJQUMxQyxJQUFJLEVBQUUsUUFBUTtJQUNkLGFBQWEsRUFBRSxlQUFNLENBQUMsTUFBTTtDQUM3QixDQUFDO0FBRVcsUUFBQSxpQkFBaUIsR0FBbUI7SUFDL0MsSUFBSSxFQUFFLHVCQUF1QjtJQUM3QixhQUFhLEVBQUUsZUFBTSxDQUFDLFdBQVc7Q0FDbEMsQ0FBQztBQUVXLFFBQUEsb0JBQW9CLEdBQW1CO0lBQ2xELElBQUksRUFBRSx1QkFBdUI7SUFDN0IsYUFBYSxFQUFFLGVBQU0sQ0FBQyxjQUFjO0NBQ3JDLENBQUM7QUFFRixrQ0FBa0M7QUFDckIsUUFBQSxZQUFZLEdBQW1CO0lBQzFDLElBQUksRUFBRSxRQUFRO0lBQ2QsYUFBYSxFQUFFLGVBQU0sQ0FBQyxNQUFNO0NBQzdCLENBQUMifQ==