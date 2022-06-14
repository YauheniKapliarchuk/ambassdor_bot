import { Handler } from '../../types';
import { memberResponse } from '../../responses';

const leave: Handler = async ({ context, model, user }) => {
  await model.removeMemberFromClub(user._id);
  await model.deleteUser(user._id);
  return context.sendContactButton(...memberResponse.leaved);
};

export default leave;
