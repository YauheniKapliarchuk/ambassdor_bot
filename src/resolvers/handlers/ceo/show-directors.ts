import { Handler } from '../../types';
import { ceoResponse } from '../../responses';

const showDirectors: Handler = async ({ context, model, user }) => {
  const conference = await model.conference(user._id);
  const directors = await model.directors(conference.directorIds);

  return context.reply(
    ceoResponse.showDirectors(
      directors
    )
  );
};

export default showDirectors;
