import config from '../config';

const URL = `${config.BACKEND_URL}/categories`;

async function getAllWithVideos() {
  return await fetch(URL)
    .then(async (response) => {
        const responseJson = await response.json();
        return responseJson;
    });
}


export default {
  getAllWithVideos
}