import config from '../config';

const URL = `${config.BACKEND_URL}/videos`;

function create(video) {
  return fetch(`${URL}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
  })
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      }

      throw new Error('Não foi possível cadastrar os dados :(');
    });
}

export default {
  create,
};