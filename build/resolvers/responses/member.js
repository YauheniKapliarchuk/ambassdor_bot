"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
const action_1 = require("../types/action");
// MEMBER
exports.default = common_1.responses({
    // menu
    menuMember(isSetMember, haveFriend) {
        return ['[МЕНЮ ДЛЯ ЧЛЕНА]', [
                isSetMember ? [
                    common_1.setSelfGoalButton,
                    ...haveFriend ? [common_1.showFriendGoalButton] : [{
                            text: 'предложить дружбу',
                            callback_data: action_1.Action.sendOfferFriendship,
                        }],
                ] : [],
                [
                    {
                        text: 'покинуть клуб',
                        callback_data: action_1.Action.confirmLeave,
                    },
                    common_1.logoutButton,
                ],
            ]];
    },
    // set self goal
    goalIsReadonly: 'вы уже поставили цель, изменить нельзя',
    inputSelfGoal: 'введите цель на сет',
    goalCreated: 'цель поставлена',
    // show friend goal
    friendNotFound: 'у вас нет друзей, такие дела',
    friendWithoutGoal: 'ваш друг еще не поставил цель на сет, пните его чтоб поторопился :)',
    showFriendGoal(friend) {
        return friend.name + '\n' + 'Цель на сет: ' + friend.goal;
    },
    // offer friendship
    chooseMember(members) {
        return [
            'кому отправляем?',
            [
                ...members.filter(member => member.id).map(member => ([{
                        text: (member.name || 'новый участник'),
                        callback_data: member.id,
                    }])),
                [common_1.cancelButton],
            ],
        ];
    },
    userNotFound: 'пользователь не найден, попробуйте выполнить команду /start',
    userNotRegistrated: 'этот пользователь еще не зарегистрирован',
    offerFriendshipDelivered: 'предложение доставлено',
    offerFriendship(name) {
        return [`предложение дружбы от пользователя '${name}'`, [
                {
                    text: 'принять',
                    callback_data: action_1.Action.confirmFriendship,
                },
                {
                    text: 'отказаться',
                    callback_data: action_1.Action.refuseFriendship,
                },
            ]];
    },
    // TODO: implement friendship actions
    confirmFriendship: 'Предложение уже было принято автоматически 💪',
    refuseFriendship: 'От такого предложения невозможно отказаться 😎',
    // leave
    confirmLeave: ['самоуничтожиться?', [
            {
                text: 'таки подтверждаю',
                callback_data: action_1.Action.leave,
            },
            common_1.cancelButton,
        ]],
    leaved: 'выход выполнен, для повторной регистрации введите номер телефона',
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInJlc29sdmVycy9yZXNwb25zZXMvbWVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEscUNBTWtCO0FBQ2xCLDRDQUF5QztBQUV6QyxTQUFTO0FBQ1Qsa0JBQWUsa0JBQVMsQ0FBQztJQUN2QixPQUFPO0lBQ1AsVUFBVSxDQUFDLFdBQW9CLEVBQUUsVUFBbUI7UUFDbEQsT0FBTyxDQUFDLGtCQUFrQixFQUFFO2dCQUMxQixXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUNaLDBCQUFpQjtvQkFDakIsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsNkJBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDeEMsSUFBSSxFQUFFLG1CQUFtQjs0QkFDekIsYUFBYSxFQUFFLGVBQU0sQ0FBQyxtQkFBbUI7eUJBQzFDLENBQUM7aUJBQ0gsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDTjtvQkFDRTt3QkFDRSxJQUFJLEVBQUUsZUFBZTt3QkFDckIsYUFBYSxFQUFFLGVBQU0sQ0FBQyxZQUFZO3FCQUNuQztvQkFDRCxxQkFBWTtpQkFDYjthQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsY0FBYyxFQUFFLHdDQUF3QztJQUN4RCxhQUFhLEVBQUUscUJBQXFCO0lBQ3BDLFdBQVcsRUFBRSxpQkFBaUI7SUFFOUIsbUJBQW1CO0lBQ25CLGNBQWMsRUFBRSw4QkFBOEI7SUFDOUMsaUJBQWlCLEVBQUUscUVBQXFFO0lBQ3hGLGNBQWMsQ0FBQyxNQUFxQjtRQUNsQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLGVBQWUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzVELENBQUM7SUFFRCxtQkFBbUI7SUFDbkIsWUFBWSxDQUFDLE9BQThCO1FBQ3pDLE9BQU87WUFDTCxrQkFBa0I7WUFDbEI7Z0JBQ0UsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBbUIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZFLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksZ0JBQWdCLENBQUM7d0JBQ3ZDLGFBQWEsRUFBRSxNQUFNLENBQUMsRUFBRTtxQkFDekIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0osQ0FBQyxxQkFBWSxDQUFDO2FBQ2Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNELFlBQVksRUFBRSw2REFBNkQ7SUFDM0Usa0JBQWtCLEVBQUUsMENBQTBDO0lBQzlELHdCQUF3QixFQUFFLHdCQUF3QjtJQUNsRCxlQUFlLENBQUMsSUFBWTtRQUMxQixPQUFPLENBQUMsdUNBQXVDLElBQUksR0FBRyxFQUFFO2dCQUN0RDtvQkFDRSxJQUFJLEVBQUUsU0FBUztvQkFDZixhQUFhLEVBQUUsZUFBTSxDQUFDLGlCQUFpQjtpQkFDeEM7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFlBQVk7b0JBQ2xCLGFBQWEsRUFBRSxlQUFNLENBQUMsZ0JBQWdCO2lCQUN2QzthQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxxQ0FBcUM7SUFDckMsaUJBQWlCLEVBQUUsK0NBQStDO0lBQ2xFLGdCQUFnQixFQUFFLGdEQUFnRDtJQUVsRSxRQUFRO0lBQ1IsWUFBWSxFQUFFLENBQUMsbUJBQW1CLEVBQUU7WUFDbEM7Z0JBQ0UsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsYUFBYSxFQUFFLGVBQU0sQ0FBQyxLQUFLO2FBQzVCO1lBQ0QscUJBQVk7U0FDYixDQUFDO0lBQ0YsTUFBTSxFQUFFLGtFQUFrRTtDQUMzRSxDQUFDLENBQUMifQ==