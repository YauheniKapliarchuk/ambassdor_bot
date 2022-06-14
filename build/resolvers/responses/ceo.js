"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action_1 = require("../types/action");
const common_1 = require("./common");
// CEO
exports.default = common_1.responses({
    // menu
    menuCeo: ['[МЕНЮ ДЛЯ ГЕН.ДИРЕКТОРА]', [
            {
                text: 'назначить директора',
                callback_data: action_1.Action.appointDirector,
            },
            {
                text: 'сменить директора',
                callback_data: action_1.Action.changeDirector,
            },
            {
                text: 'список клубов',
                callback_data: action_1.Action.showDirectors,
            },
            common_1.logoutButton,
        ]],
    // appoint director
    chooseClub(clubs) {
        return [
            'выберите конференцию',
            [
                ...clubs.filter(club => club.name).map(club => ([{
                        text: club.name,
                        callback_data: String(club._id),
                    }])),
                [common_1.cancelButton],
            ],
        ];
    },
    inputDirectorPhone: ['введите телефон нового дирктора', common_1.cancelButton],
    userIsNotDirector: ['пользователь с таким номером не является директором', common_1.cancelButton],
    appointDirectorSuccess: 'директор назначен',
    inviteDirectorSuccess: 'приглашение выслано',
    // show clubs
    showDirectors(directors) {
        if (!directors.length) {
            return 'клубы не найдены';
        }
        return 'список клубов:\n' + directors.map(director => {
            if (director.club) {
                const club = director.club;
                const clubName = club.name;
                const clubCity = club.city;
                const membersCount = club.memberIds.length;
                return `Клуб "${clubName}", ` +
                    `город ${clubCity}, ` +
                    `${membersCount} участников, ` +
                    director.name;
            }
            else {
                return `Клуб не создан, ${director.name}`;
            }
        }).join('\n');
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VvLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInJlc29sdmVycy9yZXNwb25zZXMvY2VvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNENBQXlDO0FBQ3pDLHFDQUFpRTtBQUlqRSxNQUFNO0FBQ04sa0JBQWUsa0JBQVMsQ0FBQztJQUN2QixPQUFPO0lBQ1AsT0FBTyxFQUFFLENBQUMsMEJBQTBCLEVBQUU7WUFDcEM7Z0JBQ0UsSUFBSSxFQUFFLHFCQUFxQjtnQkFDM0IsYUFBYSxFQUFFLGVBQU0sQ0FBQyxlQUFlO2FBQ3RDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLG1CQUFtQjtnQkFDekIsYUFBYSxFQUFFLGVBQU0sQ0FBQyxjQUFjO2FBQ3JDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLGFBQWEsRUFBRSxlQUFNLENBQUMsYUFBYTthQUNwQztZQUNELHFCQUFZO1NBQ2IsQ0FBQztJQUVGLG1CQUFtQjtJQUNuQixVQUFVLENBQUMsS0FBYTtRQUN0QixPQUFPO1lBQ0wsc0JBQXNCO1lBQ3RCO2dCQUNFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQW1CLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNqRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7d0JBQ2YsYUFBYSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO3FCQUNoQyxDQUFDLENBQUMsQ0FBQztnQkFDSixDQUFDLHFCQUFZLENBQUM7YUFDZjtTQUNGLENBQUM7SUFDSixDQUFDO0lBQ0Qsa0JBQWtCLEVBQUUsQ0FBQyxpQ0FBaUMsRUFBRSxxQkFBWSxDQUFDO0lBQ3JFLGlCQUFpQixFQUFFLENBQUMscURBQXFELEVBQUUscUJBQVksQ0FBQztJQUN4RixzQkFBc0IsRUFBRSxtQkFBbUI7SUFDM0MscUJBQXFCLEVBQUUscUJBQXFCO0lBRTVDLGFBQWE7SUFDYixhQUFhLENBQUMsU0FBb0I7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDckIsT0FBTyxrQkFBa0IsQ0FBQztTQUMzQjtRQUVELE9BQU8sa0JBQWtCLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBUyxRQUFRLENBQUMsRUFBRTtZQUMzRCxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQzNCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzNCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzNCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO2dCQUMzQyxPQUFPLFNBQVMsUUFBUSxLQUFLO29CQUMzQixTQUFTLFFBQVEsSUFBSTtvQkFDckIsR0FBRyxZQUFZLGVBQWU7b0JBQzlCLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDakI7aUJBQU07Z0JBQ0wsT0FBTyxtQkFBbUIsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzNDO1FBQ0gsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUM7Q0FDRixDQUFDLENBQUMifQ==