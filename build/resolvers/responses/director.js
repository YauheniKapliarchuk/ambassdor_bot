"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const action_1 = require("../types/action");
const common_1 = require("./common");
// DIRECTOR
exports.default = common_1.responses({
    //menu
    menuDirector(clubCreated, setCreated, isSetMember, haveFriend) {
        return ['[МЕНЮ ДЛЯ ДИРЕКТОРА]', [
                ...clubCreated ?
                    [[
                            {
                                text: 'изменить клуб',
                                callback_data: action_1.Action.updateClub,
                            },
                            {
                                text: 'добавить члена',
                                callback_data: action_1.Action.addMembers,
                            },
                            {
                                text: 'убрать члена',
                                callback_data: action_1.Action.deleteMember,
                            },
                            {
                                text: 'список членов',
                                callback_data: action_1.Action.showMembers,
                            },
                        ], [
                            {
                                text: 'создать сет',
                                callback_data: setCreated ?
                                    action_1.Action.confirmCreateSet :
                                    action_1.Action.createSet,
                            },
                            ...setCreated ? [
                                {
                                    text: 'посмотреть сет',
                                    callback_data: action_1.Action.showSet,
                                },
                                {
                                    text: 'завершить сет',
                                    callback_data: action_1.Action.confirmFinishSet,
                                },
                            ] : [],
                            {
                                text: 'оповещение',
                                callback_data: action_1.Action.notify,
                            },
                        ]] :
                    [[
                            {
                                text: 'создать клуб',
                                callback_data: action_1.Action.createClub,
                            },
                        ]],
                isSetMember ? [
                    common_1.setSelfGoalButton,
                    ...haveFriend ? [
                        common_1.showFriendGoalButton
                    ] : [],
                ] : [],
                [common_1.logoutButton],
            ]];
    },
    // create/update club
    clubNotCreated: 'клуб не создан',
    inputClubName: 'введите название клуба',
    inputClubCity: 'введите город',
    clubCreated: 'клуб создан',
    updateClub: ['что изменяем?', [
            {
                text: 'название',
                callback_data: action_1.Action.updateClubName,
            },
            {
                text: 'город',
                callback_data: action_1.Action.updateClubCity,
            },
        ]],
    clubUpdated: 'иформация клуба изменена',
    // add member
    inputMemberPhone: 'введите телефон нового пользователя',
    userExists: 'пользователь с таким телефоном уже есть в системе',
    memberInvited: 'приглашение отправлено',
    // delete member
    chooseMember(club) {
        return [
            'кого удаляем?',
            [
                ...club.members.map(member => ([{
                        text: (member.name || 'новый участник') + ` (${member.phone})`,
                        callback_data: String(member._id),
                    }])),
                [common_1.cancelButton],
            ],
        ];
    },
    confirmDeleteMember: [
        'подтвердите удаление',
        [
            {
                text: 'подтверждаю',
                callback_data: action_1.Action.confirmDeleteMember,
            },
            common_1.cancelButton,
        ],
    ],
    memberDeleted: 'участник исключен',
    // show members
    showMembers(club) {
        if (!club.members) {
            return 'клуб пустой';
        }
        return club.members.map(member => {
            const name = member.name ? member.name : 'новый участник';
            return `${name} (${member.phone})`;
        }).join('\n');
    },
    // create set
    setNotCreated: 'сет не создан',
    confirmCreateSet: ['пересоздать сет? старый удалится!', [
            {
                text: 'да',
                callback_data: action_1.Action.createSet,
            },
            common_1.cancelButton,
        ]],
    inputSetName: 'введите название сета',
    inputSetGoal: 'введите цель на сет',
    inputSetFinish: 'введите дату окончания сета (дд.мм.гггг)',
    wrongDateFinishFormat: 'неправильная дата',
    overdueDateFinishFormat: 'просроченная дата',
    setCreated: 'сет создан',
    // show set
    showSet(set) {
        return set.name + '\n' +
            'Цель на сет: ' + set.goal + '\n' +
            'Дата завершения: ' + moment(set.finish).format('DD.MM.YYYY');
    },
    // finish set
    confirmFinishSet: ['завершить сет? вся информация по не!', [
            {
                text: 'да',
                callback_data: action_1.Action.finishSet,
            },
            common_1.cancelButton,
        ]],
    setFinished: 'сет завершен',
    // notify
    inputNotifyMessage: 'введите сообщение',
    notifySuccess: 'оповещение разослано',
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0b3IuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsicmVzb2x2ZXJzL3Jlc3BvbnNlcy9kaXJlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGlDQUFpQztBQUVqQyw0Q0FBeUM7QUFDekMscUNBTWtCO0FBSWxCLFdBQVc7QUFDWCxrQkFBZSxrQkFBUyxDQUFDO0lBQ3ZCLE1BQU07SUFDTixZQUFZLENBQUMsV0FBb0IsRUFBRSxVQUFtQixFQUFFLFdBQW9CLEVBQUUsVUFBbUI7UUFDL0YsT0FBTyxDQUFDLHNCQUFzQixFQUFFO2dCQUM5QixHQUFHLFdBQVcsQ0FBQyxDQUFDO29CQUNkLENBQUM7NEJBQ0M7Z0NBQ0UsSUFBSSxFQUFFLGVBQWU7Z0NBQ3JCLGFBQWEsRUFBRSxlQUFNLENBQUMsVUFBVTs2QkFDakM7NEJBQ0Q7Z0NBQ0UsSUFBSSxFQUFFLGdCQUFnQjtnQ0FDdEIsYUFBYSxFQUFFLGVBQU0sQ0FBQyxVQUFVOzZCQUNqQzs0QkFDRDtnQ0FDRSxJQUFJLEVBQUUsY0FBYztnQ0FDcEIsYUFBYSxFQUFFLGVBQU0sQ0FBQyxZQUFZOzZCQUNuQzs0QkFDRDtnQ0FDRSxJQUFJLEVBQUUsZUFBZTtnQ0FDckIsYUFBYSxFQUFFLGVBQU0sQ0FBQyxXQUFXOzZCQUNsQzt5QkFDRixFQUFFOzRCQUNEO2dDQUNFLElBQUksRUFBRSxhQUFhO2dDQUNuQixhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7b0NBQ3pCLGVBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29DQUN6QixlQUFNLENBQUMsU0FBUzs2QkFDbkI7NEJBQ0QsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dDQUNkO29DQUNFLElBQUksRUFBRSxnQkFBZ0I7b0NBQ3RCLGFBQWEsRUFBRSxlQUFNLENBQUMsT0FBTztpQ0FDOUI7Z0NBQ0Q7b0NBQ0UsSUFBSSxFQUFFLGVBQWU7b0NBQ3JCLGFBQWEsRUFBRSxlQUFNLENBQUMsZ0JBQWdCO2lDQUN2Qzs2QkFDRixD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