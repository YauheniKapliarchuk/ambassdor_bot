import { Handler } from '../../types';
import { adminResponse } from '../../responses';

const showConferences: Handler = async ({ context, model }) => {
  const conferencesInfo = await model.conferencesInfo();

  return context.reply(
    adminResponse.showConferences(conferencesInfo)
  );
};

export default showConferences;
