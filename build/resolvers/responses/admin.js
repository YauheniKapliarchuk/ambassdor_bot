"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action_1 = require("../types/action");
const common_1 = require("./common");
exports.adminUserName = 'Администратор';
// ADMIN
exports.default = common_1.responses({
    // menu
    menuAdmin: ['[МЕНЮ ДЛЯ АДМИНА]', [
            {
                text: 'назначить руководителя',
                callback_data: action_1.Action.appointCeo,
            },
            {
                text: 'список конференций',
                callback_data: action_1.Action.showConferences,
            },
            common_1.logoutButton,
        ]],
    // appoint ceo
    chooseConference(conferences) {
        return [
            'выберите конференцию',
            [
                ...conferences.map(conference => ([{
                        text: conference.name,
                        callback_data: String(conference._id),
                    }])),
                [common_1.cancelButton],
            ],
        ];
    },
    inputCeoPhone: [
        'введите телефон нового руководителя',
        common_1.cancelButton,
    ],
    userIsNotCeo: [
        'пользователь с таким номером не является руководителем',
        common_1.cancelButton,
    ],
    appointCeoSuccess: 'руководитель назначен',
    inviteCeoSuccess: 'приглашение выслано',
    // demote ceo
    demoteCeoSuccess: 'руководитель разжалован',
    // show conferences
    showConferences(conferences) {
        if (!conferences.length) {
            return 'конференции не найдены';
        }
        return 'список конференций:\n' + conferences.map(conference => {
            const getCeo = () => {
                const ceo = conference.ceo;
                if (ceo) {
                    if (ceo.name) {
                        return ceo.name;
                    }
                    else {
                        return 'руководитель приглашен';
                    }
                }
                return 'руководитель не назначен';
            };
            return `${conference.name}: ` + getCeo();
        }).join('\n');
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsicmVzb2x2ZXJzL3Jlc3BvbnNlcy9hZG1pbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLDRDQUF5QztBQUN6QyxxQ0FBaUU7QUFFcEQsUUFBQSxhQUFhLEdBQUcsZUFBZSxDQUFDO0FBRTdDLFFBQVE7QUFDUixrQkFBZSxrQkFBUyxDQUFDO0lBQ3ZCLE9BQU87SUFDUCxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtZQUMvQjtnQkFDRSxJQUFJLEVBQUUsd0JBQXdCO2dCQUM5QixhQUFhLEVBQUUsZUFBTSxDQUFDLFVBQVU7YUFDakM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsb0JBQW9CO2dCQUMxQixhQUFhLEVBQUUsZUFBTSxDQUFDLGVBQWU7YUFDdEM7WUFDRCxxQkFBWTtTQUNiLENBQUM7SUFFRixjQUFjO0lBQ2QsZ0JBQWdCLENBQUMsV0FBeUI7UUFDeEMsT0FBTztZQUNMLHNCQUFzQjtZQUN0QjtnQkFDRSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQW1CLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNuRCxJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUk7d0JBQ3JCLGFBQWEsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztxQkFDdEMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0osQ0FBQyxxQkFBWSxDQUFDO2FBQ2Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNELGFBQWEsRUFBRTtRQUNiLHFDQUFxQztRQUNyQyxxQkFBWTtLQUNiO0lBQ0QsWUFBWSxFQUFFO1FBQ1osd0RBQXdEO1FBQ3hELHFCQUFZO0tBQ2I7SUFDRCxpQkFBaUIsRUFBRSx1QkFBdUI7SUFDMUMsZ0JBQWdCLEVBQUUscUJBQXFCO0lBRXZDLGFBQWE7SUFDYixnQkFBZ0IsRUFBRSx5QkFBeUI7SUFFM0MsbUJBQW1CO0lBQ25CLGVBQWUsQ0FBQyxXQUF3QjtRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUN2QixPQUFPLHdCQUF3QixDQUFDO1NBQ2pDO1FBRUQsT0FBTyx1QkFBdUIsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFTLFVBQVUsQ0FBQyxFQUFFO1lBQ3BFLE1BQU0sTUFBTSxHQUFHLEdBQUcsRUFBRTtnQkFDbEIsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQztnQkFDM0IsSUFBSSxHQUFHLEVBQUU7b0JBQ1AsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO3dCQUNaLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztxQkFDakI7eUJBQU07d0JBQ0wsT0FBTyx3QkFBd0IsQ0FBQztxQkFDakM7aUJBQ0Y7Z0JBQ0QsT0FBTywwQkFBMEIsQ0FBQztZQUNwQyxDQUFDLENBQUM7WUFFRixPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDO0NBQ0YsQ0FBQyxDQUFDIn0=