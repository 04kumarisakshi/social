import axios from 'axios';
const  REACT_APP_RAPID_API_KEY =' AIzaSyAoYckhbUKxp4k7IGjq91WgwRIHKa1Vkvc'
const BASE_URL='https://youtube-v31.p.rapidapi.com'


const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    part: 'contentDetails,snippet,statistics',
    id: '7ghhRHRP6t4'
  },
  headers: {
    'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export const featchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
