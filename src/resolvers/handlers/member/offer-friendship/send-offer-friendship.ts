import { ObjectID } from 'mongodb';
import { Handler } from '../../../types';
import { memberResponse, directorResponse } from '../../../responses';
import { UserRole } from '../../../../database/models';

const sendOfferFriendship: Handler = async ({ context, model, user }) => {

  const friendId = new ObjectID(context.text);

  const friend = await model.user({ _id: friendId });

  if (!friend) {
    return context.reply(
      memberResponse.userNotFound
    );
  }

  await model.setFriendship({
    userId: user._id,
    friendId: friend._id,
  });

  if (friend.chatId && user.name) {
    // notify friend
    await context.sendMessage(
      friend.chatId,
      ...memberResponse.offerFriendship(user.name)
    );

    // update friends menu
    if (friend.role === UserRole.director) {
      await context.sendMessage(
        friend.chatId,
        ...directorResponse.menuDirector(
          await model.menuDirectorOptions(friendId)
        )
      );
    } else {
      await context.sendMessage(
        friend.chatId,
        ...memberResponse.menuMember(
          await model.menuMemberOptions(friendId)
        )
      );
    }
  }

  await context.reply(
    memberResponse.offerFriendshipDelivered
  );
  return context.reply(
    ...memberResponse.menuMember(
      await model.menuMemberOptions(user._id)
    )
  );
};

export default sendOfferFriendship;
