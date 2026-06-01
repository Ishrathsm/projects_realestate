import axios from "axios";

export const baseUrl = 'https://byut-api1.p.rapidapi.com';

export const fetchApi = async (url) => {
  console.log('Fetching:', url);
  try {
    const { data } = await axios.get((url), {
      headers: {
        'x-rapidapi-host': 'byut-api1.p.rapidapi.com',
        'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
      },
    });
    return data;
  } catch (err) {
    console.error('API Error:', err.response?.status, JSON.stringify(err.response?.data));
    throw err;
  }
}
